"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface GalleryImage {
  src: string
  alt: string
  title: string
}

interface ImageGalleryCarouselProps {
  images: GalleryImage[]
  autoPlayInterval?: number
}

export function ImageGalleryCarousel({ images, autoPlayInterval = 4000 }: ImageGalleryCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [isAutoPlaying, images.length, autoPlayInterval])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    // Resume auto-play after 10 seconds of user interaction
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <div className="space-y-6">
      {/* Main Image Display */}
      <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200/60">
        <Image
          src={images[currentIndex].src || "/placeholder.svg"}
          alt={images[currentIndex].alt}
          fill
          className="object-contain p-4"
          priority
        />
        
        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border border-purple-200 flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-200 shadow-lg"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6 text-purple-700" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border border-purple-200 flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-200 shadow-lg"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6 text-purple-700" />
        </button>

        {/* Image Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
          <h3 className="text-white font-semibold text-lg">{images[currentIndex].title}</h3>
        </div>

        {/* Auto-play indicator */}
        {isAutoPlaying && (
          <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-purple-200 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
            <span className="text-xs font-medium text-purple-700">Auto-play</span>
          </div>
        )}
      </div>

      {/* Thumbnail Navigation */}
      <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative aspect-[16/9] rounded-lg overflow-hidden border-2 transition-all duration-300 hover:scale-105 ${
              currentIndex === index
                ? 'border-purple-600 shadow-lg shadow-purple-500/30'
                : 'border-purple-200/60 hover:border-purple-400'
            }`}
            aria-label={`View ${image.title}`}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover"
            />
            {currentIndex === index && (
              <div className="absolute inset-0 bg-purple-600/20 backdrop-blur-[1px]" />
            )}
          </button>
        ))}
      </div>

      {/* Progress Indicator */}
      <div className="flex items-center justify-center gap-2">
        <span className="text-sm font-medium text-purple-700">
          {currentIndex + 1} / {images.length}
        </span>
      </div>
    </div>
  )
}
