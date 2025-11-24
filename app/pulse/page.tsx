"use client"

import { PulseLayout } from "@/components/templates/PulseLayout"
import { useTokens } from "@/hooks/useTokens"

export default function PulsePage() {
  const { tokens, isLoading } = useTokens()

  return <PulseLayout tokens={tokens} loading={isLoading} />
}

