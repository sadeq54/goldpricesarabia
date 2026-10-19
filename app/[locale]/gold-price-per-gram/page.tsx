import { Suspense } from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { Calculator } from "@/components/Calculator";
import { KaratGrid } from "@/components/KaratGrid";
import { PageShell } from "@/components/PageShell";
import {
  CalculatorSkeleton,
  KaratGridSkeleton,
} from "@/components/skeletons";
import { getCachedFxRates, getCachedSpot } from "@/lib/cached-fetchers";
import { buildAlternates, buildOpenGraph, canonicalPath } from "@/lib/metadata";
import { PageFaq } from "@/components/PageFaq";
import { FAQ_HEADING, GRAM_FAQ, toolFaq } from "@/content/tool-faqs";
import { faqPageSchema } from "@/lib/schemas";


export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "SubPage" });
  return {
    title: t("perGramH1"), description: t("perGramIntro"),
    alternates: buildAlternates(locale, "/gold-price-per-gram"),
    openGraph: buildOpenGraph(locale, "/gold-price-per-gram"),
  };
}

export default async function PerGramPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const spotPromise = getCachedSpot("XAU");
  const fxPromise = getCachedFxRates();

  const pageUrl = canonicalPath(locale, "/gold-price-per-gram");
  const faqs = toolFaq(GRAM_FAQ, locale);
  const perGramFaqSchema = faqPageSchema(pageUrl, faqs, locale);

  return (
    <PageShell
      locale={locale}
      namespace="SubPage"
      titleKey="perGramH1"
      introKey="perGramIntro"
    >
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(perGramFaqSchema).replace(/</g, "\\u003c") }}
      />
      <Suspense fallback={<KaratGridSkeleton />}>
        {(async () => {
          const [s, fx] = await Promise.all([spotPromise, fxPromise]);
          return <KaratGrid spot={s} fx={fx} />;
        })()}
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
      <PageFaq id="gold-price-per-gram-faq" heading={locale === "ar" ? FAQ_HEADING.ar : FAQ_HEADING.en} items={faqs} />
    </PageShell>
  );
}
