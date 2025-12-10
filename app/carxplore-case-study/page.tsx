"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Zap, Users, TrendingUp, Layout, FileText, Search } from "lucide-react"
import Header from "@/components/header"

export default function CarXploreCaseStudy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-cyan-500/5 to-transparent" />

        <div className="max-w-7xl mx-auto relative">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-8 group transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Work
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                Content & Growth Strategy
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">CarXPlore</h1>

              <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed">
                Automotive content platform designed to drive engagement and affiliate revenue through SEO-optimized
                editorial content
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="px-4 py-2 rounded-lg bg-white border border-gray-200">
                  <div className="text-sm text-gray-500">Company</div>
                  <div className="font-semibold text-gray-900">Site Impact</div>
                </div>
                <div className="px-4 py-2 rounded-lg bg-white border border-gray-200">
                  <div className="text-sm text-gray-500">Timeline</div>
                  <div className="font-semibold text-gray-900">2024-2025</div>
                </div>
                <div className="px-4 py-2 rounded-lg bg-white border border-gray-200">
                  <div className="text-sm text-gray-500">Role</div>
                  <div className="font-semibold text-gray-900">Product & Content Designer</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-3xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
                <Image
                  src="/images/carxplore-new.jpeg"
                  alt="CarXPlore Homepage"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold mb-4">
                01 — Challenge
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Building a Revenue-Driven Automotive Content Platform
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Site Impact needed a modern automotive content website that could compete in the crowded car advice
                market while driving affiliate revenue through Amazon and automotive partnerships.
              </p>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-gradient-to-br from-slate-50 to-blue-50/50 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3">Business Goals</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Create SEO-optimized content architecture for organic traffic</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Drive affiliate revenue through Amazon and automotive partners</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Build authority in practical car buying and ownership advice</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Compete with established automotive publications</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-slate-50 to-cyan-50/50 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3">Design Challenges</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-600 mt-1">•</span>
                    <span>Balance editorial credibility with commercial objectives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-600 mt-1">•</span>
                    <span>Create intuitive content discovery across multiple categories</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-600 mt-1">•</span>
                    <span>Design for both SEO performance and user engagement</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Role & Approach Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold mb-4">
            02 — My Role
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">Product & Content Design Leadership</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="p-6 rounded-xl bg-white border border-gray-200 hover:shadow-lg transition-shadow">
              <Layout className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Information Architecture</h3>
              <p className="text-sm text-gray-600">
                Designed content taxonomy and navigation structure optimized for both user discovery and SEO
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-gray-200 hover:shadow-lg transition-shadow">
              <FileText className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Content Strategy</h3>
              <p className="text-sm text-gray-600">
                Developed editorial templates and content patterns that balance authority with monetization
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-gray-200 hover:shadow-lg transition-shadow">
              <Search className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">UX & Visual Design</h3>
              <p className="text-sm text-gray-600">
                Created responsive layouts and component library for scalable content production
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold mb-4">
            03 — Design Strategy
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">Content-First Architecture for Growth</h2>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Category-Based Navigation</h3>
              <p className="text-gray-600 mb-4">
                Organized content into six core automotive categories: Buying, Safety, Technology, Finance, Maintenance,
                and Amazon Finds. Each category serves as both a discovery hub and SEO landing page.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">→</span>
                  <span>Icon-based navigation for quick category identification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">→</span>
                  <span>Vehicle type filters (Hybrids, Electrics, Trucks, SUVs, Sedans)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">→</span>
                  <span>Breadcrumb trails for SEO and user orientation</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 border border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-gray-900 text-white flex items-center justify-center font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Editorial Content Design</h3>
              <p className="text-gray-600 mb-4">
                Created article templates that blend Wall Street Journal editorial credibility with engaging visual
                storytelling and clear affiliate integration points.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">→</span>
                  <span>Publisher partnership badges for trust signals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">→</span>
                  <span>Scannable content with clear headings and sections</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">→</span>
                  <span>Related articles module for increased engagement</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100">
              <div className="w-12 h-12 rounded-xl bg-cyan-600 text-white flex items-center justify-center font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Conversion-Optimized CTAs</h3>
              <p className="text-gray-600 mb-4">
                Designed promotional modules that drive affiliate clicks without compromising editorial integrity.
                Amazon Finds section features curated product recommendations integrated naturally into content flow.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600">→</span>
                  <span>Featured deal banners for high-intent conversions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600">→</span>
                  <span>Lifestyle quiz tool for personalized recommendations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600">→</span>
                  <span>Strategic CTA placement within editorial content</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-gray-50 border border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-gray-900 text-white flex items-center justify-center font-bold mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Responsive Content Layouts</h3>
              <p className="text-gray-600 mb-4">
                Built mobile-first responsive templates ensuring optimal reading experience and conversion opportunities
                across all devices, critical for capturing mobile search traffic.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">→</span>
                  <span>Card-based design system for flexible content layouts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">→</span>
                  <span>Optimized image aspect ratios for performance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">→</span>
                  <span>Touch-friendly navigation and interactive elements</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Design System Preview */}
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-white">
            <Image
              src="/images/carxplore-category.png"
              alt="CarXPlore Category Page"
              width={1400}
              height={1000}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Content Templates Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold mb-4">
            04 — Editorial Design
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Content Templates Built for Scale</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">
            Designed article templates that maintain editorial quality while enabling rapid content production and clear
            conversion paths.
          </p>

          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-2xl bg-white mb-12">
            <Image
              src="/images/carxplore-blogpages.png"
              alt="CarXPlore Blog Article Pages"
              width={1400}
              height={2400}
              className="w-full h-auto"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl bg-white border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Publisher Credibility</h3>
              <p className="text-gray-600">
                Integrated Wall Street Journal and partner publisher logos to establish trust and editorial authority,
                differentiating from low-quality automotive content sites.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">SEO-Optimized Structure</h3>
              <p className="text-gray-600">
                Designed article hierarchy with clear H1-H6 structure, keyword-rich headings, and internal linking
                patterns to maximize organic search visibility.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Engagement Patterns</h3>
              <p className="text-gray-600">
                Built-in related articles, newsletter signup modules, and contextual CTAs to increase time on site and
                drive conversions throughout the content experience.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Scalable Content System</h3>
              <p className="text-gray-600">
                Created reusable article components and templates that enable rapid content production while maintaining
                consistent quality and brand standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-blue-50 via-cyan-50/30 to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold mb-4">
            05 — Impact
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
            Building a Competitive Content Platform
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-lg">
              <TrendingUp className="w-10 h-10 text-blue-600 mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">SEO-First</div>
              <div className="text-gray-600">
                Content architecture optimized for organic search discovery and category-based rankings
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-lg">
              <Users className="w-10 h-10 text-cyan-600 mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">Multi-Channel</div>
              <div className="text-gray-600">
                Affiliate revenue streams through Amazon partnerships and automotive dealer networks
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-lg">
              <Layout className="w-10 h-10 text-blue-600 mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">Scalable</div>
              <div className="text-gray-600">
                Modular design system enabling rapid content production across all categories
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Content Strategy Success</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span>Built comprehensive automotive content library across 6 core categories</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span>Established editorial credibility through publisher partnerships</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span>Created clear affiliate monetization paths without compromising user trust</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Design System Impact</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-600 text-xl">✓</span>
                  <span>Responsive templates ensuring optimal experience across all devices</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-600 text-xl">✓</span>
                  <span>Modular components enabling rapid content scaling</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-600 text-xl">✓</span>
                  <span>SEO-optimized information architecture for organic discovery</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Learnings Section */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold mb-4">
            06 — Key Learnings
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">Content Design for Growth</h2>

          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100">
              <h3 className="font-semibold text-gray-900 mb-2">1. Balance Editorial and Commercial Goals</h3>
              <p className="text-gray-600">
                Successful content platforms require careful balance between editorial credibility and monetization.
                Strategic placement of affiliate CTAs and partner logos maintains trust while driving revenue.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-r from-slate-50 to-blue-50 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">2. SEO-First Information Architecture</h3>
              <p className="text-gray-600">
                Category-based navigation and clear content hierarchy aren't just good UX—they're essential for organic
                search discovery. Every page should serve both users and search engines.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-100">
              <h3 className="font-semibold text-gray-900 mb-2">3. Design Systems Enable Content Scale</h3>
              <p className="text-gray-600">
                Modular component libraries and reusable templates are critical for content-heavy sites. They maintain
                quality while enabling rapid production—key to competing in crowded content markets.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-r from-slate-50 to-gray-50 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">4. Mobile-First Content Strategy</h3>
              <p className="text-gray-600">
                With automotive research happening increasingly on mobile, responsive content design isn't optional.
                Every template must deliver value and conversions on small screens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Want to discuss content strategy and product design?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's talk about building scalable content platforms that drive growth.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:shadow-lg hover:scale-105 transition-all"
          >
            Let's Talk
            <ExternalLink className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
