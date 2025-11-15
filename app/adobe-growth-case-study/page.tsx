"use client"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, CheckCircle2, TrendingUp, Users, Globe, Target } from 'lucide-react'

export default function AdobeGrowthCaseStudy() {
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
                className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
              >
                andi galpern
              </Link>
              <div className="flex gap-8 items-center">
                <Link
                  href="/portfolio"
                  className="text-sm font-semibold text-gray-900 hover:text-purple-600 transition-colors"
                >
                  Portfolio
                </Link>
                <Link href="/" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                  About
                </Link>
                <a
                  href="mailto:andi@andixd.com"
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105"
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
            className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>
        </div>

        {/* Hero - Full width impact */}
        <section className="container mx-auto px-6 py-16 md:py-24">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-bold mb-8 shadow-lg">
              Growth Strategy • Case Study
            </div>
            <h1
              className="text-5xl md:text-6xl font-black mb-6 text-balance leading-tight"
              style={{ color: "#20221e" }}
            >
              Adobe Creative Cloud
            </h1>
            <p className="text-xl md:text-2xl font-bold mb-6 text-balance bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Global Trial-to-Paid Optimization
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-balance max-w-3xl mx-auto text-gray-700">
              Multi-channel activation strategy across 7 markets, improving feature usage and conversion through
              personalized educational content
            </p>
          </div>
        </section>

        {/* Stats Hero - Big Numbers */}
        <section className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Globe, number: "7", label: "Global Markets", color: "from-purple-600 to-purple-400" },
              { icon: Users, number: "8", label: "Tutorial Pages Built", color: "from-blue-600 to-blue-400" },
              { icon: TrendingUp, number: "100K+", label: "Users Impacted", color: "from-pink-600 to-pink-400" },
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

        {/* Section 01 - The Challenge */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/20 backdrop-blur-xl border-2 border-white/30 mb-8">
                <span className="text-2xl font-black text-white">01</span>
                <span className="text-base font-bold text-white">The Challenge</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black mb-8 text-white leading-tight">
                Closing the Activation Gap
              </h2>

              <div className="backdrop-blur-xl bg-white/20 border-2 border-white/30 rounded-3xl p-10 space-y-6">
                <p className="text-lg md:text-xl font-semibold leading-relaxed text-white">
                  Adobe's global trial-to-paid funnel was suffering from a clear{" "}
                  <span className="bg-white/30 px-3 py-1 rounded-lg">Activation Gap</span>. Users weren't reaching their
                  "Aha! Moment" early enough.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-white/90">
                  With Creative Cloud's steep learning curve, new users often stalled before completing their first
                  meaningful action. The Growth Design Team validated a core hypothesis in the U.S.—but the model needed
                  to scale globally.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 02 - My Role */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white mb-8 shadow-lg">
                <span className="text-2xl font-black">02</span>
                <span className="text-base font-bold">My Role</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight" style={{ color: "#20221e" }}>
                UX Growth Designer & Content Strategist
              </h2>

              <p className="text-xl font-bold mb-12 text-gray-700">
                6-month project across Product, Growth, Localization, and Program Management teams
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Experiment design and multi-touchpoint content strategy",
                  "Persona development and user journey mapping with team",
                  "Conversion copywriting for email, push, in-app, and landing pages",
                  "Built 8 tutorial pages + main landing page (Unbounce)",
                  "Localization workflow and QC across seven languages",
                  "Video subtitle production (Adobe Premiere)",
                  "Operational improvements for international scale",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 backdrop-blur-xl bg-white/60 border-2 border-white/40 rounded-2xl hover:scale-105 transition-transform duration-200 shadow-lg"
                  >
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5 text-purple-600" />
                    <span className="text-sm md:text-base font-semibold text-gray-900 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 03 - The Approach */}
        <section className="py-20 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white mb-8 shadow-lg">
                <span className="text-2xl font-black">03</span>
                <span className="text-base font-bold text-white">The Approach</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black mb-12 leading-tight" style={{ color: "#20221e" }}>
                Multi-Channel Growth Strategy
              </h2>

              <div className="space-y-8">
                {/* Designing the Experiment */}
                <div className="backdrop-blur-xl bg-white/70 border-2 border-white/50 rounded-3xl p-10 shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 mt-2 flex-shrink-0"></div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-black mb-4" style={{ color: "#20221e" }}>
                        Designing the Experiment
                      </h3>
                      <p className="text-base md:text-lg leading-relaxed text-gray-800">
                        I helped run a rigorous A/B test on a controlled segment to isolate the impact of personalized
                        educational content on feature usage and trial-to-paid conversion.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Building Multi-Channel */}
                <div className="backdrop-blur-xl bg-white/70 border-2 border-white/50 rounded-3xl p-10 shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 mt-2 flex-shrink-0"></div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-black mb-4" style={{ color: "#20221e" }}>
                        Building the Multi-Channel Activation Journey
                      </h3>
                      <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-800">
                        I designed a 7-day content experience across:
                      </p>
                      <div className="space-y-3 mb-6">
                        {["Email campaigns", "In-app notifications", "Landing pages and tutorial flows"].map(
                          (item, index) => (
                            <div key={index} className="flex items-center gap-3 text-base font-semibold text-gray-900">
                              <span className="w-2 h-2 rounded-full bg-purple-600"></span>
                              {item}
                            </div>
                          ),
                        )}
                      </div>
                      <p className="text-base md:text-lg leading-relaxed mb-4 text-gray-800 font-semibold">
                        This included:
                      </p>
                      <div className="space-y-3">
                        {[
                          "Persona-specific content paths (Designer, Engineer, Marketer, Illustrator, etc.)",
                          "Conversion-oriented copy across all touchpoints",
                          "Step-by-step tutorial flows guiding users to meaningful first success",
                          "Progress indicators and motivational cues targeting psychological barriers",
                        ].map((item, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-purple-600" />
                            <span className="text-sm md:text-base leading-relaxed text-gray-900">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Rapid Prototyping */}
                <div className="backdrop-blur-xl bg-white/70 border-2 border-white/50 rounded-3xl p-10 shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-br from-pink-600 to-purple-600 mt-2 flex-shrink-0"></div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-black mb-4" style={{ color: "#20221e" }}>
                        Rapid Prototyping + Content Delivery
                      </h3>
                      <p className="text-base md:text-lg leading-relaxed text-gray-800">
                        Using Unbounce, I built the entire learning flow (8 tutorial pages + main landing page) for fast
                        iteration and rapid experimentation.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Global Scaling */}
                <div className="backdrop-blur-xl bg-white/70 border-2 border-white/50 rounded-3xl p-10 shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-br from-blue-600 to-pink-600 mt-2 flex-shrink-0"></div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-black mb-4" style={{ color: "#20221e" }}>
                        Global Scaling
                      </h3>
                      <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-800">
                        Once the domestic A/B test proved successful, I led the full international rollout across seven
                        markets, including Japanese, French, and Chinese.
                      </p>
                      <div className="space-y-3">
                        {[
                          "End-to-end localization management",
                          "Copy adaptation + cultural nuance QA",
                          "Technical deployment",
                          "Video subtitle production",
                          "Cross-functional coordination across Growth, Localization, Engineering, and PM",
                        ].map((item, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-600" />
                            <span className="text-sm md:text-base leading-relaxed text-gray-900">{item}</span>
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

        {/* Section 04 - The Results */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white mb-8 shadow-lg">
                <span className="text-2xl font-black">04</span>
                <span className="text-base font-bold">The Results</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black mb-12 leading-tight" style={{ color: "#20221e" }}>
                Measurable Impact at Scale
              </h2>

              <div className="space-y-4">
                {[
                  "Validated activation lift in the U.S. market with statistically significant improvements in feature usage and engagement",
                  "Created a repeatable, scalable activation model using educational content as a conversion lever",
                  "Successfully launched the flow across seven global markets with consistent performance",
                  "Improved alignment between Growth, PM, Localization, and Content teams",
                  "Reduced operational overhead by proposing CMS migration for future scalability",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-8 backdrop-blur-xl bg-white/70 border-2 border-white/40 rounded-2xl hover:bg-white/80 transition-all duration-200 shadow-lg"
                  >
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1 text-purple-600" />
                    <span className="text-base md:text-lg leading-relaxed font-semibold text-gray-900">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-16">
                <h3 className="text-2xl md:text-3xl font-black mb-8 text-center" style={{ color: "#20221e" }}>
                  Tutorial Pages Designed & Built
                </h3>

                <div className="space-y-8">
                  {/* Main tutorial grid page */}
                  <div className="backdrop-blur-xl bg-white/70 border-2 border-white/50 rounded-3xl p-6 shadow-xl">
                    <img
                      src="/images/image.png"
                      alt="Adobe Illustrator tutorial grid showing multiple video tutorial cards"
                      className="w-full rounded-2xl shadow-lg"
                    />
                    <p className="text-sm font-semibold text-gray-700 mt-4 text-center">
                      Main tutorial landing page with personalized learning paths
                    </p>
                  </div>

                  {/* Detailed tutorial page */}
                  <div className="backdrop-blur-xl bg-white/70 border-2 border-white/50 rounded-3xl p-6 shadow-xl">
                    <img
                      src="/images/image.png"
                      alt="Detailed tutorial page showing step-by-step instructions with video and timeline"
                      className="w-full rounded-2xl shadow-lg"
                    />
                    <p className="text-sm font-semibold text-gray-700 mt-4 text-center">
                      Step-by-step tutorial flow with progress tracking
                    </p>
                  </div>

                  {/* Template page */}
                  <div className="backdrop-blur-xl bg-white/70 border-2 border-white/50 rounded-3xl p-6 shadow-xl">
                    <img
                      src="/images/image.png"
                      alt="Clean tutorial template showing video player and section breakdown"
                      className="w-full rounded-2xl shadow-lg"
                    />
                    <p className="text-sm font-semibold text-gray-700 mt-4 text-center">
                      Reusable tutorial template for rapid deployment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 05 - Key Learnings */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 text-white mb-8 shadow-lg">
                <span className="text-2xl font-black">05</span>
                <span className="text-base font-bold">Key Learnings</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black mb-12 leading-tight" style={{ color: "#20221e" }}>
                Growth-Design Principles
              </h2>

              <p className="text-xl font-bold mb-10 text-gray-700">
                This project reinforced several core growth-design principles:
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Educational content reduces time-to-value",
                    description: "For complex products like Creative Cloud",
                    gradient: "from-purple-600 to-blue-600",
                  },
                  {
                    title: "Persona-specific guidance boosts engagement",
                    description: "Especially critical in global markets",
                    gradient: "from-blue-600 to-purple-600",
                  },
                  {
                    title: "Localization ≠ Translation",
                    description: "It's cultural adaptation",
                    gradient: "from-purple-600 to-pink-600",
                  },
                  {
                    title: "Multi-channel content must feel cohesive",
                    description: "Motivational, and behavior-driven",
                    gradient: "from-pink-600 to-purple-600",
                  },
                  {
                    title: "Designing for scale matters",
                    description: "Just as much as experiment speed",
                    gradient: "from-blue-600 to-pink-600",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="backdrop-blur-xl bg-white/60 border-2 border-white/40 rounded-3xl p-10 hover:scale-[1.02] transition-transform duration-200 shadow-xl"
                  >
                    <div
                      className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${item.gradient} text-white text-sm font-bold mb-4`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-xl md:text-2xl font-black mb-3" style={{ color: "#20221e" }}>
                      {item.title}
                    </h3>
                    <p className="text-base md:text-lg text-gray-700 font-medium">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 backdrop-blur-xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 border-2 border-purple-600/30 rounded-3xl p-12 shadow-xl">
                <p
                  className="text-lg md:text-xl leading-relaxed font-semibold italic text-center"
                  style={{ color: "#20221e" }}
                >
                  This project helped shape me into a product designer who blends growth thinking, behavior design, and
                  operational strategy — especially in fast-moving global contexts.
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
              <Globe className="w-20 h-20 mx-auto mb-8 text-white" />
              <h2 className="text-3xl md:text-5xl font-black mb-8 text-white leading-tight">
                This case study proves something critical:
              </h2>
              <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-balance text-white/90 leading-relaxed font-semibold">
                Global growth at scale requires both strategic design and operational excellence—not just one or the other.
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
                {/* Informatica Chatbot */}
                <Link
                  href="/informatica-chatbot-case-study"
                  className="group backdrop-blur-xl bg-white/60 border-2 border-white/40 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02] shadow-xl"
                >
                  <div className="relative aspect-video bg-gradient-to-br from-blue-100 to-purple-100">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl">💬</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="inline-flex items-center gap-2 text-sm font-bold text-purple-600 mb-3">
                      <span className="w-2 h-2 rounded-full bg-purple-600"></span>
                      Growth Strategy • Case Study
                    </div>
                    <h3 className="text-2xl font-black mb-2" style={{ color: "#20221e" }}>
                      Informatica Chatbot
                    </h3>
                    <p className="text-base text-gray-700 mb-4">
                      Growing sales pipeline by 340% through AI-driven conversational design
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
                  <div className="relative aspect-video bg-gradient-to-br from-purple-100 to-blue-100">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl">🎨</div>
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
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Target className="w-20 h-20 mx-auto mb-8 text-white" />
              <h2 className="text-3xl md:text-4xl font-black mb-6 text-white leading-tight">
                Looking for a Product Designer who understands growth?
              </h2>
              <p className="text-base md:text-lg mb-10 max-w-2xl mx-auto text-balance text-white/90 leading-relaxed">
                If you need someone who can turn activation challenges into measurable results at international scale,
                let's talk.
              </p>
              <a
                href="mailto:andi@andixd.com"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white text-base font-bold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
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
