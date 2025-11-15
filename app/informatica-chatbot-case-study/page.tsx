"use client"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, CheckCircle2, TrendingUp, MessageSquare, Target, Zap, Brain } from 'lucide-react'

export default function InformaticaChatbotCaseStudy() {
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
              <MessageSquare className="w-4 h-4" />
              Product Design • Growth Strategy • AI
            </div>
            <h1
              className="text-5xl md:text-7xl font-black mb-6 text-balance leading-tight"
              style={{ color: "#20221e" }}
            >
              Scaling Pipeline From <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">$2.2M → $9.7M</span>
            </h1>
            <p className="text-xl md:text-2xl font-bold mb-6 text-balance text-gray-700">
              With AI-Driven Product Design
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-balance max-w-3xl mx-auto text-gray-700">
              Transforming Informatica's Drift AI chatbot from an overlooked widget into a high-performing revenue driver for a billion-dollar enterprise
            </p>
          </div>
        </section>

        {/* Stats Hero - Big Numbers */}
        <section className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: TrendingUp, number: "340%", label: "Pipeline Growth", color: "from-purple-600 to-purple-400" },
              { icon: MessageSquare, number: "+30%", label: "Booked Meetings", color: "from-blue-600 to-blue-400" },
              { icon: Zap, number: "$9.7M", label: "Total Pipeline Value", color: "from-pink-600 to-pink-400" },
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

        {/* Overview Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white mb-8 shadow-lg">
                <span className="text-base font-bold">Overview</span>
              </div>

              <div className="backdrop-blur-xl bg-white/60 border-2 border-white/40 rounded-3xl p-10 shadow-xl">
                <p className="text-lg md:text-xl leading-relaxed text-gray-800 mb-6">
                  At Informatica, I managed and optimized the Drift AI Conversation Bot across the website. This chatbot served as the direct bridge between high-intent visitors and our Sales team—meaning its performance directly impacted trials, meetings, and revenue.
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-gray-800">
                  My role combined <span className="font-bold">product design, AI conversation strategy, UX research, and growth experimentation</span> to help transform the chatbot from an underutilized tool into a <span className="font-bold text-purple-600">revenue-driving asset</span> for the enterprise.
                </p>
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
                The Original Chatbot Wasn't Doing Its Job
              </h2>

              <div className="backdrop-blur-xl bg-white/20 border-2 border-white/30 rounded-3xl p-10 space-y-6">
                <p className="text-lg md:text-xl font-semibold leading-relaxed text-white mb-6">
                  The chatbot experience was creating friction where clarity was needed:
                </p>
                <div className="space-y-4">
                  {[
                    "Buried in the UI",
                    "Using generic, outdated messaging",
                    "Confusing for visitors with real intent",
                    "Creating friction where clarity was needed",
                    "Losing high-value opportunities before they ever reached Sales",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-white mt-2.5 flex-shrink-0"></span>
                      <span className="text-lg text-white">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg md:text-xl leading-relaxed text-white/90 mt-8">
                  Visitors coming to the Pricing page were serious buyers, but the bot wasn't guiding them anywhere useful. That meant the business was missing out on <span className="font-bold text-white">qualified pipeline—right at the moment intent was highest</span>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 02 - My Responsibility */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white mb-8 shadow-lg">
                <span className="text-2xl font-black">02</span>
                <span className="text-base font-bold">My Responsibility</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight" style={{ color: "#20221e" }}>
                Managing the Drift AI Chatbot Ecosystem
              </h2>

              <div className="backdrop-blur-xl bg-gradient-to-br from-purple-600/10 to-blue-600/10 border-2 border-purple-600/20 rounded-3xl p-10 mb-10 shadow-xl">
                <p className="text-xl font-bold text-center" style={{ color: "#20221e" }}>
                  I led the end-to-end chatbot strategy and execution,<br />
                  <span className="text-2xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">handling all aspects of the experience.</span>
                </p>
              </div>

              <p className="text-lg mb-8 text-gray-700 font-semibold">This included:</p>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Designing and rewriting conversation flows",
                  "Training the AI on better microcopy and user intent",
                  "Analyzing behavior using Drift logs + Adobe Analytics",
                  "Creating new high-intent entry points",
                  "Optimizing trial → demo funnels",
                  "Building experiments to lift conversion rates",
                  "Reporting performance directly to leadership",
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

        {/* Section 03 - My Approach */}
        <section className="py-20 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white mb-8 shadow-lg">
                <span className="text-2xl font-black">03</span>
                <span className="text-base font-bold text-white">My Approach</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black mb-12 leading-tight" style={{ color: "#20221e" }}>
                Five-Part Strategy
              </h2>

              <div className="space-y-8">
                {/* 1. Decode User Intent */}
                <div className="backdrop-blur-xl bg-white/70 border-2 border-white/50 rounded-3xl p-10 shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-black text-xl">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-black mb-4" style={{ color: "#20221e" }}>
                        Decode User Intent + Friction Points
                      </h3>
                      <p className="text-base md:text-lg leading-relaxed text-gray-800">
                        I started by auditing transcripts, analytics, and Pricing-page patterns to understand what visitors needed and where they were getting stuck. Real users were asking for demos, pricing help, and product questions the bot wasn't prepared to answer.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2. Rebuild Conversation */}
                <div className="backdrop-blur-xl bg-white/70 border-2 border-white/50 rounded-3xl p-10 shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-black text-xl">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-black mb-4" style={{ color: "#20221e" }}>
                        Rebuild the Conversation Architecture
                      </h3>
                      <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-800">
                        I redesigned the chatbot into a system that met users where they were. New paths included:
                      </p>
                      <div className="space-y-3">
                        {[
                          "Pricing questions",
                          "Quick product demo",
                          "Post-trial follow-up",
                          "Enterprise evaluations",
                          "Direct 'Talk to Sales' escalations",
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-purple-600"></span>
                            <span className="text-base font-semibold text-gray-900">{item}</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-base md:text-lg leading-relaxed text-gray-800 font-bold mt-6">
                        The goal: shorter paths, clearer choices, zero wasted time.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3. Use AI for Microcopy */}
                <div className="backdrop-blur-xl bg-white/70 border-2 border-white/50 rounded-3xl p-10 shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-600 to-purple-600 flex items-center justify-center text-white font-black text-xl">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-black mb-4" style={{ color: "#20221e" }}>
                        Use AI to Strengthen Microcopy
                      </h3>
                      <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-800">
                        I used AI-assisted language modeling to generate and test microcopy that boosted clarity and reduced cognitive load. Small shifts made big differences:
                      </p>
                      <div className="backdrop-blur-xl bg-gradient-to-r from-purple-600/10 to-blue-600/10 border-2 border-purple-600/20 rounded-2xl p-6">
                        <p className="text-lg font-bold text-center text-purple-600">
                          "Would you like a quick, personalized demo?"
                        </p>
                        <p className="text-sm text-center text-gray-700 mt-2 font-semibold">
                          outperformed every variant
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4. Constant Experimentation */}
                <div className="backdrop-blur-xl bg-white/70 border-2 border-white/50 rounded-3xl p-10 shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-pink-600 flex items-center justify-center text-white font-black text-xl">
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-black mb-4" style={{ color: "#20221e" }}>
                        Constant Experimentation
                      </h3>
                      <p className="text-base md:text-lg leading-relaxed text-gray-800">
                        I treated the chatbot like a living product. A/B tests, copy experiments, fallback logic, timing tests—every improvement was informed by data and real user behavior.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 5. Tie to Revenue */}
                <div className="backdrop-blur-xl bg-white/70 border-2 border-white/50 rounded-3xl p-10 shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-black text-xl">
                      5
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-black mb-4" style={{ color: "#20221e" }}>
                        Tie Everything to Revenue
                      </h3>
                      <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-800">
                        My KPIs were direct business drivers:
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          "Qualified pipeline value",
                          "Meetings booked",
                          "Trial → demo progression",
                          "Conversation completion rate",
                        ].map((item, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-purple-600" />
                            <span className="text-sm md:text-base font-semibold text-gray-900">{item}</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-base md:text-lg leading-relaxed text-gray-800 font-bold mt-6">
                        If a change didn't improve a growth outcome, it didn't ship.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 04 - The Impact */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white mb-8 shadow-lg">
                <span className="text-2xl font-black">04</span>
                <span className="text-base font-bold">The Impact</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black mb-12 leading-tight" style={{ color: "#20221e" }}>
                Transformational Results
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="backdrop-blur-xl bg-white/70 border-2 border-white/50 rounded-3xl p-8 text-center shadow-xl">
                  <div className="text-5xl font-black mb-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    $2.2M → $9.7M
                  </div>
                  <div className="text-lg font-bold text-gray-700 mb-2">Pipeline Growth</div>
                  <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-bold">
                    340% Increase
                  </div>
                </div>

                <div className="backdrop-blur-xl bg-white/70 border-2 border-white/50 rounded-3xl p-8 text-center shadow-xl">
                  <div className="text-5xl font-black mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    +30%
                  </div>
                  <div className="text-lg font-bold text-gray-700">Booked Meetings</div>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: "Trial Engagement",
                    description: "Improved clarity increased follow-through and demo requests",
                  },
                  {
                    title: "Sales Team Efficiency",
                    description: "More qualified conversations, fewer dead-end interactions",
                  },
                  {
                    title: "Leadership Endorsement",
                    description: "Results were so strong, leadership expanded these optimized flows to additional pages across the site",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="backdrop-blur-xl bg-white/70 border-2 border-white/40 rounded-2xl p-8 shadow-lg"
                  >
                    <h3 className="text-xl font-black mb-2" style={{ color: "#20221e" }}>
                      {item.title}
                    </h3>
                    <p className="text-base md:text-lg text-gray-800">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 05 - Why This Matters */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 text-white mb-8 shadow-lg">
                <span className="text-2xl font-black">05</span>
                <span className="text-base font-bold">Why This Matters</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black mb-12 leading-tight" style={{ color: "#20221e" }}>
                My Approach to Growth-Driven Product Design
              </h2>

              <div className="backdrop-blur-xl bg-gradient-to-br from-purple-600/10 to-blue-600/10 border-2 border-purple-600/20 rounded-3xl p-10 mb-12 shadow-xl">
                <p className="text-xl leading-relaxed font-semibold" style={{ color: "#20221e" }}>
                  This project demonstrates my approach to product design:
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Taking full ownership of features and outcomes",
                  "Designing for measurable business results, not just aesthetics",
                  "Combining AI, UX research, and experimentation with business strategy",
                  "Focusing on metrics that drive revenue",
                  "Creating intuitive, human-centered experiences that reduce friction",
                  "Building scalable systems that improve over time",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 backdrop-blur-xl bg-white/60 border-2 border-white/40 rounded-2xl hover:scale-[1.02] transition-transform duration-200 shadow-lg"
                  >
                    <Brain className="w-6 h-6 flex-shrink-0 mt-0.5 text-purple-600" />
                    <span className="text-base md:text-lg font-bold text-gray-900">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 backdrop-blur-xl bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 shadow-xl">
                <p className="text-xl md:text-2xl leading-relaxed font-black text-center text-white">
                  This project helped redesign a key revenue touchpoint<br />
                  and contributed to the growth of a global business.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 06 - What's Next */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/20 backdrop-blur-xl border-2 border-white/30 mb-8">
                <span className="text-2xl font-black text-white">06</span>
                <span className="text-base font-bold text-white">What I'd Do Next</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black mb-8 text-white leading-tight">
                Future Vision with LLMs
              </h2>

              <p className="text-lg md:text-xl leading-relaxed mb-8 text-white/90">
                If I were rebuilding this today, I'd layer in:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-10">
                {[
                  "LLM-powered real-time intent detection",
                  "Dynamic, adaptive conversation flows",
                  "Auto-generated SDR summaries",
                  "Personalized journeys per user segment",
                  "Predictive lead qualification",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-6 backdrop-blur-xl bg-white/10 border-2 border-white/20 rounded-2xl"
                  >
                    <Zap className="w-6 h-6 flex-shrink-0 mt-0.5 text-purple-400" />
                    <span className="text-base font-semibold text-white">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-xl font-bold text-center text-white">
                AI opens a new frontier for high-intent UX—and these are the experiences I love creating.
              </p>
            </div>
          </div>
        </section>

        {/* Closing Statement */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Brain className="w-20 h-20 mx-auto mb-8 text-white" />
              <h2 className="text-3xl md:text-5xl font-black mb-8 text-white leading-tight">
                This case study proves something powerful:
              </h2>
              <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-balance text-white/90 leading-relaxed font-semibold">
                AI product design isn't just about the technology—it's about understanding intent, removing friction, and designing for measurable business outcomes.
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
                {/* Adobe Growth */}
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

        {/* CTA */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Target className="w-20 h-20 mx-auto mb-8 text-white" />
              <h2 className="text-3xl md:text-4xl font-black mb-6 text-white leading-tight">
                Need someone who can transform AI touchpoints into revenue drivers?
              </h2>
              <p className="text-base md:text-lg mb-10 max-w-2xl mx-auto text-balance text-white/90 leading-relaxed">
                If you're looking for a product designer who understands how to blend AI, UX, and growth strategy to drive measurable business outcomes, let's talk.
              </p>
              <a
                href="mailto:andi@andixd.com"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-white text-purple-600 text-base font-bold hover:shadow-2xl hover:shadow-white/50 transition-all duration-300 hover:scale-105"
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
