"use client"

import { memo } from "react"
import { cn } from "@/lib/utils"
import { ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react"
import { Button } from "@/components/atoms/Button"
import type { LucideIcon } from "lucide-react"

export interface SortButtonProps {
  active: boolean
  direction?: "asc" | "desc"
  onClick: () => void
  className?: string
  icon?: LucideIcon
  label?: string
  hideLabel?: boolean
}

export const SortButton = memo(function SortButton({
  active,
  direction,
  onClick,
  className,
  icon,
  label = "Time",
  hideLabel = false,
}: SortButtonProps) {
  const renderIcon = () => {
    if (icon) {
      const IconComponent = icon
      return <IconComponent className="w-4 h-4" />
    }
    if (!active) {
      return <ArrowUpDown className="w-4 h-4" />
    }
    return direction === "asc" ? (
      <ArrowUp className="w-3 h-3" />
    ) : (
      <ArrowDown className="w-3 h-3" />
    )
  }

  return (
    <div className="flex items-center gap-1">
      <Button
        variant="ghost"
        size="icon"
        onClick={onClick}
        className={cn(
          "h-6 w-6 rounded text-[10px]",
          active && "bg-[#18181a] text-[#526fff]",
          !active && "text-[#a0a0a0]",
          className
        )}
      >
        {renderIcon()}
      </Button>
      {!hideLabel && <span className="text-[10px] text-[#a0a0a0]">{label}</span>}
    </div>
  )
})

