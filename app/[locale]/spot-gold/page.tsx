import { getTranslations, setRequestLocale } from "next-intl/server";

import { BidAskGauge } from "@/components/BidAskGauge";
import { HeroSpot } from "@/components/HeroSpot";
import { PageShell } from "@/components/PageShell";
import { PriceChart } from "@/components/PriceChart";
import {
  getCachedAllHistory,
  getCachedFxRates,
  getCachedSpot,
} from "@/lib/cached-fetchers";
import { chartHistory } from "@/lib/history";
import { buildAlternates, buildOpenGraph, canonicalPath } from "@/lib/metadata";
import { PageFaq } from "@/components/PageFaq";
import { FAQ_HEADING, SPOT_FAQ, toolFaq } from "@/content/tool-faqs";
import { faqPageSchema } from "@/lib/schemas";


export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "SubPage" });
  return {
    title: t("spotGoldH1"),
    description: t("spotGoldIntro"),
    alternates: buildAlternates(locale, "/spot-gold"),
    openGraph: buildOpenGraph(locale, "/spot-gold"),
  };
}

export default async function SpotGoldPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const spotPromise = getCachedSpot("XAU");
  const fxPromise = getCachedFxRates();
  const historyPromise = getCachedAllHistory("1y");

  const pageUrl = canonicalPath(locale, "/spot-gold");
  const faqs = toolFaq(SPOT_FAQ, locale);
  const spotFaqSchema = faqPageSchema(pageUrl, faqs, locale);

  return (
    <PageShell
      locale={locale}
      namespace="SubPage"
      titleKey="spotGoldH1"
      introKey="spotGoldIntro"
    >
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(spotFaqSchema).replace(/</g, "\\u003c") }}
      />
      {(async () => <HeroSpot spot={await spotPromise} />)()}
      {(async () => {
        const [h, fx] = await Promise.all([historyPromise, fxPromise]);
        return <PriceChart histories={chartHistory(h)} fx={fx} />;
      })()}
      {(async () => <BidAskGauge spot={await spotPromise} />)()}
      <PageFaq id="spot-gold-faq" heading={locale === "ar" ? FAQ_HEADING.ar : FAQ_HEADING.en} items={faqs} />
    </PageShell>
  );
}
