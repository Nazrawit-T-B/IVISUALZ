import React, { useEffect } from 'react'

export function SpotlightCard({ 
  children, 
  title, 
  description, 
  className = '', 
  glowColor = 'bg-sky-600/60 dark:bg-sky-400/60' 
}) {
  useEffect(() => {
    const all = document.querySelectorAll('.spotlight-card')

    const handleMouseMove = (ev) => {
      all.forEach((e) => {
        const blob = e.querySelector('.blob')
        const fblob = e.querySelector('.fake-blob')
        if (!blob || !fblob) return

        const rec = fblob.getBoundingClientRect()
        blob.style.opacity = '1'

        blob.animate(
          [
            {
              transform: `translate(${ev.clientX - rec.left - rec.width / 2}px, ${ev.clientY - rec.top - rec.height / 2}px)`,
            },
          ],
          { duration: 300, fill: 'forwards' }
        )
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className={`spotlight-card group relative overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition-all duration-300 ease-in-out ${className}`}>
      {/* Card Content */}
      {title && <h3 className="text-lg font-semibold text-card-foreground">{title}</h3>}
      {description && <p className="mt-2 text-sm text-muted-foreground">{description}</p>}
      {children}

      {/* Glow Effect Elements */}
      <div className={`blob pointer-events-none absolute left-0 top-0 size-20 rounded-full opacity-0 blur-2xl transition-all duration-300 ease-in-out ${glowColor}`} />
      <div className="fake-blob absolute left-0 top-0 size-20 rounded-full" />
    </div>
  )
}