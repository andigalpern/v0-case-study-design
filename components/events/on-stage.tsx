import { events } from "@/app/events/events-data"
import { Container, SectionLabel, chipClass } from "./primitives"
import { Reveal } from "./reveal"

export function OnStage() {
  const { onStage } = events

  return (
    <section className="border-t border-ink py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionLabel>Speakers &amp; partners</SectionLabel>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display mt-6 text-3xl font-semibold leading-tight tracking-tight text-ink text-balance sm:text-4xl lg:text-5xl">
            {onStage.heading}
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-5 max-w-2xl text-lg text-muted-ink">{onStage.blurb}</p>
        </Reveal>

        <Reveal delay={180}>
          <ul className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink bg-card-ink sm:grid-cols-4">
            {onStage.companies.map((company) => (
              <li
                key={company}
                className="flex items-center justify-center bg-paper px-4 py-8 text-center"
              >
                <span className="font-display text-xl font-medium text-ink sm:text-2xl">{company}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <Reveal>
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Notable speakers</h3>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {onStage.speakers.map((speaker) => (
                <li key={speaker} className={chipClass}>
                  {speaker}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">{onStage.partnersLabel}</h3>
            <ul className="mt-5 flex flex-wrap items-center gap-2.5">
              {onStage.partners.map((partner) =>
                partner === "and more" ? (
                  <li key={partner} className="text-sm italic text-muted-ink">
                    &amp; more
                  </li>
                ) : (
                  <li key={partner} className={chipClass}>
                    {partner}
                  </li>
                ),
              )}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
