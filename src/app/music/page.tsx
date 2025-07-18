'use client'

import { useState } from 'react'
import NowPlayingCard from '../../components/NowPlayingCard'
import TopArtists from '../../components/TopArtists'
import TopTracks from '../../components/TopTracks'
import RecentlyPlayed from '../../components/RecentlyPlayed'
import Modal from '../../components/Modal'
import Navbar from '../../components/Navbar'

export const dynamic = 'force-dynamic'

export default function MusicPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-10 space-y-12 mt-20">
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
                onClick={() => setIsModalOpen(true)}
                className="text-neutral-400 hover:text-white transition-colors p-2 hover:bg-neutral-800 rounded-md"
                title="View more tracks"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                  />
                </svg>
              </button>
            </div>
            <RecentlyPlayed tracksToShow={5} />
          </div>
        </section>

        {/* Top Tracks */}
        <section>
          <h2 className="text-2xl font-heading mb-4">TOP TRACKS</h2>
          <TopTracks />
        </section>

        {/* Top Artists */}
        <section>
          <h2 className="text-2xl font-heading mb-4">TOP ARTISTS</h2>
          <TopArtists />
        </section>
      </div>

      {/* Modal for expanded recently played tracks */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="RECENTLY PLAYED TRACKS"
      >
        <RecentlyPlayed tracksToShow={10} />
      </Modal>
    </>
  )
}
