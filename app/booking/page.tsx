'use client'

import React from "react"

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

const services = [
  'Potong & Styling Rambut',
  'Smooting / Rebonding',
  'Rias Pengantin & Pesta',
  'Makeup & Hairdo Wisuda',
  'Creambath & Hair Spa',
  'Pewarnaan Rambut',
  'Nail Art & Manicure Pedicure',
  'MUA Panggilan (On-site)',
  'Produk Kosmetik & Aksesori',
]

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    notes: '',
  })

  const whatsappNumber = '6282285310686'

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formData.name || !formData.phone || !formData.service || !formData.date || !formData.time) {
      alert('Harap lengkapi semua field yang diperlukan!')
      return
    }

    const message = `Halo, saya ingin booking layanan di IMELDA SALON.\n\n📋 Detail Booking:\n- Nama: ${formData.name}\n- Nomor HP: ${formData.phone}\n- Layanan: ${formData.service}\n- Tanggal: ${formData.date}\n- Jam: ${formData.time}\n${formData.notes ? `- Catatan: ${formData.notes}` : ''}\n\nMohon dikonfirmasi. Terima kasih!`

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">Pesan Layanan Anda</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Isi formulir di bawah dan kami akan menghubungi Anda melalui WhatsApp untuk mengkonfirmasi booking
          </p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Formulir Booking</CardTitle>
              <CardDescription>Harap isi semua field yang diperlukan dengan lengkap</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-foreground">
                    Nama Lengkap *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Masukkan nama Anda"
                    value={formData.name}
                    onChange={handleChange}
                    className="border-border"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground">
                    Nomor WhatsApp *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Contoh: 081234567890"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border-border"
                  />
                </div>

                {/* Service */}
                <div className="space-y-2">
                  <label htmlFor="service" className="block text-sm font-medium text-foreground">
                    Pilih Layanan *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">-- Pilih Layanan --</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date */}
                <div className="space-y-2">
                  <label htmlFor="date" className="block text-sm font-medium text-foreground">
                    Tanggal *
                  </label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="border-border"
                  />
                </div>

                {/* Time */}
                <div className="space-y-2">
                  <label htmlFor="time" className="block text-sm font-medium text-foreground">
                    Jam *
                  </label>
                  <Input
                    id="time"
                    name="time"
                    type="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="border-border"
                  />
                </div>

                {/* Notes */}
                <div className="space-y-2">
                  <label htmlFor="notes" className="block text-sm font-medium text-foreground">
                    Catatan Tambahan
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    placeholder="Tambahkan catatan atau permintaan khusus (opsional)"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-2 h-auto">
                  Pesan via WhatsApp
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Dengan mengklik tombol di atas, Anda akan diarahkan ke WhatsApp kami untuk konfirmasi booking.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-secondary/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <h3 className="text-xl font-semibold text-foreground">1. Isi Formulir</h3>
              <p className="text-muted-foreground">Lengkapi data dan pilih layanan yang Anda inginkan</p>
            </div>
            <div className="text-center space-y-3">
              <h3 className="text-xl font-semibold text-foreground">2. Chat WhatsApp</h3>
              <p className="text-muted-foreground">Anda akan diarahkan ke WhatsApp kami untuk konfirmasi</p>
            </div>
            <div className="text-center space-y-3">
              <h3 className="text-xl font-semibold text-foreground">3. Konfirmasi</h3>
              <p className="text-muted-foreground">Tim kami akan mengkonfirmasi dan memproses booking Anda</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
