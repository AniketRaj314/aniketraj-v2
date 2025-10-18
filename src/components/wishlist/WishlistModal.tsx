'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { WishlistItem } from '@/types/wishlist'
import CategoryPill from './CategoryPill'
import ImageLoader from '../ImageLoader'

interface WishlistModalProps {
  open: boolean
  item: WishlistItem | null
  onClose: () => void
}

export default function WishlistModal({ open, item, onClose }: WishlistModalProps) {
  if (!open || !item) return null

  const formatPrice = () => {
    if (!item.price) return null
    const symbol = item.currency === 'USD' ? '$' : '₹'
    return `${symbol}${item.price.toLocaleString('en-US')}`
  }


  const getStatusBadge = () => {
    switch (item.status) {
      case 'dreaming':
        return (
          <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-blue-400 border border-blue-400/30 rounded-full bg-blue-400/10">
            Dreaming
          </span>
        )
      case 'gifted':
        return (
          <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-green-400 border border-green-400/30 rounded-full bg-green-400/10">
            🎁 Gifted
          </span>
        )
      case 'owned':
        return (
          <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-neutral-300 border border-neutral-600 rounded-full bg-neutral-800">
            Owned
          </span>
        )
      default:
        return null
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <motion.div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
            onClick={onClose}
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />

          {/* Modal */}
          <motion.div 
            className="relative bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-800">
          <div className="flex items-center space-x-3">
            <h2 id="modal-title" className="text-2xl font-body text-white">
              {item.title}
            </h2>
            {getStatusBadge()}
          </div>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white transition-colors p-2 hover:bg-neutral-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="flex gap-6">
            {/* Left Side - Image */}
            <div className="flex-shrink-0 w-1/2">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                <ImageLoader
                  src={item.modalImage}
                  alt={item.title}
                  fill
                  context="modal"
                  priority
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Side - Info */}
            <div className="flex-1 space-y-4">
              {/* Category and Price */}
              <div className="flex items-center justify-between">
                <CategoryPill category={item.category} size="sm" />
                {item.price && (
                  <span className="text-xl font-bold text-white">
                    {formatPrice()}
                  </span>
                )}
              </div>

              {/* Notes */}
              <div>
                <h3 className="text-lg font-body text-white mb-2">Notes</h3>
                <p className="text-neutral-300 leading-relaxed">
                  {item.notes}
                </p>
              </div>

              {/* External Link */}
              <div className="pt-4 border-t border-neutral-800">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-neutral-900"
                >
                  View Product
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
