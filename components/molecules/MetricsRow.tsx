"use client"

import { memo } from "react"
import { cn } from "@/lib/utils"
import { Users, TrendingUp, Trophy, Crown } from "lucide-react"

export interface MetricsRowProps {
  holders: number
  transactions: number
  trophies?: number
  crowns?: string
  className?: string
}

export const MetricsRow = memo(function MetricsRow({
  holders,
  transactions,
  trophies = 0,
  crowns,
  className,
}: MetricsRowProps) {
  const formatNumber = (num: number): string => {
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`
    return num.toString()
  }

  return (
    <div className={cn("flex items-center gap-3 text-xs sm:text-sm", className)}>
      <div className="flex items-center gap-1 text-[#c8c9d1]">
        <Users className="w-3.5 h-3.5" />
        <span>{formatNumber(holders)}</span>
      </div>
      <div className="flex items-center gap-1 text-[#c8c9d1]">
        <TrendingUp className="w-3.5 h-3.5" />
        <span>{transactions}</span>
      </div>
      {trophies > 0 && (
        <div className="flex items-center gap-1 text-[#c8c9d1]">
          <Trophy className="w-3.5 h-3.5" />
          <span>{trophies}</span>
        </div>
      )}
      {crowns && (
        <div className="flex items-center gap-1 text-[#c8c9d1]">
          <Crown className="w-3.5 h-3.5" />
          <span>{crowns}</span>
        </div>
      )}
    </div>
  )
})

