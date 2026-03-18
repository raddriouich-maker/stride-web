'use client'
import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const update = () => {
      const el = document.documentElement
      setPct((el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100)
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-[200] h-[2px]" style={{ background: 'rgba(255,255,255,0.04)' }}>
      <div
        style={{
          width: `${pct}%`,
          height: '100%',
          background: 'linear-gradient(90deg, #10B981, #059669, #6EE7B7)',
          boxShadow: '0 0 8px rgba(16,185,129,0.8)',
          transition: 'width 0.08s linear',
        }}
      />
    </div>
  )
}
