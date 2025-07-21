'use client'

import { useState } from 'react'
import NowPlayingCard from './NowPlayingCard'
import TopArtists from './TopArtists'
import TopTracks from './TopTracks'
import RecentlyPlayed from './RecentlyPlayed'
import Modal from './Modal'
import Navbar from './Navbar'
import ExpandIcon from './ExpandIcon'

export default function MusicPageClient() {
  const [isRecentlyPlayedModalOpen, setIsRecentlyPlayedModalOpen] = useState(false)
  const [isTopTracksModalOpen, setIsTopTracksModalOpen] = useState(false)
  const [isTopArtistsModalOpen, setIsTopArtistsModalOpen] = useState(false)

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-10 space-y-12 mt-20">
        <h1 className="font-heading text-3xl md:text-5xl mb-8">MUSIC</h1>
        <p className="text-neutral-400">
          If you're gonna ask me about my music taste, might as well see the receipts. <br />
          This page pulls live data from my Spotify; what I'm playing now, what I just heard, and
          who's on repeat.
          <br />
          <br />
          No lies, no curated playlists. Just raw, unfiltered vibes.
        </p>
        <hr />
        {/* Now Playing and Last 5 Tracks */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-heading mb-4">NOW PLAYING</h2>
            <NowPlayingCard />
          </div>
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-heading">LAST 5 TRACKS</h2>
              <button
                onClick={() => setIsRecentlyPlayedModalOpen(true)}
                className="text-neutral-400 hover:text-white transition-colors p-2 hover:bg-neutral-800 rounded-md"
                title="View more tracks"
              >
                <ExpandIcon title="View more tracks" />
              </button>
            </div>
            <RecentlyPlayed tracksToShow={5} />
          </div>
        </section>
        <hr />
        {/* Top Tracks and Top Artists Side by Side */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-heading">TOP TRACKS</h2>
              <button
                onClick={() => setIsTopTracksModalOpen(true)}
                className="text-neutral-400 hover:text-white transition-colors p-2 hover:bg-neutral-800 rounded-md"
                title="View more tracks"
              >
                <ExpandIcon title="View more tracks" />
              </button>
            </div>
            <TopTracks tracksToShow={5} />
          </div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-heading">TOP ARTISTS</h2>
              <button
                onClick={() => setIsTopArtistsModalOpen(true)}
                className="text-neutral-400 hover:text-white transition-colors p-2 hover:bg-neutral-800 rounded-md"
                title="View more artists"
              >
                <ExpandIcon title="View more artists" />
              </button>
            </div>
            <TopArtists artistsToShow={5} />
          </div>
        </section>
      </div>

      {/* Modal for expanded recently played tracks */}
      <Modal
        isOpen={isRecentlyPlayedModalOpen}
        onClose={() => setIsRecentlyPlayedModalOpen(false)}
        title="RECENTLY PLAYED TRACKS"
      >
        <RecentlyPlayed tracksToShow={20} />
      </Modal>

      {/* Modal for expanded top tracks */}
      <Modal
        isOpen={isTopTracksModalOpen}
        onClose={() => setIsTopTracksModalOpen(false)}
        title="TOP TRACKS"
      >
        <TopTracks tracksToShow={20} />
      </Modal>

      {/* Modal for expanded top artists */}
      <Modal
        isOpen={isTopArtistsModalOpen}
        onClose={() => setIsTopArtistsModalOpen(false)}
        title="TOP ARTISTS"
      >
        <TopArtists artistsToShow={20} />
      </Modal>
    </>
  )
}
