"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"

export function Header() {
  const pathname = usePathname()
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/"
    return pathname.startsWith(path)
  }

  // Skip rendering for buddies app pages
  if (pathname.startsWith("/buddies")) {
    return null
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      <div
        className="absolute inset-0 bg-white/60 backdrop-blur-xl border-b border-white/20"
        style={{ boxShadow: scrollY > 20 ? "0 4px 24px rgba(0,0,0,0.06)" : "none" }}
      />
      <div className="relative container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl blur-lg opacity-0 group-hover:opacity-70 transition-opacity" />
              <div className="relative text-2xl font-black bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                andi galpern
              </div>
            </div>
          </Link>

          <div className="flex gap-1 items-center bg-white/40 backdrop-blur-md rounded-full p-1 border border-white/20">
            <Link
              href="/portfolio"
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                isActive("/portfolio") || pathname.includes("case-study") || pathname.includes("substance")
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600 hover:text-gray-900 hover:bg-white/60"
              }`}
            >
              Work
            </Link>
            <Link
              href="/process"
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                isActive("/process")
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600 hover:text-gray-900 hover:bg-white/60"
              }`}
            >
              Process
            </Link>
            <Link
              href="/about"
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                isActive("/about")
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600 hover:text-gray-900 hover:bg-white/60"
              }`}
            >
              About
            </Link>
            <a
              href="#contact"
              onClick={scrollToContact}
              className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
            >
              Let's Talk
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
