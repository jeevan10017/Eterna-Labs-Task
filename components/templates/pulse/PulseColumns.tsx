"use client"

import { memo } from "react"
import { TokenColumn } from "@/components/organisms/TokenColumn"
import type { Token, TokenStatus } from "@/types/token"

interface ColumnConfig {
  status: TokenStatus
  title: string
}

interface PulseColumnsProps {
  columns: ColumnConfig[]
  tokensByStatus: Record<TokenStatus, Token[]>
  loading?: boolean
}

export const PulseColumns = memo(function PulseColumns({
  columns,
  tokensByStatus,
  loading,
}: PulseColumnsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 flex-1 min-h-0 overflow-hidden">
      {columns.map(({ status, title }) => (
        <div
          key={status}
          className="rounded-[16px] border border-[#151a29] bg-[#05070f] shadow-[0_20px_40px_rgba(0,0,0,0.55)] min-h-0 flex h-full flex-col overflow-hidden"
        >
          <TokenColumn
            status={status}
            title={title}
            tokens={tokensByStatus[status]}
            loading={loading}
            className="h-[600px]"
          />
        </div>
      ))}
    </div>
  )
})

