"use client";

import { useTranslations } from "next-intl";

import { FadeIn } from "../fade-in";

import { TestGenerationForm } from "./parts/test-generation-form";

export function HeroSection() {
  const t = useTranslations("landing.hero");

  return (
    <section className="flex w-full flex-col items-center gap-6 px-5 pt-10 pb-16 md:gap-8 md:px-10 md:pt-20 md:pb-25 lg:px-20">
      <FadeIn delay={0.1}>
        <h1 className="font-heading text-deep-brown max-w-[900px] text-center text-4xl leading-[1.1] font-bold md:text-5xl lg:text-[64px]">
          {t("titleLine1")}
          <br />
          {t("titleLine2")}
          <br />
          {t("titleLine3")}
        </h1>
      </FadeIn>

      <FadeIn delay={0.2}>
        <p className="text-deep-brown/60 max-w-[620px] text-center text-base leading-relaxed md:text-xl">
          {t("subtitle")}
        </p>
      </FadeIn>

      <FadeIn delay={0.3}>
        <p className="text-deep-brown/50 text-sm font-medium">
          ✨ {t("tryItOut")}
        </p>
      </FadeIn>

      <FadeIn delay={0.4} className="flex w-full justify-center">
        <TestGenerationForm />
      </FadeIn>
    </section>
  );
}
