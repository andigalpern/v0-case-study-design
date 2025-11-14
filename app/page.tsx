"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Sparkles } from "lucide-react"

export default function HomePage() {
  const featuredWorks = [
    {
      id: 1,
      title: "Creating the sales pipeline by 340%",
      category: "Informatica",
      description:
        "Conversational chatbot interface design to improve lead qualification and sales pipeline conversion through personalized user interactions.",
      image: "/images/sales-pipeline-3d.png",
      tags: ["Chatbot", "Conversion", "B2B"],
      link: "#",
    },
    {
      id: 2,
      title: "Adobe Growth",
      category: "Adobe",
      description:
        "Multi-channel activation strategy and trial-to-paid funnel optimization across 7 global markets for Adobe Creative Cloud.",
      image: "/adobe-creative-cloud-dashboard-interface.jpg",
      tags: ["Growth", "Strategy", "Global"],
      link: "/adobe-growth-case-study",
    },
    {
      id: 3,
      title: "Duolingo Scuba Dive App test",
      category: "Product Design",
      description:
        "Mobile app design for a social scuba diving platform featuring dive logging, location discovery, and community features.",
      image: "/images/scuba-app-blue.png",
      tags: ["Mobile", "UI/UX", "Social"],
      link: "#",
    },
    {
      id: 4,
      title: "BTL mortgage",
      category: "Product Design",
      description:
        "Interactive 3D blueprint-style interface design for Adobe HelpX tutorial platform with component-based learning modules.",
      image: "/images/adobe-helpx-3d.png",
      tags: ["3D", "Education", "UI Components"],
      link: "#",
    },
    {
      id: 5,
      title: "Zapier e-book template",
      category: "Content Design",
      description:
        "Comprehensive ebook template design for Zapier showcasing workflow automation features, user testimonials, and key product benefits.",
      image: "/images/zapier-ebook-3d.jpg",
      tags: ["Editorial", "Template", "Marketing"],
      link: "#",
    },
  ]

  const companies = [
    { name: "Adobe", logo: "https://www.adobe.com/favicon.ico" },
    { name: "Disney", logo: "https://www.disney.com/favicon.ico" },
    { name: "Informatica", logo: "https://www.informatica.com/favicon.ico" },
    { name: "Patreon", logo: "https://www.patreon.com/favicon.ico" },
    { name: "Zapier", logo: "https://zapier.com/favicon.ico" },
  ]

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
                href="/"
                className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
              >
                andi galpern
              </Link>
              <div className="flex gap-8 items-center">
                <Link
                  href="/portfolio"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
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

        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Text Content */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance" style={{ color: "#20221e" }}>
                Hi there! I'm Andi.
              </h1>
              <div className="space-y-4 text-lg leading-relaxed" style={{ color: "#20221e" }}>
                <p>
                  I'm an Sr. Product Designer (focused on both B2B and B2C) or Product Manager. I'm at the sweet spot of
                  design and technical skills and empathy for both the company and the customer.
                </p>
                <p>
                  I'm known for my growth mindset and my ability to lead cross-functional teams to deliver products that
                  drive business growth and delight users. I thrive in fast-paced environments where I can wear multiple
                  hats and make a real impact.
                </p>
                <p>
                  My work spans diverse domains — from marketing growth strategy, product design, and user experience to
                  product management. My work brings deep design thinking, rapid experimentation, and go-to-market
                  strategy, and I write clean copy.
                </p>
              </div>
            </div>

            {/* Right - Photo */}
            <div className="relative">
              <div className="relative aspect-square rounded-3xl overflow-hidden backdrop-blur-xl bg-card/40 border border-white/10">
                <Image src="/images/image.png" alt="Andi Galpern" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Companies I've Designed For */}
        <section className="container mx-auto px-6 py-12">
          <p className="text-center text-sm text-muted-foreground mb-8">Companies I've designed for include:</p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {companies.map((company) => (
              <div
                key={company.name}
                className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity"
              >
                <div className="relative w-8 h-8">
                  <Image src={company.logo || "/placeholder.svg"} alt={company.name} fill className="object-contain" />
                </div>
                <span className="text-lg font-medium">{company.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Works */}
        <section className="container mx-auto px-6 py-16">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: "#20221e" }}>
            Featured Works
          </h2>

          <div className="space-y-12">
            {featuredWorks.map((project) => (
              <div
                key={project.id}
                className="group backdrop-blur-xl bg-card/40 border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/30 transition-all duration-500"
              >
                <div className="grid md:grid-cols-5 gap-8 p-8">
                  {/* Image */}
                  <div className="md:col-span-3 relative aspect-video rounded-2xl overflow-hidden bg-black/20">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Content */}
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

                    <Link
                      href={project.link}
                      className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 w-fit group"
                    >
                      View case study
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              View all work
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* My Skills */}
        <section className="container mx-auto px-6 py-16">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: "#20221e" }}>
            My Skills
          </h2>

          <div className="relative max-w-5xl mx-auto">
            {/* Large purple blob background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/30 via-purple-300/20 to-blue-400/30 rounded-full blur-3xl -z-10" />

            <div className="grid md:grid-cols-2 gap-6">
              {/* Top Left */}
              <div className="backdrop-blur-xl bg-white/60 border border-white/40 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-4" style={{ color: "#8f1efb" }}>
                  Product Design with a Growth Mindset
                </h3>
                <p className="leading-relaxed" style={{ color: "#20221e" }}>
                  I design with a focus on user engagement and business outcomes. I use data and user research to inform
                  my design decisions, and I'm always looking for ways to improve the user experience and drive growth.
                </p>
              </div>

              {/* Top Right */}
              <div className="backdrop-blur-xl bg-white/60 border border-white/40 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-4" style={{ color: "#8f1efb" }}>
                  Marketing Design
                </h3>
                <p className="leading-relaxed" style={{ color: "#20221e" }}>
                  Creating compelling visual narratives for campaigns, landing pages, and content that converts. Expert
                  in A/B testing and data-driven design optimization.
                </p>
              </div>

              {/* Bottom Left */}
              <div className="backdrop-blur-xl bg-white/60 border border-white/40 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-4" style={{ color: "#8f1efb" }}>
                  Content Strategy
                </h3>
                <p className="leading-relaxed" style={{ color: "#20221e" }}>
                  Developing comprehensive content strategies that align with business goals, audience needs, and SEO
                  best practices. From concept to execution.
                </p>
              </div>

              {/* Bottom Right */}
              <div className="backdrop-blur-xl bg-white/60 border border-white/40 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-4" style={{ color: "#8f1efb" }}>
                  Product Management
                </h3>
                <p className="leading-relaxed" style={{ color: "#20221e" }}>
                  Leading cross-functional teams through the entire product lifecycle, from ideation to launch. Skilled
                  in roadmap planning, prioritization, and stakeholder management.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Built with v0 Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="backdrop-blur-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10 rounded-3xl p-12">
            <div className="flex items-start gap-4 mb-6">
              <Sparkles className="w-8 h-8 text-purple-400 flex-shrink-0" />
              <div>
                <h2 className="text-3xl font-bold mb-4" style={{ color: "#20221e" }}>
                  Built with v0 by Vercel
                </h2>
                <div className="space-y-4 text-lg leading-relaxed" style={{ color: "#20221e" }}>
                  <p>
                    This entire portfolio site was vibe-coded using{" "}
                    <a
                      href="https://v0.dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-500 hover:text-purple-400 underline"
                    >
                      v0.dev
                    </a>
                    , Vercel's AI-powered design and development tool.
                  </p>
                  <p>
                    I curated all the content, wrote the case studies, art directed the visual design, selected the
                    color schemes, directed the layout structure, and let AI handle the implementation magic. The result
                    is a modern, glassmorphic portfolio with smooth interactions and trendy aesthetics — all built
                    through natural language prompts.
                  </p>
                  <p className="text-base italic">
                    This approach showcases my ability to leverage cutting-edge tools, direct creative vision, and ship
                    beautiful products quickly — a key skill for modern product designers and managers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Let's Grow Together CTA */}
        <section className="container mx-auto px-6 py-16">
          <div className="backdrop-blur-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#20221e" }}>
              Let's grow together
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto text-balance text-lg">
              I'm always open to discussing product design work, partnership opportunities, or just grabbing a virtual
              coffee to talk shop.
            </p>
            <a
              href="mailto:andi@andixd.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              Schedule a conversation
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
                  href="mailto:andi@andixd.com"
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
