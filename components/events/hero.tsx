import { ArrowUpRight, ArrowDown } from "lucide-react"
import { events } from "@/app/events/events-data"
import { Container, SectionLabel, btnPrimary, btnSecondary } from "./primitives"
import { Reveal } from "./reveal"

export function Hero() {
  const { hero, links } = events

  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36">
      <Container className="grid items-center gap-12 pb-16 md:pb-24 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <Reveal>
            <SectionLabel>{hero.kicker}</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display mt-6 text-[2.7rem] font-semibold leading-[1.03] tracking-tight text-ink text-balance sm:text-6xl lg:text-7xl">
              I build events people{" "}
              <span className="italic text-accent">actually show up for.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-ink">{hero.subhead}</p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href={`mailto:${links.email}`} className={btnPrimary}>
                Let&apos;s talk
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="#work" className={btnSecondary}>
                See the work
                <ArrowDown className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={200} className="relative">
            <div className="absolute -bottom-4 -right-4 h-40 w-40 bg-accent/90 sm:h-52 sm:w-52" aria-hidden="true" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-ink bg-paper-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={hero.portrait.src || "/placeholder.svg"}
                alt={hero.portrait.alt}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
