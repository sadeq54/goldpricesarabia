import { BidAskGauge } from "@/components/BidAskGauge";
import { Calculator } from "@/components/Calculator";
import { KaratPriceHero } from "@/components/KaratPriceHero";
import { PriceTable } from "@/components/PriceTable";
import { RecentPricesTable } from "@/components/RecentPricesTable";
import type { FxRates } from "@/lib/fx";
import type { GoldApiResponse } from "@/lib/goldapi";
import type { MetalHistory } from "@/lib/history";

/**
 * Streaming sections for the country × karat page. Each awaits its own
 * promises inside the page's Suspense boundaries so the static shell streams
 * first and every block fills in independently.
 *
 * The karat cards, the 15-currency table and the interactive 4-metal chart
 * were removed from this page on 2026-10-15: each repeated prices already in
 * the karat table (the same numbers appeared four times on one page) and the
 * page ran to 13 phone screens.
 */

/** Units of `currency` per USD, or null when the rate is missing or invalid. */
function rateFor(fx: FxRates, currency: string): number | null {
  if (currency === "USD") return 1;
  const r = fx[currency];
  return typeof r === "number" && Number.isFinite(r) && r > 0 ? r : null;
}

export async function KaratHeroSection({
  promise,
  fxPromise,
  currency,
  karat,
  locale,
}: {
  promise: Promise<GoldApiResponse | null>;
  fxPromise: Promise<FxRates>;
  currency: string;
  karat: string;
  locale: string;
}) {
  const [s, fx] = await Promise.all([promise, fxPromise]);
  return <KaratPriceHero spot={s} rate={rateFor(fx, currency)} currency={currency} karat={karat} locale={locale} />;
}

export async function PriceTableSection({
  promise,
  fxPromise,
  currency,
  locale,
  countryName: cName,
  slug,
  karat,
}: {
  promise: Promise<GoldApiResponse | null>;
  fxPromise: Promise<FxRates>;
  currency: string;
  locale: string;
  countryName: string;
  slug: string;
  karat: string;
}) {
  const [s, fx] = await Promise.all([promise, fxPromise]);
  return (
    <PriceTable
      spot={s}
      fx={fx}
      currency={currency}
      locale={locale}
      countryName={cName}
      slug={slug}
      highlightKarat={karat}
    />
  );
}

export async function RecentPricesSection({
  hPromise,
  fxPromise,
  currency,
  locale,
  karat,
  countryName: cName,
}: {
  hPromise: Promise<MetalHistory>;
  fxPromise: Promise<FxRates>;
  currency: string;
  locale: string;
  karat: string;
  countryName: string;
}) {
  const [h, fx] = await Promise.all([hPromise, fxPromise]);
  return (
    <RecentPricesTable
      history={h.XAU}
      fx={fx}
      currency={currency}
      locale={locale}
      karat={karat}
      countryName={cName}
    />
  );
}

export async function BidAskSection({
  promise,
  fxPromise,
  displayCurrency,
}: {
  promise: Promise<GoldApiResponse | null>;
  fxPromise: Promise<FxRates>;
  displayCurrency: string;
}) {
  const [s, fx] = await Promise.all([promise, fxPromise]);
  return <BidAskGauge spot={s} fx={fx} displayCurrency={displayCurrency} />;
}

export async function CalculatorSection({
  sPromise,
  fxPromise,
  defaultCurrency,
  defaultKarat,
}: {
  sPromise: Promise<GoldApiResponse | null>;
  fxPromise: Promise<FxRates>;
  defaultCurrency: string;
  defaultKarat: "price_gram_24k" | "price_gram_21k" | "price_gram_18k" | "price_gram_14k";
}) {
  const [s, fx] = await Promise.all([sPromise, fxPromise]);
  const calcSpot = s
    ? {
        price_gram_24k: s.price_gram_24k,
        price_gram_22k: s.price_gram_22k,
        price_gram_21k: s.price_gram_21k,
        price_gram_18k: s.price_gram_18k,
        price_gram_14k: s.price_gram_14k,
      }
    : { price_gram_24k: 0, price_gram_22k: 0, price_gram_21k: 0, price_gram_18k: 0, price_gram_14k: 0 };
  return (
    <Calculator
      spot={calcSpot}
      fx={fx}
      defaultCurrency={defaultCurrency}
      defaultKarat={defaultKarat}
    />
  );
}
