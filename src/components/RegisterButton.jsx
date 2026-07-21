import { motion } from 'framer-motion'
import { cn } from '../lib/utils'

export default function RegisterButton({
  href = '#register',
  className = '',
  children = '現在報名',
}) {
  const isExternal = /^https?:\/\//.test(href)

  return (
    <motion.a
      href={href}
      {...(isExternal
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {})}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full bg-mc-accent px-8 py-3.5',
        'text-base font-bold text-mc-darker tracking-wide',
        'animate-pulse-glow transition-colors hover:bg-mc-glow',
        className,
      )}
    >
      {children}
    </motion.a>
  )
}
