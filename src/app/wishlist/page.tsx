import WishlistPageClient from '@/components/wishlist/WishlistPageClient'

export const metadata = {
  title: 'Wishlist - Aniket Raj',
  description: "A living list of things I've been eyeing, obsessing over, or saving up for.",
  openGraph: {
    title: 'Wishlist - Aniket Raj',
    description: "A living list of things I've been eyeing, obsessing over, or saving up for.",
    images: ['/metadata/wishlist.png'],
  },
}

export default function WishlistPage() {
  return <WishlistPageClient />
}
