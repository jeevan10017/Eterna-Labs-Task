"use client"

import { memo } from "react"
import { cn } from "@/lib/utils"
import { ChevronDown, Wallet, Menu } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface PulseToolbarProps {
  toolbarIcons: LucideIcon[]
}

export const PulseToolbar = memo(function PulseToolbar({ toolbarIcons }: PulseToolbarProps) {
  return (
    <>
      {/* Mobile Toolbar (sm and below) */}
      <div className="lg:hidden flex items-center justify-between mb-3 sm:mb-4 flex-shrink-0 gap-2 overflow-x-auto scrollbar-hide pb-2">
        <button className="flex-shrink-0 w-7 sm:w-8 h-7 sm:h-8 rounded-full border border-[#1f2433] bg-[#0f121c] text-[#d8def5] hover:bg-[#181d2c] transition-colors flex items-center justify-center">
          <Menu className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
        </button>
        
        <div className="flex items-center gap-1 sm:gap-1.5 rounded-full border border-[#181e2f] bg-[#0a0d18] px-2 sm:px-2.5 py-0.5 sm:py-1 flex-shrink-0">
          <div className="w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-gradient-to-br from-[#14F195] to-[#9945FF]" />
          <h2 className="text-xs sm:text-sm font-semibold text-[#f4f6ff]">Pulse</h2>
        </div>

        <div className="flex items-center gap-1 sm:gap-1.5 rounded-full border border-[#181e2f] bg-[#0a0d18] px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-[11px] text-[#d8def5] flex-shrink-0">
          
         <img 
                  src="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png"
                  alt="Solana"
                  className="w-4 h-4 rounded-full"
                />
          
          SOL
          <ChevronDown className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-[#8d94b5]" />
        </div>

        <div className="flex items-center gap-0.5 sm:gap-1 flex-shrink-0">
          {toolbarIcons.slice(0, 3).map((Icon, idx) => (
            <button
              key={`toolbar-${idx}`}
              className="w-6 sm:w-7 h-6 sm:h-7 rounded-full border border-[#1f2433] bg-[#0f121c] text-[#c8cee5] hover:bg-[#181d2c] transition-colors flex items-center justify-center"
              type="button"
            >
              <Icon className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
            </button>
          ))}
        </div>

        <button className="flex-shrink-0 w-6 sm:w-7 h-6 sm:h-7 rounded-full border border-[#1f2433] bg-[#0f121c] text-[#d8def5] hover:bg-[#181d2c] transition-colors flex items-center justify-center text-[10px] sm:text-xs">
          ?
        </button>

        <div className="flex items-center gap-0.5 sm:gap-1 rounded-full border border-[#1f2433] bg-[#0f121c] px-2 sm:px-2.5 py-0.5 sm:py-1 text-[9px] sm:text-[10px] text-[#d8def5] flex-shrink-0">
          <span className="font-semibold">1</span>
          <div className="w-3 sm:w-3.5 h-3 sm:h-3.5 rounded-full bg-gradient-to-br from-[#14F195] to-[#9945FF]" />
          <span className="font-semibold">0</span>
          <ChevronDown className="w-2 sm:w-2.5 h-2 sm:h-2.5 text-[#8d94b5]" />
        </div>

        <button className="flex-shrink-0 w-6 sm:w-7 h-6 sm:h-7 rounded-full border border-[#1f2433] bg-[#0f121c] text-[#d8def5] hover:bg-[#181d2c] transition-colors flex items-center justify-center">
          <span className="text-[9px] sm:text-xs font-bold">⚙</span>
        </button>
      </div>

      {/* Tablet Toolbar (md to lg) */}
      <div className="hidden lg:hidden md:flex items-center justify-between mb-4 flex-shrink-0 gap-2">
        <div className="flex items-center gap-2 rounded-full border border-[#181e2f] bg-[#0a0d18] px-3 py-1.5">
          <img 
                  src="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png"
                  alt="Solana"
                  className="w-4 h-4 rounded-full"
                />
          <h2 className="text-base font-semibold text-[#f4f6ff]">Pulse</h2>
        </div>
        <div className="flex items-center gap-1.5 rounded-full border border-[#181e2f] bg-[#0a0d18] px-3 py-1.5 text-[12px] text-[#d8def5]">
         <img 
                  src="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png"
                  alt="Solana"
                  className="w-4 h-4 rounded-full"
                />
          SOL
          <ChevronDown className="w-3 h-3 text-[#8d94b5]" />
        </div>
        
        <div className="flex items-center gap-1.5">
          {toolbarIcons.slice(0, 4).map((Icon, idx) => (
            <button
              key={`toolbar-${idx}`}
              className="w-8 h-8 rounded-full border border-[#1f2433] bg-[#0f121c] text-[#c8cee5] hover:bg-[#181d2c] transition-colors flex items-center justify-center"
              type="button"
            >
              <Icon className="w-4 h-4" />
            </button>
          ))}
        </div>

        <button className="w-8 h-8 rounded-full border border-[#1f2433] bg-[#0f121c] text-[#d8def5] hover:bg-[#181d2c] transition-colors flex items-center justify-center">
          <span className="text-sm">?</span>
        </button>

        <div className="flex items-center gap-1.5 rounded-full border border-[#1f2433] bg-[#0f121c] px-3 py-1.5 text-[12px] text-[#d8def5]">
          <span className="font-semibold">1</span>
          <img 
                  src="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png"
                  alt="Solana"
                  className="w-4 h-4 rounded-full"
                />
          <span className="font-semibold">0</span>
          <ChevronDown className="w-3 h-3 text-[#8d94b5]" />
        </div>
      </div>

      {/* Desktop Toolbar (lg and above) */}
      <div className="hidden lg:flex items-center justify-between mb-6 flex-shrink-0">
        <div className="flex items-center gap-3.5">
          <div className="flex items-center gap-2 rounded-full border border-[#181e2f] bg-[#0a0d18] px-3 py-1.5">
            {/* <div className="w-5 h-5 rounded-full" /> */}
            <h2 className="text-2xl font-semibold text-[#f4f6ff]">Pulse</h2>
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-[#181e2f] bg-[#0a0d18] px-4 py-1.5 text-[13px] text-[#d8def5]">
            <img 
                  src="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png"
                  alt="Solana"
                  className="w-4 h-4 rounded-full"
                />
            {/* <div className="w-5 h-5 rounded-full " /> */}
            SOL
            <ChevronDown className="w-3.5 h-3.5 text-[#8d94b5]" />
          </div>
        </div>
        
        <div className="flex items-center gap-2.5">
          <button className="w-9 h-9 rounded-full border border-[#1f2433] bg-[#0f121c] text-[#d8def5] hover:bg-[#181d2c] transition-colors flex items-center justify-center">
            <span className="text-base">?</span>
          </button>
          <button className="flex items-center gap-1.5 rounded-full border border-[#1f2433] bg-[#0f121c] px-4 py-1.5 text-[13px] text-[#d8def5] hover:bg-[#181d2c] transition-colors">
            Display
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-1.5">
            {toolbarIcons.map((Icon, idx) => (
              <button
                key={`toolbar-${idx}`}
                className="w-9 h-9 rounded-full border border-[#1f2433] bg-[#0f121c] text-[#c8cee5] hover:bg-[#181d2c] transition-colors flex items-center justify-center"
                type="button"
              >
                <Icon className="w-4.25 h-4.25" />
              </button>
            ))}
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-[#1f2433] bg-[#0f121c] px-4 py-1.5 text-[13px] text-[#d8def5]">
            <div className="w-5 h-5 rounded border border-[#2c3148] bg-[#080b15] flex items-center justify-center">
              <Wallet className="w-3.5 h-3.5 text-[#c8cee5]" />
            </div>
            <span className="font-semibold text-white">1</span>
            <img 
                  src="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png"
                  alt="Solana"
                  className="w-4 h-4 rounded-full"
                />
            <span className="font-semibold text-white">0</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#8d94b5]" />
          </div>
        </div>
      </div>
    </>
  )
})

