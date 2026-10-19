import { Suspense } from "react";
import type React from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { AdSensePlacement } from "@/components/AdSensePlacement";
import { BidAskGauge } from "@/components/BidAskGauge";
import { Calculator } from "@/components/Calculator";
import { CurrencyTable } from "@/components/CurrencyTable";
import { DebugConsole } from "@/components/DebugConsole";
import { Faq } from "@/components/Faq";
import { Flag } from "@/components/Flag";
import { Header } from "@/components/Header";
import { HeroBoard } from "@/components/HeroBoard";
import { HomepageSeoHeader } from "@/components/HomepageSeoHeader";
import { JsonLd } from "@/components/JsonLd";
import { LazyMount } from "@/components/LazyMount";
import { MetalsStrip } from "@/components/MetalsStrip";
import { PriceChart } from "@/components/PriceChart";
import { ResearchTeaser } from "@/components/ResearchTeaser";
import { Sidebar } from "@/components/Sidebar";
import { FollowCta } from "@/components/FollowCta";
// Renders only a button until tapped; tv.js loads on demand.
import { TradingViewChart } from "@/components/TradingViewChart";
import {
  BidAskGaugeSkeleton,
  CalculatorSkeleton,
  PriceChartSkeleton,
} from "@/components/skeletons";
import { Link } from "@/i18n/navigation";
import {
  getCachedAllHistory,
  getCachedFxRates,
  getCachedMetals,
  getCachedResearch,
} from "@/lib/cached-fetchers";
import type { ResearchDigest } from "@/lib/research";
import type { FxRates } from "@/lib/fx";
import type { MetalsBundle } from "@/lib/goldapi";
import { chartHistory, type MetalHistory } from "@/lib/history";
import { pick } from "@/lib/i18n-text";
import { hasCountryPage } from "@/lib/karat-pages";
import { buildAlternates, buildOpenGraph, SITE_URL } from "@/lib/metadata";

