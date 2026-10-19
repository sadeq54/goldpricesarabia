import { getLocale, getTranslations } from "next-intl/server";

import { Flag } from "@/components/Flag";
import { InstallAppButton } from "@/components/InstallAppButton";
import { Link } from "@/i18n/navigation";
import { hasBuyGoldPage } from "@/lib/buy-gold-pages";
import { hasCountryPage } from "@/lib/karat-pages";
import { COUNTRY_BY_SLUG, countryName } from "@/lib/countries";
import { pick, type LocaleText } from "@/lib/i18n-text";
import { SOCIAL_PROFILES } from "@/lib/social";

// Hardcoded copyright year — using `new Date().getFullYear()` would require
// either `connection()` (which forces the layout dynamic and poisons PPR
// site-wide) or a `"use cache"` scope (which can't reach getLocale /
// getTranslations). Bump annually at year boundary.
const COPYRIGHT_YEAR = 2026;

type LinkItem = { label: string; href: string; external?: boolean };

const BY_COUNTRY: LocaleText = {
  en: "All countries →",
  ar: "كل الدول ←",
  fr: "Cours de l'or par pays →",
  tr: "Tüm ülkeler →",
  ur: "ملک کے لحاظ سے سونے کی قیمت ←",
  hi: "सभी देश →",
};

/** The nine markets of the daily social posts, which also lead Search Console clicks. */
const FOOTER_MARKETS = ["saudi-arabia", "uae", "egypt", "jordan", "kuwait", "qatar", "bahrain", "lebanon", "morocco"] as const;

const BUY_GOLD_COUNTRIES = ["saudi-arabia", "uae", "egypt", "morocco"] as const;

const BUY_GOLD: LocaleText = {
  en: "Buying gold",
  ar: "شراء الذهب",
  fr: "Acheter de l'or",
  tr: "Altın satın alma",
  ur: "سونا خریدنا",
  hi: "सोना ख़रीदना",
};

const RESEARCH: LocaleText = {
  en: "Academic gold research",
  ar: "أبحاث الذهب الأكاديمية",
  fr: "Recherche académique sur l'or",
  tr: "Akademik altın araştırmaları",
  ur: "سونے پر علمی تحقیق",
  hi: "सोने पर अकादमिक शोध",
};

const EDITORIAL: Array<{ href: string; label: LocaleText }> = [
  { href: "/about", label: { en: "About", ar: "عن الموقع", fr: "À propos", tr: "Hakkında", ur: "ہمارے بارے میں", hi: "हमारे बारे में" } },
  { href: "/about/sadeq", label: { en: "Founder", ar: "المؤسس", fr: "Fondateur", tr: "Kurucu", ur: "بانی", hi: "संस्थापक" } },
  { href: "/about/disclaimer", label: { en: "Disclaimer", ar: "إخلاء المسؤولية", fr: "Avertissement", tr: "Sorumluluk reddi", ur: "دستبرداری", hi: "अस्वीकरण" } },
  { href: "/methodology", label: { en: "Methodology", ar: "المنهجية", fr: "Méthodologie", tr: "Metodoloji", ur: "طریقۂ کار", hi: "कार्यप्रणाली" } },
  { href: "/editorial-standards", label: { en: "Editorial standards", ar: "معايير التحرير", fr: "Charte éditoriale", tr: "Editoryal standartlar", ur: "ادارتی معیارات", hi: "संपादकीय मानक" } },
  { href: "/about/privacy", label: { en: "Privacy", ar: "الخصوصية", fr: "Confidentialité", tr: "Gizlilik", ur: "رازداری", hi: "गोपनीयता" } },
  { href: "/terms", label: { en: "Terms of use", ar: "شروط الاستخدام", fr: "Conditions d'utilisation", tr: "Kullanım şartları", ur: "شرائطِ استعمال", hi: "उपयोग की शर्तें" } },
  { href: "/contact", label: { en: "Contact", ar: "تواصل معنا", fr: "Contact", tr: "İletişim", ur: "رابطہ", hi: "संपर्क" } },
];

const COLUMN_TITLE = "mb-3 text-xs font-bold uppercase tracking-wider text-[var(--color-gold)]";
const COLUMN_LINK =
  "block py-0.5 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-gold)] hover:underline";

const LEARN: LocaleText = {
  en: "History & research",
  ar: "التاريخ والأبحاث",
  fr: "Historique et recherche",
  tr: "Geçmiş ve araştırma",
  ur: "تاریخ اور تحقیق",
  hi: "इतिहास और शोध",
};

