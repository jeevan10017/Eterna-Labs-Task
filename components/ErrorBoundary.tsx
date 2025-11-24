"use client"

import React, { Component, ErrorInfo, ReactNode } from "react"
import { Button } from "@/components/atoms/Button"

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] p-4">
          <div className="max-w-md w-full bg-[#151515] border border-[#2a2a2a] rounded-lg p-6 space-y-4">
            <h2 className="text-xl font-semibold text-white">Something went wrong</h2>
            <p className="text-sm text-[#a0a0a0]">
              {this.state.error?.message || "An unexpected error occurred"}
            </p>
            <Button
              onClick={() => {
                this.setState({ hasError: false, error: null })
                window.location.reload()
              }}
            >
              Reload Page
            </Button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

