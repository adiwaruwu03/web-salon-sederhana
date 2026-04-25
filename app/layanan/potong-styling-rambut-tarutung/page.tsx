'use client'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'
import { ArrowRight, Scissors, Star, CheckCircle2, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

/* ================= WHATSAPP FUNCTION ================= */
const WHATSAPP_NUMBER = "6282285310686"

function handleWhatsApp(title: string, price: string, language: string) {
  const intro = language === 'id' ? 'Halo Imelda Salon 👋' : 'Hello Imelda Salon 👋'
  const interested = language === 'id' ? 'Saya tertarik dengan layanan:' : 'I am interested in the service:'
  const priceLabel = language === 'id' ? 'Harga:' : 'Price:'
  const query = language === 'id' ? 'Apakah masih tersedia? Mohon info jadwal & detailnya ya. Terima kasih 🙏' : 'Is it still available? Please info the schedule & details. Thank you 🙏'

  const message = encodeURIComponent(
    `${intro}\n\n${interested}\n\n💇‍♀️ ${title}\n💰 ${priceLabel} ${price}\n\n${query}`
  )

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank')
}

export default function PotongRambutPage() {
  const { t, language } = useLanguage()

  return (
    <main className="min-h-screen bg-[#fcf8f1]">
      <Header />

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-primary/20 shadow-sm backdrop-blur-sm animate-fade-in">
            <Scissors className="h-4 w-4 text-primary" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary">Luxury Hair Service</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground leading-tight animate-fade-up">
            {t('sd_hair_title')}
          </h1>
          
          <p className="text-base md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto animate-fade-up animation-delay-200">
            {t('sd_hair_desc')}
          </p>

          <div className="grid grid-cols-3 gap-6 pt-12 max-w-2xl mx-auto border-t border-border/50 animate-fade-up animation-delay-400">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-foreground">500+</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-foreground">10+</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">Experts</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-foreground">5+</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">Years</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DESKRIPSI SECTION ================= */}
      <section className="py-24 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground leading-tight">
                {t('sd_best_title')}
              </h2>

              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                <p>{t('sd_best_desc')}</p>
                <p>{t('sd_best_desc2')}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {['Professional Stylist', 'Sterile Tools', 'Affordable Price', 'No Queue'].map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-sm font-bold text-foreground/80">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-[2rem] overflow-hidden shadow-xl">
                  <img src="/potong/cut1.webp" alt="Hair styling" className="h-full w-full object-cover hover:scale-110 transition duration-700" />
                </div>
                <div className="aspect-square rounded-[2rem] overflow-hidden shadow-xl">
                  <img src="/potong/cut2.jpg" alt="Hair cut" className="h-full w-full object-cover hover:scale-110 transition duration-700" />
                </div>
              </div>
              <div className="pt-12">
                <div className="aspect-[3/4] rounded-[2rem] overflow-hidden shadow-xl">
                  <img src="/potong/cut3.jpeg" alt="Salon" className="h-full w-full object-cover hover:scale-110 transition duration-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HARGA SECTION ================= */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
              {t('sd_price_title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              {t('sd_price_desc')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Hair Cut & Styling", price: "Rp 15k – 30k", icon: "✂️", popular: false },
              { title: "Smoothing / Rebonding", price: "Rp 150k – 500k", icon: "💆‍♀️", popular: true },
              { title: "Hair Coloring", price: "Rp 50k – 100k", icon: "🎨", popular: false },
              { title: "Ombre / Highlight", price: "Rp 100k – 200k", icon: "✨", popular: false },
              { title: "Creambath & Hair Spa", price: "Rp 50k – 100k", icon: "🧖‍♀️", popular: false }
            ].map((item, i) => (
              <div key={i} className={cn(
                "relative p-8 rounded-[2.5rem] bg-white shadow-xl transition-all hover:-translate-y-2 group",
                item.popular ? "border-2 border-primary" : "border border-border/50"
              )}>
                {item.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">
                    Best Seller
                  </span>
                )}
                <div className="text-center space-y-6 flex flex-col h-full">
                  <div className="text-4xl">{item.icon}</div>
                  <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                  <div className="py-3 px-6 rounded-2xl bg-primary/5 text-primary font-bold text-lg">
                    {item.price}
                  </div>
                  <Button 
                    onClick={() => handleWhatsApp(item.title, item.price, language)}
                    className={cn(
                      "mt-auto w-full h-12 rounded-full font-bold transition-all",
                      item.popular ? "bg-primary text-white" : "variant-outline border-primary text-primary hover:bg-primary hover:text-white"
                    )}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    {t('sd_whatsapp')}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto p-12 md:p-20 rounded-[3rem] bg-foreground text-white space-y-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-50" />
          <div className="relative z-10 space-y-4">
            <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight">
              {t('services_cta_title')} <br />
              <span className="text-primary italic">{t('services_cta_title_highlight')}</span>
            </h2>
            <p className="text-white/60 text-lg max-w-lg mx-auto">
              {t('hero_desc')}
            </p>
          </div>
          <div className="relative z-10 pt-4">
            <Link href="/contact">
              <Button className="bg-primary text-white h-14 px-12 rounded-full text-lg font-bold hover:bg-primary/90 shadow-xl shadow-primary/20 group">
                {t('contact_form_btn')}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
