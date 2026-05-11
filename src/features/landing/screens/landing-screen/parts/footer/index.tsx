"use client";

import { Mail, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

import { Logo } from "@/features/landing/parts/logo";

export function Footer() {
  const t = useTranslations("landing");

  return (
    <footer className="border-deep-brown/7 flex w-full flex-col gap-4 border-t px-5 py-6 md:gap-6 md:px-10 md:py-10 lg:px-20">
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <Logo className="text-xl" />
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-8">
          <a
            href={`mailto:${t("contact.email")}`}
            className="flex items-center gap-2 transition-opacity hover:opacity-70"
          >
            <Mail className="text-deep-brown/45 size-4" />
            <span className="text-deep-brown/55 text-sm">
              {t("contact.email")}
            </span>
          </a>
          <a
            href={`tel:${t("contact.phone").replace(/\s/g, "")}`}
            className="flex items-center gap-2 transition-opacity hover:opacity-70"
          >
            <Phone className="text-deep-brown/45 size-4" />
            <span className="text-deep-brown/55 text-sm">
              {t("contact.phone")}
            </span>
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
        <span className="text-deep-brown/40 text-sm">
          {t("footer.tagline")}
        </span>
        <span className="text-deep-brown/40 text-sm">
          {t("footer.copyright", { year: new Date().getFullYear() })}
        </span>
      </div>
    </footer>
  );
}
