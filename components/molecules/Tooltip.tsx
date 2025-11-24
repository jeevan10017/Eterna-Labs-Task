"use client"

import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { memo, ReactNode } from "react"
import { cn } from "@/lib/utils"

export interface TooltipProps {
  content: ReactNode
  children: ReactNode
  side?: "top" | "right" | "bottom" | "left"
  delayDuration?: number
}

export const Tooltip = memo(function Tooltip({
  content,
  children,
  side = "top",
  delayDuration = 300,
}: TooltipProps) {
  return (
    <TooltipPrimitive.Provider delayDuration={delayDuration}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            side={side}
            className={cn(
              "z-50 rounded-md bg-[#18181a] px-3 py-1.5 text-xs text-[#fcfcfc]",
              "border border-[#323542] shadow-lg",
              "animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"
            )}
            sideOffset={5}
          >
            {content}
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
})

