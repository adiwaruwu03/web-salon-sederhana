'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

import { useLanguage } from '@/lib/language-context'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: t('nav_home'), href: '/' },
    { label: t('nav_services'), href: '/layanan' },
    { label: t('nav_contact'), href: '/contact' },
    { label: t('nav_blog'), href: '/blog' },
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        scrolled 
          ? "bg-white/80 backdrop-blur-xl border-b border-border/50 py-3 shadow-sm" 
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left: Logo & Brand */}
          <Link href="/" className="flex items-center group">
            <div className="relative w-9 h-9 md:w-10 md:h-10 transition-transform duration-500 group-hover:scale-110">
              <Image 
                src="/apple-icon.png" 
                alt="Imelda Salon Logo" 
                fill 
                className="object-contain"
                priority
              />
            </div>
            <div className="ml-2 md:ml-3 flex flex-col">
              <span className="text-sm md:text-lg font-serif font-bold tracking-tight text-foreground leading-none">
                IMELDA
              </span>
              <span className="text-[7px] md:text-[9px] font-sans font-black tracking-[0.3em] text-primary uppercase leading-none mt-1">
                SALON
              </span>
            </div>
          </Link>

          {/* Center: Pill Navigation (Desktop Only) */}
          <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full border border-border/50 bg-white/40 backdrop-blur-md shadow-lg shadow-black/5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300",
                  isActive(item.href)
                    ? "bg-foreground text-background shadow-md shadow-black/10"
                    : "text-foreground/60 hover:text-primary hover:bg-white/50"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right: Actions (Language Toggle) */}
          <div className="flex items-center">
            <div className="flex items-center gap-2 rounded-full border border-border/50 bg-white/40 px-2.5 py-1.5 md:px-3 md:py-1.5 text-[9px] md:text-[10px] font-bold shadow-sm backdrop-blur-md">
              <button 
                onClick={() => setLanguage('id')}
                className={cn(
                  "transition-colors",
                  language === 'id' ? "text-foreground" : "text-muted-foreground hover:text-primary"
                )}
              >
                ID
              </button>
              <span className="text-border">|</span>
              <button 
                onClick={() => setLanguage('en')}
                className={cn(
                  "transition-colors",
                  language === 'en' ? "text-foreground" : "text-muted-foreground hover:text-primary"
                )}
              >
                EN
              </button>
            </div>
          </div>

        </div>
      </div>
    </header>
  )
}

