"use client"

import { memo } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/atoms/Button"

export interface FilterChipProps {
  label: string
  active: boolean
  onClick: () => void
  className?: string
}

export const FilterChip = memo(function FilterChip({
  label,
  active,
  onClick,
  className,
}: FilterChipProps) {
  return (
    <Button
      variant={active ? "default" : "outline"}
      size="sm"
      onClick={onClick}
      className={cn(
        "h-5 px-1.5 text-[10px] font-medium rounded-full",
        active && "bg-[#3b82f6] text-white hover:bg-[#2563eb]",
        !active && "bg-transparent text-[#a0a0a0] hover:text-[#fcfcfc] border border-[#2a2a2a]",
        className
      )}
    >
      {label}
    </Button>
  )
})

