import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import FadeUpText from '../ui/FadeUpText'
import SectionBackground from './SectionBackground'
import { REGISTRATION_COUNT } from '../config'

export default function AboutSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  return (
    <section
      id="about"
      ref={ref}
      className="relative flex min-h-[80svh] items-center justify-center overflow-hidden px-4 py-24 md:py-32"
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <SectionBackground src="/bg-2.png" zoom={1.8} focus="50% 45%" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 inline-block text-xs font-semibold tracking-[0.3em] text-mc-accent uppercase"
        >
          THE CHALLENGE
        </motion.span>

        <FadeUpText
          as="h2"
          text={`超過 ${REGISTRATION_COUNT} 名玩家將在 9 個賽道中比賽，誰將成為第一位登上山頂的選手`}
          className="text-2xl font-bold leading-relaxed text-white md:text-4xl lg:text-5xl lg:leading-snug"
        />

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-12 h-px w-24 origin-center bg-mc-accent"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-sm text-mc-muted md:text-base"
        >
          九個賽道 · 登頂為王 · 只有一位冠軍
        </motion.p>
      </div>
    </section>
  )
}
