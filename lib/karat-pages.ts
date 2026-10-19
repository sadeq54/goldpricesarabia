/**
 * Which /{country}/gold-price/{karat} URLs exist as their own page.
 *
 * Every country keeps its 21K page, which already prices all five karats in one
 * table. A different karat keeps its own URL only where searchers actually used
 * it: 3+ Google clicks in the 90 days to 2026-10-19 (Search Console, per locale).
 * The other ~790 country×karat URLs 308 to the country's 21K page (proxy.ts).
 *
 * Why: five pages per country that differ only by the purity multiplier are
 * what AdSense's approval doc rejects ("If you have many pages that are similar
 * or have very similar content, consider ... consolidating the pages into one",
 * answer 10015918) and what Search calls doorway pages ("substantially similar
 * pages"). Measured before this change: 21K vs 22K of one country shared 91% of
 * their words, and 764 of 1,060 such pages had no click in 90 days.
 *
 * To add a page later, add "locale:country:karat" here; links, sitemap,
 * hreflang and redirects all read this set.
 */
export const COUNTRY_HUB_KARAT = "21k";

const KEPT = new Set<string>([
  "en:philippines:18k", "en:morocco:18k", "tr:syria:24k", "en:nigeria:18k", "en:lebanon:18k",
  "en:north-macedonia:14k", "en:philippines:14k", "en:jordan:18k", "en:turkey:14k", "en:europe:14k",
  "en:japan:18k", "en:thailand:18k", "en:egypt:24k", "en:nigeria:24k", "en:north-macedonia:18k",
  "tr:saudi-arabia:22k", "tr:syria:22k", "hi:saudi-arabia:18k", "en:myanmar:18k", "ar:lebanon:18k",
  "en:lebanon:24k", "hi:vietnam:22k", "hi:qatar:22k", "tr:hungary:22k", "tr:japan:24k",
  "en:south-korea:24k", "en:turkey:18k", "en:singapore:18k", "hi:india:18k", "ar:jordan:14k",
  "hi:kuwait:22k", "en:new-zealand:18k", "en:bahrain:18k", "ar:libya:18k", "tr:iraq:24k",
  "tr:uae:22k", "en:palestine:24k", "ar:denmark:24k", "tr:vietnam:24k", "en:usa:14k",
  "en:north-macedonia:24k", "en:philippines:22k", "hi:vietnam:24k", "hi:australia:22k", "hi:indonesia:24k",
  "tr:thailand:22k", "en:egypt:18k", "ar:sweden:18k", "en:croatia:18k", "tr:qatar:22k",
  "hi:russia:24k", "en:turkey:22k", "en:lebanon:22k", "ar:switzerland:24k", "hi:turkey:22k",
  "tr:malaysia:24k", "hi:libya:24k",
]);

export function hasCountryKaratPage(locale: string, country: string, karat: string): boolean {
  const k = karat.toLowerCase();
  return k === COUNTRY_HUB_KARAT || KEPT.has(`${locale}:${country}:${k}`);
}

/** Locale-agnostic href for a country's karat, falling back to the 21K page that prices it. */
export function countryKaratHref(locale: string, country: string, karat: string): string {
  const k = hasCountryKaratPage(locale, country, karat) ? karat.toLowerCase() : COUNTRY_HUB_KARAT;
  return `/${country}/gold-price/${k}`;
}

/** Karats with their own page for this country and locale, in the order given. */
export function countryKarats(locale: string, country: string, all: readonly string[]): string[] {
  return all.filter((k) => hasCountryKaratPage(locale, country, k));
}
