"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, ExternalLink } from 'lucide-react'
import { ImageGalleryCarousel } from "@/components/image-gallery-carousel"
import { ContactSection } from "@/components/contact-section"

export default function AdobeSubstance3DPage() {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  const galleryImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/stager-lighting-500x268%402x-pydc9EpTZKD4KTGPlpWctJbcq35Tlw.png",
      alt: "Substance 3D Stager - Lighting controls",
      title: "Lighting Controls"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/stager-cameraviews-500x268%402x-1EsXhAEdFMQoqoI8anT5bcZVQNXmoT.png",
      alt: "Substance 3D Stager - Camera views",
      title: "Camera Views"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/stager-interface-500x268%402x-ciOxlZmgRrKWmdTj74tDNqMkbI0wxc.png",
      alt: "Substance 3D Stager - Interface overview",
      title: "Interface Overview"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/stager-stagescenes-500x268%402x-N7WYgXXOkW6kxJtGfdSIOS2LVNOt17.png",
      alt: "Substance 3D Stager - Stage scenes",
      title: "Stage Scenes"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/stager-addmaterials-500x268%402x-VX2ufDaYSZpdM1NHOflkVxCaSdYhtc.png",
      alt: "Substance 3D Stager - Add materials",
      title: "Add Materials"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/stager-render-500x268%402x-C7PfHpzQprheM2RwS62GgnJuG6XsOT.png",
      alt: "Substance 3D Stager - Render output",
      title: "Render Output"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/stager-glossary-500x268%402x-FqY0ZRkVAYXbl7seX6KKYpesBj6wjz.png",
      alt: "Substance 3D Stager - Glossary",
      title: "Glossary"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/stager-arrangeobjects-500x268%402x-6fUP3HOxo7DF7Co2TaWzSeQF2ZxmYO.png",
      alt: "Substance 3D Stager - Arrange objects",
      title: "Arrange Objects"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/painter-glossary-500x268%402x-jq65YX4qscUR4pjKetgP43FJQL0oiG.png",
      alt: "Substance 3D Painter - Glossary",
      title: "Painter Glossary"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sampler-materialvariations-500x268%402x-bjaShwfnsiCe5yWpM0CSmQ6YV0EemM.png",
      alt: "Substance 3D Sampler - Material variations",
      title: "Material Variations"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/painter-projection2-500x268%402x-gKcBD1OHdMHWC2kxYu8oJH4EQOvqIP.png",
      alt: "Substance 3D Painter - Projection mapping",
      title: "Projection Mapping"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/painter-createproject-500x268%402x-u6bVeGZC8m75hTpIxRuKP5AxoN699g.png",
      alt: "Substance 3D Painter - Create project",
      title: "Create Project"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sampler-creatematerial-500x268%402x-a8fucZPkv6Hfra6NAMscyyzrNttIOT.png",
      alt: "Substance 3D Sampler - Create material",
      title: "Create Material"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/painter-interface-500x268%402x-GKDFKSxhvUtkojTVKFILXFdtEb8H98.png",
      alt: "Substance 3D Painter - Interface overview",
      title: "Painter Interface"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sampler-interface-500x258%402x-pSyb13KbGatMJLH05drlhNe9UXTFKY.png",
      alt: "Substance 3D Sampler - Interface overview",
      title: "Sampler Interface"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sampler-interface-500x268%402x-2l3Mq7LzoONxDA6aXL4iJrQknGRtg2.png",
      alt: "Substance 3D Sampler - Glossary",
      title: "Sampler Glossary"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/designer-nodes-500x268%402x-PjDISJpgIuKqpTBqS5LHWZSGRNPKNH.png",
      alt: "Substance 3D Designer - Node-based workflow",
      title: "Node-Based Workflow"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/designer-coreconcepts-500x268%402x-r3ApZQ6bu8l4KBuPFA0Re4WE0mKJBb.png",
      alt: "Substance 3D Designer - Core concepts",
      title: "Core Concepts"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/designer-interface-500x268%402x-wI8WWGjaZK8EyAGqScZTXgrlR8mtST.png",
      alt: "Substance 3D Designer - Interface overview",
      title: "Designer Interface"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/designer-glossary-500x268%402x-jSAVgFg0Xcg2wb3w2IweNhLFqsNLKe.png",
      alt: "Substance 3D Designer - Glossary",
      title: "Designer Glossary"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
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

      {/* Back Button */}
      <div className="container mx-auto px-6 pt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <Image 
              src="/adobe-logo.svg"
              alt="Adobe logo"
              width={140}
              height={28}
              className="object-contain"
            />
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-black mb-6 text-brand-gray-dark text-balance leading-tight">
            Adobe HelpX: Substance 3D Tutorial Thumbnails
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-6 mb-8 text-lg">
            <div>
              <span className="text-muted-foreground">Role:</span>
              <span className="ml-2 font-semibold text-brand-gray-dark">Visual Designer</span>
            </div>
            <div>
              <span className="text-muted-foreground">Platform:</span>
              <span className="ml-2 font-semibold text-brand-gray-dark">Adobe HelpX</span>
            </div>
            <div>
              <span className="text-muted-foreground">Year:</span>
              <span className="ml-2 font-semibold text-brand-gray-dark">2021</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-xl leading-relaxed text-brand-gray-dark mb-8">
            Created a comprehensive set of tutorial thumbnails for Adobe's Substance 3D Stager application, focusing on clear visual communication of complex 3D modeling and rendering features for the HelpX educational platform.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3">
            {["3D Design", "UI Components", "Educational Content", "Visual Design"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full text-sm font-medium bg-purple-50 text-purple-700 border border-purple-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Gallery */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-brand-gray-dark">Tutorial Thumbnail Gallery</h2>
            <p className="text-lg text-muted-foreground">
              Browse through the complete set of tutorial thumbnails. The gallery auto-advances every 4 seconds, or click any thumbnail to view it instantly.
            </p>
          </div>

          <ImageGalleryCarousel images={galleryImages} autoPlayInterval={4000} />
        </div>
      </section>

      {/* Project Details */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Overview */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-brand-gray-dark">Project Overview</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-brand-gray-dark">
                As part of Adobe's HelpX educational platform, I designed a series of tutorial thumbnails for Substance 3D Stager—a professional 3D design application. Each thumbnail needed to clearly communicate specific features and workflows while maintaining visual consistency with Adobe's design system.
              </p>
              <p className="text-lg leading-relaxed text-brand-gray-dark">
                The challenge was to make complex 3D modeling concepts instantly recognizable and approachable for users of varying skill levels, from beginners exploring basic camera controls to advanced users working with materials and rendering.
              </p>
            </div>
          </div>

          {/* Design Approach */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-brand-gray-dark">Design Approach</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-brand-gray-dark">Visual Clarity</h3>
                <p className="text-brand-gray-dark leading-relaxed">
                  Each thumbnail uses clean compositions with clear focal points, ensuring users can quickly identify the tutorial topic at a glance.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-brand-gray-dark">Color Coding</h3>
                <p className="text-brand-gray-dark leading-relaxed">
                  Strategic use of gradient backgrounds helps categorize different tutorial types while maintaining visual interest and brand consistency.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-brand-gray-dark">Contextual UI</h3>
                <p className="text-brand-gray-dark leading-relaxed">
                  Interface panels shown in thumbnails provide context about the specific tools and controls covered in each tutorial.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-brand-gray-dark">3D Object Library</h3>
                <p className="text-brand-gray-dark leading-relaxed">
                  Consistent use of recognizable 3D objects (guitar, spheres) helps users understand capabilities without overwhelming beginners.
                </p>
              </div>
            </div>
          </div>

          {/* Impact */}
          <div className="backdrop-blur-xl gradient-bg-purple-blue border border-white/10 rounded-3xl p-10">
            <h2 className="text-3xl font-bold mb-6 text-brand-gray-dark">Impact</h2>
            <p className="text-lg leading-relaxed text-brand-gray-dark mb-6">
              These tutorial thumbnails helped Adobe create a cohesive, professional learning experience for Substance 3D Stager users. The clear visual communication improved tutorial discoverability and helped users find relevant content more efficiently.
            </p>
            <a
              href="https://helpx.adobe.com/substance-3d-stager/tutorials.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-purple-700 hover:text-purple-800 font-semibold transition-colors"
            >
              View Live Tutorials
              <ExternalLink className="w-5 h-5" />
            </a>
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
              {/* Adobe Growth Case Study */}
              <Link
                href="/adobe-growth-case-study"
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
                    Growth Strategy • Case Study
                  </div>
                  <h3 className="text-2xl font-black mb-2" style={{ color: "#20221e" }}>
                    Adobe Creative Cloud
                  </h3>
                  <p className="text-base text-gray-700 mb-4">
                    Global trial-to-paid optimization across 7 markets with personalized content
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

      <ContactSection />

      {/* Footer */}
      <footer className="header border-t border-white/10 backdrop-blur-xl bg-background/30 mt-0">
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
  )
}
