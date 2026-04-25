import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, User, ChevronRight, BookOpen, Sparkles, TrendingUp } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'Blog Imelda Salon - Tips Kecantikan & Makeup Tarutung',
  description:
    'Baca tips hairdo pengantin, makeup wisuda, harga MUA, dan tren rambut terbaru di Tarutung bersama Imelda Salon.',
}

const articles = [
  {
    title: 'Tips Hairdo Pengantin Agar Tahan Seharian',
    slug: '/blog/tips-hairdo-pengantin',
    image: '/rambut/rambut (1).jpeg',
    excerpt: 'Pelajari rahasia tatanan rambut pengantin yang tetap elegan dan kokoh sepanjang hari pernikahan Anda.',
    category: 'Hairdo',
    readTime: '5 menit',
    date: '15 Jan 2024',
    author: 'Melda Pasaribu',
  },
  {
    title: 'Panduan Memilih MUA Pengantin di Tarutung',
    slug: '/blog/harga-mua-tarutung',
    image: '/album/Pengantin.jpg',
    excerpt: 'Jangan salah pilih! Berikut adalah poin penting saat memilih makeup artist untuk hari bahagia Anda.',
    category: 'Makeup',
    readTime: '4 menit',
    date: '10 Jan 2024',
    author: 'Tim Imelda',
  },
  {
    title: 'Inspirasi Makeup Wisuda: Natural vs Glam',
    slug: '/blog/inspirasi-makeup-wisuda',
    image: '/wisuda/wisudamakeup.webp',
    excerpt: 'Bingung memilih gaya makeup untuk wisuda? Simak perbandingan gaya natural dan glamour di sini.',
    category: 'Makeup',
    readTime: '6 menit',
    date: '5 Jan 2024',
    author: 'Tim Imelda',
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section - More Compact */}
      <section className="pt-28 pb-16 px-6 lg:px-8 bg-secondary/30 relative">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
            <Sparkles className="h-3 w-3 text-primary" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Beauty Insights</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Journal <span className="text-primary italic">Kecantikan</span>
          </h1>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            Inspirasi terbaru, tips perawatan, dan tren kecantikan terkini dari tim ahli Imelda Salon.
          </p>
        </div>
      </section>

      {/* Featured Articles - More Proportional */}
      <section className="py-20 px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <article key={i} className="group space-y-5 animate-fade-up">
              <Link href={article.slug} className="block relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-xl">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[9px] font-bold uppercase tracking-widest">
                  {article.category}
                </div>
              </Link>

              <div className="space-y-3 px-2">
                <div className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.2em] text-primary">
                  <span>{article.date}</span>
                  <span className="h-1 w-1 rounded-full bg-primary" />
                  <span>{article.readTime}</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                  <Link href={article.slug}>{article.title}</Link>
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
                <Link href={article.slug} className="inline-flex items-center gap-2 text-primary font-bold text-xs group/link">
                  Baca Selengkapnya
                  <ChevronRight size={14} className="transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto bg-primary/10 rounded-[3rem] p-12 md:p-24 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
          <div className="space-y-4 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Dapatkan Update <br /><span className="text-primary italic">Tips Kecantikan</span></h2>
            <p className="text-muted-foreground">Berlangganan buletin kami untuk mendapatkan info promo dan tips eksklusif setiap bulannya.</p>
          </div>
          <div className="flex w-full max-w-md gap-4">
            <input 
              type="email" 
              placeholder="Email Anda" 
              className="flex-1 h-14 px-6 rounded-full bg-white border border-border focus:ring-2 focus:ring-primary outline-none"
            />
            <button className="h-14 px-8 rounded-full bg-primary text-white font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
              Join
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
