import { getTranslations, setRequestLocale } from "next-intl/server";

import { ExplainerSection } from "@/components/ExplainerSection";
import { HeroSpot } from "@/components/HeroSpot";
import { KaratGrid } from "@/components/KaratGrid";
import { PageShell } from "@/components/PageShell";
import { SGE_EXPLAINER } from "@/content/explainers";
import { getCachedFxRates, getCachedSpot } from "@/lib/cached-fetchers";
import { buildAlternates, buildOpenGraph } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "SubPage" });
  return {
    title: t("sgeH1"), description: t("sgeIntro"),
    alternates: buildAlternates(locale, "/shanghai-gold-exchange"),
    openGraph: buildOpenGraph(locale, "/shanghai-gold-exchange"),
  };
}

export default async function ShanghaiGoldPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const spotPromise = getCachedSpot("XAU");
  const fxPromise = getCachedFxRates();

  return (
    <PageShell
      locale={locale}
      namespace="SubPage"
      titleKey="sgeH1"
      introKey="sgeIntro"
    >
      {/* Inline, not in Suspense: an inner boundary streamed the prices after the
          footer, outside <main>. Data is "use cache". */}
      {(async () => {
        const [s, fx] = await Promise.all([spotPromise, fxPromise]);
        return <HeroSpot spot={s} fx={fx} displayCurrency="CNY" />;
      })()}
      {(async () => {
        const [s, fx] = await Promise.all([spotPromise, fxPromise]);
        return <KaratGrid spot={s} fx={fx} displayCurrency="CNY" />;
      })()}
      <ExplainerSection id="sge-explainer" locale={locale} text={SGE_EXPLAINER} />
    </PageShell>
  );
}
