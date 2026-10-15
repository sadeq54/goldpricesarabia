import { createElement, type ComponentProps } from "react";
import NextLink from "next/link";
import { useLocale } from "next-intl";
import { createNavigation } from "next-intl/navigation";

import { BILINGUAL_SECTIONS } from "@/lib/metadata";

import { routing } from "./routing";

const nav = createNavigation(routing);

export const { redirect, usePathname, useRouter, getPathname } = nav;

const LOCALES: ReadonlySet<string> = new Set(routing.locales);

type LinkProps = ComponentProps<typeof nav.Link>;

/**
 * next-intl's Link with three corrections, all measured as bad internal links
 * on production (2026-10-16 link audit, 982 links, 246 not a clean 200):
 *
 *  1. An href that already carries a locale prefix (`canonicalPath()` output
 *     such as `/en/about`, passed into breadcrumbs) was prefixed a second
 *     time — `/en/en/about`, a 404. The prefix is now read as the target
 *     locale and stripped before next-intl applies it.
 *  2. News and research exist in Arabic and English only (BILINGUAL_SECTIONS).
 *     From a tr/hi page they linked to `/tr/news`, which 308s to `/en/news`;
 *     they now link to the English page directly.
 *  3. Switching to Arabic (the unprefixed default) made next-intl emit
 *     `/ar/...` so middleware could set a locale cookie, then 307 to the real
 *     URL. Locale detection is off, so the cookie is unused; link straight to
 *     the unprefixed page.
 */
export function Link({ href, locale: localeProp, ...rest }: LinkProps) {
  const current = useLocale();
  let target: string = localeProp ?? current;
  let resolved = href;

  if (typeof href === "string" && href.startsWith("/")) {
    const segments = href.split("/").filter(Boolean);
    if (segments.length && LOCALES.has(segments[0])) {
      if (!localeProp) target = segments[0];
      resolved = `/${segments.slice(1).join("/")}`;
    }
    const section = (resolved as string).split("/").filter(Boolean)[0]?.split(/[?#]/)[0];
    if (section && BILINGUAL_SECTIONS.has(section) && target !== "ar" && target !== "en") target = "en";
  }

  if (target === routing.defaultLocale && target !== current) {
    const pathname = getPathname({ href: resolved as Parameters<typeof getPathname>[0]["href"], locale: target });
    return createElement(NextLink, { ...(rest as ComponentProps<typeof NextLink>), href: pathname });
  }
  return createElement(nav.Link, { ...rest, href: resolved, locale: target === current ? undefined : target } as LinkProps);
}
