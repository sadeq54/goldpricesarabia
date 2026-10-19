import { Suspense } from "react";
import { withLocales } from "@/lib/static-params";
import { notFound, permanentRedirect } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

import { AdSensePlacement } from "@/components/AdSensePlacement";
import { FollowCta } from "@/components/FollowCta";
import { CountryGoldPriceHeader } from "@/components/CountryGoldPriceHeader";
import { countryPageText } from "@/components/CountryGoldPriceHeader.i18n";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ChartImage } from "@/components/ChartImage";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { KaratGuide } from "@/components/KaratGuide";
import { KaratSwitcher } from "@/components/KaratSwitcher";
import { RelatedLinks } from "@/components/RelatedLinks";
import { Sidebar } from "@/components/Sidebar";
import { TradingViewChart } from "@/components/TradingViewChart";
import {
  BidAskGaugeSkeleton,
  CalculatorSkeleton,
} from "@/components/skeletons";
import {
  COUNTRIES,
  COUNTRY_BY_SLUG,
  countryName,
  relatedCountries,
} from "@/lib/countries";
import type { FxRates } from "@/lib/fx";
import type { GoldApiResponse } from "@/lib/goldapi";
import { buildAlternates, buildOpenGraph, canonicalPath, SITE_URL } from "@/lib/metadata";
import { countryKaratHref, countryKarats, hasCountryKaratPage } from "@/lib/karat-pages";
import { faqPageSchema } from "@/lib/schemas";
import { getCachedAllHistory, getCachedFxRates, getCachedSpot } from "@/lib/cached-fetchers";
import { gramUsd, priceDescription, priceTitle, spotDate } from "@/lib/seo";

import {
  KaratHeroSection,
  PriceTableSection,
  RecentPricesSection,
  BidAskSection,
  CalculatorSection,
} from "./sections";
import {
  countryKaratFaqs,
  homeLabel,
  inCurrency,
  karatCrumb,
  nearbyText,
  relatedPageLinks,
} from "./country-karat.i18n";

const VALID_KARATS = ["24k", "22k", "21k", "18k", "14k"] as const;
type Karat = (typeof VALID_KARATS)[number];

export async function generateStaticParams() {
  const params: { country: string; karat: string }[] = [];
  for (const c of COUNTRIES) {
    for (const k of VALID_KARATS) {
      params.push({ country: c.slug, karat: k });
    }
  }
  return withLocales(params).filter((p) => hasCountryKaratPage(p.locale, p.country, p.karat));
}

/** Per-gram price in the country's second quoted currency, for the meta description. */
function altGram(
  spot: GoldApiResponse | null,
  fx: FxRates,
  karat: string,
  currency: string | undefined,
): { currency: string; gram: number } | undefined {
  const r = currency ? fx[currency] : undefined;
  if (!spot || !currency || typeof r !== "number" || !Number.isFinite(r) || r <= 0) return undefined;
  return { currency, gram: gramUsd(spot, karat) * r };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; country: string; karat: string }>;
}) {
  const { locale, country: slug, karat } = await params;
  const country = COUNTRY_BY_SLUG[slug];
  if (!country) return {};

  const upper = karat.toUpperCase();
  const name = countryName(country, locale);

  // Query-leading title with the live per-gram price + today's date (the
  // pattern every top-ranking Arabic gold page uses). Cached fetchers keep
  // this cheap (5-min revalidate); falls back to a static title on failure.
  const [spot, fx] = await Promise.all([getCachedSpot("XAU"), getCachedFxRates()]);
  const rawRate = country.currency === "USD" ? 1 : (fx[country.currency] as number | undefined);
  const useLocal = typeof rawRate === "number" && Number.isFinite(rawRate) && rawRate > 0;
  const seo = {
    locale,
    karat: upper,
    country: name,
    currency: useLocal ? country.currency : "USD",
    gram: spot ? gramUsd(spot, karat) * (useLocal ? (rawRate as number) : 1) : null,
    date: spotDate(spot),
    alt: altGram(spot, fx, karat, useLocal ? country.alsoQuoted : undefined),
    slug,
  };

  return {
    title: { absolute: priceTitle(seo) },
    description: priceDescription(seo),
    alternates: buildAlternates(locale, `/${slug}/gold-price/${karat}`),
    openGraph: buildOpenGraph(locale, `/${slug}/gold-price/${karat}`),
  };
}

