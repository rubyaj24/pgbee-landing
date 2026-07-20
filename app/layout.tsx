import './globals.css'
import type { Metadata } from 'next'
import { Red_Hat_Display, Unbounded } from 'next/font/google'

const redHatDisplay = Red_Hat_Display({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const unbounded = Unbounded({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-unbounded',
})

export const metadata: Metadata = {
  title: 'PgBee | Find verified PGs and hostels near your college',
  description: 'Compare verified PGs, hostels and rooms near your college with PgBee.',
  metadataBase: new URL('https://pgbee.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'PgBee | Find your perfect student stay',
    description: 'Compare verified PGs, hostels and rooms near your college with PgBee.',
    url: 'https://pgbee.in',
    siteName: 'PgBee',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${redHatDisplay.className} ${unbounded.variable}`}>
      <body>{children}</body>
    </html>
  )
}
