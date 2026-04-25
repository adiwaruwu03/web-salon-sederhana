'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    q: "Apakah perlu booking sebelum datang?",
    a: "Sangat disarankan untuk melakukan booking minimal 1 hari sebelumnya agar kami bisa memastikan ketersediaan waktu untuk Anda, terutama untuk layanan Makeup dan Hairdo."
  },
  {
    q: "Layanan apa saja yang tersedia di Imelda Salon?",
    a: "Kami menyediakan berbagai layanan mulai dari potong rambut, styling, pewarnaan, creambath, facial, nail art, hingga MUA profesional untuk pengantin dan wisuda."
  },
  {
    q: "Apakah menerima MUA panggilan?",
    a: "Ya, kami menerima layanan MUA panggilan (on-site) untuk area Tarutung dan sekitarnya. Silakan hubungi kami melalui WhatsApp untuk detail biaya transport."
  },
  {
    q: "Produk apa yang digunakan untuk perawatan rambut?",
    a: "Kami hanya menggunakan produk berkualitas tinggi yang sudah terpercaya dan aman untuk kesehatan rambut serta kulit kepala Anda."
  }
]

export function FAQ() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary">FAQ</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Pertanyaan <span className="text-primary italic">Populer</span></h3>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem 
              key={i} 
              value={`item-${i}`}
              className="border border-border rounded-2xl px-6 bg-white/50 backdrop-blur-sm transition-all data-[state=open]:border-primary"
            >
              <AccordionTrigger className="text-lg font-bold text-foreground hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-lg leading-relaxed pb-6">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
