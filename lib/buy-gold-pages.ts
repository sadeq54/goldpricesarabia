/**
 * Which /buy-gold/{country}[/{type}] URLs exist as their own page.
 *
 * A country's buy-gold page stays where it carries written editorial (VAT,
 * hallmarks, where to buy): Saudi Arabia, the UAE, Egypt and Morocco, in Arabic
 * and English (lib/content/buy-gold-editorial.ts is ar/en only). A coins / small
 * coins / bars page stays only where searchers used it: 3+ Google clicks in the
 * 90 days to 2026-10-19.
 *
 * Why: measured 2026-10-19, coins vs bars vs small-coins of one country shared
 * 95-96% of their words, and the USA/UK/Canada/Australia pages had no editorial
 * at all — the "many pages that are similar" AdSense asks publishers to
 * consolidate (answer 10015918). The other URLs 308 (proxy.ts) to the country's
 * buy-gold page when it exists, else to the country's gold price page.
 */
const EDITORIAL_COUNTRIES = new Set(["saudi-arabia", "uae", "egypt", "morocco"]);
const EDITORIAL_LOCALES = new Set(["ar", "en"]);
const KEPT_TYPES = new Set(["ar:morocco:bars", "ar:morocco:coins"]);

export function hasBuyGoldPage(locale: string, country: string, type?: string): boolean {
  if (type) return KEPT_TYPES.has(`${locale}:${country}:${type}`);
  return EDITORIAL_LOCALES.has(locale) && EDITORIAL_COUNTRIES.has(country);
}

/** Locale-agnostic path a merged buy-gold URL now lives at. */
export function buyGoldTarget(locale: string, country: string, type?: string): string {
  if (hasBuyGoldPage(locale, country, type)) return type ? `/buy-gold/${country}/${type}` : `/buy-gold/${country}`;
  if (type && hasBuyGoldPage(locale, country)) return `/buy-gold/${country}`;
  return `/${country}/gold-price/21k`;
}
