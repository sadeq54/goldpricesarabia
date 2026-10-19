import { Suspense } from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { Calculator } from "@/components/Calculator";
import { HeroSpot } from "@/components/HeroSpot";
import { PageShell } from "@/components/PageShell";
import {
  CalculatorSkeleton,
  HeroSpotSkeleton,
} from "@/components/skeletons";
import { getCachedFxRates, getCachedSpot } from "@/lib/cached-fetchers";
import { buildAlternates, buildOpenGraph, canonicalPath } from "@/lib/metadata";
import { PageFaq } from "@/components/PageFaq";
import { FAQ_HEADING, KILO_FAQ, toolFaq } from "@/content/tool-faqs";
import { faqPageSchema } from "@/lib/schemas";


export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "SubPage" });
  return {
    title: t("perKiloH1"), description: t("perKiloIntro"),
    alternates: buildAlternates(locale, "/gold-price-per-kilo"),
    openGraph: buildOpenGraph(locale, "/gold-price-per-kilo"),
  };
}

export default async function PerKiloPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const spotPromise = getCachedSpot("XAU");
  const fxPromise = getCachedFxRates();

  const pageUrl = canonicalPath(locale, "/gold-price-per-kilo");
  const faqs = toolFaq(KILO_FAQ, locale);
  const perKiloFaqSchema = faqPageSchema(pageUrl, faqs, locale);

  return (
    <PageShell
      locale={locale}
      namespace="SubPage"
      titleKey="perKiloH1"
      introKey="perKiloIntro"
    >
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(perKiloFaqSchema).replace(/</g, "\\u003c") }}
      />
      <Suspense fallback={<HeroSpotSkeleton />}>
        {(async () => <HeroSpot spot={await spotPromise} />)()}
      </Suspense>
      <Suspense fallback={<CalculatorSkeleton />}>
        {(async () => {
          const [s, fx] = await Promise.all([spotPromise, fxPromise]);
          const calcSpot = s
            ? {
                price_gram_24k: s.price_gram_24k,
                price_gram_21k: s.price_gram_21k,
                price_gram_18k: s.price_gram_18k,
                price_gram_14k: s.price_gram_14k,
              }
            : { price_gram_24k: 0, price_gram_21k: 0, price_gram_18k: 0, price_gram_14k: 0 };
          return <Calculator spot={calcSpot} fx={fx} />;
        })()}
      </Suspense>
      <PageFaq id="gold-price-per-kilo-faq" heading={locale === "ar" ? FAQ_HEADING.ar : FAQ_HEADING.en} items={faqs} />
    </PageShell>
  );
}
