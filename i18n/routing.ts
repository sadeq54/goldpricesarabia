import { defineRouting } from "next-intl/routing";

/**
 * Site locales. Arabic is the unprefixed default (`/jordan/...`), every other
 * locale is prefixed (`/en/...`, `/tr/...`). Keep this list in sync with
 * `messages/<locale>.json` — `i18n/request.ts` imports by locale name.
 *
 * French and Urdu were removed on 2026-10-10. Over the previous 3 months they
 * earned 52 of 2,120 Search Console clicks (2.5%) while carrying a third of
 * the site's templated pages, after four AdSense "content quality"
 * rejections. Their URLs 308 to English / Arabic in proxy.ts
 * (REMOVED_LOCALES). The fr/ur fields in LocaleText dictionaries are left
 * in place, unused, so restoring them needs routing + LOCALE_META + the
 * deleted messages/fr.json and ur.json (in git history), not a rewrite.
 */
export const routing = defineRouting({
  locales: ["ar", "en", "tr", "hi"],
  defaultLocale: "ar",
  localePrefix: "as-needed",
  localeDetection: false,
});

export type AppLocale = (typeof routing.locales)[number];

/**
 * Kept for reference: every locale is now prerendered (see the layout's
 * `generateStaticParams`), because child routes use `dynamicParams = false`
 * to make unknown segments 404 at the routing layer.
 */
export const STATIC_LOCALES: readonly AppLocale[] = routing.locales;

export const RTL_LOCALES: readonly string[] = ["ar", "ur"];
export const isRtl = (locale: string) => RTL_LOCALES.includes(locale);

/**
 * Per-locale presentation facts. `intl` is the BCP-47 tag used for
 * Intl.DateTimeFormat / DisplayNames (Latin digits forced where the default
 * would be Arabic-Indic or Devanagari digits — prices must stay machine
 * readable and consistent with the rest of the page). `og` is the Open Graph
 * locale, `hreflang` the value emitted in `<link rel="alternate">`.
 */
export const LOCALE_META = {
  ar: { name: "العربية", english: "Arabic", dir: "rtl", og: "ar_SA", intl: "ar-EG-u-nu-latn-ca-gregory", hreflang: "ar" },
  en: { name: "English", english: "English", dir: "ltr", og: "en_US", intl: "en-GB", hreflang: "en" },
  tr: { name: "Türkçe", english: "Turkish", dir: "ltr", og: "tr_TR", intl: "tr-TR", hreflang: "tr" },
  hi: { name: "हिन्दी", english: "Hindi", dir: "ltr", og: "hi_IN", intl: "hi-IN-u-nu-latn", hreflang: "hi" },
} as const satisfies Record<AppLocale, { name: string; english: string; dir: "rtl" | "ltr"; og: string; intl: string; hreflang: string }>;

export function localeMeta(locale: string) {
  return LOCALE_META[(locale in LOCALE_META ? locale : "en") as AppLocale];
}