/**
 * Live-price + breadcrumb + WebPage JSON-LD for the country×karat page.
 * Awaits the spot + FX promises inside its own Suspense boundary so the schema
 * carries real prices without blocking the page's streamed HTML. `pageOnly`
 * skips Organization/WebSite/Service/FAQ — the layout already emits those.
 *
 * Product offer prices are emitted in the country's local currency (USD value ×
 * FX rate — the same conversion HeroSpot/KaratGrid render) so the structured
 * data matches the visible page. An undocumented or invalid rate falls back to
 * USD so the schema never publishes a wrong or zeroed price.
 */
async function CountrySchema({
  spotPromise,
  fxPromise,
  currency,
  crumbs,
  pageUrl,
  pageName,
}: {
  spotPromise: Promise<GoldApiResponse | null>;
  fxPromise: Promise<FxRates>;
  currency: string;
  crumbs: { name: string; url: string }[];
  pageUrl: string;
  pageName: string;
}) {
  const [spot, fx] = await Promise.all([spotPromise, fxPromise]);
  const rate = fx[currency];
  const useLocal =
    currency !== "USD" && typeof rate === "number" && Number.isFinite(rate) && rate > 0;
  return (
    <JsonLd
      spot={spot}
      siteUrl={SITE_URL}
      pageOnly
      pageType="ItemPage"
      pageUrl={pageUrl}
      pageName={pageName}
      breadcrumb={crumbs}
      priceCurrency={useLocal ? currency : "USD"}
      fxRate={useLocal ? (rate as number) : 1}
    />
  );
}

