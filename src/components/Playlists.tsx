'use client'

import { useEffect, useState } from 'react'
import PlaylistsGrid from './PlaylistsGrid'
import MediaItem from './MediaItem'
import { PINNED_PLAYLIST_IDS } from '../constants/pinnedPlaylists'

export type Playlist = {
  name: string
  images: { url: string }[]
  external_url: string
  tracks_total: number
  owner_display_name: string
}

function getPlaylistId(url: string) {
  const match = url.match(/playlist\/([a-zA-Z0-9]+)/)
  return match ? match[1] : null
}

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false)
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024)
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
        if (data.error) setError(data.error)
        else setPlaylists(data.playlists || [])
        setLoading(false)
      })
      .catch(() => {
        setError('Failed to fetch playlists.')
        setLoading(false)
      })
  }, [])

  if (loading) return <div className="text-neutral-400">Loading playlists...</div>
  if (error) return <div className="text-red-400">{error}</div>

  // Filter and order playlists by pinned IDs
  const pinnedPlaylists = PINNED_PLAYLIST_IDS.map((id) =>
    playlists.find((playlist) => getPlaylistId(playlist.external_url) === id)
  ).filter(Boolean) as Playlist[]

  if (!pinnedPlaylists.length) {
    return <div className="text-neutral-400">No pinned playlists found.</div>
  }

  if (isDesktop) {
    return <PlaylistsGrid playlists={pinnedPlaylists} />
  }

  // Mobile: show as a vertical list using MediaItem
  return (
    <div className="flex flex-col gap-3">
      {pinnedPlaylists.map((playlist) => (
        <MediaItem
          key={playlist.external_url}
          image={playlist.images?.[0]?.url || '/metadata/music.png'}
          title={playlist.name}
          subtext={`${playlist.tracks_total} tracks`}
          href={playlist.external_url}
          imageShape="square"
        />
      ))}
    </div>
  )
}
