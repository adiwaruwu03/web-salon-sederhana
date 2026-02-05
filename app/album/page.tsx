'use client'

import Image from 'next/image'
import { Header } from '@/components/header'
import { Card, CardContent } from '@/components/ui/card'

const albums = [
  {
    src: '/album/Programer.jpg',
    title: 'Adi Waruwu',
    
  },
  {
    src: '/album/founder.jpg',
    title: 'owner ',
    desc: 'Melda Pasaribu',
  },
{
    src: '/album/Pengantin.jpg',
    title: 'Pengantin Cantik',
  },
]

export default function AlbumPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="py-16 sm:py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
            Album Foto
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dokumentasi hasil terbaik layanan rambut & makeup 
          </p>
        </div>
      </section>

      {/* Album Grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {albums.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden border-border hover:shadow-md transition-shadow"
            >
              <CardContent className="p-0">
                {/* FOTO PORTRAIT — RAPI & PROPORSIONAL */}
                <div className="relative w-full aspect-[3/4] bg-muted">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* TEXT */}
                <div className="p-4 space-y-1 text-center">
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FOOTER DIHILANGKAN KHUSUS HALAMAN ALBUM */}
    </main>
  )
}
