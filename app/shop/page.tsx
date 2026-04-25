'use client'

import { useState, useEffect } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, ShoppingBag, Filter, ArrowRight, Star } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'
import { cn } from '@/lib/utils'
import { supabase } from '@/lib/supabase'

const categories = [
  { id: 'all', labelKey: 'shop_filter_all' },
  { id: 'Hair Care', labelKey: 'category_hair' },
  { id: 'Skin Care', labelKey: 'category_skin' },
  { id: 'Beauty Product', labelKey: 'category_beauty' },
]

export default function ShopPage() {
  const { t, language } = useLanguage()
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProducts()
  }, [])

  async function fetchProducts() {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('status', 'Active')
        .order('created_at', { ascending: false })

      if (error) throw error
      setProducts(data || [])
    } catch (error: any) {
      console.error('Error fetching products:', error.message)
    } finally {
      setLoading(false)
    }
  }

  const filteredProducts = products.filter((p) => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <main className="min-h-screen bg-[#fcf8f1] pt-28">
      <Header />

      {/* Filters & Search */}
      <section className="sticky top-20 z-30 bg-[#fcf8f1]/80 backdrop-blur-xl border-y border-border/40 py-6 px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all whitespace-nowrap border",
                  activeCategory === cat.id
                    ? "bg-foreground text-background border-foreground shadow-lg shadow-black/10"
                    : "bg-white border-border/50 text-muted-foreground hover:border-primary hover:text-primary"
                )}
              >
                {t(cat.labelKey) || cat.id}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search products..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-11 h-12 rounded-full bg-white border-border/50 focus:ring-primary shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="px-6 lg:px-8 max-w-7xl mx-auto pb-32">
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="bg-white/50 rounded-[2.5rem] p-4 h-[400px] animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <Link 
                key={product.id} 
                href={`/shop/${product.slug}`}
                className="group animate-fade-up flex flex-col"
              >
                <div className="bg-[#f5f0e8] rounded-[2.5rem] p-4 flex flex-col h-full transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                  {/* Image Container */}
                  <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-6">
                    <img 
                      src={(product.images && product.images[0]) || '/rambut/rambut (1).jpeg'} 
                      alt={product.name} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>

                  {/* Info Container */}
                  <div className="space-y-4 px-2 flex-grow">
                    <div>
                      <span className="inline-block px-4 py-1 rounded-full bg-white text-[9px] font-bold uppercase tracking-widest text-muted-foreground shadow-sm mb-3">
                        {product.category}
                      </span>
                      <h3 className="text-xl font-serif font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-2 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-auto border-t border-black/5">
                      <p className="text-lg font-bold text-primary/80">
                        Rp {Number(product.price).toLocaleString('id-ID')}
                      </p>
                      
                      <div className="flex gap-2 mt-4">
                        <div className="h-4 w-4 rounded-full bg-primary border-2 border-white shadow-sm" />
                        <div className="h-4 w-4 rounded-full bg-black border-2 border-white shadow-sm" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {!loading && filteredProducts.length === 0 && (
          <div className="py-20 text-center space-y-4">
            <div className="h-20 w-20 bg-primary/5 rounded-full flex items-center justify-center mx-auto text-primary">
              <ShoppingBag size={40} />
            </div>
            <h3 className="text-xl font-bold">Produk tidak ditemukan</h3>
            <p className="text-muted-foreground">Coba gunakan kata kunci pencarian atau kategori lain.</p>
            <Button 
              variant="outline" 
              onClick={() => {setSearchQuery(''); setActiveCategory('all')}}
              className="rounded-full"
            >
              Reset Filter
            </Button>
          </div>
        )}
      </section>

      <Footer />
    </main>
  )
}

