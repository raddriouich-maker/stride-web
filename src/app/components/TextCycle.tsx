'use client'
import { useEffect, useState } from 'react'

const DEFAULT_WORDS = ['students', 'developers', 'remote workers', 'parents', 'athletes']

export default function TextCycle({
  words = DEFAULT_WORDS,
  className = '',
}: {
  words?: string[]
  className?: string
}) {
  const [idx, setIdx] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIdx(i => (i + 1) % words.length)
        setVisible(true)
      }, 260)
    }, 2400)
    return () => clearInterval(id)
  }, [words.length])

  return (
    <span
      className={className}
      style={{
        display: 'inline-block',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(7px)',
        transition: 'opacity 0.26s ease, transform 0.26s ease',
      }}
    >
      {words[idx]}
    </span>
  )
}
