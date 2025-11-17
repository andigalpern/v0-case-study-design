'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { MapPin, Calendar, Home, Star, Camera, User, MessageSquare, ChevronRight, Search, X } from 'lucide-react'

export default function BuddiesSearch() {
  const pathname = usePathname()
  const [showLocationSearch, setShowLocationSearch] = useState(false)
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState('')
  const [selectedDates, setSelectedDates] = useState({ start: '', end: '' })

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

  const popularDestinations = [
    'Key Largo, FL',
    'Key West, FL',
    'Monterey Bay, CA',
    'Catalina Island, CA',
    'Maui, HI',
    'Kona, HI',
    'Cozumel, Mexico',
    'Great Barrier Reef, Australia'
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
    <div className="relative min-h-screen bg-gradient-to-br from-[#012137] via-[#018AE6] via-[#038190] to-[#F9F2EA]">
      <header className="sticky top-0 z-50 bg-[#012137] px-6 py-4 flex items-center justify-between">
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

      <main className="px-6 py-6 pb-32 space-y-8 animate-fade-in-up max-w-4xl mx-auto">
        {/* Search Section */}
        <section className="space-y-4">
          <h2 className="text-white text-xl font-semibold">Where</h2>
          <button 
            onClick={() => setShowLocationSearch(true)}
            className="w-full bg-white rounded-full px-6 py-4 flex items-center justify-between hover:shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-[#ff6b6b]" />
              <span className={selectedLocation ? 'text-gray-900' : 'text-gray-500'}>
                {selectedLocation || 'Search dive destinations'}
              </span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </section>

        <section className="space-y-4">
          <h2 className="text-white text-xl font-semibold">When</h2>
          <button 
            onClick={() => setShowDatePicker(true)}
            className="w-full bg-white rounded-full px-6 py-4 flex items-center justify-between hover:shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="flex items-center gap-3">
              <Calendar className="w-6 h-6 text-[#ff6b6b]" />
              <span className={selectedDates.start ? 'text-gray-900' : 'text-gray-500'}>
                {selectedDates.start && selectedDates.end 
                  ? `${selectedDates.start} - ${selectedDates.end}` 
                  : 'Choose dates'}
              </span>
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

      {showLocationSearch && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center p-4">
          <div className="bg-white rounded-t-3xl sm:rounded-3xl w-full max-w-lg max-h-[80vh] overflow-hidden flex flex-col animate-slide-up">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900">Search Destinations</h3>
              <button 
                onClick={() => setShowLocationSearch(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6">
              <div className="relative mb-4">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search dive spots..."
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#1b6ea1] focus:border-transparent"
                  autoFocus
                />
              </div>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {popularDestinations.map((destination) => (
                  <button
                    key={destination}
                    onClick={() => {
                      setSelectedLocation(destination)
                      setShowLocationSearch(false)
                    }}
                    className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-xl transition-colors flex items-center gap-3"
                  >
                    <MapPin className="w-5 h-5 text-[#ff6b6b] flex-shrink-0" />
                    <span className="text-gray-900">{destination}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {showDatePicker && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center p-4">
          <div className="bg-white rounded-t-3xl sm:rounded-3xl w-full max-w-lg overflow-hidden animate-slide-up">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900">Choose Dates</h3>
              <button 
                onClick={() => setShowDatePicker(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                <input
                  type="date"
                  value={selectedDates.start}
                  onChange={(e) => setSelectedDates({ ...selectedDates, start: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1b6ea1] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
                <input
                  type="date"
                  value={selectedDates.end}
                  onChange={(e) => setSelectedDates({ ...selectedDates, end: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1b6ea1] focus:border-transparent"
                />
              </div>
              <button
                onClick={() => setShowDatePicker(false)}
                className="w-full bg-[#1b6ea1] text-white py-4 rounded-full font-semibold hover:bg-[#0d3d5c] transition-colors"
              >
                Confirm Dates
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-full max-w-md z-50">
        <nav className="bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-2xl">
          <div className="px-8 py-4">
            <div className="flex items-center justify-around">
              <Link 
                href="/buddies" 
                className={`p-3 transition-all duration-300 ${
                  pathname === '/buddies' 
                    ? 'text-[#018AE6] bg-blue-50 scale-110' 
                    : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Home className="w-7 h-7" fill={pathname === '/buddies' ? 'currentColor' : 'none'} />
              </Link>
              <Link 
                href="/buddies/search" 
                className={`p-3 transition-all duration-300 ${
                  pathname === '/buddies/search' 
                    ? 'text-[#018AE6] bg-blue-50 scale-110' 
                    : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Star className="w-7 h-7" fill={pathname === '/buddies/search' ? 'currentColor' : 'none'} />
              </Link>
              <Link 
                href="/buddies/gallery" 
                className={`p-3 transition-all duration-300 ${
                  pathname === '/buddies/gallery' 
                    ? 'text-[#018AE6] bg-blue-50 scale-110' 
                    : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Camera className="w-7 h-7" />
              </Link>
              <Link 
                href="/buddies/profile/me" 
                className={`p-3 transition-all duration-300 ${
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
    </div>
  )
}
