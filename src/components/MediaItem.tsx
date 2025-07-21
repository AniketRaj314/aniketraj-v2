'use client'

interface MediaItemProps {
  image: string
  title: string
  subtext: string
  href: string
  imageShape?: 'round' | 'square'
  className?: string
}

export default function MediaItem({
  image,
  title,
  subtext,
  href,
  imageShape = 'square',
  className = '',
}: MediaItemProps) {
  const imageClasses = `w-12 h-12 object-cover ${
    imageShape === 'round' ? 'rounded-full' : 'rounded-md'
  }`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center space-x-3 p-3 bg-neutral-900/50 rounded-lg hover:bg-neutral-800/50 transition-colors cursor-pointer ${className}`}
    >
      <img src={image} alt={title} className={imageClasses} />
      <div className="flex-1 min-w-0">
        <h3 className="text-white font-medium truncate">{title}</h3>
        <p className="text-sm text-muted-foreground truncate">{subtext}</p>
      </div>
    </a>
  )
}
