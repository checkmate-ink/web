"use client";

import * as React from "react";
import { Toggle as TogglePrimitive } from "@base-ui/react/toggle";
import { ToggleGroup as ToggleGroupPrimitive } from "@base-ui/react/toggle-group";

import { cn } from "@/lib/utils";

function ToggleGroup({
  className,
  children,
  ...props
}: ToggleGroupPrimitive.Props) {
  return (
    <ToggleGroupPrimitive
      data-slot="toggle-group"
      className={cn(
        "bg-disabled-fill inline-flex items-center rounded-full p-1",
        className,
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive>
  );
}

function ToggleGroupItem({
  className,
  children,
  ...props
}: TogglePrimitive.Props) {
  return (
    <TogglePrimitive
      data-slot="toggle-group-item"
      className={cn(
        "text-2xs text-deep-brown/40 focus-visible:ring-warm-yellow focus-visible:ring-offset-cream-background aria-pressed:text-deep-brown inline-flex items-center gap-1.5 rounded-full px-5 py-2 font-normal transition-all outline-none select-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 aria-pressed:bg-white aria-pressed:font-semibold aria-pressed:shadow-sm [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:not-aria-pressed:opacity-40 [&_svg]:aria-pressed:opacity-100",
        className,
      )}
      {...props}
    >
      {children}
    </TogglePrimitive>
  );
}

export { ToggleGroup, ToggleGroupItem };
