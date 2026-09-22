import { events } from "@/app/events/events-data"
import { Container } from "./primitives"
import { CountUp } from "./count-up"
import { Reveal } from "./reveal"

export function StatsBar() {
  const { stats, statsFootnote } = events

  return (
    <section className="bg-ink py-16 md:py-20">
      <Container>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-4">
          {stats.map((stat, i) => (
            <Reveal
              as="div"
              key={stat.label}
              delay={i * 90}
              className="border-t border-on-ink pt-4 lg:border-t-0 lg:border-l lg:pl-5 lg:pt-0 lg:first:border-l-0 lg:first:pl-0"
            >
              <dd className="font-display text-4xl font-semibold leading-none text-accent sm:text-5xl">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </dd>
              <dt className="mt-3 text-sm leading-snug text-on-ink-muted text-pretty">{stat.label}</dt>
            </Reveal>
          ))}
        </dl>
        <Reveal>
          <p className="mt-12 text-sm font-medium text-on-ink-muted">{statsFootnote}</p>
        </Reveal>
      </Container>
    </section>
  )
}
