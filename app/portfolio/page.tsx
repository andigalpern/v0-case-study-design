"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from 'lucide-react'
import { useState } from "react"

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All")

  const categories = ["All", "Growth Strategy", "Product Design", "Case Studies", "Visual Design", "Writing"]

  const workSamples = [
    {
      id: 1,
      title: "Buddies Scuba Dive App Test",
      category: "Product Design",
      categories: ["Product Design"],
      description:
        "Mobile app design for a social scuba diving platform featuring dive logging, location discovery, and community features.",
      image: "/images/scuba-app-blue.png",
      tags: ["Mobile", "UI/UX", "Social"],
    },
    {
      id: 2,
      title: "Zapier e-book template design",
      category: "Content Design",
      categories: ["Visual Design"],
      description:
        "Comprehensive ebook template design for Zapier showcasing workflow automation features, user testimonials, and key product benefits.",
      image: "/images/ebook.png",
      tags: ["Editorial", "Template", "Marketing"],
    },
    {
      id: 3,
      title: "Growing the sales pipeline from $2.2 million to $9.7 million at Informatica",
      category: "Informatica",
      categories: ["Growth Strategy", "Case Studies"],
      description:
        "Conversational chatbot interface design to improve lead qualification and sales pipeline conversion through personalized user interactions.",
      image: "/images/sales-pipeline-3d.png",
      tags: ["Chatbot", "Conversion", "B2B"],
      link: "/informatica-chatbot-case-study",
    },
    {
      id: 4,
      title: "Informatica Web Promo Optimization",
      category: "Informatica",
      categories: ["Growth Strategy"],
      description:
        "Ran experimental A/B tests on different component placements on informatica.com to see which promo spot performed the best.",
      image: "/images/web-promo-optimization-v2.png",
      tags: ["Web Design", "Optimization", "B2B"],
    },
    {
      id: 5,
      title: "Scaling Activation Globally for Adobe Creative Cloud",
      category: "Adobe",
      categories: ["Growth Strategy", "Case Studies"],
      description:
        "Multi-channel activation strategy and trial-to-paid funnel optimization across 7 global markets for Adobe Creative Cloud.",
      image: "/adobe-creative-cloud-dashboard-interface.jpg",
      tags: ["Growth", "Strategy", "Global"],
      link: "/adobe-growth-case-study",
    },
    {
      id: 6,
      title: "Adobe 3D HelpX Visual Designs",
      category: "Adobe",
      categories: ["Visual Design"],
      description:
        "Interactive 3D blueprint-style interface design for Adobe HelpX tutorial platform with component-based learning modules.",
      image: "/images/adobe-helpx-3d.png",
      tags: ["3D", "Education", "UI Components"],
    },
    {
      id: 7,
      title: "Moving to the top of page 1 on google search",
      category: "Informatica",
      categories: ["Growth Strategy", "Case Studies"],
      description:
        "Visual data flow infographic explaining Extract, Transform, Load processes for enterprise data integration solutions.",
      image: "/images/seo-ranking.png",
      tags: ["Infographic", "Data Viz", "Technical"],
    },
  ]

  const moreDesignWork = [
    {
      title: "Miami MusicTech 2025 logo design",
      image: "/images/miami-musictech-logo.png",
      categories: ["Visual Design"],
    },
    {
      title: "StarGreetz ads for Disney",
      image: "/images/stargreetz-disney-ads-v2.jpg",
      categories: ["Visual Design"],
    },
    {
      title: "Smyle music app, product design",
      image: "/modern-music-app.png",
      categories: ["Product Design"],
    },
    {
      title: "CloudMart infographic",
      image: "/cloud-marketplace-infographic.jpg",
      categories: ["Visual Design"],
    },
    {
      title: "Founders Network, event branding advertisement",
      image: "/founders-friday-event.jpg",
      categories: ["Visual Design"],
    },
    { title: "Team Sports branding", image: "/team-sports-logo.jpg", categories: ["Visual Design"] },
    {
      title: "Sundance Catalogue Packaging Design",
      image: "/sundance-packaging.jpg",
      categories: ["Visual Design"],
    },
  ]

  const writingLinks = [
    {
      title: "Lead Gen Strategies using New Veritas ebook",
      url: "http://www.slideshare.net/cwebber23/lead-gen-strategies-using-new-veritas-ebook-073114",
      categories: ["Writing"],
    },
    {
      title: "Crossing the Product Experience Design Chasm",
      url: "https://www.linkedin.com/pulse/crossing-product-experience-design-chasm-andi-galpern",
      categories: ["Writing"],
    },
    {
      title: "How to Never in Your Entire Work During Email Composition",
      url: "https://www.linkedin.com/pulse/how-never-your-entire-work-during-email-andi-galpern",
      categories: ["Writing"],
    },
    {
      title: "Understanding Growth in Product for Designers (Podcast)",
      url: "https://share.transistor.fm/s/2fb8e8a0",
      categories: ["Writing"],
    },
    {
      title: "Growth-Focused Content for SaaS companies",
      url: "https://www.caseyaccidental.com/growth-content-saas",
      categories: ["Writing"],
    },
    {
      title: "Growth Design Q&A",
      url: "https://growth.design/case-studies/andi-galpern-growth-design",
      categories: ["Writing"],
    },
    {
      title: "Design for Growth: an interview with Andi Galpern",
      url: "https://www.invisionapp.com/inside-design/andi-galpern-growth-design/",
      categories: ["Writing"],
    },
    {
      title: "The Importance of Qualitative Data When Growing Your Product",
      url: "https://review.firstround.com/the-importance-of-qualitative-data-when-growing-your-product",
      categories: ["Writing"],
    },
  ]

  const filteredWorkSamples =
    activeFilter === "All" ? workSamples : workSamples.filter((project) => project.categories.includes(activeFilter))

  const filteredMoreDesignWork =
    activeFilter === "All" ? moreDesignWork : moreDesignWork.filter((item) => item.categories.includes(activeFilter))

  const filteredWritingLinks =
    activeFilter === "All" ? writingLinks : writingLinks.filter((item) => item.categories.includes(activeFilter))

  const showWorkSamples = filteredWorkSamples.length > 0
  const showMoreDesignWork = filteredMoreDesignWork.length > 0
  const showWriting = filteredWritingLinks.length > 0

  return (
    <div className="min-h-screen relative">
      {/* Gradient orbs background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-40 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-blue-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-white/10 backdrop-blur-xl bg-background/30">
          <div className="container mx-auto px-6 py-6">
            <nav className="flex items-center justify-between">
              <Link
                href="/home"
                className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
              >
                andi galpern
              </Link>
              <div className="flex gap-8 items-center">
                <Link href="/portfolio" className="text-sm font-medium text-foreground">
                  Portfolio
                </Link>
                <Link
                  href="/home"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </Link>
                <a
                  href="mailto:andi@andixd.com"
                  className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                >
                  Contact
                </a>
              </div>
            </nav>
          </div>
        </header>

        {/* Hero */}
        <section className="container mx-auto px-6 py-16">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance" style={{ color: "#20221e" }}>
              Work Samples
            </h1>
            <p className="text-xl text-balance" style={{ color: "#20221e" }}>
              View recent work samples in product design, content strategy, and marketing. Want to see more projects?{" "}
              <a href="mailto:andi@andixd.com" className="text-purple-400 hover:text-purple-300 underline">
                E-mail me at andi@andixd.com
              </a>
              .
            </p>
          </div>
        </section>

        <section className="container mx-auto px-6 pb-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/25"
                    : "backdrop-blur-xl bg-card/40 border border-white/10 hover:border-purple-500/30"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Work Samples - Single Column */}
        {showWorkSamples && (
          <section className="container mx-auto px-6 py-12">
            <div className="space-y-16">
              {filteredWorkSamples.map((project) => (
                <div
                  key={project.id}
                  className="group backdrop-blur-xl bg-card/40 border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/30 transition-all duration-500"
                >
                  <div className="grid md:grid-cols-5 gap-8 p-8">
                    {/* Image - Takes 3/5 */}
                    <div className="md:col-span-3 relative aspect-video rounded-2xl overflow-hidden bg-black/20">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>

                    {/* Content - Takes 2/5 */}
                    <div className="md:col-span-2 flex flex-col justify-center space-y-4">
                      <div className="inline-flex items-center gap-2 text-sm font-medium" style={{ color: "#8f1efb" }}>
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#8f1efb" }}></span>
                        {project.category}
                      </div>

                      <h3 className="text-2xl font-bold text-balance">{project.title}</h3>

                      <p className="text-balance leading-relaxed" style={{ color: "#20221e" }}>
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full text-xs font-medium bg-white/80 backdrop-blur-sm"
                            style={{ color: "#8f1efb", border: "1px solid #d2cbdb" }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {project.link ? (
                        <Link
                          href={project.link}
                          className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 w-fit group"
                        >
                          View case study
                          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                      ) : (
                        <button className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 w-fit group">
                          View case study
                          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* More Design Work */}
        {showMoreDesignWork && (
          <section className="container mx-auto px-6 py-16">
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              More design work
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMoreDesignWork.map((item, index) => (
                <div
                  key={index}
                  className="group backdrop-blur-xl bg-card/40 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all duration-500"
                >
                  <div className="relative aspect-square bg-black/20">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm font-medium text-balance">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Writing Section */}
        {showWriting && (
          <section className="container mx-auto px-6 py-16">
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Writing
            </h2>

            <div className="max-w-3xl mx-auto backdrop-blur-xl bg-card/40 border border-white/10 rounded-3xl p-8">
              <ul className="space-y-4">
                {filteredWritingLinks.map((article, index) => (
                  <li key={index}>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 text-purple-400 hover:text-purple-300 transition-colors group"
                    >
                      <ArrowUpRight className="w-4 h-4 mt-1 flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      <span className="text-balance">{article.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="container mx-auto px-6 py-16">
          <div className="backdrop-blur-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to work together?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto text-balance">
              I'm always open to discussing product design work or partnership opportunities.
            </p>
            <a
              href="mailto:hello@andigalpern.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              Get in touch
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 backdrop-blur-xl bg-background/30">
          <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">© 2025 Andi Galpern. All rights reserved.</p>
              <div className="flex gap-6">
                <a
                  href="https://linkedin.com/in/andigalpern"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://dribbble.com/andigalpern"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Dribbble
                </a>
                <a
                  href="mailto:hello@andigalpern.com"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
