"use client"

import { memo, useMemo } from "react"
import { cn } from "@/lib/utils"
import type { Token, TokenStatus, SortField } from "@/types/token"
import { TokenCard } from "./TokenCard"
import { SortButton } from "@/components/molecules/SortButton"
import { Skeleton } from "@/components/atoms/Skeleton"
import { Zap, SlidersHorizontal } from "lucide-react"
import { useAppSelector, useAppDispatch } from "@/lib/redux/hooks"
import { toggleFilter, setSortField, setSortDirection } from "@/lib/redux/slices/uiSlice"

export interface TokenColumnProps {
  status: TokenStatus
  title: string
  tokens: Token[]
  loading?: boolean
  className?: string
}

const sortTokens = (
  tokens: Token[],
  sortField: SortField,
  sortDirection: "asc" | "desc"
): Token[] => {
  const sorted = [...tokens].sort((a, b) => {
    let comparison = 0

    switch (sortField) {
      case "time":
        comparison =
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        break
      case "marketCap":
        comparison = a.marketCap - b.marketCap
        break
      case "volume":
        comparison = a.volume - b.volume
        break
      case "priceChange":
        comparison = a.priceChange24h - b.priceChange24h
        break
      case "holders":
        comparison = a.holders - b.holders
        break
    }

    return sortDirection === "asc" ? comparison : -comparison
  })

  return sorted
}

export const TokenColumn = memo(function TokenColumn({
  status,
  title,
  tokens,
  loading = false,
  className,
}: TokenColumnProps) {
  const dispatch = useAppDispatch()
  const filters = useAppSelector((state) => state.ui.filters[status])
  const sortField = useAppSelector((state) => state.ui.sortField)
  const sortDirection = useAppSelector((state) => state.ui.sortDirection)

  const filteredAndSortedTokens = useMemo(() => {
    let filtered = tokens
    return sortTokens(filtered, sortField, sortDirection)
  }, [tokens, sortField, sortDirection])

  const handleSort = () => {
    if (sortField === "time") {
      dispatch(
        setSortDirection(sortDirection === "asc" ? "desc" : "asc")
      )
    } else {
      dispatch(setSortField("time"))
      dispatch(setSortDirection("desc"))
    }
  }

  const filterButtons = [
    { label: "P1", key: "p1" as const },
    { label: "P2", key: "p2" as const },
    { label: "P3", key: "p3" as const },
  ]

  return (
    <div className={cn("flex h-full min-h-0 flex-col overflow-hidden", className)}>
      {/* Column Header */}
      <div className="flex items-center justify-between pb-2 mb-2 ">
        <div className="flex items-center gap-1.5">
          <h2 className="text-lg font-semibold text-white">{title}</h2>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1  border border-[#1f2433] bg-[#101320] px-2 py-1 text-[10px] text-[#9aa2c2]">
            <div className="flex items-center gap-1 pr-1 border-r border-[#1f2538]">
              <Zap className="w-4 h-4 fill-gray-500" />
              <span className="text-white text-md">{filteredAndSortedTokens.length}</span>
            </div>
            <div className="flex items-center gap-1 pl-1">
              {filterButtons.map(({ label, key }) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => dispatch(toggleFilter({ column: status, filter: key }))}
                  className={cn(
                    "px-1 py-0.5 rounded-md text-[10px] font-semibold transition-colors text-md md:text-[12px]",
                    filters[key]
                      ? "text-[#4985f4] "
                      : "text-[#6b728f] hover:text-[#cdd2ee]"
                  )}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <SortButton
            active={sortField === "time"}
            direction={sortDirection}
            onClick={handleSort}
            className="p-1.5 border border-[#1f2433] bg-[#0f121c] text-[#9aa2c2]"
            icon={SlidersHorizontal}
            hideLabel
          />
        </div>
      </div>

      {/* Token Cards */}
      <div className="flex-1 overflow-y-auto space-y-2 pr-1">
        {loading ? (
          <>
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="rounded-[4px] border border-[#2a2a2a] bg-[#151515] p-2.5 space-y-2"
              >
                <div className="flex items-start gap-2.5">
                  <Skeleton variant="circular" className="w-12 h-12 flex-shrink-0" />
                  <div className="flex-1 space-y-1.5">
                    <Skeleton variant="text" className="w-3/4 h-3" />
                    <Skeleton variant="text" className="w-1/2 h-2" />
                  </div>
                </div>
                <Skeleton variant="text" className="w-full h-2" />
                <Skeleton variant="text" className="w-2/3 h-2" />
              </div>
            ))}
          </>
        ) : filteredAndSortedTokens.length === 0 ? (
          <div className="text-center py-8 text-[#a0a0a0] text-[10px]">
            No tokens found
          </div>
        ) : (
          filteredAndSortedTokens.map((token) => (
            <TokenCard key={token.id} token={token} />
          ))
        )}
      </div>
    </div>
  )
})
