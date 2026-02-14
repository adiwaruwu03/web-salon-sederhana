'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

/* ==============================
   DATA LAYANAN (TANPA HARGA)
============================== */

const services = [
  {
    title: "Potong Rambut & Styling Rambut Tarutung",
    slug: "potong-styling-rambut-tarutung",
    icon: "💇‍♀️",
    color: "from-blue-500/20 to-cyan-500/20",
    description: "Potong rambut modern, smoothing, pewarnaan, creambath & hair spa",
    items: [
      { name: "Potong & Styling Rambut" },
      { name: "Smooting / Rebonding" },
      { name: "Pewarnaan Rambut" },
      { name: "Ombre / Highlight" },
      { name: "Creambath & Hair Spa" },
    ],
  },
  {
    title: "MUA Pengantin Tarutung",
    slug: "mua-pengantin-tarutung",
    icon: "👰‍♀️",
    color: "from-pink-500/20 to-rose-500/20",
    description: "Makeup profesional untuk hari spesial Anda",
    items: [
      { name: "Makeup Pengantin" },
      { name: "Makeup Lamaran" },
      { name: "Makeup Adat Batak" },
    ],
  },
  {
    title: "Hairdo Wedding Tarutung",
    slug: "hairdo-wedding-tarutung",
    icon: "💇‍♀️",
    color: "from-purple-500/20 to-indigo-500/20",
    description: "Tatanan rambut elegan untuk pengantin & pesta",
    items: [
      { name: "Hairdo Pengantin" },
      { name: "Hairdo Bridesmaid" },
      { name: "Hairdo Pesta" },
    ],
  },
  {
    title: "Makeup Wisuda Tarutung",
    slug: "makeup-wisuda-tarutung",
    icon: "🎓",
    color: "from-amber-500/20 to-yellow-500/20",
    description: "Tampil memukau di hari wisudamu",
    items: [
      { name: "Makeup Wisuda Natural" },
      { name: "Makeup Wisuda Full Glam" },
    ],
  },
]

/* ==============================
   PAGE
============================== */

export default function LayananPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/20">
      
      {/* NAVBAR */}
      <Header />

      {/* DECORATIVE HEADER */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary/5 via-transparent to-transparent pt-16 pb-8">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-20 right-0 h-72 w-72 rounded-full bg-secondary/30 blur-3xl" />
        </div>
        
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center mb-4">
            <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm border border-primary/20">
              ✨ Complete Beauty Solutions
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            Layanan Imelda Salon
            <span className="block text-2xl md:text-3xl text-primary mt-2 font-medium">
              Tarutung
            </span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Solusi lengkap kecantikan dan perawatan rambut untuk setiap momen spesial Anda
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-4 py-12 lg:py-16">
        
        {/* STATS BAR */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto">
          {[
            { label: "Layanan Profesional", value: "15+", icon: "✨" },
            { label: "Client Puas", value: "500+", icon: "👥" },
            { label: "Stylist Berpengalaman", value: "10+", icon: "💇‍♀️" },
            { label: "Home Service", value: "Tersedia", icon: "🏠" },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white/50 backdrop-blur-sm rounded-xl p-4 text-center border border-border/50 shadow-sm">
              <span className="text-2xl mb-1 block">{stat.icon}</span>
              <div className="font-bold text-primary">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* GRID LAYANAN - SEMUA KOTAK SAMA RATA */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 auto-rows-fr">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-border/50 flex flex-col h-full"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Content - Flex Column dengan justify-between agar tombol selalu di bawah */}
              <div className="relative p-6 lg:p-8 flex flex-col h-full">
                
                {/* BAGIAN ATAS - Konten Utama */}
                <div className="flex-1">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl lg:text-4xl">{service.icon}</span>
                      <div>
                        <h2 className="text-xl lg:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {service.title}
                        </h2>
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Daftar Layanan - Grid 2 Kolom dengan min height konsisten */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {service.items.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 p-2 rounded-lg group-hover:bg-white/50 transition-all duration-300"
                      >
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-sm lg:text-base text-foreground/90">
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* BAGIAN BAWAH - Tombol Detail (Selalu di Bawah) */}
                <div className="mt-auto pt-4">
                  <div className="flex justify-center">
                    <Link href={`/layanan/${service.slug}`} className="w-full">
                      <Button 
                        className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white shadow-md hover:shadow-xl transition-all group/btn py-6 text-base"
                        size="lg"
                      >
                        <span>Lihat Detail Layanan</span>
                        <svg 
                          className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* BADGE JUMLAH LAYANAN */}
                <div className="absolute top-6 right-6">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {service.items.length} Layanan
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA SECTION */}


        {/* BREADCRUMB */}
        <div className="mt-12 text-sm text-muted-foreground">
          <div className="flex items-center gap-2 justify-center">
            <span>🏠</span>
            <Link href="/" className="hover:text-primary transition-colors">
              Beranda
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">Layanan</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  )
}