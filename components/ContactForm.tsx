"use client";

import { useState, type FormEvent } from "react";

import { SUPPORT_EMAIL } from "@/lib/contact";

/**
 * Contact form, delivered by FormSubmit (formsubmit.co) to SUPPORT_EMAIL.
 *
 * The site has no mail server of its own, and FormSubmit needs no account:
 * the first message ever sent mails an "Activate form" link to the inbox, and
 * until that link is clicked every send fails. The failure state therefore
 * always prints the plain address, so a reader is never left with nowhere to
 * write. The disclosure that FormSubmit carries the message is in the privacy
 * policy's Contact section.
 */
const ENDPOINT = `https://formsubmit.co/ajax/${SUPPORT_EMAIL}`;

export type ContactFormText = {
  heading: string;
  intro: string;
  name: string;
  email: string;
  topic: string;
  message: string;
  send: string;
  sending: string;
  sent: string;
  failed: string;
  topics: string[];
};

type Status = "idle" | "sending" | "sent" | "failed";

const field =
  "mt-1 w-full rounded-md border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm text-[var(--color-text)] focus:border-[var(--color-gold)] focus:outline-none";
const label = "block text-sm font-medium text-[var(--color-text)]";

export function ContactForm({ text }: { text: ContactFormText }) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    // Honeypot: people never see this field, form-filling bots do.
    if (String(data.get("_honey") ?? "") !== "") return;
    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: String(data.get("name") ?? "").trim(),
          email: String(data.get("email") ?? "").trim(),
          topic: String(data.get("topic") ?? ""),
          message: String(data.get("message") ?? "").trim(),
          _subject: `Gold Prices Arabia: ${String(data.get("topic") ?? "")}`,
          _replyto: String(data.get("email") ?? "").trim(),
          _template: "table",
        }),
      });
      const json = (await res.json().catch(() => ({}))) as { success?: string | boolean };
      const ok = res.ok && (json.success === true || json.success === "true");
      setStatus(ok ? "sent" : "failed");
      if (ok) form.reset();
    } catch {
      setStatus("failed");
    }
  }

  return (
    <section
      id="message"
      className="mt-8 rounded-lg border border-[var(--color-gold)]/40 bg-[var(--color-surface)] p-5"
    >
      <h2 className="text-lg font-semibold text-[var(--color-text)]">{text.heading}</h2>
      <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{text.intro}</p>

      <form onSubmit={onSubmit} className="mt-5 grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className={label}>
            {text.name}
            <input name="name" required maxLength={100} autoComplete="name" className={field} />
          </label>
          <label className={label}>
            {text.email}
            <input
              name="email"
              type="email"
              required
              maxLength={200}
              autoComplete="email"
              dir="ltr"
              className={field}
            />
          </label>
        </div>
        <label className={label}>
          {text.topic}
          <select name="topic" className={field} defaultValue={text.topics[0]}>
            {text.topics.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>
        <label className={label}>
          {text.message}
          <textarea name="message" required minLength={10} maxLength={5000} rows={6} className={field} />
        </label>
        <input
          type="text"
          name="_honey"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />
        <div className="flex flex-wrap items-center gap-4">
          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-md bg-[var(--color-gold)] px-5 py-2.5 text-sm font-semibold text-[var(--color-bg)] transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            {status === "sending" ? text.sending : text.send}
          </button>
          <p role="status" aria-live="polite" className="text-sm">
            {status === "sent" && <span className="text-[var(--color-text)]">{text.sent}</span>}
            {status === "failed" && (
              <span className="text-[var(--color-text-muted)]">
                {text.failed}{" "}
                <a href={`mailto:${SUPPORT_EMAIL}`} dir="ltr" className="text-[var(--color-gold)] underline">
                  {SUPPORT_EMAIL}
                </a>
              </span>
            )}
          </p>
        </div>
      </form>
    </section>
  );
}
