"use client";

import { Plus, Sparkles } from "lucide-react";
import { AnimatePresence } from "motion/react";
import * as m from "motion/react-client";
import { useRouter } from "@/i18n/navigation";
import { useEffect } from "react";
import { useFieldArray } from "react-hook-form";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { DropZone } from "@/components/ui/drop-zone";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTestPollingQuery } from "@/features/tests/hooks/use-test-polling-query";
import { PresetBadges } from "@/features/tests/parts/preset-badges";
import { TestLoadingCard } from "@/features/tests/parts/test-loading-card";
import { $api } from "@/lib/api/client";

import { useTestCreationForm } from "./hooks/use-test-creation-form";
import { getPreset } from "@/features/tests/parts/preset-badges/presets";
import { DIFFICULTY_LEVELS } from "@/features/tests/presets";
import { DEFAULT_SECTION } from "./presets";
import { SectionCard } from "./parts/section-card";
import type { TestCreationValues } from "./types";

export function TestCreationForm() {
  const t = useTranslations();
  const router = useRouter();
  const form = useTestCreationForm();
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "sections",
  });

  const createTest = $api.useMutation("post", "/v2/tests");
  const testId = createTest.data?.test_id;
  const testStatus = useTestPollingQuery(testId);

  const isGenerating = !!testId && testStatus.data?.status === "pending";

  useEffect(() => {
    if (testId && testStatus.data?.status === "completed") {
      router.push(`/tests/${testId}`);
    }
  }, [testId, testStatus.data?.status, router]);

  const sections = form.watch("sections") ?? [];
  const totalQuestions = sections.reduce(
    (sum, s) => sum + (Number(s.amount) || 0),
    0,
  );

  function onSubmit(data: TestCreationValues) {
    createTest.mutate({
      body: {
        test_request: {
          subject: data.subject,
          difficulty_level: data.difficulty,
          language: data.language,
          groups: data.sections.map((section) => ({
            name: section.topic,
            type: section.questionType,
            amount: section.amount,
            topic: section.topic,
          })),
        },
      },
    });
  }

  return (
    <AnimatePresence mode="wait">
      {isGenerating ? (
        <m.div
          key="loading"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <TestLoadingCard
            title={t("tests.loading.title")}
            subtitle={t("tests.loading.subtitle")}
            steps={[
              t("tests.loading.steps.analyzing"),
              t("tests.loading.steps.generating"),
              t("tests.loading.steps.reviewing"),
              t("tests.loading.steps.finalizing"),
            ]}
          />
        </m.div>
      ) : (
        <m.div
          key="form"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex w-190 flex-col items-center gap-8"
            >
              <div className="flex flex-col items-center gap-2">
                <h1 className="font-heading text-deep-brown text-3xl-plus font-bold">
                  {t("tests.creation.title")}
                </h1>
                <p className="text-deep-brown/50 text-base">
                  {t("tests.creation.subtitle")}
                </p>
              </div>

              <div className="border-deep-brown/4 flex w-full flex-col gap-5 rounded-2xl border bg-white p-7">
                <h2 className="font-heading text-deep-brown text-xl font-semibold">
                  {t("tests.creation.settingsTitle")}
                </h2>
                <PresetBadges
                  onSelect={(key) =>
                    form.reset(
                      getPreset(key, (k) => t(`landing.testForm.presets.${k}`)),
                    )
                  }
                />

                <div className="flex gap-4">
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>{t("tests.creation.subject")}</FormLabel>
                        <FormControl>
                          <Input
                            placeholder={t("tests.creation.subjectPlaceholder")}
                            {...field}
                            value={field.value ?? ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="language"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>{t("tests.creation.language")}</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="English"
                            {...field}
                            value={field.value ?? ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="difficulty"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("tests.creation.difficulty")}</FormLabel>
                      <Select
                        value={field.value ?? null}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger>
                          <SelectValue
                            placeholder={t(
                              "tests.creation.difficultyPlaceholder",
                            )}
                          >
                            {(value: string | null) =>
                              value
                                ? t(`landing.testForm.difficulties.${value}`)
                                : t("tests.creation.difficultyPlaceholder")
                            }
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                          {DIFFICULTY_LEVELS.map((level) => (
                            <SelectItem key={level} value={level}>
                              {t(`landing.testForm.difficulties.${level}`)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <DropZone accept=".pdf,.doc,.docx" />
              </div>

              <div className="flex w-full items-center">
                <h2 className="font-heading text-deep-brown text-xl-plus font-semibold">
                  {t("tests.creation.sectionsTitle")}
                </h2>
              </div>

              {fields.map((field, index) => (
                <SectionCard
                  key={field.id}
                  index={index}
                  onRemove={() => remove(index)}
                  canRemove={fields.length > 1}
                />
              ))}

              <Button
                type="button"
                variant="secondary"
                onClick={() => append(DEFAULT_SECTION)}
              >
                <Plus />
                {t("tests.creation.addSection")}
              </Button>

              <div className="flex w-full items-center justify-between">
                <span className="text-deep-brown/45 text-sm">
                  {t("tests.creation.summary", {
                    sections: fields.length,
                    questions: totalQuestions,
                  })}
                </span>
                <Button type="submit" disabled={createTest.isPending}>
                  {createTest.isPending ? (
                    <Sparkles className="animate-spin" />
                  ) : (
                    <Sparkles />
                  )}
                  {t("tests.creation.generate")}
                </Button>
              </div>
            </form>
          </Form>
        </m.div>
      )}
    </AnimatePresence>
  );
}
