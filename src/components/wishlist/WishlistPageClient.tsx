'use client'

import { useState, useEffect, useMemo, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import WishlistCard from '@/components/wishlist/WishlistCard'
import { getWishlist, filterByCategory, filterByStatus, sortItems } from '@/lib/wishlist'
import { WishlistItem } from '@/types/wishlist'

// Dynamic import for modal to prevent SSR issues
const WishlistModal = dynamic(() => import('@/components/wishlist/WishlistModal'), { ssr: false })

const categories = ["All", "Tech", "Books", "Design", "Collectibles", "Experiences", "Home Decor"]
const statuses = ["All", "Dreaming", "Gifted", "Owned"]
const sortOptions = ["Recently Added", "Most Wanted", "Price Low → High", "Price High → Low"]

function WishlistContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [status, setStatus] = useState('All')
  const [sort, setSort] = useState('Recently Added')
  const [selectedItem, setSelectedItem] = useState<WishlistItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const wishlist = getWishlist()

  // Initialize state from search params after mount
  useEffect(() => {
    setSearch(searchParams.get('search') || '')
    setCategory(searchParams.get('category') || 'All')
    setStatus(searchParams.get('status') || 'All')
    setSort(searchParams.get('sort') || 'Recently Added')
  }, [searchParams])

  // Debounced search
  const [debouncedSearch, setDebouncedSearch] = useState(search)
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(search), 200)
    return () => clearTimeout(timer)
  }, [search])

  // Filter and sort items
  const filteredItems = useMemo(() => {
    let items = wishlist
    
    // Apply search filter
    if (debouncedSearch) {
      items = items.filter(item => 
        item.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        item.notes.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        item.category.toLowerCase().includes(debouncedSearch.toLowerCase())
      )
    }
    
    // Apply category filter
    items = filterByCategory(items, category)
    
    // Apply status filter
    items = filterByStatus(items, status)
    
    // Apply sorting
    items = sortItems(items, sort)
    
    return items
  }, [wishlist, debouncedSearch, category, status, sort])

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams()
    if (search) params.set('search', search)
    if (category !== 'All') params.set('category', category)
    if (status !== 'All') params.set('status', status)
    if (sort !== 'Recently Added') params.set('sort', sort)
    
    const newUrl = params.toString() ? `?${params.toString()}` : '/wishlist'
    router.replace(newUrl, { scroll: false })
  }, [search, category, status, sort, router])

  const handleItemOpen = (item: WishlistItem) => {
    setSelectedItem(item)
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
    setSelectedItem(null)
  }

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory)
  }

  const handleStatusChange = (newStatus: string) => {
    setStatus(newStatus)
  }

  const handleSortChange = (newSort: string) => {
    setSort(newSort)
  }

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-10 pt-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-3xl md:text-5xl mb-4"
          >
            WISHLIST
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-400 text-lg leading-relaxed max-w-4xl"
          >
            Because sometimes wanting something is half the fun.
            <br />
            Here's a living list of things I've been eyeing, obsessing over, or saving up for.
          </motion.p>
        </motion.div>

        {/* Toolbar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-6 mb-12"
        >
          {/* Search */}
          <div>
            <input
              type="text"
              placeholder="Search items..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Categories */}
            <div className="flex-1">
              <div className="flex overflow-x-auto space-x-2 pb-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-all duration-100 ${
                      category === cat
                        ? 'bg-blue-600 text-white'
                        : 'bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Status Dropdown */}
            <div className="flex-shrink-0">
              <select
                value={status}
                onChange={(e) => handleStatusChange(e.target.value)}
                className="px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {statuses.map((stat) => (
                  <option key={stat} value={stat}>
                    {stat}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Dropdown */}
            <div className="flex-shrink-0">
              <select
                value={sort}
                onChange={(e) => handleSortChange(e.target.value)}
                className="px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {sortOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.05,
                  ease: "easeOut",
                  layout: { duration: 0.3, ease: "easeInOut" }
                }}
              >
                <WishlistCard item={item} onOpen={handleItemOpen} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center py-12"
          >
            <p className="text-neutral-400 text-lg">
              No items found matching your filters.
            </p>
          </motion.div>
        )}
      </div>

      {/* Modal */}
      <WishlistModal
        open={isModalOpen}
        item={selectedItem}
        onClose={handleModalClose}
      />
    </>
  )
}

export default function WishlistPageClient() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-neutral-400">Loading...</div>
      </div>
    }>
      <WishlistContent />
    </Suspense>
  )
}
