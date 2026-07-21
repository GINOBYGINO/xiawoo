import { motion } from 'framer-motion'
import { cn } from '../lib/utils'

export default function NeonCard({
  children,
  className = '',
  delay = 0,
  accent = false,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        type: 'spring',
        damping: 18,
        stiffness: 100,
        delay,
      }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className={cn(
        'relative rounded-2xl border bg-mc-card/80 backdrop-blur-sm p-6 md:p-8',
        accent
          ? 'border-mc-accent/60 shadow-[0_0_30px_rgba(245,158,11,0.25)]'
          : 'border-white/10 shadow-lg shadow-black/30',
        className,
      )}
    >
      {accent && (
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-mc-accent/10 to-transparent" />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
