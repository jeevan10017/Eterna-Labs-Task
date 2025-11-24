"use client"

import { memo, useRef } from "react"
import { cn } from "@/lib/utils"
import {
  ChevronDown,
  Grid3x3,
  X, 
  User,
  Bookmark,
  Volume2,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"


const XSocialIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

interface FooterNavItem {
  label: string
  icon?: LucideIcon
  highlight?: boolean
}

interface FooterMetric {
  label: string
  value: string
  color: string
}

interface PulseFooterProps {
  navItems: FooterNavItem[]
  metrics: FooterMetric[]
  connectionStatus: "connected" | "disconnected" | "connecting"
}

export const PulseFooter = memo(function PulseFooter({
  navItems,
  metrics,
  connectionStatus,
}: PulseFooterProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <footer className="fixed bottom-0 left-0 z-50 w-full border-t border-[#151a26] bg-[#02030a]/95 backdrop-blur">
      <div className="w-full overflow-x-auto scrollbar-hide">
        <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 px-2 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 md:py-2.5 lg:py-3 min-w-min">
          {/* Preset Button */}
          <button className="flex items-center gap-0.5 sm:gap-1 rounded-full bg-[#0c1226] border border-[#23315e] text-[#b9c6f5] px-1.5 sm:px-2.5 md:px-3 lg:px-4 py-0.5 sm:py-1 text-[9px] sm:text-[10px] md:text-[11px] lg:text-sm font-semibold tracking-wide shadow-[0_4px_12px_rgba(0,0,0,0.4)] flex-shrink-0 whitespace-nowrap">
            <Grid3x3 className="w-2 sm:w-2.5 md:w-3 lg:w-3.5 h-2 sm:h-2.5 md:h-3 lg:h-3.5" />
            PRESET
            <ChevronDown className="w-1.5 sm:w-2 md:w-2.5 lg:w-3 h-1.5 sm:h-2 md:h-2.5 lg:h-3" />
          </button>

          {/* Wallet/SOL Button */}
          <div className="flex items-center gap-0.5 sm:gap-1 rounded-full bg-[#030712] border border-[#1d2236] px-1.5 sm:px-2.5 md:px-3 lg:px-4 py-0.5 sm:py-1 text-[9px] sm:text-[10px] md:text-[11px] lg:text-sm text-[#dbe2ff] flex-shrink-0 whitespace-nowrap">
            <span className="font-semibold">1</span>
            <div className="w-2 sm:w-2.5 md:w-3 lg:w-4 h-2 sm:h-2.5 md:h-3 lg:h-4 rounded-full bg-gradient-to-br from-[#14F195] to-[#9945FF]" />
            <span className="font-semibold">0</span>
            <ChevronDown className="w-1.5 sm:w-2 md:w-2.5 lg:w-3 h-1.5 sm:h-2 md:h-2.5 lg:h-3" />
          </div>

          {/* Nav Items */}
          {navItems.map(({ label, icon: Icon, highlight }) => (
            <div
              key={`footer-nav-${label}`}
              className={cn(
                "flex items-center gap-0.5 sm:gap-1 rounded-full border px-1.5 sm:px-2 md:px-2.5 lg:px-3 py-0.5 sm:py-1 text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] text-[#cfd3f2] flex-shrink-0 whitespace-nowrap",
                highlight
                  ? "border-[#2857ff] bg-[#0f1220] text-[#6fa8ff]"
                  : "border-[#1a2030] bg-[#05070f]"
              )}
            >
              {Icon && <Icon className="w-2 sm:w-2.5 md:w-3 lg:w-3.5 h-2 sm:h-2.5 md:h-3 lg:h-3.5" />}
              <span>{label}</span>
            </div>
          ))}

          {/* Metrics */}
          {metrics.map(({ label, value, color }) => (
            <div
              key={`metric-${label}`}
              className="flex items-center gap-0.5 sm:gap-1 rounded-full border border-[#1e2436] bg-[#060913] px-1.5 sm:px-2 md:px-2.5 lg:px-3 py-0.5 sm:py-1 text-[#bfc4de] flex-shrink-0 whitespace-nowrap"
            >
              <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] uppercase tracking-wide text-[#7f86a8]">{label}</span>
              <span style={{ color }} className="text-[9px] sm:text-[10px] md:text-[11px] lg:text-sm font-semibold">
                {value}
              </span>
            </div>
          ))}

          {/* Connection Status */}
          <div className="flex items-center gap-0.5 sm:gap-1 px-1.5 sm:px-2 md:px-2.5 lg:px-3 py-0.5 sm:py-1 rounded-full border border-[#0f3b27] bg-[#041c12] text-[#7ef2ba] text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] font-semibold flex-shrink-0 whitespace-nowrap">
            <span
              className={cn(
                "w-1 sm:w-1.5 md:w-2 lg:w-2.5 h-1 sm:h-1.5 md:h-2 lg:h-2.5 rounded-full flex-shrink-0",
                connectionStatus === "connected"
                  ? "bg-[#10b981]"
                  : connectionStatus === "connecting"
                    ? "bg-[#f59e0b] animate-pulse"
                    : "bg-[#ef4444]"
              )}
            />
            <span>
              {connectionStatus === "connected"
                ? "Connection is stable"
                : connectionStatus === "connecting"
                  ? "Connecting..."
                  : "Disconnected"}
            </span>
          </div>

          {/* Global Button */}
          <button className="flex items-center gap-0.5 sm:gap-1 rounded-full border border-[#1a2030] bg-[#05070f] px-1.5 sm:px-2 md:px-2.5 lg:px-3 py-0.5 sm:py-1 text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] text-[#cfd3f2] hover:bg-[#0b0f1a] transition-colors flex-shrink-0 whitespace-nowrap">
            GLOBAL
            <ChevronDown className="w-1.5 sm:w-2 md:w-2.5 lg:w-3 h-1.5 sm:h-2 md:h-2.5 lg:h-3" />
          </button>

          {/* Icons */}
          <div className="flex items-center gap-0.5 sm:gap-1 md:gap-1.5 text-[#cfd3f2] flex-shrink-0">
            {[Bookmark, Volume2, User, XSocialIcon].map((Icon, idx) => (
              <button
                key={`footer-icon-${idx}`}
                className="w-6 sm:w-7 md:w-8 lg:w-9 h-6 sm:h-7 md:h-8 lg:h-9 rounded-full border border-[#1a2030] bg-[#05070f] hover:bg-[#10152b] transition-colors flex items-center justify-center flex-shrink-0"
              >
                <Icon className="w-2.5 sm:w-3 md:w-3.5 lg:w-4 h-2.5 sm:h-3 md:h-3.5 lg:h-4" />
              </button>
            ))}
            <button className="p-1 sm:p-1.5 md:p-2 hover:bg-[#1a1a1a] rounded transition-colors border border-[#1a2030] flex-shrink-0">
              <X className="w-2.5 sm:w-3 md:w-3.5 lg:w-4 h-2.5 sm:h-3 md:h-3.5 lg:h-4 text-[#a0a0a0]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
})