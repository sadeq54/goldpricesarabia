export type GoldApiResponse = {
  timestamp: number;
  metal: string;
  currency: string;
  exchange: string;
  symbol: string;
  prev_close_price: number;
  open_price: number;
  low_price: number;
  high_price: number;
  open_time: number;
  price: number;
  ch: number;
  chp: number;
  ask: number;
  bid: number;
  price_gram_24k: number;
  price_gram_22k: number;
  price_gram_21k: number;
  price_gram_20k: number;
  price_gram_18k: number;
  price_gram_16k: number;
  price_gram_14k: number;
  price_gram_10k: number;
};

export type MetalsBundle = {
  XAU: GoldApiResponse | null;
  XAG: GoldApiResponse | null;
  XPT: GoldApiResponse | null;
  XPD: GoldApiResponse | null;
};

export const METAL_META: Record<string, { name: string; nameAr: string; tint: string; symbol: string }> = {
  XAU: { name: "Gold", nameAr: "ذهب", tint: "#e2b54e", symbol: "Au" },
  XAG: { name: "Silver", nameAr: "فضة", tint: "#c0c0c0", symbol: "Ag" },
  XPT: { name: "Platinum", nameAr: "بلاتين", tint: "#a8c0d8", symbol: "Pt" },
  XPD: { name: "Palladium", nameAr: "بالاديوم", tint: "#7ec4ae", symbol: "Pd" },
};

const OZ_TO_GRAM = 31.1034768;

const PURITY = {
  k24: 1.0,
  k22: 0.917,
  k21: 0.875,
  k20: 0.833,
  k18: 0.75,
  k16: 0.667,
  k14: 0.583,
  k10: 0.417,
};

type Metal = "XAU" | "XAG" | "XPT" | "XPD";

/**
 * Server-side spot prices.
 *
 *  - Price + bid/ask: Swissquote's public spot quote feed (real spot, ~0.4 s).
 *  - Daily change, open, day range: the matching COMEX future on Yahoo Finance.
 *    Futures trade a little above spot (the basis), so their change is taken as
 *    a ratio and their range is rescaled onto the spot price — never shown raw.
 *
 * Stooq was the source until it stopped answering at all (measured
 * 2026-10-15: no response from production or locally). Every page then fell
 * through to the hard-coded fallback below and showed $4,530 while gold traded
 * near $4,156 — 9% wrong in titles, tables, schema and the Instagram data —
 * and pages calling this uncached waited out the 2.5 s timeout on every request.
 */
const SWISSQUOTE = (m: Metal) =>
  `https://forex-data-feed.swissquote.com/public-quotes/bboquotes/instrument/${m}/USD`;
const COMEX_FUTURE: Record<Metal, string> = { XAU: "GC=F", XAG: "SI=F", XPT: "PL=F", XPD: "PA=F" };
const YAHOO_SESSION = (m: Metal) =>
  `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(COMEX_FUTURE[m])}?range=1d&interval=1d`;

// Last resort when BOTH sources fail: a price in HTML instead of "$0.00".
// It is a stale constant, so it is labelled as such (`exchange: "REFERENCE"`)
// and carries no daily change. Refresh it when the price drifts a lot.
// Set 2026-10-15 from Swissquote.
const FALLBACK_USD_OZ: Record<Metal, number> = {
  XAU: 4155,
  XAG: 57,
  XPT: 1620,
  XPD: 1120,
};

type SpotQuote = { bid: number; ask: number; ts: number };
/** One trading session of the COMEX future: current price and its day. */
type FuturesSession = { price: number; prev: number; open: number; high: number; low: number };

const positive = (n: unknown): n is number => typeof n === "number" && Number.isFinite(n) && n > 0;

async function fetchSpotQuote(metal: Metal): Promise<SpotQuote | null> {
  try {
    const r = await fetch(SWISSQUOTE(metal), {
      next: { revalidate: 60 },
      headers: { "User-Agent": "Mozilla/5.0 GoldPricesArabia/1.0" },
      signal: AbortSignal.timeout(2500),
    });
    if (!r.ok) return null;
    const data = (await r.json()) as Array<{
      ts?: number;
      spreadProfilePrices: Array<{ bid: number; ask: number; spreadProfile: string }>;
    }>;
    for (const layer of data) {
      const profiles = layer.spreadProfilePrices ?? [];
      const p = profiles.find((s) => s.spreadProfile === "standard") ?? profiles[0];
      if (p && positive(p.bid) && positive(p.ask) && p.bid <= p.ask) {
        const ts = positive(layer.ts) ? Math.floor(layer.ts / 1000) : Math.floor(Date.now() / 1000);
        return { bid: p.bid, ask: p.ask, ts };
      }
    }
    return null;
  } catch {
    return null;
  }
}

