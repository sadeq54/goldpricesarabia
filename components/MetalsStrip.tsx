"use client";

import { useLocale, useTranslations } from "next-intl";

import { useLivePrice } from "@/components/LivePriceProvider";
import type { MetalsBundle } from "@/lib/goldapi";
import { METAL_META } from "@/lib/goldapi";

const METAL_KEY: Record<string, "gold" | "silver" | "platinum" | "palladium"> = {
  XAU: "gold",
  XAG: "silver",
  XPT: "platinum",
  XPD: "palladium",
};

/** Final formatted price (the old CountUp tween from 0 is gone; SSR shows the value). */
const usd = (n: number) =>
  `$${(Number.isFinite(n) ? n : 0).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

export function MetalsStrip({ metals }: { metals: MetalsBundle }) {
  const t = useTranslations("MetalsStrip");
  const locale = useLocale();
  const live = useLivePrice();
  const cards = (["XAU", "XAG", "XPT", "XPD"] as const).map((m) => {
    const base = metals[m];
    if (m !== "XAU" || !base || live.xau === null) return { key: m, data: base };
    // Overlay live XAU values onto card.
    return {
      key: m,
      data: {
        ...base,
        price: live.xau,
        ch: live.change24 ?? base.ch,
        chp: live.changePct24 ?? base.chp,
      },
    };
  });

  return (
    <section aria-labelledby="metals-heading">
      <h2
        id="metals-heading"
        className="mb-3 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-dim)]"
      >
        {t("heading")}
      </h2>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {cards.map(({ key, data }) => {
          const meta = METAL_META[key];
          const up = (data?.ch ?? 0) >= 0;
          const trendColor = up ? "var(--color-up)" : "var(--color-down)";
          const localizedName = t(METAL_KEY[key]);

          // Hover lift was a motion whileHover; `.hover-gold-card` now
          // transitions `translate`, so a Tailwind hover class does it in CSS.
          return (
            <div
              key={key}
              className="hover-gold-card rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 motion-safe:hover:-translate-y-[3px]"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span
                      className="flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold text-black"
                      style={{ background: meta.tint }}
                    >
                      {meta.symbol}
                    </span>
                    <span className="text-sm font-semibold text-[var(--color-text)]">{localizedName}</span>
                  </div>
                  {locale !== "ar" && (
                    <div className="mt-0.5 text-[10px] text-[var(--color-text-dim)]" lang="ar">
                      {meta.nameAr}
                    </div>
                  )}
                </div>
              </div>

              {data ? (
                <>
                  <div className="mt-3 font-mono text-xl font-bold text-[var(--color-text)]">
                    {usd(data.price)}
                  </div>
                  <div
                    className="mt-1 inline-block rounded px-1.5 py-0.5 font-mono text-[11px] font-semibold"
                    style={{ color: trendColor, background: `${trendColor}1a` }}
                  >
                    {up ? "+" : ""}
                    {data.chp.toFixed(2)}%
                  </div>
                </>
              ) : (
                <div className="mt-3 text-xs text-[var(--color-text-dim)]">{t("unavailable")}</div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
