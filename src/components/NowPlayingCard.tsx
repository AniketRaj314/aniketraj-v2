'use client'

import { useEffect, useState, useRef } from 'react'

interface CurrentlyPlaying {
  isPlaying?: boolean
  item?: {
    name: string
    artists: Array<{ name: string }>
    album: {
      name: string
      images: Array<{ url: string }>
    }
  }
}

export default function NowPlayingCard() {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<CurrentlyPlaying | null>(null)
  const [loading, setLoading] = useState(true)
  const [shouldMarquee, setShouldMarquee] = useState(false)
  const textRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const fetchCurrentlyPlaying = async () => {
      try {
        const response = await fetch('/api/spotify/currently-playing')
        const data = await response.json()
        setCurrentlyPlaying(data)
      } catch (error) {
        console.error('Failed to fetch currently playing:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCurrentlyPlaying()
  }, [])

  useEffect(() => {
    if (textRef.current) {
      const element = textRef.current
      const isOverflowing = element.scrollWidth > element.clientWidth
      setShouldMarquee(isOverflowing)
    }
  }, [currentlyPlaying])

  if (loading) {
    return (
      <div className="bg-neutral-900 rounded-2xl shadow-lg overflow-hidden p-4 w-60 h-60 flex flex-col">
        <div className="animate-pulse">
          <div className="flex items-start justify-between mb-4">
            <div className="w-28 h-28 bg-neutral-800 rounded-md"></div>
            <div className="w-8 h-8 bg-neutral-800 rounded"></div>
          </div>
          <div className="space-y-2">
            <div className="h-6 bg-neutral-800 rounded w-3/4"></div>
            <div className="h-4 bg-neutral-800 rounded w-1/2"></div>
          </div>
          <div className="mt-auto pt-4">
            <div className="h-1 bg-neutral-800 rounded w-full"></div>
          </div>
        </div>
      </div>
    )
  }

  if (!currentlyPlaying || currentlyPlaying.isPlaying === false || !currentlyPlaying.item) {
    return (
      <div className="bg-neutral-900 rounded-2xl shadow-lg overflow-hidden p-4 w-60 h-60 flex items-center justify-center">
        <p className="text-white text-lg italic">Taking five until the next beat...</p>
      </div>
    )
  }

  return (
    <div className="bg-neutral-900 rounded-2xl shadow-lg overflow-hidden p-4 w-60 h-60 flex flex-col justify-between">
      {/* Top section with album art and Spotify logo */}
      <div className="flex items-start justify-between">
        {/* Album Cover */}
        <img
          src={currentlyPlaying.item.album.images[0]?.url}
          alt={currentlyPlaying.item.name}
          className="w-28 h-28 rounded-md object-cover"
        />

        {/* Spotify Logo */}
        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
        </svg>
      </div>

      {/* Track Info */}
      <div className="space-y-1 overflow-hidden">
        <h3 className="text-white text-lg font-semibold truncate">{currentlyPlaying.item.name}</h3>
        <p
          ref={textRef}
          className={`text-white text-sm opacity-80 whitespace-nowrap ${shouldMarquee ? 'animate-marquee' : ''}`}
        >
          {currentlyPlaying.item.artists.map((artist) => artist.name).join(', ')} -{' '}
          {currentlyPlaying.item.album.name}
        </p>
      </div>

      {/* Progress Bar */}
      <div className="pt-2">
        <div className="h-1 bg-neutral-800 rounded-full w-full">
          <div className="h-1 bg-white rounded-full w-1/3"></div>
        </div>
      </div>
    </div>
  )
}
