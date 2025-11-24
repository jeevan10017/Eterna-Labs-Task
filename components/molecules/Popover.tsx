"use client"

import * as PopoverPrimitive from "@radix-ui/react-popover"
import { memo, ReactNode } from "react"
import { cn } from "@/lib/utils"

export interface PopoverProps {
  trigger: ReactNode
  content: ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export const Popover = memo(function Popover({
  trigger,
  content,
  open,
  onOpenChange,
}: PopoverProps) {
  return (
    <PopoverPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <PopoverPrimitive.Trigger asChild>{trigger}</PopoverPrimitive.Trigger>
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          className={cn(
            "z-50 w-72 rounded-[4px] border border-[#323542] bg-[#18181a] p-4 shadow-lg",
            "animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"
          )}
          sideOffset={5}
        >
          {content}
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  )
})

