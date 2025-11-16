"use client"

import { useState } from "react"
import { Mail, Send } from 'lucide-react'
import { sendContactEmail } from "@/app/actions/send-email"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")

    const result = await sendContactEmail(formData)

    if (result.success) {
      setFormData({ name: "", email: "", message: "" })
      setStatus("success")
      setTimeout(() => setStatus("idle"), 5000)
    } else {
      setStatus("error")
      setTimeout(() => setStatus("idle"), 5000)
    }
  }

  return (
    <section id="contact" className="container mx-auto px-6 py-24 scroll-mt-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm mb-6">
            <Mail className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold text-purple-700">Get in Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-brand-gray-dark">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground mb-2">
            Available for full-time and consulting work
          </p>
          <p className="text-lg text-muted-foreground">
            <a href="mailto:andi@andixd.com" className="text-purple-600 hover:text-purple-700 font-medium">
              andi@andixd.com
            </a>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="backdrop-blur-xl bg-white/70 border-2 border-white/40 rounded-3xl p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-semibold text-gray-900">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 border-purple-200 bg-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
              placeholder="Your name"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-semibold text-gray-900">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 border-purple-200 bg-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
              placeholder="your@email.com"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-semibold text-gray-900">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={6}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 border-purple-200 bg-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/40 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
          >
            {status === "sending" ? (
              "Sending..."
            ) : status === "success" ? (
              "Message Sent!"
            ) : (
              <>
                Send Message
                <Send className="w-5 h-5" />
              </>
            )}
          </button>

          {status === "success" && (
            <p className="text-center text-green-600 font-medium">
              Thanks for reaching out! I'll get back to you soon.
            </p>
          )}
          
          {status === "error" && (
            <p className="text-center text-red-600 font-medium">
              Sorry, there was an error sending your message. Please email me directly at andi@andixd.com
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
