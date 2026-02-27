'use client'

import { usePathname } from 'next/navigation'
import { Header } from './header'
import { Footer } from './footer'

export function LayoutChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isEidethic = pathname === '/eidethic'

  if (isEidethic) {
    return <>{children}</>
  }

  return (
    <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
      <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  )
}
