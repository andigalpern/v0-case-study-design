import { ArrowUpRight } from "lucide-react"
import { events } from "@/app/events/events-data"
import { Container, SectionLabel } from "./primitives"
import { Reveal } from "./reveal"

export function Podcast() {
  const { podcast } = events

  return (
    <section id="podcast" className="scroll-mt-24 py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <SectionLabel>Podcast</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display mt-6 text-3xl font-semibold leading-tight tracking-tight text-ink text-balance sm:text-4xl lg:text-5xl">
              {podcast.heading}
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-accent">{podcast.label}</p>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-4 text-lg leading-relaxed text-muted-ink">{podcast.copy}</p>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-8 overflow-hidden rounded-2xl border border-ink bg-paper-2">
              <iframe
                title="freeCodeCamp Podcast, Episode 79 — How to design tech event experiences so everybody wins"
                src={podcast.embedSrc}
                loading="lazy"
                scrolling="no"
                allow="clipboard-write"
                className="block h-[90px] w-full"
              />
            </div>
          </Reveal>
          <Reveal delay={320}>
            <a
              href={podcast.linkHref}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
            >
              {podcast.linkLabel}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
