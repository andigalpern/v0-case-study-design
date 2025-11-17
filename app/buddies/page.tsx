'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Heart, MessageCircle, MapPin, MoreVertical, MessageSquare, Home, Star, Camera, User, Bookmark } from 'lucide-react'

export default function BuddiesApp() {
  const pathname = usePathname()
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set())
  const [savedPosts, setSavedPosts] = useState<Set<number>>(new Set())

  const toggleLike = (postId: number) => {
    const newLiked = new Set(likedPosts)
    if (newLiked.has(postId)) {
      newLiked.delete(postId)
    } else {
      newLiked.add(postId)
    }
    setLikedPosts(newLiked)
  }

  const toggleSave = (postId: number) => {
    const newSaved = new Set(savedPosts)
    if (newSaved.has(postId)) {
      newSaved.delete(postId)
    } else {
      newSaved.add(postId)
    }
    setSavedPosts(newSaved)
  }

  const posts = [
    {
      id: 1,
      username: 'annarodriguez',
      location: 'Key Largo, FL',
      time: '45m',
      distance: '18 meters',
      video: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250905_2101_Graceful%20Sea%20Turtle_simple_compose_01k4e8nmmcfs7v2cttpyjh7mzs-JOKiCwbn4DdaPBdwjpKErEyp97hxcD.mp4',
      likes: 4,
      caption: 'Close encounter with a beautiful sea turtle this morning. She was so graceful!',
      avatar: '/female-diver-with-mask.jpg'
    },
    {
      id: 2,
      username: 'alexhaydes',
      location: 'Key Biscayne, FL',
      time: '2d ago',
      distance: '20 meters',
      video: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250905_2109_Graceful%20Jellyfish%20Ballet_simple_compose_01k4e93nh6f72v7cb5f9qpfrya-GmMqDrFOb2iTB1f4xPHEOl0IqYny5K.mp4',
      likes: 8,
      caption: 'Went for a dive with @marcusjohnson over the weekend. Lots of colorful reefs everywhere!',
      avatar: '/male-diver-with-gear.jpg'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="relative w-full max-w-md h-[844px] bg-gradient-to-br from-[#012137] via-[#018AE6] via-[#038190] to-[#F9F2EA] rounded-[3rem] overflow-hidden shadow-2xl">
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

        <main className="h-[calc(100%-140px)] overflow-y-auto px-4 py-8 pb-24 space-y-8">
          {posts.map((post, index) => (
            <article 
              key={post.id} 
              className="bg-white rounded-[32px] overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-1"
              style={{
                animation: `fade-in-up 0.6s ease-out ${index * 0.15}s both`
              }}
            >
              <div className="p-5 flex items-center justify-between">
                <Link 
                  href={`/buddies/profile/${post.username}`} 
                  className="flex items-center gap-4 hover:opacity-90 transition-opacity group"
                >
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1b6ea1] via-[#2d9ccc] to-[#4ec9f5] p-[3px] group-hover:scale-105 transition-transform">
                      <div className="w-full h-full rounded-full overflow-hidden bg-white">
                        <img 
                          src={post.avatar || "/placeholder.svg"} 
                          alt={post.username} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 group-hover:text-[#1b6ea1] transition-colors">
                      @{post.username}
                    </h3>
                    <div className="flex items-center gap-1.5 text-gray-600 text-sm">
                      <MapPin className="w-4 h-4 text-[#ff6b6b]" />
                      <span className="font-medium">{post.location}</span>
                    </div>
                    <p className="text-gray-500 text-sm mt-0.5">
                      {post.time} • {post.distance}
                    </p>
                  </div>
                </Link>
                <button className="p-2.5 hover:bg-gray-100 rounded-full transition-all hover:scale-110 active:scale-95">
                  <MoreVertical className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              <div className="relative aspect-square bg-gradient-to-br from-blue-400 to-cyan-600 overflow-hidden">
                <video 
                  src={post.video}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>

              <div className="p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    <button 
                      onClick={() => toggleLike(post.id)}
                      className="hover:scale-110 active:scale-95 transition-all duration-200"
                    >
                      <Heart 
                        className={`w-8 h-8 ${likedPosts.has(post.id) ? 'fill-red-500 text-red-500 animate-pulse' : 'text-gray-800'}`}
                      />
                    </button>
                    <button className="hover:scale-110 active:scale-95 transition-all duration-200">
                      <MessageCircle className="w-8 h-8 text-gray-800" />
                    </button>
                  </div>
                  <button 
                    onClick={() => toggleSave(post.id)}
                    className="hover:scale-110 active:scale-95 transition-all duration-200"
                  >
                    <Bookmark 
                      className={`w-7 h-7 ${savedPosts.has(post.id) ? 'fill-gray-800 text-gray-800' : 'text-gray-800'}`}
                    />
                  </button>
                </div>
                
                <div className="space-y-2">
                  <p className="font-bold text-gray-900 text-[15px]">
                    {likedPosts.has(post.id) ? post.likes + 1 : post.likes} likes
                  </p>
                  <p className="text-gray-800 text-[15px] leading-relaxed">
                    <span className="font-bold">@{post.username}</span>{' '}
                    <span className="text-gray-700">{post.caption}</span>
                  </p>
                </div>
              </div>
            </article>
          ))}
        </main>

        <nav className="absolute bottom-4 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-2xl">
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
