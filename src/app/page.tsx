import Image from 'next/image'

export default function Home() {
  const year = new Date().getFullYear()
  return (
    <>
      {/* Header */}
      <header className="w-full flex items-center justify-between px-8 py-6 fixed top-0 left-0 z-50 bg-background/80 backdrop-blur border-muted">
        <span className="font-heading text-xl tracking-widest">SPODER</span>
        <nav className="flex gap-8 text-md font-body">
          <a href="#about" className="hover:text-accent transition-colors">
            About
          </a>
          <a href="#experience" className="hover:text-accent transition-colors">
            Experiences
          </a>
          <a href="#blog" className="hover:text-accent transition-colors">
            Blog
          </a>
        </nav>
      </header>

      <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center pt-40 pb-24">
        <Image
          src="/aniket-raj-profile.png"
          alt="Aniket Raj"
          width={180}
          height={180}
          className="rounded-full mb-4 border border-muted"
        />
        <h1 className="text-4xl font-heading">ANIKET RAJ</h1>
        <p className="text-lg font-body text-muted">Chief of Staff, Devfolio</p>
        <section id="about" className="mt-20 max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-heading mb-4 tracking-widest text-center">ABOUT ME</h2>
          <p className="text-muted font-body leading-relaxed text-left">
            Chief of Staff at{' '}
            <a
              href="https://devfolio.co"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-accent transition-colors"
            >
              Devfolio
            </a>
            , which mostly means I do a bit of everything and try not to break anything important. I
            care about building things that work, helping people do their best work, and keeping the
            chaos at bay — usually in that order. Off the clock, I&apos;m either gaming, reading
            comic books, or convincing myself that vibe-coding at 2am is a personality trait.
            <br />
            Friendly, nerdy, and usually in over my head — basically Spider-Man, just without the
            radioactive origin story.
          </p>
        </section>
      </main>

      {/* Experience section further down */}
      <section id="experience" className="mt-32 max-w-5xl mx-auto px-4 border-t border-muted pt-12">
        <h2 className="text-2xl font-heading mb-10 tracking-widest text-center">EXPERIENCE</h2>
        <div className="space-y-10 font-body text-muted text-sm sm:text-base">
          <div>
            <div className="grid grid-cols-3 text-foreground font-heading">
              <span className="text-left">Devfolio</span>
              <span className="text-center">Chief of Staff</span>
              <span className="text-right">Dec &apos;20 – Present</span>
            </div>
            <p className="mt-1 text-left">Managed ops and ran India&apos;s biggest hackathons</p>
          </div>
          <div>
            <div className="grid grid-cols-3 text-foreground font-heading">
              <span className="text-left">bitgrit</span>
              <span className="text-center">Full Stack Engineer / CA</span>
              <span className="text-right">Jan &apos;20 – Jan &apos;21</span>
            </div>
            <p className="mt-1 text-left">Taught ML/DS/Blockchain, worked on Kubernetes infra</p>
          </div>
          <div>
            <div className="grid grid-cols-3 text-foreground font-heading">
              <span className="text-left">Apli.ai</span>
              <span className="text-center">Frontend Engineer</span>
              <span className="text-right">Feb &apos;20 – May &apos;20</span>
            </div>
            <p className="mt-1 text-left">Built and designed web/mobile experiences</p>
          </div>
          <div>
            <div className="grid grid-cols-3 text-foreground font-heading">
              <span className="text-left">Bank of India</span>
              <span className="text-center">Data Analyst</span>
              <span className="text-right">Jun &apos;19 – Jul &apos;19</span>
            </div>
            <p className="mt-1 text-left">Created NPA risk prediction software</p>
          </div>
        </div>
      </section>
      <section
        id="beyond-work"
        className="mt-24 max-w-5xl mx-auto px-4 border-t border-muted pt-12"
      >
        <h2 className="text-2xl font-heading mb-10 tracking-widest text-center">BEYOND WORK</h2>

        <div className="flex flex-wrap justify-center gap-24 text-muted text-sm sm:text-base">
          {/* Gaming */}
          <div className="flex flex-col items-center space-y-2">
            <Image src="/icons/joystick.svg" alt="Gaming" width={64} height={64} />
            <span className="font-body">Gaming</span>
          </div>

          {/* Vibe Coding */}
          <div className="flex flex-col items-center space-y-2">
            <Image src="/icons/vibecoding.svg" alt="Vibe Coding" width={64} height={64} />
            <span className="font-body">Vibe Coding</span>
          </div>

          {/* Comic Books */}
          <div className="flex flex-col items-center space-y-2">
            <Image src="/icons/superhero.svg" alt="Comic Books" width={64} height={64} />
            <span className="font-body">Comic Books</span>
          </div>

          {/* eSports */}
          <div className="flex flex-col items-center space-y-2">
            <Image src="/icons/trophy.svg" alt="eSports" width={64} height={64} />
            <span className="font-body">eSports</span>
          </div>
        </div>
      </section>

      <section id="projects" className="mt-24 max-w-5xl mx-auto px-4 border-t border-muted pt-12">
        <h2 className="text-2xl font-heading mb-10 tracking-widest text-center">PROJECTS</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 justify-center gap-x-16 gap-y-10 font-body text-muted text-sm sm:text-base">
          {/* SCRIPT Group */}
          <div className="w-full max-w-md flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <h3 className="font-heading text-lg text-foreground">The SCRIPT Group</h3>
              <p>
                Headed one of MIT-WPU’s most active tech communities. We ran events, shipped tools,
                and made sure every student touched tech at least once.
              </p>
              <a
                href="https://thescriptgroup.in"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-foreground hover:underline"
              >
                → View Project
              </a>
            </div>
          </div>

          {/* 100 Days of Code */}
          <div className="w-full max-w-md flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <h3 className="font-heading text-lg text-foreground">100 Days of Code</h3>
              <p>
                A commitment turned experiment — built, shared, and shipped projects for 100 days
                straight to prove consistency &gt; motivation.
              </p>
              <a
                href="https://instagram.com/spidey_codes"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-foreground hover:underline"
              >
                → View Project
              </a>
            </div>
          </div>

          {/* OnlyObjex */}
          <div className="w-full max-w-md flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <h3 className="font-heading text-lg text-foreground">OnlyObjex</h3>
              <p>
                A degenerate AI side-project: Powered by AI, the platform gives everyday inanimate
                objects distinct personalities, complete with bios, quirks, and a flair for
                self-expression.
              </p>
              <a
                href="https://devfolio.co/projects/onlyobjex-014b"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-foreground hover:underline"
              >
                → View Project
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="socials" className="mt-24 max-w-5xl mx-auto px-4 border-t border-muted pt-12">
        <h2 className="text-2xl font-heading mb-10 tracking-widest text-center">SOCIALS</h2>

        <div className="flex flex-wrap justify-center gap-12 text-muted text-sm sm:text-base">
          {/* Telegram */}
          <a
            href="https://t.me/spodernet"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center space-y-2 hover:text-foreground transition"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M9.947 13.447l-.396 4.412c.568 0 .815-.243 1.117-.535l2.671-2.537 5.541 4.046c1.017.56 1.744.265 2.013-.944l3.648-17.07c.345-1.594-.575-2.215-1.604-1.84L.843 9.85c-1.557.604-1.535 1.468-.268 1.857l5.885 1.837L19.358 4.93c.546-.338 1.042-.151.633.216l-10.044 8.3z" />
            </svg>
            <span>Telegram</span>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/spidey_codes"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center space-y-2 hover:text-foreground transition"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.428.415a4.92 4.92 0 011.71 1.12 4.92 4.92 0 011.12 1.71c.175.457.36 1.257.415 2.427.058 1.267.07 1.647.07 4.851s-.012 3.584-.07 4.851c-.056 1.17-.24 1.97-.415 2.428a4.92 4.92 0 01-1.12 1.71 4.92 4.92 0 01-1.71 1.12c-.457.175-1.257.36-2.427.415-1.267.058-1.647.07-4.851.07s-3.584-.012-4.851-.07c-1.17-.056-1.97-.24-2.428-.415a4.92 4.92 0 01-1.71-1.12 4.92 4.92 0 01-1.12-1.71c-.175-.457-.36-1.257-.415-2.427C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.851c.056-1.17.24-1.97.415-2.428a4.92 4.92 0 011.12-1.71 4.92 4.92 0 011.71-1.12c.457-.175 1.257-.36 2.427-.415C8.416 2.175 8.796 2.163 12 2.163zm0 1.838c-3.178 0-3.562.012-4.818.07-1.012.049-1.556.215-1.92.36a3.12 3.12 0 00-1.13.73 3.12 3.12 0 00-.73 1.13c-.145.364-.31.908-.36 1.92-.058 1.256-.07 1.64-.07 4.818s.012 3.562.07 4.818c.049 1.012.215 1.556.36 1.92.176.48.427.893.73 1.13.237.303.65.554 1.13.73.364.145.908.31 1.92.36 1.256.058 1.64.07 4.818.07s3.562-.012 4.818-.07c1.012-.049 1.556-.215 1.92-.36a3.12 3.12 0 001.13-.73 3.12 3.12 0 00.73-1.13c.145-.364.31-.908.36-1.92.058-1.256.07-1.64.07-4.818s-.012-3.562-.07-4.818c-.049-1.012-.215-1.556-.36-1.92a3.12 3.12 0 00-.73-1.13 3.12 3.12 0 00-1.13-.73c-.364-.145-.908-.31-1.92-.36-1.256-.058-1.64-.07-4.818-.07zm0 3.838a5.999 5.999 0 100 12 5.999 5.999 0 000-12zm0 9.838a3.84 3.84 0 110-7.68 3.84 3.84 0 010 7.68zm6.406-10.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
            </svg>
            <span>Instagram</span>
          </a>

          {/* Email */}
          <a
            href="mailto:hi@aniketraj.me"
            className="flex flex-col items-center space-y-2 hover:text-foreground transition"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 13.5L1 6.75V18h22V6.75L12 13.5zM12 12L1 5h22L12 12z" />
            </svg>
            <span>Email</span>
          </a>

          {/* Devfolio */}
          <a
            href="https://devfolio.co/@aniketraj"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center space-y-2 hover:text-foreground transition"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M4 4h16v16H4z" />
            </svg>
            <span>Devfolio</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/aniketraj314"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center space-y-2 hover:text-foreground transition"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M4.98 3.5C3.88 3.5 3 4.38 3 5.48c0 1.09.88 1.97 1.98 1.97h.02C6.09 7.45 7 6.57 7 5.48c0-1.1-.9-1.98-2.02-1.98zM3 8.75h4v12.25H3V8.75zM9.75 8.75h3.64v1.68h.05c.51-.96 1.76-1.98 3.63-1.98 3.88 0 4.6 2.55 4.6 5.87v6.68h-4v-5.91c0-1.41-.02-3.24-1.97-3.24-1.98 0-2.28 1.54-2.28 3.13v6.02h-4V8.75z" />
            </svg>
            <span>LinkedIn</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-muted mt-24 px-4 py-6 text-muted font-body text-sm">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <span>© 2025 Aniket Raj</span>
          <div className="space-x-6">
            <a href="#" className="hover:text-foreground transition">
              Home
            </a>
            <a href="#projects" className="hover:text-foreground transition">
              Projects
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
        </div>
      </footer>
    </>
  )
}
