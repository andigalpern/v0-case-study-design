'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Home, Star, Camera, User, MessageSquare, CheckCircle, Shield } from 'lucide-react'

export default function ProfilePage() {
  const pathname = usePathname()
  const [isFollowing, setIsFollowing] = useState(false)

  const divePhotos = [
    {
      location: 'Key Largo, FL',
      image: '/underwater-sea-turtle.png'
    },
    {
      location: 'Monterey Bay, CA',
      image: '/jellyfish-underwater.jpg'
    }
  ]

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0d3d5c] via-[#1b6ea1] to-[#2d9ccc] pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0d3d5c] px-6 py-4 flex items-center justify-between">
        <Link 
          href="/buddies/search"
          className="text-white hover:scale-110 transition-transform"
        >
          <ArrowLeft className="w-6 h-6" />
        </Link>
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

      <main className="px-6 py-8 space-y-6 animate-fade-in-up">
        {/* Profile Card */}
        <section className="bg-white rounded-3xl p-8 shadow-lg">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 overflow-hidden">
              <img 
                src="/male-diver-smiling-beach.jpg"
                alt="Diego Marrero"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Diego Marrero</h1>
              <p className="text-xl text-gray-600">@diegomarrero</p>
              <p className="text-gray-500 mt-1">Coral Gables, FL</p>
            </div>
            
            <div className="flex gap-3 w-full max-w-xs">
              <button 
                onClick={() => setIsFollowing(!isFollowing)}
                className={`flex-1 ${isFollowing ? 'bg-gray-200 hover:bg-gray-300' : 'bg-[#a8e6f5] hover:bg-[#8dd5e8]'} text-gray-900 font-semibold py-3 px-6 rounded-full transition-all hover:scale-105 active:scale-95`}
              >
                {isFollowing ? 'Following' : 'Follow'}
              </button>
              <button className="flex-1 bg-[#a8e6f5] hover:bg-[#8dd5e8] text-gray-900 font-semibold py-3 px-6 rounded-full transition-all hover:scale-105 active:scale-95">
                Message
              </button>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-8 space-y-4">
            <h2 className="text-xl font-bold text-gray-900">Certifications</h2>
            <p className="text-gray-700">Advanced Open Water • 105 dives</p>
            <div className="flex items-center gap-2 text-green-600">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="font-medium">Available this weekend</span>
            </div>
            <div className="flex gap-4 text-gray-700">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Has gear</span>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="mt-8 space-y-3">
            <h2 className="text-xl font-bold text-gray-900">Bio</h2>
            <p className="text-gray-700 leading-relaxed">
              Avid diver originally from Cuba. I love underwater photography and exploring new dive spots.
            </p>
          </div>

          {/* Recent Dives */}
          <div className="mt-8 space-y-3">
            <h2 className="text-xl font-bold text-gray-900">Recent Dives</h2>
            <div className="space-y-2 text-gray-700">
              <div>
                <p className="font-medium">Channel Islands, CA</p>
                <p className="text-sm text-gray-500">45d ago</p>
              </div>
              <div>
                <p className="font-medium">La Jolla Cove, CA</p>
                <p className="text-sm text-gray-500">50d ago</p>
              </div>
            </div>
          </div>
        </section>

        {/* Review */}
        <section className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-lg animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          <div className="flex gap-1 mb-3">
            {[1,2,3,4,5].map(i => (
              <Star key={i} className="w-8 h-8 fill-[#ff6b6b] text-[#ff6b6b]" />
            ))}
          </div>
          <p className="text-gray-800 leading-relaxed mb-4">
            Diego is the kind of dive buddy you want every time — always on time, totally reliable, and safety-focused. On our last dive, he captured the most incredible shots of rare sea life. Can't wait to dive with him again!
          </p>
          <div className="flex items-center gap-3 text-gray-600">
            <MessageSquare className="w-5 h-5" />
            <div>
              <p className="font-semibold text-gray-900">Marcus Johnson</p>
              <p className="text-sm">Aug. 3, 2025</p>
            </div>
          </div>
        </section>

        {/* Dive Photos */}
        <section className="space-y-4">
          <h2 className="text-white text-2xl font-bold">Dive Photos</h2>
          <div className="grid grid-cols-2 gap-4">
            {divePhotos.map((photo, index) => (
              <div 
                key={photo.location}
                className="relative rounded-2xl overflow-hidden aspect-square hover:scale-105 transition-transform duration-300 shadow-lg"
                style={{animation: `fade-in-up 0.5s ease-out ${(index + 2) * 0.1}s both`}}
              >
                <img 
                  src={photo.image || "/placeholder.svg"} 
                  alt={photo.location}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white font-semibold">{photo.location}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <nav className="buddies-bottom-nav bg-white/90 backdrop-blur-md border-t border-gray-200 px-6 py-3">
        <div className="flex items-center justify-around max-w-md mx-auto">
          <Link 
            href="/buddies" 
            className={`p-3 rounded-xl transition-all ${pathname === '/buddies' ? 'text-[#1b6ea1]' : 'text-gray-400 hover:text-gray-600'}`}
          >
            <Home className="w-7 h-7" fill={pathname === '/buddies' ? 'currentColor' : 'none'} />
          </Link>
          <Link 
            href="/buddies/search" 
            className={`p-3 rounded-xl transition-all ${pathname === '/buddies/search' ? 'text-[#1b6ea1]' : 'text-gray-400 hover:text-gray-600'}`}
          >
            <Star className="w-7 h-7" fill={pathname === '/buddies/search' ? 'currentColor' : 'none'} />
          </Link>
          <Link 
            href="/buddies/camera" 
            className={`p-3 rounded-xl transition-all ${pathname === '/buddies/camera' ? 'text-[#1b6ea1]' : 'text-gray-400 hover:text-gray-600'}`}
          >
            <Camera className="w-7 h-7" />
          </Link>
          <Link 
            href="/buddies/profile/me" 
            className={`p-3 rounded-xl transition-all ${pathname === '/buddies/profile/me' ? 'text-[#1b6ea1]' : 'text-gray-400 hover:text-gray-600'}`}
          >
            <User className="w-7 h-7" fill={pathname === '/buddies/profile/me' ? 'currentColor' : 'none'} />
          </Link>
        </div>
      </nav>
    </div>
  )
}
