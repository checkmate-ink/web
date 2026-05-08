"use client";

import Image from "next/image";
import { Trophy } from "lucide-react";
import { useTranslations } from "next-intl";

import { Badge } from "@/components/ui/badge";

import { FadeIn } from "../fade-in";

export function Hackathon() {
  const t = useTranslations("landing.hackathon");

  return (
    <section className="flex w-full flex-col items-center gap-10 px-20 py-25">
      <FadeIn>
        <Badge variant="blue" hasIcon>
          <Trophy />
          {t("badge")}
        </Badge>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h2 className="font-heading text-deep-brown max-w-[700px] text-center text-[44px] font-bold">
          {t("title")}
        </h2>
      </FadeIn>

      <FadeIn delay={0.2}>
        <p className="text-deep-brown/55 max-w-[600px] text-center text-lg leading-relaxed">
          {t("description")}
        </p>
      </FadeIn>

      <FadeIn delay={0.3}>
        <Image
          src="/images/hackathon.png"
          alt={t("photoAlt")}
          width={700}
          height={400}
          className="rounded-[20px] object-cover"
        />
      </FadeIn>
    </section>
  );
}
