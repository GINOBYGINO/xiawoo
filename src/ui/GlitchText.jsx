import { cn } from '../lib/utils'

export default function GlitchText({ text, className = '' }) {
  return (
    <span
      className={cn('glitch-wrapper relative inline-block', className)}
      data-text={text}
    >
      <span className="relative z-10">{text}</span>
    </span>
  )
}
