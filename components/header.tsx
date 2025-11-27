"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Therapie", href: "/therapie" },
  { name: "Praxis & Kontakt", href: "/kontakt" },
  { name: "Über mich", href: "/ueber-mich" },
  { name: "Leistungen & Preise", href: "/leistungen" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="bg-[#f1e0c5] shadow-sm border-b border-[#cf9452]/20">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <img src="/logo.svg" alt="Mag. Hanno Prettner Logo" className="h-12 w-12" />
              <div>
                <div className="text-xl font-bold text-[#1c1c1e]">Mag. Hanno Prettner</div>
                <div className="text-sm text-[#00674f]">Psychotherapeut in Fachausbildung unter Lehrsupervision</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-[#00674f] ${
                  pathname === item.href ? "text-[#00674f] border-b-2 border-[#00674f] pb-1" : "text-[#1c1c1e]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="hover:bg-[#00674f]/10 hover:text-[#00674f]"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors hover:text-[#00674f] ${
                    pathname === item.href ? "text-[#00674f] bg-[#f1e0c5]" : "text-[#1c1c1e]"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
