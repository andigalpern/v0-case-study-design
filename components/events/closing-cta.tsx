import { ArrowUpRight, Linkedin } from "lucide-react"
import { events } from "@/app/events/events-data"
import { Container, btnPrimary, btnSecondary } from "./primitives"
import { Reveal } from "./reveal"

export function ClosingCTA() {
  const { closing, links } = events

  return (
    <section id="contact" className="scroll-mt-24 bg-paper-2 py-24 md:py-32">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight text-ink text-balance sm:text-5xl lg:text-6xl">
            {closing.headline}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-ink">{closing.subhead}</p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a href={`mailto:${links.email}`} className={btnPrimary}>
              Let&apos;s talk
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer" className={btnSecondary}>
              <Linkedin className="h-4 w-4" />
              Connect on LinkedIn
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
