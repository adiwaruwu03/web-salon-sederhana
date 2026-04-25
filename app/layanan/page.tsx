'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/language-context'
import { Crown, Gem, Scissors, ShieldCheck, Diamond, ArrowRight } from 'lucide-react'

const services = [
  {
    title: "Hair Design & Treatment",
    slug: "potong-styling-rambut-tarutung",
    icon: Scissors,
    description: "Transformasi rambut Anda dengan sentuhan ahli untuk hasil yang sehat, berkilau, dan trendi.",
    items: ["Potong & Styling", "Smoothing Premium", "Pewarnaan Ombre", "Creambath & Spa"],
    image: "/rambut/rambut (1).jpeg"
  },
  {
    title: "Bridal & Party Makeup",
    slug: "mua-pengantin-tarutung",
    icon: Crown,
    description: "Pancarkan aura pengantin Anda dengan riasan yang tahan lama, elegan, dan menonjolkan kecantikan alami.",
    items: ["Makeup Pengantin", "Makeup Lamaran", "Makeup Adat Batak", "Makeup Pesta"],
    image: "/album/Pengantin.jpg"
  },
  {
    title: "Exclusive Hairdo",
    slug: "hairdo-wedding-tarutung",
    icon: Gem,
    description: "Tatanan rambut artistik untuk melengkapi penampilan Anda di setiap acara istimewa.",
    items: ["Hairdo Pengantin", "Hairdo Bridesmaid", "Hairdo Pesta", "Modern Updo"],
    image: "/rambut/rambut (2).jpeg"
  },
  {
    title: "Graduation Beauty",
    slug: "makeup-wisuda-tarutung",
    icon: ShieldCheck,
    description: "Tampil percaya diri dan memukau di hari kelulusan Anda dengan paket makeup & hairdo spesial.",
    items: ["Makeup Wisuda Natural", "Makeup Wisuda Glam", "Package Hairdo", "Touch up Service"],
    image: "/wisuda/wisudamakeup.webp"
  },
]

export default function LayananPage() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen bg-[#fcf8f1]">
      <Header />

      {/* Hero Section - More Compact */}
      <section className="pt-32 pb-16 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10 space-y-4 animate-fade-in">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/80 border border-primary/20 shadow-sm backdrop-blur-sm">
            <Diamond className="h-3.5 w-3.5 text-primary" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary">{t('hero_badge')}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground">
            {t('services_title')}
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t('services_desc')}
          </p>
        </div>
      </section>

      {/* Services Grid - Minimalist & Refined */}
      <section className="py-12 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, i) => (
            <div key={i} className="group flex flex-col space-y-6 animate-fade-up">
              {/* Smaller Square Image */}
              <div className="relative aspect-square w-full max-w-[280px] mx-auto rounded-3xl overflow-hidden border border-border/50 shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-110"
                />
              </div>

              {/* Minimalist Text Content */}
              <div className="space-y-4 text-center px-2">
                <div className="flex justify-center">
                  <div className="h-10 w-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary border border-primary/10">
                    <service.icon size={20} />
                  </div>
                </div>
                
                <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground">
                  {service.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-wrap justify-center gap-1.5 py-1">
                  {service.items.slice(0, 3).map((item, idx) => (
                    <span key={idx} className="text-[9px] font-bold uppercase tracking-widest text-primary/60">
                      {item} {idx < 2 && "•"}
                    </span>
                  ))}
                </div>

                <div className="pt-6">
                  <Link 
                    href={`/layanan/${service.slug}`} 
                    className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-primary/20 text-[10px] font-bold uppercase tracking-[0.2em] text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary hover:shadow-lg hover:shadow-primary/20 group"
                  >
                    View Details 
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA - Premium Redesign */}
      <section className="pb-32 px-6">
        <div className="max-w-5xl mx-auto relative group">
          {/* Decorative Orbs */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/30 rounded-full blur-3xl animate-pulse delay-700" />

          <div className="relative z-10 rounded-[3rem] bg-foreground p-12 md:p-20 text-center space-y-10 overflow-hidden shadow-2xl shadow-primary/20">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
            
            <div className="space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                <Gem className="h-3.5 w-3.5 text-primary" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">Make Your Moment Special</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
                {t('services_cta_title')} <br />
                <span className="text-primary italic">{t('services_cta_title_highlight')}</span>
              </h2>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact">
                <Button className="bg-primary text-white h-14 px-12 rounded-full text-base font-bold hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/30 group">
                  {t('services_cta_btn')}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-foreground bg-secondary flex items-center justify-center overflow-hidden">
                    <img src={`/rambut/rambut (${i}).jpeg`} alt="Customer" className="h-full w-full object-cover" />
                  </div>
                ))}
                <div className="h-10 px-4 rounded-full border-2 border-foreground bg-white/10 backdrop-blur-md flex items-center justify-center text-[10px] font-bold text-white">
                  +500 Clients
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}