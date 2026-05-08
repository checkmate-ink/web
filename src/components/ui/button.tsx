import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center rounded-full text-md font-semibold whitespace-nowrap transition-all outline-none select-none focus-visible:ring-2 focus-visible:ring-warm-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-cream-background disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4.5",
  {
    variants: {
      variant: {
        default:
          "bg-warm-yellow text-deep-brown hover:bg-warm-yellow/85 disabled:bg-disabled-fill disabled:text-disabled-text",
        secondary:
          "border-2 border-deep-brown/20 bg-transparent text-deep-brown hover:bg-deep-brown/5 disabled:border-deep-brown/8 disabled:text-disabled-text",
        destructive:
          "bg-error text-white hover:bg-error/90",
        ghost:
          "text-deep-brown hover:bg-deep-brown/5",
        link: "text-deep-brown underline-offset-4 hover:underline",
      },
      size: {
        default: "gap-2 px-7 py-3",
        sm: "gap-1.5 px-5 py-2 text-sm",
        lg: "gap-2 px-9 py-3.5 text-base",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
