import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { Token, TokenStatus, PriceUpdate } from "@/types/token"

interface TokensState {
  tokens: Record<string, Token>
  columns: {
    new: string[]
    "final-stretch": string[]
    migrated: string[]
  }
  priceUpdates: Record<string, PriceUpdate>
  loading: boolean
  error: string | null
}

const initialState: TokensState = {
  tokens: {},
  columns: {
    new: [],
    "final-stretch": [],
    migrated: [],
  },
  priceUpdates: {},
  loading: false,
  error: null,
}

const tokensSlice = createSlice({
  name: "tokens",
  initialState,
  reducers: {
    setTokens: (state, action: PayloadAction<Token[]>) => {
      action.payload.forEach((token) => {
        state.tokens[token.id] = token
        if (!state.columns[token.status].includes(token.id)) {
          state.columns[token.status].push(token.id)
        }
      })
    },
    updatePrice: (state, action: PayloadAction<PriceUpdate>) => {
      const { tokenId, price, marketCap, volume } = action.payload
      if (state.tokens[tokenId]) {
        state.tokens[tokenId].price = price
        state.tokens[tokenId].marketCap = marketCap
        state.tokens[tokenId].volume = volume
      }
      state.priceUpdates[tokenId] = action.payload
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
    },
  },
})

export const { setTokens, updatePrice, setLoading, setError } = tokensSlice.actions
export default tokensSlice.reducer

