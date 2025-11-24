"use client"

import { memo } from "react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/atoms/Badge"

export interface PercentageBadgeProps {
  value: number
  label?: string
  className?: string
  showLabel?: boolean
}

export const PercentageBadge = memo(function PercentageBadge({
  value,
  label,
  className,
  showLabel = false,
}: PercentageBadgeProps) {
  const isPositive = value > 0
  const isZero = value === 0
  
  let displayValue = ""
  if (Math.abs(value) >= 1000) {
    displayValue = `${(value / 1000).toFixed(0)}k`
  } else if (Math.abs(value) >= 100) {
    displayValue = `${value.toFixed(0)}%`
  } else if (Math.abs(value) >= 1) {
    displayValue = `${isPositive ? "+" : ""}${value.toFixed(0)}%`
  } else if (value === 0) {
    displayValue = "0%"
  } else {
    // For very small values, show as "1m" format if less than 1%
    const absValue = Math.abs(value)
    if (absValue < 1 && absValue > 0) {
      displayValue = `${Math.round(absValue * 1000)}m`
    } else {
      displayValue = `${isPositive ? "+" : ""}${value.toFixed(0)}%`
    }
  }

  // If label is provided, use it as the display value (e.g., "DS 2mo")
  const finalDisplay = label || displayValue
  const isLabelBadge = !!label

  return (
    <Badge
      variant={isZero ? "neutral" : isPositive ? "positive" : "negative"}
      className={cn("text-[10px] font-medium px-1.5 py-0.5 rounded bg-[#1a1a1a] border-none", 
        isLabelBadge && "text-[#3b82f6]",
        !isLabelBadge && isPositive && "text-[#10b981]",
        !isLabelBadge && !isPositive && !isZero && "text-[#ef4444]",
        !isLabelBadge && isZero && "text-[#a0a0a0]",
        className)}
    >
      {finalDisplay}
    </Badge>
  )
})

