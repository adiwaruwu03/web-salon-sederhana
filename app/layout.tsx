import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'IMELDA SALON',
  description: 'IMELDA SALON menawarkan layanan salon profesional, makeup artistik, dan produk kecantikan berkualitas tinggi dengan standar internasional.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/apple-icon-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/apple-icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/apple-icon.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
