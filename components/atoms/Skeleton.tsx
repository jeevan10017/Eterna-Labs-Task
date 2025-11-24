"use client"

import { cn } from "@/lib/utils"
import { memo } from "react"

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "text" | "circular" | "rectangular"
}

export const Skeleton = memo(function Skeleton({
  className,
  variant = "rectangular",
  ...props
}: SkeletonProps) {
  const variantClasses = {
    text: "h-4 rounded",
    circular: "rounded-md",
    rectangular: "rounded-md",
  }

  return (
    <div
      className={cn(
        "shimmer bg-[#18181a]",
        variantClasses[variant],
        className
      )}
      {...props}
    />
  )
})

