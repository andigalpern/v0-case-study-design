import Header from "@/components/header"
import { ContactSection } from "@/components/contact-section"
import Image from "next/image"
import Link from "next/link"

export default function TravelClubCaseStudy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-5xl">
        {/* Hero Section */}
        <div className="mb-16">
          <div className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-blue-100 text-blue-700 rounded-full">
            Site Impact
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Travel Club: Editorial-Driven Travel Inspiration Platform
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            A WordPress-powered content platform combining curated editorial content with structured vacation packages,
            designed to inspire wanderlust and drive affiliate revenue through engaging travel storytelling.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">WordPress</span>
            <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Elementor</span>
            <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Editorial Design</span>
            <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Content Strategy</span>
          </div>
        </div>

        {/* Main Image */}
        <div className="mb-16 rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/images/travel-club-homepage.jpg"
            alt="Travel Club homepage showing editorial travel content"
            width={1200}
            height={800}
            className="w-full"
          />
        </div>

        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
          <p className="text-lg text-muted-foreground mb-4 text-pretty">
            Site Impact needed a travel content platform that could compete in the crowded travel media space while
            balancing editorial integrity with commercial objectives. The site needed to feel inspiring and
            trustworthy—not like another affiliate-driven content farm.
          </p>
          <p className="text-lg text-muted-foreground text-pretty">
            As the designer and WordPress developer, I built a dual-purpose platform: an editorial blog for practical
            travel advice and a structured vacation packages section for curated travel experiences.
          </p>
        </section>

        {/* My Role */}
        <section className="mb-16 p-8 bg-slate-50 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4">My Role</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>WordPress site design and development using Elementor</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>Content architecture and editorial strategy</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>Visual design system and brand identity</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>Content curation and copywriting</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>Custom page templates for vacation packages</span>
            </li>
          </ul>
        </section>

        {/* Design Approach */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Design Approach</h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            I designed Travel Club to feel warm and inviting—like getting travel recommendations from a well-traveled
            friend rather than reading corporate marketing material. Every design decision supported the editorial
            mission: help readers plan better, more meaningful trips.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold mb-3">Editorial First</h3>
              <p className="text-muted-foreground text-pretty">
                The homepage prioritizes engaging travel content with beautiful hero images and clear article previews.
                I organized content by category (Budget Travel, Explore, Trip Prep, Smart Travel) to help readers
                quickly find relevant advice.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Visual Storytelling</h3>
              <p className="text-muted-foreground text-pretty">
                Large, immersive photography and clean typography create an aspirational feel. Each article and package
                uses compelling imagery to transport readers to destinations before they've even booked.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Structured Packages</h3>
              <p className="text-muted-foreground text-pretty">
                Custom-designed vacation package templates include detailed itineraries, pricing breakdowns, and
                compelling taglines. Each package page feels like a mini travel brochure with clear CTAs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">WordPress Flexibility</h3>
              <p className="text-muted-foreground text-pretty">
                Built with Elementor to allow the content team to easily create new pages and update content without
                developer intervention. The design system remains consistent while enabling rapid content production.
              </p>
            </div>
          </div>
        </section>

        {/* Vacation Packages Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Curated Vacation Packages</h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            Beyond editorial content, I designed a premium vacation packages section featuring detailed, multi-day
            itineraries. Each package tells a story and targets specific traveler personas—from wellness seekers to
            culinary adventurers to culture enthusiasts.
          </p>

          <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/travel-club-packages.png"
              alt="Travel Club vacation packages overview page"
              width={1200}
              height={800}
              className="w-full"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 border border-slate-200 rounded-xl">
              <h4 className="font-semibold mb-2">Compelling Headlines</h4>
              <p className="text-sm text-muted-foreground">
                Each package has an evocative name and tagline that sells the experience, not just the destination.
              </p>
            </div>
            <div className="p-6 border border-slate-200 rounded-xl">
              <h4 className="font-semibold mb-2">Day-by-Day Itineraries</h4>
              <p className="text-sm text-muted-foreground">
                Detailed breakdowns help readers visualize the entire experience and build confidence in booking.
              </p>
            </div>
            <div className="p-6 border border-slate-200 rounded-xl">
              <h4 className="font-semibold mb-2">Target Personas</h4>
              <p className="text-sm text-muted-foreground">
                Each package identifies its ideal traveler type, from solo adventurers to couples to culture seekers.
              </p>
            </div>
          </div>
        </section>

        {/* Package Detail Pages */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Immersive Package Pages</h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            I designed individual package pages with full-width hero images, clear pricing information, and detailed
            itineraries. The goal was to create pages that feel premium and carefully curated—more like luxury travel
            brochures than generic affiliate content.
          </p>

          <div className="space-y-8">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/travel-club-tuscany.jpeg"
                alt="Tuscany Tastes culinary tour package detail page"
                width={1200}
                height={800}
                className="w-full"
              />
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/travel-club-mayan.jpeg"
                alt="Mayan Mystique vacation package detail page"
                width={1200}
                height={800}
                className="w-full"
              />
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/travel-club-bali.jpeg"
                alt="Bali Bliss wellness retreat package detail page"
                width={1200}
                height={800}
                className="w-full"
              />
            </div>
          </div>
        </section>

        {/* Editorial Content */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Editorial Content Strategy</h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            I organized editorial content around four core categories that match different stages of trip planning:
            Budget Travel (affordability tips), Explore (destination inspiration), Trip Prep (practical advice), and
            Smart Travel (travel hacks and mistakes to avoid).
          </p>

          <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/travel-club-homepage-full.png"
              alt="Full Travel Club homepage showing editorial content organization"
              width={1200}
              height={1600}
              className="w-full"
            />
          </div>

          <p className="text-lg text-muted-foreground text-pretty">
            Each article follows a consistent format with engaging headlines, practical advice, and clear
            calls-to-action. The design balances readability with visual interest—never overwhelming readers but always
            keeping them engaged.
          </p>
        </section>

        {/* Results & Impact */}
        <section className="mb-16 p-8 bg-blue-50 rounded-2xl">
          <h2 className="text-3xl font-bold mb-6">Results & Impact</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Content-First Architecture</h3>
              <p className="text-muted-foreground text-pretty">
                Created a flexible content system that allows for rapid article publishing while maintaining consistent
                design quality across all pages.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Dual Revenue Streams</h3>
              <p className="text-muted-foreground text-pretty">
                Balanced editorial content (affiliate revenue through organic traffic) with premium vacation packages
                (direct booking commissions).
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">WordPress Efficiency</h3>
              <p className="text-muted-foreground text-pretty">
                Built with Elementor to enable the content team to create and update pages independently, reducing
                development bottlenecks.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Brand Differentiation</h3>
              <p className="text-muted-foreground text-pretty">
                Established a warm, trustworthy brand voice and visual identity that stands out from generic travel
                affiliate sites.
              </p>
            </div>
          </div>
        </section>

        {/* Key Learnings */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Key Learnings</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p className="text-pretty">
              <strong className="text-foreground">Editorial credibility drives conversions.</strong> By prioritizing
              genuinely helpful content over aggressive monetization, we built reader trust that translated into higher
              engagement and affiliate click-through rates.
            </p>
            <p className="text-pretty">
              <strong className="text-foreground">Visual storytelling matters in travel.</strong> Large, immersive
              photography wasn't just decorative—it was essential for helping readers emotionally connect with
              destinations and visualize their own trips.
            </p>
            <p className="text-pretty">
              <strong className="text-foreground">WordPress can be elegant.</strong> With careful design system planning
              and Elementor constraints, I proved that WordPress sites can feel as polished and modern as custom-built
              platforms while maintaining content flexibility.
            </p>
          </div>
        </section>

        {/* Technologies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Technologies & Tools</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "WordPress",
              "Elementor",
              "Custom CSS",
              "Figma",
              "Adobe Photoshop",
              "SEO Optimization",
              "Google Analytics",
              "Affiliate Integrations",
            ].map((tech) => (
              <div key={tech} className="p-4 border border-slate-200 rounded-lg text-center font-medium">
                {tech}
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Added More Work CTA section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore More Work</h2>
          <p className="text-lg text-gray-600 mb-8">
            See how I've helped other companies drive growth through strategic product and content design
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/carxplore-case-study"
              className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              CarXPlore
            </Link>
            <Link
              href="/portfolio"
              className="px-6 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
            >
              View All Work
            </Link>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  )
}
