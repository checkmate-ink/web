import type { Metadata } from "next";
import { Besley, Work_Sans } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

import { Providers } from "@/providers";

import "./globals.css";

const workSans = Work_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const besley = Besley({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Checkmate",
  description: "Checkmate — AI-Powered Test Generation",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${workSans.variable} ${besley.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <NextIntlClientProvider messages={messages}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
