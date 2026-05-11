"use client";

import { useLocale } from "next-intl";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

const LOCALE_LABELS: Record<Locale, { flag: string; label: string }> = {
  en: { flag: "🇬🇧", label: "English" },
  cs: { flag: "🇨🇿", label: "Čeština" },
  de: { flag: "🇩🇪", label: "Deutsch" },
};

export function LanguageSelect() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function handleLocaleChange(value: string | null) {
    if (value) {
      router.replace(pathname, { locale: value as Locale });
    }
  }

  return (
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
  );
}
