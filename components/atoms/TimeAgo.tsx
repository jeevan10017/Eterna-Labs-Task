"use client"

import { useEffect, useState, memo } from "react"

export interface TimeAgoProps {
  timestamp: string | number | Date
  className?: string
}

export const TimeAgo = memo(function TimeAgo({
  timestamp,
  className,
}: TimeAgoProps) {
  const [timeAgo, setTimeAgo] = useState("")

  useEffect(() => {
    const updateTimeAgo = () => {
      const date = new Date(timestamp)
      const now = new Date()
      const diffMs = now.getTime() - date.getTime()
      const diffSec = Math.floor(diffMs / 1000)
      const diffMin = Math.floor(diffSec / 60)
      const diffHour = Math.floor(diffMin / 60)
      const diffDay = Math.floor(diffHour / 24)
      const diffMonth = Math.floor(diffDay / 30)
      const diffYear = Math.floor(diffDay / 365)

      let result = ""
      if (diffSec < 60) {
        result = `${diffSec}s`
      } else if (diffMin < 60) {
        result = `${diffMin}m`
      } else if (diffHour < 24) {
        result = `${diffHour}h`
      } else if (diffDay < 30) {
        result = `${diffDay}d`
      } else if (diffMonth < 12) {
        result = `${diffMonth}mo`
      } else {
        result = `${diffYear}y`
      }

      setTimeAgo(result)
    }

    updateTimeAgo()
    const interval = setInterval(updateTimeAgo, 1000)

    return () => clearInterval(interval)
  }, [timestamp])

  return <span className={className}>{timeAgo}</span>
})

