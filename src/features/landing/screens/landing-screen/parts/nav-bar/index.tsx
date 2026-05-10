"use client";

import { useLocale, useTranslations } from "next-intl";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Logo } from "@/features/landing/parts/logo";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

const LOCALE_LABELS: Record<Locale, { flag: string; label: string }> = {
  en: { flag: "🇬🇧", label: "English" },
  cs: { flag: "🇨🇿", label: "Čeština" },
  de: { flag: "🇩🇪", label: "Deutsch" },
};

export function NavBar() {
  const t = useTranslations("landing.nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function handleLocaleChange(value: string | null) {
    if (value) {
      router.replace(pathname, { locale: value as Locale });
    }
  }

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

      <Select value={locale} onValueChange={handleLocaleChange}>
        <SelectTrigger className="w-auto gap-2 border-0 py-2 text-sm font-medium">
          <SelectValue>
            {(value: string | null) => {
              const { flag, label } = LOCALE_LABELS[(value as Locale) ?? "en"];
              return `${flag} ${label}`;
            }}
          </SelectValue>
        </SelectTrigger>
        <SelectContent align="end">
          {routing.locales.map((loc) => (
            <SelectItem key={loc} value={loc}>
              {LOCALE_LABELS[loc].flag} {LOCALE_LABELS[loc].label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </nav>
  );
}
