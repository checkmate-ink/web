"use client"

import * as React from "react"
import { Toggle as TogglePrimitive } from "@base-ui/react/toggle"
import { ToggleGroup as ToggleGroupPrimitive } from "@base-ui/react/toggle-group"

import { cn } from "@/lib/utils"

function ToggleGroup({
  className,
  children,
  ...props
}: ToggleGroupPrimitive.Props) {
  return (
    <ToggleGroupPrimitive
      data-slot="toggle-group"
      className={cn(
        "inline-flex items-center rounded-full bg-disabled-fill p-1",
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive>
  )
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
        "inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-2xs font-normal text-deep-brown/40 outline-none transition-all select-none focus-visible:ring-2 focus-visible:ring-warm-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-cream-background disabled:pointer-events-none disabled:opacity-50 aria-pressed:bg-white aria-pressed:font-semibold aria-pressed:text-deep-brown aria-pressed:shadow-sm [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:aria-pressed:opacity-100 [&_svg]:not-aria-pressed:opacity-40",
        className
      )}
      {...props}
    >
      {children}
    </TogglePrimitive>
  )
}

export { ToggleGroup, ToggleGroupItem }
