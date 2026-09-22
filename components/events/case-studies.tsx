import { ArrowUpRight, Ticket } from "lucide-react"
import { cn } from "@/lib/utils"
import { events } from "@/app/events/events-data"
import { Container, SectionLabel, btnPrimary, chipClass } from "./primitives"
import { Reveal } from "./reveal"

export function CaseStudies() {
  const { caseStudies, links } = events

  return (
    <section id="work" className="scroll-mt-24 border-t border-ink py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionLabel>Featured work</SectionLabel>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display mt-6 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-ink text-balance sm:text-4xl lg:text-5xl">
            A few events I&apos;m proud of.
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-col gap-14 md:gap-20">
          {caseStudies.map((study, i) => {
            const flip = i % 2 === 1
            return (
              <Reveal
                as="article"
                key={study.title}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
              >
                <div className={cn("relative", flip && "lg:order-2")}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-ink bg-paper-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={study.image || "/placeholder.svg"}
                      alt={study.imageAlt}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    {study.upcoming && (
                      <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-accent accent-contrast px-3 py-1.5 text-xs font-bold uppercase tracking-wide">
                        {"badge" in study ? study.badge : "Upcoming"}
                      </span>
                    )}
                  </div>
                </div>

                <div className={cn(flip && "lg:order-1")}>
                  <h3 className="font-display text-2xl font-semibold leading-snug tracking-tight text-ink sm:text-3xl">
                    {study.title}
                  </h3>
                  <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted-ink">{study.story}</p>
                  <ul className="mt-6 flex flex-wrap gap-2.5">
                    {study.metrics.map((metric) => (
                      <li key={metric} className={chipClass}>
                        {metric}
                      </li>
                    ))}
                  </ul>
                  {study.upcoming && (
                    <a href={links.tickets} className={cn(btnPrimary, "mt-7")}>
                      <Ticket className="h-4 w-4" />
                      Get tickets
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
