'use client'

interface CategoryPillProps {
  category: string
  size?: 'sm' | 'md'
}

export default function CategoryPill({ category, size = 'sm' }: CategoryPillProps) {
  const getCategoryPillStyle = (category: string) => {
    switch (category) {
      case 'Tech':
        return 'text-blue-400 border border-blue-400/30 rounded-md bg-blue-400/10'
      case 'Books':
        return 'text-green-400 border border-green-400/30 rounded-md bg-green-400/10'
      case 'Design':
        return 'text-purple-400 border border-purple-400/30 rounded-md bg-purple-400/10'
      case 'Collectibles':
        return 'text-yellow-400 border border-yellow-400/30 rounded-md bg-yellow-400/10'
      case 'Experiences':
        return 'text-pink-400 border border-pink-400/30 rounded-md bg-pink-400/10'
      case 'Home Decor':
        return 'text-orange-400 border border-orange-400/30 rounded-md bg-orange-400/10'
      default:
        return 'text-neutral-400 border border-neutral-400/30 rounded-md bg-neutral-400/10'
    }
  }

  const sizeClasses = size === 'sm' ? 'px-2 py-1 text-xs' : 'px-3 py-1.5 text-sm'

  return (
    <span className={`inline-flex items-center w-fit font-medium rounded-md ${sizeClasses} ${getCategoryPillStyle(category)}`}>
      {category}
    </span>
  )
}
