import { notFound } from 'next/navigation'
import { getPostBySlug } from '../../../../lib/getPosts'
import Image from 'next/image'
import Link from 'next/link'
import MDXRenderer from '../../../components/MDXRenderer'

interface Props {
  params: { slug: string }
}

export default function PostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) return notFound()

  return (
    <div className="max-w-3xl mx-auto px-6 py-10 space-y-8">
      <Link href="/braindump" className="text-sm text-neutral-500 hover:underline">
        ← back to all posts
      </Link>
      <h1 className="font-heading text-3xl md:text-5xl">{post.title}</h1>
      <p className="text-sm text-neutral-400">
        {new Date(post.date).toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })}
      </p>
      {post.image && (
        <div className="my-6">
          <Image
            src={post.image}
            alt=""
            width={800}
            height={400}
            className="rounded-2xl w-full object-cover border border-neutral-800"
          />
        </div>
      )}
      <article className="prose prose-invert font-body max-w-none">
        <MDXRenderer code={post.content} />
      </article>
    </div>
  )
}
