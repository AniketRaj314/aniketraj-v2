export const metadata = {
  title: 'Music – Aniket Raj',
  description:
    'See what Aniket Raj is listening to right now. Live Spotify data, top tracks, and artists.',
  openGraph: {
    title: 'Music – Aniket Raj',
    description:
      'See what Aniket Raj is listening to right now. Live Spotify data, top tracks, and artists.',
    images: ['/aniket-raj-profile.png'],
  },
}

import MusicPageClient from '../../components/MusicPageClient'

export default function MusicPage() {
  return <MusicPageClient />
}
