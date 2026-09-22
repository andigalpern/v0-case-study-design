"use client"

import { useCallback, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { events } from "@/app/events/events-data"
import { Container, SectionLabel } from "./primitives"
import { Reveal } from "./reveal"

export function Gallery() {
  const { gallery } = events
  const [open, setOpen] = useState<number | null>(null)

  const close = useCallback(() => setOpen(null), [])
  const show = useCallback(
    (dir: number) =>
      setOpen((prev) => {
        if (prev === null) return prev
        return (prev + dir + gallery.length) % gallery.length
      }),
    [gallery.length],
  )

  useEffect(() => {
    if (open === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowRight") show(1)
      if (e.key === "ArrowLeft") show(-1)
    }
    document.addEventListener("keydown", onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [open, close, show])

  const active = open === null ? null : gallery[open]

  return (
    <section id="gallery" className="scroll-mt-24 border-t border-ink py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionLabel>Gallery</SectionLabel>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display mt-6 text-3xl font-semibold leading-tight tracking-tight text-ink text-balance sm:text-4xl lg:text-5xl">
            From the room.
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="masonry mt-12">
            {gallery.map((photo, i) => (
              <button
                key={photo.src + i}
                type="button"
                onClick={() => setOpen(i)}
                className="group block w-full overflow-hidden rounded-xl border border-ink bg-paper-2 focus:outline-none focus-visible:ring-2 ring-accent"
                aria-label={`Open image: ${photo.alt}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </button>
            ))}
          </div>
        </Reveal>
      </Container>

      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              show(-1)
            }}
            className="absolute left-3 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10 sm:left-6"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <figure className="max-h-[85vh] max-w-4xl" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={active.src || "/placeholder.svg"}
              alt={active.alt}
              className="max-h-[80vh] w-auto rounded-lg object-contain"
            />
            <figcaption className="mt-3 flex items-center justify-between gap-4 text-sm text-white/70">
              <span className="text-pretty">{active.alt}</span>
              <span className="shrink-0 tabular-nums">
                {(open ?? 0) + 1} / {gallery.length}
              </span>
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              show(1)
            }}
            className="absolute right-3 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10 sm:right-6"
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </section>
  )
}
