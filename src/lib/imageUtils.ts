/**
 * Generate a blur placeholder for images
 * This creates a tiny, low-quality version of the image for the blur effect
 */
export function generateBlurDataURL(width: number = 10, height: number = 10): string {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height

  const ctx = canvas.getContext('2d')
  if (!ctx) return ''

  // Create a gradient background
  const gradient = ctx.createLinearGradient(0, 0, width, height)
  gradient.addColorStop(0, '#1f1f1f')
  gradient.addColorStop(1, '#2a2a2a')

  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, width, height)

  return canvas.toDataURL('image/jpeg', 0.1)
}

/**
 * Predefined blur data URLs for consistent loading states
 */
export const BLUR_DATA_URLS = {
  // Dark gradient blur
  dark: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=',

  // Neutral gray blur
  neutral: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=',

  // Light gray blur
  light: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k='
} as const

/**
 * Get optimal image quality based on usage context
 */
export function getOptimalQuality(context: 'modal' | 'grid' | 'hero' | 'thumbnail'): number {
  switch (context) {
    case 'modal':
      return 90 // High quality for modal images
    case 'hero':
      return 85 // High quality for hero images
    case 'grid':
      return 80 // Medium quality for grid images
    case 'thumbnail':
      return 75 // Lower quality for thumbnails
    default:
      return 80
  }
}

/**
 * Get optimal sizes attribute based on context
 */
export function getOptimalSizes(context: 'modal' | 'grid' | 'hero' | 'thumbnail'): string {
  switch (context) {
    case 'modal':
      return '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw'
    case 'hero':
      return '(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 60vw'
    case 'grid':
      return '(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw'
    case 'thumbnail':
      return '(max-width: 640px) 50vw, (max-width: 768px) 25vw, (max-width: 1024px) 20vw, 15vw'
    default:
      return '(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw'
  }
}
