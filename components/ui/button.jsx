import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-white transition-colors",
  {
    variants: {
      variant: {
        default: "bg-accent text-primary hover:bg-accent-hover",
        primary: "bg-primary text-off-white",
        outline: "border border-accent bg-transperent text-accent hover:bg-accent hover:text-primary",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-7 gap-1.5 px-3 has-[>svg]:px-2.5",
        md: "h-8 px-4",
        lg: "h-10 px-6 has-[>svg]:px-4 text-sm uppercase tracking-[2px]",
        xl: "h-12 px-8",
      },
      shape: {
        default: "rounded-md",
        round: "rounded-3xl",
        flat: "rounded-md",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props} />
  );
}

export { Button, buttonVariants }
