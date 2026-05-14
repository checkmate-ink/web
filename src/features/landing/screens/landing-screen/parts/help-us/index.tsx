"use client";

import { ClipboardList } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import posthog from "posthog-js";

import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

import { FadeIn } from "../fade-in";

const surveyLinks: Record<string, string> = {
  cs: "https://forms.gle/4iAWnVBRUPbKpLze8",
  en: "https://forms.gle/8YiiUWYszgPb4WJC6",
  de: "https://forms.gle/8YiiUWYszgPb4WJC6",
};

export function HelpUs() {
  const t = useTranslations("landing.helpUs");
  const locale = useLocale();

  const surveyHref = surveyLinks[locale] ?? surveyLinks.en;

  return (
    <section className="flex w-full flex-col items-center px-5 py-12 md:px-10 lg:px-20 lg:py-20">
      <FadeIn className="bg-cream-yellow flex w-full flex-col items-center gap-6 rounded-3xl px-6 py-10 md:px-15 md:py-16">
        <h2 className="font-heading text-deep-brown text-center text-2xl font-bold md:text-4xl">
          {t("title")}
        </h2>
        <p className="text-deep-brown/60 text-center text-lg">
          {t("subtitle")}
        </p>
        <Link
          href={surveyHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => posthog.capture("survey_cta_clicked", { locale })}
        >
          <Button>
            <ClipboardList />
            {t("cta")}
          </Button>
        </Link>
      </FadeIn>
    </section>
  );
}
