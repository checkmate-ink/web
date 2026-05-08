"use client"

import { Switch as SwitchPrimitive } from "@base-ui/react/switch"

import { cn } from "@/lib/utils"

function Switch({ className, ...props }: SwitchPrimitive.Root.Props) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer inline-flex h-6 w-11 shrink-0 items-center rounded-full p-[3px] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-warm-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-cream-background disabled:cursor-not-allowed disabled:opacity-50 data-checked:bg-olive-green data-unchecked:bg-disabled-fill",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className="pointer-events-none block size-[18px] rounded-full bg-white transition-transform data-checked:translate-x-[20px] data-unchecked:translate-x-0"
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
