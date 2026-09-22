import { ArrowUpRight, Linkedin } from "lucide-react"
import { events } from "@/app/events/events-data"
import { Container } from "./primitives"
import { Reveal } from "./reveal"

export function ClosingCTA() {
  const { closing, links } = events

  return (
    <section id="contact" className="scroll-mt-24 bg-accent-gradient py-24 md:py-32">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-white text-balance sm:text-5xl lg:text-6xl">
            {closing.headline}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/85">{closing.subhead}</p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${links.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold tracking-wide text-[#8f1efb] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Let&apos;s talk
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/60 px-6 py-3 text-sm font-semibold tracking-wide text-white transition-colors duration-200 hover:bg-white/10"
            >
              <Linkedin className="h-4 w-4" />
              Connect on LinkedIn
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
