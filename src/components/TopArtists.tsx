'use client'

import { useEffect, useState } from 'react'

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

export default function TopArtists() {
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
          {[...Array(5)].map((_, i) => (
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
        {topArtists.slice(0, 5).map((artist) => (
          <a
            key={artist.id}
            href={artist.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 p-3 bg-neutral-900/50 rounded-lg hover:bg-neutral-800/50 transition-colors cursor-pointer"
          >
            <img
              src={artist.images[0]?.url}
              alt={artist.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-medium truncate">{artist.name}</h3>
              <p className="text-sm text-muted-foreground truncate">
                {artist.followers
                  ? `${artist.followers.total.toLocaleString()} followers`
                  : 'Artist'}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
