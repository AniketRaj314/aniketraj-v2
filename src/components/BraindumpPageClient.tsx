'use client'

import Link from 'next/link'
import Navbar from './Navbar'
import { motion } from 'framer-motion'
import ImageLoader from './ImageLoader'

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-3xl md:text-5xl"
          >
            BRAINDUMP
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-neutral-400 max-w-4xl leading-relaxed"
          >
            Started as a random thought dump, now it&apos;s basically my personality in blog form. 
            <br />
            If you wanna know what I&apos;m like or what goes on in my head, this page does a better job than I ever could.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.05,
                ease: "easeOut"
              }}
            >
              <Link href={`/braindump/${post.slug}`} className="group block">
                <div className="border border-neutral-700 rounded-2xl overflow-hidden hover:border-neutral-500 transition-colors">
                  {post.image && (
                    <div className="relative w-full aspect-[16/9] overflow-hidden">
                      <ImageLoader
                        src={post.image}
                        alt={post.title}
                        fill
                        context="grid"
                        loading="lazy"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  )
}
