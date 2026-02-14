import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles, Heart, Star } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-background to-primary/5 opacity-80 animate-gradient" />
      
      {/* Decorative Blur Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse-slower" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-slowest" />
      </div>

      {/* Floating Beauty Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-[10%] text-4xl text-primary/10 animate-float-slow">💄</div>
        <div className="absolute bottom-20 right-[10%] text-4xl text-primary/10 animate-float">💇‍♀️</div>
        <div className="absolute top-40 right-[15%] text-3xl text-primary/10 animate-float-fast">✨</div>
        <div className="absolute bottom-40 left-[15%] text-3xl text-primary/10 animate-float-slow">👰</div>
        <div className="absolute top-1/3 left-[5%] text-2xl text-primary/10 animate-pulse-slow">⭐</div>
        <div className="absolute bottom-1/3 right-[5%] text-2xl text-primary/10 animate-pulse-slower">🌸</div>
      </div>

      {/* Grid Pattern Overlay - FIXED */}
<div 
  className="absolute inset-0 opacity-20"
  style={{
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(255,255,255,0.03)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`
  }}
/><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          
          {/* Premium Badge */}
          <div className="inline-flex items-center justify-center animate-fade-down">
            <span className="rounded-full bg-gradient-to-r from-primary/90 to-primary/70 px-5 py-2 text-sm font-medium text-white shadow-lg backdrop-blur-sm border border-white/20">
              <Sparkles className="h-4 w-4 inline-block mr-1.5" />
              Beauty & Hair Specialist Since 2020
            </span>
          </div>

          {/* Main Title with Gradient Animation */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground text-balance animate-fade-up">
            <span className="relative inline-block">
              <span className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl opacity-70" />
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-gradient-animate">
                IMELDA SALON
              </span>
            </span>
          </h1>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-2 animate-fade-up animation-delay-200">
            <div className="h-0.5 w-12 bg-primary/30 rounded-full" />
            <Heart className="h-4 w-4 text-primary/60 fill-primary/20 animate-pulse" />
            <div className="h-0.5 w-12 bg-primary/30 rounded-full" />
          </div>

          {/* Description with Enhanced Typography */}
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto animate-fade-up animation-delay-400">
            <span className="relative inline-block">
              <span className="relative z-10">
                Imelda Salon hadir sebagai solusi layanan kecantikan profesional
                di <span className="font-semibold text-foreground">Tarutung</span> yang berfokus pada kualitas, kenyamanan, dan kepuasan
                pelanggan di setiap momen spesial.
              </span>
            </span>
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 animate-fade-up animation-delay-600">
            <div className="flex items-center gap-2 group">
              <div className="h-2 w-2 rounded-full bg-green-500 group-hover:scale-125 transition-transform" />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors"> Client Puas</span>
            </div>
            <div className="flex items-center gap-2 group">
              <div className="h-2 w-2 rounded-full bg-green-500 group-hover:scale-125 transition-transform" />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Stylist Profesional</span>
            </div>
            <div className="flex items-center gap-2 group">
              <div className="h-2 w-2 rounded-full bg-green-500 group-hover:scale-125 transition-transform" />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">5+ Tahun Pengalaman</span>
            </div>
          </div>

          {/* Rating Badge */}
          <div className="inline-flex items-center gap-3 bg-white/50 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-border/50 animate-fade-up animation-delay-800">
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map((star) => (
                <Star key={star} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-medium text-foreground">5.0</span>
            <span className="text-xs text-muted-foreground">(500+ ulasan)</span>
          </div>
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
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.1); }
        }
        
        @keyframes pulse-slowest {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.15); }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
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
        
        @keyframes fade-down {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes shine {
          0% { left: -100%; }
          20% { left: 120%; }
          100% { left: 120%; }
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
        
        .animate-pulse-slowest {
          animation: pulse-slowest 8s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 15s ease infinite;
        }
        
        .animate-fade-up {
          animation: fade-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-down {
          animation: fade-down 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        
        .animation-delay-600 {
          animation-delay: 600ms;
        }
        
        .animation-delay-800 {
          animation-delay: 800ms;
        }
        
        .bg-gradient-animate {
          background-size: 200% 200%;
          animation: gradient 6s ease infinite;
        }
        
        .text-balance {
          text-wrap: balance;
        }
      `}</style>
    </section>
  )
}