"use client"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, CheckCircle2, TrendingUp, Target, Zap, Eye } from 'lucide-react'

export default function InformaticaWebPromoCaseStudy() {
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

        {/* Hero */}
        <section className="container mx-auto px-6 py-16 md:py-24">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-bold mb-8 shadow-lg">
              <Zap className="w-4 h-4" />
              Growth Strategy • UX Strategy • Experimentation
            </div>
            <h1
              className="text-5xl md:text-7xl font-black mb-6 text-balance leading-tight"
              style={{ color: "#20221e" }}
            >
              How Small, Strategic Changes Increased Trial Traffic by{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">230%</span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-balance max-w-3xl mx-auto text-gray-700">
              By studying real user behavior and making a few high-leverage adjustments, we increased trial traffic 230% within days. Simple changes. Real growth.
            </p>
          </div>
        </section>

        {/* Stats Hero */}
        <section className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: TrendingUp, number: "230%", label: "Trial Traffic Increase", color: "from-purple-600 to-purple-400" },
              { icon: Eye, number: "Days", label: "To See Results", color: "from-blue-600 to-blue-400" },
              { icon: Target, number: "High-Intent", label: "Traffic Unlocked", color: "from-pink-600 to-pink-400" },
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

        {/* Project Snapshot */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black mb-12 text-center" style={{ color: "#20221e" }}>
                Project Snapshot
              </h2>

              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { label: "Role", value: "UX Marketing Strategist" },
                  { label: "Focus", value: "Growth, UX Strategy, Experimentation" },
                  { label: "Tools", value: "Adobe Analytics, Adobe Target, Excel" },
                  { label: "Team", value: "Me + Director of Web Dev + VP of Web Experience" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="backdrop-blur-xl bg-white/60 border-2 border-white/40 rounded-2xl p-6 text-center shadow-lg"
                  >
                    <div className="text-sm font-bold text-purple-600 mb-2">{item.label}</div>
                    <div className="text-base font-semibold text-gray-900">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
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
                High traffic. Low trial engagement.
              </h2>

              <div className="backdrop-blur-xl bg-white/20 border-2 border-white/30 rounded-3xl p-10 space-y-6">
                <p className="text-lg md:text-xl font-semibold leading-relaxed text-white">
                  The free trial wasn't being seen—or clicked—where it mattered most.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-white/90">
                  My goal: Move more qualified users into the trial with fast, data-backed changes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 02 - Research */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white mb-8 shadow-lg">
                <span className="text-2xl font-black">02</span>
                <span className="text-base font-bold">Research</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight" style={{ color: "#20221e" }}>
                Mapping Real User Behavior
              </h2>

              <div className="backdrop-blur-xl bg-white/60 border-2 border-white/40 rounded-3xl p-10 mb-8 shadow-xl">
                <p className="text-lg md:text-xl leading-relaxed text-gray-800 mb-6">
                  I opened Adobe Analytics and mapped real behavior across the site. A few key patterns emerged:
                </p>

                <div className="space-y-4">
                  {[
                    "Pages with high visibility weren't driving engagement",
                    "Promos with images consistently outperformed text-only promos",
                    "Two components dominated clicks: the sticky orange header and the first nav dropdown",
                    "Neither highlighted our free trial",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl"
                    >
                      <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5 text-purple-600" />
                      <span className="text-base md:text-lg font-semibold text-gray-900">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="backdrop-blur-xl bg-gradient-to-br from-purple-600/10 to-blue-600/10 border-2 border-purple-600/20 rounded-3xl p-10 shadow-xl">
                <p className="text-xl font-bold text-center" style={{ color: "#20221e" }}>
                  Each insight was small on its own. Together, they pointed to a clear opportunity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 03 - Insight → Hypothesis */}
        <section className="py-20 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white mb-8 shadow-lg">
                <span className="text-2xl font-black">03</span>
                <span className="text-base font-bold">Insight → Hypothesis</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black mb-12 leading-tight" style={{ color: "#20221e" }}>
                From Data to Action
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="backdrop-blur-xl bg-white/70 border-2 border-white/50 rounded-3xl p-10 shadow-xl">
                  <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-bold mb-4">
                    Insight
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-purple-600 mt-2 flex-shrink-0"></span>
                      <span className="text-base md:text-lg text-gray-900 font-medium">Image-based promos grab more attention.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-purple-600 mt-2 flex-shrink-0"></span>
                      <span className="text-base md:text-lg text-gray-900 font-medium">Users interact most with two specific global components.</span>
                    </li>
                  </ul>
                </div>

                <div className="backdrop-blur-xl bg-white/70 border-2 border-white/50 rounded-3xl p-10 shadow-xl">
                  <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold mb-4">
                    Hypothesis
                  </div>
                  <p className="text-base md:text-lg leading-relaxed text-gray-900 font-semibold">
                    If we feature a strong, visual free-trial promo inside the two highest-engagement components, trial traffic will increase significantly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 04 - Experiment */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 text-white mb-8 shadow-lg">
                <span className="text-2xl font-black">04</span>
                <span className="text-base font-bold">Experiment</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight" style={{ color: "#20221e" }}>
                Clean A/B Test Design
              </h2>

              <div className="backdrop-blur-xl bg-white/60 border-2 border-white/40 rounded-3xl p-10 mb-8 shadow-xl">
                <p className="text-lg md:text-xl leading-relaxed text-gray-800 mb-6">
                  Using Adobe Target, I launched a clean A/B test:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-gray-100 rounded-2xl">
                    <div className="inline-block px-3 py-1 rounded-full bg-gray-600 text-white text-sm font-bold mb-3">
                      Variant A
                    </div>
                    <p className="text-base text-gray-900 font-medium">Existing promos</p>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl">
                    <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-bold mb-3">
                      Variant B
                    </div>
                    <p className="text-base text-gray-900 font-medium">
                      New free-trial promo placed in the top two most-clicked components, using visuals + clear messaging
                    </p>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-xl bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-3xl p-8 shadow-lg">
                <p className="text-base md:text-lg text-center text-gray-900 font-semibold">
                  I partnered with Web Dev to tag everything correctly and monitored performance daily.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 05 - Results */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white mb-8 shadow-lg">
                <span className="text-2xl font-black">05</span>
                <span className="text-base font-bold">Results</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight" style={{ color: "#20221e" }}>
                We didn't need two weeks
              </h2>

              <div className="backdrop-blur-xl bg-white/70 border-2 border-white/50 rounded-3xl p-12 mb-12 shadow-xl text-center">
                <p className="text-2xl md:text-3xl font-black mb-6" style={{ color: "#20221e" }}>
                  Trial-page traffic increased by <span className="text-purple-600">230%</span> in just a few days.
                </p>
                <p className="text-lg md:text-xl text-gray-700 font-medium">
                  A small, precise shift—based on actual behavior—turned into major growth.
                </p>
              </div>

              <div className="backdrop-blur-xl bg-gradient-to-br from-purple-600/10 to-blue-600/10 border-2 border-purple-600/20 rounded-3xl p-10 shadow-xl">
                <p className="text-xl font-bold text-center" style={{ color: "#20221e" }}>
                  We planned a two-week test. We didn't need it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 06 - Why It Worked */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white mb-8 shadow-lg">
                <span className="text-2xl font-black">06</span>
                <span className="text-base font-bold">Why It Worked</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black mb-12 leading-tight" style={{ color: "#20221e" }}>
                Smarter Placement, Rooted in User Patterns
              </h2>

              <div className="backdrop-blur-xl bg-white/60 border-2 border-white/40 rounded-3xl p-10 mb-8 shadow-xl">
                <p className="text-xl leading-relaxed text-gray-800 mb-6 font-medium">
                  This wasn't a redesign. It wasn't a new feature.
                </p>
                <p className="text-2xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  It was smarter placement, rooted in user patterns.
                </p>
              </div>

              <div className="backdrop-blur-xl bg-gradient-to-br from-purple-600/10 to-blue-600/10 border-2 border-purple-600/20 rounded-3xl p-10 shadow-xl">
                <p className="text-xl leading-relaxed font-semibold text-center" style={{ color: "#20221e" }}>
                  Growth happens when the right message meets the right moment in the right place.
                </p>
                <p className="text-lg text-center text-gray-700 mt-6">
                  By aligning promos with how real people navigate the site, we unlocked high-intent traffic instantly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 07 - My Role */}
        <section className="py-20 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white mb-8 shadow-lg">
                <span className="text-2xl font-black">07</span>
                <span className="text-base font-bold">My Role</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight" style={{ color: "#20221e" }}>
                End-to-End Growth Loop
              </h2>

              <div className="backdrop-blur-xl bg-white/70 border-2 border-white/50 rounded-3xl p-10 mb-8 shadow-xl">
                <p className="text-xl font-bold mb-6" style={{ color: "#20221e" }}>
                  I owned every part of the growth loop:
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Research",
                    "Insight generation",
                    "Hypothesis creation",
                    "A/B test design",
                    "Data analysis",
                    "Cross-functional execution",
                    "Iteration",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-white/70 rounded-xl"
                    >
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-purple-600" />
                      <span className="text-base font-semibold text-gray-900">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="backdrop-blur-xl bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-10 shadow-xl">
                <p className="text-xl leading-relaxed text-white font-semibold text-center">
                  Throughout my role at Informatica, I continued using this experimentation model to optimize promos, scheduling, messaging, and trial flow.
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
              <Zap className="w-20 h-20 mx-auto mb-8 text-white" />
              <h2 className="text-3xl md:text-5xl font-black mb-8 text-white leading-tight">
                This case study proves something simple but powerful:
              </h2>
              <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-balance text-white/90 leading-relaxed font-semibold">
                Small, strategic changes—when guided by data—can create massive impact.
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
                  href="/informatica-chatbot-case-study"
                  className="group backdrop-blur-xl bg-white/60 border-2 border-white/40 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02] shadow-xl cursor-pointer"
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
                      Growing sales pipeline from $2.2M to $9.7M through AI-driven product design
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
                Looking for a strategist who turns data into growth?
              </h2>
              <p className="text-base md:text-lg mb-10 max-w-2xl mx-auto text-balance text-white/90 leading-relaxed">
                If you need someone who can identify high-leverage opportunities and execute fast, let's talk.
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
