import type { Explainer } from "@/content/explainers";

/** Hand-written explainer (content/explainers.ts). Synchronous so it renders inside <main>. */
export function ExplainerSection({
  id,
  locale,
  text,
}: {
  id: string;
  locale: string;
  text: { en: Explainer; ar: Explainer };
}) {
  // ar/en only: tr/hi pages omit it rather than show English body copy.
  if (locale !== "ar" && locale !== "en") return null;
  const t = text[locale];
  return (
    <section aria-labelledby={id} className="space-y-3">
      <h2 id={id} className="text-xl font-semibold text-[var(--color-text)]">
        {t.heading}
      </h2>
      {t.paragraphs.map((p) => (
        <p key={p.slice(0, 32)} className="max-w-3xl text-sm leading-relaxed text-[var(--color-text-muted)]">
          {p}
        </p>
      ))}
    </section>
  );
}