function FooterColumn({ title, links }: { title: string; links: LinkItem[] }) {
  return (
    <div>
      <h3 className={COLUMN_TITLE}>{title}</h3>
      <ul className="space-y-1.5">
        {links.map((l) => (
          <li key={`${l.label}-${l.href}`}>
            {l.external ? (
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className={COLUMN_LINK}
              >
                {l.label}
              </a>
            ) : (
              <Link
                href={l.href}
                className={COLUMN_LINK}
              >
                {l.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function Footer() {
  const t = await getTranslations("Footer");
  const tPage = await getTranslations("Page");
  const locale = await getLocale();
  const year = COPYRIGHT_YEAR;
  const buyGold = BUY_GOLD_COUNTRIES.filter((slug) => hasBuyGoldPage(locale, slug));

  return (
    <footer className="mt-16 border-t border-[var(--color-border)] bg-[var(--color-bg-card)] text-[var(--color-text)]">
      {/* One balanced grid: prices & tools · markets · history & research ·
          metals + buying. Main markets only — a list of all 53 "Gold price in X"
          links on every page is the "blocks of text that list cities and
          regions" Google's spam policy names; the full list is on /gold-price. */}
      <section className="px-4 py-10 sm:px-6">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4 lg:gap-x-10">
          <FooterColumn
            title={t("chartsHeading")}
            links={[
              { label: t("spotGold"), href: "/spot-gold" },
              { label: t("priceChart"), href: "/gold-price-chart" },
              { label: t("perOz"), href: "/gold-price-per-ounce" },
              { label: t("perGram"), href: "/gold-price-per-gram" },
              { label: t("perKilo"), href: "/gold-price-per-kilo" },
              { label: t("calculator"), href: "/gold-calculator" },
              { label: t("widgets"), href: "/widgets" },
            ]}
          />

          <div>
            <h3 className={COLUMN_TITLE}>{t("worldHeading")}</h3>
            <ul className="space-y-1.5">
              {FOOTER_MARKETS.filter((slug) => hasCountryPage(locale, slug)).map((slug) => {
                const c = COUNTRY_BY_SLUG[slug];
                return (
                  <li key={slug}>
                    <Link href={`/${slug}/gold-price/21k`} className={`${COLUMN_LINK} flex items-center gap-2`}>
                      <Flag cc={c.cc} size={14} />
                      <span className="truncate">{countryName(c, locale)}</span>
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link href="/gold-price" className="block py-0.5 text-sm font-semibold text-[var(--color-gold)] hover:underline">
                  {pick(locale, BY_COUNTRY)}
                </Link>
              </li>
            </ul>
          </div>

          <FooterColumn
            title={pick(locale, LEARN)}
            links={[
              { label: t("history"), href: "/historical-gold-prices" },
              { label: t("goldSilverRatio"), href: "/gold-silver-ratio" },
              { label: t("sge"), href: "/shanghai-gold-exchange" },
              { label: t("newsLink"), href: "/news" },
              { label: pick(locale, RESEARCH), href: "/research" },
            ]}
          />

          <div className="space-y-8">
            <FooterColumn
              title={t("metalsHeading")}
              links={[
                { label: t("gold"), href: "/precious-metals/gold" },
                { label: t("silver"), href: "/precious-metals/silver" },
                { label: t("platinum"), href: "/precious-metals/platinum" },
                { label: t("palladium"), href: "/precious-metals/palladium" },
              ]}
            />
            {buyGold.length ? (
              <FooterColumn
                title={pick(locale, BUY_GOLD)}
                links={buyGold.map((slug) => ({
                  label: countryName(COUNTRY_BY_SLUG[slug], locale),
                  href: `/buy-gold/${slug}`,
                }))}
              />
            ) : null}
          </div>
        </div>
      </section>

      <div className="border-t border-[var(--color-border)] px-4 py-5 sm:px-6">
        <nav
          aria-label="Editorial"
          className="mx-auto mb-3 flex max-w-7xl flex-wrap justify-center gap-x-4 gap-y-1 text-[11px] text-[var(--color-text-dim)]"
        >
          {EDITORIAL.map((l) => (
            <Link
              key={l.href}
              href={l.href as never}
              className="inline-flex min-h-6 items-center transition-colors hover:text-[var(--color-gold)]"
            >
              {pick(locale, l.label)}
            </Link>
          ))}
          {/* `rel="me"` ties the profile back to this domain — the same identity
              signal the founder's LinkedIn link uses, and it mirrors the
              Organization `sameAs` (both read from lib/social.ts). */}
          {SOCIAL_PROFILES.map((s) => (
            <a
              key={s.url}
              href={s.url}
              target="_blank"
              rel="me noopener noreferrer"
              className="inline-flex min-h-6 items-center transition-colors hover:text-[var(--color-gold)]"
            >
              {s.name}
            </a>
          ))}
          <InstallAppButton locale={locale} />
        </nav>
        <div className="mx-auto max-w-7xl text-center text-xs text-[var(--color-text-dim)]">
          {tPage.rich("footer", {
            year,
            kormzi: (chunks) => (
              <a
                href="https://kormzi.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[var(--color-gold)] transition-colors hover:underline"
              >
                {chunks}
              </a>
            ),
          })}
        </div>
      </div>
    </footer>
  );
}
