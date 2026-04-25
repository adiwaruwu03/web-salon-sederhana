import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { FeaturedServices } from '@/components/featured-services'
import { About } from '@/components/about'
import { Testimonials } from '@/components/testimonials'
import { FAQ } from '@/components/faq'
import { Location } from '@/components/location'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <FeaturedServices />
      <About />
      <Testimonials />
      <FAQ />
      <Location />
      <Footer />
    </main>
  )
}
