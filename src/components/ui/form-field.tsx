import * as React from "react"

import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface FormFieldProps extends React.ComponentProps<"input"> {
  label: string
  error?: string
}

function FormField({ label, error, className, id, ...props }: FormFieldProps) {
  const generatedId = React.useId()
  const fieldId = id ?? generatedId

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <Label htmlFor={fieldId}>{label}</Label>
      <Input id={fieldId} aria-invalid={!!error} {...props} />
      {error && (
        <p className="text-xs text-error">{error}</p>
      )}
    </div>
  )
}

export { FormField }
