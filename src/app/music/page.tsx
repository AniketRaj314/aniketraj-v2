import { getTopTracks } from '../../../lib/spotify'
import NowPlayingCard from '../../components/NowPlayingCard'
import TopArtists from '../../components/TopArtists'
import RecentlyPlayed from '../../components/RecentlyPlayed'
import Navbar from '../../components/Navbar'

export const dynamic = 'force-dynamic'

export default async function MusicPage() {
  const [topTracks] = await Promise.all([getTopTracks()])

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
            <h2 className="text-2xl font-heading mb-4">LAST 5 TRACKS</h2>
            <RecentlyPlayed />
          </div>
        </section>

        {/* Top Tracks */}
        <section>
          <h2 className="text-2xl font-heading mb-4">TOP TRACKS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {topTracks.items.map((track: any) => (
              <div key={track.id} className="space-y-2">
                <img
                  src={track.album.images[0].url}
                  alt={track.name}
                  className="w-full h-auto rounded-md"
                />
                <div>
                  <p className="font-medium">{track.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {track.artists.map((a: any) => a.name).join(', ')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Top Artists */}
        <section>
          <h2 className="text-2xl font-heading mb-4">TOP ARTISTS</h2>
          <TopArtists />
        </section>
      </div>
    </>
  )
}
