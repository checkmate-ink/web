"use client";

import { Progress as ProgressPrimitive } from "@base-ui/react/progress";

import { cn } from "@/lib/utils";

function Progress({
  className,
  children,
  value,
  ...props
}: ProgressPrimitive.Root.Props) {
  return (
    <ProgressPrimitive.Root
      value={value}
      data-slot="progress"
      className={cn("flex w-full flex-col gap-2.5", className)}
      {...props}
    >
      <div className="flex items-center justify-between">{children}</div>
      <ProgressTrack>
        <ProgressIndicator />
      </ProgressTrack>
    </ProgressPrimitive.Root>
  );
}

function ProgressTrack({ className, ...props }: ProgressPrimitive.Track.Props) {
  return (
    <ProgressPrimitive.Track
      data-slot="progress-track"
      className={cn(
        "bg-disabled-fill relative flex h-2 w-full items-center overflow-hidden rounded-[4px]",
        className,
      )}
      {...props}
    />
  );
}

function ProgressIndicator({
  className,
  ...props
}: ProgressPrimitive.Indicator.Props) {
  return (
    <ProgressPrimitive.Indicator
      data-slot="progress-indicator"
      className={cn(
        "bg-warm-yellow h-full rounded-[4px] transition-all",
        className,
      )}
      {...props}
    />
  );
}

function ProgressLabel({ className, ...props }: ProgressPrimitive.Label.Props) {
  return (
    <ProgressPrimitive.Label
      data-slot="progress-label"
      className={cn("text-2xs text-deep-brown font-medium", className)}
      {...props}
    />
  );
}

function ProgressValue({ className, ...props }: ProgressPrimitive.Value.Props) {
  return (
    <ProgressPrimitive.Value
      data-slot="progress-value"
      className={cn(
        "text-2xs text-deep-brown ml-auto font-semibold tabular-nums",
        className,
      )}
      {...props}
    />
  );
}

export {
  Progress,
  ProgressTrack,
  ProgressIndicator,
  ProgressLabel,
  ProgressValue,
};
