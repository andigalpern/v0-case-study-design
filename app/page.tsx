"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Sparkles, Code2, Zap, Cpu, TrendingUp, Users } from 'lucide-react'

export default function HomePage() {
  const featuredWorks = [
    {
      id: 1,
      title: "Growing the sales pipeline from $2.2M to $9.7M at Informatica",
      category: "Informatica",
      logo: "/informatica-lightbg-logo.svg",
      metric: "341% Pipeline Growth",
      description:
        "Conversational chatbot interface design to improve lead qualification and sales pipeline conversion through personalized user interactions.",
      image: "/images/sales-pipeline-3d.png",
      tags: ["AI/ML", "Conversion", "B2B SaaS"],
      link: "/informatica-chatbot-case-study",
    },
    {
      id: 2,
      title: "Scaling Activation Globally for Adobe Creative Cloud",
      category: "Adobe",
      logo: "/adobe-logo.svg",
      metric: "7 Global Markets",
      description:
        "Multi-channel activation strategy and trial-to-paid funnel optimization across 7 global markets for Adobe Creative Cloud.",
      image: "/adobe-creative-cloud-dashboard-interface.jpg",
      tags: ["Growth Strategy", "Global Scale", "B2C"],
      link: "/adobe-growth-case-study",
    },
    {
      id: 3,
      title: "Scuba Diving App Design Test",
      category: "Product Design",
      description:
        "Mobile app design for a social scuba diving platform featuring dive logging, location discovery, and community features.",
      image: "/images/scuba-app-blue.png",
      tags: ["Mobile", "UI/UX", "Social"],
      link: "#",
    },
    {
      id: 4,
      title: "Adobe HelpX: 3D Interface Design",
      category: "Adobe",
      logo: "/adobe-logo.svg",
      description:
        "Interactive 3D blueprint-style interface design for Adobe HelpX tutorial platform with component-based learning modules.",
      image: "/images/adobe-helpx-3d.png",
      tags: ["3D Design", "Education", "UI Components"],
      link: "#",
    },
    {
      id: 5,
      title: "Zapier e-book template",
      category: "Content Design",
      logo: "/zapier-logo.png",
      description:
        "Comprehensive ebook template design for Zapier showcasing workflow automation features, user testimonials, and key product benefits.",
      image: "/images/ebook.png",
      tags: ["Editorial", "Template", "Marketing"],
      link: "#",
    },
  ]

  const companies = [
    { name: "Adobe", logo: "/adobe-logo.svg" },
    { name: "Informatica", logo: "/informatica-logo.svg" },
    { name: "Smule", logo: "/smule-logo.png" },
    { name: "Cisco", logo: "/cisco-logo.svg" },
    { name: "Patreon", logo: "/patreon-logo.svg" },
    { name: "Zapier", logo: "/zapier-logo.png" },
    { name: "Guitar Center", logo: "/guitar-center-logo.svg" },
  ]

  return (
    <div className="min-h-screen relative">
      {/* Gradient orbs background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-40 w-96 h-96 gradient-bg-purple-blue rounded-full blur-3xl opacity-30" />
        <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] gradient-bg-purple-blue rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-20 left-1/4 w-96 h-96 gradient-bg-purple-blue rounded-full blur-3xl opacity-25" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="header border-b border-white/10 backdrop-blur-xl bg-background/30 sticky top-0 z-50">
          <div className="container mx-auto px-6 py-6">
            <nav className="flex items-center justify-between">
              <Link
                href="/"
                className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent hover:from-purple-500 hover:to-blue-400 transition-all"
              >
                andi galpern
              </Link>
              <div className="flex gap-8 items-center">
                <Link
                  href="/portfolio"
                  className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  Portfolio
                </Link>
                <Link
                  href="/"
                  className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  About
                </Link>
                <a
                  href="mailto:andi@andixd.com"
                  className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg font-medium hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  Contact
                </a>
              </div>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-6 pt-24 pb-32">
          <div className="max-w-6xl mx-auto">
            {/* Positioning Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm mb-8 animate-fade-in">
              <TrendingUp className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-semibold text-purple-700">Growth Design Strategy • AI Product Design</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 text-balance leading-[0.95] tracking-tight">
              <span className="text-brand-gray-dark">I design products</span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
                that drive growth
              </span>
            </h1>

            {/* Subheadline with metrics */}
            <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl">
              <div className="space-y-2">
                <div className="text-5xl font-bold text-purple-600">14+</div>
                <div className="text-lg text-brand-gray-dark font-medium">Years Experience</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-bold text-purple-600">341%</div>
                <div className="text-lg text-brand-gray-dark font-medium">Pipeline Growth</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-bold text-purple-600">$7.5M</div>
                <div className="text-lg text-brand-gray-dark font-medium">Revenue Impact</div>
              </div>
            </div>

            <p className="text-2xl leading-relaxed text-brand-gray-dark mb-12 max-w-3xl">
              Senior Product Designer specializing in <strong className="text-purple-700">AI-powered products</strong> and <strong className="text-purple-700">growth design strategy</strong>. I've helped companies like Adobe, Informatica, and Cisco turn complex problems into revenue-driving experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 items-center">
              <Link
                href="/portfolio"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300 cursor-pointer inline-flex items-center gap-2"
              >
                View Case Studies
                <ArrowUpRight className="w-5 h-5" />
              </Link>
              <a
                href="mailto:andi@andixd.com"
                className="px-8 py-4 rounded-xl border-2 border-purple-600/30 text-purple-700 text-lg font-semibold hover:bg-purple-50 hover:border-purple-600/50 transition-all duration-300 cursor-pointer"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </section>

        {/* Companies I've Designed For */}
        <section className="container mx-auto px-6 py-16 border-y border-white/10 bg-white/40 backdrop-blur-sm">
          <p className="text-center text-sm uppercase tracking-wider text-muted-foreground font-semibold mb-10">
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-16 max-w-6xl mx-auto">
            {companies.map((company) => (
              <div
                key={company.name}
                className="flex items-center justify-center opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-110"
              >
                <div className="relative h-16 w-40">
                  <Image src={company.logo || "/placeholder.svg"} alt={`${company.name} logo`} fill className="object-contain" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Works */}
        <section className="container mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-brand-gray-dark">
              Featured Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Case studies showcasing measurable impact through strategic design
            </p>
          </div>

          <div className="space-y-16 max-w-7xl mx-auto">
            {featuredWorks.map((project, index) => (
              <div
                key={project.id}
                className="group card-glass-hover backdrop-blur-xl bg-card/40 border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500"
              >
                <div className="grid md:grid-cols-5 gap-8 p-10">
                  {/* Image */}
                  <div className="md:col-span-3 relative aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-100 to-blue-100">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Metric Overlay */}
                    {project.metric && (
                      <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-white/95 backdrop-blur-sm border border-purple-200 shadow-lg">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-purple-600" />
                          <span className="text-sm font-bold text-purple-700">{project.metric}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="md:col-span-2 flex flex-col justify-center space-y-5">
                    {project.logo ? (
                      <div className="inline-flex items-center gap-2 h-7 w-auto">
                        <Image 
                          src={project.logo || "/placeholder.svg"}
                          alt={`${project.category} logo`}
                          width={project.logo === "/informatica-lightbg-logo.svg" ? 180 : 140}
                          height={project.logo === "/informatica-lightbg-logo.svg" ? 36 : 28}
                          className="object-contain object-left"
                        />
                      </div>
                    ) : (
                      <div className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600">
                        <span className="w-2 h-2 rounded-full bg-purple-600"></span>
                        {project.category}
                      </div>
                    )}

                    <h3 className="text-3xl font-black text-balance leading-tight text-brand-gray-dark group-hover:text-purple-700 transition-colors">{project.title}</h3>

                    <p className="text-balance leading-relaxed text-brand-gray-dark text-lg">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-2 rounded-full text-sm font-medium bg-purple-50 text-purple-700 border border-purple-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={project.link}
                      className="mt-4 btn-primary inline-flex items-center gap-2 w-fit group/link cursor-pointer"
                    >
                      View case study
                      <ArrowUpRight className="w-5 h-5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/portfolio"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300 cursor-pointer inline-flex items-center gap-2"
            >
              View All Work
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* My Skills */}
        <section className="container mx-auto px-6 py-24 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-brand-gray-dark">
              What I Bring to the Table
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A unique blend of design craft, growth strategy, and technical fluency
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Growth-Driven Product Design",
                  description: "I don't just make things look good—I design with metrics in mind. Every interface decision is informed by conversion data, user behavior analytics, and A/B testing results. My designs consistently improve key metrics like activation, retention, and revenue.",
                  icon: <TrendingUp className="w-6 h-6" />
                },
                {
                  title: "AI Product Design",
                  description: "Deep experience designing conversational AI interfaces, recommendation systems, and ML-powered features. I understand how to make complex AI capabilities feel natural and build user trust in intelligent systems.",
                  icon: <Cpu className="w-6 h-6" />
                },
                {
                  title: "Full-Funnel Thinking",
                  description: "From awareness to advocacy, I design the complete customer journey. Expert in landing page optimization, onboarding flows, email campaigns, and in-product growth loops that drive sustainable business growth.",
                  icon: <Zap className="w-6 h-6" />
                },
                {
                  title: "Cross-Functional Leadership",
                  description: "Skilled at leading product initiatives across design, engineering, marketing, and sales. I speak the language of business stakeholders while maintaining design excellence and user advocacy.",
                  icon: <Users className="w-6 h-6" />
                }
              ].map((skill, index) => (
                <div key={index} className="group card-glass-hover backdrop-blur-xl bg-white/70 border border-purple-200/60 rounded-3xl p-8 hover:border-purple-400 hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-brand-gray-dark group-hover:text-purple-700 transition-colors">
                    {skill.title}
                  </h3>
                  <p className="leading-relaxed text-brand-gray-dark text-lg">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Built with v0 Section */}
        <section className="container mx-auto px-6 py-24">
          <div className="relative overflow-hidden rounded-[2.5rem] gradient-section-purple border border-purple-500/30">
            
            <div className="relative z-10 p-12 md:p-16">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/40 backdrop-blur-sm mb-8">
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">AI-Powered Development</span>
              </div>

              {/* Main Content */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left - Text */}
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                    Vibe Coded with AI
                  </h2>
                  <div className="space-y-4 text-lg leading-relaxed">
                    <p className="white">
                      This entire portfolio was built using{" "}
                      <a
                        href="https://v0.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-200 hover:text-blue-100 underline underline-offset-2 font-medium"
                      >
                        v0 by Vercel
                      </a>
                      {" "}— an AI-powered design and development tool that turns natural language into production-ready code.
                    </p>
                    <p className="white">
                      I curated the content, wrote case studies, art directed the visual design, selected color schemes, and directed layouts. Then I let AI handle the implementation — React components, Next.js routing, responsive layouts, and glassmorphic styling.
                    </p>
                    <p className="text-blue-200 font-medium">
                      This is the future of product development: strategic thinking + creative direction + AI execution.
                    </p>
                  </div>
                </div>

                {/* Right - Tech Stack Cards */}
                <div className="space-y-4">
                  {/* Tech Stack Card */}
                  <div className="bg-white/15 border border-white/30 rounded-2xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                        <Code2 className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2">Tech Stack</h3>
                        <div className="flex flex-wrap gap-2">
                          {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"].map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 rounded-lg bg-white/20 text-xs font-medium text-white border border-white/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Speed Card */}
                  <div className="bg-white/15 border border-white/30 rounded-2xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                        <Zap className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2">Built in Hours, Not Days</h3>
                        <p className="text-sm text-white/80 leading-relaxed">
                          From concept to deployed site in a fraction of the time traditional development would take.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* AI-Powered Card */}
                  <div className="bg-white/15 border border-white/30 rounded-2xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                        <Cpu className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2">AI-Assisted Iteration</h3>
                        <p className="text-sm text-white/80 leading-relaxed">
                          Rapid prototyping and refinement through conversational prompts and real-time previews.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Let's Grow Together CTA */}
        <section className="container mx-auto px-6 py-16">
          <div className="backdrop-blur-xl gradient-bg-purple-blue border border-white/10 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4 text-brand-gray-dark">
              Let's grow together
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto text-balance text-lg">
              I'm always open to discussing product design work, partnership opportunities, or just grabbing a virtual
              coffee to talk shop.
            </p>
            <a
              href="mailto:andi@andixd.com"
              className="btn-primary inline-flex items-center gap-2"
            >
              Schedule a conversation
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="header border-t border-white/10 backdrop-blur-xl bg-background/30">
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
