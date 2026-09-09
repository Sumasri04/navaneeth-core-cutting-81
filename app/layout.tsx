import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Navaneeth Core Cutting Service | Miyapur, Hyderabad',
  description: 'Concrete core cutting, wall cutting, slab cutting and diamond drilling services for construction and renovation sites across Miyapur and Hyderabad.',
  keywords: ['core cutting Miyapur', 'concrete cutting Hyderabad', 'diamond drilling Hyderabad', 'wall cutting service'],
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#111827',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-background">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
