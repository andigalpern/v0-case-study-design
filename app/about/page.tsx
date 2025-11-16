"use client"

import Link from "next/link"
import { ArrowUpRight, Briefcase, GraduationCap, Heart, Lightbulb, Users } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen relative">
      {/* Gradient orbs background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-40 w-96 h-96 gradient-bg-purple-blue rounded-full blur-3xl opacity-30" />
        <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] gradient-bg-purple-blue rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-20 left-1/4 w-96 h-96 gradient-bg-purple-blue rounded-full blur-3xl opacity-25" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-white/10 backdrop-blur-xl bg-background/30">
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
                  className="text-lg font-medium text-foreground cursor-pointer"
                >
                  About
                </Link>
                <a
                  href="mailto:andi@andixd.com"
                  className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg font-medium hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  Contact
                </a>
              </div>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 md:py-32">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-purple-600 font-semibold mb-6">Hi there!</p>
            
            <h1 className="text-5xl md:text-6xl font-black mb-8 text-brand-gray-dark leading-tight">
              I'm Andi.
            </h1>

            <div className="space-y-6 text-xl leading-relaxed text-brand-gray-dark">
              <p>
                I'm a Product Designer who lives at the intersection of Growth, AI, and human-centered design. For more than 14 years, I've helped companies of every size—from global teams at Adobe and Informatica to scrappy, fast-moving startups—turn complex problems into clear, effective digital experiences that actually drive results.
              </p>
              
              <p>
                My work blends design, growth strategy, and marketing to increase leads, boost revenue, and build products people genuinely want to use.
              </p>

              <p>
                I'm also a <strong>Women Techmakers Ambassador for Google</strong>, where I mentor people in tech and help them grow their careers. I've attended Google I/O every year since 2015, which keeps me plugged into the latest AI and product innovations. And as the founder of <strong>Cascade SF</strong>, I've spent years building communities, hosting events, and championing professional growth across the design and tech world.
              </p>
            </div>
          </div>
        </section>

        {/* Career Timeline */}
        <section className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <Briefcase className="w-8 h-8 text-purple-600" />
              <h2 className="text-4xl font-black text-brand-gray-dark">
                Work Experience
              </h2>
            </div>

            <div className="space-y-8">
              {[
                {
                  company: "Consultant",
                  role: "Senior Product Designer, Marketing Strategy, & Live Events",
                  period: "Apr 2008 – Present (alongside fulltime roles)",
                  location: "Remote",
                  achievements: [
                    "Clients include Adobe, Zapier, Cisco, Disney, Smule, DirectTV, and Patreon",
                    "Design and code websites and email campaigns to help companies of all sizes grow audiences",
                    "Tripled event attendance through strategy, fresh design, and engagement tactics",
                    "Delivered scalable design systems and conversion-focused campaigns",
                    "Built social media platforms alongside developer and product manager"
                  ]
                },
                {
                  company: "Site Impact",
                  role: "Web Designer & Developer, UI/UX",
                  period: "Dec 2024 – August 2025",
                  location: "South Florida (Hybrid)",
                  achievements: [
                    "Increased lead conversions +24% via AI-driven A/B testing & predictive analytics",
                    "Designed, developed, and optimized high-converting WordPress properties",
                    "Automated Mailchimp list growth; coordinated programmatic ad placements"
                  ]
                },
                {
                  company: "Informatica",
                  role: "Sr. Web Marketing Manager, Merchandising & Optimization",
                  period: "Aug 2021 – Aug 2022",
                  location: "Remote",
                  achievements: [
                    "Increased Cloud ARR +39% through UX experimentation & data-driven strategy",
                    "Led Conversational AI chatbot (Drift) implementation; predictive lead scoring boosted pipeline +340%",
                    "Raised product trial conversion +240% via content optimization & UX strategy"
                  ]
                },
                {
                  company: "Adobe",
                  role: "Growth Product Designer & Technical Writer",
                  period: "Apr 2019 – Jul 2021",
                  location: "San Francisco, CA",
                  achievements: [
                    "Improved Creative Cloud engagement through A/B testing & UX enhancements",
                    "Co-led websites, notifications, and A/B test for Illustrator/Photoshop campaigns in 7 countries",
                    "Designed and wrote engagement copy for tutorials & in-app content to deepen product adoption"
                  ]
                },
                {
                  company: "Zight (CloudApp)",
                  role: "Head of Content & Marketing UX",
                  period: "Aug 2017 – Feb 2019",
                  location: "San Francisco, CA",
                  achievements: [
                    "Directed user-acquisition content for multichannel campaigns and SEO growth",
                    "Developed landing pages & templates aligned to brand strategy",
                    "Organized webinars and in-person events for lead generation and brand awareness"
                  ]
                },
                {
                  company: "Earlier Roles",
                  role: "Product/Marketing Design",
                  period: "2007 – 2012",
                  location: "Various",
                  achievements: [
                    "Doximit y, 2011-2012, Product Designer",
                    "IAC, 2010-2011, Lead Marketing Designer",
                    "Zimmerman Advertising, 2007-2008, Graphic Designer"
                  ]
                }
              ].map((job, index) => (
                <div key={index} className="card-glass p-8 border-l-4 border-purple-600">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-brand-gray-dark mb-1">{job.company}</h3>
                      <p className="text-lg text-purple-600 font-semibold">{job.role}</p>
                      {job.location && (
                        <p className="text-sm text-muted-foreground mt-1">{job.location}</p>
                      )}
                    </div>
                    <div className="text-sm font-semibold text-muted-foreground whitespace-nowrap">{job.period}</div>
                  </div>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-base leading-relaxed text-brand-gray-dark">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2 flex-shrink-0"></span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cascade SF Section */}
        <section className="container mx-auto px-6 py-16 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <Users className="w-8 h-8 text-purple-600" />
              <h2 className="text-4xl font-black text-brand-gray-dark">
                Cascade SF & Design Career Network
              </h2>
            </div>

            <div className="card-glass p-10">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-brand-gray-dark mb-2">Founder & Event Producer</h3>
                  <p className="text-lg text-purple-600 font-semibold">Sep 2011 – Aug 2021</p>
                  <p className="text-sm text-muted-foreground mt-1">San Francisco & Remote</p>
                </div>
              </div>

              <div className="space-y-6 text-lg leading-relaxed text-brand-gray-dark">
                <p>
                  In 2011, I founded <strong>Cascade SF</strong>, a design and technology community that grew into a 10,000+ member network. What started as small meetups evolved into one of San Francisco's most vibrant design communities, hosting hundreds of events that consistently sold out.
                </p>

                <p>
                  Through Cascade SF and the Design Career Network, I created spaces where designers, developers, and product professionals could learn, connect, and grow together. I organized workshops, panel discussions, portfolio reviews, and networking events that brought together everyone from junior designers to senior leaders at top tech companies.
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-purple-600 mt-2 flex-shrink-0"></span>
                    <span>Built a 10,000+ member design community with events & mentorship</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-purple-600 mt-2 flex-shrink-0"></span>
                    <span>Drove attendance using targeted campaigns across Google, Facebook, Instagram & LinkedIn</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-purple-600 mt-2 flex-shrink-0"></span>
                    <span>Organized hundreds of design and technology events, drawing in hundreds of attendees per event, always selling out</span>
                  </li>
                </ul>

                <p className="text-purple-700 font-semibold italic">
                  Building Cascade SF taught me as much about community building and engagement strategy as any corporate role—skills I bring to every product and growth challenge I tackle today.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Approach */}
        <section className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <Lightbulb className="w-8 h-8 text-purple-600" />
              <h2 className="text-4xl font-black text-brand-gray-dark">
                How I Work
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Data-Driven Decision Making",
                  description: "I don't guess—I validate. Every design decision is backed by user research, analytics, or A/B test results. I speak the language of metrics because growth requires measurement."
                },
                {
                  title: "AI Product Fluency",
                  description: "Deep experience designing conversational interfaces, recommendation systems, and ML-powered features. I understand how to make AI feel natural and build trust in intelligent systems."
                },
                {
                  title: "Full-Funnel Thinking",
                  description: "From awareness to advocacy, I design the complete journey. Landing pages, onboarding flows, email campaigns, and in-product loops—all orchestrated for sustainable growth."
                },
                {
                  title: "Cross-Functional Leadership",
                  description: "I've led initiatives spanning design, engineering, marketing, and sales. I translate between stakeholders, align teams around shared goals, and maintain quality while moving fast."
                }
              ].map((skill, index) => (
                <div key={index} className="card-glass-hover p-6">
                  <h3 className="text-xl font-bold text-brand-gray-dark mb-3">{skill.title}</h3>
                  <p className="text-base leading-relaxed text-brand-gray-dark">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <Heart className="w-8 h-8 text-purple-600" />
              <h2 className="text-4xl font-black text-brand-gray-dark">
                What I Value
              </h2>
            </div>

            <div className="card-glass p-10 space-y-6 text-lg leading-relaxed text-brand-gray-dark">
              <p>
                <strong className="text-purple-700">Impact over output.</strong> I care more about moving the right metrics than shipping features. Good design should have measurable business impact.
              </p>
              <p>
                <strong className="text-purple-700">Velocity with intention.</strong> I move fast, but not recklessly. Rapid experimentation requires solid systems and clear hypotheses.
              </p>
              <p>
                <strong className="text-purple-700">Transparency and collaboration.</strong> The best work happens when design, product, and engineering work as partners—not siloed disciplines.
              </p>
              <p>
                <strong className="text-purple-700">Continuous learning.</strong> Technology evolves constantly. I stay curious, test new tools, and adapt my approach as the industry shifts.
              </p>
            </div>
          </div>
        </section>

        {/* Education & Recognition */}
        <section className="container mx-auto px-6 py-16 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <GraduationCap className="w-8 h-8 text-purple-600" />
              <h2 className="text-4xl font-black text-brand-gray-dark">
                Education
              </h2>
            </div>

            <div className="card-glass p-8">
              <div className="space-y-4">
                <div>
                  <p className="text-2xl font-bold text-brand-gray-dark">Florida Atlantic University</p>
                  <p className="text-lg text-purple-600 font-semibold">BFA in Graphic Design</p>
                  <p className="text-muted-foreground">2004-2007</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-6 py-16">
          <div className="backdrop-blur-xl gradient-bg-purple-blue border border-white/10 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-black mb-6 text-brand-gray-dark">
              Let's create something impactful together
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
              I'm always interested in discussing growth design challenges, AI product opportunities, or just talking shop about what makes great product experiences tick.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="mailto:andi@andixd.com"
                className="btn-primary inline-flex items-center gap-2"
              >
                Send me an email
                <ArrowUpRight className="w-5 h-5" />
              </a>
              <Link
                href="/portfolio"
                className="px-8 py-4 rounded-xl border-2 border-purple-600/30 text-purple-700 text-lg font-semibold hover:bg-purple-50 hover:border-purple-600/50 transition-all duration-300 cursor-pointer"
              >
                View my work
              </Link>
            </div>
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
    </div>
  )
}
