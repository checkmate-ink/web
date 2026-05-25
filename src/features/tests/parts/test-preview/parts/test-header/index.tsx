"use client";

import {
  Bookmark,
  Download,
  Eye,
  Loader,
  Pencil,
  TriangleAlert,
} from "lucide-react";
import { useTranslations } from "next-intl";
import posthog from "posthog-js";
import { useState } from "react";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { saveTest } from "@/features/tests/lib/saved-tests";
import type { TestItemV2 } from "@/features/tests/types";
import { useRouter } from "@/i18n/navigation";

import { useTestEditMode } from "../../context";
import { useTestEditFormContext } from "../../hooks/use-test-edit-form";
import { useGeneratePdf } from "./hooks/use-generate-pdf";

interface TestHeaderProps {
  test: TestItemV2;
  totalQuestions: number;
}

export function TestHeader({ test, totalQuestions }: TestHeaderProps) {
  const t = useTranslations();
  const router = useRouter();
  const { mode, setMode } = useTestEditMode();
  const { register, watch, getValues } = useTestEditFormContext();
  const { generate, isGenerating } = useGeneratePdf();
  const [saveDialogOpen, setSaveDialogOpen] = useState(false);
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
      posthog.capture("test_edit_mode_toggled", {
        mode: next,
      });
    }
  }

  function handleSaveLocally() {
    const data = getValues();
    saveTest(test, { title: data.title, formValues: data });
    posthog.capture("test_saved_locally", {
      title: data.title,
      total_questions: totalQuestions,
    });
    setSaveDialogOpen(false);
    router.push("/tests/saved");
  }

  async function handleExportPdf() {
    const data = getValues();
    posthog.capture("test_pdf_exported", {
      title: data.title,
      difficulty: data.difficulty,
      language: data.language,
      total_questions: totalQuestions,
    });
    await generate(data, {
      nameLabel: t("tests.pdf.nameLabel"),
      dateLabel: t("tests.pdf.dateLabel"),
      items: t("tests.pdf.items"),
      subtitle: t("tests.preview.subtitle", {
        count: totalQuestions,
        difficulty: t(`landing.testForm.difficulties.${data.difficulty}`),
        language: data.language,
      }),
      sectionTitle: (index, name) =>
        t("tests.preview.sectionTitle", { number: index + 1, name }),
    });
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          {mode === "edit" ? (
            <Input
              {...register("title")}
              className="font-heading text-deep-brown border-deep-brown/12 h-auto rounded-xl border bg-white px-4 py-2 text-xl font-semibold md:text-2xl"
            />
          ) : (
            <h1 className="font-heading text-deep-brown text-xl font-semibold md:text-2xl">
              {title}
            </h1>
          )}
          <p className="text-deep-brown/50 text-sm">{subtitle}</p>
        </div>
        <div className="flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-center">
          <Button variant="secondary" onClick={() => setSaveDialogOpen(true)}>
            <Bookmark />
            {t("tests.preview.saveToBrowser")}
          </Button>
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
          <Button onClick={handleExportPdf} disabled={isGenerating}>
            {isGenerating ? <Loader className="animate-spin" /> : <Download />}
            {t("tests.preview.exportPdf")}
          </Button>
        </div>
      </div>
      <div className="bg-deep-brown/5 h-px w-full" />

      <Dialog open={saveDialogOpen} onOpenChange={setSaveDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t("tests.saveDialog.title")}</DialogTitle>
            <DialogDescription>
              {t("tests.saveDialog.description")}
            </DialogDescription>
          </DialogHeader>
          <Alert variant="warning">
            <TriangleAlert />
            <AlertDescription>{t("tests.saveDialog.warning")}</AlertDescription>
          </Alert>
          <DialogFooter>
            <DialogClose
              render={
                <Button variant="secondary">
                  {t("tests.saveDialog.cancel")}
                </Button>
              }
            />
            <Button onClick={handleSaveLocally}>
              {t("tests.saveDialog.confirm")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
