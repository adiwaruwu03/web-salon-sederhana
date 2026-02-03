'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const services = [
  {
    category: 'Layanan Rambut',
    items: [
      { name: 'Potong & Styling Rambut', price: 'Rp 75.000 - 150.000' },
      { name: 'Smooting / Rebonding', price: 'Rp 300.000 - 500.000' },
      { name: 'Pewarnaan Rambut (Cat Biasa)', price: 'Rp 150.000 - 300.000' },
      { name: 'Ombre / Highlight', price: 'Rp 250.000 - 450.000' },
      { name: 'Creambath & Hair Spa', price: 'Rp 100.000 - 200.000' },
      { name: 'Keratin Treatment', price: 'Rp 400.000 - 600.000' },
    ],
  },
  {
    category: 'Layanan Makeup & Riasan',
    items: [
      { name: 'Rias Pengantin Lengkap', price: 'Rp 1.000.000 - 2.000.000' },
      { name: 'Makeup & Hairdo Wisuda', price: 'Rp 350.000 - 600.000' },
      { name: 'Makeup Pesta / Casual', price: 'Rp 200.000 - 400.000' },
      { name: 'Makeup Profesional (Per Jam)', price: 'Rp 500.000/jam' },
      { name: 'MUA Panggilan (On-site)', price: 'Hubungi untuk penawaran' },
    ],
  },
  {
    category: 'Layanan Kuku & Tangan',
    items: [
      { name: 'Manicure Biasa', price: 'Rp 50.000 - 100.000' },
      { name: 'Manicure + Nail Art', price: 'Rp 100.000 - 200.000' },
      { name: 'Pedicure Biasa', price: 'Rp 75.000 - 125.000' },
      { name: 'Pedicure + Nail Art', price: 'Rp 125.000 - 250.000' },
      { name: 'Gel Nails (Gelish)', price: 'Rp 150.000 - 300.000' },
    ],
  },
  {
    category: 'Produk Penjualan',
    items: [
      { name: 'Aksesori Rambut', price: 'Rp 25.000 - 150.000' },
      { name: 'Produk Kosmetik', price: 'Rp 50.000 - 500.000' },
      { name: 'Vitamin Rambut & Wajah', price: 'Rp 75.000 - 300.000' },
      { name: 'Body Lotion & Parfum', price: 'Rp 100.000 - 400.000' },
      { name: 'Perawatan Rambut (Shampoo/Conditioner)', price: 'Rp 50.000 - 250.000' },
    ],
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">Layanan & Harga</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Jelajahi koleksi lengkap layanan salon kami dengan harga yang kompetitif dan transparan
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {services.map((serviceGroup, idx) => (
            <div key={idx}>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 pb-4 border-b-2 border-primary">
                {serviceGroup.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {serviceGroup.items.map((item, itemIdx) => (
                  <Card key={itemIdx} className="border-border hover:shadow-md transition-shadow">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg text-foreground">{item.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-primary font-semibold text-base">{item.price}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">Siap untuk Transformasi Anda?</h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Hubungi kami sekarang dan jadwalkan sesi Anda. Tim profesional kami siap memberikan hasil terbaik untuk Anda.
          </p>
          <div className="flex justify-center">
            <Link href="/contact">
              <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-2 h-auto">
                Hubungi Kami
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
