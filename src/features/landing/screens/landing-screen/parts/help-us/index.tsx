"use client";

import { ClipboardList } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

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
    <section className="flex w-full flex-col items-center px-20 py-20">
      <FadeIn className="bg-cream-yellow flex w-full flex-col items-center gap-6 rounded-3xl px-15 py-16">
        <h2 className="font-heading text-deep-brown text-center text-4xl font-bold">
          {t("title")}
        </h2>
        <p className="text-deep-brown/60 text-center text-lg">
          {t("subtitle")}
        </p>
        <Link href={surveyHref} target="_blank" rel="noopener noreferrer">
          <Button>
            <ClipboardList />
            {t("cta")}
          </Button>
        </Link>
      </FadeIn>
    </section>
  );
}
