import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: '**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    description: {
      type: 'string',
      description: 'The description of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    slug: {
      type: 'string',
      description: 'The slug of the post',
      required: true,
    },
    image: {
      type: 'string',
      description: 'The image URL of the post',
      required: false,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post: any) => `/braindump/${post.slug}`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'content/posts',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})
