'use client'

import { useEffect, useState } from 'react'
import MediaItem from './MediaItem'

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

interface RecentlyPlayedProps {
  tracksToShow?: number
}

export default function RecentlyPlayed({ tracksToShow = 5 }: RecentlyPlayedProps) {
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
          {[...Array(tracksToShow)].map((_, i) => (
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
        {recentlyPlayed.slice(0, tracksToShow).map((item, index) => (
          <MediaItem
            key={`${item.track.id}-${index}`}
            image={item.track.album.images[0]?.url}
            title={item.track.name}
            subtext={item.track.artists.map((artist) => artist.name).join(', ')}
            href={item.track.external_urls.spotify}
            imageShape="square"
          />
        ))}
      </div>
    </div>
  )
}
