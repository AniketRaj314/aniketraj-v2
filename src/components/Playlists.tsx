'use client'

import { useEffect, useState } from 'react'
import PlaylistsGrid from './PlaylistsGrid'
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

export default function Playlists() {
  const [playlists, setPlaylists] = useState<Playlist[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

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

  return <PlaylistsGrid playlists={pinnedPlaylists} />
}
