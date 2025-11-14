"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useState, useRef, useEffect } from "react"

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All")
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("Growth Strategy")

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    }, observerOptions)

    // Observe all animatable elements
    const elements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .fade-in-scale')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [activeFilter])

  useEffect(() => {
    const sectionObserverOptions = {
      threshold: 0.3,
      rootMargin: '-100px 0px -50% 0px'
    }

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('data-section')
          if (sectionId) {
            setActiveSection(sectionId)
          }
        }
      })
    }, sectionObserverOptions)

    const sections = document.querySelectorAll('[data-section]')
    sections.forEach((section) => sectionObserver.observe(section))

    return () => sectionObserver.disconnect()
  }, [])

  const categories = ["All", "Growth Strategy", "Product Design", "Case Studies", "Visual Design", "Writing"]

  const scrollToSection = (category: string) => {
    if (category === "All") {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    
    const section = document.querySelector(`[data-section="${category}"]`)
    if (section) {
      const offset = 120 // Account for sticky header
      const elementPosition = section.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setActiveFilter(category)
  }

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
      title: "Smule App Interface Design",
      image: "/images/smule-app-interface.webp",
      categories: ["Product Design"],
    },
    {
      title: "Smule Song Page - Dream a Little Dream",
      image: "/images/smule-dream-little-dream.webp",
      categories: ["Product Design"],
    },
    {
      title: "StarGreetz ads for Disney",
      image: "/images/stargreetz-disney-ads-v2.jpg",
      categories: ["Visual Design"],
    },
    {
      title: "CloudApp Sign-Up Page Design",
      image: "/images/cloudapp-signup.png",
      categories: ["Visual Design", "Product Design"],
    },
    {
      title: "Founders Friday London Event Design",
      image: "/images/founders-friday-london.png",
      categories: ["Visual Design"],
    },
    {
      title: "Ralph the Reindeer Holiday Tag Design",
      image: "/images/ralph-reindeer-tag.png",
      categories: ["Visual Design"],
    },
  ]

  const writingLinks = [
    {
      title: "Adobe.com: Designing for Accessible Experiences at Scale",
      url: "https://xd.adobe.com/ideas/perspectives/leadership-insights/accessibility-design-scale/",
      categories: ["Writing"],
    },
    {
      title: "Meet the Experience Design Team Behind Adobe XD CC",
      url: "https://xd.adobe.com/ideas/perspectives/profiles-interviews/meet-experience-design-team-behind-adobe-xd/",
      categories: ["Writing"],
    },
    {
      title: "User Research At LinkedIn With Sunny Patel",
      url: "https://xd.adobe.com/ideas/perspectives/profiles-interviews/user-research-linkedin-sunny-patel/",
      categories: ["Writing"],
    },
    {
      title: "How to Design a User-Friendly SaaS Pricing Page with Examples",
      url: "https://xd.adobe.com/ideas/process/information-architecture/saas-pricing-page-design-examples/",
      categories: ["Writing"],
    },
    {
      title: "7 Presentation Design Tips To Wow Your Audience",
      url: "https://xd.adobe.com/ideas/process/ui-design/7-presentation-design-tips/",
      categories: ["Writing"],
    },
    {
      title: "How to Create a Case Study for your UX and Product Design Portfolio",
      url: "https://xd.adobe.com/ideas/career-tips/ux-design-portfolio-case-study/",
      categories: ["Writing"],
    },
    {
      title: "Scaling Design Patterns at Eventbrite",
      url: "https://xd.adobe.com/ideas/perspectives/profiles-interviews/scaling-design-patterns-eventbrite/",
      categories: ["Writing"],
    },
    {
      title: "How to Convince your Boss to Pay for a Conference",
      url: "https://xd.adobe.com/ideas/career-tips/convince-boss-pay-conference/",
      categories: ["Writing"],
    },
    {
      title: "The Best Sketch Plugins for Product Designers in 2018",
      url: "https://xd.adobe.com/ideas/process/ui-design/best-sketch-plugins-product-designers/",
      categories: ["Writing"],
    },
    {
      title: "Meet Khoi Vinh, Principal Designer at Adobe",
      url: "https://xd.adobe.com/ideas/perspectives/profiles-interviews/meet-khoi-vinh-principal-designer-adobe/",
      categories: ["Writing"],
    },
    {
      title: "Market Research vs. User Research",
      url: "https://xd.adobe.com/ideas/process/user-research/market-research-vs-user-research/",
      categories: ["Writing"],
    },
    {
      title: "Shopify blog: Essential App Marketing: 11 Ways to Successfully Promote Your App",
      url: "https://www.shopify.com/partners/blog/app-marketing",
      categories: ["Writing"],
    },
    {
      title: "productdesign.tips: What is Product Design?",
      url: "https://productdesign.tips/what-is-product-design/",
      categories: ["Writing"],
    },
  ]

  const filteredWorkSamples =
    activeFilter === "All" ? workSamples : workSamples.filter((project) => project.categories.includes(activeFilter))

  const filteredMoreDesignWork =
    activeFilter === "All" ? moreDesignWork : moreDesignWork.filter((item) => item.categories.includes(activeFilter))

  const filteredWritingLinks =
    activeFilter === "All" ? writingLinks : writingLinks.filter((item) => item.categories.includes(activeFilter))

  const growthStrategyProjects = workSamples.filter(p => p.categories.includes("Growth Strategy"))
  const productDesignProjects = [...workSamples.filter(p => p.categories.includes("Product Design")), ...moreDesignWork.filter(d => d.categories.includes("Product Design"))]
  const caseStudyProjects = workSamples.filter(p => p.categories.includes("Case Studies"))
  const visualDesignProjects = [...workSamples.filter(p => p.categories.includes("Visual Design")), ...moreDesignWork.filter(d => d.categories.includes("Visual Design"))]

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -420, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 420, behavior: 'smooth' })
    }
  }

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredMoreDesignWork.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredMoreDesignWork.length) % filteredMoreDesignWork.length)
  }

  useEffect(() => {
    if (!scrollContainerRef.current || isHovering) return

    const container = scrollContainerRef.current
    const scrollSpeed = 0.5 // pixels per frame
    let animationFrameId: number

    const autoScroll = () => {
      if (container) {
        container.scrollLeft += scrollSpeed

        // Loop back to beginning when reaching the end
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = 0
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll)
    }

    animationFrameId = requestAnimationFrame(autoScroll)

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [isHovering])

  useEffect(() => {
    if (!lightboxOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevImage()
      } else if (e.key === 'ArrowRight') {
        nextImage()
      } else if (e.key === 'Escape') {
        closeLightbox()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [lightboxOpen, currentImageIndex, filteredMoreDesignWork.length])

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
                className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
              >
                andi galpern
              </Link>
              <div className="flex gap-8 items-center">
                <Link href="/portfolio" className="text-lg font-medium text-foreground">
                  Portfolio
                </Link>
                <Link
                  href="/home"
                  className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </Link>
                <a
                  href="mailto:andi@andixd.com"
                  className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white text-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 cursor-pointer"
                >
                  Contact
                </a>
              </div>
            </nav>
          </div>
        </header>

        {/* Hero */}
        <section className="container mx-auto px-6 py-16 fade-in-up">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance text-brand-gray-dark">
              Work Samples
            </h1>
            <p className="text-xl text-balance text-brand-gray-dark">
              View recent work samples in product design, content strategy, and marketing. Want to see more projects?{" "}
              <a href="mailto:andi@andixd.com" className="text-brand-purple hover:opacity-80 underline cursor-pointer">
                E-mail me at andi@andixd.com
              </a>
              .
            </p>
          </div>
        </section>

        {/* Sticky Navigation */}
        <section className="sticky top-0 z-40 backdrop-blur-xl bg-background/80 border-b border-white/10 mb-8">
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => scrollToSection(category)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 cursor-pointer text-lg ${
                    activeSection === category || (category === "All" && activeSection === "")
                      ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/25"
                      : "backdrop-blur-xl bg-card/40 border border-white/10 hover:border-purple-500/50 hover:bg-card/60 hover:shadow-md hover:scale-105"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Growth Strategy Section */}
        <section data-section="Growth Strategy" className="container mx-auto px-6 py-12 scroll-mt-32">
          <h2 className="text-4xl font-bold mb-8 gradient-text">
            Growth Strategy
          </h2>
          <div className="space-y-16">
            {growthStrategyProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group card-glass-hover ${
                  index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="grid md:grid-cols-5 gap-8 p-8">
                  <div className="md:col-span-3 relative aspect-video rounded-2xl overflow-hidden bg-black/20">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <div className="md:col-span-2 flex flex-col justify-center space-y-4">
                    <div className="inline-flex items-center gap-2 text-sm font-medium text-brand-purple">
                      <span className="w-2 h-2 rounded-full bg-[var(--brand-purple)]"></span>
                      {project.category}
                    </div>

                    <h3 className="text-2xl font-bold text-balance">{project.title}</h3>

                    <p className="text-balance leading-relaxed text-brand-gray-dark">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="badge-outline"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {project.link ? (
                      <Link
                        href={project.link}
                        className="mt-4 btn-primary inline-flex items-center gap-2 w-fit group"
                      >
                        View case study
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                    ) : (
                      <button className="mt-4 btn-primary inline-flex items-center gap-2 w-fit group">
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

        {/* Product Design Section */}
        <section data-section="Product Design" className="container mx-auto px-6 py-12 scroll-mt-32">
          <h2 className="text-4xl font-bold mb-8 gradient-text">
            Product Design
          </h2>
          <div className="space-y-16">
            {productDesignProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group card-glass-hover ${
                  index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="grid md:grid-cols-5 gap-8 p-8">
                  <div className="md:col-span-3 relative aspect-video rounded-2xl overflow-hidden bg-black/20">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <div className="md:col-span-2 flex flex-col justify-center space-y-4">
                    <div className="inline-flex items-center gap-2 text-sm font-medium text-brand-purple">
                      <span className="w-2 h-2 rounded-full bg-[var(--brand-purple)]"></span>
                      {project.category}
                    </div>

                    <h3 className="text-2xl font-bold text-balance">{project.title}</h3>

                    <p className="text-balance leading-relaxed text-brand-gray-dark">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="badge-outline"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {project.link ? (
                      <Link
                        href={project.link}
                        className="mt-4 btn-primary inline-flex items-center gap-2 w-fit group"
                      >
                        View case study
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                    ) : (
                      <button className="mt-4 btn-primary inline-flex items-center gap-2 w-fit group">
                        View case study
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Product Design from More Design Work */}
          <div className="mt-16 relative">
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white flex items-center justify-center hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white flex items-center justify-center hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div 
              className="relative px-14"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div ref={scrollContainerRef} className="overflow-x-auto scrollbar-hide pb-4">
                <div className="flex gap-6 min-w-max">
                  {moreDesignWork.filter(d => d.categories.includes("Product Design")).map((item, index) => (
                    <button
                      key={index}
                      onClick={() => openLightbox(index)}
                      className="group card-glass-hover w-[400px] flex-shrink-0 cursor-pointer"
                    >
                      <div className="relative w-full aspect-[4/3]">
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
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section data-section="Case Studies" className="container mx-auto px-6 py-12 scroll-mt-32">
          <h2 className="text-4xl font-bold mb-8 gradient-text">
            Case Studies
          </h2>
          <div className="space-y-16">
            {caseStudyProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group card-glass-hover ${
                  index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="grid md:grid-cols-5 gap-8 p-8">
                  <div className="md:col-span-3 relative aspect-video rounded-2xl overflow-hidden bg-black/20">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <div className="md:col-span-2 flex flex-col justify-center space-y-4">
                    <div className="inline-flex items-center gap-2 text-sm font-medium text-brand-purple">
                      <span className="w-2 h-2 rounded-full bg-[var(--brand-purple)]"></span>
                      {project.category}
                    </div>

                    <h3 className="text-2xl font-bold text-balance">{project.title}</h3>

                    <p className="text-balance leading-relaxed text-brand-gray-dark">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="badge-outline"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {project.link ? (
                      <Link
                        href={project.link}
                        className="mt-4 btn-primary inline-flex items-center gap-2 w-fit group"
                      >
                        View case study
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                    ) : (
                      <button className="mt-4 btn-primary inline-flex items-center gap-2 w-fit group">
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

        {/* Visual Design Section */}
        <section data-section="Visual Design" className="container mx-auto px-6 py-12 scroll-mt-32">
          <h2 className="text-4xl font-bold mb-8 gradient-text">
            Visual Design
          </h2>
          
          {/* Work samples with Visual Design category */}
          <div className="space-y-16 mb-16">
            {visualDesignProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group card-glass-hover ${
                  index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="grid md:grid-cols-5 gap-8 p-8">
                  <div className="md:col-span-3 relative aspect-video rounded-2xl overflow-hidden bg-black/20">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <div className="md:col-span-2 flex flex-col justify-center space-y-4">
                    <div className="inline-flex items-center gap-2 text-sm font-medium text-brand-purple">
                      <span className="w-2 h-2 rounded-full bg-[var(--brand-purple)]"></span>
                      {project.category}
                    </div>

                    <h3 className="text-2xl font-bold text-balance">{project.title}</h3>

                    <p className="text-balance leading-relaxed text-brand-gray-dark">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="badge-outline"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gallery from More Design Work */}
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-balance">
            Selected work from 2015-2020 showcasing brand identity, marketing, and visual design
          </p>

          <div className="relative">
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white flex items-center justify-center hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white flex items-center justify-center hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div 
              className="relative px-14"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div ref={scrollContainerRef} className="overflow-x-auto scrollbar-hide pb-4">
                <div className="flex gap-6 min-w-max">
                  {moreDesignWork.filter(d => d.categories.includes("Visual Design")).map((item, index) => (
                    <button
                      key={index}
                      onClick={() => openLightbox(index)}
                      className="group card-glass-hover w-[400px] flex-shrink-0 cursor-pointer"
                    >
                      <div className="relative w-full aspect-[4/3]">
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
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Writing Section */}
        <section data-section="Writing" className="container mx-auto px-6 py-16 scroll-mt-32 fade-in-up">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
            Writing
          </h2>

          <div className="max-w-3xl mx-auto card-glass">
            <ul className="space-y-6">
              {writingLinks.map((article, index) => (
                <li key={index}>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-brand-purple hover:opacity-80 transition-colors group cursor-pointer text-lg"
                  >
                    <ArrowUpRight className="w-5 h-5 mt-1 flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    <span className="text-balance font-medium">{article.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-6 py-16 fade-in-scale">
          <div className="backdrop-blur-xl gradient-bg-purple-blue border border-white/10 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to work together?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto text-balance">
              I'm always open to discussing product design work or partnership opportunities.
            </p>
            <a
              href="mailto:hello@andigalpern.com"
              className="btn-primary inline-flex items-center gap-2"
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

      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-6">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-300 cursor-pointer"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={prevImage}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white flex items-center justify-center hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white flex items-center justify-center hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image Container */}
          <div className="max-w-6xl w-full">
            <div className="relative w-full aspect-[4/3] mb-6">
              <Image
                src={filteredMoreDesignWork[currentImageIndex]?.image || "/placeholder.svg"}
                alt={filteredMoreDesignWork[currentImageIndex]?.title || "Design work"}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-medium text-white text-center">
              {filteredMoreDesignWork[currentImageIndex]?.title}
            </h3>
          </div>
        </div>
      )}
    </div>
  )
}
