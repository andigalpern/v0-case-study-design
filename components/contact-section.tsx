import { ArrowUpRight } from 'lucide-react'

export function ContactSection() {
  return (
    <section id="contact" className="container mx-auto px-6 py-16">
      <div className="backdrop-blur-xl gradient-bg-purple-blue border border-white/10 rounded-3xl p-12 text-center">
        <h2 className="text-4xl font-black mb-6 text-brand-gray-dark">
          Let's grow together
        </h2>
        <div className="mb-6 space-y-2">
          <p className="text-2xl font-bold text-brand-gray-dark">Andi Galpern</p>
          <p className="text-lg text-brand-gray-dark">
            <a 
              href="mailto:andi@andixd.com"
              className="text-purple-700 hover:text-purple-800 underline underline-offset-2"
            >
              andi@andixd.com
            </a>
          </p>
          <p className="text-base text-muted-foreground font-semibold">Available for full-time and consulting work</p>
        </div>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-balance text-lg leading-relaxed">
          I'm always open to discussing product design work, partnership opportunities, or just grabbing a virtual
          coffee to talk shop.
        </p>
        <a
          href="mailto:andi@andixd.com"
          className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300 cursor-pointer inline-flex items-center gap-2"
        >
          E-mail andi@andixd.com
          <ArrowUpRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  )
}
