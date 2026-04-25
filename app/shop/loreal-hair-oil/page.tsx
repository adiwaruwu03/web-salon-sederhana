'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { ShoppingCart, MessageCircle, Star, ArrowLeft, ShieldCheck, Truck, RefreshCcw, Diamond } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useLanguage } from '@/lib/language-context'
import { cn } from '@/lib/utils'

// Mock Data (In real app, fetch this from API/Database based on slug)
const products = [
  {
    id: 1,
    name: 'L-Oreal Professionnel Hair Oil',
    slug: 'loreal-hair-oil',
    category: 'hair',
    price: 245000,
    rating: 4.9,
    reviews: 128,
    image: '/rambut/rambut (1).jpeg',
    description: 'Minyak rambut premium dari L-Oreal Professionnel yang dirancang khusus untuk memberikan nutrisi mendalam tanpa membuat rambut terasa lepek. Mengandung perpaduan minyak alami pilihan untuk kilau maksimal.',
    benefits: [
      'Menghaluskan rambut yang kasar dan mengembang',
      'Melindungi dari panas alat styling hingga 230°C',
      'Memberikan efek kilau instan yang tahan lama',
      'Aroma mewah yang bertahan sepanjang hari'
    ],
    usage: 'Gunakan 1-2 pump pada rambut setengah kering atau kering dari tengah hingga ujung rambut. Jangan dibilas. Styling seperti biasa.',
    suitable: 'Cocok untuk semua jenis rambut, terutama rambut kering, kusam, dan sering terpapar panas styling.'
  },
  {
    id: 2,
    name: 'Kerastase Resistance Serum',
    slug: 'kerastase-resistance',
    category: 'hair',
    price: 580000,
    rating: 5.0,
    reviews: 85,
    image: '/rambut/rambut (2).jpeg',
    description: 'Serum legendaris dari Kerastase untuk memperbaiki struktur serat rambut dari dalam. Sangat efektif untuk rambut yang rapuh dan mudah patah akibat proses kimia.',
    benefits: [
      'Memperkuat serat rambut hingga 99%',
      'Mencegah ujung rambut bercabang',
      'Mempercepat pertumbuhan rambut sehat',
      'Tekstur ringan dan cepat meresap'
    ],
    usage: 'Teteskan 3-4 tetes pada kulit kepala dan batang rambut setelah keramas. Pijat lembut. Gunakan setiap hari untuk hasil optimal.',
    suitable: 'Rambut rusak parah, sering diwarnai, atau di-smoothing.'
  }
]

export default function ProductDetailPage() {
  const { t, language } = useLanguage()
  const params = useParams()
  const slug = params.slug

  // Find product by slug
  const product = products.find((p) => p.slug === slug) || products[0]

  const [quantity, setQuantity] = useState(1)

  const handleWhatsApp = () => {
    const message = `Halo Imelda Salon, saya ingin memesan produk:\n\n*${product.name}*\nJumlah: ${quantity}\nTotal: Rp ${(product.price * quantity).toLocaleString('id-ID')}\n\nMohon info ketersediaan stok. Terima kasih!`
    window.open(`https://wa.me/6282285310686?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <main className="min-h-screen bg-[#fcf8f1]">
      <Header />

      <section className="pt-32 pb-24 px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Back Link */}
        <Link 
          href="/shop" 
          className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors mb-12"
        >
          <ArrowLeft size={14} /> Back to Shop
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Product Image */}
          <div className="space-y-6 animate-fade-in">
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden bg-white border border-border/30 shadow-2xl shadow-primary/5">
              <img 
                src={product.image} 
                alt={product.name} 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-8 left-8">
                <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-[0.2em] text-primary shadow-sm border border-primary/10">
                  {t(`category_${product.category}`)}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="space-y-10 animate-fade-up">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={cn("h-4 w-4", i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-border")} />
                  ))}
                </div>
                <span className="text-sm font-bold text-foreground">{product.rating}</span>
                <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">
                {product.name}
              </h1>
              
              <p className="text-3xl font-bold text-primary">
                Rp {product.price.toLocaleString('id-ID')}
              </p>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                {product.description}
              </p>
              
              <div className="grid grid-cols-2 gap-4 border-y border-border/40 py-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                    <ShieldCheck size={20} />
                  </div>
                  <span className="text-xs font-bold text-foreground uppercase tracking-widest">100% Original</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                    <Truck size={20} />
                  </div>
                  <span className="text-xs font-bold text-foreground uppercase tracking-widest">Fast Shipping</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="flex items-center rounded-full border border-border/50 bg-white p-1">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="h-10 w-10 rounded-full flex items-center justify-center hover:bg-primary/5 text-foreground transition-colors"
                  >
                    -
                  </button>
                  <span className="w-12 text-center font-bold">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="h-10 w-10 rounded-full flex items-center justify-center hover:bg-primary/5 text-foreground transition-colors"
                  >
                    +
                  </button>
                </div>
                <p className="text-sm text-muted-foreground font-bold">In Stock: 15 items</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleWhatsApp}
                  className="flex-1 h-16 rounded-full bg-primary text-white font-bold text-lg hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all active:scale-95 group"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {t('shop_buy_wa')}
                </Button>
                <Button 
                  variant="outline"
                  className="h-16 w-16 rounded-full border-border/50 bg-white hover:bg-primary/5 flex items-center justify-center text-primary transition-all shadow-lg"
                >
                  <ShoppingCart size={24} />
                </Button>
              </div>
            </div>

            {/* Tabs / Extra Info */}
            <div className="space-y-10 pt-10">
              <div className="space-y-4">
                <h3 className="text-xl font-serif font-bold text-foreground flex items-center gap-2">
                  <Diamond size={18} className="text-primary" /> Manfaat Utama
                </h3>
                <ul className="grid md:grid-cols-2 gap-4">
                  {product.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-serif font-bold text-foreground">Cara Pemakaian</h3>
                <p className="text-sm text-muted-foreground leading-relaxed italic border-l-2 border-primary/20 pl-4">
                  {product.usage}
                </p>
              </div>

              <div className="bg-white/50 backdrop-blur-md rounded-3xl p-6 border border-border/40">
                <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Cocok Untuk</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {product.suitable}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
