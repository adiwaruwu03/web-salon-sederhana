'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle, MapPin, Clock, Instagram, Facebook, ArrowUpRight } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

export function Footer() {
  const { t } = useLanguage()
  const whatsappNumber = '6282285310686'

  return (
    <footer className="bg-[#1a1512] text-white py-24 relative overflow-hidden">
      {/* Subtle decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 pb-16 border-b border-white/5">
          
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-8">
            <Link href="/" className="inline-flex items-center group">
              <div className="relative w-12 h-12 flex items-center justify-center">
                <Image 
                  src="/apple-icon.png" 
                  alt="Imelda Salon Logo" 
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div className="ml-4">
                <span className="text-2xl font-serif font-bold block leading-none tracking-tight">IMELDA</span>
                <span className="text-[10px] font-sans tracking-[0.3em] text-primary uppercase mt-1 block">SALON</span>
              </div>
            </Link>
            
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              {t('footer_desc')}
            </p>

            <div className="flex items-center gap-4">
              {[
                { icon: Instagram, label: 'Instagram' },
                { icon: Facebook, label: 'Facebook' }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-2 space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Navigasi</h4>
            <ul className="space-y-4">
              {[
                { label: t('nav_home'), href: '/' },
                { label: t('nav_services'), href: '/layanan' },
                { label: t('nav_shop'), href: '/shop' },
                { label: t('nav_contact'), href: '/contact' },
                { label: t('nav_blog'), href: '/blog' }
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/50 hover:text-white transition-colors flex items-center group">
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-all -translate-y-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">{t('contact_info_cs')}</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 text-sm text-white/50">
                <MapPin size={18} className="text-primary flex-shrink-0" />
                <span className="leading-relaxed">Hutagurgur - Garoga, Tarutung, Tapanuli Utara</span>
              </li>
              <li className="flex items-center gap-4 text-sm text-white/50">
                <MessageCircle size={18} className="text-primary flex-shrink-0" />
                <a href={`https://wa.me/${whatsappNumber}`} className="hover:text-white transition-colors font-medium">
                  +62 822 8531 0686
                </a>
              </li>
              <li className="flex items-center gap-4 text-sm text-white/50">
                <Clock size={18} className="text-primary flex-shrink-0" />
                <span>Senin - Sabtu: 09:00 - 18:00</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Newsletter</h4>
            <p className="text-sm text-white/50 leading-relaxed">
              Dapatkan update layanan dan promo terbaru kami secara eksklusif.
            </p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:border-primary/50 transition-all group-hover:border-white/20"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-primary text-white px-5 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-primary/90 transition-all active:scale-95">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 flex flex-col items-center justify-center text-center gap-6">
          <p className="text-[10px] font-medium text-white/30 uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Imelda Salon Tarutung. Fine Art of Beauty.
          </p>
        </div>
      </div>
    </footer>
  )
}