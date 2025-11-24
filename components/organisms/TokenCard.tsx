"use client"

import { memo } from "react"
import { cn } from "@/lib/utils"
import type { Token } from "@/types/token"
import { TimeAgo } from "@/components/atoms/TimeAgo"
import {
  Search,
  Trophy,
  Crown,
  User,
  Globe,
  Zap,
  Send,
  Users,
  BarChart3,
  Copy,
  HelpCircle,
  Target,
  Ghost,
  Boxes,
  ChefHat,
  Link,
} from "lucide-react"
import { Button } from "@/components/atoms/Button"

// Add animation styles
const animationStyles = `
  @keyframes horizontalPulse {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }

  .token-card-hover:hover {
    background: linear-gradient(90deg, #0e0f14 0%, #181d43 50%, #0c0e15 100%);
    background-size: 200% 100%;
    animation: horizontalPulse 3s ease-in-out infinite;
  }
`

// Inject styles
if (typeof document !== 'undefined') {
  const style = document.createElement('style')
  style.textContent = animationStyles
  document.head.appendChild(style)
}

export interface TokenCardProps {
  token: Token
  className?: string
}

export const TokenCard = memo(function TokenCard({
  token,
  className,
}: TokenCardProps) {
  const formatCurrency = (value: number): string => {
    if (value >= 1e6) return `$${(value / 1e6).toFixed(2)}M`
    if (value >= 1e3) return `$${(value / 1e3).toFixed(2)}K`
    return `$${value.toFixed(2)}`
  }

  const formatNumber = (num: number): string => {
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`
    return num.toString()
  }


  const bondingValue = 85 
  const isBondingPositive = bondingValue > 50 
  // ----------------------------------

  const crowns = token.holders > 0 ? `5/${token.holders}` : undefined
  const solValue = 0 
  const iconMuted = "w-3.5 h-3.5 text-[#9399af]"

  // Added 'tooltip' property to items
  const badgeItems = [
    { icon: HelpCircle, label: "20%", tone: "negative", tooltip: "Uncertainty" },
    { icon: Users, label: "0%", tone: "positive", tooltip: "Team Holding" },
    { icon: ChefHat, label: "0% 5d", tone: "neutral", tooltip: "Dev Cooked" },
    { icon: Target, label: "20%", tone: "negative", tooltip: "Sniper Count" },
    { icon: Ghost, label: "0%", tone: "positive", tooltip: "Ghost Mode" },
    { icon: Boxes, label: "0%", tone: "positive", tooltip: "Bundle %" },
  ] as const

  const badgeToneText: Record<
    (typeof badgeItems)[number]["tone"],
    { text: string; icon: string }
  > = {
    positive: { text: "text-[#58f0b1]", icon: "text-[#58f0b1]" },
    negative: { text: "text-[#ff6c7c]", icon: "text-[#ff6c7c]" },
    neutral: { text: "text-[#cbd1e3]", icon: "text-[#cbd1e3]" },
  }

  return (
    <div
      className={cn(
        "group relative rounded-[10px] border border-[#1f2230] bg-[#0b0d16] p-3 transition-all duration-150 token-card-hover",
        "hover:border-[#2a2d3f]",
        className
      )}
    >

      <div 
        className={cn(
          "absolute -top-9 left-1/2 -translate-x-1/2 z-[70]",
          
          "opacity-0 transform translate-y-2 transition-all duration-200 ease-out",
          "group-hover:opacity-100 group-hover:translate-y-0",
          isBondingPositive ? "border-[#22c55e]/30 text-[#22c55e]" : "border-[#ff4d5a]/30 text-[#ff4d5a]"
        )}
      >
        Bonding {bondingValue}%
        {/* Little triangle arrow pointing down */}
        <div className={cn(
          // "absolute -bottom-[5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 rotate-45 border-b border-r bg-[#0b0d16]",
          //  isBondingPositive ? "border-[#22c55e]/30" : "border-[#ff4d5a]/30"
        )}></div>
      </div>


      {/* Top Row: Avatar and Content */}
      <div className="flex items-start gap-3 pt-1">
        
        {/* Avatar with square treatment AND Hover Modal Logic */}
        <div className="relative flex-shrink-0 group/avatar">
          
          <div className="absolute left-0 top-0 z-[60] hidden w-[260px] -translate-y-[10%] translate-x-[10%] rounded-xl border border-[#2a2d3f] bg-[#0b0d16] p-2 shadow-2xl group-hover/avatar:block pointer-events-none">
            {/* Main Large Image */}
            <div className="rounded-lg overflow-hidden border border-[#2a2d3f] bg-[#141624]">
             {token.imageUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={token.imageUrl}
                  alt={token.name}
                  className="w-full h-auto object-cover aspect-square"
                />
              ) : (
                <div className="w-full aspect-square bg-[#181a25] flex items-center justify-center text-4xl text-[#c8c9d1] font-semibold">
                  {token.name.charAt(0).toUpperCase()}
                </div>
              )}
            </div>

            {/* Similar Tokens Section */}
            <div className="mt-2.5">
              <div className="text-[#6f768d] text-[10px] font-medium mb-1.5 px-0.5">Similar Tokens</div>
              <div className="flex items-center gap-2 rounded-lg bg-[#141624] border border-[#1f2230] p-1.5">
                <div className="w-8 h-8 rounded bg-[#1f2230] flex-shrink-0 overflow-hidden border border-[#2a2d3f]">
                   {token.imageUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={token.imageUrl} className="w-full h-full object-cover" alt="" />
                   ) : (
                    <div className="w-full h-full flex items-center justify-center text-[10px] text-gray-500">?</div>
                   )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                     <span className="text-[11px] font-bold text-gray-200 truncate">{token.name}</span>
                     <span className="text-[10px] text-[#22c55e] font-medium">59m</span>
                  </div>
                  <div className="flex items-center justify-between mt-0.5">
                     <span className="text-[9px] text-[#6f768d]">TX: 43s</span>
                     <span className="text-[10px] font-medium text-[#3b82f6]">4.23K</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* -------------------------------- */}

          <div className="w-[80px] h-[80px] rounded-[4px] border border-[#facc15] bg-[#141624] p-0.5">
            {token.imageUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={token.imageUrl}
                alt={token.name}
                className="w-full h-full rounded-[6px] object-cover"
              />
            ) : (
              <div className="w-full h-full rounded-[6px] bg-[#181a25] flex items-center justify-center text-sm text-[#c8c9d1] font-semibold">
                {token.name.charAt(0).toUpperCase()}
              </div>
            )}
          </div>
          <div className="flex items-center justify-center gap-1 mt-1">
            <div className="text-[9px] text-[#f3f4fa] truncate max-w-[52px] font-medium">
              {token.contractAddress}
            </div>
          </div>
        </div>

        {/* Middle content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 text-[13px]">
            <h3 className="font-semibold text-white leading-tight truncate text-lg">{token.name}</h3>
            <span className="text-[11px] text-[#9ba2bb] uppercase font-bold tracking-wide text-md">{token.symbol}</span>
            <Copy className={cn(iconMuted, "w-3 h-3 text-[#6f768d] flex-shrink-0 cursor-pointer hover:text-white")} />
          </div>

          <div className="flex flex-wrap items-center gap-2 mt-1 text-[11px]">
            <TimeAgo timestamp={token.createdAt} className="text-[#4af3a3] font-semibold flex-shrink-0" />
            <div className="flex items-center gap-0.5 text-[#aeb3c6] flex-shrink-0">
              <User className={cn(iconMuted, "w-4 h-4")} />
              <span className="font-medium">{formatNumber(token.holders)}</span>
            </div>
            <Globe className={cn(iconMuted, "flex-shrink-0 hover:text-white cursor-pointer transition-colors")} />
            <Send className={cn(iconMuted, "flex-shrink-0 hover:text-white cursor-pointer transition-colors")} />
            <Link className={cn(iconMuted, "flex-shrink-0 hover:text-white cursor-pointer transition-colors")} />
            <Search className={cn(iconMuted, "flex-shrink-0 hover:text-white cursor-pointer transition-colors")} />
            <div className="flex items-center gap-0.5 text-[#aeb3c6] flex-shrink-0">
              <BarChart3 className={cn(iconMuted, "w-3 h-3")} />
              <span className="font-medium">0</span>
            </div>
            <div className="flex items-center gap-0.5 text-[#aeb3c6] flex-shrink-0">
              <Trophy className={cn(iconMuted, "w-3 h-3")} />
              <span className="font-medium">0</span>
            </div>
            {crowns && (
              <div className="flex items-center gap-0.5 text-[#f4c84a] flex-shrink-0">
                <Crown className={cn(iconMuted, "text-[#f4c84a] w-3 h-3")} />
                <span className="font-semibold text-[#fef4cf]">{crowns}</span>
              </div>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-1 text-[9.5px] font-semibold uppercase tracking-wide mt-5">
            {badgeItems.map((item, index) => {
              const Icon = item.icon
              const tone = badgeToneText[item.tone]
              return (
                <div 
                  key={`${item.label}-${index}`} 
                  className={cn("group/badge relative flex items-center gap-0.5 cursor-help", tone.text)}
                >
                  {/* Tooltip for Icon */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 hidden group-hover/badge:block z-50">
                    <div className="bg-[#1f2230] text-white text-[9px] py-1 px-2 rounded border border-[#2a2d3f] whitespace-nowrap shadow-lg">
                      {item.tooltip}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-[#1f2230] border-b border-r border-[#2a2d3f]"></div>
                    </div>
                  </div>

                  <Icon className={cn("w-5 h-4", tone.icon)} />
                  {item.label}
                </div>
              )
            })}
          </div>

        </div>

        {/* Right side stats */}
        <div className="flex flex-col items-end  flex-shrink-0 text-[11px]">
          <div className="flex items-baseline gap-1 text-[#8f96ad]">
            <span>MC</span>
            <span className="text-[rgb(81,250,174)] font-semibold text-lg">{formatCurrency(token.marketCap)}</span>
          </div>
          <div className="flex items-baseline gap-1 text-[#8f96ad]">
            <span>V</span>
            <span className="text-gray-100 font-semibold text-lg">{formatCurrency(token.volume)}</span>
          </div>
          <div className="flex items-center gap-2 text-[#8f96ad]">
            <div className="flex items-baseline gap-0.5">
              <span>F</span>
              <span className="text-white font-semibold">{token.liquidity.toFixed(3)}</span>
            </div>
            <div className="flex items-center gap-1">
              <span>TX</span>
              <span className="text-white font-semibold">{token.transactions}</span>
              <div className="w-8 h-[3px] rounded-full bg-[#1d2131] overflow-hidden">
                <div className="h-full w-3/4 bg-[#5ce9a8]" />
              </div>
            </div>
          </div>
          <Button
            variant="default"
            className="mt-2 bg-[#3516ff] hover:bg-[#501fff] text-gray-900  font-extrabold rounded-[10px] h-6 px-3 text-[11px] transition-colors duration-125 flex items-center gap-1 border border-[#324bff]"
          >
            <Zap className="w-4 h-4 text-gray-900" />
            {solValue.toFixed(0)} SOL
          </Button>
        </div>
      </div>
    </div>
  )
})