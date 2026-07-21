import { motion } from 'framer-motion'
import { Trophy, Medal, Award, Ticket } from 'lucide-react'
import NeonCard from '../ui/NeonCard'
import SectionBackground from './SectionBackground'

const prizes = [
  {
    place: '冠軍',
    amount: '800',
    icon: Trophy,
    accent: true,
    delay: 0.1,
  },
  {
    place: '亞軍',
    amount: '400',
    icon: Medal,
    accent: false,
    delay: 0.2,
  },
  {
    place: '季殿軍',
    amount: '200',
    icon: Award,
    accent: false,
    delay: 0.3,
  },
]

export default function PrizeSection() {
  return (
    <section
      id="prizes"
      className="relative overflow-hidden px-4 py-24 md:py-32"
    >
      <SectionBackground src="/bg-3.png" zoom={1.9} focus="center" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-14 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-4 inline-block text-xs font-semibold tracking-[0.3em] text-mc-accent uppercase"
          >
            PRIZE POOL
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-black md:text-5xl"
          >
            總獎金{' '}
            <span className="text-mc-accent text-glow">1,600</span> 元
          </motion.h2>
        </div>

        <div className="mb-12 grid gap-5 sm:grid-cols-3">
          {prizes.map(({ place, amount, icon: Icon, accent, delay }) => (
            <NeonCard key={place} accent={accent} delay={delay} className="text-center">
              <Icon
                className={`mx-auto mb-4 ${accent ? 'text-mc-accent' : 'text-white/60'}`}
                size={accent ? 40 : 32}
              />
              <p className="mb-2 text-sm tracking-widest text-mc-muted">{place}</p>
              <p className={`font-black ${accent ? 'text-4xl text-mc-glow text-glow md:text-5xl' : 'text-3xl text-white'}`}>
                {amount}
                <span className="ml-1 text-lg font-medium text-white/50">元</span>
              </p>
            </NeonCard>
          ))}
        </div>

        {/* Bonus lottery marquee */}
        <NeonCard delay={0.4} className="overflow-hidden border-mc-accent/40 !p-0">
          <div className="flex items-center gap-3 border-b border-white/10 bg-mc-accent/10 px-5 py-3">
            <Ticket className="shrink-0 text-mc-accent animate-flicker" size={20} />
            <span className="text-sm font-bold text-mc-accent">加碼抽獎</span>
          </div>
          <div className="overflow-hidden py-4">
            <div className="flex w-max animate-marquee whitespace-nowrap">
              {[0, 1].map((i) => (
                <p key={i} className="px-8 text-base font-medium text-white/90 md:text-lg">
                  若參賽者超過 40 位，再從剩餘參加者中抽出{' '}
                  <span className="font-bold text-mc-glow">5 張 7-11 100 元禮券</span>
                  {'　·　'}
                </p>
              ))}
            </div>
          </div>
        </NeonCard>
      </div>
    </section>
  )
}
