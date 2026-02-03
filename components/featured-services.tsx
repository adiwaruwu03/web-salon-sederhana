import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'

const featuredServices = [
  {
    title: 'Potong & Styling Rambut',
    description: 'Potongan rambut modern dengan styling profesional',
    icon: '✂️',
  },
  {
    title: 'Rias Pengantin',
    description: 'Makeup & hairdo sempurna untuk hari istimewa Anda',
    icon: '💄',
  },
  {
    title: 'Creambath & Hair Spa',
    description: 'Perawatan intensif untuk rambut yang sehat bercahaya',
    icon: '🧴',
  },
  {
    title: 'Nail Art & Manicure',
    description: 'Desain kuku kreatif dan perawatan tangan profesional',
    icon: '💅',
  },
]

export function FeaturedServices() {
  return (
    <section className="py-16 sm:py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Layanan Unggulan Kami</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Koleksi layanan terbaik kami yang dirancang untuk memenuhi semua kebutuhan kecantikan Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredServices.map((service, idx) => (
            <Card key={idx} className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-lg text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="inline-flex items-center text-primary hover:text-primary/80 font-semibold group">
            Lihat Semua Layanan
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
