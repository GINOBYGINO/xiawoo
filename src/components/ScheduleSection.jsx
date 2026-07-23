import { motion } from 'framer-motion'
import { CalendarDays, Clock, Flag } from 'lucide-react'
import SectionBackground from './SectionBackground'

const events = [
  {
    date: '7 / 22',
    title: '報名開始',
    desc: '開放線上報名，搶先鎖定參賽資格',
    icon: CalendarDays,
  },
  {
    date: '8 / 2 18:00',
    title: '報名截止',
    desc: '截止不再接受新報名',
    icon: Clock,
  },
  {
    date: '8 / 2 19:30',
    title: '比賽正式開始',
    desc: '下午 7:30 起，九個賽道挑戰開跑，登頂者為王',
    icon: Flag,
  },
]

export default function ScheduleSection() {
  return (
    <section
      id="schedule"
      className="relative overflow-hidden px-4 py-24 md:py-32"
    >
      <SectionBackground src="/bg-5.png" zoom={1.85} focus="50% 50%" />

      <div className="relative z-10 mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-4 inline-block text-xs font-semibold tracking-[0.3em] text-mc-accent uppercase"
          >
            SCHEDULE
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-black md:text-5xl"
          >
            時程表
          </motion.h2>
        </div>

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-mc-accent via-white/20 to-transparent md:left-1/2 md:-translate-x-px" />

          <ul className="space-y-12">
            {events.map((event, index) => {
              const Icon = event.icon
              const isLeft = index % 2 === 0

              return (
                <motion.li
                  key={event.title}
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    type: 'spring',
                    damping: 16,
                    stiffness: 120,
                    delay: index * 0.15,
                  }}
                  className="relative flex items-start gap-6 md:items-center"
                >
                  {/* node */}
                  <div className="absolute left-6 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-2 border-mc-accent bg-mc-darker shadow-[0_0_20px_rgba(245,158,11,0.4)] md:left-1/2">
                    <Icon size={18} className="text-mc-accent" />
                  </div>

                  {/* card */}
                  <div
                    className={`ml-16 w-full rounded-xl border border-white/10 bg-mc-card/80 p-5 backdrop-blur-sm md:ml-0 md:w-[calc(50%-2.5rem)] ${
                      isLeft ? 'md:mr-auto md:text-right' : 'md:ml-auto'
                    }`}
                  >
                    <p className="mb-1 text-sm font-bold tracking-wider text-mc-accent">
                      {event.date}
                    </p>
                    <h3 className="mb-1 text-xl font-bold text-white">{event.title}</h3>
                    <p className="text-sm text-mc-muted">{event.desc}</p>
                  </div>
                </motion.li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
