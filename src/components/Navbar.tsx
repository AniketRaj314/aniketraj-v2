import Link from 'next/link'

interface NavbarProps {
  logoText?: string
  logoHref?: string
}

export default function Navbar({ logoText = 'SPODER', logoHref = '/' }: NavbarProps) {
  return (
    <header className="w-full flex items-center justify-between px-4 sm:px-8 py-4 sm:py-6 fixed top-0 left-0 z-50 bg-background/80 backdrop-blur border-muted">
      <Link
        href={logoHref}
        className="font-heading text-lg sm:text-xl tracking-widest hover:text-accent transition-colors"
      >
        {logoText}
      </Link>
      <nav className="flex gap-4 sm:gap-8 text-sm sm:text-md font-body">
        <a href="/braindump" className="hover:text-accent transition-colors">
          Braindump
        </a>
        <a href="/music" className="hover:text-accent transition-colors">
          Music
        </a>
      </nav>
    </header>
  )
}
