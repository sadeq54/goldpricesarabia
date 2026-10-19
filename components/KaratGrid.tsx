"use client";

import { useLocale, useTranslations } from "next-intl";

import { useLivePrice } from "@/components/LivePriceProvider";
import { KaratGridSkeleton } from "@/components/skeletons";
import { isRtl } from "@/i18n/routing";
import type { GoldApiResponse } from "@/lib/goldapi";
import type { FxRates } from "@/lib/fx";

const KARATS = [
  { key: "24K", field: "price_gram_24k" as const, purityNum: 1.0 },
  { key: "22K", field: "price_gram_22k" as const, purityNum: 0.9167 },
  { key: "21K", field: "price_gram_21k" as const, purityNum: 0.875 },
  { key: "18K", field: "price_gram_18k" as const, purityNum: 0.75 },
  { key: "14K", field: "price_gram_14k" as const, purityNum: 0.583 },
];

const OZ_TO_GRAM = 31.1034768;

const SYMBOL: Record<string, string> = {
  USD: "$",
  EUR: "€",
  GBP: "£",
  JPY: "¥",
  CNY: "¥",
  JOD: "JD ",
  SAR: "SR ",
  AED: "AED ",
  EGP: "EGP ",
};
const symFor = (c: string) => SYMBOL[c] ?? `${c} `;

/** Final formatted price (the old CountUp tween from 0 is gone; SSR shows the value). */
const money = (n: number, sym: string) =>
  `${sym}${(Number.isFinite(n) ? n : 0).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

export function KaratGrid({
  spot,
  fx,
  displayCurrency = "USD",
}: {
  spot: GoldApiResponse | null;
  fx: FxRates;
  displayCurrency?: string;
}) {
  const t = useTranslations("KaratGrid");
  const locale = useLocale();
  const live = useLivePrice();
  if (!spot) {
    return (
      <section aria-labelledby="karat-heading">
        <div className="mb-3 flex items-end justify-between">
          <h2 id="karat-heading" className="text-xl font-semibold text-[var(--color-text)]">
            {t("heading")}
          </h2>
          <span className="text-[10px] uppercase tracking-wider text-[var(--color-text-dim)]">
            {t("currencies")}
          </span>
        </div>
        <KaratGridSkeleton />
      </section>
    );
  }

  const ccy = displayCurrency;
  const ccyRate = (fx[ccy] as number | undefined) ?? 1;
  const ccySym = symFor(ccy);

  const altCandidates = ["USD", "JOD", "SAR", "AED", "EGP", "EUR", "GBP"];
  const fxList: Array<[string, number]> = altCandidates
    .filter((c) => c !== ccy)
    .slice(0, 4)
    .map((c) => [c, (fx[c] as number | undefined) ?? 1]);

  return (
    <section aria-labelledby="karat-heading">
      <div className="mb-3 flex items-end justify-between">
        <h2 id="karat-heading" className="text-xl font-semibold text-[var(--color-text)]">
          {t("heading")}
        </h2>
        <span className="text-[10px] uppercase tracking-wider text-[var(--color-text-dim)]">
          {t("currencies")}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-5">
        {KARATS.map((k) => {
          // Derive per-gram from live XAU when streaming, else fallback to SSR snapshot.
          const liveOzUsd = live.xau ?? spot.price;
          const usd =
            live.xau !== null
              ? (liveOzUsd / OZ_TO_GRAM) * k.purityNum
              : spot[k.field];
          const oz = usd * OZ_TO_GRAM;
          const local = usd * ccyRate;
          const localOz = oz * ccyRate;
          const liveCh = live.change24 ?? spot.ch;
          const ch = liveCh * k.purityNum;
          const up = ch >= 0;
          const trend = up ? "var(--color-up)" : "var(--color-down)";

          // Hover lift, glow and badge tilt were motion whileHover springs;
          // plain CSS transitions on hover do the same with no JS.
          return (
            <div
              key={k.key}
              className="hover-gold-card-strong group relative min-w-0 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 transition-transform duration-300 motion-safe:hover:-translate-y-1"
            >
              <div
                aria-hidden
                className="absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-30 blur-2xl transition-opacity duration-300 group-hover:opacity-[0.55]"
                style={{ background: "radial-gradient(circle, var(--color-gold) 0%, transparent 70%)" }}
              />

              {/* Cards render ~170px wide at xl (5 across beside the sidebar), so
                  every row below is built to hold at that width: fixed-size
                  badge, title on its own row, unit glued to the price, change
                  chip beside the ounce line, one currency per row. */}
              <div className="flex items-center gap-2.5">
                <div
                  aria-hidden
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-extrabold leading-none text-black transition-transform duration-300 motion-safe:hover:-rotate-6 motion-safe:hover:scale-[1.08]"
                  style={{
                    background: `linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-soft) ${k.purityNum * 100}%, #4a3a12 100%)`,
                  }}
                >
                  {k.key.replace("K", "")}
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold leading-tight text-[var(--color-text)]">
                    {/* Arabic-script locales word the karat ("عيار 21" / "21 قیراط"), so the K is dropped. */}
                    {t("karatGold", { karat: isRtl(locale) ? k.key.replace("K", "") : k.key })}
                  </div>
                  <div className="mt-0.5 text-[10px] leading-tight text-[var(--color-text-dim)]">
                    {t(`purity.${k.key}` as `purity.24K`)}
                  </div>
                </div>
              </div>

              <div className="num mt-3 flex flex-wrap items-baseline gap-x-1 font-mono text-lg font-bold leading-none tracking-tight text-[var(--color-text)]">
                <span>{money(local, ccySym)}</span>
                <span className="whitespace-nowrap text-[11px] font-normal text-[var(--color-text-dim)]">
                  {t("perGramShort")}
                </span>
              </div>
              <div className="mt-1.5 flex flex-wrap items-center justify-between gap-x-2 gap-y-1 text-[11px] text-[var(--color-text-muted)]">
                <span className="num whitespace-nowrap font-mono">
                  {money(localOz, ccySym)}
                  <span className="ms-0.5 text-[var(--color-text-dim)]">{t("perTroyOz")}</span>
                </span>
                <span
                  className="num rounded px-1.5 py-0.5 font-mono text-[10px] font-semibold leading-none"
                  style={{ color: trend, background: `${trend}1a` }}
                  title="24h"
                >
                  {up ? "+" : ""}
                  {ch.toFixed(2)}
                </span>
              </div>

              <dl className="mt-3 space-y-1 border-t border-[var(--color-border)] pt-2.5 text-[11px]">
                {fxList.map(([cur, rate]) => (
                  <div key={cur} className="flex items-baseline justify-between gap-2">
                    <dt className="font-medium text-[var(--color-text-dim)]">{cur}</dt>
                    <dd className="num whitespace-nowrap font-mono text-[var(--color-text-muted)]">
                      {(usd * rate).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          );
        })}
      </div>
    </section>
  );
}
