'use client'

import { useEffect, useState } from 'react'
import MediaItem from './MediaItem'
import PlaylistsGrid from './PlaylistsGrid'

export type Playlist = {
  name: string
  images: { url: string }[]
  external_url: string
  tracks_total: number
  owner_display_name: string
}

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false)
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])
  return isDesktop
}

export default function Playlists() {
  const [playlists, setPlaylists] = useState<Playlist[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const isDesktop = useIsDesktop()

  useEffect(() => {
    fetch('/api/spotify/playlists')
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error)
        } else {
          setPlaylists(data.playlists || [])
        }
        setLoading(false)
      })
      .catch((err) => {
        setError('Failed to fetch playlists.')
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <div className="text-neutral-400">Loading playlists...</div>
  }
  if (error) {
    return <div className="text-red-400">{error}</div>
  }
  if (!playlists.length) {
    return <div className="text-neutral-400">No playlists found.</div>
  }

  if (isDesktop) {
    return <PlaylistsGrid playlists={playlists} />
  }

  // Mobile list view
  return (
    <section>
      <h2 className="text-2xl font-heading mb-6">SPOTIFY PLAYLISTS</h2>
      <div className="flex flex-col gap-3">
        {playlists.map((playlist) => (
          <MediaItem
            key={playlist.external_url}
            image={playlist.images?.[0]?.url || '/metadata/music.png'}
            title={playlist.name}
            subtext={`by ${playlist.owner_display_name || 'Unknown'} • ${playlist.tracks_total} tracks`}
            href={playlist.external_url}
            imageShape="square"
          />
        ))}
      </div>
    </section>
  )
}
