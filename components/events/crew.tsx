import { events } from "@/app/events/events-data"
import { Container, SectionLabel } from "./primitives"
import { Reveal } from "./reveal"

export function Crew() {
  const { crew } = events
  const chips = crew.stats.filter((stat) => stat.value.trim() !== "")

  return (
    <section className="border-t border-ink py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionLabel>The crew</SectionLabel>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display mt-6 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-ink text-balance sm:text-4xl lg:text-5xl">
            {crew.title}
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-ink">{crew.copy}</p>
        </Reveal>

        {chips.length > 0 && (
          <Reveal delay={180}>
            <ul className="mt-8 flex flex-wrap gap-3">
              {chips.map((chip) => (
                <li
                  key={chip.label}
                  className="inline-flex items-baseline gap-2 rounded-full border border-ink bg-card-ink px-4 py-2"
                >
                  <span className="font-display text-lg font-semibold text-gradient">{chip.value}</span>
                  <span className="text-sm text-muted-ink">{chip.label}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        )}

        <Reveal delay={200} className="relative mt-12">
          <div
            className="absolute -bottom-4 -right-4 h-28 w-28 rounded-2xl bg-accent-gradient sm:h-36 sm:w-36"
            aria-hidden="true"
          />
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-ink bg-paper-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={crew.image || "/placeholder.svg"}
              alt={crew.imageAlt}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
