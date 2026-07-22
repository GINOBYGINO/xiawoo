import { motion } from 'framer-motion'
import { MessageCircle, ExternalLink } from 'lucide-react'
import SectionBackground from './SectionBackground'
import RegisterButton from './RegisterButton'
import { REGISTER_FORM_URL, DISCORD_URL, INSTAGRAM_URL } from '../config'

function InstagramIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

export default function FooterSection() {
  return (
    <section
      id="register"
      className="relative overflow-hidden px-4 py-24 md:py-32"
    >
      <SectionBackground src="/bg-6.png" zoom={1.85} focus="50% 35%" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4 inline-block text-xs font-semibold tracking-[0.3em] text-mc-accent uppercase"
        >
          JOIN THE CLIMB
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-3xl font-black md:text-5xl"
        >
          準備登上山頂了嗎？
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mb-10 text-base text-mc-muted md:text-lg"
        >
          更多資訊如伺服器 IP、版本號請前往 Discord
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap"
        >
          <RegisterButton
            href={REGISTER_FORM_URL}
            className="min-w-[160px]"
          >
            現在報名
            <ExternalLink size={16} />
          </RegisterButton>

          <motion.a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex min-w-[160px] items-center justify-center gap-2 rounded-full border border-[#5865F2] bg-[#5865F2]/20 px-8 py-3.5 text-base font-bold tracking-wide text-white transition hover:bg-[#5865F2]/40"
          >
            <MessageCircle size={18} />
            加入 Discord
          </motion.a>

          <motion.a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex min-w-[160px] items-center justify-center gap-2 rounded-full border border-pink-500/50 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-400/20 px-8 py-3.5 text-base font-bold tracking-wide text-white transition hover:from-purple-500/35 hover:via-pink-500/35 hover:to-orange-400/35"
          >
            <InstagramIcon size={18} />
            小窩 IG
          </motion.a>
        </motion.div>

        <footer className="mt-20 border-t border-white/10 pt-8">
          <p className="text-sm text-white/40">
            © 2026 小窩盃 · 首屆公開賽
          </p>
        </footer>
      </div>
    </section>
  )
}
