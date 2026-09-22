"use client"

import { useEffect, useRef, useState } from "react"

export function CountUp({
  end,
  suffix = "",
  duration = 1800,
}: {
  end: number
  suffix?: string
  duration?: number
}) {
  const ref = useRef<HTMLSpanElement | null>(null)
  // Default to the final value so the real number is present in the SSR HTML
  // (and stays put if JS never runs). Animation is opted into on the client below.
  const [value, setValue] = useState(end)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const prefersReduced =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches

    // Reduced motion: keep the final number, skip the count-up entirely.
    if (prefersReduced) return

    // JS is running and motion is allowed: reset to 0 and animate on scroll.
    setValue(0)

    const run = () => {
      if (started.current) return
      started.current = true
      const start = performance.now()
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1)
        // easeOutExpo for a lively count that settles smoothly
        const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
        setValue(Math.round(end * eased))
        if (progress < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            run()
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.4 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [end, duration])

  return (
    <span ref={ref} aria-label={`${end.toLocaleString()}${suffix}`}>
      {value.toLocaleString()}
      {suffix}
    </span>
  )
}
