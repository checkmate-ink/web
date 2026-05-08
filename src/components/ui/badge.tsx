import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center rounded-full text-xs font-semibold text-deep-brown whitespace-nowrap [&_svg]:pointer-events-none [&_svg]:size-3.5",
  {
    variants: {
      variant: {
        yellow: "bg-cream-yellow",
        blue: "bg-soft-blue",
        green: "bg-light-olive",
        pink: "bg-soft-peach",
      },
      hasIcon: {
        true: "gap-1.25 py-1.25 pr-3.5 pl-2.5",
        false: "px-3.5 py-1.25",
      },
    },
    defaultVariants: {
      variant: "yellow",
      hasIcon: false,
    },
  }
)

interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({
  className,
  variant = "yellow",
  hasIcon,
  ...props
}: BadgeProps) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant, hasIcon, className }))}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
