import { Quote } from "lucide-react"
import { events } from "@/app/events/events-data"
import { Container, SectionLabel } from "./primitives"
import { Reveal } from "./reveal"

export function Testimonials() {
  const { testimonials } = events

  return (
    <section className="border-t border-ink py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionLabel>Kind words</SectionLabel>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display mt-6 text-3xl font-semibold leading-tight tracking-tight text-ink text-balance sm:text-4xl lg:text-5xl">
            From the people I&apos;ve built these with.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              as="figure"
              key={i}
              delay={i * 90}
              className="flex h-full flex-col rounded-2xl border border-ink bg-card-ink p-7"
            >
              <Quote className="h-7 w-7 text-accent" aria-hidden="true" />
              <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-ink">{t.quote}</blockquote>
              <figcaption className="mt-6 border-t border-ink pt-5">
                <div className="font-semibold text-ink">{t.name}</div>
                <div className="text-sm text-muted-ink">
                  {t.title}, {t.company}
                </div>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
