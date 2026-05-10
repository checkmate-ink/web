"use client";

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
import { Plus } from "lucide-react";
import { useFieldArray } from "react-hook-form";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";

import { useTestEditFormContext } from "../../../../../../../../hooks/use-test-edit-form";
import type { TestEditValues } from "../../../../../../../../types";

import { SortableOrderingItem } from "./parts/sortable-ordering-item";

interface OrderingEditProps {
  sectionIndex: number;
  questionIndex: number;
}

export function OrderingEdit({
  sectionIndex,
  questionIndex,
}: OrderingEditProps) {
  const t = useTranslations("tests.edit");
  const { control, register } = useTestEditFormContext();
  const basePath =
    `groups.${sectionIndex}.questions.${questionIndex}.ordering_items` as const;
  const { fields, append, remove, move } = useFieldArray<TestEditValues>({
    control,
    name: basePath,
  });

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = fields.findIndex((f) => f.id === active.id);
      const newIndex = fields.findIndex((f) => f.id === over.id);
      move(oldIndex, newIndex);
    }
  }

  function handleAdd() {
    append({ text: "", correct_index: fields.length + 1 });
  }

  return (
    <div className="flex flex-col gap-2">
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
            <SortableOrderingItem
              key={field.id}
              id={field.id}
              index={i}
              registerName={`${basePath}.${i}.text`}
              register={register}
              onRemove={() => remove(i)}
            />
          ))}
        </SortableContext>
      </DndContext>
      <Button type="button" variant="ghost" size="sm" onClick={handleAdd}>
        <Plus className="size-3.5" />
        {t("addItem")}
      </Button>
    </div>
  );
}
