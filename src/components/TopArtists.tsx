'use client'

import { useEffect, useState } from 'react'
import MediaItem from './MediaItem'

interface Artist {
  id: string
  name: string
  images: Array<{ url: string }>
  external_urls: {
    spotify: string
  }
  followers?: {
    total: number
  }
}

interface TopArtistsProps {
  artistsToShow?: number
}

export default function TopArtists({ artistsToShow = 5 }: TopArtistsProps) {
  const [topArtists, setTopArtists] = useState<Artist[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTopArtists = async () => {
      try {
        const response = await fetch('/api/spotify/top-artists')
        const data = await response.json()
        setTopArtists(data.items || [])
      } catch (error) {
        console.error('Failed to fetch top artists:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchTopArtists()
  }, [])

  if (loading) {
    return (
      <div className="space-y-4">
        <div className="space-y-3">
          {[...Array(artistsToShow)].map((_, i) => (
            <div key={i} className="flex items-center space-x-3 animate-pulse">
              <div className="w-12 h-12 bg-neutral-800 rounded-full"></div>
              <div className="flex-1 space-y-1">
                <div className="h-4 bg-neutral-800 rounded w-3/4"></div>
                <div className="h-3 bg-neutral-800 rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="space-y-3">
        {topArtists.slice(0, artistsToShow).map((artist) => (
          <MediaItem
            key={artist.id}
            image={artist.images[0]?.url}
            title={artist.name}
            subtext={
              artist.followers ? `${artist.followers.total.toLocaleString()} followers` : 'Artist'
            }
            href={artist.external_urls.spotify}
            imageShape="round"
          />
        ))}
      </div>
    </div>
  )
}
