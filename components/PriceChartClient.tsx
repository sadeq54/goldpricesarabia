"use client";

import { useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";

import { localeMeta } from "@/i18n/routing";
import { pick, type LocaleText } from "@/lib/i18n-text";
import { currencyName } from "@/lib/seo";

import { LuxurySelect } from "@/components/LuxurySelect";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { ALL_CURRENCIES } from "@/lib/countries";
import type { FxRates } from "@/lib/fx";
import type { ChartHistory, ChartPoint } from "@/lib/history";

type Metal = "XAU" | "XAG" | "XPT" | "XPD";
type Currency = string;
type Unit = "oz" | "g" | "kg";
type Period = "30D" | "60D" | "90D" | "180D" | "1Y";

// Localized labels: the Arabic heading used to read "سعر Gold لـ 60D بـ SAR/oz"
// (English words and codes inside Arabic text, flagged in the 2026-10-15 audit).
const METALS: Array<{ id: Metal; label: LocaleText }> = [
  { id: "XAU", label: { en: "Gold", ar: "الذهب", tr: "altın", hi: "सोने" } },
  { id: "XAG", label: { en: "Silver", ar: "الفضة", tr: "gümüş", hi: "चांदी" } },
  { id: "XPT", label: { en: "Platinum", ar: "البلاتين", tr: "platin", hi: "प्लैटिनम" } },
  { id: "XPD", label: { en: "Palladium", ar: "البلاديوم", tr: "paladyum", hi: "पैलेडियम" } },
];

const PERIOD_LABEL: Record<Period, LocaleText> = {
  "30D": { en: "30 days", ar: "30 يومًا", tr: "30 gün", hi: "30 दिनों" },
  "60D": { en: "60 days", ar: "60 يومًا", tr: "60 gün", hi: "60 दिनों" },
  "90D": { en: "90 days", ar: "90 يومًا", tr: "90 gün", hi: "90 दिनों" },
  "180D": { en: "180 days", ar: "180 يومًا", tr: "180 gün", hi: "180 दिनों" },
  "1Y": { en: "1 year", ar: "سنة", tr: "1 yıl", hi: "1 साल" },
};

const UNIT_NAME: Record<Unit, LocaleText> = {
  oz: { en: "ounce", ar: "أونصة", tr: "ons", hi: "औंस" },
  g: { en: "gram", ar: "جرام", tr: "gram", hi: "ग्राम" },
  kg: { en: "kilogram", ar: "كيلوغرام", tr: "kilogram", hi: "किलो" },
};

const CURRENCIES: Currency[] = ["USD", ...ALL_CURRENCIES.filter((c) => c !== "USD")].sort();

const UNIT_FACTOR: Record<Unit, number> = {
  oz: 1,
  g: 1 / 31.1034768,
  kg: 1000 / 31.1034768,
};

const UNIT_LABEL: Record<Unit, string> = {
  oz: "oz",
  g: "g",
  kg: "kg",
};

const PERIODS: Array<{ id: Period; days: number }> = [
  { id: "30D", days: 22 },
  { id: "60D", days: 44 },
  { id: "90D", days: 66 },
  { id: "180D", days: 132 },
  { id: "1Y", days: 260 },
];

const CURRENCY_SYMBOL: Record<string, string> = {
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

function symbolFor(c: string): string {
  return CURRENCY_SYMBOL[c] ?? `${c} `;
}

export function PriceChartClient({
  histories,
  fx,
  initialMetal = "XAU",
  defaultCurrency = "USD",
}: {
  histories: ChartHistory;
  fx: FxRates;
  initialMetal?: Metal;
  defaultCurrency?: Currency;
}) {
  const t = useTranslations("PriceChart");
  const locale = useLocale();
  const intl = localeMeta(locale).intl;
  const [metal, setMetal] = useState<Metal>(initialMetal);
  const [currency, setCurrency] = useState<Currency>(defaultCurrency);
  const [unit, setUnit] = useState<Unit>("oz");
  const [period, setPeriod] = useState<Period>("60D");

  const points: ChartPoint[] = histories[metal] ?? [];

  const data = useMemo(() => {
    if (!points.length) return [];
    const days = PERIODS.find((p) => p.id === period)?.days ?? 60;
    const sliced = points.slice(-days);
    const fxRate = (fx[currency] as number | undefined) ?? 1;
    const factor = UNIT_FACTOR[unit];
    return sliced.map((p) => ({
      date: p.date,
      value: +(p.close * fxRate * factor).toFixed(unit === "oz" ? 2 : 4),
    }));
  }, [points, period, currency, unit, fx]);

  const stats = useMemo(() => {
    if (data.length < 2) return null;
    const first = data[0].value;
    const last = data[data.length - 1].value;
    const ch = last - first;
    const chp = (ch / first) * 100;
    const min = Math.min(...data.map((p) => p.value));
    const max = Math.max(...data.map((p) => p.value));
    return { ch, chp, min, max, last, first };
  }, [data]);

  const symbol = symbolFor(currency);
  const metalDef = METALS.find((m) => m.id === metal);
  const metalLabel = metalDef ? pick(locale, metalDef.label) : metal;
  const up = (stats?.ch ?? 0) >= 0;
  const trendColor = up ? "var(--color-up)" : "var(--color-down)";

  // Pass CSS var() directly to Recharts. Browser resolves the value live —
  // when theme class flips, paint updates with no React re-render. Avoids
  // a re-render mid-View-Transition that would cause a visible blink.
  const chartColors = {
    line: "var(--color-gold)",
    grid: "var(--color-grid)",
    tooltipBg: "var(--color-tooltip-bg)",
    axis: "var(--color-axis)",
    border: "var(--color-border)",
  };
  const lineColor = chartColors.line;
  const formatPrice = (v: number) => {
    if (!Number.isFinite(v)) return "—";
    return `${symbol}${v.toLocaleString("en-US", {
      minimumFractionDigits: unit === "oz" ? 2 : 3,
      maximumFractionDigits: unit === "oz" ? 2 : 4,
    })}`;
  };

  return (
    <section
      aria-labelledby="chart-heading"
      className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5"
    >
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 id="chart-heading" className="text-base font-semibold text-[var(--color-text)]">
            {t("titleDynamic", {
              period: pick(locale, PERIOD_LABEL[period]),
              metal: metalLabel,
              currency: currencyName(currency, locale),
              unit: pick(locale, UNIT_NAME[unit]),
            })}
          </h2>
          {stats ? (
            <div className="mt-1 flex items-center gap-3 text-xs">
              <span className="font-mono text-lg font-bold text-[var(--color-text)]">
                {formatPrice(stats.last)}
              </span>
              <span
                className="rounded px-1.5 py-0.5 font-mono font-semibold"
                style={{ color: trendColor, background: `${trendColor}1a` }}
              >
                {up ? "▲" : "▼"} {up ? "+" : ""}{stats.chp.toFixed(2)}%
              </span>
              <span className="text-[var(--color-text-dim)]">
                {t("rangeStats", {
                  low: formatPrice(stats.min),
                  high: formatPrice(stats.max),
                })}
              </span>
            </div>
          ) : null}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-4">
        <Selector
          label={t("metal")}
          value={metal}
          onChange={(v) => setMetal(v as Metal)}
          options={METALS.map((m) => ({ value: m.id, label: pick(locale, m.label), hint: m.id }))}
        />
        <Selector
          label={t("currency")}
          value={currency}
          onChange={(v) => setCurrency(v as Currency)}
          options={CURRENCIES.map((c) => ({ value: c, label: c }))}
        />
        <Selector
          label={t("unit")}
          value={unit}
          onChange={(v) => setUnit(v as Unit)}
          options={(Object.keys(UNIT_LABEL) as Unit[]).map((u) => ({ value: u, label: pick(locale, UNIT_NAME[u]) }))}
        />
        <Selector
          label={t("period")}
          value={period}
          onChange={(v) => setPeriod(v as Period)}
          options={PERIODS.map((p) => ({ value: p.id, label: pick(locale, PERIOD_LABEL[p.id]) }))}
        />
      </div>

      <div className="relative mt-5" style={{ width: "100%", height: 360 }}>
        {data.length === 0 ? (
          <div className="skeleton h-full w-full rounded-lg" aria-label={t("unavailable")} />
        ) : (
          <>
            <ResponsiveContainer width="100%" height={360}>
              <LineChart data={data} margin={{ top: 10, right: 16, left: 0, bottom: 0 }}>
                <CartesianGrid stroke={chartColors.grid} strokeDasharray="3 3" vertical={false} />
                <XAxis
                  dataKey="date"
                  tick={{ fontSize: 10, fill: chartColors.axis }}
                  axisLine={{ stroke: chartColors.grid }}
                  tickLine={false}
                  tickFormatter={(v: string) => {
                    const d = new Date(v);
                    return d.toLocaleDateString(intl, { month: "short", day: "numeric" });
                  }}
                  minTickGap={48}
                />
                <YAxis
                  tick={{ fontSize: 10, fill: chartColors.axis }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v: number) => {
                    if (Math.abs(v) >= 1000) return `${symbol}${(v / 1000).toFixed(1)}k`;
                    return `${symbol}${v.toFixed(unit === "oz" ? 0 : 2)}`;
                  }}
                  domain={["dataMin - dataMin*0.005", "dataMax + dataMax*0.005"]}
                  width={60}
                />
                <Tooltip
                  contentStyle={{
                    background: chartColors.tooltipBg,
                    border: `1px solid ${chartColors.border}`,
                    borderRadius: 8,
                    fontSize: 12,
                  }}
                  labelStyle={{ color: chartColors.axis }}
                  itemStyle={{ color: lineColor }}
                  formatter={(v) => {
                    const n = typeof v === "number" ? v : Number(v);
                    return [formatPrice(n), t("close")];
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke={lineColor}
                  strokeWidth={2}
                  dot={false}
                  isAnimationActive={false}
                  activeDot={{ r: 4, fill: lineColor, stroke: chartColors.tooltipBg, strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
            <span
              aria-hidden
              className="pointer-events-none absolute bottom-3 right-4 text-[10px] tracking-wide text-[var(--color-text-dim)]"
            >
              goldpricesarabia.com
            </span>
          </>
        )}
      </div>

      <p className="mt-3 text-[10px] text-[var(--color-text-dim)]">{t("source")}</p>
    </section>
  );
}

function Selector({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: Array<{ value: string; label: string; hint?: string }>;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-[var(--color-text-dim)]">
        {label}
      </span>
      <LuxurySelect value={value} onChange={onChange} options={options} ariaLabel={label} />
    </label>
  );
}
