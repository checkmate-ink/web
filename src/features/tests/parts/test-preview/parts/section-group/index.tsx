import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Info, Plus } from "lucide-react";
import { useFieldArray } from "react-hook-form";
import { useTranslations } from "next-intl";
import posthog from "posthog-js";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { useTestEditMode } from "../../context";
import { useTestEditFormContext } from "../../hooks/use-test-edit-form";
import { SECTION_BADGE_VARIANTS, SECTION_NUMBER_COLORS } from "../../presets";
import type { EditableGroup, TestEditValues } from "../../types";
import { createDefaultQuestion } from "./presets";
import { QuestionCard } from "./parts/question-card";
import { SortableQuestionCard } from "./parts/sortable-question-card";

interface SectionGroupProps {
  group: EditableGroup;
  sectionIndex: number;
  startNumber: number;
}

export function SectionGroup({
  group,
  sectionIndex,
  startNumber,
}: SectionGroupProps) {
  const t = useTranslations();
  const { mode } = useTestEditMode();
  const { control } = useTestEditFormContext();
  const { fields, append, remove, move } = useFieldArray<TestEditValues>({
    control,
    name: `groups.${sectionIndex}.questions`,
  });

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const badgeVariant =
    SECTION_BADGE_VARIANTS[sectionIndex % SECTION_BADGE_VARIANTS.length];
  const numberColor =
    SECTION_NUMBER_COLORS[sectionIndex % SECTION_NUMBER_COLORS.length];

  function handleAddQuestion() {
    append(createDefaultQuestion(group.type));
    posthog.capture("test_question_added", {
      question_type: group.type,
      section_index: sectionIndex,
      question_count: fields.length + 1,
    });
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = fields.findIndex((f) => f.id === active.id);
      const newIndex = fields.findIndex((f) => f.id === over.id);
      move(oldIndex, newIndex);
    }
  }

  const isEdit = mode === "edit";

  return (
    <div className="flex flex-col gap-5">
      <div className="flex w-full flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
        <h2 className="font-heading text-deep-brown min-w-0 text-base font-semibold md:text-lg">
          {t("tests.preview.sectionTitle", {
            number: sectionIndex + 1,
            name: group.name,
          })}
        </h2>
        <div className="flex shrink-0 items-center gap-2.5">
          <Badge variant={badgeVariant}>
            {t("tests.preview.questionCount", {
              count: group.questions.length,
            })}
          </Badge>
          {isEdit && (
            <Button
              type="button"
              variant="secondary"
              size="sm"
              onClick={handleAddQuestion}
            >
              <Plus className="size-4.5" />
              {t("tests.edit.addQuestion")}
            </Button>
          )}
        </div>
      </div>
      {(group.type === "ORDERING" || group.type === "PAIRS") && (
        <Alert variant="info">
          <Info />
          <AlertDescription>{t("tests.preview.pdfShuffleNote")}</AlertDescription>
        </Alert>
      )}
      <div className="flex flex-col gap-4">
        {isEdit ? (
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={fields.map((f) => f.id)}
              strategy={verticalListSortingStrategy}
            >
              {fields.map((field, i) => (
                <SortableQuestionCard
                  key={field.id}
                  id={field.id}
                  question={group.questions[i]}
                  questionNumber={startNumber + i}
                  numberColorClass={numberColor}
                  sectionIndex={sectionIndex}
                  questionIndex={i}
                  onDelete={() => remove(i)}
                />
              ))}
            </SortableContext>
          </DndContext>
        ) : (
          fields.map((field, i) => (
            <QuestionCard
              key={field.id}
              question={group.questions[i]}
              questionNumber={startNumber + i}
              numberColorClass={numberColor}
              sectionIndex={sectionIndex}
              questionIndex={i}
              onDelete={() => remove(i)}
            />
          ))
        )}
      </div>
    </div>
  );
}
