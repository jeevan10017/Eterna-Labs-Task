"use client"

import { useEffect } from "react"
import { useQuery } from "@tanstack/react-query"
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks"
import { setTokens, setLoading, setError } from "@/lib/redux/slices/tokensSlice"
import type { Token } from "@/types/token"
import { mockTokens } from "@/lib/mock-data"

export function useTokens() {
  const dispatch = useAppDispatch()
  const tokens = useAppSelector((state) => state.tokens.tokens)

  const { data, isLoading, error } = useQuery<Token[]>({
    queryKey: ["tokens"],
    queryFn: async () => {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000))
      return mockTokens
    },
    staleTime: 30000, // 30 seconds
  })

  // Sync with Redux - moved to useEffect to avoid render-time state updates
  useEffect(() => {
    if (data && Object.keys(tokens).length === 0) {
      dispatch(setTokens(data))
    }
  }, [data, tokens, dispatch])

  useEffect(() => {
    dispatch(setLoading(isLoading))
  }, [isLoading, dispatch])

  useEffect(() => {
    if (error) {
      dispatch(setError(error.message))
    }
  }, [error, dispatch])

  return {
    tokens: data ? data : Object.values(tokens),
    isLoading,
    error,
  }
}

