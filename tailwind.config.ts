import type { Config } from "tailwindcss"

const config = {
  darkMode: "class",
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        axiom: {
          bg: "#050505", // Deep background
          card: "#0A0A0A", // Card background
          border: "#1E1E1E", // Subtle border
          highlight: "#2A2A2A", // Hover state
          text: {
            primary: "#EDEDED",
            secondary: "#888888",
            muted: "#525252",
          },
          accent: {
            green: "#22c55e", // Positive
            red: "#ef4444",   // Negative
            blue: "#3b82f6",  // Links/Buttons
            purple: "#8b5cf6" // Axiom brand
          }
        }
      },
      fontSize: {
        'xxs': '0.65rem', // Needed for the tiny stats
      },
      animation: {
        'pulse-subtle': 'pulse-subtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        gradientPulse: 'gradientPulse 2s ease-in-out infinite',
      },
      keyframes: {
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        gradientPulse: {
          '0%, 100%': {
            backgroundPosition: '0% 0%',
          },
          '50%': {
            backgroundPosition: '100% 100%',
          },
        },
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }: any) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      })
    },
  ],
} satisfies Config

export default config