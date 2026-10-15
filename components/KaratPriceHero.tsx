"use client";

import { useLivePrice } from "@/components/LivePriceProvider";
import { pick } from "@/lib/i18n-text";
import { karatLabel } from "@/lib/karat-label";
import { currencyName, fmtNum, karatDef, OZ_G, spotDate, timeLabelUtc } from "@/lib/seo";
import type { GoldApiResponse } from "@/lib/goldapi";

import { tableText } from "./tables.i18n";

/**
 * The answer first: the page's karat, per gram, in the page's currency.
 *
 * Measured 2026-10-15 on a 412px phone: the biggest number on the first screen
 * was the 24K *ounce* price, and the 21K per-gram price a shopper searched for
 * sat in the third table row, below the fold. This block puts that one number
 * at the top, with today's change, buy/sell and the "before making charges"
 * caveat a jewellery buyer needs.
 *
 * The server render carries the real figure (crawlers and LCP see it); live
 * exchange ticks then move it, at most once a second (LivePriceProvider).
 * Change is measured against the previous close, so the number stays "today's
 * change" when the live feed takes over.
 */
export function KaratPriceHero({
  spot,
  rate,
  currency,
  karat,
  locale,
  alt,
}: {
  spot: GoldApiResponse | null;
  /** Units of `currency` per USD; 1 for USD. */
  rate: number | null;
  currency: string;
  karat: string;
  locale: string;
  /** Second currency the local trade quotes in (Country.alsoQuoted), units per USD. */
  alt?: { currency: string; rate: number } | null;
}) {
  const live = useLivePrice();
  const def = karatDef(karat);
  if (!spot || !def || !rate || !(spot.price > 0)) return null;

  // Server snapshot per gram, exactly as the karat table computes it, then
  // scaled by how far the live ounce has moved from that snapshot.
  const baseGram = (spot[def.field] > 0 ? spot[def.field] : (spot.price / OZ_G) * def.purity) * rate;
  const perOz = baseGram / spot.price;
  const ounce = live.xau ?? spot.price;
  const gram = ounce * perOz;
  const prevGram = spot.prev_close_price > 0 ? spot.prev_close_price * perOz : null;
  const change = prevGram ? gram - prevGram : null;
  const changePct = prevGram ? ((gram - prevGram) / prevGram) * 100 : null;
  const bid = (live.bid ?? spot.bid) * perOz;
  const ask = (live.ask ?? spot.ask) * perOz;
  const frac = gram > 500 ? 0 : 2;
  const up = (change ?? 0) >= 0;
  const when = spotDate(spot);
  const cur = currencyName(currency, locale);

  const kicker = pick(locale, {
    en: `${karatLabel(locale, def.label)} gold, per gram`,
    ar: `جرام الذهب ${karatLabel(locale, def.label)}`,
    tr: `${karatLabel(locale, def.label)} altın, gram fiyatı`,
    hi: `${karatLabel(locale, def.label)} सोना, प्रति ग्राम`,
  });
  const sinceClose = pick(locale, {
    en: "since yesterday's close",
    ar: "منذ إغلاق أمس",
    tr: "dünkü kapanıştan beri",
    hi: "कल के बंद भाव से",
  });
  const beforeCharges = pick(locale, {
    en: "Spot price before making charges and tax",
    ar: "السعر الفوري قبل المصنعية والضريبة",
    tr: "İşçilik ve vergi öncesi spot fiyat",
    hi: "मेकिंग चार्ज और टैक्स से पहले का स्पॉट भाव",
  });
  const liveLabel = pick(locale, { en: "Live", ar: "مباشر", tr: "Canlı", hi: "लाइव" });
  const perGram = pick(locale, { en: "/ gram", ar: "/ جرام", tr: "/ gram", hi: "/ ग्राम" });

  return (
    <section
      aria-labelledby="karat-price-heading"
      className="hero-spot-bg card-shadow rounded-2xl border border-[var(--color-border)] p-5 sm:p-6"
    >
      <div className="flex items-center justify-between gap-3">
        <h2 id="karat-price-heading" className="text-sm font-semibold text-[var(--color-text-muted)]">
          {kicker}
        </h2>
        {/* Fixed-height slot: the live badge replaces the time without shifting layout. */}
        <span className="flex h-6 items-center text-xs text-[var(--color-text-dim)]">
          {live.isLive ? (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-up)]/40 bg-[var(--color-up)]/10 px-2 py-0.5 font-semibold text-[var(--color-up)]">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[var(--color-up)] motion-safe:animate-pulse" />
              {liveLabel}
            </span>
          ) : when ? (
            <time dateTime={when.toISOString()}>
              {tableText(locale, "updated")} {timeLabelUtc(when)}
            </time>
          ) : null}
        </span>
      </div>

      <p className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span
          dir="ltr"
          className="num font-mono text-5xl font-bold tracking-tight text-[var(--color-gold)] sm:text-6xl"
        >
          {fmtNum(gram, frac)}
        </span>
        <span className="text-base text-[var(--color-text-muted)]">
          {cur} {perGram}
        </span>
      </p>

      {alt ? (
        <p className="mt-1 text-lg text-[var(--color-text)]">
          <span className="text-[var(--color-text-dim)]">≈ </span>
          <bdi dir="ltr" className="num font-mono font-semibold">
            {fmtNum((gram / rate) * alt.rate, 2)}
          </bdi>{" "}
          <span className="text-base text-[var(--color-text-muted)]">
            {currencyName(alt.currency, locale)} {perGram}
          </span>
        </p>
      ) : null}

      {change !== null && changePct !== null ? (
        <p className="mt-2 text-sm">
          <span
            dir="ltr"
            className="num inline-flex items-center gap-1 rounded-md px-2 py-0.5 font-mono font-semibold"
            style={{ color: up ? "var(--color-up)" : "var(--color-down)", background: up ? "color-mix(in srgb, var(--color-up) 12%, transparent)" : "color-mix(in srgb, var(--color-down) 12%, transparent)" }}
          >
            <span aria-hidden>{up ? "▲" : "▼"}</span>
            {up ? "+" : "-"}
            {fmtNum(Math.abs(change), frac)} ({up ? "+" : "-"}
            {Math.abs(changePct).toFixed(2)}%)
          </span>
          <span className="ms-2 text-[var(--color-text-dim)]">{sinceClose}</span>
        </p>
      ) : null}

      <p className="mt-2 text-xs text-[var(--color-text-dim)]">{beforeCharges}</p>

      <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-[var(--color-border)] pt-4 text-sm">
        <div>
          <dt className="text-xs text-[var(--color-text-dim)]">{tableText(locale, "bid")}</dt>
          <dd className="num mt-0.5 font-mono font-semibold text-[var(--color-text)]">
            <bdi dir="ltr">{fmtNum(bid, frac)}</bdi>
          </dd>
        </div>
        <div>
          <dt className="text-xs text-[var(--color-text-dim)]">{tableText(locale, "ask")}</dt>
          <dd className="num mt-0.5 font-mono font-semibold text-[var(--color-text)]">
            <bdi dir="ltr">{fmtNum(ask, frac)}</bdi>
          </dd>
        </div>
        <div>
          <dt className="text-xs text-[var(--color-text-dim)]">
            {tableText(locale, "ounce")} {karatLabel(locale, def.label)}
          </dt>
          <dd className="num mt-0.5 font-mono font-semibold text-[var(--color-text)]">
            <bdi dir="ltr">{fmtNum(gram * OZ_G, 0)}</bdi>
          </dd>
        </div>
      </dl>
    </section>
  );
}
