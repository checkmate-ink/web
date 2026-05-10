import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import type { useTestEditFormContext } from "../../../../../../../../../../hooks/use-test-edit-form";

interface SortableOrderingItemProps {
  id: string;
  index: number;
  registerName: `groups.${number}.questions.${number}.ordering_items.${number}.text`;
  register: ReturnType<typeof useTestEditFormContext>["register"];
  onRemove: () => void;
}

export function SortableOrderingItem({
  id,
  index,
  registerName,
  register,
  onRemove,
}: SortableOrderingItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="flex w-full items-center gap-2"
    >
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="text-deep-brown/25 size-8 shrink-0 cursor-grab"
        {...attributes}
        {...listeners}
      >
        <GripVertical className="size-4" />
      </Button>
      <Label className="text-deep-brown/40 w-5 shrink-0 text-center">
        {index + 1}.
      </Label>
      <Input {...register(registerName)} className="flex-1" />
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="text-deep-brown/30 size-8 shrink-0"
        onClick={onRemove}
      >
        <X className="size-4" />
      </Button>
    </div>
  );
}
