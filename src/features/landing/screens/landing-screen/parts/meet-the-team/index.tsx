"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import { FadeIn } from "../fade-in";

const members = [
  {
    nameKey: "zarifName",
    roleKey: "zarifRole",
    avatar: "/images/team/zarif.png",
    linkedin: "https://www.linkedin.com/in/zarif-abdalimov/",
  },
  {
    nameKey: "kayleeName",
    roleKey: "kayleeRole",
    avatar: "/images/team/kaylee.png",
    linkedin: "https://www.linkedin.com/in/kiwipetal/",
  },
  {
    nameKey: "filipName",
    roleKey: "filipRole",
    avatar: "/images/team/filip.png",
    linkedin: "https://www.linkedin.com/in/filip-ohanka-bb1419200/",
  },
  {
    nameKey: "janName",
    roleKey: "janRole",
    avatar: "/images/team/jan.png",
    linkedin: "https://www.linkedin.com/in/jan-zabloudil/",
  },
] as const;

export function MeetTheTeam() {
  const t = useTranslations("landing.team");

  return (
    <section
      id="about"
      className="flex w-full flex-col items-center gap-10 px-5 py-16 md:px-10 lg:gap-15 lg:px-20 lg:py-25"
    >
      <FadeIn className="flex flex-col items-center gap-4">
        <h2 className="font-heading text-deep-brown text-center text-3xl font-bold md:text-4xl lg:text-5xl">
          {t("title")}
        </h2>
        <p className="text-deep-brown/55 max-w-[650px] text-center text-lg leading-relaxed">
          {t("subtitle")}
        </p>
      </FadeIn>

      <div className="grid w-full max-w-[1000px] grid-cols-2 gap-8 lg:grid-cols-4">
        {members.map((member, i) => (
          <FadeIn
            key={member.nameKey}
            delay={i * 0.1}
            className="flex flex-col items-center gap-4"
          >
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4"
            >
              <Image
                src={member.avatar}
                alt={t(member.nameKey)}
                width={120}
                height={120}
                className="size-30 rounded-full object-cover"
              />
              <h3 className="font-heading text-deep-brown text-center text-lg font-semibold">
                {t(member.nameKey)}
              </h3>
              <p className="text-deep-brown/50 text-center text-sm">
                {t(member.roleKey)}
              </p>
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
