import { ALL_CURRENCIES } from "./countries";

export type FxRates = {
  USD: number;
  JOD: number;
  SAR: number;
  AED: number;
  EGP: number;
  fetched_at: string;
  source: string;
  [code: string]: number | string;
};

const PRIMARY = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json";
const FALLBACK = "https://latest.currency-api.pages.dev/v1/currencies/usd.json";

// Used only when both feeds fail. Set 2026-10-19 from currency-api (SYP in new pounds).
const FALLBACK_RATES: Record<string, number> = {
  USD: 1,
  AED: 3.672,
  ARS: 1511,
  AUD: 1.434,
  BHD: 0.376,
  BRL: 5.066,
  CAD: 1.412,
  CHF: 0.8242,
  CNY: 6.683,
  COP: 3177,
  DKK: 6.657,
  DZD: 134,
  EGP: 53.41,
  EUR: 0.8905,
  GBP: 0.7504,
  HKD: 7.848,
  HUF: 323,
  IDR: 18036,
  ILS: 3.099,
  INR: 94.82,
  IQD: 1520,
  JOD: 0.709,
  JPY: 158,
  KRW: 1332,
  KWD: 0.3105,
  LBP: 89919,
  LYD: 6.439,
  MAD: 9.745,
  MKD: 54.91,
  MMK: 2099,
  MOP: 8.083,
  MXN: 18.45,
  MYR: 4.082,
  NGN: 1333,
  NOK: 9.424,
  NZD: 1.768,
  PHP: 63.07,
  PKR: 278,
  QAR: 3.64,
  RSD: 105,
  RUB: 84.23,
  SAR: 3.75,
  SEK: 9.909,
  SGD: 1.279,
  SYP: 130,
  THB: 33.53,
  TND: 2.996,
  TRY: 49.54,
  TWD: 32.51,
  VND: 25900,
  ZAR: 16.46,
};

async function tryFetch(
  url: string,
): Promise<{ rates: Record<string, number>; date?: string } | null> {
  try {
    const r = await fetch(url, {
      next: { revalidate: 21600 },
      signal: AbortSignal.timeout(2500),
    });
    if (!r.ok) return null;
    const data = (await r.json()) as { date?: string; usd?: Record<string, number> };
    if (!data?.usd) return null;
    return { rates: data.usd, date: data.date };
  } catch {
    return null;
  }
}

export async function fetchFxRates(): Promise<FxRates> {
  const data = (await tryFetch(PRIMARY)) ?? (await tryFetch(FALLBACK));

  const out: Record<string, number> = { USD: 1 };
  for (const cur of ALL_CURRENCIES) {
    const apiVal = data?.rates?.[cur.toLowerCase()];
    if (typeof apiVal === "number" && Number.isFinite(apiVal)) {
      // Syria swapped 100 old pounds for 1 new pound on 2026-01-01; the feed
      // still quotes old pounds (~13,000/$). Rebase until it switches.
      out[cur] = cur === "SYP" && apiVal > 1000 ? apiVal / 100 : apiVal;
    } else {
      out[cur] = FALLBACK_RATES[cur] ?? 1;
    }
  }

  return {
    ...out,
    USD: 1,
    JOD: out.JOD ?? FALLBACK_RATES.JOD,
    SAR: out.SAR ?? FALLBACK_RATES.SAR,
    AED: out.AED ?? FALLBACK_RATES.AED,
    EGP: out.EGP ?? FALLBACK_RATES.EGP,
    fetched_at: data?.date ? new Date(data.date).toISOString() : new Date().toISOString(),
    source: data ? "fawazahmed0/currency-api" : "fallback-static",
  } as FxRates;
}
