"use client"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowUpRight, TrendingUp, Target, Search, Award } from 'lucide-react'
import { useEffect } from 'react'

export default function InformaticaETLSEOCaseStudy() {
  useEffect(() => {
    // SEO: Update page title and meta description
    document.title = "ETL SEO Case Study: From Page 8 to #1 on Google | Andi Galpern"
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'How one strategic infographic and content restructuring took Informatica ETL page from page 8 to #1 on Google Search and Image Search. A UX design and SEO collaboration case study.')
    }
  }, [])

  return (
    <div className="min-h-screen relative bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50">
      {/* Ambient background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-40 w-96 h-96 bg-gradient-to-br from-purple-400/30 to-blue-400/30 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse"
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
                  href="mailto:andi@andixd.com"
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
            className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700 transition-colors group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-6 py-16 md:py-24">
          <div className="max-w-5xl mx-auto text-center">
            {/* Company Logo */}
            <div className="flex justify-center mb-8">
              <Image
                src="/informatica-lightbg-logo.svg"
                alt="Informatica logo"
                width={180}
                height={36}
                className="h-9"
              />
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-bold mb-8 shadow-lg">
              <Search className="w-4 h-4" />
              SEO Strategy • Content Design • Visual Strategy
            </div>

            <h1
              className="text-5xl md:text-7xl font-black mb-6 text-balance leading-tight"
              style={{ color: "#20221e" }}
            >
              From Page 8 to{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">#1 on Google</span>{" "}
              for "ETL"
            </h1>

            <p className="text-lg md:text-xl leading-relaxed text-balance max-w-3xl mx-auto text-gray-700">
              How one strategic infographic climbed Informatica from the middle of page 8 to the #1 spot on Google Search in just 6 months.
            </p>
          </div>
        </section>

        {/* Stats Hero */}
        <section className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: TrendingUp, number: "#1", label: "Google Search Ranking", color: "from-purple-600 to-purple-400" },
              { icon: Search, number: "#1", label: "Google Image Search", color: "from-blue-600 to-blue-400" },
              { icon: Award, number: "6 months", label: "From Page 8 to Top", color: "from-pink-600 to-pink-400" },
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
                  {stat.number}
                </div>
                <div className="text-base font-semibold text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* The Goal */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight" style={{ color: "#20221e" }}>
                The Goal
              </h2>

              <div className="backdrop-blur-xl bg-white/60 border-2 border-white/40 rounded-3xl p-10 mb-8 shadow-xl">
                <p className="text-xl md:text-2xl leading-relaxed text-gray-800 font-semibold">
                  We wanted to increase our search rankings for the keyword "ETL" and "Extract Transform Load" as a billion-dollar data management company.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Solution */}
        <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight" style={{ color: "#20221e" }}>
                The Solution
              </h2>

              <div className="backdrop-blur-xl bg-white/70 border-2 border-white/50 rounded-3xl p-10 mb-8 shadow-xl">
                <p className="text-lg md:text-xl leading-relaxed text-gray-800 mb-6">
                  I suggested that we make an infographic and give the page a facelift to build trust and help the infographic show up higher in search rankings.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Competitive Analysis */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight" style={{ color: "#20221e" }}>
                Competitive Analysis
              </h2>

              <div className="backdrop-blur-xl bg-white/60 border-2 border-white/40 rounded-3xl p-10 mb-8 shadow-xl">
                <p className="text-lg md:text-xl leading-relaxed text-gray-800 mb-6">
                  Before designing the infographic, I ran a competitive analysis by gathering images from competitors for the keyword "ETL" or "Extract Transform Load."
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-gray-800 mb-6">
                  I wanted to see what they had in common and how we could improve it so it's even better and more likely to climb the search engine.
                </p>

                <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 mt-8">
                  <p className="text-lg font-bold mb-4" style={{ color: "#20221e" }}>
                    I analyzed top-ranking images on Google for "ETL," from competitors including:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    {["Databricks", "Wikipedia", "Precisely", "Integrate.io", "Fivetran", "Microsoft Azure"].map((company, index) => (
                      <div key={index} className="p-4 bg-white/70 rounded-xl text-center font-semibold text-gray-900">
                        {company}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Differentiator */}
        <section className="py-20 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight" style={{ color: "#20221e" }}>
                What Made Ours Different
              </h2>

              <div className="backdrop-blur-xl bg-white/70 border-2 border-white/50 rounded-3xl p-10 mb-8 shadow-xl">
                <p className="text-lg md:text-xl leading-relaxed text-gray-800 mb-6 font-semibold">
                  While my solution is simple, it had one thing that competitors did not—which were micro explanations of each part of the ETL process.
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-gray-800 mb-6">
                  That little extra bit of information gives extra context and helps people understand clearly and in plain language how the process works.
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-gray-800 font-semibold">
                  Unlike the other examples, ours was straight to the point and easy to comprehend.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Visual - ETL Infographic */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-3xl font-black mb-8 text-center" style={{ color: "#20221e" }}>
                The ETL Infographic That Ranked #1
              </h3>
              <div className="backdrop-blur-xl bg-white/70 border-2 border-white/50 rounded-3xl p-8 shadow-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Y2PuvhS3vWz1imItnLrLGLGQffRCir.png"
                  alt="The ETL Process Explained - Extract, Transform, Load infographic showing data extraction from sources, transformation with processing, and loading to data repository"
                  width={1094}
                  height={538}
                  className="w-full h-auto rounded-2xl"
                />
                <p className="text-center text-sm text-gray-600 mt-6 font-medium">
                  The strategic infographic that took Informatica from page 8 to #1 on Google for "ETL"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Results */}
        <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight" style={{ color: "#20221e" }}>
                The Results
              </h2>

              <div className="backdrop-blur-xl bg-white/70 border-2 border-white/50 rounded-3xl p-10 mb-8 shadow-xl">
                <p className="text-xl md:text-2xl leading-relaxed text-gray-800 font-bold mb-6">
                  So we waited for 6 months, and what do you know?
                </p>
                <p className="text-2xl md:text-3xl leading-relaxed font-black mb-6" style={{ color: "#20221e" }}>
                  We went from the middle of page 8 in Google Search to the very top of page 1.
                </p>
                <p className="text-xl leading-relaxed text-gray-800 font-semibold">
                  Just because of our simple yet effective infographic.
                </p>
              </div>

              <div className="backdrop-blur-xl bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-10 shadow-xl">
                <p className="text-xl leading-relaxed text-white font-semibold text-center">
                  Six months after I left the company, the SEO team reached out to tell me the graphic was still ranking #1.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Statement */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Search className="w-20 h-20 mx-auto mb-8 text-white" />
              <h2 className="text-3xl md:text-5xl font-black mb-8 text-white leading-tight">
                This project reinforced something I already suspected:
              </h2>
              <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-balance text-white/90 leading-relaxed font-semibold">
                When you make information genuinely easy to understand, people lean in—and they click.
              </p>
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
                <Link
                  href="/informatica-web-promo-case-study"
                  className="group backdrop-blur-xl bg-white/60 border-2 border-white/40 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02] shadow-xl cursor-pointer"
                >
                  <div className="relative aspect-video bg-gradient-to-br from-blue-100 to-purple-100">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl">📈</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="inline-flex items-center gap-2 text-sm font-bold text-purple-600 mb-3">
                      <span className="w-2 h-2 rounded-full bg-purple-600"></span>
                      Growth Strategy • Case Study
                    </div>
                    <h3 className="text-2xl font-black mb-2" style={{ color: "#20221e" }}>
                      Informatica Web Promo
                    </h3>
                    <p className="text-base text-gray-700 mb-4">
                      How small, strategic changes increased trial traffic by 230%
                    </p>
                    <div className="inline-flex items-center gap-2 text-purple-600 font-semibold group-hover:gap-3 transition-all">
                      View case study
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </Link>

                <Link
                  href="/portfolio"
                  className="group backdrop-blur-xl bg-white/60 border-2 border-white/40 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02] shadow-xl cursor-pointer"
                >
                  <div className="relative aspect-video bg-gradient-to-br from-purple-100 to-blue-100">
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

        {/* CTA */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Target className="w-20 h-20 mx-auto mb-8 text-white" />
              <h2 className="text-3xl md:text-4xl font-black mb-6 text-white leading-tight">
                Looking for a strategist who bridges design, content, and SEO?
              </h2>
              <p className="text-base md:text-lg mb-10 max-w-2xl mx-auto text-balance text-white/90 leading-relaxed">
                If you need someone who can create high-impact content that ranks and converts, let's talk.
              </p>
              <a
                href="mailto:andi@andixd.com"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-white text-purple-600 text-base font-bold hover:shadow-2xl hover:shadow-white/50 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                📩 andi@andixd.com
                <ArrowUpRight className="w-6 h-6" />
              </a>
            </div>
          </div>
        </section>

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
