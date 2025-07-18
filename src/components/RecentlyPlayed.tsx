'use client'

import { useEffect, useState } from 'react'

interface RecentlyPlayedTrack {
  track: {
    id: string
    name: string
    artists: Array<{ name: string }>
    album: {
      name: string
      images: Array<{ url: string }>
    }
    external_urls: {
      spotify: string
    }
  }
  played_at: string
}

export default function RecentlyPlayed() {
  const [recentlyPlayed, setRecentlyPlayed] = useState<RecentlyPlayedTrack[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRecentlyPlayed = async () => {
      try {
        const response = await fetch('/api/spotify/recently-played')
        const data = await response.json()
        setRecentlyPlayed(data.items || [])
      } catch (error) {
        console.error('Failed to fetch recently played:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchRecentlyPlayed()
  }, [])

  if (loading) {
    return (
      <div className="space-y-4">
        <div className="space-y-3">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center space-x-3 animate-pulse">
              <div className="w-12 h-12 bg-neutral-800 rounded-md"></div>
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
        {recentlyPlayed.slice(0, 5).map((item, index) => (
          <a
            key={`${item.track.id}-${index}`}
            href={item.track.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 p-3 bg-neutral-900/50 rounded-lg hover:bg-neutral-800/50 transition-colors cursor-pointer"
          >
            <img
              src={item.track.album.images[0]?.url}
              alt={item.track.name}
              className="w-12 h-12 rounded-md object-cover"
            />
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-medium truncate">{item.track.name}</h3>
              <p className="text-sm text-muted-foreground truncate">
                {item.track.artists.map((artist) => artist.name).join(', ')}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
