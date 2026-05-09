"use client";

import { Trash2 } from "lucide-react";
import { useTestCreationFormContext } from "../../hooks/use-test-creation-form";
import { useTranslations } from "next-intl";

import {
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
import { cn } from "@/lib/utils";

import { QUESTION_TYPES } from "@/features/tests/presets";

const SECTION_COLORS = [
  "bg-cream-yellow",
  "bg-soft-blue",
  "bg-light-olive",
  "bg-soft-peach",
];

interface SectionCardProps {
  index: number;
  onRemove: () => void;
  canRemove: boolean;
}

export function SectionCard({ index, onRemove, canRemove }: SectionCardProps) {
  const t = useTranslations("tests.creation");
  const { control } = useTestCreationFormContext();

  const colorClass = SECTION_COLORS[index % SECTION_COLORS.length];

  return (
    <div className="border-deep-brown/4 flex w-full flex-col gap-4 rounded-2xl border bg-white p-6">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div
            className={cn(
              "text-deep-brown flex size-7 items-center justify-center rounded-full text-xs font-semibold",
              colorClass,
            )}
          >
            {index + 1}
          </div>
          <span className="font-heading text-deep-brown text-lg-plus font-semibold">
            {t("sectionLabel", { number: index + 1 })}
          </span>
        </div>
        {canRemove && (
          <button type="button" onClick={onRemove}>
            <Trash2 className="text-deep-brown/30 size-4.5 transition-opacity hover:opacity-70" />
          </button>
        )}
      </div>

      <div className="flex gap-4">
        <FormField
          control={control}
          name={`sections.${index}.topic`}
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>{t("topic")}</FormLabel>
              <FormControl>
                <Input
                  placeholder={t("topicPlaceholder")}
                  {...field}
                  value={field.value ?? ""}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={`sections.${index}.amount`}
          render={({ field: { onChange, ...field } }) => (
            <FormItem className="flex-1">
              <FormLabel>{t("questions")}</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  min={1}
                  max={50}
                  placeholder="5"
                  onChange={(e) => onChange(e.target.valueAsNumber)}
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
        control={control}
        name={`sections.${index}.questionType`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{t("questionType")}</FormLabel>
            <Select value={field.value ?? null} onValueChange={field.onChange}>
              <SelectTrigger>
                <SelectValue placeholder={t("questionTypePlaceholder")}>
                  {(value: string | null) =>
                    value
                      ? t(`questionTypes.${value}`)
                      : t("questionTypePlaceholder")
                  }
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {QUESTION_TYPES.map((type) => (
                  <SelectItem key={type} value={type}>
                    {t(`questionTypes.${type}`)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
