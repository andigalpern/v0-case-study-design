'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MapPin, Calendar, Home, Star, Camera, User, MessageSquare, ChevronRight } from 'lucide-react'

export default function BuddiesSearch() {
  const [activeTab, setActiveTab] = useState('search')

  const experiences = [
    {
      name: 'Key Largo, FL',
      image: '/underwater-sea-turtle.png'
    },
    {
      name: 'Monterey Bay, CA',
      image: '/jellyfish-underwater.jpg'
    }
  ]

  const divers = [
    {
      username: 'diegomarrero',
      certification: 'Advanced Open Water',
      dives: 32,
      location: 'Coral Gables, FL',
      available: true,
      avatar: '/male-diver-smiling.jpg'
    },
    {
      username: 'annarodriguez',
      certification: 'Advanced Open Water',
      dives: 42,
      location: 'Fort Lauderdale, FL',
      available: true,
      avatar: '/female-diver-with-mask.jpg'
    },
    {
      username: 'marcusjohnson',
      certification: 'Advanced Open Water',
      dives: 105,
      location: 'Tampa, FL',
      available: false,
      availableText: 'Available in 2 weeks',
      avatar: '/male-diver-with-gear.jpg'
    },
    {
      username: 'leilani',
      certification: 'Rescue Diver',
      dives: 180,
      location: 'Honolulu, HI',
      available: true,
      avatar: '/female-diver-hawaii.jpg'
    }
  ]

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0d3d5c] via-[#1b6ea1] to-[#2d9ccc] pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0d3d5c] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 text-[#ff6b6b]">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C9.5 2 7.5 4 7.5 6.5C7.5 8 8 9 9 10L12 14L15 10C16 9 16.5 8 16.5 6.5C16.5 4 14.5 2 12 2M12 4.5C13.4 4.5 14 5.1 14 6.5C14 7.4 13.5 8 13 8.5L12 10L11 8.5C10.5 8 10 7.4 10 6.5C10 5.1 10.6 4.5 12 4.5M7 11C5 11 3 13 3 15.5C3 17 3.5 18 4.5 19L7 22L9.5 19C10.5 18 11 17 11 15.5C11 13 9 11 7 11M17 11C15 11 13 13 13 15.5C13 17 13.5 18 14.5 19L17 22L19.5 19C20.5 18 21 17 21 15.5C21 13 19 11 17 11Z" />
            </svg>
          </div>
          <span className="text-white text-2xl font-bold">buddies</span>
        </div>
        <Link href="/buddies/messages" className="text-white hover:scale-110 transition-transform">
          <MessageSquare className="w-8 h-8" />
        </Link>
      </header>

      <main className="px-6 py-6 space-y-8 animate-fade-in-up">
        {/* Search Section */}
        <section className="space-y-4">
          <h2 className="text-white text-xl font-semibold">Where</h2>
          <button className="w-full bg-white rounded-full px-6 py-4 flex items-center justify-between hover:shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]">
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-[#ff6b6b]" />
              <span className="text-gray-500">Search dive destinations</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </section>

        <section className="space-y-4">
          <h2 className="text-white text-xl font-semibold">When</h2>
          <button className="w-full bg-white rounded-full px-6 py-4 flex items-center justify-between hover:shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]">
            <div className="flex items-center gap-3">
              <Calendar className="w-6 h-6 text-[#ff6b6b]" />
              <span className="text-gray-500">Choose dates</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </section>

        {/* Browse Experiences */}
        <section className="space-y-4">
          <h2 className="text-white text-2xl font-bold">Browse Experiences</h2>
          <div className="grid grid-cols-2 gap-4">
            {experiences.map((exp, index) => (
              <Link
                key={exp.name}
                href={`/buddies/location/${exp.name.toLowerCase().replace(/,?\s+/g, '-')}`}
                className="relative rounded-2xl overflow-hidden aspect-square hover:scale-105 transition-transform duration-300 shadow-lg"
                style={{
                  animation: `fade-in-up 0.5s ease-out ${index * 0.1}s both`
                }}
              >
                <img 
                  src={exp.image || "/placeholder.svg"} 
                  alt={exp.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">{exp.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Find Divers */}
        <section className="space-y-4">
          <h2 className="text-white text-2xl font-bold">Find divers</h2>
          <div className="space-y-3">
            {divers.map((diver, index) => (
              <Link
                key={diver.username}
                href={`/buddies/profile/${diver.username}`}
                className="block bg-white/95 backdrop-blur-sm rounded-2xl p-4 hover:bg-white hover:shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  animation: `fade-in-up 0.5s ease-out ${(index + 2) * 0.1}s both`
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
                      <div className={`w-2 h-2 rounded-full ${diver.available ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                      <span className="text-sm text-gray-600">
                        {diver.availableText || (diver.available ? 'Available' : 'Not available')}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <nav className="buddies-bottom-nav fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-gray-200 px-6 py-3">
        <div className="flex items-center justify-around max-w-md mx-auto">
          <Link 
            href="/buddies" 
            className={`p-3 rounded-xl transition-all ${activeTab === 'home' ? 'text-[#1b6ea1]' : 'text-gray-400 hover:text-gray-600'}`}
            onClick={() => setActiveTab('home')}
          >
            <Home className="w-7 h-7" fill={activeTab === 'home' ? 'currentColor' : 'none'} />
          </Link>
          <Link 
            href="/buddies/search" 
            className={`p-3 rounded-xl transition-all ${activeTab === 'search' ? 'text-[#1b6ea1]' : 'text-gray-400 hover:text-gray-600'}`}
            onClick={() => setActiveTab('search')}
          >
            <Star className="w-7 h-7" fill={activeTab === 'search' ? 'currentColor' : 'none'} />
          </Link>
          <Link 
            href="/buddies/camera" 
            className={`p-3 rounded-xl transition-all ${activeTab === 'camera' ? 'text-[#1b6ea1]' : 'text-gray-400 hover:text-gray-600'}`}
            onClick={() => setActiveTab('camera')}
          >
            <Camera className="w-7 h-7" />
          </Link>
          <Link 
            href="/buddies/profile/me" 
            className={`p-3 rounded-xl transition-all ${activeTab === 'profile' ? 'text-[#1b6ea1]' : 'text-gray-400 hover:text-gray-600'}`}
            onClick={() => setActiveTab('profile')}
          >
            <User className="w-7 h-7" fill={activeTab === 'profile' ? 'currentColor' : 'none'} />
          </Link>
        </div>
      </nav>
    </div>
  )
}
