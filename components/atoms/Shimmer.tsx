"use client"

import { cn } from "@/lib/utils"
import { memo } from "react"

export interface ShimmerProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string | number
  height?: string | number
}

export const Shimmer = memo(function Shimmer({
  className,
  width = "100%",
  height = "100%",
  style,
  ...props
}: ShimmerProps) {
  return (
    <div
      className={cn("shimmer bg-[#1a1a1a] rounded", className)}
      style={{ width, height, ...style }}
      {...props}
    />
  )
})

