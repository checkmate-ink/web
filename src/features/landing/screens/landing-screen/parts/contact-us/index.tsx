"use client";

import { Mail, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

import { FadeIn } from "../fade-in";

export function ContactUs() {
  const t = useTranslations("landing.contact");

  return (
    <section className="flex w-full flex-col items-center gap-6 px-5 py-12 md:gap-8 md:px-10 lg:px-20 lg:py-20">
      <FadeIn>
        <h2 className="font-heading text-deep-brown text-center text-2xl font-bold md:text-4xl">
          {t("title")}
        </h2>
      </FadeIn>

      <FadeIn
        delay={0.1}
        className="flex flex-col items-center gap-4 sm:flex-row sm:gap-12"
      >
        <a
          href={`mailto:${t("email")}`}
          className="flex items-center gap-2.5 transition-opacity hover:opacity-70"
        >
          <Mail className="text-deep-brown/50 size-5" />
          <span className="text-deep-brown text-base font-medium">
            {t("email")}
          </span>
        </a>
        <a
          href={`tel:${t("phone").replace(/\s/g, "")}`}
          className="flex items-center gap-2.5 transition-opacity hover:opacity-70"
        >
          <Phone className="text-deep-brown/50 size-5" />
          <span className="text-deep-brown text-base font-medium">
            {t("phone")}
          </span>
        </a>
      </FadeIn>
    </section>
  );
}
