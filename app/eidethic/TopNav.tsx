'use client'

import { useEffect, useState } from 'react'
import { LogoSvg } from '@/components/LogoSvg'

function formatUtcTime(date: Date): string {
  return date.toISOString().split('T')[1].split('.')[0] + ' UTC'
}

export function TopNav() {
  const [time, setTime] = useState('00:00:00 UTC')

  useEffect(() => {
    const update = () => setTime(formatUtcTime(new Date()))
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <nav
      className="absolute left-0 top-0 z-10 flex w-full justify-between p-4 font-mono text-xs lowercase text-neutral-500 md:p-8"
      aria-label="navigation"
    >
      <LogoSvg size={100} aria-label="eïdethic logo" />
      <div aria-live="polite">{time}</div>
    </nav>
  )
}
