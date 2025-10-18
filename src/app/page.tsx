'use client'

import Image from 'next/image'
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center pt-40 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/aniket-raj-profile.png"
            alt="Aniket Raj"
            width={180}
            height={180}
            className="rounded-full mb-4 border border-muted"
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl font-heading"
        >
          ANIKET RAJ
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg font-body text-muted"
        >
          Chief of Staff, Devfolio
        </motion.p>
        <motion.section
          id="about"
          className="mt-20 max-w-2xl mx-auto px-4 scroll-mt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl font-heading mb-4 tracking-widest text-center"
          >
            ABOUT ME
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-muted font-body leading-relaxed text-left"
          >
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
          </motion.p>
        </motion.section>
      </main>

      {/* Experience section further down */}
      <motion.section
        id="experience"
        className="mt-32 max-w-5xl mx-auto px-4 border-t border-muted pt-12 scroll-mt-24"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-2xl font-heading mb-10 tracking-widest text-center"
        >
          EXPERIENCE
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="space-y-10 font-body text-muted text-sm sm:text-base"
        >
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
        </motion.div>
      </motion.section>
      <motion.section
        id="beyond-work"
        className="mt-24 max-w-5xl mx-auto px-4 border-t border-muted pt-12 scroll-mt-24"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-2xl font-heading mb-10 tracking-widest text-center"
        >
          BEYOND WORK
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 sm:gap-x-10 gap-y-10 text-muted text-sm sm:text-base"
        >
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
        </motion.div>
      </motion.section>

      <motion.section
        id="projects"
        className="mt-24 max-w-5xl mx-auto px-4 border-t border-muted pt-12 scroll-mt-24"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="text-2xl font-heading mb-10 tracking-widest text-center"
        >
          PROJECTS
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 justify-center gap-x-16 gap-y-10 font-body text-muted text-sm sm:text-base"
        >
          {/* SCRIPT Group */}
          <div className="w-full max-w-md flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <h3 className="font-heading text-lg text-foreground">The SCRIPT Group</h3>
              <p>
                Headed one of MIT-WPU&apos;s most active tech communities. We ran events, shipped
                tools, and made sure every student touched tech at least once.
              </p>
              <a
                href="https://thescriptgroup.xyz"
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
                href="https://instagram.com/spider31415"
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
        </motion.div>
      </motion.section>

      <motion.section
        id="socials"
        className="mt-24 max-w-5xl mx-auto px-4 border-t border-muted pt-12 scroll-mt-24"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="text-2xl font-heading mb-10 tracking-widest text-center"
        >
          SOCIALS
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.7 }}
          className="flex flex-wrap justify-center gap-12 text-muted text-sm sm:text-base"
        >
          {/* Telegram */}
          <a
            href="https://t.me/AniketRaj314"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center space-y-2 hover:text-foreground transition"
          >
            <Image
              src="/icons/telegram.svg"
              alt="Telegram"
              width={24}
              height={24}
              className="invert"
            />
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/aniketraj.eth"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center space-y-2 hover:text-foreground transition"
          >
            <Image
              src="/icons/instagram.svg"
              alt="Instagram"
              width={24}
              height={24}
              className="invert"
            />
          </a>

          {/* X */}
          <a
            href="https://x.com/aniketraj314"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center space-y-2 hover:text-foreground transition"
          >
            <Image src="/icons/x.svg" alt="X" width={24} height={24} />
          </a>

          {/* Devfolio */}
          <a
            href="https://devfolio.co/@aniket_raj"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center space-y-2 hover:text-foreground transition"
          >
            <Image
              src="/icons/devfolio.svg"
              alt="Devfolio"
              width={24}
              height={24}
              className="filter-white"
            />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/aniketraj314"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center space-y-2 hover:text-foreground transition"
          >
            <Image
              src="/icons/linkedin.svg"
              alt="LinkedIn"
              width={24}
              height={24}
              className="invert"
            />
          </a>

          {/* Email */}
          <a
            href="mailto:hi@aniketraj.me"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center space-y-2 hover:text-foreground transition"
          >
            <Image src="/icons/email.svg" alt="Email" width={30} height={30} />
          </a>
        </motion.div>
      </motion.section>
    </>
  )
}
