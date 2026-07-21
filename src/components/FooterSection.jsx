import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, ExternalLink } from 'lucide-react'
import SectionBackground from './SectionBackground'
import RegisterButton from './RegisterButton'

/** 報名表單連結 — 之後換成你的 Google 表單網址 */
const REGISTER_FORM_URL = '#register-form'

/** Discord 邀請連結 — 尚未開放時保持空字串 */
const DISCORD_URL = ''

export default function FooterSection() {
  const [shake, setShake] = useState(false)

  const handleDiscordClick = (e) => {
    if (!DISCORD_URL) {
      e.preventDefault()
      setShake(true)
      setTimeout(() => setShake(false), 500)
    }
  }

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
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <RegisterButton
            href={REGISTER_FORM_URL}
            className="min-w-[160px]"
          >
            現在報名
            <ExternalLink size={16} />
          </RegisterButton>

          <motion.a
            href={DISCORD_URL || '#'}
            onClick={handleDiscordClick}
            animate={shake ? { x: [-8, 8, -6, 6, -3, 3, 0] } : { x: 0 }}
            transition={{ duration: 0.45 }}
            className={`inline-flex min-w-[160px] items-center justify-center gap-2 rounded-full border px-8 py-3.5 text-base font-bold tracking-wide transition ${
              DISCORD_URL
                ? 'border-[#5865F2] bg-[#5865F2]/20 text-white hover:bg-[#5865F2]/40'
                : 'cursor-not-allowed border-white/15 bg-white/5 text-white/40'
            }`}
          >
            <MessageCircle size={18} />
            {DISCORD_URL ? '加入 Discord' : 'Discord 即將開放'}
          </motion.a>
        </motion.div>

        {!DISCORD_URL && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-4 text-xs text-white/30"
          >
            Discord 連結尚未公布，請稍後再回來查看
          </motion.p>
        )}

        <footer className="mt-20 border-t border-white/10 pt-8">
          <p className="text-sm text-white/40">
            © 2026 小窩盃 · 首屆公開賽
          </p>
        </footer>
      </div>
    </section>
  )
}
