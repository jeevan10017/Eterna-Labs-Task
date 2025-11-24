"use client"

import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { memo } from "react"

const badgeVariants = cva(
  "inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-[#18181a] text-[#fcfcfc] border border-[#323542]",
        positive: "bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/20",
        negative: "bg-[#ef4444]/10 text-[#ef4444] border border-[#ef4444]/20",
        neutral: "bg-[#323542] text-[#c8c9d1]",
        accent: "bg-[#526fff]/10 text-[#526fff] border border-[#526fff]/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  children: React.ReactNode
}

export const Badge = memo(function Badge({
  className,
  variant,
  children,
  ...props
}: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {children}
    </div>
  )
})

