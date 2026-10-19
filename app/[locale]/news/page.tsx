import { getTranslations, setRequestLocale } from "next-intl/server";

import { PageShell } from "@/components/PageShell";
import { Link } from "@/i18n/navigation";
import { localeMeta } from "@/i18n/routing";
import { pick } from "@/lib/i18n-text";
import {
  buildAlternates,
  buildOpenGraph,
  canonicalPath,
  SITE_URL,
} from "@/lib/metadata";
import { ARTICLES } from "@/content/news/articles";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "SubPage" });
  return {
    title: t("newsH1"), description: t("newsIntro"),
    alternates: buildAlternates(locale, "/news"),
    openGraph: buildOpenGraph(locale, "/news"),
  };
}

export default async function NewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("SubPage");

  const editorial = [...ARTICLES].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  const pageUrl = canonicalPath(locale, "/news");
  // ItemList of our own articles. The hub used to list 30 auto-fetched RSS
  // headlines (Yahoo Finance, Mining.com, Kitco, BullionVault, CoinDesk) with
  // their feed descriptions: scraped third-party text that AdSense's
  // content-quality guidance names, so it was removed on 2026-10-20.
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE_URL}${pageUrl}#articles`,
    name: pick(locale, {
      en: "Gold guides and analysis",
      ar: "أدلة وتحليلات الذهب",
      tr: "Altın rehberleri ve analizler",
      hi: "सोने पर गाइड और विश्लेषण",
    }),
    inLanguage: locale,
    numberOfItems: editorial.length,
    itemListElement: editorial.map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}${canonicalPath(locale, `/news/${a.slug}`)}`,
      name: pick(locale, { en: a.title_en, ar: a.title_ar }),
    })),
  };

  return (
    <PageShell
      locale={locale}
      namespace="SubPage"
      titleKey="newsH1"
      introKey="newsIntro"
      showFaq={false}
    >
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema).replace(/</g, "\\u003c") }}
      />
      {editorial.length > 0 ? (
        <section className="mb-10">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-[var(--color-gold)]">
            {pick(locale, {
              en: "Editorial articles",
              ar: "مقالات تحريرية",
              fr: "Articles de la rédaction",
              tr: "Editoryal yazılar",
              ur: "ادارتی مضامین",
              hi: "संपादकीय लेख",
            })}
          </h2>
          <ul className="space-y-3">
            {editorial.map((a) => (
              <li
                key={a.slug}
                className="rounded-xl border border-[var(--color-gold)]/30 bg-[var(--color-bg-card)] p-5 transition hover:border-[var(--color-gold)]/60"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-gold)]">
                    {pick(locale, {
                      en: "Editorial",
                      ar: "تحرير",
                      fr: "Rédaction",
                      tr: "Editoryal",
                      ur: "ادارتی",
                      hi: "संपादकीय",
                    })}
                  </span>
                  <time
                    dateTime={a.publishedAt}
                    className="text-[10px] text-[var(--color-text-dim)]"
                  >
                    {formatDate(a.publishedAt, locale)}
                  </time>
                </div>
                <Link
                  href={`/news/${a.slug}` as never}
                  className="mt-1 block font-semibold text-[var(--color-text)] hover:text-[var(--color-gold)]"
                >
                  {pick(locale, { en: a.title_en, ar: a.title_ar })}
                </Link>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {pick(locale, { en: a.description_en, ar: a.description_ar })}
                </p>
                <Link
                  href={`/news/${a.slug}` as never}
                  className="mt-2 inline-block text-xs text-[var(--color-gold)] hover:underline"
                >
                  {t("newsReadMore")} →
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

    </PageShell>
  );
}

function formatDate(s: string, locale: string): string {
  const t = Date.parse(s);
  if (!Number.isFinite(t)) return s;
  const d = new Date(t);
  return d.toLocaleDateString(localeMeta(locale).intl, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
