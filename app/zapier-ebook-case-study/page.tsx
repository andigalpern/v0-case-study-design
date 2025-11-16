"use client"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, CheckCircle2, BookOpen, Palette, Globe } from 'lucide-react'
import { useState } from 'react'
import { ContactSection } from "@/components/contact-section"

export default function ZapierEbookCaseStudy() {
  const [selectedImage, setSelectedImage] = useState(0)

  const ebookImages = [
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zapier-ebook-design-TlmsvvbZFDdRHClku6OBGbDKxnOmXS.png",
      title: "Cover Page",
      description: "Dynamic cover design featuring Zapier's extensive app integration ecosystem"
    },
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zap-pg3-3BA01oub6oddJwHQ3Q5JgpoE4OFtpR.png",
      title: "What is Zapier?",
      description: "Introduction page with customer testimonial and value proposition"
    },
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zap-pg4-p-1080-zA5eqKIXtDEfTv7VD8vfGfp1FAOK9L.png",
      title: "How Zapier Works",
      description: "Visual workflow explanation with three-step integration process"
    },
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zap-pg9-p-3200-jxJenzIO4CtOhNDsE1fY1rjxEFUR54.png",
      title: "Pricing Information",
      description: "Clear pricing tiers designed for partner customer education"
    }
  ]

  return (
    <div className="min-h-screen relative bg-gradient-to-b from-orange-50 via-pink-50 to-purple-50">
      {/* Ambient background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-40 w-96 h-96 bg-gradient-to-br from-orange-400/30 to-pink-400/30 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-pink-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-white/20 backdrop-blur-xl bg-white/40">
          <div className="container mx-auto px-6 py-6">
            <nav className="flex items-center justify-between">
              <Link
                href="/"
                className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent cursor-pointer"
              >
                andi galpern
              </Link>
              <div className="flex gap-8 items-center">
                <Link
                  href="/portfolio"
                  className="text-lg font-medium text-gray-900 hover:text-purple-600 transition-colors cursor-pointer"
                >
                  Portfolio
                </Link>
                <Link href="/about" className="text-lg font-medium text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
                  About
                </Link>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg font-medium hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  Contact
                </a>
              </div>
            </nav>
          </div>
        </header>

        {/* Back button */}
        <div className="container mx-auto px-6 py-8">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>
        </div>

        {/* Hero */}
        <section className="container mx-auto px-6 py-16 md:py-24">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-600 to-pink-600 text-white text-sm font-bold mb-8 shadow-lg">
              <BookOpen className="w-4 h-4" />
              Editorial Design • Template System
            </div>
            <h1
              className="text-5xl md:text-7xl font-black mb-6 text-balance leading-tight"
              style={{ color: "#20221e" }}
            >
              Zapier Partner E-book Template
            </h1>
            <p className="text-xl md:text-2xl font-bold mb-6 text-balance text-gray-700">
              Scalable Design System for B2B Partner Marketing
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-balance max-w-3xl mx-auto text-gray-700">
              Creating a flexible, white-label e-book template that Zapier could customize for different technology partners while maintaining brand consistency
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: BookOpen, label: "Pages Designed", value: "20+", color: "from-orange-600 to-orange-400" },
              { icon: Palette, label: "Design System", value: "100%", sublabel: "Modular", color: "from-pink-600 to-pink-400" },
              { icon: Globe, label: "Partner Reach", value: "1000s", color: "from-purple-600 to-purple-400" },
            ].map((stat, index) => (
              <div
                key={index}
                className="backdrop-blur-xl bg-white/60 border-2 border-white/40 rounded-3xl p-8 text-center hover:scale-105 transition-transform duration-300 shadow-xl"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} mb-4`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-5xl font-black mb-2 bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-base font-semibold text-gray-700">{stat.label}</div>
                {stat.sublabel && (
                  <div className="text-sm font-medium text-gray-600 mt-1">{stat.sublabel}</div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Section 01 - Overview */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-orange-600 to-pink-600 text-white mb-8 shadow-lg">
                <span className="text-2xl font-black">01</span>
                <span className="text-base font-bold">Project Overview</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight" style={{ color: "#20221e" }}>
                The Challenge
              </h2>

              <div className="backdrop-blur-xl bg-white/60 border-2 border-white/40 rounded-3xl p-10 shadow-xl mb-8">
                <p className="text-lg md:text-xl leading-relaxed text-gray-800 mb-6">
                  Zapier needed a scalable way to create educational content for their technology partners. Rather than designing a new e-book from scratch for each partnership, they wanted a <span className="font-bold text-orange-600">flexible template system</span> that could be quickly customized with partner branding while maintaining Zapier's design standards.
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-gray-800">
                  The e-book needed to educate partner customers about workflow automation, explain how Zapier integrates with the partner's platform, and provide practical use cases—all while being <span className="font-bold">white-label ready</span> for different brands.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Modular page templates for easy customization",
                  "Clear information architecture for technical content",
                  "Partner brand flexibility within Zapier's design system",
                  "Scalable production workflow for marketing team"
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 backdrop-blur-xl bg-white/60 border-2 border-white/40 rounded-2xl shadow-lg"
                  >
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5 text-orange-600" />
                    <span className="text-sm md:text-base font-semibold text-gray-900 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 02 - My Role */}
        <section className="py-20 bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 text-white mb-8 shadow-lg">
                <span className="text-2xl font-black">02</span>
                <span className="text-base font-bold">My Role</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black mb-12 leading-tight" style={{ color: "#20221e" }}>
                Editorial Designer & Template Architect
              </h2>

              <div className="backdrop-blur-xl bg-white/70 border-2 border-white/50 rounded-3xl p-10 mb-10 shadow-xl">
                <p className="text-xl font-bold text-center mb-6" style={{ color: "#20221e" }}>
                  I designed the complete e-book template system from concept to delivery, creating a reusable framework that the marketing team could deploy across multiple partner campaigns.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Visual design and layout system",
                  "Typography and brand integration",
                  "Modular page template creation",
                  "Information architecture and content flow",
                  "Icon system and visual language",
                  "Template documentation for team",
                  "Production-ready file delivery",
                  "Design QA and partner customization support"
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 backdrop-blur-xl bg-white/70 border-2 border-white/50 rounded-2xl hover:scale-105 transition-transform duration-200 shadow-lg"
                  >
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5 text-pink-600" />
                    <span className="text-sm md:text-base font-semibold text-gray-900 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 03 - Template Gallery */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-orange-600 to-pink-600 text-white mb-8 shadow-lg">
                  <span className="text-2xl font-black">03</span>
                  <span className="text-base font-bold">Template Pages</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight" style={{ color: "#20221e" }}>
                  E-book Design System
                </h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  A comprehensive template featuring modular layouts, clear information hierarchy, and flexible branding areas that could be customized for different Zapier partners
                </p>
              </div>

              {/* Main image display */}
              <div className="backdrop-blur-xl bg-white/70 border-2 border-white/50 rounded-3xl p-8 mb-8 shadow-xl">
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl">
                  <img
                    src={ebookImages[selectedImage].url || "/placeholder.svg"}
                    alt={ebookImages[selectedImage].title}
                    className="w-full h-auto"
                  />
                </div>
                <div className="mt-6 text-center">
                  <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-orange-600 to-pink-600 text-white text-sm font-bold mb-3">
                    {ebookImages[selectedImage].title}
                  </span>
                  <p className="text-base font-semibold text-gray-800">
                    {ebookImages[selectedImage].description}
                  </p>
                </div>
              </div>

              {/* Thumbnail navigation */}
              <div className="grid grid-cols-4 gap-4">
                {ebookImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-[4/3] rounded-xl overflow-hidden transition-all duration-300 ${
                      selectedImage === index
                        ? 'ring-4 ring-orange-600 scale-105 shadow-2xl'
                        : 'ring-2 ring-white/40 hover:ring-orange-400 hover:scale-105 shadow-lg'
                    }`}
                  >
                    <img
                      src={image.url || "/placeholder.svg"}
                      alt={`${image.title} thumbnail`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                      <span className="text-white text-xs font-bold">{image.title}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 04 - Full Spread View */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-black mb-6 text-white">
                  Complete Template System
                </h3>
                <p className="text-lg text-white/90 max-w-3xl mx-auto">
                  Bird's eye view of the entire e-book template showing consistent design language, modular page layouts, and flexible content zones ready for partner customization
                </p>
              </div>

              <div className="backdrop-blur-xl bg-white/10 border-2 border-white/20 rounded-3xl p-8 shadow-2xl">
                <div className="relative overflow-hidden rounded-2xl bg-gray-800 shadow-2xl">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zapier-ebook-2400px-p-2000-67eHWxh80XVkGgJDjkr8CzxfplzHEa.jpg"
                    alt="Complete Zapier ebook template system showing all pages in layout grid"
                    className="w-full h-auto"
                  />
                </div>
                <div className="mt-6 text-center">
                  <p className="text-base font-semibold text-white/90">
                    20+ modular pages designed for rapid partner customization and scalable production
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 05 - Design Approach */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white mb-8 shadow-lg">
                <span className="text-2xl font-black">04</span>
                <span className="text-base font-bold">Design Approach</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black mb-12 leading-tight" style={{ color: "#20221e" }}>
                Template System Strategy
              </h2>

              <div className="space-y-8">
                {/* Modular Architecture */}
                <div className="backdrop-blur-xl bg-white/60 border-2 border-white/40 rounded-3xl p-10 shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-600 to-pink-600 flex items-center justify-center text-white font-black text-xl">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-black mb-4" style={{ color: "#20221e" }}>
                        Modular Page Architecture
                      </h3>
                      <p className="text-base md:text-lg leading-relaxed text-gray-800">
                        I created reusable content blocks that could be mixed and matched depending on the partner's needs—testimonial cards, feature grids, pricing tables, and workflow diagrams. Each module maintained visual consistency while allowing for content flexibility.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Visual Hierarchy */}
                <div className="backdrop-blur-xl bg-white/60 border-2 border-white/40 rounded-3xl p-10 shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-600 to-purple-600 flex items-center justify-center text-white font-black text-xl">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-black mb-4" style={{ color: "#20221e" }}>
                        Clear Visual Hierarchy
                      </h3>
                      <p className="text-base md:text-lg leading-relaxed text-gray-800">
                        Using Zapier's signature orange accent color strategically, I created a clear reading flow that guides readers through complex technical information. Typography, spacing, and color work together to make automation concepts accessible and engaging.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Brand Flexibility */}
                <div className="backdrop-blur-xl bg-white/60 border-2 border-white/40 rounded-3xl p-10 shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-orange-600 flex items-center justify-center text-white font-black text-xl">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-black mb-4" style={{ color: "#20221e" }}>
                        Partner Brand Integration
                      </h3>
                      <p className="text-base md:text-lg leading-relaxed text-gray-800 mb-4">
                        The template was designed with clearly defined zones where partner branding could be inserted without disrupting the overall design system. The marketing team could easily swap:
                      </p>
                      <div className="space-y-2">
                        {[
                          "Partner logo and company name",
                          "Co-branded header elements",
                          "Partner-specific use cases and testimonials",
                          "Custom call-to-action buttons"
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-purple-600"></span>
                            <span className="text-base font-semibold text-gray-900">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 06 - Impact */}
        <section className="py-20 bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-orange-600 to-pink-600 text-white mb-8 shadow-lg">
                <span className="text-2xl font-black">05</span>
                <span className="text-base font-bold">Impact</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black mb-12 leading-tight" style={{ color: "#20221e" }}>
                Scalable Partner Marketing Asset
              </h2>

              <div className="space-y-6">
                {[
                  {
                    title: "Production Efficiency",
                    description: "Reduced e-book creation time from weeks to days, allowing the marketing team to support more partner campaigns",
                  },
                  {
                    title: "Design Consistency",
                    description: "Maintained Zapier's brand standards across all partner variations while allowing for co-branding flexibility",
                  },
                  {
                    title: "Educational Value",
                    description: "Created clear, accessible content that helped partner customers understand workflow automation benefits",
                  },
                  {
                    title: "Reusable System",
                    description: "Built a template that could scale across hundreds of technology partnerships without requiring redesign",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="backdrop-blur-xl bg-white/70 border-2 border-white/50 rounded-3xl p-10 hover:scale-[1.02] transition-transform duration-200 shadow-xl"
                  >
                    <h3 className="text-xl md:text-2xl font-black mb-3" style={{ color: "#20221e" }}>
                      {item.title}
                    </h3>
                    <p className="text-base md:text-lg text-gray-800 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 backdrop-blur-xl bg-gradient-to-br from-orange-600/20 to-pink-600/20 border-2 border-orange-600/30 rounded-3xl p-10 shadow-xl">
                <p className="text-lg md:text-xl leading-relaxed font-semibold text-center" style={{ color: "#20221e" }}>
                  This project demonstrates my ability to create scalable design systems that balance brand consistency with flexibility—essential for B2B marketing campaigns that need to work across multiple partnerships.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Browse Other Work */}
        <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-center" style={{ color: "#20221e" }}>
                Browse Other Work
              </h2>
              <p className="text-lg text-center text-gray-700 mb-12 max-w-2xl mx-auto">
                Explore more case studies and featured projects
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Adobe Substance 3D */}
                <Link
                  href="/adobe-substance-3d"
                  className="group backdrop-blur-xl bg-white/60 border-2 border-white/40 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02] shadow-xl"
                >
                  <div className="relative aspect-video bg-gradient-to-br from-purple-100 to-pink-100">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl">🎨</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="inline-flex items-center gap-2 text-sm font-bold text-purple-600 mb-3">
                      <span className="w-2 h-2 rounded-full bg-purple-600"></span>
                      Product Design • Help Content
                    </div>
                    <h3 className="text-2xl font-black mb-2" style={{ color: "#20221e" }}>
                      Adobe Substance 3D
                    </h3>
                    <p className="text-base text-gray-700 mb-4">
                      Learning experience design for 3D creation tools
                    </p>
                    <div className="inline-flex items-center gap-2 text-purple-600 font-semibold group-hover:gap-3 transition-all">
                      View case study
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </Link>

                {/* Back to Portfolio */}
                <Link
                  href="/portfolio"
                  className="group backdrop-blur-xl bg-white/60 border-2 border-white/40 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02] shadow-xl"
                >
                  <div className="relative aspect-video bg-gradient-to-br from-blue-100 to-purple-100">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl">📂</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 mb-3">
                      <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                      All Work
                    </div>
                    <h3 className="text-2xl font-black mb-2" style={{ color: "#20221e" }}>
                      View Full Portfolio
                    </h3>
                    <p className="text-base text-gray-700 mb-4">
                      Explore all projects, design work, and case studies
                    </p>
                    <div className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                      See all work
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />

        {/* Footer */}
        <footer className="border-t border-white/20 backdrop-blur-xl bg-white/40">
          <div className="container mx-auto px-6 py-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm font-semibold text-gray-700">© 2025 Andi Galpern. All rights reserved.</p>
              <div className="flex gap-8">
                <a
                  href="https://linkedin.com/in/andigalpern"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-gray-700 hover:text-purple-600 transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://dribbble.com/andigalpern"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-gray-700 hover:text-purple-600 transition-colors"
                >
                  Dribbble
                </a>
                <a
                  href="mailto:andi@andixd.com"
                  className="text-sm font-semibold text-gray-700 hover:text-purple-600 transition-colors"
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
