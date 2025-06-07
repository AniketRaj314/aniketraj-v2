import Image from 'next/image'

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="w-full flex items-center justify-between px-8 py-6 fixed top-0 left-0 z-50 bg-background/80 backdrop-blur border-muted">
        <span className="font-heading text-xl tracking-widest">SPODER</span>
        <nav className="flex gap-8 text-md font-body">
          <a href="#about" className="hover:text-accent transition-colors">About</a>
          <a href="#experience" className="hover:text-accent transition-colors">Experiences</a>
          <a href="#blog" className="hover:text-accent transition-colors">Blog</a>
        </nav>
      </header>

      <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center pt-40 pb-24">
        <Image
          src="/aniket-raj-profile.png"
          alt="Aniket Raj"
          width={128}
          height={128}
          className="rounded-full mb-4 border border-muted"
        />
        <h1 className="text-4xl font-heading">ANIKET RAJ</h1>
        <p className="text-lg font-body text-muted">Chief of Staff at Devfolio</p>
        <p className="mt-6 font-body italic text-foreground">
          &quot;With great power, comes great responsibility&quot;
        </p>
        <section id="about" className="mt-20 max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-heading mb-4 tracking-widest">ABOUT ME</h2>
          <p className="text-muted font-body leading-relaxed">
            I&apos;m a tech-obsessed human who enjoys building scalable systems, supporting creative teams, and shipping things that matter. 
            Currently driving operations and strategy at Devfolio, while tinkering with experiments on the side.
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
    </>
  )
}
