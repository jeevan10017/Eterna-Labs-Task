import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { SortField, SortDirection, TokenStatus } from "@/types/token"

interface UIState {
  selectedColumn: TokenStatus | null
  searchQuery: string
  sortField: SortField
  sortDirection: SortDirection
  filters: {
    [key in TokenStatus]: {
      p1: boolean
      p2: boolean
      p3: boolean
    }
  }
  sidebarOpen: boolean
  connectionStatus: "connected" | "disconnected" | "connecting"
}

const initialState: UIState = {
  selectedColumn: null,
  searchQuery: "",
  sortField: "time",
  sortDirection: "desc",
  filters: {
    new: { p1: true, p2: true, p3: true },
    "final-stretch": { p1: true, p2: true, p3: true },
    migrated: { p1: true, p2: true, p3: true },
  },
  sidebarOpen: false,
  connectionStatus: "disconnected",
}

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setSelectedColumn: (state, action: PayloadAction<TokenStatus | null>) => {
      state.selectedColumn = action.payload
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload
    },
    setSortField: (state, action: PayloadAction<SortField>) => {
      state.sortField = action.payload
    },
    setSortDirection: (state, action: PayloadAction<SortDirection>) => {
      state.sortDirection = action.payload
    },
    toggleFilter: (
      state,
      action: PayloadAction<{ column: TokenStatus; filter: "p1" | "p2" | "p3" }>
    ) => {
      const { column, filter } = action.payload
      state.filters[column][filter] = !state.filters[column][filter]
    },
    setConnectionStatus: (
      state,
      action: PayloadAction<"connected" | "disconnected" | "connecting">
    ) => {
      state.connectionStatus = action.payload
    },
  },
})

export const {
  setSelectedColumn,
  setSearchQuery,
  setSortField,
  setSortDirection,
  toggleFilter,
  setConnectionStatus,
} = uiSlice.actions
export default uiSlice.reducer

