'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Grid, MessageSquare, BookOpen } from 'lucide-react'
import { cn } from '@/lib/utils'

export function MobileNav() {
  const pathname = usePathname()

  const navItems = [
    { label: 'Beranda', href: '/', icon: Home },
    { label: 'Layanan', href: '/layanan', icon: Grid },
    { label: 'Kontak', href: '/contact', icon: MessageSquare },
    { label: 'Blog', href: '/blog', icon: BookOpen },
  ]

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-t border-border px-6 py-3 pb-8">
      <div className="flex justify-between items-center max-w-lg mx-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center space-y-1 group"
            >
              <div className={cn(
                "p-2 rounded-2xl transition-all duration-300",
                isActive ? "bg-primary text-white scale-110 shadow-lg shadow-primary/20" : "text-muted-foreground hover:text-primary"
              )}>
                <item.icon size={20} strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <span className={cn(
                "text-[10px] font-bold uppercase tracking-widest transition-colors",
                isActive ? "text-primary" : "text-muted-foreground"
              )}>
                {item.label}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
