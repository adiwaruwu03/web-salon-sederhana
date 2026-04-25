'use client'

import { Star, Quote } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/lib/language-context'

const testimonials = [
  {
    name: "Santi Kartika",
    role: "Regular Customer",
    content: {
      id: "Sangat puas dengan layanan makeup pengantin di Imelda Salon. Hasilnya natural tapi tetap kelihatan mewah. Terima kasih kak Melda!",
      en: "Very satisfied with the bridal makeup service at Imelda Salon. The result is natural but still looks luxurious. Thank you kak Melda!"
    },
    rating: 5
  },
  {
    name: "Maya Sari",
    role: "New Client",
    content: {
      id: "Pertama kali coba potong rambut di sini dan langsung suka! Stylistnya ngerti banget model yang cocok buat bentuk muka saya.",
      en: "First time trying a haircut here and I love it! The stylist really understands the right model for my face shape."
    },
    rating: 5
  },
  {
    name: "Putri Rahayu",
    role: "Regular Customer",
    content: {
      id: "Tempatnya nyaman banget, bersih, dan pelayanannya ramah. Rebonding hasilnya awet dan rambut tetep sehat.",
      en: "The place is very comfortable, clean, and the service is friendly. Rebonding results are long-lasting and hair stays healthy."
    },
    rating: 5
  }
]

export function Testimonials() {
  const { t, language } = useLanguage()
  
  const testimonialColumns = [
    [testimonials[0], testimonials[2], testimonials[0]],
    [testimonials[1], testimonials[0], testimonials[2]],
    [testimonials[2], testimonials[1], testimonials[0]],
  ]

  return (
    <section className="py-24 bg-secondary/30 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16 relative z-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
            <Quote className="h-3 w-3 text-primary" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Testimonials</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            {language === 'id' ? 'Apa Kata ' : 'What '} <span className="text-primary italic">{language === 'id' ? 'Mereka?' : 'They Say?'}</span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {language === 'id' 
              ? 'Kepuasan pelanggan adalah prioritas utama kami. Berikut adalah pengalaman mereka bersama Imelda Salon.'
              : 'Customer satisfaction is our top priority. Here are their experiences with Imelda Salon.'}
          </p>
        </div>

        <div className="relative h-[40rem] md:h-[35rem] gap-6 md:grid md:grid-cols-3">
          {/* Overlay untuk efek fade atas-bawah */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-secondary/30 to-transparent z-10" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-secondary/30 to-transparent z-10" />

          {testimonialColumns.map((column, columnIndex) => (
            <div key={`column-${columnIndex}`} className={cn(
              "relative overflow-hidden h-full",
              columnIndex === 0 ? "block" : "hidden md:block"
            )}>
              <div className={cn(
                columnIndex === 1 ? "animate-testimonial-up" : "animate-testimonial-down",
                "space-y-6"
              )}>
                {[...column, ...column].map((t, i) => (
                  <div 
                    key={`${columnIndex}-${i}`} 
                    className="bg-white p-8 rounded-[2rem] shadow-xl shadow-primary/5 border border-primary/5 group transition-all duration-500"
                  >
                    <div className="space-y-6">
                      <div className="flex gap-1">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-base text-muted-foreground leading-relaxed italic">
                        "{language === 'id' ? t.content.id : t.content.en}"
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                          {t.name[0]}
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground text-sm">{t.name}</h4>
                          <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">{t.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
