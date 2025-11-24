"use client"

import { memo, useEffect, useState } from "react"
import { Header } from "./pulse/Header"
import { PulseToolbar } from "./pulse/PulseToolbar"
import { PulseColumns } from "./pulse/PulseColumns"
import { PulseFooter } from "./pulse/PulseFooter"
import type { Token, TokenStatus } from "@/types/token"
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks"
import { setConnectionStatus } from "@/lib/redux/slices/uiSlice"
import { updatePrice } from "@/lib/redux/slices/tokensSlice"
import { mockWebSocketService } from "@/lib/websocket/mock"
import { cn } from "@/lib/utils"
import {
  Bookmark,
  Grid3x3,
  Table,
  Volume2,
  Crosshair,
  Settings,
  Wallet,
  Twitter,
  TrendingUp,
  BarChart3,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

export interface PulseLayoutProps {
  tokens: Token[]
  loading?: boolean
}

export const PulseLayout = memo(function PulseLayout({
  tokens,
  loading = false,
}: PulseLayoutProps) {
  const dispatch = useAppDispatch()
  const connectionStatus = useAppSelector((state) => state.ui.connectionStatus)
  const [activeTabIndex, setActiveTabIndex] = useState(0)

  const tokensByStatus: Record<TokenStatus, Token[]> = {
    new: tokens.filter((t) => t.status === "new"),
    "final-stretch": tokens.filter((t) => t.status === "final-stretch"),
    migrated: tokens.filter((t) => t.status === "migrated"),
  }

  const columnConfig: { status: TokenStatus; title: string }[] = [
    { status: "new", title: "New Pairs" },
    { status: "final-stretch", title: "Final Stretch" },
    { status: "migrated", title: "Migrated" },
  ]
  const toolbarIcons = [Bookmark, Grid3x3, Table, Volume2, Crosshair, Settings]
  const footerNavItems = [
    { label: "Wallet", icon: Wallet },
    { label: "Twitter", icon: Twitter },
    { label: "Discover", icon: TrendingUp },
    { label: "Pulse", icon: BarChart3, highlight: true },
    { label: "PnL" },
  ]
  const footerMetrics = [
    { label: "BTC", value: "$86.3K", color: "#f5a431" },
    { label: "ETH", value: "$2.8K", color: "#5cc7ff" },
    { label: "SOL", value: "$129.9", color: "#58ffa6" },
    { label: "TVL", value: "$53.4K", color: "#cfd2e7" },
    { label: "Vol", value: "0.029", color: "#cfd2e7" },
    { label: "Fee", value: "0.003", color: "#cfd2e7" },
  ]

  // Set up WebSocket connection
  useEffect(() => {
    if (tokens.length === 0) return

    dispatch(setConnectionStatus("connecting"))
    const tokenIds = tokens.map((t) => t.id)

    mockWebSocketService.connect(tokenIds)

    const unsubscribe = mockWebSocketService.subscribe((update) => {
      dispatch(updatePrice(update))
    })

    dispatch(setConnectionStatus("connected"))

    return () => {
      unsubscribe()
      mockWebSocketService.disconnect()
      dispatch(setConnectionStatus("disconnected"))
    }
  }, [tokens, dispatch])

  const handlePrevTab = () => {
    setActiveTabIndex((prev) => (prev === 0 ? columnConfig.length - 1 : prev - 1))
  }

  const handleNextTab = () => {
    setActiveTabIndex((prev) => (prev === columnConfig.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#fcfcfc] flex flex-col">
      <Header />
      <main className="flex-1 w-full px-3 md:px-4 py-3 flex flex-col min-h-0">
        <PulseToolbar toolbarIcons={toolbarIcons} />
        
        {/* Mobile Tabs */}
        <div className="md:hidden flex items-center justify-between gap-2 mb-3">
          <button
            onClick={handlePrevTab}
            className="flex-shrink-0 w-8 h-8 rounded-full border border-[#1a2030] bg-[#05070f] hover:bg-[#10152b] transition-colors flex items-center justify-center text-[#8f95b5]"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <div className="flex-1 flex items-center gap-2 overflow-x-auto scrollbar-hide">
            {columnConfig.map((column, idx) => (
              <button
                key={`tab-${idx}`}
                onClick={() => setActiveTabIndex(idx)}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors flex-shrink-0",
                  activeTabIndex === idx
                    ? "bg-[#3b82f6] text-white border border-[#2563eb]"
                    : "bg-[#05070f] border border-[#1a2030] text-[#a0a0a0] hover:text-[#fcfcfc]"
                )}
              >
                {column.title}
              </button>
            ))}
          </div>
          
          <button
            onClick={handleNextTab}
            className="flex-shrink-0 w-8 h-8 rounded-full border border-[#1a2030] bg-[#05070f] hover:bg-[#10152b] transition-colors flex items-center justify-center text-[#8f95b5]"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Desktop Multi-Column & Mobile Single Column */}
        <div className="hidden md:block flex-1 w-full min-h-0">
          <PulseColumns columns={columnConfig} tokensByStatus={tokensByStatus} loading={loading} />
        </div>
        
        <div className="md:hidden flex-1 w-full min-h-0">
          <PulseColumns
            columns={[columnConfig[activeTabIndex]]}
            tokensByStatus={{
              new: tokensByStatus.new,
              "final-stretch": tokensByStatus["final-stretch"],
              migrated: tokensByStatus.migrated,
            }}
            loading={loading}
          />
        </div>
      </main>
      <PulseFooter navItems={footerNavItems} metrics={footerMetrics} connectionStatus={connectionStatus} />
    </div>
  )
})
