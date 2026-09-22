import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export const containerClass = "mx-auto w-full max-w-6xl px-5 sm:px-8"

export const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-full bg-accent-gradient text-white shadow-accent px-6 py-3 text-sm font-semibold tracking-wide transition-transform duration-200 hover:-translate-y-0.5"

export const btnSecondary =
  "inline-flex items-center justify-center gap-2 rounded-full border border-ink-strong px-6 py-3 text-sm font-semibold tracking-wide text-ink transition-colors duration-200 hover-border-accent hover-accent"

export const chipClass =
  "inline-flex items-center rounded-full border border-ink px-3 py-1.5 text-xs font-medium text-muted-ink"

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn(containerClass, className)}>{children}</div>
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8 bg-accent-gradient" aria-hidden="true" />
      <span className="text-xs font-bold uppercase tracking-[0.22em] text-gradient">{children}</span>
    </div>
  )
}
