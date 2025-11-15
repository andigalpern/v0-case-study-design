'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Heart, MessageCircle, MapPin, MoreVertical, MessageSquare, Home, Star, Camera, User } from 'lucide-react'

export default function BuddiesApp() {
  const [activeTab, setActiveTab] = useState('home')
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set())

  const toggleLike = (postId: number) => {
    const newLiked = new Set(likedPosts)
    if (newLiked.has(postId)) {
      newLiked.delete(postId)
    } else {
      newLiked.add(postId)
    }
    setLikedPosts(newLiked)
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
    <div className="relative min-h-screen bg-gradient-to-b from-[#1b6ea1] to-[#2d9ccc] pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#1b6ea1] px-6 py-4 flex items-center justify-between">
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

      {/* Feed */}
      <main className="px-4 py-6 space-y-6 animate-fade-in-up">
        {posts.map((post, index) => (
          <article 
            key={post.id} 
            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            style={{
              animation: `fade-in-up 0.5s ease-out ${index * 0.1}s both`
            }}
          >
            {/* Post Header */}
            <div className="p-4 flex items-center justify-between">
              <Link href={`/buddies/profile/${post.username}`} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 overflow-hidden">
                  <img src={post.avatar || "/placeholder.svg"} alt={post.username} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">@{post.username}</h3>
                  <div className="flex items-center gap-1 text-gray-600 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{post.location}</span>
                  </div>
                  <p className="text-gray-500 text-sm">
                    {post.time} • {post.distance}
                  </p>
                </div>
              </Link>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <MoreVertical className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Post Video */}
            <div className="relative aspect-square bg-gradient-to-b from-blue-400 to-blue-600 overflow-hidden">
              <video 
                src={post.video}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                onLoadedMetadata={(e) => {
                  const video = e.target as HTMLVideoElement
                  video.play().catch(err => console.log('[v0] Video autoplay blocked:', err))
                }}
              />
            </div>

            {/* Post Footer */}
            <div className="p-4 space-y-3">
              <p className="font-semibold">{likedPosts.has(post.id) ? post.likes + 1 : post.likes} likes</p>
              <p className="text-gray-800">
                <span className="font-bold">@{post.username}</span> {post.caption}
              </p>
              <div className="flex items-center gap-4 pt-2">
                <button 
                  onClick={() => toggleLike(post.id)}
                  className="hover:scale-110 active:scale-95 transition-transform"
                >
                  <Heart 
                    className={`w-8 h-8 ${likedPosts.has(post.id) ? 'fill-red-500 text-red-500' : 'text-gray-800'}`}
                  />
                </button>
                <button className="hover:scale-110 active:scale-95 transition-transform">
                  <MessageCircle className="w-8 h-8 text-gray-800" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </main>

      {/* Bottom Navigation */}
      <nav className="buddies-bottom-nav bg-white/90 backdrop-blur-md border-t border-gray-200 px-6 py-3">
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
