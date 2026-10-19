"use client";

import { useEffect } from "react";
import { AlertTriangle, Home, RotateCcw } from "lucide-react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("Error");

  useEffect(() => {
    if (typeof window !== "undefined") {
      // eslint-disable-next-line no-console
      console.error("[GPA] route error:", {
        message: error.message,
        digest: error.digest,
        stack: error.stack,
      });
    }
  }, [error]);

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl items-center justify-center px-6 py-16">
      <div className="hero-spot-bg card-shadow w-full overflow-hidden rounded-2xl border border-[color-mix(in_srgb,var(--color-down)_25%,var(--color-border))] p-8 text-center md:p-12">
        <div
          aria-hidden
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-full"
          style={{
            color: "var(--color-down)",
            background: "color-mix(in srgb, var(--color-down) 18%, transparent)",
            boxShadow: "0 0 32px color-mix(in srgb, var(--color-down) 30%, transparent)",
          }}
        >
          <AlertTriangle size={28} />
        </div>

        <span
          className="mt-5 inline-flex items-center rounded-full border border-[color-mix(in_srgb,var(--color-down)_30%,var(--color-border-strong))] bg-[color-mix(in_srgb,var(--color-down)_10%,transparent)] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider"
          style={{ color: "var(--color-down)" }}
        >
          {t("badge")}
        </span>

        <h1 className="mt-3 text-2xl font-bold tracking-tight text-[var(--color-text)] md:text-3xl">
          {t("title")}
        </h1>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[var(--color-text-muted)]">
          {t("body")}
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {/* Hover/press scale was a motion spring; a CSS transform transition does the same. */}
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-gold)] px-5 py-2.5 text-sm font-semibold text-black shadow-md transition-transform motion-safe:hover:scale-[1.04] motion-safe:active:scale-[0.96]"
          >
            <RotateCcw size={16} />
            {t("retry")}
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border-strong)] px-5 py-2.5 text-sm font-semibold text-[var(--color-text)] transition hover:border-[var(--color-gold)]/50 hover:text-[var(--color-gold)]"
          >
            <Home size={16} />
            {t("home")}
          </Link>
        </div>

        {error.digest ? (
          <div className="mt-6 inline-block rounded-md border border-[var(--color-border)] bg-[var(--color-bg-card-hover)] px-3 py-1.5 font-mono text-[10px] text-[var(--color-text-dim)]">
            {t("digest", { digest: error.digest })}
          </div>
        ) : null}

        {process.env.NODE_ENV === "development" && error.message ? (
          <details className="mx-auto mt-6 max-w-2xl rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card-hover)] p-4 text-start">
            <summary className="cursor-pointer text-xs font-semibold text-[var(--color-text-muted)]">
              Dev details
            </summary>
            <pre className="mt-3 overflow-x-auto whitespace-pre-wrap break-all font-mono text-[11px] text-[var(--color-text-dim)]">
              {error.message}
              {error.stack ? "\n\n" + error.stack : ""}
            </pre>
          </details>
        ) : null}
      </div>
    </div>
  );
}
