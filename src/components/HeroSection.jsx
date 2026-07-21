import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import GlitchText from '../ui/GlitchText'
import SectionBackground from './SectionBackground'
import RegisterButton from './RegisterButton'

export default function HeroSection() {
  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden px-4">
      <SectionBackground src="/bg-1.png" zoom={1.85} focus="50% 40%" />

      {/* subtle grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-sm font-medium tracking-[0.35em] text-mc-accent uppercase md:text-base"
        >
          MINECRAFT OPEN TOURNAMENT
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mb-3 text-6xl font-black leading-none tracking-tight text-glow-white md:text-8xl lg:text-9xl"
        >
          <GlitchText text="小窩盃" />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mb-10 text-xl font-medium text-mc-glow text-glow md:text-3xl"
        >
          首屆公開賽
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <RegisterButton href="#register" />
          <a
            href="#about"
            className="rounded-full border border-white/20 px-8 py-3.5 text-sm font-medium text-white/80 transition hover:border-white/40 hover:text-white"
          >
            了解賽事
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/50"
        aria-label="向下滾動"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.a>
    </section>
  )
}
