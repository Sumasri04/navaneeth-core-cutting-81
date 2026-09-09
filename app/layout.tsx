import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

export const metadata: Metadata = {
  title: 'Navaneeth Core Cutting Service | Miyapur, Hyderabad',
  description: 'Navaneeth Core Cutting Service provides core cutting, wall cutting, slab cutting, drilling and concrete cutting services in Miyapur and nearby areas.',
  keywords: ['core cutting Miyapur', 'concrete cutting Miyapur', 'AC hole cutting Miyapur', 'wall cutting service'],
  generator: 'v0.app',
  icons: { icon: '/favicon.svg' },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#111827',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`bg-background ${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
