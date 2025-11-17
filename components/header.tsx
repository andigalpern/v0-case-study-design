"use client"

import Link from "next/link"

export function Header() {
  return (
    <header className="header-case-study sticky top-0 z-50">
      <div className="container mx-auto px-6 py-6">
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent hover:from-purple-500 hover:to-blue-400 transition-all"
          >
            andi galpern
          </Link>
          <div className="flex gap-8 items-center">
            <Link
              href="/process"
              className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Process
            </Link>
            <Link
              href="/portfolio"
              className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="/about"
              className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="/#contact"
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg font-medium hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300"
            >
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
