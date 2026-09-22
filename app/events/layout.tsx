import type { Metadata } from "next"
import { Fraunces } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { events } from "./events-data"
import "./events.css"

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
})

const description =
  "Andi Galpern has spent 15 years producing conferences, community events, and experiences for designers and technologists in San Francisco, from first idea to final load-out."

export const metadata: Metadata = {
  metadataBase: new URL(events.links.site),
  title: "Andi Galpern | Events",
  description,
  openGraph: {
    title: "Andi Galpern | Events",
    description,
    url: `${events.links.site}/events`,
    siteName: "Andi Galpern",
    images: [
      {
        url: "/events/andi-portrait.png",
        width: 1080,
        height: 1440,
        alt: "Portrait of Andi Galpern",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andi Galpern | Events",
    description,
    images: ["/events/andi-portrait.png"],
  },
}

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <div className={`${fraunces.variable} events-root min-h-screen`}>
        <noscript>
          <style>{`.evt-reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        {children}
      </div>
    </ThemeProvider>
  )
}
