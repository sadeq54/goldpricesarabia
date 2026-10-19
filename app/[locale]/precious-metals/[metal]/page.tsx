import { withLocales } from "@/lib/static-params";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { HeroSpot } from "@/components/HeroSpot";
import { PageFaq } from "@/components/PageFaq";
import { PageShell } from "@/components/PageShell";
import { PriceChart } from "@/components/PriceChart";
import {
  getCachedAllHistory,
  getCachedFxRates,
  getCachedSpot,
} from "@/lib/cached-fetchers";
import { chartHistory } from "@/lib/history";
import { pick } from "@/lib/i18n-text";
import { buildAlternates, buildOpenGraph, canonicalPath } from "@/lib/metadata";
import { faqPageSchema } from "@/lib/schemas";

import { METAL_SLUGS, metalFaqs, metalName, type MetalSlug } from "./faq.i18n";

const METAL_ID: Record<MetalSlug, "XAU" | "XAG" | "XPT" | "XPD"> = {
  gold: "XAU",
  silver: "XAG",
  platinum: "XPT",
  palladium: "XPD",
};

const isMetal = (s: string): s is MetalSlug => (METAL_SLUGS as readonly string[]).includes(s);

export function generateStaticParams() {
  return withLocales(METAL_SLUGS.map((metal) => ({ metal })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; metal: string }>;
}) {
  const { locale, metal } = await params;
  if (!isMetal(metal)) return {};
  const t = await getTranslations({ locale, namespace: "SubPage" });
  const name = metalName(metal, locale);
  return {
    title: t("metalH1", { metal: name }),
    description: t("metalIntro", { metal: name }),
    alternates: buildAlternates(locale, `/precious-metals/${metal}`),
    openGraph: buildOpenGraph(locale, `/precious-metals/${metal}`),
  };
}

export default async function MetalPage({
  params,
}: {
  params: Promise<{ locale: string; metal: string }>;
}) {
  const { locale, metal } = await params;
  if (!isMetal(metal)) notFound();
  setRequestLocale(locale);
  const id = METAL_ID[metal];
  const name = metalName(metal, locale);

  const spotPromise = getCachedSpot(id);
  const fxPromise = getCachedFxRates();
  const historyPromise = getCachedAllHistory("1y");

  const pageUrl = canonicalPath(locale, `/precious-metals/${metal}`);
  const faqItems = metalFaqs(metal, id, locale);
  const metalFaqSchema = faqPageSchema(pageUrl, faqItems, locale);

  return (
    <PageShell
      locale={locale}
      namespace="SubPage"
      titleKey="metalH1"
      introKey="metalIntro"
      titleVars={{ metal: name }}
      introVars={{ metal: name }}
    >
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(metalFaqSchema).replace(/</g, "\\u003c") }}
      />
      {/* Inline, not in Suspense: an inner boundary streamed this after the footer,
          outside <main>. Data is "use cache". */}
      {(async () => <HeroSpot spot={await spotPromise} />)()}
      {(async () => {
        const [h, fx] = await Promise.all([historyPromise, fxPromise]);
        return <PriceChart histories={chartHistory(h)} fx={fx} initialMetal={id} />;
      })()}
      <PageFaq
        id="metal-faq"
        heading={pick(locale, { en: "Frequently asked questions", ar: "أسئلة شائعة", tr: "Sık sorulan sorular", hi: "अक्सर पूछे जाने वाले प्रश्न" })}
        items={faqItems}
      />
    </PageShell>
  );
}
