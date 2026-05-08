import { cva, type VariantProps } from "class-variance-authority"
import * as m from "motion/react-client"

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

const spring = { type: "spring", stiffness: 400, damping: 17 } as const

interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  pressable?: boolean
}

function Badge({
  className,
  variant = "yellow",
  hasIcon,
  pressable,
  ...props
}: BadgeProps) {
  const classes = cn(badgeVariants({ variant, hasIcon, className }))

  if (pressable) {
    const { children, ...rest } = props
    return (
      <m.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={spring}
        className="inline-flex cursor-pointer"
      >
        <span data-slot="badge" className={classes} {...rest}>
          {children}
        </span>
      </m.div>
    )
  }

  return (
    <span data-slot="badge" className={classes} {...props} />
  )
}

export { Badge, badgeVariants }
