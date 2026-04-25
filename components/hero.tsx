'use client'

import { useState, useEffect } from "react"
import Link from 'next/link'
import { ArrowRight, Crown, ChevronLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

export function Hero() {
  const { t } = useLanguage()
  
  const images = [
    { src: '/album/Pengantin.jpg', alt: 'Bridal Makeup' },
    { src: '/album/Pengantin2.jpg', alt: 'Premium MUA' },
    { src: '/rambut/rambut (6).jpeg', alt: 'Luxury Styling' },
    { src: '/wisuda/wisudamakeup.webp', alt: 'Graduation Beauty' },
    { src: '/rambut/rambut (1).jpeg', alt: 'Professional Hair' },
    { src: '/rambut/rambut (2).jpeg', alt: 'Exclusive Hairdo' },
    { src: '/rambut/rambut (3).jpeg', alt: 'Wedding Stylist' },
    { src: '/rambut/rambut (4).jpeg', alt: 'Salon Special' },
    { src: '/rambut/rambut (5).jpeg', alt: 'MUA Expert' },
    { src: '/album/Pengantin.jpg', alt: 'Classic Bridal' },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // Deteksi mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-28 bg-[#fcf8f1]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] left-[-5%] w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-[100px] animate-hero-orb-float-left" />
        <div className="absolute bottom-[10%] right-[-5%] w-[35rem] h-[35rem] bg-primary/10 rounded-full blur-[120px] animate-hero-orb-float-right" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full text-center">
        <div className="space-y-6 animate-fade-up-soft">
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-foreground leading-tight tracking-tight">
            Selamat Datang <br />
            <span className="text-primary italic font-light">& Ayo Tampil Cantik</span>
          </h1>
          <div className="w-24 h-1 bg-primary/20 mx-auto rounded-full" />
        </div>
      </div>

      <style jsx global>{`
        .animate-hero-orb-float-left { animation: hero-orb-float-left 12s ease-in-out infinite; }
        .animate-hero-orb-float-right { animation: hero-orb-float-right 15s ease-in-out infinite; }
      `}</style>
    </section>
  )
}