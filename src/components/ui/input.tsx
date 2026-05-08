import * as React from "react";
import { Input as InputPrimitive } from "@base-ui/react/input";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "border-deep-brown/15 text-md text-deep-brown placeholder:text-deep-brown/40 focus-visible:border-warm-yellow focus-visible:ring-warm-yellow/30 aria-invalid:border-error aria-invalid:bg-error-light w-full min-w-0 rounded-xl border-2 bg-transparent px-4 py-3 transition-colors outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-0",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
