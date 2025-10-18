'use client'

import { WishlistItem } from '@/types/wishlist'
import CategoryPill from './CategoryPill'
import ImageLoader from '../ImageLoader'

interface WishlistCardProps {
  item: WishlistItem
  onOpen: (item: WishlistItem) => void
}

export default function WishlistCard({ item, onOpen }: WishlistCardProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onOpen(item)
    }
  }


  const getStatusChip = () => {
    switch (item.status) {
      case 'dreaming':
        return (
          <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-blue-400 border border-blue-400/30 rounded-full bg-blue-400/10">
            Dreaming
          </span>
        )
      case 'gifted':
        return (
          <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-green-400 border border-green-400/30 rounded-full bg-green-400/10">
            🎁 Gifted
          </span>
        )
      case 'owned':
        return (
          <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-neutral-300 border border-neutral-600 rounded-full bg-neutral-800">
            Owned
          </span>
        )
      default:
        return null
    }
  }

  const formatPrice = () => {
    if (!item.price) return null
    const symbol = item.currency === 'USD' ? '$' : '₹'
    return `${symbol}${item.price.toLocaleString('en-US')}`
  }

  return (
    <div
      className="group flex flex-col h-full bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-600 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-neutral-900"
      onClick={() => onOpen(item)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${item.title}`}
    >
      {/* Image */}
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <ImageLoader
          src={item.listImage}
          alt={item.title}
          fill
          context="grid"
          loading="lazy"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 space-y-3">
        {/* Category */}
        <CategoryPill category={item.category} size="sm" />

        {/* Title */}
        <h3 className="font-body text-lg leading-tight line-clamp-2 group-hover:text-blue-400 transition-colors">
          {item.title}
        </h3>

        {/* Notes */}
        <p className="text-sm text-neutral-400 line-clamp-3 flex-1">
          {item.notes}
        </p>

        {/* Price */}
        {item.price && (
          <p className="text-sm font-medium text-neutral-300">
            {formatPrice()}
          </p>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between p-5 pt-0">
        <div className="flex items-center space-x-2">
          {getStatusChip()}
        </div>
        <div className="flex items-center text-sm text-neutral-400 group-hover:text-white transition-colors">
          View →
        </div>
      </div>
    </div>
  )
}
