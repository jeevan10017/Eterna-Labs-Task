"use client"

import { useEffect, useState, memo } from "react"
import { cn } from "@/lib/utils"

export interface AnimatedNumberProps {
  value: number
  format?: (value: number) => string
  className?: string
  duration?: number
}

export const AnimatedNumber = memo(function AnimatedNumber({
  value,
  format = (v) => v.toFixed(2),
  className,
  duration = 300,
}: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState(value)
  const [isUpdating, setIsUpdating] = useState(false)

  useEffect(() => {
    if (value === displayValue) return

    setIsUpdating(true)
    const startValue = displayValue
    const endValue = value
    const startTime = Date.now()

    const animate = () => {
      const now = Date.now()
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function
      const easeOutCubic = 1 - Math.pow(1 - progress, 3)
      const currentValue = startValue + (endValue - startValue) * easeOutCubic

      setDisplayValue(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setIsUpdating(false)
      }
    }

    requestAnimationFrame(animate)
  }, [value, duration, displayValue])

  const colorClass =
    value > displayValue
      ? "text-[#10b981]"
      : value < displayValue
        ? "text-[#ef4444]"
        : "text-[#fcfcfc]"

  return (
    <span
      className={cn(
        "transition-colors duration-300",
        isUpdating ? colorClass : "text-[#fcfcfc]",
        className
      )}
    >
      {format(displayValue)}
    </span>
  )
})

