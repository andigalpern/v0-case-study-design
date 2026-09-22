"use client"

import { useEffect, useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { events } from "@/app/events/events-data"
import { containerClass } from "./primitives"
import { ThemeToggle } from "./theme-toggle"

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Lifecycle", href: "#lifecycle" },
  { label: "Cascade SF", href: "#cascade" },
  { label: "Gallery", href: "#gallery" },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "border-b border-ink bg-paper/85 backdrop-blur-md" : "border-b border-transparent",
      )}
    >
      <nav className={cn(containerClass, "flex h-16 items-center justify-between gap-4")}>
        <a href="#top" className="group flex items-baseline gap-2">
          <span className="font-display text-lg font-semibold tracking-tight text-ink">Andi Galpern</span>
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Events</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-ink transition-colors hover-accent"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <a
            href={`mailto:${events.links.email}`}
            className="hidden items-center gap-1.5 rounded-full bg-accent accent-contrast px-4 py-2 text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5 sm:inline-flex"
          >
            Let&apos;s talk
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </nav>
    </header>
  )
}
