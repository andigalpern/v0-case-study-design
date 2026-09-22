import { events } from "@/app/events/events-data"
import { Container, SectionLabel } from "./primitives"
import { Reveal } from "./reveal"

export function AlsoSection() {
  const { also } = events

  return (
    <section className="border-t border-ink py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionLabel>Also</SectionLabel>
        </Reveal>
        <Reveal delay={80}>
          <div className="mt-8 grid items-center gap-8 overflow-hidden rounded-2xl border border-ink bg-card-ink sm:grid-cols-5">
            <div className="relative aspect-[4/3] h-full sm:col-span-2 sm:aspect-auto sm:min-h-[240px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={also.image || "/placeholder.svg"}
                alt={also.imageAlt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-8 sm:col-span-3 sm:p-10">
              <h3 className="font-display text-2xl font-semibold leading-snug text-ink sm:text-3xl">
                {also.title}
              </h3>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-ink">{also.copy}</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
