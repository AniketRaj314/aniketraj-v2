import Link from 'next/link'
import { getAllPosts } from '../../../lib/getPosts'

export default function BraindumpPage() {
  const posts = getAllPosts()

  return (
    <div className="max-w-3xl mx-auto px-6 py-10 space-y-10">
      <h1 className="font-heading text-3xl md:text-5xl mb-8">BRAINDUMP</h1>
      {posts.map((post) => (
        <Link key={post.slug} href={`/braindump/${post.slug}`}>
          <div className="border border-neutral-700 rounded-2xl p-6 hover:bg-neutral-900 transition-colors cursor-pointer space-y-2">
            <h2 className="font-heading text-xl">{post.title.toUpperCase()}</h2>
            <p className="text-sm text-neutral-400">
              {new Date(post.date).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </p>
            <p className="text-base font-body text-neutral-300">{post.description}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
