import { getTranslations, setRequestLocale } from "next-intl/server";

import { Breadcrumb } from "@/components/Breadcrumb";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { Link } from "@/i18n/navigation";
import { pick } from "@/lib/i18n-text";
import { buildPageMetadata, canonicalPath, SITE_URL } from "@/lib/metadata";

import { PRIVACY_UPDATED, privacyText, SUPPORT_EMAIL } from "./privacy.i18n";

/**
 * Addresses the policy names, made clickable. Google asks for a prominent link
 * to how it uses partner-site data, so these must be links, not plain text.
 */
const LINKS: Record<string, string> = {
  "policies.google.com/technologies/partner-sites": "https://policies.google.com/technologies/partner-sites",
  "adssettings.google.com": "https://adssettings.google.com",
  "www.aboutads.info/choices": "https://www.aboutads.info/choices",
  "privacy.microsoft.com/privacystatement": "https://privacy.microsoft.com/privacystatement",
  "formsubmit.co": "https://formsubmit.co",
  [SUPPORT_EMAIL]: `mailto:${SUPPORT_EMAIL}`,
};
const LINK_RE = new RegExp(`(${Object.keys(LINKS).map((k) => k.replace(/[.*+?^${}()|[\]\\/]/g, "\\$&")).join("|")})`);

function linkify(text: string) {
  return text.split(LINK_RE).map((part, i) =>
    LINKS[part] ? (
      <a
        key={i}
        href={LINKS[part]}
        dir="ltr"
        rel={part === SUPPORT_EMAIL ? undefined : "noopener"}
        target={part === SUPPORT_EMAIL ? undefined : "_blank"}
        className="text-[var(--color-gold)] underline hover:no-underline"
      >
        {part}
      </a>
    ) : (
      part
    ),
  );
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = privacyText(locale);
  return buildPageMetadata({ locale, path: "/about/privacy", title: t.title, description: t.description });
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = privacyText(locale);
  const tInfo = await getTranslations({ locale, namespace: "InfoPage" });
  const pageUrl = canonicalPath(locale, "/about/privacy");
  const homeCrumb = {
    name: pick(locale, { en: "Home", ar: "الرئيسية", fr: "Accueil", tr: "Ana sayfa", ur: "ہوم", hi: "होम" }),
    href: canonicalPath(locale, "/"),
  };
  const aboutCrumb = { name: tInfo("aboutH1"), href: canonicalPath(locale, "/about") };

  return (
    <>
      <JsonLd
        siteUrl={SITE_URL}
        pageType="WebPage"
        pageUrl={pageUrl}
        pageName={t.title}
        pageOnly
        breadcrumb={[
          { name: homeCrumb.name, url: homeCrumb.href },
          { name: aboutCrumb.name, url: aboutCrumb.href },
          { name: t.title, url: pageUrl },
        ]}
      />
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <Breadcrumb locale={locale} items={[homeCrumb, aboutCrumb, { name: t.title, href: pageUrl }]} />
        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight text-[var(--color-gold)]">{t.title}</h1>
            <p className="mt-2 text-xs text-[var(--color-text-dim)]">
              {tInfo("lastUpdated")}: <time dateTime={PRIVACY_UPDATED}>{PRIVACY_UPDATED}</time>
            </p>
          </header>

          {t.sections.map((s) => (
            <section key={s.h} className="mt-8">
              <h2 className="text-xl font-semibold text-[var(--color-text)]">{s.h}</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">{linkify(s.body)}</p>
            </section>
          ))}

          <nav className="mt-12 flex flex-wrap gap-4 border-t border-[var(--color-border)] pt-6 text-sm">
            <Link href="/about" className="text-[var(--color-gold)] underline hover:no-underline">
              {tInfo("aboutH1")}
            </Link>
            <Link href="/about/disclaimer" className="text-[var(--color-gold)] underline hover:no-underline">
              {pick(locale, { en: "Disclaimer", ar: "إخلاء المسؤولية", fr: "Avertissement", tr: "Sorumluluk reddi", ur: "دستبرداری", hi: "अस्वीकरण" })}
            </Link>
            <Link href="/editorial-standards" className="text-[var(--color-gold)] underline hover:no-underline">
              {tInfo("editorialH1")}
            </Link>
          </nav>
        </article>
      </main>
    </>
  );
}
