'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'id' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  id: {
    // Navbar
    nav_home: 'Beranda',
    nav_services: 'Layanan',
    nav_shop: 'Shop',
    nav_contact: 'Kontak',
    nav_blog: 'Blog',
    
    // Shop
    shop_title: 'Koleksi Produk',
    shop_title_highlight: 'Kecantikan',
    shop_desc: 'Temukan produk perawatan rambut dan kulit premium yang kami gunakan dan rekomendasikan di salon untuk hasil maksimal di rumah.',
    shop_filter_all: 'Semua Produk',
    shop_buy_wa: 'Pesan via WhatsApp',
    shop_view_detail: 'Lihat Detail',
    shop_out_of_stock: 'Stok Habis',
    category_hair: 'Perawatan Rambut',
    category_skin: 'Perawatan Kulit',
    category_beauty: 'Produk Kecantikan',
    
    // Hero
    hero_badge: 'Luxury Salon Experience',
    hero_title_1: 'Pancarkan Pesona',
    hero_title_2: 'Terbaik Anda',
    hero_desc: 'Sentuhan artistik dari para profesional untuk merayakan setiap momen berharga Anda dengan kemewahan yang personal.',
    hero_booking: 'Booking Sekarang',
    hero_see_services: 'Lihat Layanan',
    
    // Featured / Owner
    owner_badge: 'Expertise & Passion',
    owner_title_1: 'Sentuhan Magis',
    owner_title_2: 'Melda Pasaribu',
    owner_desc: 'Didirikan dengan visi untuk memberdayakan setiap wanita melalui kecantikan, Imelda Salon telah menjadi destinasi terpercaya di Tarutung selama lebih dari 5 tahun.',
    owner_feature_1_title: 'Pelayanan Personal',
    owner_feature_1_desc: 'Konsultasi mendalam untuk Anda.',
    owner_feature_2_title: 'Kualitas Premium',
    owner_feature_2_desc: 'Hanya produk terbaik dan aman.',
    owner_consult: 'Konsultasi Sekarang',
    
    // Services Page
    services_title: 'Layanan Eksklusif',
    services_desc: 'Menghadirkan layanan kecantikan kelas dunia dengan sentuhan personal yang manis untuk setiap pelanggan.',
    services_cta_title: 'Ingin Tampil Memesona di',
    services_cta_title_highlight: 'Hari Spesial Anda?',
    services_cta_btn: 'Booking Jadwal Anda',

    // Service Detail (Potong Rambut)
    sd_hair_title: 'Potong Rambut & Styling',
    sd_hair_desc: 'Tampil lebih percaya diri dengan gaya rambut modern bersama hair stylist berpengalaman.',
    sd_best_title: 'Salon Potong Rambut Terbaik',
    sd_best_desc: 'Imelda Salon menyediakan layanan potong rambut wanita dan pria dengan teknik modern dan stylist profesional.',
    sd_best_desc2: 'Kami membantu Anda menemukan gaya rambut yang sesuai dengan bentuk wajah dan karakter Anda.',
    sd_why_title: 'Kenapa Pilih Imelda Salon?',
    sd_why_desc: 'Pengalaman terbaik untuk rambut Anda.',
    sd_price_title: 'Harga Layanan',
    sd_price_desc: 'Harga terjangkau dengan kualitas premium.',
    sd_whatsapp: 'Pesan via WhatsApp',
    
    // Contact Page
    contact_title: 'Booking',
    contact_title_highlight: 'Sekarang',
    contact_desc: 'Silakan isi data diri Anda untuk membuat janji temu. Kami akan segera menghubungi Anda kembali.',
    contact_form_name: 'Nama Lengkap',
    contact_form_phone: 'WhatsApp',
    contact_form_service: 'Pilih Layanan',
    contact_form_date: 'Tanggal',
    contact_form_time: 'Waktu',
    contact_form_notes: 'Catatan Khusus',
    contact_form_btn: 'Konfirmasi via WhatsApp',
    contact_info_location: 'Lokasi Salon',
    contact_info_hours: 'Jam Operasional',
    contact_info_cs: 'Layanan Pelanggan',
    
    // Footer / Common
    footer_desc: 'Destinasi kecantikan premium Anda di Tarutung. Kami merayakan keunikan setiap pelanggan dengan layanan terbaik.',
  },
  en: {
    // Navbar
    nav_home: 'Home',
    nav_services: 'Services',
    nav_shop: 'Shop',
    nav_contact: 'Contact',
    nav_blog: 'Blog',

    // Shop
    shop_title: 'Beauty Product',
    shop_title_highlight: 'Collection',
    shop_desc: 'Discover premium hair and skin care products we use and recommend at the salon for maximum results at home.',
    shop_filter_all: 'All Products',
    shop_buy_wa: 'Order via WhatsApp',
    shop_view_detail: 'View Detail',
    shop_out_of_stock: 'Out of Stock',
    category_hair: 'Hair Care',
    category_skin: 'Skin Care',
    category_beauty: 'Beauty Products',
    
    // Hero
    hero_badge: 'Luxury Salon Experience',
    hero_title_1: 'Radiate Your',
    hero_title_2: 'Best Charm',
    hero_desc: 'Artistic touch from professionals to celebrate every precious moment with personalized luxury.',
    hero_booking: 'Book Now',
    hero_see_services: 'View Services',
    
    // Featured / Owner
    owner_badge: 'Expertise & Passion',
    owner_title_1: 'Magic Touch of',
    owner_title_2: 'Melda Pasaribu',
    owner_desc: 'Founded with a vision to empower every woman through beauty, Imelda Salon has become a trusted destination in Tarutung for over 5 years.',
    owner_feature_1_title: 'Personal Service',
    owner_feature_1_desc: 'In-depth consultation for you.',
    owner_feature_2_title: 'Premium Quality',
    owner_feature_2_desc: 'Only the best and safest products.',
    owner_consult: 'Consult Now',

    // Services Page
    services_title: 'Exclusive Services',
    services_desc: 'Delivering world-class beauty services with a sweet personal touch for every client.',
    services_cta_title: 'Want to Look Stunning on',
    services_cta_title_highlight: 'Your Special Day?',
    services_cta_btn: 'Schedule Your Booking',

    // Service Detail (Potong Rambut)
    sd_hair_title: 'Hair Cut & Styling',
    sd_hair_desc: 'Look more confident with modern hairstyles with experienced hair stylists.',
    sd_best_title: 'Best Hair Salon',
    sd_best_desc: 'Imelda Salon provides hair cutting services for women and men with modern techniques and professional stylists.',
    sd_best_desc2: 'We help you find a hairstyle that suits your face shape and character.',
    sd_why_title: 'Why Choose Imelda Salon?',
    sd_why_desc: 'The best experience for your hair.',
    sd_price_title: 'Service Prices',
    sd_price_desc: 'Affordable prices with premium quality.',
    sd_whatsapp: 'Order via WhatsApp',

    // Contact Page
    contact_title: 'Book',
    contact_title_highlight: 'Now',
    contact_desc: 'Please fill in your personal data to make an appointment. We will contact you back shortly.',
    contact_form_name: 'Full Name',
    contact_form_phone: 'WhatsApp',
    contact_form_service: 'Select Service',
    contact_form_date: 'Date',
    contact_form_time: 'Time',
    contact_form_notes: 'Special Notes',
    contact_form_btn: 'Confirm via WhatsApp',
    contact_info_location: 'Salon Location',
    contact_info_hours: 'Opening Hours',
    contact_info_cs: 'Customer Service',
    
    // Footer / Common
    footer_desc: 'Your premium beauty destination in Tarutung. We celebrate every client uniqueness with top-tier services.',
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('id')

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['id']] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
