'use client'

import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { FeaturedServices } from '@/components/featured-services'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <FeaturedServices />
      <Footer />
    </main>
  )
}
