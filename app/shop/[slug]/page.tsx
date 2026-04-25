'use client'

import { useState, useEffect } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { ShoppingCart, MessageCircle, Star, ArrowLeft, ShieldCheck, Truck, Diamond } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useLanguage } from '@/lib/language-context'
import { cn } from '@/lib/utils'
import { supabase } from '@/lib/supabase'

export default function ProductDetailPage() {
  const { t } = useLanguage()
  const params = useParams()
  const slug = params.slug

  const [product, setProduct] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    if (slug) fetchProduct()
  }, [slug])

  async function fetchProduct() {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('slug', slug)
        .single()

      if (error) throw error
      setProduct(data)
    } catch (error: any) {
      console.error('Error fetching product:', error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleWhatsApp = async () => {
    if (!product) return

    try {
      const totalPrice = product.price * quantity
      
      // 1. Simpan ke database Orders di Admin
      const { error: orderError } = await supabase
        .from('orders')
        .insert([{
          product_name: product.name,
          product_price: product.price,
          quantity: quantity,
          total_price: totalPrice,
          status: 'Pending'
        }])

      if (orderError) throw orderError

      // 2. Tambah jumlah klik (Chat Count) untuk grafik popularitas
      await supabase.rpc('increment_chat_count', { product_id: product.id })
      // Jika rpc belum dibuat, kita gunakan update manual:
      await supabase
        .from('products')
        .update({ chat_count: (product.chat_count || 0) + 1 })
        .eq('id', product.id)

      // 3. Ambil Pengaturan WA Dinamis
      const { data: settings } = await supabase
        .from('settings')
        .select('*')
        .eq('id', 'general')
        .single()

      const waNumber = settings?.whatsapp_number || '6282285310686'
      let waMessage = settings?.wa_template || 'Halo Imelda Salon, saya ingin memesan produk:\n\n*{product_name}*\nJumlah: {quantity}\nTotal: Rp {total_price}\n\nMohon info ketersediaan stok. Terima kasih!'
      
      // Ganti variabel template dengan data asli
      waMessage = waMessage
        .replace(/{product_name}/g, product.name)
        .replace(/{quantity}/g, quantity.toString())
        .replace(/{total_price}/g, totalPrice.toLocaleString('id-ID'))

      window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`, '_blank')
    } catch (error: any) {
      console.error('Error tracking order:', error.message)
      // Tetap buka WA meskipun gagal simpan ke DB agar tidak menghalangi user
      const message = `Halo Imelda Salon, saya ingin memesan produk:\n\n*${product.name}*\nJumlah: ${quantity}\nTotal: Rp ${(product.price * quantity).toLocaleString('id-ID')}\n\nMohon info ketersediaan stok. Terima kasih!`
      window.open(`https://wa.me/6282285310686?text=${encodeURIComponent(message)}`, '_blank')
    }
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-[#fcf8f1]">
        <Header />
        <div className="pt-40 pb-20 flex flex-col items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          <p className="mt-4 text-muted-foreground">Memuat detail produk...</p>
        </div>
      </main>
    )
  }

  if (!product) {
    return (
      <main className="min-h-screen bg-[#fcf8f1]">
        <Header />
        <div className="pt-40 pb-20 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-2xl font-bold">Produk tidak ditemukan</h1>
          <p className="mt-2 text-muted-foreground">Maaf, produk yang Anda cari tidak tersedia.</p>
          <Link href="/shop" className="mt-6 text-primary font-bold underline">Kembali ke Toko</Link>
        </div>
      </main>
    )
  }

  const images = product.images && product.images.length > 0 ? product.images : ['/rambut/rambut (1).jpeg']

  return (
    <main className="min-h-screen bg-[#fcf8f1]">
      <Header />

      <section className="pt-32 pb-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <Link 
          href="/shop" 
          className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors mb-12"
        >
          <ArrowLeft size={14} /> Back to Shop
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Image Gallery */}
          <div className="space-y-6 animate-fade-in">
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden bg-white border border-border/30 shadow-2xl shadow-primary/5">
              <img 
                src={images[activeImage]} 
                alt={product.name} 
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
              />
              <div className="absolute top-8 left-8">
                <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-[0.2em] text-primary shadow-sm border border-primary/10">
                  {product.category}
                </span>
              </div>
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-4">
                {images.map((img: string, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={cn(
                      "relative h-24 w-24 rounded-2xl overflow-hidden border-2 transition-all",
                      activeImage === idx ? "border-primary shadow-lg shadow-primary/20 scale-105" : "border-transparent opacity-60 hover:opacity-100"
                    )}
                  >
                    <img src={img} className="h-full w-full object-cover" alt="" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-10 animate-fade-up">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={cn("h-4 w-4", i < Math.floor(product.rating || 5) ? "fill-primary text-primary" : "text-border")} />
                  ))}
                </div>
                <span className="text-sm font-bold text-foreground">{product.rating || '5.0'}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">
                {product.name}
              </h1>
              
              <p className="text-3xl font-bold text-primary">
                Rp {Number(product.price).toLocaleString('id-ID')}
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
                  <span className="text-xs font-bold text-foreground uppercase tracking-widest">Tersedia</span>
                </div>
              </div>
            </div>

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
                <p className="text-sm text-muted-foreground font-bold">Stok: {product.stock} items</p>
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
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
