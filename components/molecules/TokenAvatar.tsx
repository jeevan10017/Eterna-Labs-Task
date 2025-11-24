"use client"

import { memo, useState } from "react"
import { cn } from "@/lib/utils"

export interface TokenAvatarProps {
  src: string
  alt: string
  size?: "sm" | "md" | "lg"
  verified?: boolean
  className?: string
}

const sizeClasses = {
  sm: "w-8 h-8",
  md: "w-12 h-12",
  lg: "w-16 h-16",
}

const shapeClasses = {
  sm: "rounded",
  md: "rounded",
  lg: "rounded",
}

export const TokenAvatar = memo(function TokenAvatar({
  src,
  alt,
  size = "md",
  verified = false,
  className,
}: TokenAvatarProps) {
  const [error, setError] = useState(false)

  return (
    <div className={cn("relative flex-shrink-0", sizeClasses[size], className)}>
      {error || !src ? (
        <div className="w-full h-full rounded-full bg-[#18181a] flex items-center justify-center text-xs text-[#c8c9d1]">
          {alt.charAt(0).toUpperCase()}
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          className="w-full h-full rounded-full object-cover"
          onError={() => setError(true)}
        />
      )}
      {verified && (
        <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#526fff] border-2 border-[#06070b] flex items-center justify-center">
          <svg
            className="w-2.5 h-2.5 text-black"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}
    </div>
  )
})

