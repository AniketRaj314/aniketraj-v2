import { getAllPosts } from '../../../lib/getPosts'
import BraindumpPageClient from '../../components/BraindumpPageClient'

export const metadata = {
  title: 'Braindump – Aniket Raj',
  description: 'Essays, thoughts, and reviews by Aniket Raj.',
  openGraph: {
    title: 'Braindump – Aniket Raj',
    description: 'Essays, thoughts, and reviews by Aniket Raj.',
    images: ['/metadata/braindump.png'],
  },
}

export default function BraindumpPage() {
  const posts = getAllPosts()
  return <BraindumpPageClient posts={posts} />
}
