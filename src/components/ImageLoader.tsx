'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ImageLoaderProps {
  src: string
  alt: string
  fill?: boolean
  width?: number
  height?: number
  className?: string
  priority?: boolean
  loading?: 'lazy' | 'eager'
}

export default function ImageLoader({
  src,
  alt,
  fill = false,
  width,
  height,
  className = '',
  priority = false,
  loading = 'lazy',
  ...props
}: ImageLoaderProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleLoad = () => {
    setIsLoading(false)
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  return (
    <div className="relative">
      {/* Loading skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-neutral-800 animate-pulse rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800 animate-pulse" />
        </div>
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center rounded-lg">
          <div className="text-neutral-500 text-sm">Failed to load</div>
        </div>
      )}

      {/* Image */}
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={width}
        height={height}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        priority={priority}
        loading={priority ? undefined : loading}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
    </div>
  )
}
