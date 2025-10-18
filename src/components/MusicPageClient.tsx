'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import NowPlayingCard from './NowPlayingCard'
import TopArtists from './TopArtists'
import TopTracks from './TopTracks'
import RecentlyPlayed from './RecentlyPlayed'
import Modal from './Modal'
import Navbar from './Navbar'
import Playlists from './Playlists'

export default function MusicPageClient() {
  const [isRecentlyPlayedModalOpen, setIsRecentlyPlayedModalOpen] = useState(false)
  const [isTopTracksModalOpen, setIsTopTracksModalOpen] = useState(false)
  const [isTopArtistsModalOpen, setIsTopArtistsModalOpen] = useState(false)

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-10 space-y-12 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-3xl md:text-5xl mb-8"
          >
            MUSIC
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-400"
          >
            If you're gonna ask me about my music taste, might as well see the receipts. <br />
            This page pulls live data from my Spotify; what I'm playing now, what I just heard, and
            who's on repeat.
            <br />
            <br />
            No lies, no curated playlists. Just raw, unfiltered vibes.
          </motion.p>
        </motion.div>
        <motion.hr
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
        {/* Now Playing and Last 5 Tracks */}
        <motion.section
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
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
                <img src="/icons/expand.svg" alt="View more tracks" className="w-5 h-5" />
              </button>
            </div>
            <RecentlyPlayed tracksToShow={5} />
          </div>
        </motion.section>
        <motion.hr
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        />
        {/* Top Tracks and Top Artists Side by Side */}
        <motion.section
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-heading">TOP TRACKS</h2>
              <button
                onClick={() => setIsTopTracksModalOpen(true)}
                className="text-neutral-400 hover:text-white transition-colors p-2 hover:bg-neutral-800 rounded-md"
                title="View more tracks"
              >
                <img src="/icons/expand.svg" alt="View more tracks" className="w-5 h-5" />
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
                <img src="/icons/expand.svg" alt="View more artists" className="w-5 h-5" />
              </button>
            </div>
            <TopArtists artistsToShow={5} />
          </div>
        </motion.section>

        <motion.hr
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        />

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-heading">TOP PLAYLISTS</h2>
          </div>
          <Playlists />
        </motion.section>
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
