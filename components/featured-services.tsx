'use client'

import Link from 'next/link'
import { ArrowRight, ShieldCheck, Diamond, Gem, Award, Target, Users } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

import { useLanguage } from '@/lib/language-context'

export function FeaturedServices() {
  const { t } = useLanguage()
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })

    document.querySelectorAll('.fade-up, .fade-in, .scale-in, .slide-in-left, .slide-in-right').forEach((el) => {
      observerRef.current?.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <section className="py-24 sm:py-32 bg-background relative overflow-hidden">
      {/* Subtle Background Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-40 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Owner Section - Balanced Design */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Foto Owner - More Compact & Proportional */}
          <div className="relative w-full max-w-[320px] mx-auto aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl group scale-in">
            <Image
              src="/album/founder.jpg"
              alt="Owner Imelda Salon - Melda Pasaribu"
              fill
              className="object-cover object-top transition-all duration-1000 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
            
            {/* Premium Badge - More Compact */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <div className="flex items-center gap-2 mb-0.5">
                <Award className="h-3.5 w-3.5 text-primary" />
                <span className="text-[9px] font-bold text-white uppercase tracking-widest">Master Stylist</span>
              </div>
              <p className="text-white/80 text-[10px] italic leading-relaxed">"Kecantikan sejati dimulai saat Anda menjadi diri sendiri."</p>
            </div>
          </div>

          {/* Penjelasan Owner - Compact Typography */}
          <div className="space-y-6 slide-in-right">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-[10px] font-bold text-primary uppercase tracking-widest border border-primary/20">
              <Diamond className="h-3.5 w-3.5" />
              {t('owner_badge')}
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground leading-tight">
                {t('owner_title_1')} <br />
                <span className="text-primary italic">{t('owner_title_2')}</span>
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed max-w-lg text-justify">
                {t('owner_desc')}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0 text-primary border border-primary/10">
                  <Gem size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-foreground">{t('owner_feature_1_title')}</h4>
                  <p className="text-[11px] text-muted-foreground mt-0.5">{t('owner_feature_1_desc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0 text-primary border border-primary/10">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-foreground">{t('owner_feature_2_title')}</h4>
                  <p className="text-[11px] text-muted-foreground mt-0.5">{t('owner_feature_2_desc')}</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all hover:-translate-y-0.5 active:scale-95 group"
              >
                {t('owner_consult')}
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
        {/* Visi Misi - Compact Layout */}
        <div className="mt-20 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="p-8 rounded-[2rem] bg-white/50 backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-all group fade-up">
            <Target className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-serif font-bold mb-3">Visi Kami</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Menjadi standar emas layanan kecantikan di Tapanuli Utara, di mana profesionalisme bertemu dengan kenyamanan yang hangat dan hasil yang memukau.
            </p>
          </div>

          <div className="p-8 rounded-[2rem] bg-white/50 backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-all group fade-up animation-delay-200">
            <Users className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-serif font-bold mb-3">Misi Kami</h3>
            <ul className="space-y-2">
              {["Inovasi teknik kecantikan berkelanjutan", "Integritas dalam penggunaan produk", "Membangun kepercayaan melalui hasil nyata"].map((misi, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="h-1 w-1 rounded-full bg-primary" />
                  {misi}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center fade-up animation-delay-400">
          <Link 
            href="/layanan"
            className="inline-flex items-center justify-center px-8 py-3 bg-foreground text-background rounded-full font-bold text-sm hover:bg-primary hover:text-white transition-all shadow-lg active:scale-95"
          >
            Lihat Semua Layanan
          </Link>
        </div>
      </div>

      <style jsx global>{`
        .fade-up, .scale-in, .slide-in-right {
          opacity: 0;
          transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .fade-up { transform: translateY(30px); }
        .scale-in { transform: scale(0.95); }
        .slide-in-right { transform: translateX(30px); }
        
        .animate-in {
          opacity: 1 !important;
          transform: translate(0) scale(1) !important;
        }
        .animation-delay-200 { transition-delay: 200ms; }
        .animation-delay-400 { transition-delay: 400ms; }
      `}</style>
    </section>
  )
}