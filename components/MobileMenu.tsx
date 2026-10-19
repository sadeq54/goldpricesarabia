"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Check, Languages, Menu, X } from "lucide-react";

import { Link, usePathname } from "@/i18n/navigation";
import { LOCALE_META, type AppLocale } from "@/i18n/routing";
import { localesForPath } from "@/lib/metadata";
import { pick } from "@/lib/i18n-text";

type NavItem = { href: string; label: string };

export function MobileMenu({
  navItems,
  siteLinks = [],
  homeLabel,
  historicalLabel,
  locale,
  languageLabel,
  liveLabel,
}: {
  navItems: NavItem[];
  siteLinks?: NavItem[];
  homeLabel: string;
  historicalLabel: string;
  /** Current locale — marked in the language list. */
  locale: string;
  /** Heading for the language list ("Language" / "اللغة" …). */
  languageLabel: string;
  liveLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const closeLabel = pick(locale, {
    en: "Close menu",
    ar: "إغلاق القائمة",
    fr: "Fermer le menu",
    tr: "Menüyü kapat",
    ur: "مینو بند کریں",
    hi: "मेनू बंद करें",
  });
  const openLabel = pick(locale, {
    en: "Open menu",
    ar: "فتح القائمة",
    fr: "Ouvrir le menu",
    tr: "Menüyü aç",
    ur: "مینو کھولیں",
    hi: "मेनू खोलें",
  });
  const menuLabel = pick(locale, {
    en: "Navigation menu",
    ar: "قائمة التنقل",
    fr: "Menu de navigation",
    tr: "Gezinme menüsü",
    ur: "نیویگیشن مینو",
    hi: "नेविगेशन मेनू",
  });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // Close on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
  }, [pathname]);

  // Lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // Move focus into the dialog on open and hand it back to the toggle on
  // close, so keyboard and screen-reader users are not left behind the overlay.
  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const toggle = toggleRef.current;
    return () => toggle?.focus();
  }, [open]);

  // Plain conditional render (was motion AnimatePresence): the CSS keyframes
  // `.backdrop-in` / `.drawer-in` in globals.css fade the backdrop and slide
  // the panel in on mount; closing unmounts at once.
  const drawer = open ? (
    <>
      <div
        onClick={() => setOpen(false)}
        className="backdrop-in fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm md:hidden"
        aria-hidden
      />
      <aside
        id="mobile-menu-panel"
        role="dialog"
        aria-modal="true"
        aria-label={menuLabel}
        className="drawer-in fixed inset-0 z-[110] flex w-screen flex-col gap-2 overflow-y-auto bg-[var(--color-bg)] p-6 shadow-2xl md:hidden"
      >
        <div className="mb-4 flex items-center justify-between">
          <span className="inline-flex items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full border border-[var(--color-up)]/40 bg-[var(--color-up)]/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[var(--color-up)]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-up)]" />
              {liveLabel}
            </span>
          </span>
          <button
            ref={closeRef}
            type="button"
            aria-label={closeLabel}
            onClick={() => setOpen(false)}
            className="theme-toggle inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--color-border-strong)] bg-[var(--color-bg-card)] text-[var(--color-text)]"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="flex flex-col">
          <Link
            href="/"
            className="rounded-md px-3 py-3 text-base font-semibold text-[var(--color-text)] transition hover:bg-[var(--color-bg-card-hover)] hover:text-[var(--color-gold)]"
          >
            {homeLabel}
          </Link>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href as never}
              className="rounded-md px-3 py-3 text-base font-semibold text-[var(--color-text)] transition hover:bg-[var(--color-bg-card-hover)] hover:text-[var(--color-gold)]"
            >
              {item.label}
            </Link>
          ))}
          {siteLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href as never}
              className="rounded-md px-3 py-3 text-base font-semibold text-[var(--color-text)] transition hover:bg-[var(--color-bg-card-hover)] hover:text-[var(--color-gold)]"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/historical-gold-prices"
            className="rounded-md px-3 py-3 text-base font-semibold text-[var(--color-text)] transition hover:bg-[var(--color-bg-card-hover)] hover:text-[var(--color-gold)]"
          >
            {historicalLabel}
          </Link>
        </nav>

        <div className="my-3 h-px bg-[var(--color-border)]" />

        <section aria-label={languageLabel}>
          <h2 className="mb-2 flex items-center gap-2 px-3 text-[11px] font-semibold uppercase tracking-wider text-[var(--color-text-dim)]">
            <Languages size={14} aria-hidden />
            {languageLabel}
          </h2>
          <ul className="grid grid-cols-2 gap-1.5">
            {(localesForPath(pathname || "/") as AppLocale[]).map((l) => {
              const current = l === locale;
              return (
                <li key={l}>
                  <Link
                    href={(pathname || "/") as never}
                    locale={l}
                    hrefLang={l}
                    lang={l}
                    aria-current={current ? "true" : undefined}
                    className={`theme-toggle flex items-center justify-between gap-2 rounded-md border px-3 py-2 text-sm font-semibold ${
                      current
                        ? "border-[var(--color-gold)]/60 bg-[var(--color-gold)]/10 text-[var(--color-gold)]"
                        : "border-[var(--color-border-strong)] bg-[var(--color-bg-card)] text-[var(--color-text)]"
                    }`}
                  >
                    <span dir="auto">{LOCALE_META[l].name}</span>
                    {current ? <Check size={14} aria-hidden /> : null}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      </aside>
    </>
  ) : null;

  return (
    <>
      <button
        ref={toggleRef}
        type="button"
        aria-label={open ? closeLabel : openLabel}
        aria-expanded={open}
        aria-controls="mobile-menu-panel"
        onClick={() => setOpen((v) => !v)}
        className="theme-toggle inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--color-border-strong)] bg-[var(--color-bg-card)] text-[var(--color-text)] md:hidden"
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>

      {mounted ? createPortal(drawer, document.body) : null}
    </>
  );
}
