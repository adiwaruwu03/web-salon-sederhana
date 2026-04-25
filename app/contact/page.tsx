'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { MessageCircle, MapPin, Clock, Sparkles, Diamond } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '@/lib/language-context'

const services = [
  'Potong & Styling Rambut',
  'Smooting / Rebonding',
  'Rias Pengantin & Pesta',
  'Makeup & Hairdo Wisuda',
  'Creambath & Hair Spa',
  'Pewarnaan Rambut',
  'Nail Art & Manicure Pedicure',
  'MUA Panggilan (On-site)',
]

export default function ContactPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    notes: '',
  })

  const whatsappNumber = '6282285310686'
  const phoneNumber = '+62 822-8531-0686'
  const address = 'Imelda Salon Hutagurgur, Aek Tangga, Kec. Garoga, Kabupaten Tapanuli Utara, Sumatera Utara 22473'

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formData.name || !formData.phone || !formData.service || !formData.date || !formData.time) {
      alert('Harap lengkapi data yang diperlukan!')
      return
    }
    const message = `Halo, saya ingin booking layanan di IMELDA SALON.\n\n📋 Detail Booking:\n- Nama: ${formData.name}\n- Nomor HP: ${formData.phone}\n- Layanan: ${formData.service}\n- Tanggal: ${formData.date}\n- Jam: ${formData.time}\n${formData.notes ? `- Catatan: ${formData.notes}` : ''}\n\nMohon dikonfirmasi. Terima kasih!`
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <main className="min-h-screen bg-[#fcf8f1]">
      <Header />

      <section className="pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Form Booking */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 shadow-sm backdrop-blur-sm">
                <Diamond className="h-4 w-4 text-primary" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Reserve Your Spot</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground leading-tight">
                {t('contact_title')} <br /><span className="text-primary italic">{t('contact_title_highlight')}</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-lg">
                {t('contact_desc')}
              </p>
            </div>

            <Card className="border-border/50 shadow-2xl shadow-primary/5 bg-white/80 backdrop-blur-md rounded-[2.5rem] overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">{t('contact_form_name')}</label>
                      <Input name="name" placeholder="Nama Anda" value={formData.name} onChange={handleChange} className="rounded-2xl h-12 bg-white/50 border-border/50 focus:ring-primary" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">{t('contact_form_phone')}</label>
                      <Input name="phone" placeholder="08xx..." value={formData.phone} onChange={handleChange} className="rounded-2xl h-12 bg-white/50 border-border/50 focus:ring-primary" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">{t('contact_form_service')}</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full h-12 px-4 rounded-2xl border border-border/50 bg-white/50 text-foreground focus:ring-2 focus:ring-primary outline-none transition-all"
                    >
                      <option value="">-- {t('contact_form_service')} --</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">{t('contact_form_date')}</label>
                      <Input name="date" type="date" value={formData.date} onChange={handleChange} className="rounded-2xl h-12 bg-white/50 border-border/50 focus:ring-primary" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">{t('contact_form_time')}</label>
                      <Input name="time" type="time" value={formData.time} onChange={handleChange} className="rounded-2xl h-12 bg-white/50 border-border/50 focus:ring-primary" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">{t('contact_form_notes')}</label>
                    <textarea
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="..."
                      className="w-full px-4 py-3 rounded-2xl border border-border/50 bg-white/50 text-foreground focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full h-14 rounded-full bg-primary text-white font-bold text-lg hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all active:scale-[0.98]">
                    {t('contact_form_btn')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="lg:sticky lg:top-32 space-y-12">
            <div className="grid gap-10">
              <div className="flex gap-6">
                <div className="h-16 w-16 rounded-[1.5rem] bg-primary flex items-center justify-center flex-shrink-0 text-white shadow-xl shadow-primary/20">
                  <MapPin size={28} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground">{t('contact_info_location')}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {address}
                  </p>
                  <a 
                    href="https://www.google.com/maps/place/IMELDA+SALON+KECANTIKAN-GAROGA+%26+TARUTUNG/@2.0216771,99.3032901,17z/data=!3m1!4b1!4m6!3m5!1s0x420aa6d91e906b99:0xc59376dc3990c2c6!8m2!3d2.0216771!4d99.3032901!16s%2Fg%2F11wty2kbwf"
                    target="_blank" 
                    className="inline-block text-primary font-bold text-sm hover:underline"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="h-16 w-16 rounded-[1.5rem] bg-white border border-border/50 flex items-center justify-center flex-shrink-0 text-primary shadow-lg">
                  <Clock size={28} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground">{t('contact_info_hours')}</h3>
                  <div className="grid grid-cols-2 gap-8 text-sm text-muted-foreground">
                    <div>
                      <p className="font-bold text-foreground">Mon - Fri</p>
                      <p>09:00 - 18:00</p>
                    </div>
                    <div>
                      <p className="font-bold text-foreground">Sat - Sun</p>
                      <p>09:00 - 17:00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="h-16 w-16 rounded-[1.5rem] bg-white border border-border/50 flex items-center justify-center flex-shrink-0 text-primary shadow-lg">
                  <MessageCircle size={28} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground">{t('contact_info_cs')}</h3>
                  <div className="flex flex-col gap-1">
                    <p className="font-bold text-foreground text-lg">{phoneNumber}</p>
                    <p className="text-sm text-muted-foreground">info@imeldasalon.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Simple Map Preview */}
            <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-border/50 shadow-2xl">
               <iframe 
                src="https://www.google.com/maps?q=2.0216771,99.3032901&z=18&output=embed" 
                className="absolute inset-0 w-full h-full grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
