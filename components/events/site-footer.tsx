import { events } from "@/app/events/events-data"
import { Container } from "./primitives"

export function SiteFooter() {
  const { links } = events
  const year = new Date().getFullYear()

  const footerLinks = [
    { label: "andixd.com", href: links.site },
    { label: "LinkedIn", href: links.linkedin },
    { label: "Email", href: `mailto:${links.email}` },
    { label: "Cascade SF", href: links.cascade },
  ]

  return (
    <footer className="border-t border-ink py-12">
      <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <span className="font-display text-lg font-semibold tracking-tight text-ink">Andi Galpern</span>
          <p className="mt-1 text-sm text-muted-ink">Event &amp; field marketing, San Francisco.</p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="text-sm font-medium text-muted-ink transition-colors hover-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </Container>
      <Container className="mt-8">
        <p className="text-xs text-faint-ink">© {year} Andi Galpern. All rights reserved.</p>
      </Container>
    </footer>
  )
}
