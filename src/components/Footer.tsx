const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-muted mt-24 px-4 py-6 text-muted font-body text-sm">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <span>© {year} Aniket Raj</span>
        <div className="space-x-6">
          <a href="/" className="hover:text-foreground transition">
            Home
          </a>
          <a href="mailto:hi@aniketraj.me" className="hover:text-foreground transition">
            Contact
          </a>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-4 text-center opacity-50 hover:opacity-100 transition-opacity duration-300">
        Inspired by the{' '}
        <a
          href="https://nothing.tech"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-foreground"
        >
          Nothing Design System
        </a>
        .
      </div>
    </footer>
  )
}
