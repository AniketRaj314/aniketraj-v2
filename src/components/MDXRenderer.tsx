'use client'
import { useEffect, useState } from 'react'
import { MDXProvider } from '@mdx-js/react'
import * as runtime from 'react/jsx-runtime'
import { evaluate } from '@mdx-js/mdx'
import remarkGfm from 'remark-gfm'

export default function MDXRenderer({ code }: { code: string }) {
  const [MDXComponent, setMDXComponent] = useState<React.ComponentType | null>(null)

  useEffect(() => {
    ;(async () => {
      const { default: Comp } = await evaluate(code, {
        ...runtime,
        useMDXComponents: () => ({}),
        remarkPlugins: [remarkGfm],
      })
      setMDXComponent(() => Comp)
    })()
  }, [code])

  if (!MDXComponent) return null

  return (
    <MDXProvider>
      <MDXComponent />
    </MDXProvider>
  )
}
