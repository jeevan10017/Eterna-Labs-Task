"use client"

import { memo, useState } from "react"
import { Button } from "@/components/atoms/Button"
import { cn } from "@/lib/utils"
import {
  ArrowUp,
  Bell,
  ChevronDown,
  Search,
  Settings,
  Star,
  User,
  Wallet,
  Menu,
  X,
} from "lucide-react"

const navItems = ["Discover", "Pulse", "Trackers", "Perpetuals", "Yield", "Vision", "Portfolio"]
const chainOptions = ["Solana", "Ethereum", "BNB", "Polygon", "Arbitrum"]

// Add bouncy animation styles
const animationStyles = `
  @keyframes bouncyDropdown {
    0% {
      opacity: 0;
      transform: translateY(-10px) scale(0.95);
    }
    60% {
      opacity: 1;
      transform: translateY(5px) scale(1.02);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  .dropdown-bouncy {
    animation: bouncyDropdown 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  }
`

// Inject styles
if (typeof document !== 'undefined') {
  const style = document.createElement('style')
  style.textContent = animationStyles
  document.head.appendChild(style)
}

export const Header = memo(function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [chainDropdownOpen, setChainDropdownOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[#0e111b] bg-[#02030a]/95 backdrop-blur-[10px] w-screen overflow-x-hidden">
      <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-16 lg:h-[60px] gap-2 sm:gap-4 md:gap-6 lg:gap-8">
          {/* Logo Section */}
          <div className="flex items-center gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-2 flex-shrink-0">
            {/* <img 
  src="/pulse/logo.png" 
  alt="Axiom Logo" 
  className="w-8 h-8 lg:w-10 lg:h-10 object-contain" 
  onError={(e) => {
    e.currentTarget.src = "https://placehold.co/40x40/02030a/white?text=A"
  }}
/> */}
            <h1 className="text-sm md:text-sm lg:text-3xl font text-[#fcfcfc] tracking-wide">AXIOM</h1>
            <span className="text-sm font-light md:text-sm lg:text-md  text-[#efeaea]">Pro</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-6 text-xs md:text-xs lg:text-[13px] flex-shrink-0">
            {navItems.map((item, index) => (
              <a
                key={item}
                href="#"
                className={cn(
                  "transition-colors whitespace-nowrap font-normal",
                  index === 1 ? "text-[#634bc4] font-semibold text-lg" : "text-[#ededed] text-lg hover:text-[#fcfcfc]"
                )}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex flex-1 justify-center min-w-0 max-w-2xl">
            <div className="flex items-center gap-3 px-6 py-2.5 bg-[#060913] border border-[#141a2b] rounded-full h-11 w-full shadow-[0_8px_24px_rgba(0,0,0,0.55)]">
              <Search className="w-5 h-5 text-[#fcfcfc] flex-shrink-0" />
              <input
                type="text"
                placeholder="Search by token or CA..."
                className="flex-1 bg-transparent border-none outline-none text-[13px] text-[#d0d3e2] placeholder-[#707070] min-w-0"
              />
              <button className="w-7 h-7 rounded-full bg-[#151824] flex items-center justify-center hover:bg-[#1f2538] transition-colors flex-shrink-0">
                <span className="text-[12px] text-[#fcfcfc]">/</span>
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-1 sm:gap-2 md:gap-2.5 lg:gap-3 flex-shrink-0 relative">
            {/* Chain/SOL Dropdown Button */}
            <div className="hidden sm:block relative">
              <button
                onClick={() => setChainDropdownOpen(!chainDropdownOpen)}
                className="flex items-center gap-2 px-4 py-1.5 md:py-2 bg-[#060913] border border-[#141a2b] rounded-full h-10 md:h-11 cursor-pointer hover:bg-[#0b1020] transition-colors"
              >
                <img 
                  src="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png"
                  alt="Solana"
                  className="w-4 h-4 rounded-full"
                />
                <span className="text-xs md:text-[13px] text-[#fcfcfc] font-semibold">SOL</span>
                <ChevronDown className={cn("w-4 h-4 text-[#a0a0a0] transition-transform duration-300", chainDropdownOpen && "rotate-180")} />
              </button>

              {/* Dropdown Menu */}
              {chainDropdownOpen && (
                <div className="dropdown-bouncy absolute top-full mt-2 right-0 w-48 bg-[#0f1420] border border-[#1a2030] rounded-lg shadow-xl overflow-hidden z-50">
                  <div className="py-2">
                    {chainOptions.map((chain, index) => (
                      <button
                        key={chain}
                        onClick={() => {
                          setChainDropdownOpen(false)
                        }}
                        className={cn(
                          "w-full px-4 py-2.5 text-sm font-medium transition-colors text-left",
                          chain === "Solana"
                            ? "bg-[#1632ff] text-white"
                            : "text-[#d0d3e2] hover:bg-[#1a1f2f]"
                        )}
                      >
                        <div className="flex items-center gap-2">
                          {chain === "Solana" ? (
                            <img 
                              src="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png"
                              alt="Solana"
                              className="w-4 h-4 rounded-full"
                            />
                          ) : (
                            <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#14F195] to-[#9945FF]" />
                          )}
                          {chain}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Deposit Button */}
            <Button variant="default" size="sm" className="hidden sm:inline-flex h-6 md:h-8 px-4 md:px-4 text-xs md:text-sm lg:text-[15px] font-bold bg-[#5c71e5] hover:bg-[#6425eb] text-gray-900 rounded-full">
              Deposit
            </Button>

            {/* Star & Bell Icons */}
            {[{ icon: Star, props: { fill: "none", strokeWidth: 2 } }, { icon: Bell }].map(({ icon: Icon, props }, idx) => (
              <button
                key={`header-icon-${idx}`}
                className="hidden sm:flex w-10 h-10 rounded-full bg-[#060913] border border-[#141a2b] items-center justify-center hover:bg-[#121933] transition-colors flex-shrink-0"
              >
                <Icon className="w-5 h-5 text-[#fcfcfc]" {...props} />
              </button>
            ))}

            {/* Wallet Section */}
            <div className="hidden lg:flex items-center gap-2 px-4 py-2 bg-[#060913] border border-[#141a2b] rounded-full h-11 cursor-pointer hover:bg-[#101730] transition-colors flex-shrink-0">
              <Wallet className="w-5 h-5 text-[#fcfcfc]" />
              <img 
                              src="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png"
                              alt="Solana"
                              className="w-4 h-4 rounded-full"
                            />
              <span className="text-[13px] text-[#fcfcfc]">0</span>
              <ChevronDown className="w-4 h-4 text-[#a0a0a0]" />
            </div>

            {/* Dollar Section */}
            <div className="hidden lg:flex items-center gap-2 px-4 py-2 bg-[#060913] border border-[#141a2b] rounded-full h-11 flex-shrink-0">
              <div className="w-8 h-8 rounded-full bg-[#111727] flex items-center justify-center">
                <span className="text-sm text-[#fcfcfc] font-bold">$</span>
              </div>
              <ArrowUp className="w-5 h-5 text-[#10b981]" />
            </div>

            {/* User Button */}
            <button className="w-10 h-10 rounded-full bg-[#060913] border border-[#141a2b] flex items-center justify-center hover:bg-[#121933] transition-colors flex-shrink-0 relative">
              <User className="w-5 h-5 text-[#fcfcfc]" />
              <Settings className="w-2.5 h-2.5 text-[#a0a0a0] absolute -bottom-0.5 -right-0.5" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden w-10 h-10 rounded-full bg-[#060913] border border-[#141a2b] flex items-center justify-center hover:bg-[#121933] transition-colors flex-shrink-0"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#fcfcfc]" />
              ) : (
                <Menu className="w-5 h-5 text-[#fcfcfc]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#141a2b] bg-[#02030a] px-2 sm:px-4 py-3 sm:py-4">
            <nav className="flex flex-col gap-2 sm:gap-3 mb-3 sm:mb-4">
              {navItems.map((item, index) => (
                <a
                  key={item}
                  href="#"
                  className={cn(
                    "transition-colors py-1.5 sm:py-2 text-xs sm:text-sm",
                    index === 1 ? "text-[#3b82f6] font-semibold" : "text-[#a0a0a0] hover:text-[#fcfcfc]"
                  )}
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Mobile Search */}
            <div className="mb-3 sm:mb-4">
              <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 bg-[#060913] border border-[#141a2b] rounded-lg h-9 sm:h-11 shadow-[0_8px_24px_rgba(0,0,0,0.55)]">
                <Search className="w-4 sm:w-5 h-4 sm:h-5 text-[#fcfcfc] flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="flex-1 bg-transparent border-none outline-none text-xs sm:text-sm text-[#d0d3e2] placeholder-[#707070] min-w-0"
                />
              </div>
            </div>

            {/* Mobile Actions */}
            <div className="flex flex-col gap-2">
              <Button variant="default" size="sm" className="w-full h-9 sm:h-11 text-xs sm:text-base font-bold bg-[#3b82f6] hover:bg-[#2563eb] text-white rounded-lg">
                Deposit
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
})