"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Sparkles, Code2, Zap, Cpu, TrendingUp, Users } from 'lucide-react'
import { useEffect, useState } from 'react'
import { ContactSection } from '@/components/contact-section'

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  const featuredWorks = [
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
      id: 4,
      title: "Adobe HelpX: 3D Interface Design",
      category: "Adobe",
      logo: "/adobe-logo.svg",
      description:
        "Interactive 3D blueprint-style interface design for Adobe HelpX tutorial platform with component-based learning modules.",
      image: "/images/adobe-helpx-3d.png",
      tags: ["3D Design", "Education", "UI Components"],
      link: "/adobe-substance-3d", // Updated link to new Substance 3D page
    },
  ]

  const companies = [
    { name: "Adobe", logo: "/adobe-logo.svg" },
    { name: "Informatica", logo: "/informatica-logo.svg" },
    { name: "Smule", logo: "/smule-logo.png" },
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

      {/* Floating geometric shapes animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
        {/* Hero section - very far away shapes */}
        <div 
          className="absolute top-10 left-10 w-16 h-16 border border-purple-500/20 rounded-full"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        />
        <div 
          className="absolute top-32 right-10 w-12 h-12 border border-blue-500/15"
          style={{ transform: `translateY(${scrollY * -0.06}px) rotate(${scrollY * 0.02}deg)` }}
        />
        <div 
          className="absolute top-20 right-1/3 w-20 h-20 border border-purple-500/15 rounded-xl rotate-12"
          style={{ transform: `translateY(${scrollY * 0.04}px) rotate(12deg)` }}
        />
        <div 
          className="absolute top-48 left-1/4 w-14 h-14 border border-blue-500/20 rounded-lg rotate-45"
          style={{ transform: `translateY(${scrollY * -0.07}px) rotate(45deg)` }}
        />
        
        {/* Original hero shapes - closer */}
        <div 
          className="absolute top-40 left-20 w-32 h-32 border-2 border-purple-500/30 rounded-2xl rotate-45"
          style={{ transform: `translateY(${scrollY * 0.1}px) rotate(45deg)` }}
        />
        <div 
          className="absolute top-60 right-40 w-24 h-24 border-2 border-blue-500/30 rounded-full"
          style={{ transform: `translateY(${scrollY * -0.15}px)` }}
        />
        
        {/* Mid-page shapes */}
        <div 
          className="absolute top-[800px] left-10 w-28 h-28 border-2 border-purple-500/25 rounded-full"
          style={{ transform: `translateY(${scrollY * 0.09}px)` }}
        />
        <div 
          className="absolute top-[1000px] right-32 w-36 h-36 border border-blue-500/20 rounded-3xl rotate-12"
          style={{ transform: `translateY(${scrollY * -0.11}px) rotate(12deg)` }}
        />
        <div 
          className="absolute top-[1200px] left-1/4 w-20 h-20 border-2 border-purple-500/30"
          style={{ transform: `translateY(${scrollY * 0.13}px) rotate(${scrollY * 0.04}deg)` }}
        />
        
        {/* Lower section shapes */}
        <div 
          className="absolute top-[1600px] right-20 w-32 h-32 border-2 border-blue-500/25 rounded-2xl"
          style={{ transform: `translateY(${scrollY * -0.1}px) rotate(${scrollY * -0.03}deg)` }}
        />
        <div 
          className="absolute top-[1800px] left-1/3 w-28 h-28 border border-purple-500/20 rounded-xl rotate-12"
          style={{ transform: `translateY(${scrollY * 0.12}px) rotate(12deg)` }}
        />
        <div 
          className="absolute top-[2000px] right-1/3 w-28 h-28 border-2 border-blue-500/30 rounded-full"
          style={{ transform: `translateY(${scrollY * -0.08}px)` }}
        />
        
        {/* Bottom shapes */}
        <div 
          className="absolute bottom-40 right-20 w-40 h-40 border-2 border-purple-500/20"
          style={{ transform: `translateY(${scrollY * 0.08}px) rotate(${scrollY * 0.05}deg)` }}
        />
        <div 
          className="absolute bottom-60 left-1/3 w-28 h-28 border border-purple-500/30 rounded-xl rotate-12"
          style={{ transform: `translateY(${scrollY * -0.12}px) rotate(12deg)` }}
        />
        <div 
          className="absolute bottom-[800px] left-16 w-22 h-22 border border-purple-500/20 rounded-full"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="header border-b border-white/10 backdrop-blur-xl bg-background/30 sticky top-0 z-50">
          <div className="container mx-auto px-6 py-6">
            <nav className="flex items-center justify-between">
              <Link
                href="/"
                className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent hover:from-purple-500 hover:to-blue-400 transition-all cursor-pointer"
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
                  href="/about"
                  className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  About
                </Link>
                <a
                  href="#contact"
                  onClick={scrollToContact}
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
              Senior Product Designer specializing in <strong className="text-purple-700">AI-powered products</strong> and <strong className="text-purple-700">growth design strategy</strong>. I've helped companies like Adobe and Informatica turn complex problems into revenue-driving experiences.
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
                href="#contact"
                onClick={scrollToContact}
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
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-brand-gray-dark animate-fade-in">
              Featured Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Case studies showcasing measurable impact through strategic design
            </p>
          </div>

          <div className="space-y-16 max-w-7xl mx-auto">
            {featuredWorks.map((project, index) => (
              <div
                key={project.id}
                className="group card-glass-hover backdrop-blur-xl bg-card/40 border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
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
                      {project.id === 4 ? "View project" : "View case study"}
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
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-brand-gray-dark animate-fade-in">
              What I Bring to the Table
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
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
                <div 
                  key={index} 
                  className="group card-glass-hover backdrop-blur-xl bg-white/70 border border-purple-200/60 rounded-3xl p-8 hover:border-purple-400 hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-6 text-white group-hover:scale-110 group-hover:rotate-3 transition-all">
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
                      This entire portfolio was built using an AI-powered design and development tool that turns natural language into production-ready code.
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
        <ContactSection />

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
