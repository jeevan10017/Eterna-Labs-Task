export type TokenStatus = "new" | "final-stretch" | "migrated"

export type SortField = "time" | "marketCap" | "volume" | "priceChange" | "holders"

export type SortDirection = "asc" | "desc"

export interface Token {
  id: string
  name: string
  symbol: string
  contractAddress: string
  imageUrl: string
  status: TokenStatus
  marketCap: number
  volume: number
  liquidity: number
  holders: number
  transactions: number
  price: number
  priceChange1m: number
  priceChange5m: number
  priceChange1h: number
  priceChange24h: number
  priceChange7d: number
  priceChange30d: number
  createdAt: string
  socialLinks?: {
    website?: string
    twitter?: string
    telegram?: string
  }
  verified?: boolean
  tags?: string[]
}

export interface TokenColumn {
  id: TokenStatus
  title: string
  tokens: Token[]
  filters: {
    p1: boolean
    p2: boolean
    p3: boolean
  }
  sortField: SortField
  sortDirection: SortDirection
}

export interface PriceUpdate {
  tokenId: string
  price: number
  marketCap: number
  volume: number
  timestamp: number
}

