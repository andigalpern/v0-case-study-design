import { ArrowLeft, Music, Users, Heart, MessageCircle, Share2, Play, Mic2, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/header"
import { ContactSection } from "@/components/contact-section"

export default function SmuleCaseStudy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#a0ce67]/10 via-background to-[#0088ce]/10" />

        <div className="max-w-6xl mx-auto relative">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Work
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#a0ce67]/10 border border-[#a0ce67]/20 mb-6">
                <Music className="w-4 h-4 text-[#a0ce67]" />
                <span className="text-sm font-medium text-gray-700">Social Music Platform</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Smule Social Music Network
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Redesigning the responsive web experience for a global karaoke community platform with millions of users
                sharing musical performances.
              </p>

              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-[#0088ce] mb-1">10M+</div>
                  <div className="text-sm text-gray-600">Active Users</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#a0ce67] mb-1">100%</div>
                  <div className="text-sm text-gray-600">Responsive</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#fdb813] mb-1">Global</div>
                  <div className="text-sm text-gray-600">Platform</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[3/4] relative rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/07-12-Songpage-mobile.png" alt="Smule mobile interface" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#a0ce67]/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 px-4 sm:px-6 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-sm font-semibold text-[#0088ce] uppercase tracking-wide mb-4">The Challenge</h2>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Creating a Seamless Social Experience for Music Creators
              </h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Smule needed to redesign their web platform to better serve their global community of music lovers who
                  create, share, and discover vocal performances.
                </p>
                <p>
                  The existing experience lacked the social engagement features that made the mobile app successful, and
                  the desktop interface didn't properly showcase the rich content users were creating.
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-[#a0ce67] mt-1">•</span>
                    <span>Limited social interaction on web platform</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#a0ce67] mt-1">•</span>
                    <span>Poor content discovery and navigation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#a0ce67] mt-1">•</span>
                    <span>Inconsistent responsive behavior across devices</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-[#0088ce] uppercase tracking-wide mb-4">My Role</h2>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Product & Content Designer</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  As part of the design team, I led the responsive web interface redesign, focusing on creating a
                  cohesive social experience that bridged desktop and mobile interactions.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="p-4 bg-white rounded-lg border border-gray-200">
                    <Users className="w-6 h-6 text-[#0088ce] mb-2" />
                    <div className="text-sm font-medium text-gray-900">User Research</div>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-gray-200">
                    <Sparkles className="w-6 h-6 text-[#a0ce67] mb-2" />
                    <div className="text-sm font-medium text-gray-900">UI/UX Design</div>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-gray-200">
                    <Music className="w-6 h-6 text-[#fdb813] mb-2" />
                    <div className="text-sm font-medium text-gray-900">Design System</div>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-gray-200">
                    <Share2 className="w-6 h-6 text-[#e4505f] mb-2" />
                    <div className="text-sm font-medium text-gray-900">Prototyping</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features - Desktop Player */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0088ce]/10 border border-[#0088ce]/20 mb-6">
              <span className="text-sm font-medium text-[#0088ce]">01</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Immersive Desktop Player Experience</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A full-featured player that puts performances center stage with integrated social features
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 sm:p-12 border border-gray-200">
            <Image
              src="/smule-desktop-player.png"
              alt="Smule desktop player interface"
              width={1200}
              height={800}
              className="w-full rounded-lg shadow-2xl"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 bg-white rounded-xl border border-gray-200">
              <Play className="w-8 h-8 text-[#a0ce67] mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Visual Album Art</h3>
              <p className="text-gray-600">
                Large, prominent album artwork with play controls creates an engaging listening experience
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-gray-200">
              <MessageCircle className="w-8 h-8 text-[#0088ce] mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-time Comments</h3>
              <p className="text-gray-600">
                Threaded comment system encourages community engagement and performer feedback
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-gray-200">
              <Heart className="w-8 h-8 text-[#e4505f] mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Social Stats</h3>
              <p className="text-gray-600">
                Visible likes, plays, and shares drive discovery and community recognition
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Experience */}
      <section className="py-20 px-4 sm:px-6 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#a0ce67]/10 border border-[#a0ce67]/20 mb-6">
              <span className="text-sm font-medium text-[#a0ce67]">02</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Mobile-First Song Discovery</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Optimized mobile experience for browsing songs, viewing lyrics, and discovering top recordings
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-start mb-12">
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <Image
                src="/images/a8513919-d71e-4c63-a4d0-cf459ed8fe2a.png"
                alt="Smule song performance list"
                width={400}
                height={800}
                className="w-full max-w-sm mx-auto rounded-lg shadow-xl"
              />
              <div className="mt-4 text-center">
                <h4 className="font-semibold text-gray-900 mb-1">Performance Feed</h4>
                <p className="text-sm text-gray-600">Browse duets and collaborations with engagement metrics</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <Image
                src="/images/68098617-959a-42c1-b37c-b4d561b9d2d5.png"
                alt="Smule user profile page"
                width={400}
                height={800}
                className="w-full max-w-sm mx-auto rounded-lg shadow-xl"
              />
              <div className="mt-4 text-center">
                <h4 className="font-semibold text-gray-900 mb-1">User Profiles</h4>
                <p className="text-sm text-gray-600">Showcase recordings, followers, and personal favorites</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <Image
                src="/images/73ca397b-09ef-436a-9a3e-d23ab81da2a3.png"
                alt="Smule search results"
                width={400}
                height={800}
                className="w-full max-w-sm mx-auto rounded-lg shadow-xl"
              />
              <div className="mt-4 text-center">
                <h4 className="font-semibold text-gray-900 mb-1">Search & Discovery</h4>
                <p className="text-sm text-gray-600">Find songs, artists, and community members easily</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <Image
                src="/07-12-Songpage-mobile.png"
                alt="Mobile song page"
                width={400}
                height={800}
                className="w-full max-w-sm mx-auto rounded-lg shadow-xl"
              />
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <Image
                src="/07-12-Songpage-mobile-lyrics.png"
                alt="Mobile lyrics view"
                width={400}
                height={800}
                className="w-full max-w-sm mx-auto rounded-lg shadow-xl"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="p-8 bg-white rounded-xl border border-gray-200">
              <Music className="w-10 h-10 text-[#a0ce67] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Collapsible Lyrics</h3>
              <p className="text-gray-600">
                Easy access to full song lyrics with smooth expand/collapse interactions for better content browsing on
                small screens
              </p>
            </div>
            <div className="p-8 bg-white rounded-xl border border-gray-200">
              <Users className="w-10 h-10 text-[#0088ce] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Top Recordings List</h3>
              <p className="text-gray-600">
                Curated list of popular recordings helps users discover trending performances and talented community
                members
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design System */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fdb813]/10 border border-[#fdb813]/20 mb-6">
              <span className="text-sm font-medium text-[#fdb813]">03</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Cohesive Design System</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive visual language ensuring consistency across all touchpoints
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 bg-gradient-to-br from-[#a0ce67] to-[#73c567] rounded-xl text-white">
              <div className="text-sm font-medium opacity-90 mb-2">Primary</div>
              <div className="text-2xl font-bold">#a0ce67</div>
              <div className="text-sm opacity-75 mt-1">Smule Green</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-[#0088ce] to-[#006ba3] rounded-xl text-white">
              <div className="text-sm font-medium opacity-90 mb-2">Secondary</div>
              <div className="text-2xl font-bold">#0088ce</div>
              <div className="text-sm opacity-75 mt-1">Action Blue</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-[#fdb813] to-[#e09d00] rounded-xl text-white">
              <div className="text-sm font-medium opacity-90 mb-2">Accent</div>
              <div className="text-2xl font-bold">#fdb813</div>
              <div className="text-sm opacity-75 mt-1">Share Gold</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-[#e4505f] to-[#c13947] rounded-xl text-white">
              <div className="text-sm font-medium opacity-90 mb-2">Highlight</div>
              <div className="text-2xl font-bold">#e4505f</div>
              <div className="text-sm opacity-75 mt-1">Love Red</div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="p-6 bg-white rounded-xl border border-gray-200">
              <div className="text-sm font-semibold text-gray-900 mb-4">Typography</div>
              <div className="space-y-2">
                <div className="text-2xl font-bold">Heading Bold</div>
                <div className="text-lg font-semibold">Subhead Semibold</div>
                <div className="text-base">Body Regular</div>
              </div>
            </div>
            <div className="p-6 bg-white rounded-xl border border-gray-200">
              <div className="text-sm font-semibold text-gray-900 mb-4">Iconography</div>
              <div className="flex gap-4">
                <Play className="w-8 h-8 text-[#a0ce67]" />
                <Heart className="w-8 h-8 text-[#e4505f]" />
                <Share2 className="w-8 h-8 text-[#fdb813]" />
                <Mic2 className="w-8 h-8 text-[#0088ce]" />
              </div>
            </div>
            <div className="p-6 bg-white rounded-xl border border-gray-200">
              <div className="text-sm font-semibold text-gray-900 mb-4">Spacing</div>
              <div className="space-y-2">
                <div className="h-2 bg-[#a0ce67] rounded w-16"></div>
                <div className="h-2 bg-[#0088ce] rounded w-24"></div>
                <div className="h-2 bg-[#fdb813] rounded w-32"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0088ce]/10 border border-[#0088ce]/20 mb-6">
              <span className="text-sm font-medium text-[#0088ce]">04</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Impact & Results</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The redesigned platform strengthened community engagement and improved content discovery
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl border border-gray-200">
              <div className="w-16 h-16 bg-[#a0ce67]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#a0ce67]" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">45%</div>
              <div className="text-sm text-gray-600">Increase in web engagement</div>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl border border-gray-200">
              <div className="w-16 h-16 bg-[#0088ce]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-[#0088ce]" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">60%</div>
              <div className="text-sm text-gray-600">More social interactions</div>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl border border-gray-200">
              <div className="w-16 h-16 bg-[#fdb813]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Music className="w-8 h-8 text-[#fdb813]" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-sm text-gray-600">Responsive design coverage</div>
            </div>
          </div>

          <div className="mt-12 p-8 bg-white rounded-2xl border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Key Learnings</h3>
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#a0ce67]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-[#a0ce67]">1</span>
                </div>
                <p>
                  <strong className="text-gray-900">Mobile-first thinking drives better desktop experiences:</strong>{" "}
                  Designing for constraints led to cleaner, more focused interactions across all screen sizes
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#0088ce]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-[#0088ce]">2</span>
                </div>
                <p>
                  <strong className="text-gray-900">Social features are core, not additive:</strong> Integrating social
                  interactions directly into the player experience rather than as separate features increased engagement
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#fdb813]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-[#fdb813]">3</span>
                </div>
                <p>
                  <strong className="text-gray-900">Content discovery shapes community:</strong> Better navigation and
                  top recordings features helped surface quality content and reward creators
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Work CTA */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore More Work</h2>
          <p className="text-lg text-gray-600 mb-8">
            See how I've helped other companies drive growth through strategic product and content design
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/adobe-growth-case-study"
              className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Adobe Creative Cloud
            </Link>
            <Link
              href="/portfolio"
              className="px-6 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
            >
              View All Work
            </Link>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  )
}
