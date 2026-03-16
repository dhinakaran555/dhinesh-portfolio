import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dhinakaran R — Frontend Developer',
  description: 'Frontend Developer with 2+ years experience in React, Next.js, Tailwind CSS, and more.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
