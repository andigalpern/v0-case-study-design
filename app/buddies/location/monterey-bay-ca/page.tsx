'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Radio, Calendar, Users, Home, Star, Camera, User, MessageSquare } from 'lucide-react'

export default function MontereyBayLocation() {
  const pathname = usePathname()
  const [broadcasting, setBroadcasting] = useState(false)

  const interestedDivers = [
    {
      username: 'leilani',
      certification: 'Rescue Diver',
      dives: 87,
      location: 'Monterey, CA',
      available: true,
      avatar: '/female-diver-with-mask.jpg'
    },
    {
      username: 'diegomarrero',
      certification: 'Advanced Open Water',
      dives: 105,
      location: 'Coral Gables, FL',
      available: true,
      avatar: '/male-diver-smiling.jpg'
    }
  ]

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#012137] via-[#018AE6] via-[#038190] to-[#F9F2EA] pb-32">
      {/* Hero Image */}
      <div className="relative h-80">
        <img 
          src="/monterey-bay-kelp-forest-underwater.jpg"
          alt="Monterey Bay diving"
          className="w-full h-full object-cover"
        />
        <Link 
          href="/buddies/search"
          className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-gray-800" />
        </Link>
      </div>

      <main className="px-6 py-8 space-y-6 animate-fade-in-up max-w-4xl mx-auto">
        {/* Location Info */}
        <section className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-lg">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Monterey Bay, CA</h1>
          <p className="text-gray-700 leading-relaxed">
            Monterey Bay is a world-renowned cold-water diving destination famous for its giant kelp forests, abundant marine life, and crystal-clear waters. Divers can encounter sea otters, harbor seals, sea lions, and an incredible variety of colorful invertebrates. The bay offers something for every skill level.
          </p>
        </section>

        {/* Action Buttons */}
        <section className="space-y-4">
          <button className="w-full bg-[#ff6b6b] hover:bg-[#ff5252] text-white font-semibold py-5 px-6 rounded-full flex items-center justify-center gap-3 transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]">
            <Calendar className="w-6 h-6" />
            Schedule dive
          </button>

          <button 
            onClick={() => setBroadcasting(!broadcasting)}
            className={`w-full ${broadcasting ? 'bg-green-500 hover:bg-green-600' : 'bg-[#a8e6f5] hover:bg-[#8dd5e8]'} text-gray-900 font-semibold py-5 px-6 rounded-full flex items-center justify-center gap-3 transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]`}
          >
            <Radio className="w-6 h-6" />
            {broadcasting ? 'Broadcasting...' : 'Broadcast availability'}
          </button>
        </section>

        <p className="text-white text-center text-lg">
          Let nearby divers know you're free.
        </p>

        {/* Interested Divers */}
        <section className="space-y-4">
          <div className="flex items-center justify-center gap-2 text-white">
            <Users className="w-6 h-6" />
            <h2 className="text-xl font-bold">{interestedDivers.length} interested</h2>
          </div>

          <div className="space-y-3">
            {interestedDivers.map((diver, index) => (
              <Link
                key={diver.username}
                href={`/buddies/profile/${diver.username}`}
                className="block bg-white/95 backdrop-blur-sm rounded-2xl p-4 hover:bg-white hover:shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  animation: `fade-in-up 0.5s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 overflow-hidden flex-shrink-0">
                    <img src={diver.avatar || "/placeholder.svg"} alt={diver.username} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-lg">@{diver.username}</h3>
                    <p className="text-gray-600 text-sm">
                      {diver.certification} • {diver.dives} dives
                    </p>
                    <p className="text-gray-500 text-sm">{diver.location}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-sm text-green-600 font-medium">Available</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 w-full bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-2xl z-50">
        <div className="px-8 py-4 max-w-4xl mx-auto">
          <div className="flex items-center justify-around">
            <Link 
              href="/buddies" 
              className={`p-3 rounded-2xl transition-all duration-300 ${
                pathname === '/buddies' 
                  ? 'text-[#018AE6] bg-blue-50 scale-110' 
                  : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Home className="w-7 h-7" fill={pathname === '/buddies' ? 'currentColor' : 'none'} />
            </Link>
            <Link 
              href="/buddies/search" 
              className={`p-3 rounded-2xl transition-all duration-300 ${
                pathname === '/buddies/search' 
                  ? 'text-[#018AE6] bg-blue-50 scale-110' 
                  : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Star className="w-7 h-7" fill={pathname === '/buddies/search' ? 'currentColor' : 'none'} />
            </Link>
            <Link 
              href="/buddies/camera" 
              className={`p-3 rounded-2xl transition-all duration-300 ${
                pathname === '/buddies/camera' 
                  ? 'text-[#018AE6] bg-blue-50 scale-110' 
                  : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Camera className="w-7 h-7" />
            </Link>
            <Link 
              href="/buddies/profile/me" 
              className={`p-3 rounded-2xl transition-all duration-300 ${
                pathname === '/buddies/profile/me' 
                  ? 'text-[#018AE6] bg-blue-50 scale-110' 
                  : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
              }`}
            >
              <User className="w-7 h-7" fill={pathname === '/buddies/profile/me' ? 'currentColor' : 'none'} />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}