export default async function CountryKaratPage({
  params,
}: {
  params: Promise<{ locale: string; country: string; karat: string }>;
}) {
  const { locale, country: slug, karat } = await params;
  const country = COUNTRY_BY_SLUG[slug];
  if (!country || !VALID_KARATS.includes(karat as Karat)) notFound();
  // proxy.ts already 308s merged karats; this covers any render that bypasses it.
  if (!hasCountryKaratPage(locale, slug, karat)) {
    permanentRedirect(canonicalPath(locale, countryKaratHref(locale, slug, karat)));
  }
  setRequestLocale(locale);

  const name = countryName(country, locale);
  const ctx = { karat, country: name, currency: country.currency, slug };
  const home = homeLabel(locale);
  const leaf = karatCrumb(locale, karat);
  const related = relatedPageLinks(locale, ctx);
  const nearby = nearbyText(locale, karat);

  // Cached: an uncached call waited on the upstream timeout on every request.
  const spotPromise = getCachedSpot("XAU");
  const fxPromise = getCachedFxRates();
  const historyPromise = getCachedAllHistory("1y");


  const pageUrl = canonicalPath(locale, `/${slug}/gold-price/${karat}`);

  // Breadcrumb + WebPage name for the structured-data block. Mirrors the
  // visible <Breadcrumb> but uses canonical (locale-prefixed) URLs.
  const schemaCrumbs = [
    { name: home, url: canonicalPath(locale, "/") },
    { name, url: canonicalPath(locale, `/${slug}/gold-price/21k`) },
    { name: leaf, url: pageUrl },
  ];
  const schemaPageName = countryPageText(locale, ctx).h1;
  const ckFaqs = countryKaratFaqs(locale, ctx);
  const ckFaqSchema = faqPageSchema(pageUrl, ckFaqs, locale);

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ckFaqSchema).replace(/</g, "\\u003c") }}
      />
      <Suspense fallback={null}>
        <CountrySchema
          spotPromise={spotPromise}
          fxPromise={fxPromise}
          currency={country.currency}
          crumbs={schemaCrumbs}
          pageUrl={pageUrl}
          pageName={schemaPageName}
        />
      </Suspense>
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8">
        {/* next-intl <Link> adds the locale prefix itself — hrefs stay locale-agnostic. */}
        <Breadcrumb
          locale={locale}
          items={[
            { name: home, href: "/" },
            { name: name, href: `/${slug}/gold-price/21k` },
            { name: leaf, href: `/${slug}/gold-price/${karat}` },
          ]}
        />
        <div className="grid gap-6 lg:grid-cols-[1fr_320px] lg:gap-8">
          <section className="min-w-0 space-y-8">
            <CountryGoldPriceHeader locale={locale} slug={slug} karat={karat} part="intro" />

            {/* The number the reader searched for, first: this karat, per gram,
                in the local currency. No Suspense around these three: the
                layout already defers the whole body to request time, and an
                inner boundary streamed them after the footer, outside <main>,
                where a crawler that does not run JS never sees them in place.
                Their data is "use cache", so waiting for it costs ~nothing. */}
            <KaratHeroSection
              promise={spotPromise}
              fxPromise={fxPromise}
              currency={country.currency}
              altCurrency={country.alsoQuoted}
              karat={karat}
              locale={locale}
            />
            <PriceTableSection
              promise={spotPromise}
              fxPromise={fxPromise}
              currency={country.currency}
              altCurrency={country.alsoQuoted}
              locale={locale}
              countryName={name}
              slug={slug}
              karat={karat}
            />
            <RecentPricesSection
              hPromise={historyPromise}
              fxPromise={fxPromise}
              currency={country.currency}
              locale={locale}
              karat={karat}
              countryName={name}
            />
            <AdSensePlacement name="inContent" />
            <ChartImage
              currency={country.currency}
              locale={locale}
              pagePath={`/${slug}/gold-price/${karat}`}
              range="1y"
            />
            {/* The karat table above already prices every karat side by side;
                the guide helps the reader decide which one they actually want.
                It is also the only section whose copy differs between the five
                karat routes. */}
            <KaratGuide locale={locale} slug={slug} karat={karat} countryName={name} />

            <KaratSwitcher
              current={karat}
              basePath={`/${slug}/gold-price`}
              locale={locale}
              historicalHref="/historical-gold-prices"
              karats={countryKarats(locale, slug, VALID_KARATS)}
            />

            <Suspense fallback={<CalculatorSkeleton />}>
              <CalculatorSection
                sPromise={spotPromise}
                fxPromise={fxPromise}
                defaultCurrency={country.currency}
                defaultKarat={
                  `price_gram_${karat as "24k" | "22k" | "21k" | "18k" | "14k"}` as "price_gram_24k"
                }
              />
            </Suspense>

            <CountryGoldPriceHeader locale={locale} slug={slug} karat={karat} part="method" />

            {/* Trader tools last: day range / spread and the TradingView chart
                (loads only when tapped). Shoppers have their answer above. */}
            <Suspense fallback={<BidAskGaugeSkeleton />}>
              <BidAskSection
                promise={spotPromise}
                fxPromise={fxPromise}
                displayCurrency={country.currency}
              />
            </Suspense>
            <TradingViewChart currency={country.currency} />

            <CountryGoldPriceHeader locale={locale} slug={slug} karat={karat} part="content" />

            {/* After the price, before the FAQ: the reader has their answer and
                is deciding whether to leave. */}
            <FollowCta locale={locale} countrySlug={slug} />


            <RelatedLinks heading={related.heading} items={related.items} />

            <RelatedLinks
              heading={nearby.heading}
              items={[
                ...relatedCountries(slug, 4).map((nb) => ({
                  href: countryKaratHref(locale, nb.slug, karat),
                  label: countryName(nb, locale),
                  note: inCurrency(locale, nb.currency),
                  flag: nb.cc,
                })),
                { href: "/gold-price", label: nearby.allLabel, note: nearby.allNote },
              ]}
            />
          </section>
          <Sidebar />
        </div>
      </main>
    </>
  );
}
