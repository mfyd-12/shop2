'use client'

import Link from 'next/link'
import { Home, ShoppingBag, User, Search, Package } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/lib/language-context'
import { useStore } from '@/lib/store-context'
import { ThemeToggleButton } from './theme-toggle-button'

export function MobileNav() {
  const pathname = usePathname()
  const { t } = useLanguage()
  const { cartCount } = useStore()
  
  const navItems = [
    { icon: Home, label: 'home', href: '/' },
    { icon: Search, label: 'shop', href: '/products' },
    { icon: ShoppingBag, label: 'shoppingCart', href: '/cart' },
    { icon: Package, label: 'orders', href: '/orders' },
    { icon: User, label: 'account', href: '/account' },
  ]
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t z-50 md:hidden">
      <div className="flex items-center justify-around h-16 px-4">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className="relative flex flex-col items-center justify-center gap-1 flex-1 transition-all active:scale-95"
            >
              {item.label === 'shoppingCart' && cartCount > 0 && (
                <div className="absolute -top-1 -right-1.5 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-[10px] font-bold">
                  {cartCount}
                </div>
              )}
              <Icon 
                className={`w-5 h-5 ${isActive ? 'text-foreground' : 'text-muted-foreground'}`} 
              />
              <span className={`text-xs ${isActive ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                {t(item.label)}
              </span>
            </Link>
          )
        })}
  
      </div>
    </nav>
  )
}
