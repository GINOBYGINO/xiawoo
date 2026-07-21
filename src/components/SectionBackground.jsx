import { useState } from 'react'
import { cn } from '../lib/utils'

/**
 * Background image — height-first fill.
 * Width may overflow; image is centered and scaled up so letterbox bars are cropped.
 *
 * @param {string} src
 * @param {string} [className]
 * @param {boolean} [overlay]
 * @param {number} [zoom=1.7] — enlarge to crop cinematic black bars (~1.6–1.9)
 * @param {string} [focus='center'] — CSS object-position / focal point
 */
export default function SectionBackground({
  src,
  className = '',
  overlay = true,
  zoom = 1.7,
  focus = 'center',
}) {
  const [failed, setFailed] = useState(false)

  return (
    <div className={cn('absolute inset-0 overflow-hidden', className)} aria-hidden="true">
      {!failed ? (
        <img
          src={src}
          alt=""
          className="pointer-events-none absolute left-1/2 top-1/2 max-w-none"
          style={{
            height: `${zoom * 100}%`,
            width: 'auto',
            minWidth: '100%',
            transform: 'translate(-50%, -50%)',
            objectFit: 'cover',
            objectPosition: focus,
          }}
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="h-full w-full bg-gradient-to-br from-mc-darker via-slate-900 to-mc-dark" />
      )}
      {overlay && (
        <div className="absolute inset-0 section-overlay" />
      )}
    </div>
  )
}
