'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { getOptimalQuality, getOptimalSizes, BLUR_DATA_URLS } from '@/lib/imageUtils'

interface ImageLoaderProps {
  src: string
  alt: string
  fill?: boolean
  width?: number
  height?: number
  sizes?: string
  className?: string
  priority?: boolean
  loading?: 'lazy' | 'eager'
  quality?: number
  context?: 'modal' | 'grid' | 'hero' | 'thumbnail'
  objectPosition?: string
  onLoad?: () => void
  onError?: () => void
}

export default function ImageLoader({
  src,
  alt,
  fill = false,
  width,
  height,
  sizes,
  className = '',
  priority = false,
  loading = 'lazy',
  quality,
  context = 'grid',
  objectPosition,
  onLoad,
  onError,
}: ImageLoaderProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleLoad = () => {
    setIsLoading(false)
    onLoad?.()
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
    onError?.()
  }

  const imageProps = {
    src,
    alt,
    fill,
    width,
    height,
    sizes: sizes || getOptimalSizes(context),
    className: `${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`,
    priority,
    loading,
    quality: quality || getOptimalQuality(context),
    placeholder: 'blur' as const,
    blurDataURL: BLUR_DATA_URLS.dark,
    onLoad: handleLoad,
    onError: handleError,
    ...(objectPosition && { style: { objectPosition } }),
  }

  return (
    <div className="relative overflow-hidden">
      {/* Loading Spinner */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex items-center justify-center bg-neutral-800"
          >
            <div className="flex flex-col items-center space-y-3">
              {/* Spinner */}
              <div className="relative">
                <div className="w-8 h-8 border-2 border-neutral-600 rounded-full animate-spin border-t-blue-500"></div>
              </div>
              {/* Loading text */}
              <p className="text-xs text-neutral-400 animate-pulse">Loading...</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error State */}
      <AnimatePresence>
        {hasError && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex items-center justify-center bg-neutral-800"
          >
            <div className="flex flex-col items-center space-y-2 text-neutral-400">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
              <p className="text-xs">Failed to load</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image */}
      <Image {...imageProps} />
    </div>
  )
}

// Skeleton loader for grid items
export function ImageSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`bg-neutral-800 animate-pulse ${className}`}>
      <div className="flex items-center justify-center h-full">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-6 h-6 bg-neutral-700 rounded-full animate-pulse"></div>
          <div className="w-16 h-2 bg-neutral-700 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}

// Shimmer effect for loading states
export function ShimmerLoader({ className = '' }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-neutral-800 ${className}`}>
      <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-neutral-700 to-transparent"></div>
      <div className="h-full w-full bg-neutral-800"></div>
    </div>
  )
}
