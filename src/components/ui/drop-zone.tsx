"use client";

import * as React from "react";
import { CloudUpload, FileUp } from "lucide-react";
import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface DropZoneProps extends React.HTMLAttributes<HTMLDivElement> {
  onFileDrop?: (files: FileList) => void;
  accept?: string;
  description?: string;
}

function DropZone({
  className,
  onFileDrop,
  accept,
  description,
  ...props
}: DropZoneProps) {
  const t = useTranslations("dropZone");
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = React.useState(false);

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
    setIsDragging(true);
  }

  function handleDragLeave(e: React.DragEvent) {
    e.preventDefault();
    setIsDragging(false);
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files.length > 0) {
      onFileDrop?.(e.dataTransfer.files);
    }
  }

  function handleBrowse() {
    inputRef.current?.click();
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      onFileDrop?.(e.target.files);
    }
  }

  return (
    <div
      data-slot="drop-zone"
      className={cn(
        "border-deep-brown/30 relative flex h-65 w-full items-center justify-center rounded-2xl border-3 border-dashed transition-colors",
        isDragging && "border-warm-yellow bg-warm-yellow/5",
        className,
      )}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      {...props}
    >
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        onChange={handleChange}
        className="hidden"
      />
      <div className="flex flex-col items-center gap-3.5">
        <CloudUpload className="text-deep-brown size-10 opacity-35" />
        <div className="flex flex-col items-center gap-1">
          <p className="text-md text-deep-brown font-medium">{t("title")}</p>
          <p className="text-2xs text-deep-brown opacity-40">
            {description ?? t("description")}
          </p>
        </div>
        <p className="text-2xs text-deep-brown opacity-35">{t("or")}</p>
        <Button variant="secondary" size="sm" onClick={handleBrowse}>
          <FileUp className="size-4.5" />
          {t("browse")}
        </Button>
      </div>
    </div>
  );
}

export { DropZone };
