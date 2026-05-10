"use client";

import { ArrowLeft, Plus } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Logo } from "@/features/landing/parts/logo";

interface TestNavProps {
  showCreateNew?: boolean;
}

export function TestNav({ showCreateNew }: TestNavProps) {
  const t = useTranslations("tests.nav");

  return (
    <nav className="border-deep-brown/5 flex h-16 w-full items-center justify-between border-b px-10">
      <Link href="/">
        <Logo className="text-2xl" />
      </Link>
      <div className="flex items-center gap-4">
        {showCreateNew && (
          <Link href="/tests">
            <Button variant="secondary" size="sm">
              <Plus className="size-4.5" />
              {t("createNew")}
            </Button>
          </Link>
        )}
        <Link href="/">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="size-4.5" />
            {t("back")}
          </Button>
        </Link>
      </div>
    </nav>
  );
}
