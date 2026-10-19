"use client";

import { NextIntlClientProvider, type AbstractIntlMessages } from "next-intl";

/**
 * next-intl's provider, mounted from the client side on purpose. Imported in a
 * server component, `NextIntlClientProvider` is an async server wrapper that
 * calls getConfig() for formats/now/timeZone; under cacheComponents that read
 * the request and forced the whole <body> into a Suspense boundary. Every
 * value is passed explicitly here, so nothing is looked up. timeZone "UTC"
 * matches the server (the container runs in UTC); no client component formats
 * dates through next-intl.
 */
export function IntlClientProvider({
  locale,
  messages,
  children,
}: {
  locale: string;
  messages: AbstractIntlMessages;
  children: React.ReactNode;
}) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone="UTC">
      {children}
    </NextIntlClientProvider>
  );
}
