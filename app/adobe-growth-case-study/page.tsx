"use client"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, CheckCircle2, TrendingUp, Users, Globe, Target } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function AdobeGrowthCaseStudy() {
  const [selectedEmail, setSelectedEmail] = useState(0)
  const [selectedTout, setSelectedTout] = useState(0)

  const emailImages = [
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TWP%20Day%201-An96aNTFmltzgvoYFqDZkYLJUGsMR6.png",
      day: "Day 1",
      title: "Learn Illustrator from a pro"
    },
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TWP%20Day%202-6xyKzypFURiU4OsA0suWPcTPCnnBQn.jpg",
      day: "Day 2",
      title: "Make a strong impression"
    },
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TWP%20Day%203-GcVRU1rQzSWJcBUcZKsVJ2bQKw6hjr.jpg",
      day: "Day 3",
      title: "Design impactful presentations"
    },
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TWP%20Day%204-xTgY5L8a5vSydnSP9umekA6USmgdII.jpg",
      day: "Day 4",
      title: "Create custom illustrations"
    },
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TWP%20Day%205-hensV7mJHGdLl9MOu14V6cdXuiTCzT.jpg",
      day: "Day 5",
      title: "Create visual uniformity"
    },
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TWP%20Day%206-kJKGKn162hx3VM3qp95rsRZWipRcmM.jpg",
      day: "Day 6",
      title: "Make more realistic illustrations"
    },
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TWP%20Day%207%20copy-hfnVXXlAEhG5bZG4hXNowZBZiVCPNG.jpg",
      day: "Day 7",
      title: "Engage your audience"
    }
  ]

  const toutImages = [
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Day%201%20create%20a%20logo-dwaA6QTIsbk7vtoCqaCHz9jovJ4Z2r.png",
      day: "Day 1",
      title: "Create a logo"
    },
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Day%202%20Design%20brand%20collateral-mFHGVvIEUIpxxe7M5prCJ3rAUOfr8u.png",
      day: "Day 2",
      title: "Design brand assets"
    },
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Day%203%20%20build%20an%20infographic-1nLhcpKLFx6Yrisi8oEWSp6wCbSmzy.png",
      day: "Day 3",
      title: "Build an infographic"
    },
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Day%204%20character%20illustration-JDpjLL9aDfClePlAdJqIGDKOMsmwOF.png",
      day: "Day 4",
      title: "Draw a character illustration"
    },
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Day%205-BNAgaQLvBxLq0Sm6b1jZ8JPXw5urD1.png",
      day: "Day 5",
      title: "Create an icon set"
    },
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Day%206%20%20Build%20a%203D%20phone-XIOM2JLbYKDMNLUyRKJbnNEQkTVeEl.png",
      day: "Day 6",
      title: "Build a 3D mobile device"
    },
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Day%207%20%20Design%20a%20poster-y4XYKpHEaPoqEV9xPlotfZ3Dzd987g.png",
      day: "Day 7",
      title: "Design a poster"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedEmail((prev) => (prev + 1) % emailImages.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [emailImages.length])

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedTout((prev) => (prev + 1) % toutImages.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [toutImages.length])

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
              Scaling Activation Globally for Adobe Creative Cloud
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-balance max-w-3xl mx-auto text-gray-700">
              Multi-channel activation strategy across 8 markets, improving feature usage and conversion through
              personalized educational content
            </p>
          </div>
        </section>

        {/* Stats Hero - Big Numbers */}
        <section className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Globe, number: "8", label: "Global Markets", color: "from-purple-600 to-purple-400" },
              { icon: Users, number: "64", label: "Tutorial Pages Built", color: "from-blue-600 to-blue-400" },
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
                Product Designer for Growth, Content Strategist & Product Manager
              </h2>

              <p className="text-xl font-bold mb-12 text-gray-700">
                6-month project as part of Adobe's Product Growth team, in collaboration with the Localization team
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Experiment design and multi-touchpoint content strategy",
                  "Persona development and user journey mapping with team",
                  "Conversion copywriting for email, push, in-app, and landing pages",
                  "Designed and built 64 tutorial pages + main landing page (Unbounce)",
                  "Localization workflow and QC across eight languages",
                  "Video subtitle production (Adobe Premiere)",
                  "Product management: led end-to-end localization from verifying translations to building pages across languages and overseeing deployment",
                  "Leveraged design and front-end skills to rapidly prototype, iterate, and link to analytics for measurable impact",
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

              <div className="backdrop-blur-xl bg-white/80 border-2 border-white/50 rounded-3xl p-10 mb-12 shadow-xl">
                <h3 className="text-2xl md:text-3xl font-black mb-8 text-center" style={{ color: "#20221e" }}>
                  My Growth Design Process
                </h3>
                
                <div className="grid md:grid-cols-4 gap-6 mb-8">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center">
                      <span className="text-2xl font-black text-white">1</span>
                    </div>
                    <div className="px-4 py-2 rounded-lg bg-purple-100 border-2 border-purple-300 mb-3">
                      <p className="text-sm font-black text-purple-900">HYPOTHESIS</p>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Educational content at trial start increases feature adoption
                    </p>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 hidden md:block"></div>
                    <span className="text-2xl text-gray-400 md:hidden">↓</span>
                  </div>

                  <div className="text-center md:col-start-2">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center">
                      <span className="text-2xl font-black text-white">2</span>
                    </div>
                    <div className="px-4 py-2 rounded-lg bg-blue-100 border-2 border-blue-300 mb-3">
                      <p className="text-sm font-black text-blue-900">EXPERIMENT</p>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      A/B test with 10% of trial users across multi-channel touchpoints
                    </p>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-pink-400 hidden md:block"></div>
                    <span className="text-2xl text-gray-400 md:hidden">↓</span>
                  </div>

                  <div className="text-center md:col-start-3">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-pink-600 to-pink-400 flex items-center justify-center">
                      <span className="text-2xl font-black text-white">3</span>
                    </div>
                    <div className="px-4 py-2 rounded-lg bg-pink-100 border-2 border-pink-300 mb-3">
                      <p className="text-sm font-black text-pink-900">MEASUREMENT</p>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Achieved 22% lift in trial-to-paid conversion with statistical significance
                    </p>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-pink-400 to-green-400 hidden md:block"></div>
                    <span className="text-2xl text-gray-400 md:hidden">↓</span>
                  </div>

                  <div className="text-center md:col-start-4">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-green-600 to-green-400 flex items-center justify-center">
                      <span className="text-2xl font-black text-white">4</span>
                    </div>
                    <div className="px-4 py-2 rounded-lg bg-green-100 border-2 border-green-300 mb-3">
                      <p className="text-sm font-black text-green-900">ITERATION</p>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Scaled globally across 8 markets with localized content
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 border-l-4 border-purple-600 rounded-r-xl p-6">
                  <p className="text-base font-semibold text-gray-800 leading-relaxed">
                    This iterative growth methodology allowed me to move from a validated hypothesis in one market to a scalable, global activation system—balancing speed of experimentation with operational rigor.
                  </p>
                </div>
              </div>
              {/* </CHANGE> */}

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
                        Once the domestic A/B test proved successful, I led the full international rollout across eight
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
                  "Achieved a 22% lift in trial-to-paid conversion after testing in English on 10% of new trial users, validating the activation model with statistical significance",
                  "Created a repeatable, scalable activation model using educational content as a conversion lever",
                  "Successfully launched the flow across eight global markets with consistent performance",
                  "Improved alignment between Growth, PM, Localization, and Content teams",
                  "Reduced operational overhead by proposing CMS migration for future scalability",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-8 backdrop-blur-xl bg-white/70 border-2 border-white/40 rounded-3xl hover:bg-white/80 transition-all duration-200 shadow-xl"
                  >
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1 text-purple-600" />
                    <span className="text-base md:text-lg leading-relaxed font-semibold text-gray-900">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 05 - Email Designs Gallery */}
        <section className="py-20 bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-black mb-4" style={{ color: "#20221e" }}>
                Tutorial Pages Designed & Built
              </h3>
              <h4 className="text-xl md:text-2xl font-bold text-gray-700">
                E-mail Designs
              </h4>
            </div>

            <div className="max-w-6xl mx-auto flex justify-center">
              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-[600px]">
                  <div className="backdrop-blur-xl bg-white/70 border-2 border-white/50 rounded-3xl p-6 shadow-xl">
                    <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg">
                      <img
                        src={emailImages[selectedEmail].url || "/placeholder.svg"}
                        alt={`${emailImages[selectedEmail].day} - ${emailImages[selectedEmail].title}`}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-bold">
                        {emailImages[selectedEmail].day}
                      </span>
                      <p className="text-base font-semibold text-gray-800 mt-2">
                        {emailImages[selectedEmail].title}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-5">
                  {emailImages.map((email, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedEmail(index)}
                      className={`relative w-[133px] h-[97px] rounded-xl overflow-hidden transition-all duration-300 ${
                        selectedEmail === index
                          ? 'ring-4 ring-purple-600 scale-105 shadow-xl'
                          : 'ring-2 ring-white/40 hover:ring-purple-400 hover:scale-105 shadow-lg'
                      }`}
                    >
                      <img
                        src={email.url || "/placeholder.svg"}
                        alt={`${email.day} thumbnail`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                        <span className="text-white text-xs font-bold">{email.day}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 06 - Creative Cloud Desktop App Touts */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h4 className="text-xl md:text-2xl font-bold text-gray-700">
                Creative Cloud Desktop App Touts
              </h4>
              <p className="text-base text-gray-600 mt-3">
                In-app promotional content designed to drive tutorial engagement
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="backdrop-blur-xl bg-white/70 border-2 border-white/50 rounded-3xl p-8 shadow-xl">
                <div className="flex gap-6 items-center">
                  {/* Main display - larger */}
                  <div className="flex-1">
                    <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg">
                      <img
                        src={toutImages[selectedTout].url || "/placeholder.svg"}
                        alt={`${toutImages[selectedTout].day} - ${toutImages[selectedTout].title}`}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold">
                        {toutImages[selectedTout].day}
                      </span>
                      <p className="text-base font-semibold text-gray-800 mt-2">
                        {toutImages[selectedTout].title}
                      </p>
                    </div>
                  </div>

                  {/* Thumbnails on the right */}
                  <div className="flex flex-col gap-3">
                    {toutImages.map((tout, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedTout(index)}
                        className={`relative w-[120px] h-[70px] rounded-lg overflow-hidden transition-all duration-300 ${
                          selectedTout === index
                            ? 'ring-4 ring-blue-600 scale-105 shadow-xl'
                            : 'ring-2 ring-white/40 hover:ring-blue-400 hover:scale-105 shadow-md'
                        }`}
                      >
                        <img
                          src={tout.url || "/placeholder.svg"}
                          alt={`${tout.day} thumbnail`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-1.5">
                          <span className="text-white text-xs font-bold">{tout.day}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 07 - Copywriting */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-black mb-4" style={{ color: "#20221e" }}>
                  Copywriting
                </h3>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                  Conversion-focused copy crafted for emails, notifications, landing pages, and in-app promotions
                </p>
              </div>

              <div className="backdrop-blur-xl bg-white/70 border-2 border-white/40 rounded-3xl p-8 shadow-xl">
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-11-15%20at%2020.08.02-5bx7KuE2XUy26LAzNcAP2N3hebZo4d.png"
                    alt="Copywriting strategy showing notification titles and body copy for 7-day campaign"
                    className="w-full h-auto"
                  />
                </div>
                <div className="mt-6 text-center">
                  <p className="text-base font-semibold text-gray-800">
                    Multi-channel messaging strategy across toast notifications, panel notifications, and email campaigns
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 08 - UX Process & Wireframing */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-black mb-4" style={{ color: "#20221e" }}>
                  UX Process & Wireframing
                </h3>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  Whiteboarding sessions and wireframe iterations that shaped the tutorial experience architecture
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Whiteboard Sketches */}
                <div className="backdrop-blur-xl bg-white/70 border-2 border-white/40 rounded-2xl p-6 hover:scale-105 transition-transform duration-200 shadow-xl">
                  <div className="relative overflow-hidden rounded-xl bg-white shadow-lg mb-4">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-11-15%20at%2019.52.34-eIt9woIPonKtqpfpZfc2COgyKNMaEz.png"
                      alt="Whiteboard sketches showing wireframes for homepage and landing page layouts"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="text-center">
                    <span className="inline-block px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-bold mb-2">
                      Concept Exploration
                    </span>
                    <p className="text-sm font-semibold text-gray-800">
                      Whiteboard exercises mapping persona-specific content flows
                    </p>
                  </div>
                </div>

                {/* Homepage Wireframe */}
                <div className="backdrop-blur-xl bg-white/70 border-2 border-white/40 rounded-2xl p-6 hover:scale-105 transition-transform duration-200 shadow-xl">
                  <div className="relative overflow-hidden rounded-xl bg-white shadow-lg mb-4">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ai%20TwP%20-%20Home-P1vzyvEzCwG0GqniCPjZExE977U1KU.png"
                      alt="Homepage wireframe showing Learn Illustrator with persona icons"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="text-center">
                    <span className="inline-block px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold mb-2">
                      Homepage Design
                    </span>
                    <p className="text-sm font-semibold text-gray-800">
                      Persona-driven navigation with video-based learning paths
                    </p>
                  </div>
                </div>

                {/* Video Landing Page Wireframe */}
                <div className="backdrop-blur-xl bg-white/70 border-2 border-white/40 rounded-2xl p-6 hover:scale-105 transition-transform duration-200 shadow-xl">
                  <div className="relative overflow-hidden rounded-xl bg-white shadow-lg mb-4">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ai%20TwP%20-%20Video%20LP-Xl9EZXOa7Jb65Z8gSliKDf0ey9SAF7.png"
                      alt="Video landing page wireframe showing tutorial structure"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="text-center">
                    <span className="inline-block px-3 py-1.5 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 text-white text-xs font-bold mb-2">
                      Tutorial Page
                    </span>
                    <p className="text-sm font-semibold text-gray-800">
                      Step-by-step instructional design for feature adoption
                    </p>
                  </div>
                </div>
              </div>

              {/* Process Summary */}
              <div className="mt-8 backdrop-blur-xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 border-2 border-purple-600/30 rounded-3xl p-10 shadow-xl">
                <p className="text-lg md:text-xl leading-relaxed font-semibold text-center" style={{ color: "#20221e" }}>
                  These wireframes informed the entire information architecture—from persona-based navigation to the progressive tutorial experience that guided users toward their first meaningful success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 09 - Localization */}
        <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-black mb-4" style={{ color: "#20221e" }}>
                  Localization
                </h3>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  After achieving a 22% lift proving our hypothesis increased trial engagements, I was placed in charge of building and managing the entire localization process
                </p>
              </div>

              <div className="backdrop-blur-xl bg-white/70 border-2 border-white/40 rounded-3xl p-8 mb-8 shadow-xl">
                <h4 className="text-2xl font-black mb-6 text-center" style={{ color: "#20221e" }}>
                  Multilingual Persona Matrix
                </h4>
                <p className="text-base text-gray-700 mb-6 text-center">
                  Persona-specific content adapted across 8 languages including English, Spanish, French, German, Japanese, Korean, Russian, and more
                </p>
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-11-15%20at%2019.51.13-38rZxIGozI5oN1ih9Fe1D9EoTuVWQZ.png"
                    alt="Multilingual persona matrix showing Engineer, Illustrator, Designer, Marketer, Architect, and Scientist personas translated across 8 different languages"
                    className="w-full h-auto"
                  />
                </div>
              </div>

              <div className="backdrop-blur-xl bg-white/70 border-2 border-white/40 rounded-3xl p-10 mb-8 shadow-xl">
                <h4 className="text-2xl font-black mb-6" style={{ color: "#20221e" }}>
                  The Challenge
                </h4>
                <p className="text-base md:text-lg leading-relaxed text-gray-800 mb-6">
                  Once we validated our hypothesis in the U.S. market, the next step was to scale globally. This meant translating all copy across eight different languages and rebuilding the entire test experience for each market—a massive undertaking that required meticulous coordination across multiple teams and systems.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  {[
                    "Managed translation workflow across 8 languages",
                    "Coordinated with localization vendors and internal teams",
                    "Adapted copy for cultural nuance and regional context",
                    "Rebuilt landing pages, emails, and in-app flows per market",
                    "QA testing for linguistic accuracy and UI integrity",
                    "Maintained design consistency across all localized versions"
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-white/60 rounded-xl border border-white/50"
                    >
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-purple-600" />
                      <span className="text-sm font-semibold text-gray-900">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="backdrop-blur-xl bg-white/70 border-2 border-white/40 rounded-3xl p-8 mb-8 shadow-xl">
                <h4 className="text-xl font-black mb-6 text-center" style={{ color: "#20221e" }}>
                  Quality Assurance Process
                </h4>
                <p className="text-base text-gray-700 mb-6 text-center">
                  I developed a rigorous QA workflow with native language speakers at Adobe to verify translation accuracy and cultural appropriateness before deployment
                </p>
                
                <div className="flex gap-6 justify-center items-start">
                  <div className="flex-1 max-w-md">
                    <div className="relative overflow-hidden rounded-xl bg-white shadow-lg">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rTUJmkzkqOcVCruUhKKLlneZJ9rtc3.png"
                        alt="Translation verification instructions showing English and translated copy comparison with grammar and context checking guidelines"
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="mt-3 text-center">
                      <p className="text-sm font-semibold text-gray-800">
                        Translation verification instructions
                      </p>
                    </div>
                  </div>

                  <div className="flex-1 max-w-md">
                    <div className="relative overflow-hidden rounded-xl bg-white shadow-lg">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mxDEFaCInCWg6IXlc1dTGzjocNk6iB.png"
                        alt="Subtitle verification process showing Rev.com interface with Russian subtitles for tutorial videos"
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="mt-3 text-center">
                      <p className="text-sm font-semibold text-gray-800">
                        Video subtitle verification workflow
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 backdrop-blur-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-2 border-blue-600/30 rounded-3xl p-10 shadow-xl">
                <p className="text-lg md:text-xl leading-relaxed font-semibold text-center" style={{ color: "#20221e" }}>
                  This was a huge project that required operational excellence to maintain quality at scale. Due to the varying character widths across languages—for example, Korean characters are much wider than English—I had to manually reformat tutorials, adjusting spacing and alignment to maintain visual consistency across all touchpoints.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 10 - Key Learnings */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 text-white mb-8 shadow-lg">
                <span className="text-2xl font-black">10</span>
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

              <div className="mt-12 backdrop-blur-xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 border-2 border-purple-600/30 rounded-3xl p-10 shadow-xl">
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
                      <ArrowUpRight className="w-6 h-6" />
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
                Looking for a Product Designer who drives measurable growth?
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
