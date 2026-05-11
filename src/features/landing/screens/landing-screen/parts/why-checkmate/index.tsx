"use client";

import { ChartBar, Heart, Timer } from "lucide-react";
import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils";

import { FadeIn } from "../fade-in";

const benefits = [
  {
    icon: Timer,
    titleKey: "saveHoursTitle",
    descKey: "saveHoursDesc",
    iconBg: "bg-cream-yellow",
  },
  {
    icon: ChartBar,
    titleKey: "analyticsTitle",
    descKey: "analyticsDesc",
    iconBg: "bg-soft-blue",
  },
  {
    icon: Heart,
    titleKey: "potentialTitle",
    descKey: "potentialDesc",
    iconBg: "bg-light-olive",
  },
] as const;

export function WhyCheckmate() {
  const t = useTranslations("landing.why");

  return (
    <section className="flex w-full flex-col items-center gap-10 px-5 py-16 md:px-10 lg:gap-15 lg:px-20 lg:py-25">
      <FadeIn className="flex flex-col items-center gap-4">
        <h2 className="font-heading text-deep-brown text-center text-3xl font-bold md:text-4xl lg:text-5xl">
          {t("title")}
        </h2>
        <p className="text-deep-brown/60 text-center text-xl">
          {t("subtitle")}
        </p>
      </FadeIn>

      <div className="flex w-full max-w-[1100px] flex-col gap-6 md:flex-row md:gap-10">
        {benefits.map((benefit, i) => (
          <FadeIn
            key={benefit.titleKey}
            delay={i * 0.1}
            className="flex flex-1 flex-col items-center gap-4 rounded-[20px] bg-white p-8"
          >
            <div
              className={cn(
                "flex size-14 items-center justify-center rounded-2xl",
                benefit.iconBg,
              )}
            >
              <benefit.icon className="text-deep-brown size-7" />
            </div>
            <h3 className="font-heading text-deep-brown text-center text-xl font-semibold">
              {t(benefit.titleKey)}
            </h3>
            <p className="text-md text-deep-brown/55 text-center leading-relaxed">
              {t(benefit.descKey)}
            </p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
