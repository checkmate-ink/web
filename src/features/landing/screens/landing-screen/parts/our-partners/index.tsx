"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import { FadeIn } from "../fade-in";

const partners = [
  { name: "BlockJam", image: "/images/sponzors/block-jam.png", href: "https://theta-euro.com/block-jam/" },
  { name: "Theta EdgeCloud", image: "/images/sponzors/theta-edge-cloud.png", href: "https://www.thetaedgecloud.com/" },
  { name: "Theta Network", image: "/images/sponzors/theta.png", href: "https://www.thetatoken.org/" },
  { name: "AWS", image: "/images/sponzors/aws.png", href: "https://aws.amazon.com/" },
];

export function OurPartners() {
  const t = useTranslations("landing.partners");

  return (
    <section
      id="partners"
      className="flex w-full flex-col items-center gap-12 px-20 py-25"
    >
      <FadeIn className="flex flex-col items-center gap-4">
        <h2 className="font-heading text-deep-brown text-center text-5xl font-bold">
          {t("title")}
        </h2>
        <p className="text-deep-brown/55 max-w-[600px] text-center text-lg leading-relaxed">
          {t("subtitle")}
        </p>
      </FadeIn>

      <FadeIn>
        <span className="text-2xs text-deep-brown/35 font-semibold tracking-[2px] uppercase">
          {t("label")}
        </span>
      </FadeIn>

      <div className="flex w-full max-w-[1000px] items-center justify-center gap-6">
        {partners.map((partner, i) => (
          <FadeIn
            key={partner.name}
            delay={i * 0.1}
            className="flex-1"
          >
            <a
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="border-deep-brown/5 flex h-22.5 items-center justify-center rounded-2xl border bg-white"
            >
              <Image
                src={partner.image}
                alt={partner.name}
                width={120}
                height={40}
                className="object-contain"
              />
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