import { homeText } from "./page.i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Page" });
  return {
    title: t("title"), description: t("description"),
    alternates: buildAlternates(locale, "/"),
    openGraph: buildOpenGraph(locale, "/"),
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// Streaming sections — each awaits its own promise, falls back to a skeleton
// while data resolves. Same fetch URL across sections is deduped by Next cache.
// ─────────────────────────────────────────────────────────────────────────────

async function HeroBoardSection({ promise }: { promise: Promise<MetalsBundle> }) {
  const m = await promise;
  return <HeroBoard initialSpot={m.XAU} />;
}

async function CurrencyTableSection({
  mPromise,
  fxPromise,
  locale,
}: {
  mPromise: Promise<MetalsBundle>;
  fxPromise: Promise<FxRates>;
  locale: string;
}) {
  const [m, fx] = await Promise.all([mPromise, fxPromise]);
  return <CurrencyTable spot={m.XAU} fx={fx} locale={locale} />;
}

async function ResearchTeaserSection({
  promise,
  locale,
}: {
  promise: Promise<ResearchDigest>;
  locale: string;
}) {
  const digest = await promise;
  return <ResearchTeaser digest={digest} locale={locale} />;
}

async function MetalsStripSection({ promise }: { promise: Promise<MetalsBundle> }) {
  const m = await promise;
  return <MetalsStrip metals={m} />;
}

async function PriceChartSection({
  hPromise,
  fxPromise,
}: {
  hPromise: Promise<MetalHistory>;
  fxPromise: Promise<FxRates>;
}) {
  const [h, fx] = await Promise.all([hPromise, fxPromise]);
  return <PriceChart histories={chartHistory(h)} fx={fx} />;
}

async function BidAskSection({ promise }: { promise: Promise<MetalsBundle> }) {
  const m = await promise;
  return <BidAskGauge spot={m.XAU} />;
}


async function CalculatorSection({
  mPromise,
  fxPromise,
}: {
  mPromise: Promise<MetalsBundle>;
  fxPromise: Promise<FxRates>;
}) {
  const [m, fx] = await Promise.all([mPromise, fxPromise]);
  const spot = m.XAU;
  const calcSpot = spot
    ? {
        price_gram_24k: spot.price_gram_24k,
        price_gram_21k: spot.price_gram_21k,
        price_gram_18k: spot.price_gram_18k,
        price_gram_14k: spot.price_gram_14k,
      }
    : { price_gram_24k: 0, price_gram_21k: 0, price_gram_18k: 0, price_gram_14k: 0 };
  return <Calculator spot={calcSpot} fx={fx} />;
}

async function MetaSection({
  mPromise,
  fxPromise,
}: {
  mPromise: Promise<MetalsBundle>;
  fxPromise: Promise<FxRates>;
}) {
  const [m, fx] = await Promise.all([mPromise, fxPromise]);
  return (
    <>
      <JsonLd spot={m.XAU} siteUrl={SITE_URL} pageOnly />
      <DebugConsole spot={m.XAU} metals={m} fx={fx} />
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Page");
  const h = homeText(locale);

  // Kick off fetches in parallel; share promises with Suspense children.
  // Cached wrappers ("use cache" + cacheLife) let Next prerender the shell
  // and reuse data across requests via ISR — critical on serverless where
  // raw fetch() caches don't persist across lambda instances.
  const metalsPromise = getCachedMetals();
  const fxPromise = getCachedFxRates();
  const historyPromise = getCachedAllHistory("1y");
  const researchPromise = getCachedResearch();


  const countries = [
    { slug: "jordan", c: t("country.jordan"), cc: "JO", url: "/jordan/gold-price/21k", note: t("country.jordanNote") },
    { slug: "saudi-arabia", c: t("country.saudi"), cc: "SA", url: "/saudi-arabia/gold-price/21k", note: t("country.saudiNote") },
    { slug: "uae", c: t("country.uae"), cc: "AE", url: "/uae/gold-price/21k", note: t("country.uaeNote") },
    { slug: "egypt", c: t("country.egypt"), cc: "EG", url: "/egypt/gold-price/21k", note: t("country.egyptNote") },
  ].filter((x) => hasCountryPage(locale, x.slug));
  const allCountries = pick(locale, {
    en: "All countries",
    ar: "كل الدول",
    tr: "Tüm ülkeler",
    hi: "सभी देश",
  });

  return (
    <>
      <Suspense fallback={null}>
        <MetaSection mPromise={metalsPromise} fxPromise={fxPromise} />
      </Suspense>
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_320px] lg:gap-8">
          <section className="min-w-0 space-y-8">
            <HomepageSeoHeader locale={locale} part="intro" />

            {/* Inline (data is "use cache"): a Suspense boundary here streamed the
                board in later and pushed the country list down (CLS 0.28). */}
            <HeroBoardSection promise={metalsPromise} />

            {/* Country chooser, right under the live price. This replaces the
                old automatic IP-based redirect (GeoRedirect), which loaded the
                whole homepage, sent the visitor's IP to ipapi.co, then loaded
                the country page as well. One tap, no lookup, normal links. */}
            <section aria-labelledby="countries-heading">
              <h2 id="countries-heading" className="text-xl font-semibold text-[var(--color-text)]">
                {t("countriesH2")}
              </h2>
              <div className="mt-3 grid grid-cols-2 gap-3">
                {countries.map((row) => (
                  <Link
                    key={row.url}
                    href={row.url}
                    className="flex min-h-11 flex-col justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-3 transition hover:border-[var(--color-gold)]/40 sm:p-4"
                  >
                    <span className="flex items-center gap-2 text-sm font-semibold text-[var(--color-gold)]">
                      <Flag cc={row.cc} size={14} alt="" />
                      {row.c}
                    </span>
                    <span className="mt-1 hidden text-xs text-[var(--color-text-muted)] sm:block">{row.note}</span>
                  </Link>
                ))}
              </div>
              <Link
                href="/gold-price"
                className="mt-3 inline-flex min-h-11 items-center text-sm font-medium text-[var(--color-gold)] hover:underline"
              >
                {allCountries}
              </Link>
            </section>

            <MetalsStripSection promise={metalsPromise} />

            <LazyMount minHeight={400} fallback={<PriceChartSkeleton />}>
              <Suspense fallback={<PriceChartSkeleton />}>
                <PriceChartSection hPromise={historyPromise} fxPromise={fxPromise} />
              </Suspense>
            </LazyMount>

            <TradingViewChart />

            <LazyMount minHeight={200} fallback={<BidAskGaugeSkeleton />}>
              <Suspense fallback={<BidAskGaugeSkeleton />}>
                <BidAskSection promise={metalsPromise} />
              </Suspense>
            </LazyMount>

            <CurrencyTableSection mPromise={metalsPromise} fxPromise={fxPromise} locale={locale} />

            <AdSensePlacement name="inContent" />

            <LazyMount minHeight={400} fallback={<CalculatorSkeleton />}>
              <Suspense fallback={<CalculatorSkeleton />}>
                <CalculatorSection mPromise={metalsPromise} fxPromise={fxPromise} />
              </Suspense>
            </LazyMount>

            <ResearchTeaserSection promise={researchPromise} locale={locale} />

            <HomepageSeoHeader locale={locale} part="content" />

            <section aria-labelledby="about-heading">
              <h2 id="about-heading" className="text-xl font-semibold text-[var(--color-text)]">
                {t("aboutH2")}
              </h2>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
                <p>
                  {t.rich("aboutP1", {
                    b: (chunks) => <strong className="text-[var(--color-text)]">{chunks}</strong>,
                    ar: (chunks) => (
                      <span lang={locale === "ar" ? "en" : "ar"} className="text-[var(--color-gold)]">
                        {chunks}
                      </span>
                    ),
                  })}
                </p>
                <p>{t("aboutP2")}</p>
              </div>
            </section>

            <section
              aria-labelledby="how-it-works-heading"
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5"
            >
              <h2
                id="how-it-works-heading"
                className="text-xl font-semibold text-[var(--color-text)]"
              >
                {h.howH2}
              </h2>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
                <p>{h.howP1}</p>
                <p>{h.howP2}</p>
                <p>{h.howP3}</p>
              </div>
            </section>

            <section aria-labelledby="why-trust-heading">
              <h2
                id="why-trust-heading"
                className="text-xl font-semibold text-[var(--color-text)]"
              >
                {h.trustH2}
              </h2>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                {h.trustBullets.map((b) => (
                  <li key={b.label}>
                    <strong className="text-[var(--color-text)]">{b.label}</strong>
                    {b.text}
                  </li>
                ))}
              </ul>
            </section>

            {/* The reader has their answer; give them a reason to come back
                daily rather than re-search each morning. */}
            <FollowCta locale={locale} />

            <Faq />

            <section
              aria-labelledby="sources-heading"
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5"
            >
              <h2
                id="sources-heading"
                className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text-dim)]"
              >
                {h.sourcesH2}
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-[var(--color-text-muted)]">
                {h.sourcesP}
              </p>
              <ul className="mt-3 grid gap-1.5 text-xs sm:grid-cols-2 lg:grid-cols-3">
                <li>
                  <a
                    href="https://www.lbma.org.uk/prices-and-data/precious-metal-prices"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-gold)] hover:underline"
                  >
                    LBMA — London Bullion Market Association ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.gold.org/goldhub/data/gold-prices"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-gold)] hover:underline"
                  >
                    World Gold Council ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://paxos.com/paxg/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-gold)] hover:underline"
                  >
                    Paxos — PAXG Trust ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.cmegroup.com/markets/metals/precious/gold.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-gold)] hover:underline"
                  >
                    COMEX Gold Futures (CME) ↗
                  </a>
                </li>
                <li>
                  <Link
                    href="/shanghai-gold-exchange"
                    className="text-[var(--color-gold)] hover:underline"
                  >
                    Shanghai Gold Exchange
                  </Link>
                </li>
              </ul>
            </section>
          </section>

          <LazyMount minHeight={300} className="hidden lg:block">
            <Sidebar />
          </LazyMount>
        </div>
      </main>

    </>
  );
}
