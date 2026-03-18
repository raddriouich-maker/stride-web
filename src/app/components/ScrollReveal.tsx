'use client'
import { useEffect, useRef } from 'react'

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

function seededVal(seed: number, min: number, max: number): number {
  const s = Math.sin(seed * 127.1 + 311.7) * 43758.5453123
  return min + (s - Math.floor(s)) * (max - min)
}

interface Props {
  children: React.ReactNode
  className?: string
  stagger?: boolean
  delay?: number
}

let instanceCounter = 0

export default function ScrollReveal({ children, className = '', stagger = false }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const seedRef = useRef<number>(-1)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Assign stable seed on client (avoids SSR mismatch)
    if (seedRef.current === -1) seedRef.current = instanceCounter++
    const seed = seedRef.current

    // Deterministic chaos values per element
    const tx    = seededVal(seed,     -90, 90)     // horizontal scatter
    const ty    = seededVal(seed + 1,  30, 110)    // always arrives from below
    const rot   = seededVal(seed + 2, -20, 20)     // tilt
    const sc    = seededVal(seed + 3, 0.55, 0.88)  // scale down

    let rafId: number
    let settled = false

    const update = () => {
      if (settled) return
      const rect = el.getBoundingClientRect()
      const vh   = window.innerHeight

      // progress: 0 = element's top is at viewport bottom, 1 = element's top is at 25% from top
      const raw      = (vh * 0.9 - rect.top) / (vh * 0.65)
      const progress = Math.max(0, Math.min(1, raw))
      const t        = easeOutExpo(progress)

      el.style.opacity   = String(Math.min(1, progress * 2.2))
      el.style.transform = progress === 0
        ? `translate(${tx}px, ${ty}px) rotate(${rot}deg) scale(${sc})`
        : `translate(${tx * (1 - t)}px, ${ty * (1 - t)}px) rotate(${rot * (1 - t)}deg) scale(${sc + (1 - sc) * t})`

      // Trigger child CSS animations (water bars, streak dots…)
      if (progress > 0.55 && !el.classList.contains('visible')) {
        el.classList.add('visible')
      }

      if (progress >= 1) {
        settled = true
        el.style.opacity   = '1'
        el.style.transform = 'none'
        el.classList.add('visible')
        window.removeEventListener('scroll', onScroll)
      }
    }

    const onScroll = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(update)
    }

    // Set initial chaos state immediately
    el.style.opacity   = '0'
    el.style.transform = `translate(${tx}px, ${ty}px) rotate(${rot}deg) scale(${sc})`
    el.style.willChange = 'transform, opacity'

    window.addEventListener('scroll', onScroll, { passive: true })
    update() // evaluate on mount (elements already in view on load)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div ref={ref} className={`reveal ${stagger ? 'stagger' : ''} ${className}`}>
      {children}
    </div>
  )
}
