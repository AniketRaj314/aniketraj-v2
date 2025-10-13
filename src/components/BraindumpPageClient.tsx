'use client'

import Link from 'next/link'
import Navbar from './Navbar'
import Image from 'next/image'

interface Post {
  slug: string
  title: string
  date: string
  description: string
  image?: string
  readTime?: string
}

export default function BraindumpPageClient({ posts }: { posts: Post[] }) {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-10 pt-32">
        <h1 className="font-heading text-3xl md:text-5xl">BRAINDUMP</h1>
        <p className="mt-4 text-neutral-300 max-w-2xl leading-relaxed">
          Essays, thoughts, and reviews I write for fun and clarity. A small
          collection of things I want to remember, and a few I might want to
          revisit.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.slug} href={`/braindump/${post.slug}`} className="group block">
              <div className="border border-neutral-700 rounded-2xl overflow-hidden hover:border-neutral-500 transition-colors">
                {post.image && (
                  <div className="relative w-full aspect-[16/9]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover"
                      priority={false}
                    />
                  </div>
                )}
                <div className="border-t border-dotted border-neutral-700" />
                <div className="p-5 space-y-2">
                  <h2 className="font-heading text-lg group-hover:underline">
                    {post.title.toUpperCase()}
                  </h2>
                  <p className="text-sm text-neutral-400">
                    {new Date(post.date).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                    {post.readTime && <span className="mx-2">•</span>}
                    {post.readTime}
                  </p>
                  <p className="text-sm font-body text-neutral-300 line-clamp-2">
                    {post.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
