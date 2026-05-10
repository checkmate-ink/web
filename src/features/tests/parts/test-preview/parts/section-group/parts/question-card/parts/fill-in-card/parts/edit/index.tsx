import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

import { useTestEditFormContext } from "../../../../../../../../hooks/use-test-edit-form";

interface FillInEditProps {
  sectionIndex: number;
  questionIndex: number;
}

export function FillInEdit({ sectionIndex, questionIndex }: FillInEditProps) {
  const t = useTranslations("tests.edit");
  const { watch, setValue, getValues } = useTestEditFormContext();
  const basePath =
    `groups.${sectionIndex}.questions.${questionIndex}.options` as const;
  const options = watch(basePath);

  function handleCorrectChange(selectedIndex: number) {
    const updated = getValues(basePath).map((opt, i) => ({
      ...opt,
      is_correct: i === selectedIndex,
    }));
    setValue(basePath, updated);
  }

  return (
    <div className="flex flex-col gap-2">
      <Label className="text-deep-brown/50">{t("answerOptions")}</Label>
      <div className="flex flex-col gap-2">
        {options.map((option, i) => (
          <Button
            type="button"
            variant="ghost"
            key={i}
            className={cn(
              "border-deep-brown/12 flex h-10 items-center justify-start gap-1.5 rounded-lg border px-3 text-sm hover:bg-transparent",
              option.is_correct ? "bg-light-olive font-semibold" : "bg-white",
            )}
            onClick={() => handleCorrectChange(i)}
          >
            {option.is_correct ? (
              <div className="bg-olive-green flex size-4 items-center justify-center rounded-full">
                <div className="size-2 rounded-full bg-white" />
              </div>
            ) : (
              <div className="border-deep-brown/19 border-1.5 size-4 rounded-full" />
            )}
            <span className="text-deep-brown text-2xs">
              {option.label}) {option.text}
            </span>
          </Button>
        ))}
      </div>
    </div>
  );
}
