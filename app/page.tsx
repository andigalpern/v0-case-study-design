"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Sparkles, Code2, Zap, Cpu, TrendingUp, Users, Bot, Rocket, BarChart, Download } from 'lucide-react'
import { useEffect, useState, useRef } from 'react'
import { ContactSection } from '@/components/contact-section'
import { Header } from '@/components/header'

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10
      })
    }
    
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active')
          }
        })
      },
      { threshold: 0.1, rootMargin: '-50px' }
    )

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
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
      description: "Multi-channel activation strategy and trial-to-paid funnel optimization across 7 global markets.",
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
      description: "Conversational chatbot interface design to improve lead qualification and sales pipeline conversion.",
      image: "/images/sales-pipeline-3d.png",
      tags: ["AI/ML", "Conversion", "B2B SaaS"],
      link: "/informatica-chatbot-case-study",
    },
    {
      id: 4,
      title: "Adobe HelpX: 3D Interface Design",
      category: "Adobe",
      logo: "/adobe-logo.svg",
      description: "Interactive 3D blueprint-style interface design for Adobe HelpX tutorial platform.",
      image: "/images/adobe-helpx-3d.png",
      tags: ["3D Design", "Education", "UI Components"],
      link: "/adobe-substance-3d",
    },
  ]

  const companies = [
    { name: "Adobe", logo: "/adobe-logo.svg" },
    { name: "Informatica", logo: "/informatica-logo.svg" },
    { name: "Cisco", logo: "/cisco-logo.svg" },
    { name: "Smule", logo: "/smule-logo.png" },
    { name: "Patreon", logo: "/patreon-logo.svg" },
    { name: "Zapier", logo: "/zapier-logo.png" },
    { name: "Guitar Center", logo: "/guitar-center-logo.svg" },
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Gradient orbs background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-20 -left-40 w-[800px] h-[800px] rounded-full blur-3xl opacity-20 transition-transform duration-1000"
          style={{
            background: 'radial-gradient(circle, rgba(168,85,247,0.4) 0%, rgba(59,130,246,0.2) 50%, transparent 100%)',
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
          }}
        />
        <div 
          className="absolute top-1/3 -right-40 w-[1000px] h-[1000px] rounded-full blur-3xl opacity-15 transition-transform duration-1000"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(168,85,247,0.2) 50%, transparent 100%)',
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`
          }}
        />
        <div 
          className="absolute bottom-20 left-1/4 w-[600px] h-[600px] rounded-full blur-3xl opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(236,72,153,0.3) 0%, rgba(168,85,247,0.15) 50%, transparent 100%)',
          }}
        />
      </div>

      {/* Floating geometric shapes animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
        <svg className="w-full h-full" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10">
        <Header />
        
        {/* Hero Section */}
        <section ref={heroRef} className="relative pt-32 pb-20 min-h-screen flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              {/* Badge with micro-interaction */}
              <div className="reveal-on-scroll inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 backdrop-blur-sm mb-8 group hover:scale-105 transition-transform cursor-default">
                <div className="relative">
                  <Bot className="w-4 h-4 text-purple-600" />
                  <div className="absolute inset-0 animate-ping">
                    <Bot className="w-4 h-4 text-purple-400 opacity-75" />
                  </div>
                </div>
                <span className="text-sm font-bold bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text text-transparent">
                  AI Product Design × Growth Strategy
                </span>
              </div>

              <h1 className="reveal-on-scroll mb-12">
                <span className="block text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter mb-4" style={{ color: '#20221e' }}>
                  I design
                </span>
                <span className="block text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter mb-4">
                  <span className="relative inline-block">
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent blur-sm animate-gradient" style={{ backgroundSize: '200% auto' }}>
                      AI-powered
                    </span>
                    <span className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient" style={{ backgroundSize: '200% auto' }}>
                      AI-powered
                    </span>
                  </span>
                </span>
                <span className="block text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter" style={{ color: '#20221e' }}>
                  product experiences
                </span>
                <span className="block text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter mt-4">
                  <span className="relative inline-block">
                    <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 bg-clip-text text-transparent blur-sm" />
                    <span className="relative bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 bg-clip-text text-transparent">
                      that drive growth
                    </span>
                  </span>
                </span>
              </h1>

              <div className="reveal-on-scroll mb-6">
                <p className="text-xs uppercase tracking-[0.3em] text-purple-600 font-bold">
                  Impact at a Glance
                </p>
              </div>

              {/* Metrics bar with animated counters */}
              <div className="reveal-on-scroll grid grid-cols-3 gap-6 mb-12 max-w-4xl">
                {[
                  { value: "14+", label: "Years", icon: Rocket },
                  { value: "341%", label: "Pipeline Growth", icon: TrendingUp },
                  { value: "$7.5M", label: "Revenue Impact", icon: BarChart }
                ].map((metric, i) => (
                  <div key={i} 
                       className="group relative bg-white/40 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/60 hover:border-purple-500/30 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-500" 
                       style={{ animationDelay: `${i * 100}ms` }}>
                    <metric.icon className="w-5 h-5 text-purple-600 mb-3 group-hover:scale-110 transition-transform" />
                    <div className="text-4xl font-black text-purple-600 mb-1 tabular-nums">{metric.value}</div>
                    <div className="text-sm font-medium text-gray-600">{metric.label}</div>
                  </div>
                ))}
              </div>

              <p className="reveal-on-scroll text-2xl leading-relaxed mb-12 max-w-4xl" style={{ color: '#20221e' }}>
                Senior Product & Content Designer blending <strong className="font-bold text-purple-700">AI</strong>,{' '}
                <strong className="font-bold text-purple-700">content strategy</strong>, and{' '}
                <strong className="font-bold text-purple-700">growth design</strong> to transform complex product challenges into measurable revenue outcomes through user acquisition and activation.
              </p>

              <div className="reveal-on-scroll flex flex-col gap-4">
                <div className="flex gap-4 items-center">
                  <Link
                    href="/portfolio"
                    className="group relative px-8 py-4 rounded-2xl overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 transition-transform group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="relative flex items-center gap-2 text-white font-bold text-lg">
                      View Case Studies
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                  </Link>
                  <a
                    href="#contact"
                    onClick={scrollToContact}
                    className="px-8 py-4 rounded-2xl bg-white/40 backdrop-blur-md border border-white/20 font-bold text-lg hover:bg-white/60 hover:border-purple-500/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                    style={{ color: '#20221e' }}
                  >
                    Let's Talk
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 animate-bounce">
            <span className="text-xs font-medium text-gray-600">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-600/30 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-gray-600/50 rounded-full" />
            </div>
          </div>
        </section>

        {/* Companies I've Designed For */}
        <section className="reveal-on-scroll py-16 border-y border-white/10 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-white/40 backdrop-blur-sm" />
          <div className="relative container mx-auto px-6">
            <p className="text-center text-xs uppercase tracking-[0.3em] text-gray-600 font-bold mb-12">
              Trusted by Industry Leaders
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 max-w-6xl mx-auto">
              {companies.map((company, i) => (
                <div
                  key={company.name}
                  className="group relative flex items-center justify-center transition-all duration-500 hover:scale-110"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 rounded-xl blur-xl transition-all" />
                  <div className="relative h-12 w-32 opacity-60 group-hover:opacity-100 transition-opacity">
                    <Image src={company.logo || "/placeholder.svg"} alt={`${company.name} logo`} fill className="object-contain" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20 reveal-on-scroll">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-200 mb-6">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-bold text-purple-700">Featured Work</span>
              </div>
              <h2 className="text-6xl md:text-7xl font-black mb-6" style={{ color: '#20221e' }}>
                Growth Case Studies
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Strategic design solutions that deliver measurable business impact
              </p>
            </div>

            <div className="space-y-32 max-w-7xl mx-auto">
              {featuredWorks.map((project, index) => (
                <div
                  key={project.id}
                  className="reveal-on-scroll group"
                >
                  <Link href={project.link} className="block">
                    <div className={`grid md:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                      {/* Image */}
                      <div className={`relative ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl group-hover:blur-3xl group-hover:scale-105 transition-all duration-700" />
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-purple-50 to-blue-50 border border-white/20 group-hover:border-purple-300/50 group-hover:shadow-2xl group-hover:shadow-purple-500/20 group-hover:-translate-y-2 transition-all duration-700">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-1000"
                          />
                          {/* Metric badge */}
                          {project.metric && (
                            <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-white/95 backdrop-blur-sm border border-purple-200 shadow-xl group-hover:scale-110 transition-transform">
                              <div className="flex items-center gap-2">
                                <TrendingUp className="w-4 h-4 text-purple-600" />
                                <span className="text-sm font-black text-purple-700">{project.metric}</span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Content */}
                      <div className={`space-y-6 ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                        {project.logo && (
                          <div className="h-8">
                            <Image 
                              src={project.logo || "/placeholder.svg"}
                              alt={`${project.category} logo`}
                              width={project.logo === "/informatica-lightbg-logo.svg" ? 180 : 140}
                              height={36}
                              className="object-contain object-left opacity-60 group-hover:opacity-100 transition-opacity"
                            />
                          </div>
                        )}

                        <h3 className="text-4xl md:text-5xl font-black text-balance leading-tight group-hover:bg-gradient-to-r group-hover:from-purple-700 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500" style={{ color: '#20221e' }}>
                          {project.title}
                        </h3>

                        <p className="text-xl leading-relaxed text-gray-600">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-4 py-2 rounded-full text-sm font-semibold bg-white/60 backdrop-blur-sm border border-white/20 text-purple-700 group-hover:bg-purple-50 group-hover:border-purple-200 transition-colors"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="inline-flex items-center gap-2 text-purple-700 font-bold group-hover:gap-3 transition-all">
                          {project.id === 4 ? "View project" : "View case study"}
                          <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            <div className="text-center mt-20 reveal-on-scroll">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg font-bold hover:shadow-2xl hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300"
              >
                View All Work
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent" />
          <div className="relative container mx-auto px-6">
            <div className="text-center mb-20 reveal-on-scroll">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-200 mb-6">
                <Cpu className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-bold text-purple-700">What I Bring</span>
              </div>
              <h2 className="text-6xl md:text-7xl font-black mb-6" style={{ color: '#20221e' }}>
                Expertise
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A unique blend of design craft, growth strategy, and technical fluency
              </p>
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Growth-Driven Product & Content Design",
                  description: "Every interface and content decision is informed by conversion data, user behavior analytics, and A/B testing results. My designs and messaging consistently improve key metrics like activation, retention, and revenue.",
                  icon: <TrendingUp className="w-6 h-6" />
                },
                {
                  title: "AI Product Design",
                  description: "Deep experience designing conversational AI interfaces, recommendation systems, and ML-powered features. I understand how to make complex AI capabilities feel natural and build user trust through clear content and intuitive flows.",
                  icon: <Cpu className="w-6 h-6" />
                },
                {
                  title: "Content Strategy for User Acquisition",
                  description: "Expert in creating compelling product narratives, onboarding content, and activation messaging. From landing page copy to in-product tutorials, I craft content that converts prospects into engaged users.",
                  icon: <Zap className="w-6 h-6" />
                },
                {
                  title: "Cross-Functional Leadership",
                  description: "Skilled at leading product initiatives across design, engineering, marketing, content, and sales. I speak the language of business stakeholders while maintaining design and editorial excellence.",
                  icon: <Users className="w-6 h-6" />
                }
              ].map((skill, index) => (
                <div 
                  key={index} 
                  className="reveal-on-scroll group relative bg-white/60 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/80 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2 transition-all duration-500 cursor-default"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute top-8 right-8 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-500">
                    <div className="w-32 h-32 text-purple-600">
                      {skill.icon}
                    </div>
                  </div>
                  <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-6 text-white group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg">
                    {skill.icon}
                  </div>
                  <h3 className="text-2xl font-black mb-4 group-hover:text-purple-700 transition-colors" style={{ color: '#20221e' }}>
                    {skill.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-600">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 reveal-on-scroll" id="contact">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-2xl font-semibold text-gray-600 mb-4">
                Ready to accelerate your AI product roadmap?
              </p>
            </div>
            <ContactSection />
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 bg-white/40 backdrop-blur-xl">
          <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-600">© 2025 Andi Galpern. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="https://linkedin.com/in/andigalpern" target="_blank" rel="noopener noreferrer" 
                   className="text-sm text-gray-600 hover:text-purple-700 transition-colors">
                  LinkedIn
                </a>
                <a href="mailto:andi@andixd.com" 
                   className="text-sm text-gray-600 hover:text-purple-700 transition-colors">
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
