import type { PriceUpdate } from "@/types/token"

type PriceUpdateCallback = (update: PriceUpdate) => void

class MockWebSocketService {
  private callbacks: Set<PriceUpdateCallback> = new Set()
  private intervalId: NodeJS.Timeout | null = null
  private tokenIds: string[] = []
  private isConnected = false

  connect(tokenIds: string[]) {
    this.tokenIds = tokenIds
    this.isConnected = true

    // Simulate WebSocket connection delay
    setTimeout(() => {
      this.startPriceUpdates()
    }, 500)
  }

  disconnect() {
    this.isConnected = false
    if (this.intervalId) {
      clearInterval(this.intervalId)
      this.intervalId = null
    }
  }

  subscribe(callback: PriceUpdateCallback) {
    this.callbacks.add(callback)
    return () => {
      this.callbacks.delete(callback)
    }
  }

  private startPriceUpdates() {
    // Update prices every 2-5 seconds randomly
    this.intervalId = setInterval(() => {
      if (!this.isConnected || this.tokenIds.length === 0) return

      // Randomly update 1-3 tokens per interval
      const numUpdates = Math.floor(Math.random() * 3) + 1
      const shuffled = [...this.tokenIds].sort(() => Math.random() - 0.5)

      for (let i = 0; i < Math.min(numUpdates, shuffled.length); i++) {
        const tokenId = shuffled[i]
        const update = this.generatePriceUpdate(tokenId)
        this.callbacks.forEach((callback) => callback(update))
      }
    }, 2000 + Math.random() * 3000)
  }

  private generatePriceUpdate(tokenId: string): PriceUpdate {
    // Generate realistic price changes (-5% to +5%)
    const priceChange = (Math.random() - 0.5) * 0.1
    const basePrice = 0.01 + Math.random() * 0.1
    const newPrice = basePrice * (1 + priceChange)

    // Market cap and volume scale with price
    const marketCap = newPrice * (100000 + Math.random() * 2000000)
    const volume = marketCap * (0.01 + Math.random() * 0.1)

    return {
      tokenId,
      price: newPrice,
      marketCap,
      volume,
      timestamp: Date.now(),
    }
  }
}

export const mockWebSocketService = new MockWebSocketService()

