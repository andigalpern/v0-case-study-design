import { ArrowUpRight, BarChart3 } from "lucide-react"
import { events } from "@/app/events/events-data"
import { Container, SectionLabel, btnSecondary, chipClass } from "./primitives"
import { Reveal } from "./reveal"

export function CascadeSF() {
  const { cascade, links } = events

  return (
    <section id="cascade" className="scroll-mt-24 bg-paper-2 py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel>Community</SectionLabel>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-display mt-6 text-3xl font-semibold leading-tight tracking-tight text-ink text-balance sm:text-4xl lg:text-5xl">
                {cascade.title}
                <span className="mt-2 block text-lg font-normal text-muted-ink">{cascade.period}</span>
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-ink">{cascade.copy}</p>
            </Reveal>
            <Reveal delay={200}>
              <ul className="mt-7 flex flex-wrap gap-2.5">
                {cascade.series.map((s) => (
                  <li key={s} className={chipClass}>
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={260}>
              <a href={links.cascade} target="_blank" rel="noreferrer" className={`${btnSecondary} mt-8`}>
                Visit Cascade SF
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Reveal>
          </div>

          <div className="flex flex-col gap-6 lg:col-span-5">
            <Reveal delay={140} className="relative">
              <div
                className="absolute -bottom-4 -left-4 h-28 w-28 rounded-2xl bg-accent-gradient sm:h-36 sm:w-36"
                aria-hidden="true"
              />
              <figure className="relative overflow-hidden rounded-2xl border border-ink bg-paper-2">
                <div className="relative aspect-[3/2] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cascade.image || "/placeholder.svg"}
                    alt={cascade.imageAlt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-accent-gradient text-white px-3 py-1.5 text-xs font-bold uppercase tracking-wide">
                    UXNight
                  </span>
                </div>
                <figcaption className="border-t border-ink px-4 py-3 text-sm text-muted-ink">
                  On stage at UXNight, a Cascade SF event.
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={220}>
              <a
                href={links.beat}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col justify-between gap-8 rounded-2xl border border-ink bg-paper p-8 transition-colors duration-300 hover-border-accent"
              >
                <div>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent-gradient text-white">
                    <BarChart3 className="h-5 w-5" />
                  </span>
                  <h3 className="font-display mt-6 text-2xl font-semibold text-ink">{cascade.beat.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-ink">{cascade.beat.copy}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  cascadesf.com/beat
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
