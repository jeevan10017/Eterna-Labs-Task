"use client"

import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { memo, forwardRef } from "react"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-bold transition-all duration-125 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#526fff] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[#526fff] text-black hover:bg-[#3d5aff] active:scale-95",
        outline: "border border-[#323542] bg-[#22242d] hover:bg-[#22242d]/80 text-[#fcfcfc]",
        ghost: "hover:bg-[#18181a] text-[#c8c9d1]",
        secondary: "bg-[#18181a] text-[#fcfcfc] hover:bg-[#1b1b1d]",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-10 px-6",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export const Button = memo(
  forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, ...props }, ref) => {
      return (
        <button
          className={cn(buttonVariants({ variant, size }), className)}
          ref={ref}
          {...props}
        />
      )
    }
  )
)

Button.displayName = "Button"

