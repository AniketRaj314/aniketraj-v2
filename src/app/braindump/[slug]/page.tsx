import { notFound } from 'next/navigation'
import { getPostBySlug } from '../../../../lib/getPosts'
import Image from 'next/image'
import Link from 'next/link'
import MDXRenderer from '../../../components/MDXRenderer'
import Navbar from '../../../components/Navbar'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'No post found for this slug.',
    }
  }
  return {
    title: post.title,
    description: post.description || post.title,
    openGraph: {
      title: post.title,
      description: post.description || post.title,
      images: post.image ? [post.image] : '/aniket-raj-profile.png',
    },
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return notFound()

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 py-10 space-y-8 mt-10">
        <Link href="/braindump" className="text-sm text-neutral-500 hover:underline">
          ← back to all posts
        </Link>
        <div className="space-y-4">
          <h1 className="font-heading text-3xl md:text-5xl">{post.title.toUpperCase()}</h1>
          {post.description && (
            <p className="text-lg text-neutral-300 leading-relaxed max-w-2xl">{post.description}</p>
          )}
          <p className="text-sm text-neutral-400">
            {new Date(post.date).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
            {post.readTime && (
              <>
                <span className="mx-2">•</span>
                {post.readTime}
              </>
            )}
          </p>
        </div>
        {post.image && (
          <div className="my-6 flex justify-center">
            <Image
              src={post.image}
              alt=""
              width={500}
              height={300}
              className="rounded-2xl max-w-[90vw] max-h-[350px] object-cover border border-neutral-800"
            />
          </div>
        )}
        <article className="prose prose-invert font-body max-w-none">
          <MDXRenderer code={post.content} />
        </article>
      </div>
    </>
  )
}
