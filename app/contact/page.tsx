'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MessageCircle, MapPin, Clock, Phone, Mail } from 'lucide-react'

export default function ContactPage() {
  const whatsappNumber = '6282285310686'
  const phoneNumber = '+62 822-8531-0686'
  const email = 'info@imeldaSalon.com'
  const address = 'imelda salon hutagurgur, Aek Tangga, Kec. Garoga, Kabupaten Tapanuli Utara, Sumatera Utara 22473'

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">Hubungi Kami</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kami siap membantu dan menjawab semua pertanyaan Anda tentang layanan kami
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">Informasi Kontak</h2>
              </div>

              {/* WhatsApp */}
              <Card className="border-border hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-lg">
                    <MessageCircle className="w-5 h-5 text-primary" />
                    <span>WhatsApp</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground font-semibold">{phoneNumber}</p>
                  <p className="text-muted-foreground text-sm">
                    Hubungi kami melalui WhatsApp untuk booking atau konsultasi. Respons cepat dan profesional.
                  </p>
                  <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">
                      Chat WhatsApp
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Phone */}
              <Card className="border-border hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-lg">
                    <Phone className="w-5 h-5 text-primary" />
                    <span>Telepon</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground font-semibold">{phoneNumber}</p>
                  <p className="text-muted-foreground text-sm">Tersedia setiap hari jam 09:00 - 18:00</p>
                  <a href={`tel:${phoneNumber}`}>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 w-full bg-transparent">
                      Hubungi Sekarang
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Address */}
              <Card className="border-border hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-lg">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Alamat</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground font-semibold">{address}</p>
                  <p className="text-muted-foreground text-sm">
                    Kunjungi salon kami dan jadilah cantik.
                  </p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 w-full bg-transparent">
                      Buka di Maps
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Hours */}
              <Card className="border-border hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-lg">
                    <Clock className="w-5 h-5 text-primary" />
                    <span>Jam Operasional</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-foreground">
                    <p className="font-semibold">Senin - Jumat: 09:00 - 18:00</p>
                    <p className="font-semibold">Sabtu: 09:00 - 19:00</p>
                    <p className="font-semibold">Minggu: 10:00 - 17:00</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      Kami tutup pada hari libur nasional. Silakan hubungi kami untuk informasi lebih lanjut.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map & Why Choose Us */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">Mengapa Memilih Kami?</h2>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {[
                  {
                    title: 'Tim Profesional',
                    description: 'Tenaga ahli berpengalaman lebih dari 10 tahun di industri kecantikan',
                  },
                  {
                    title: 'Standar Kebersihan Tinggi',
                    description: 'Semua peralatan steril dan mengikuti protokol kesehatan ketat',
                  },
                  {
                    title: 'Produk Berkualitas',
                    description: 'Menggunakan produk premium dan aman untuk kulit Anda',
                  },
                  {
                    title: 'Layanan Ramah',
                    description: 'Staf kami selalu siap memberikan pelayanan terbaik dengan senyuman',
                  },
                  {
                    title: 'Harga Kompetitif',
                    description: 'Tarif terjangkau tanpa mengorbankan kualitas hasil',
                  },
                  {
                    title: 'Lokasi Strategis',
                    description: 'Mudah diakses dengan area parkir yang luas dan nyaman',
                  },
                ].map((item, idx) => (
                  <Card key={idx} className="border-border">
                    <CardHeader>
                      <CardTitle className="text-base text-foreground">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">Siap untuk Pengalaman Terbaik?</h2>
          <p className="text-lg text-primary-foreground/90">
            Hubungi kami hari ini dan dapatkan konsultasi gratis untuk layanan Anda
          </p>
          <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-2 h-auto text-base">
              Chat WhatsApp Sekarang
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
