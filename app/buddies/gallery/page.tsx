'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Home, Star, Camera, User, MessageSquare, Grid3x3, Heart, MessageCircle } from 'lucide-react'

export default function BuddiesGallery() {
  const pathname = usePathname()

  const photos = [
    {
      id: 1,
      image: '/underwater-sea-turtle.png',
      likes: 124,
      comments: 18,
      username: 'annarodriguez',
      location: 'Key Largo, FL'
    },
    {
      id: 2,
      image: '/jellyfish-underwater.jpg',
      likes: 89,
      comments: 12,
      username: 'alexhaydes',
      location: 'Key Biscayne, FL'
    },
    {
      id: 3,
      image: '/male-diver-with-gear.jpg',
      likes: 156,
      comments: 23,
      username: 'marcusjohnson',
      location: 'Monterey Bay, CA'
    },
    {
      id: 4,
      image: '/female-diver-with-mask.jpg',
      likes: 203,
      comments: 31,
      username: 'leilani',
      location: 'Maui, HI'
    },
    {
      id: 5,
      image: '/male-diver-smiling.jpg',
      likes: 78,
      comments: 9,
      username: 'diegomarrero',
      location: 'Coral Gables, FL'
    },
    {
      id: 6,
      image: '/female-diver-hawaii.jpg',
      likes: 192,
      comments: 27,
      username: 'leilani',
      location: 'Honolulu, HI'
    },
    {
      id: 7,
      image: '/underwater-sea-turtle.png',
      likes: 145,
      comments: 19,
      username: 'annarodriguez',
      location: 'Key West, FL'
    },
    {
      id: 8,
      image: '/jellyfish-underwater.jpg',
      likes: 98,
      comments: 14,
      username: 'alexhaydes',
      location: 'Miami, FL'
    },
    {
      id: 9,
      image: '/male-diver-with-gear.jpg',
      likes: 167,
      comments: 21,
      username: 'marcusjohnson',
      location: 'Catalina Island, CA'
    }
  ]

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#012137] via-[#018AE6] via-[#038190] to-[#F9F2EA]">
      <header className="sticky top-0 z-50 bg-[#012137]/80 backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 text-[#ff6b6b] drop-shadow-lg">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C9.5 2 7.5 4 7.5 6.5C7.5 8 8 9 9 10L12 14L15 10C16 9 16.5 8 16.5 6.5C16.5 4 14.5 2 12 2M12 4.5C13.4 4.5 14 5.1 14 6.5C14 7.4 13.5 8 13 8.5L12 10L11 8.5C10.5 8 10 7.4 10 6.5C10 5.1 10.6 4.5 12 4.5M7 11C5 11 3 13 3 15.5C3 17 3.5 18 4.5 19L7 22L9.5 19C10.5 18 11 17 11 15.5C11 13 9 11 7 11M17 11C15 11 13 13 13 15.5C13 17 13.5 18 14.5 19L17 22L19.5 19C20.5 18 21 17 21 15.5C21 13 19 11 17 11Z" />
              </svg>
            </div>
            <span className="text-white text-2xl font-bold tracking-tight">buddies</span>
          </div>
          <Link 
            href="/buddies/messages" 
            className="text-white hover:scale-110 transition-transform p-2 hover:bg-white/10 rounded-full"
          >
            <MessageSquare className="w-7 h-7" />
          </Link>
        </div>
      </header>

      <main className="px-4 py-6 pb-32 max-w-7xl mx-auto">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Grid3x3 className="w-6 h-6 text-white" />
            <h1 className="text-white text-2xl font-bold">Gallery</h1>
          </div>
          <p className="text-white/80 text-sm">{photos.length} photos</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className="relative group aspect-square rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 cursor-pointer bg-white/10 backdrop-blur-sm"
              style={{
                animation: `fade-in-up 0.4s ease-out ${index * 0.05}s both`
              }}
            >
              <img
                src={photo.image || "/placeholder.svg"}
                alt={`Photo by ${photo.username}`}
                className="w-full h-full object-cover"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2">
                  <Link 
                    href={`/buddies/profile/${photo.username}`}
                    className="text-white font-bold text-sm hover:underline"
                  >
                    @{photo.username}
                  </Link>
                  <p className="text-white/80 text-xs">{photo.location}</p>
                  <div className="flex items-center gap-4 text-white text-sm">
                    <div className="flex items-center gap-1.5">
                      <Heart className="w-4 h-4" />
                      <span>{photo.likes}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MessageCircle className="w-4 h-4" />
                      <span>{photo.comments}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xs font-medium">View</p>
              </div>
            </div>
          ))}
        </div>
      </main>

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
