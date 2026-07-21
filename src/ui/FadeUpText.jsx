import { motion } from 'framer-motion'
import { cn } from '../lib/utils'

export default function FadeUpText({ text, className = '', as: Tag = 'p', delay = 0 }) {
  const chars = Array.from(text)

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.035,
        delayChildren: delay,
      },
    },
  }

  const child = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 14, stiffness: 120 },
    },
  }

  return (
    <Tag className={cn('overflow-hidden', className)}>
      <motion.span
        className="inline-flex flex-wrap justify-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        aria-label={text}
      >
        {chars.map((char, index) => (
          <motion.span
            variants={child}
            key={`${char}-${index}`}
            className="inline-block"
            aria-hidden="true"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  )
}
