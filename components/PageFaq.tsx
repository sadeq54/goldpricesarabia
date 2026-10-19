import type { FaqQA } from "@/lib/schemas";

/**
 * Visible FAQ for a page that also emits FAQPage JSON-LD. Pass the SAME items
 * to faqPageSchema(): Google requires structured data to match visible text,
 * and several pages used to send FAQ schema with no FAQ on the page.
 *
 * Synchronous on purpose — an async child would stream after </main>.
 */
export function PageFaq({ id, heading, items }: { id: string; heading: string; items: FaqQA[] }) {
  if (!items.length) return null;
  return (
    <section
      aria-labelledby={id}
      className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6"
    >
      <h2 id={id} className="text-lg font-semibold text-[var(--color-text)]">
        {heading}
      </h2>
      <dl className="mt-4 space-y-4 text-sm">
        {items.map((item) => (
          <div key={item.q}>
            <dt className="font-semibold text-[var(--color-text)]">{item.q}</dt>
            <dd className="mt-1 leading-relaxed text-[var(--color-text-muted)]">{item.a}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
