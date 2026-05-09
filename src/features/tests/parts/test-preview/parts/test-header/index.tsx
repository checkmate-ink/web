"use client";

import { Download, Eye, Pencil } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface TestHeaderProps {
  title: string;
  totalQuestions: number;
  difficulty: string;
  language: string;
}

export function TestHeader({
  title,
  totalQuestions,
  difficulty,
  language,
}: TestHeaderProps) {
  const t = useTranslations();

  const subtitle = t("tests.preview.subtitle", {
    count: totalQuestions,
    difficulty: t(`landing.testForm.difficulties.${difficulty}`),
    language,
  });

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="font-heading text-deep-brown text-2xl font-semibold">
            {title}
          </h1>
          <p className="text-deep-brown/50 text-sm">{subtitle}</p>
        </div>
        <div className="flex w-full items-center gap-3">
          <ToggleGroup defaultValue={["preview"]}>
            <ToggleGroupItem value="preview">
              <Eye />
              {t("tests.preview.preview")}
            </ToggleGroupItem>
            <ToggleGroupItem value="edit" disabled>
              <Pencil />
              {t("tests.preview.edit")}
            </ToggleGroupItem>
          </ToggleGroup>
          <Button>
            <Download />
            {t("tests.preview.exportPdf")}
          </Button>
        </div>
      </div>
      <div className="bg-deep-brown/5 h-px w-full" />
    </div>
  );
}
