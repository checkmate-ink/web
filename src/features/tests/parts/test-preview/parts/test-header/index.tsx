"use client";

import { Download, Eye, Pencil } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

import { useTestEditMode } from "../../context";
import { useTestEditFormContext } from "../../hooks/use-test-edit-form";

interface TestHeaderProps {
  totalQuestions: number;
}

export function TestHeader({ totalQuestions }: TestHeaderProps) {
  const t = useTranslations();
  const { mode, setMode } = useTestEditMode();
  const { register, watch } = useTestEditFormContext();
  const title = watch("title");
  const difficulty = watch("difficulty");
  const language = watch("language");

  const subtitle = t("tests.preview.subtitle", {
    count: totalQuestions,
    difficulty: t(`landing.testForm.difficulties.${difficulty}`),
    language,
  });

  function handleToggle(value: string[]) {
    const next = value.find((v) => v !== mode);
    if (next === "preview" || next === "edit") {
      setMode(next);
    }
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          {mode === "edit" ? (
            <Input
              {...register("title")}
              className="font-heading text-deep-brown border-deep-brown/12 h-auto rounded-xl border bg-white px-4 py-2 text-2xl font-semibold"
            />
          ) : (
            <h1 className="font-heading text-deep-brown text-2xl font-semibold">
              {title}
            </h1>
          )}
          <p className="text-deep-brown/50 text-sm">{subtitle}</p>
        </div>
        <div className="flex w-full items-center gap-3">
          <ToggleGroup value={[mode]} onValueChange={handleToggle}>
            <ToggleGroupItem value="preview">
              <Eye />
              {t("tests.preview.preview")}
            </ToggleGroupItem>
            <ToggleGroupItem value="edit">
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
