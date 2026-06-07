import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-yellow text-secondary",
        secondary:
          "border-transparent bg-primary-light text-secondary",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground",
        outline: "text-foreground",
        circle: "border-transparent bg-white text-primary flex items-center justify-center rounded-full aspect-square p-4 shadow-sm",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  ...props
}) {
  return (
    (<div className={cn(badgeVariants({ variant }), className)} {...props} />)
  );
}

export { Badge, badgeVariants }
