import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Eïdethic — COSS',
  description:
    'Open Source System Architecture. Exploring the delta between signal and noise.',
}

export default function EidethicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
