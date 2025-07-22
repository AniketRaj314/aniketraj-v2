import { Playlist } from './Playlists'
import MediaItem from './MediaItem'

export default function PlaylistsGrid({ playlists }: { playlists: Playlist[] }) {
  return (
    <section>
      <h2 className="text-2xl font-heading mb-6">SPOTIFY PLAYLISTS</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {playlists.map((playlist) => (
          <a
            key={playlist.external_url}
            href={playlist.external_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-start transition-transform duration-150 hover:scale-105 hover:shadow-lg focus:outline-none"
          >
            <img
              src={playlist.images?.[0]?.url || '/metadata/music.png'}
              alt={playlist.name}
              className="w-32 h-32 object-cover rounded-lg mb-2 shadow-md"
            />
            <div className="text-left w-32">
              <div className="font-semibold text-base truncate" title={playlist.name}>
                {playlist.name}
              </div>
              <div className="text-neutral-400 text-sm">{playlist.tracks_total} tracks</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
