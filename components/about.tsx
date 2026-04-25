'use client'

import Image from 'next/image'
import { Sparkles, Heart, Award } from 'lucide-react'

export function About() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group animate-fade-in max-w-lg mx-auto lg:mx-0">
            <div className="relative aspect-[16/11] rounded-[2.5rem] overflow-hidden shadow-2xl">
              <Image 
                src="/album/Pengantin2.jpg" 
                alt="Imelda Salon Experience" 
                fill 
                className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 md:p-8 rounded-[2rem] shadow-2xl hidden md:block">
              <div className="text-3xl font-serif font-bold">5+</div>
              <div className="text-[10px] font-bold uppercase tracking-widest opacity-80">Years of <br />Beauty</div>
            </div>
          </div>

          <div className="space-y-8 animate-slide-in-right">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                <Heart className="h-4 w-4 text-primary" />
                <span className="text-xs font-bold uppercase tracking-widest text-primary">Tentang Kami</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
                Mewujudkan <br />
                <span className="text-primary italic">Kecantikan Sejati</span>
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Imelda Salon lahir dari kecintaan kami pada seni kecantikan. Kami percaya bahwa setiap orang berhak merasa percaya diri dan memesona. Dengan tim profesional dan produk berkualitas premium, kami berkomitmen memberikan transformasi yang tidak hanya memukau di luar, tapi juga memberi kenyamanan dari dalam.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="h-12 w-12 rounded-2xl bg-secondary flex items-center justify-center text-primary">
                  <Award size={24} />
                </div>
                <h4 className="font-bold text-foreground">Layanan Profesional</h4>
                <p className="text-sm text-muted-foreground">Didukung oleh tenaga ahli bersertifikat dan berpengalaman.</p>
              </div>
              <div className="space-y-3">
                <div className="h-12 w-12 rounded-2xl bg-secondary flex items-center justify-center text-primary">
                  <Sparkles size={24} />
                </div>
                <h4 className="font-bold text-foreground">Produk Eksklusif</h4>
                <p className="text-sm text-muted-foreground">Hanya menggunakan brand kecantikan ternama dan aman.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
