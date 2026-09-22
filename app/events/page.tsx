import { SiteNav } from "@/components/events/site-nav"
import { Hero } from "@/components/events/hero"
import { StatsBar } from "@/components/events/stats-bar"
import { Lifecycle } from "@/components/events/lifecycle"
import { Crew } from "@/components/events/crew"
import { CaseStudies } from "@/components/events/case-studies"
import { VirtualEvents } from "@/components/events/virtual-events"
import { CascadeSF } from "@/components/events/cascade-sf"
import { Podcast } from "@/components/events/podcast"
import { OnStage } from "@/components/events/on-stage"
import { AlsoSection } from "@/components/events/also-section"
import { Gallery } from "@/components/events/gallery"
import { Testimonials } from "@/components/events/testimonials"
import { ClosingCTA } from "@/components/events/closing-cta"
import { SiteFooter } from "@/components/events/site-footer"

export default function EventsPage() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <StatsBar />
        <Lifecycle />
        <Crew />
        <CaseStudies />
        <VirtualEvents />
        <CascadeSF />
        <Podcast />
        <OnStage />
        <AlsoSection />
        <Gallery />
        <Testimonials />
        <ClosingCTA />
      </main>
      <SiteFooter />
    </>
  )
}
