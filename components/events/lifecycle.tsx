import { events } from "@/app/events/events-data"
import { Container, SectionLabel } from "./primitives"
import { Reveal } from "./reveal"

export function Lifecycle() {
  const { lifecycle } = events

  return (
    <section id="lifecycle" className="scroll-mt-24 py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionLabel>What I do</SectionLabel>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display mt-6 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-ink text-balance sm:text-4xl lg:text-5xl">
            {lifecycle.intro}
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-5 max-w-2xl text-lg text-muted-ink">
            Full-lifecycle ownership across four phases — from the first concept to the final load-out.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {lifecycle.phases.map((phase, i) => (
            <Reveal
              as="div"
              key={phase.title}
              delay={i * 90}
              className="group flex h-full flex-col rounded-2xl border border-ink bg-card-ink p-6 transition-colors duration-300 hover-border-accent"
            >
              <span className="font-display text-2xl font-semibold text-accent">{phase.phase}</span>
              <h3 className="font-display mt-3 text-xl font-semibold text-ink">{phase.title}</h3>
              <ul className="mt-5 flex flex-col gap-3 border-t border-ink pt-5">
                {phase.items.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-snug text-muted-ink">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
