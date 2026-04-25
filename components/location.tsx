'use client'

import { MapPin, Phone, Clock } from 'lucide-react'

export function Location() {
  const address = "Imelda Salon Hutagurgur, Aek Tangga, Kec. Garoga, Kabupaten Tapanuli Utara, Sumatera Utara 22473"
  
  return (
    <section className="py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary">Our Location</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">
                Kunjungi Salon <br /><span className="text-primary italic">Kami Sekarang</span>
              </h3>
            </div>

            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="h-14 w-14 rounded-2xl bg-white flex items-center justify-center flex-shrink-0 text-primary shadow-xl shadow-primary/5">
                  <MapPin size={24} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-foreground">Alamat</h4>
                  <p className="text-muted-foreground">{address}</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="h-14 w-14 rounded-2xl bg-white flex items-center justify-center flex-shrink-0 text-primary shadow-xl shadow-primary/5">
                  <Phone size={24} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-foreground">Hubungi Kami</h4>
                  <p className="text-muted-foreground">+62 822-8531-0686</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="h-14 w-14 rounded-2xl bg-white flex items-center justify-center flex-shrink-0 text-primary shadow-xl shadow-primary/5">
                  <Clock size={24} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-foreground">Jam Operasional</h4>
                  <p className="text-muted-foreground">Senin - Sabtu: 09:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-lg mx-auto aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white animate-scale-in">
             <iframe 
                src="https://www.google.com/maps?q=2.0216771,99.3032901&z=17&output=embed" 
                className="absolute inset-0 w-full h-full transition-all duration-700"
                loading="lazy"
                title="Google Maps"
              ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
