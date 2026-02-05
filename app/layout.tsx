import React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "IMELDA SALON",
  description:
    "Imelda Salon adalah salon kecantikan profesional di Garoga, Tapanuli Utara yang menyediakan layanan perawatan rambut, makeup artist (MUA), rias pengantin, hair styling, dan kecantikan wanita. Melayani pelanggan dari Tarutung, Garoga, dan sekitarnya dengan hasil riasan elegan, pelayanan ramah, serta harga terjangkau untuk setiap momen spesial Anda.",

  generator: "v0.app",

  // ✅ GOOGLE VERIFICATION (AMAN, TANPA UBAH FONT)
  verification: {
    google: "EojTxLlWahNp6ERDt2i6uBGbyQxDm0tH4O1voWlgT4k",
  },

  icons: {
    icon: [
      {
        url: "/apple-icon-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/apple-icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/apple-icon.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
