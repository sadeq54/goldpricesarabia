"use client";

import { useTranslations } from "next-intl";

import { useLivePrice } from "@/components/LivePriceProvider";
import { BidAskGaugeSkeleton } from "@/components/skeletons";
import type { FxRates } from "@/lib/fx";
import type { GoldApiResponse } from "@/lib/goldapi";

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

export function BidAskGauge({
  spot,
  displayCurrency,
  fx,
}: {
  spot: GoldApiResponse | null;
  displayCurrency?: string;
  fx?: FxRates;
}) {
  const t = useTranslations("BidAskGauge");
  const live = useLivePrice();

  if (!spot) return <BidAskGaugeSkeleton />;

  const useLocal = Boolean(displayCurrency && displayCurrency !== "USD" && fx);
  const rate = useLocal ? (fx?.[displayCurrency!] as number) ?? 1 : 1;
  const ccy = useLocal ? (displayCurrency as string) : "USD";
  const symbol = SYMBOL[ccy] ?? `${ccy} `;

  const liveLow = live.low24 ?? spot.low_price;
  const liveHigh = live.high24 ?? spot.high_price;
  const liveXau = live.xau ?? spot.price;
  const liveBid = live.bid ?? spot.bid;
  const liveAsk = live.ask ?? spot.ask;

  const lo = liveLow * rate;
  const hi = liveHigh * rate;
  const px = liveXau * rate;
  const bid = liveBid * rate;
  const ask = liveAsk * rate;

  const range = hi - lo;
  const pos = range > 0 ? ((px - lo) / range) * 100 : 50;
  const bidPos = range > 0 ? ((bid - lo) / range) * 100 : 50;
  const askPos = range > 0 ? ((ask - lo) / range) * 100 : 50;
  const left = Math.max(0, Math.min(100, pos));
  const bandLeft = Math.min(bidPos, askPos);
  const bandWidth = Math.abs(askPos - bidPos);

  const fmt = (n: number) =>
    n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-[var(--color-text)]">{t("heading")}</h3>
        <span className="text-[10px] uppercase tracking-wider text-[var(--color-text-dim)]">
          XAU/{ccy}
        </span>
      </div>

      <div className="mt-5 flex items-center justify-between text-[11px] text-[var(--color-text-dim)]">
        <span>{t("low", { value: `${symbol}${fmt(lo)}` })}</span>
        <span>{t("high", { value: `${symbol}${fmt(hi)}` })}</span>
      </div>

      {/* Band and marker sit at their live position from the server HTML on;
          a CSS transition on left/width (was a motion spring) glides them when
          a tick moves the price inside the day's range. */}
      <div className="relative mt-2 h-2 rounded-full bg-[var(--color-border)]">
        <div
          className="absolute inset-y-0 rounded-full motion-safe:transition-[left,width] motion-safe:duration-300"
          style={{
            left: `${bandLeft}%`,
            width: `${bandWidth}%`,
            opacity: 0.3,
            background: "linear-gradient(90deg, var(--color-up), var(--color-gold), var(--color-down))",
          }}
        />
        <div
          className="absolute -top-1 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-[var(--color-bg-card)] motion-safe:transition-[left] motion-safe:duration-300"
          style={{
            left: `${left}%`,
            background: "var(--color-gold)",
            boxShadow: "0 0 12px color-mix(in srgb, var(--color-gold) 60%, transparent)",
          }}
        />
      </div>

      <div className="mt-3 grid grid-cols-3 gap-3 text-xs">
        <Stat label={t("bid")} value={`${symbol}${fmt(bid)}`} color="var(--color-up)" />
        <Stat label={t("mid")} value={`${symbol}${fmt(px)}`} color="var(--color-gold)" />
        <Stat label={t("ask")} value={`${symbol}${fmt(ask)}`} color="var(--color-down)" />
      </div>
      <div className="mt-2 text-center text-[11px] text-[var(--color-text-dim)]">
        {t("spread")}{" "}
        <span className="font-mono text-[var(--color-text-muted)]">
          {symbol}
          {(ask - bid).toFixed(3)}
        </span>
      </div>
    </div>
  );
}

function Stat({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="rounded-md border border-[var(--color-border)] bg-[var(--color-bg-card-hover)] p-2 text-center">
      <div className="text-[9px] uppercase tracking-wider text-[var(--color-text-dim)]">{label}</div>
      <div className="mt-0.5 font-mono text-sm font-semibold" style={{ color }}>
        {value}
      </div>
    </div>
  );
}
