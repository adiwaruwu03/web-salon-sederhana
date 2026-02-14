'use client'

import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ArrowRight, Star, Sparkles, Heart, Award, Target, Users, Code } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

export function FeaturedServices() {
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
    <section className="py-20 sm:py-24 bg-gradient-to-b from-white via-white to-secondary/5 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse-slower" />
        <div className="absolute top-60 right-40 w-48 h-48 bg-primary/5 rounded-full blur-3xl animate-float-slow" />
      </div>

      {/* Floating Beauty Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-[10%] text-4xl text-primary/5 animate-float-slow">💄</div>
        <div className="absolute bottom-20 right-[10%] text-4xl text-primary/5 animate-float">💇‍♀️</div>
        <div className="absolute top-40 right-[15%] text-3xl text-primary/5 animate-float-fast">✨</div>
        <div className="absolute bottom-40 left-[15%] text-3xl text-primary/5 animate-float-slow">👰</div>
        <div className="absolute top-1/2 left-[5%] text-2xl text-primary/5 animate-pulse-slow">⭐</div>
        <div className="absolute top-1/3 right-[5%] text-2xl text-primary/5 animate-pulse-slower">🌸</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Heading Website Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 fade-up">
          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-2 pt-4">
            <div className="h-1 w-12 bg-primary/30 rounded-full" />
            <div className="h-2 w-2 bg-primary rounded-full animate-pulse" />
            <div className="h-1 w-12 bg-primary/30 rounded-full" />
          </div>
        </div>

        {/* Owner Section - Premium Design */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Foto Owner dengan Spotlight Effect */}
          <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl group scale-in">
            {/* Spotlight Effects */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 -z-10" />
            
            {/* Premium Frame */}
            <div className="absolute inset-0 ring-2 ring-primary/20 group-hover:ring-4 group-hover:ring-primary/40 rounded-2xl transition-all duration-700 z-20" />
            
            {/* Light Beams */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <Image
              src="/album/founder.jpg"
              alt="Owner Imelda Salon - Ibu Imelda"
              fill
              className="object-cover transition-all duration-1000 group-hover:scale-110"
              priority
            />
            
            {/* Premium Badge */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-xl transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 z-30">
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-primary" />
                <span className="text-xs font-semibold text-foreground">Founder & Master Stylist</span>
              </div>
            </div>

            {/* Experience Badge */}
            <div className="absolute bottom-4 right-4 bg-primary/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-xl transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 z-30">
              <div className="flex items-center gap-2 text-white">
                <Star className="h-4 w-4 fill-white" />
                <span className="text-xs font-semibold">5 Tahun Pengalaman</span>
              </div>
            </div>
          </div>

          {/* Penjelasan Owner - Premium Typography */}
          <div className="space-y-6 slide-in-right">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Heart className="h-4 w-4" />
              Passion in Beauty
            </div>

            <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Owner
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80 mt-2">
                Melda Pasaribu
              </span>
            </h3>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Imelda Salon didirikan dengan tujuan membantu setiap wanita
                tampil percaya diri di hari istimewanya. Dengan pengalaman
                di bidang makeup dan hair styling, owner berkomitmen
                memberikan pelayanan terbaik dengan sentuhan profesional.
              </p>

              <p>
                Fokus utama kami adalah kualitas riasan, kebersihan alat,
                serta kenyamanan pelanggan agar setiap momen menjadi
                kenangan yang tak terlupakan.
              </p>
            </div>

            {/* Quote Card */}
            <div className="relative group rounded-xl bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 p-6 border border-primary/10 hover:border-primary/30 transition-all duration-500">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">"</span>
                </div>
                <div>
                  <p className="italic text-foreground/80">
                    Kecantikan sejati adalah ketika seseorang merasa percaya diri dengan dirinya sendiri.
                  </p>
                  <p className="text-sm font-medium text-primary mt-2">— Melda Pasaribu</p>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary border border-primary/20">
                <Star className="h-3 w-3" />
                500+ Client Puas
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary border border-primary/20">
                <Award className="h-3 w-3" />
                Master Stylist
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary border border-primary/20">
                <Heart className="h-3 w-3" />
                Wedding Specialist
              </span>
            </div>
          </div>
        </div>

        {/* Visi Misi - Modern Cards */}
        <div className="mt-28 grid md:grid-cols-2 gap-8 lg:gap-10">
          {/* Visi Card */}
          <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border/50 fade-up">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500" />
            
            <div className="relative">
              {/* Icon Circle */}
              <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Target className="h-10 w-10 text-primary" />
              </div>
              
              <h4 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                Visi
              </h4>
              
              <p className="text-muted-foreground leading-relaxed text-lg">
                Menjadi salon dan jasa makeup terpercaya di Tarutung
                yang dikenal akan kualitas, pelayanan, dan hasil riasan
                profesional.
              </p>

              {/* Decorative Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-primary/80 group-hover:w-full transition-all duration-700 rounded-b-3xl" />
            </div>
          </div>

          {/* Misi Card */}
          <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border/50 fade-up animation-delay-200">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500" />
            
            <div className="relative">
              {/* Icon Circle */}
              <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                <Users className="h-10 w-10 text-primary" />
              </div>
              
              <h4 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                Misi
              </h4>
              
              <ul className="space-y-3 text-muted-foreground">
                {[
                  "Memberikan pelayanan terbaik kepada setiap pelanggan",
                  "Menggunakan produk berkualitas & aman",
                  "Mengikuti tren makeup terbaru",
                  "Mengutamakan kepuasan & kenyamanan pelanggan"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 group/item">
                    <span className="text-primary group-hover/item:scale-125 transition-transform">✨</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Decorative Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-primary/80 group-hover:w-full transition-all duration-700 rounded-b-3xl" />
            </div>
          </div>
        </div>

        {/* Partner / Support - Premium Card */}
        <div className="mt-28 relative fade-up">
          {/* Background Decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-3xl -z-10 transform -rotate-1 scale-[1.02] blur-sm" />
          
          <div className="relative bg-gradient-to-br from-white to-secondary/5 rounded-3xl p-10 lg:p-12 shadow-xl border border-border/50">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Left Content */}
              <div className="flex-1 text-center lg:text-left space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                  <Code className="h-4 w-4" />
                  Digital & Technology Partner
                </div>

                <h4 className="text-2xl lg:text-3xl font-bold">
                  Digital & Marketing Support
                </h4>

                <p className="text-muted-foreground leading-relaxed text-lg">
                  Website dan sistem digital Imelda Salon didukung oleh
                  <span className="font-semibold text-primary mx-1">
                    Adi Waruwu
                  </span>
                  sebagai Digital Support & Web Developer yang membantu
                  pengembangan website, branding, dan pemasaran online salon.
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-4 justify-center lg:justify-start">
                  <span className="px-3 py-1.5 bg-primary/5 rounded-full text-xs font-medium text-primary border border-primary/20">
                    Next.js
                  </span>
                  <span className="px-3 py-1.5 bg-primary/5 rounded-full text-xs font-medium text-primary border border-primary/20">
                    Tailwind CSS
                  </span>
                  <span className="px-3 py-1.5 bg-primary/5 rounded-full text-xs font-medium text-primary border border-primary/20">
                    SEO
                  </span>
                  <span className="px-3 py-1.5 bg-primary/5 rounded-full text-xs font-medium text-primary border border-primary/20">
                    Digital Marketing
                  </span>
                </div>
              </div>

              {/* Right Icon */}
              <div className="flex-shrink-0">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity" />
                  <div className="relative h-24 w-24 lg:h-32 lg:w-32 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-all duration-500">
                    <Code className="h-12 w-12 lg:h-16 lg:w-16 group-hover:rotate-12 transition-transform duration-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* Portfolio Button */}
        <div className="mt-8 text-center lg:text-right">
          <Link 
            href="https://www.instagram.com/adi_waruwwu/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium group"
          >
            <span>Lihat Instagram Developer</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center fade-up">
          <Link 
            href="/layanan" 
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
          >
            <span>Jelajahi Semua Layanan</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <p className="text-sm text-muted-foreground mt-4">
            ✨ Free konsultasi untuk setiap booking layanan
          </p>
        </div>
      </div>

      {/* ================= GLOBAL STYLES ================= */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.05); }
        }
        
        @keyframes pulse-slower {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.1); }
        }
        
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        
        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-pulse-slower {
          animation: pulse-slower 6s ease-in-out infinite;
        }
        
        .animate-fade-up {
          animation: fade-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-scale-in {
          animation: scale-in 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        
        .fade-up {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .fade-in {
          opacity: 0;
          transition: opacity 0.8s ease-out;
        }
        
        .scale-in {
          opacity: 0;
          transform: scale(0.9);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .slide-in-left {
          opacity: 0;
          transform: translateX(-30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .slide-in-right {
          opacity: 0;
          transform: translateX(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .fade-up.animate-in,
        .fade-in.animate-in,
        .scale-in.animate-in,
        .slide-in-left.animate-in,
        .slide-in-right.animate-in {
          opacity: 1;
          transform: translateY(0) translateX(0) scale(1);
        }
        
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) translateX(0) scale(1) !important;
        }
      `}</style>
    </section>
  )
}