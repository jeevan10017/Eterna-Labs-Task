// Design system constants matching Axiom Trade's exact colors from original UI
export const COLORS = {
  // Background colors (from original UI data)
  bg: {
    primary: "#06070b", // rgb(6, 7, 11) - main background
    secondary: "#101114", // rgb(16, 17, 20) - backgroundSecondary
    tertiary: "#18181a", // rgb(24, 24, 26) - backgroundTertiary
    card: "#18181a", // backgroundTertiary for cards
    hover: "#1b1b1d", // hover state
    black: "#000000", // pure black
  },
  // Text colors (from original UI data)
  text: {
    primary: "#fcfcfc", // rgb(252, 252, 252) - textPrimary
    secondary: "#c8c9d1", // rgb(200, 201, 209) - textSecondary
    tertiary: "#777a8c", // rgb(119, 122, 140) - textTertiary
    accent: "#526fff", // rgb(82, 111, 255) - primaryBlue
  },
  // Status colors
  status: {
    positive: "#10b981", // Green
    negative: "#ef4444", // Red
    warning: "#f59e0b",
    info: "#526fff", // primaryBlue
  },
  // Border/Stroke colors (from original UI data)
  border: {
    primary: "#22242d", // rgb(34, 36, 45) - primaryStroke
    secondary: "#323542", // rgb(50, 53, 66) - secondaryStroke
    hover: "#323542",
    active: "#526fff", // primaryBlue
  },
  // Primary colors
  primary: {
    blue: "#526fff", // rgb(82, 111, 255) - primaryBlue
    blueHover: "#3d5aff", // primaryBlueHover (estimated)
  },
} as const

// Breakpoints
export const BREAKPOINTS = {
  mobile: "320px",
  mobileLg: "425px",
  tablet: "768px",
  desktop: "1024px",
  desktopLg: "1440px",
} as const

// Animation durations
export const ANIMATIONS = {
  fast: "150ms",
  normal: "300ms",
  slow: "500ms",
} as const

