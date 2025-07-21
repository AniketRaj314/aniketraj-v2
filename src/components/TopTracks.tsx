'use client'

import { useEffect, useState } from 'react'
import MediaItem from './MediaItem'

interface TopTrack {
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

interface TopTracksProps {
  tracksToShow?: number
}

export default function TopTracks({ tracksToShow = 5 }: TopTracksProps) {
  const [topTracks, setTopTracks] = useState<TopTrack[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTopTracks = async () => {
      try {
        const response = await fetch('/api/spotify/top-tracks')
        const data = await response.json()
        setTopTracks(data.items || [])
      } catch (error) {
        console.error('Failed to fetch top tracks:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchTopTracks()
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
        {topTracks.slice(0, tracksToShow).map((track) => (
          <MediaItem
            key={track.id}
            image={track.album.images[0]?.url}
            title={track.name}
            subtext={track.artists.map((artist) => artist.name).join(', ')}
            href={track.external_urls.spotify}
            imageShape="square"
          />
        ))}
      </div>
    </div>
  )
}
