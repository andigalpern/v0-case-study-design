"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Sparkles, Target, LineChart, Rocket, Repeat, TestTube, Zap } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Header } from '@/components/header'

export default function ProcessPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const phases = [
    {
      number: "01",
      title: "Discover & Define",
      subtitle: "Strategic Foundation",
      icon: <Target className="w-8 h-8" />,
      description: "Every product initiative starts with understanding the business problem, not jumping to solutions. I dive deep into your metrics, user research, competitive landscape, and technical constraints.",
      deliverables: [
        "Growth opportunity analysis",
        "User journey mapping",
        "Metric identification & baseline",
        "Technical feasibility assessment"
      ],
      gradient: "from-purple-600 to-blue-600"
    },
    {
      number: "02",
      title: "Ideate & Prototype",
      subtitle: "Rapid Exploration",
      icon: <Sparkles className="w-8 h-8" />,
      description: "With AI-powered tools, I can rapidly explore multiple design directions and prototypes. This isn't about pixel-perfect mockups—it's about validating concepts and uncovering the right solution fast.",
      deliverables: [
        "AI-generated design explorations",
        "Interactive prototypes",
        "User flow diagrams",
        "Technical architecture planning"
      ],
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      number: "03",
      title: "Test & Learn",
      subtitle: "Data-Driven Validation",
      icon: <TestTube className="w-8 h-8" />,
      description: "I design with A/B testing in mind from day one. Every hypothesis is validated with real user data. No sacred cows, no gut feelings—just measurable impact on your north star metrics.",
      deliverables: [
        "A/B test design & implementation",
        "Analytics instrumentation plan",
        "Success metrics dashboard",
        "Learning documentation"
      ],
      gradient: "from-cyan-500 to-teal-500"
    },
    {
      number: "04",
      title: "Scale & Optimize",
      subtitle: "Continuous Growth",
      icon: <Rocket className="w-8 h-8" />,
      description: "Winning experiences get scaled. I work with engineering and marketing to roll out successful variants, then continue iterating to squeeze more value from every touchpoint in your funnel.",
      deliverables: [
        "Rollout strategy & timeline",
        "Cross-platform implementation",
        "Performance monitoring",
        "Iteration roadmap"
      ],
      gradient: "from-teal-500 to-green-500"
    }
  ]

  const principles = [
    {
      title: "AI Accelerates, Humans Direct",
      description: "I use AI tools to handle the repetitive work—generating variations, coding components, analyzing data—so I can focus on strategy, creativity, and high-level thinking.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Metrics Over Opinions",
      description: "Beautiful design that doesn't drive results is just art. Every decision is tied back to key business metrics: conversion rate, activation, retention, revenue.",
      icon: <LineChart className="w-6 h-6" />
    },
    {
      title: "Speed is a Feature",
      description: "The faster we can test ideas, the faster we learn what works. AI-powered development lets us move from concept to production in days, not weeks.",
      icon: <Rocket className="w-6 h-6" />
    },
    {
      title: "Iteration is Everything",
      description: "Version 1.0 is never perfect. The magic happens through continuous testing, learning, and refinement based on real user behavior.",
      icon: <Repeat className="w-6 h-6" />
    }
  ]

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-20 -left-40 w-96 h-96 gradient-bg-purple-blue rounded-full blur-3xl opacity-20"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div 
          className="absolute top-1/2 -right-40 w-[500px] h-[500px] gradient-bg-purple-blue rounded-full blur-3xl opacity-15"
          style={{ transform: `translateY(${scrollY * -0.08}px)` }}
        />
        <div 
          className="absolute bottom-20 left-1/3 w-96 h-96 gradient-bg-purple-blue rounded-full blur-3xl opacity-20"
          style={{ transform: `translateY(${scrollY * 0.12}px)` }}
        />
      </div>

      {/* Floating geometric shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-10">
        <div 
          className="absolute top-32 left-10 w-24 h-24 border-2 border-purple-500 rounded-2xl rotate-12"
          style={{ transform: `translateY(${scrollY * 0.15}px) rotate(12deg)` }}
        />
        <div 
          className="absolute top-64 right-20 w-32 h-32 border-2 border-blue-500 rounded-full"
          style={{ transform: `translateY(${scrollY * -0.12}px)` }}
        />
        <div 
          className="absolute top-[600px] left-1/4 w-28 h-28 border border-purple-500"
          style={{ transform: `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.05}deg)` }}
        />
        <div 
          className="absolute top-[1000px] right-1/3 w-36 h-36 border-2 border-blue-500 rounded-3xl rotate-45"
          style={{ transform: `translateY(${scrollY * -0.14}px) rotate(45deg)` }}
        />
      </div>

      <div className="relative z-10">
        <Header />
        {/* </CHANGE> */}

        {/* Hero Section */}
        <section className="container mx-auto px-6 pt-32 pb-16">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white mb-8 shadow-lg">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">AI + Growth Process</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-8 text-balance">
              How I Design for{" "}
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
                Measurable Growth
              </span>
            </h1>

            <p className="text-2xl leading-relaxed text-brand-gray-dark max-w-3xl mx-auto mb-12">
              My process combines AI-powered speed with strategic growth thinking. 
              The result? Products that ship faster, test smarter, and drive real business results.
            </p>
          </div>
        </section>

        {/* Process Phases */}
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-6xl mx-auto space-y-32">
            {phases.map((phase, index) => (
              <div 
                key={index}
                className="group relative"
              >
                {/* Phase Number Background */}
                <div className="absolute -left-4 -top-8 text-[200px] font-black opacity-[0.03] pointer-events-none select-none">
                  {phase.number}
                </div>

                <div className="relative grid md:grid-cols-2 gap-12 items-center">
                  {/* Icon & Title Side */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${phase.gradient} text-white shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                      {phase.icon}
                    </div>

                    <div>
                      <div className="text-sm font-bold text-purple-600 mb-2 uppercase tracking-wider">
                        {phase.subtitle}
                      </div>
                      <h2 className="text-4xl md:text-5xl font-black mb-4 text-brand-gray-dark">
                        {phase.title}
                      </h2>
                      <p className="text-xl leading-relaxed text-brand-gray-dark">
                        {phase.description}
                      </p>
                    </div>
                  </div>

                  {/* Deliverables Side */}
                  <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="card-glass-hover p-8 space-y-4">
                      <h3 className="text-lg font-bold text-purple-700 mb-4 uppercase tracking-wide">
                        Key Deliverables
                      </h3>
                      <ul className="space-y-3">
                        {phase.deliverables.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${phase.gradient} flex items-center justify-center mt-0.5`}>
                              <div className="w-2 h-2 rounded-full bg-white" />
                            </div>
                            <span className="text-brand-gray-dark font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Principles Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-brand-gray-dark">
                Core Principles
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The philosophy that guides every decision I make
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {principles.map((principle, index) => (
                <div 
                  key={index}
                  className="card-glass-hover p-8 space-y-4 group hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    {principle.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-brand-gray-dark group-hover:text-purple-700 transition-colors">
                    {principle.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-brand-gray-dark">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-[2.5rem] gradient-section-purple p-12 md:p-16 text-center">
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Ready to Build Something Great?
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Let's combine strategic thinking, AI-powered development, and growth expertise 
                  to create products that drive measurable results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/#contact"
                    className="px-8 py-4 rounded-xl bg-white text-purple-700 text-lg font-semibold hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-xl"
                  >
                    Start a Conversation
                  </Link>
                  <Link
                    href="/portfolio"
                    className="px-8 py-4 rounded-xl border-2 border-white text-white text-lg font-semibold hover:bg-white/10 transition-all duration-300"
                  >
                    View My Work
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="header border-t border-white/10 backdrop-blur-xl bg-background/30">
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
