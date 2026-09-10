import { routing } from "@/i18n/routing";

/**
 * Where XM affiliate units are allowed to render.
 *
 * AdSense declined the site twice on "content quality". Google's approval doc
 * (support.google.com/adsense/answer/81904) names affiliate footprint as one
 * of the failure modes:
 *
 *   "Your site shouldn't participate in affiliate programs without adding
 *    sufficient value to users. Affiliate program content should form only a
 *    minor part of the content of your site if the content adds no additional
 *    features."
 *
 * Until 2026-09-10 an XM CFD banner rendered from `PageShell` on all ~2,316
 * pages, and `TradeGoldCta` added a second unit on every price page. On a
 * templated karat page — whose own prose is ~250 unique words — two broker
 * placements are not "a minor part", they are a large share of the non-tabular
 * content. That is the opposite of what the policy asks for.
 *
 * Affiliate units now render only where trading is genuinely the subject of
 * the page. The 1,620 templated karat pages and the country price pages carry
 * none. This is a real reduction, not a review-time cloak: the same pages are
 * served to every visitor.
 *
 * Keep this list short. Every path added here re-enlarges the footprint that
 * caused the rejection.
 */
const AFFILIATE_PATHS: readonly string[] = [
  "/", // homepage — the one high-level page where "trade gold" is on-topic
  "/spot-gold",
  "/live-gold-price",
  "/buy-gold", // and its sub-pages, matched as a prefix below
];

const LOCALE_SEGMENTS: ReadonlySet<string> = new Set(routing.locales);

/**
 * Strip a leading locale segment. `usePathname` from `@/i18n/navigation` is
 * normally locale-agnostic, but the country lookup in `AffiliateBanner` has
 * long guarded against a "/en/jordan/..." shape, so do not assume it.
 */
export function stripLocale(pathname: string): string {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length > 0 && LOCALE_SEGMENTS.has(parts[0])) parts.shift();
  return "/" + parts.join("/");
}

/** True when XM affiliate units may render on `pathname`. */
export function affiliateAllowed(pathname: string): boolean {
  const path = stripLocale(pathname).replace(/\/+$/, "") || "/";
  return AFFILIATE_PATHS.some(
    (allowed) => path === allowed || (allowed !== "/" && path.startsWith(`${allowed}/`)),
  );
}
