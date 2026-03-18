'use client'
import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!ref.current) return
      ref.current.style.left = e.clientX + 'px'
      ref.current.style.top = e.clientY + 'px'
      ref.current.style.opacity = '1'
    }
    const leave = () => {
      if (ref.current) ref.current.style.opacity = '0'
    }
    window.addEventListener('mousemove', move)
    document.addEventListener('mouseleave', leave)
    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseleave', leave)
    }
  }, [])

  return (
    <div
      ref={ref}
      className="hidden md:block fixed pointer-events-none opacity-0 rounded-full"
      style={{
        zIndex: 0,
        width: '700px',
        height: '700px',
        background:
          'radial-gradient(circle at center, rgba(16,185,129,0.04) 0%, rgba(5,150,105,0.02) 40%, transparent 70%)',
        transform: 'translate(-50%, -50%)',
        transition: 'opacity 0.6s ease',
        willChange: 'left, top',
      }}
    />
  )
}