async function fetchFuturesSession(metal: Metal): Promise<FuturesSession | null> {
  try {
    const r = await fetch(YAHOO_SESSION(metal), {
      next: { revalidate: 120 },
      headers: { "User-Agent": "Mozilla/5.0 (compatible; GoldPricesArabiaBot/1.0)", Accept: "application/json" },
      signal: AbortSignal.timeout(2500),
    });
    if (!r.ok) return null;
    const data = (await r.json()) as {
      chart?: {
        result?: Array<{
          meta?: Record<string, unknown>;
          indicators?: { quote?: Array<{ open?: (number | null)[] }> };
        }> | null;
      };
    };
    const result = data.chart?.result?.[0];
    const meta = result?.meta ?? {};
    const price = meta.regularMarketPrice;
    const prev = meta.chartPreviousClose;
    if (!positive(price) || !positive(prev)) return null;
    const opens = result?.indicators?.quote?.[0]?.open ?? [];
    const open = [...opens].reverse().find(positive) ?? prev;
    const high = positive(meta.regularMarketDayHigh) ? meta.regularMarketDayHigh : price;
    const low = positive(meta.regularMarketDayLow) ? meta.regularMarketDayLow : price;
    return { price, prev, open, high, low };
  } catch {
    return null;
  }
}

function buildFallback(metal: Metal): GoldApiResponse {
  const price = FALLBACK_USD_OZ[metal];
  return buildResponse(metal, price, Math.floor(Date.now() / 1000), null, null, "REFERENCE");
}

/**
 * `price` is the spot mid. A futures session, when present, contributes the
 * day's change (as a ratio) and range (rescaled by spot/futures), so the basis
 * between the two never leaks into the numbers.
 */
function buildResponse(
  metal: Metal,
  price: number,
  ts: number,
  quote: SpotQuote | null,
  session: FuturesSession | null,
  exchange: string,
): GoldApiResponse {
  const grams = price / OZ_TO_GRAM;
  const fallbackSpread = price * 0.0005;
  const bid = quote?.bid ?? price - fallbackSpread;
  const ask = quote?.ask ?? price + fallbackSpread;

  const scale = session ? price / session.price : 1;
  const prev = session ? price / (session.price / session.prev) : price;
  const open = session ? session.open * scale : price;
  const high = session ? Math.max(session.high * scale, price) : price;
  const low = session ? Math.min(session.low * scale, price) : price;

  return {
    timestamp: ts,
    metal,
    currency: "USD",
    exchange,
    symbol: `${exchange}:${metal}USD`,
    prev_close_price: +prev.toFixed(4),
    open_price: +open.toFixed(4),
    low_price: +low.toFixed(4),
    high_price: +high.toFixed(4),
    open_time: ts,
    price: +price.toFixed(4),
    ch: +(price - prev).toFixed(4),
    chp: +(((price - prev) / prev) * 100).toFixed(4),
    ask,
    bid,
    price_gram_24k: +(grams * PURITY.k24).toFixed(4),
    price_gram_22k: +(grams * PURITY.k22).toFixed(4),
    price_gram_21k: +(grams * PURITY.k21).toFixed(4),
    price_gram_20k: +(grams * PURITY.k20).toFixed(4),
    price_gram_18k: +(grams * PURITY.k18).toFixed(4),
    price_gram_16k: +(grams * PURITY.k16).toFixed(4),
    price_gram_14k: +(grams * PURITY.k14).toFixed(4),
    price_gram_10k: +(grams * PURITY.k10).toFixed(4),
  };
}

/**
 * Spot first; if Swissquote is down, the COMEX future stands in (within the
 * basis, well under 1%) — far closer than the constant, which is used only
 * when both are unreachable.
 */
export async function fetchSpot(metal: Metal = "XAU"): Promise<GoldApiResponse | null> {
  const [quote, session] = await Promise.all([fetchSpotQuote(metal), fetchFuturesSession(metal)]);
  if (quote) return buildResponse(metal, (quote.bid + quote.ask) / 2, quote.ts, quote, session, "SWISSQUOTE");
  if (session) return buildResponse(metal, session.price, Math.floor(Date.now() / 1000), null, session, "COMEX");
  return buildFallback(metal);
}

export async function fetchMetals(): Promise<MetalsBundle> {
  const [XAU, XAG, XPT, XPD] = await Promise.all(
    (["XAU", "XAG", "XPT", "XPD"] as const).map((m) => fetchSpot(m)),
  );
  return { XAU, XAG, XPT, XPD };
}

export async function fetchHistoricalDay(_metal: string, _date: string) {
  return null;
}
