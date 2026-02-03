import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary to-background opacity-40" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance">
            <span className="text-primary">IMELDA SALON</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground text-balance">
            Kecantikan & MUA 
          </p>
          <p className="text-base text-foreground/70 max-w-2xl mx-auto text-balance">
            Kami menyediakan layanan salon lengkap, dari perawatan rambut hingga makeup profesional. Setiap sesi dirancang untuk membuat Anda merasa percaya diri dan cantik.
          </p>
        </div>
      </div>
    </section>
  )
}
