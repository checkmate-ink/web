"use client";

import { Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Logo } from "@/features/landing/parts/logo";

export function NavBar() {
  const t = useTranslations("landing.nav");

  return (
    <nav className="flex h-[72px] w-full items-center justify-between px-20">
      <Logo className="text-2xl" />

      <div className="flex items-center gap-10">
        <a
          href="#features"
          className="text-md text-deep-brown font-medium transition-opacity hover:opacity-70"
        >
          {t("features")}
        </a>
        <a
          href="#how-it-works"
          className="text-md text-deep-brown font-medium transition-opacity hover:opacity-70"
        >
          {t("howItWorks")}
        </a>
        <a
          href="#about"
          className="text-md text-deep-brown font-medium transition-opacity hover:opacity-70"
        >
          {t("about")}
        </a>
        <a
          href="#partners"
          className="text-md text-deep-brown font-medium transition-opacity hover:opacity-70"
        >
          {t("partners")}
        </a>
      </div>

      <Button size="sm">
        <Sparkles className="size-4.5" />
        {t("cta")}
      </Button>
    </nav>
  );
}
