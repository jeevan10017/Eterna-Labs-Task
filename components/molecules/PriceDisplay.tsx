"use client"

import { memo } from "react"
import { cn } from "@/lib/utils"
import { AnimatedNumber } from "@/components/atoms/AnimatedNumber"

export interface PriceDisplayProps {
  marketCap: number
  volume: number
  liquidity: number
  className?: string
}

const formatCurrency = (value: number): string => {
  if (value >= 1e9) return `$${(value / 1e9).toFixed(2)}B`
  if (value >= 1e6) return `$${(value / 1e6).toFixed(2)}M`
  if (value >= 1e3) return `$${(value / 1e3).toFixed(2)}K`
  return `$${value.toFixed(2)}`
}

export const PriceDisplay = memo(function PriceDisplay({
  marketCap,
  volume,
  liquidity,
  className,
}: PriceDisplayProps) {
  return (
    <div className={cn("space-y-1", className)}>
      <div className="flex items-center gap-4 text-xs sm:text-sm">
        <div>
          <span className="text-[#c8c9d1]">MC: </span>
          <AnimatedNumber value={marketCap} format={formatCurrency} className="text-[#fcfcfc]" />
        </div>
        <div>
          <span className="text-[#c8c9d1]">V: </span>
          <AnimatedNumber value={volume} format={formatCurrency} className="text-[#fcfcfc]" />
        </div>
        <div>
          <span className="text-[#c8c9d1]">F: </span>
          <span className="text-[#fcfcfc]">{liquidity.toFixed(3)}</span>
        </div>
      </div>
    </div>
  )
})

