'use client'

import { useEffect, useState } from 'react'

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

export default function TopTracks() {
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="space-y-2 animate-pulse">
            <div className="w-full h-48 bg-neutral-800 rounded-md"></div>
            <div className="space-y-1">
              <div className="h-4 bg-neutral-800 rounded w-3/4"></div>
              <div className="h-3 bg-neutral-800 rounded w-1/2"></div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {topTracks.map((track) => (
        <a
          key={track.id}
          href={track.external_urls.spotify}
          target="_blank"
          rel="noopener noreferrer"
          className="group space-y-2 transition-transform hover:scale-105"
        >
          <img
            src={track.album.images[0]?.url}
            alt={track.name}
            className="w-full h-auto rounded-md object-cover"
          />
          <div>
            <p className="font-medium text-white group-hover:text-green-400 transition-colors truncate">
              {track.name}
            </p>
            <p className="text-sm text-muted-foreground truncate">
              {track.artists.map((artist) => artist.name).join(', ')}
            </p>
          </div>
        </a>
      ))}
    </div>
  )
}
