import Link from 'next/link'

interface NavbarProps {
  logoText?: string
  logoHref?: string
}

export default function Navbar({ logoText = 'SPODER', logoHref = '/' }: NavbarProps) {
  return (
    <header className="w-full flex items-center justify-between px-8 py-6 fixed top-0 left-0 z-50 bg-background/80 backdrop-blur border-muted">
      <Link
        href={logoHref}
        className="font-heading text-xl tracking-widest hover:text-accent transition-colors"
      >
        {logoText}
      </Link>
      <nav className="hidden sm:flex gap-8 text-md font-body">
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
