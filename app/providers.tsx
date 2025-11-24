"use client"

import { Provider } from "react-redux"
import { store } from "@/lib/redux/store"
import { ReactQueryProvider } from "@/lib/react-query/provider"
import { ErrorBoundary } from "@/components/ErrorBoundary"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </Provider>
    </ErrorBoundary>
  )
}

