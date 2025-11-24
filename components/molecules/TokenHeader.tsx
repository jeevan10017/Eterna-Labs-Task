"use client"

import { memo, useState } from "react"
import { cn } from "@/lib/utils"
import { Copy, Check } from "lucide-react"

export interface TokenHeaderProps {
  name: string
  contractAddress: string
  className?: string
}

export const TokenHeader = memo(function TokenHeader({
  name,
  contractAddress,
  className,
}: TokenHeaderProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(contractAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const shortAddress = `${contractAddress.slice(0, 4)}...${contractAddress.slice(-4)}`

  return (
    <div className={cn("flex items-start justify-between gap-2", className)}>
      <div className="flex-1 min-w-0">
        <h3 className="text-sm sm:text-base lg:text-lg font-medium text-[#fcfcfc] truncate">{name}</h3>
        <button
          onClick={handleCopy}
          className="text-xs text-[#c8c9d1] hover:text-[#fcfcfc] transition-colors flex items-center gap-1 mt-0.5"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              <span>{shortAddress}</span>
            </>
          )}
        </button>
      </div>
    </div>
  )
})

