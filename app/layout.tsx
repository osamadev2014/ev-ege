import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { createMetadata, siteName } from '@/lib/utils'

const title = `${siteName} | وكالة إبداعية`
const description = 'وكالة إبداعية متكاملة — ذكاء. إبداعي. | A full-service creative agency — Creative. Intelligence.'

export const metadata: Metadata = {
  title,
  description,
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title,
    description,
    siteName,
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@evico_sa',
    title,
    description,
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#111827',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className="bg-background"
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
