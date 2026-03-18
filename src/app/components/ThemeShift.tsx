'use client'
import { useEffect } from 'react'

// Accent color per section — changes as you scroll through the page
const SECTION_THEMES: { id: string; accent: string }[] = [
  { id: 'section-hero',         accent: '#10B981' }, // emerald
  { id: 'section-features',     accent: '#4ADE80' }, // green
  { id: 'section-howto',        accent: '#22D3EE' }, // cyan
  { id: 'section-screenshots',  accent: '#A78BFA' }, // violet
  { id: 'section-value',        accent: '#FBBF24' }, // amber
  { id: 'section-faq',          accent: '#818CF8' }, // indigo
  { id: 'section-cta',          accent: '#10B981' }, // back to emerald
]

export default function ThemeShift() {
  useEffect(() => {
    const root = document.documentElement

    const observers: IntersectionObserver[] = []

    SECTION_THEMES.forEach(({ id, accent }) => {
      const el = document.getElementById(id)
      if (!el) return

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            root.style.setProperty('--accent', accent)
          }
        },
        { threshold: 0.25 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  return null
}
