import { Check } from "lucide-react"
import { events } from "@/app/events/events-data"
import { Container, SectionLabel } from "./primitives"
import { Reveal } from "./reveal"

export function VirtualEvents() {
  const { virtual } = events

  return (
    <section className="border-t border-ink py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionLabel>Virtual events</SectionLabel>
        </Reveal>

        <div className="mt-10 grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <Reveal className="relative">
            <div
              className="absolute -bottom-4 -left-4 h-28 w-28 rounded-2xl bg-accent-gradient sm:h-36 sm:w-36"
              aria-hidden="true"
            />
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-ink bg-paper-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={virtual.image || "/placeholder.svg"}
                alt={virtual.imageAlt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-ink text-balance sm:text-4xl">
              {virtual.title}
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-ink">{virtual.copy}</p>
            <ul className="mt-7 flex flex-col gap-3">
              {virtual.highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-ink">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-gradient text-white">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-base font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
