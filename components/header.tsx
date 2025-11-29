'use client'

import Link from 'next/link'
import { ShoppingBag, Menu, X, Search } from 'lucide-react'
import { useState } from 'react'
import { useStore } from '@/lib/store-context'
import { useLanguage } from '@/lib/language-context'
import { useIsMobile } from '@/hooks/use-mobile'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { cartCount } = useStore()
  const { language, toggleLanguage, t } = useLanguage()
  const isMobile = useIsMobile()

  const categories = [
    { name: t('allProducts'), href: '/products' },
    { name: t('shirts'), href: '/products?category=shirts' },
    { name: t('pants'), href: '/products?category=pants' },
    { name: t('jackets'), href: '/products?category=jackets' },
    { name: t('accessories'), href: '/products?category=accessories' },
  ]



  return (
    <>
      <header className="sticky top-0 bg-[#F9F8F6] border-b border-[#D9CFC7] z-40">
        <div className="flex items-center justify-between h-16 px-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center">
              <h1 className="text-2xl font-serif font-bold tracking-tight text-[#2A2723]">
                REEVE
              </h1>
            </Link>
            <nav className="hidden md:flex gap-4">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="text-[#2A2723] font-medium hover:text-[#C9B59C] transition-colors"
                >
                  {category.name}
                </Link>
              ))}
            </nav>
          </div>
          
          <div className="flex items-center gap-2">
            <Link
              href="/search"
              className="p-2 hover:bg-[#EFE9E3] rounded-lg transition-colors"
              aria-label="Search"
            >
              <Search className="w-6 h-6 text-[#2A2723]" />
            </Link>
            
            <Link href="/cart" className="relative p-2 hover:bg-[#EFE9E3] rounded-lg transition-colors" aria-label="Cart">
              <ShoppingBag className="w-6 h-6 text-[#2A2723]" />
              {cartCount > 0 && (
                <div className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-[10px] font-bold">
                  {cartCount}
                </div>
              )}
            </Link>
            
            <button
              onClick={toggleLanguage}
              className="p-2 hover:bg-[#EFE9E3] rounded-lg transition-colors"
              aria-label="Toggle language"
            >
              <span className="text-2xl">
                {language === 'ar' ? '🇸🇦' : '🇺🇸'}
              </span>
            </button>
            <button 
              className="p-2 md:hidden"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="w-6 h-6 text-[#2A2723]" />
            </button>
          </div>
        </div>
        {isMobile && (
          <div className="p-2 border-b border-[#D9CFC7]">
            <Link href="/orders" className="block w-full">
              <button className="w-full bg-[#EFE9E3] rounded-lg p-2 text-center font-medium text-[#2A2723] hover:bg-[#D9CFC7] transition-colors">
                {t('myOrders')}
              </button>
            </Link>
          </div>
        )}
      </header>



      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-50"
          onClick={() => setIsMenuOpen(false)}
        >
          <div 
            className={`absolute top-0 ${language === 'ar' ? 'right-0' : 'left-0'} h-full w-[280px] bg-[#F9F8F6] shadow-xl`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between h-16 px-4 border-b border-[#D9CFC7]">
              <h2 className="font-serif text-xl font-bold text-[#2A2723]">
                {t('categories')}
              </h2>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-2"
              >
                <X className="w-6 h-6 text-[#2A2723]" />
              </button>
            </div>

            <nav className="p-4">
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.name}>
                    <Link
                      href={category.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-3 rounded-xl text-[#2A2723] font-medium hover:bg-[#EFE9E3] transition-colors"
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2 border-t border-[#D9CFC7]">
              <Link
                href="/orders"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 rounded-xl text-center bg-white text-[#2A2723] font-medium hover:bg-[#EFE9E3] transition-colors"
              >
                {t('myOrders')}
              </Link>
              <Link
                href="/account"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 rounded-xl text-center bg-[#2A2723] text-[#F9F8F6] font-medium hover:bg-[#3A3733] transition-colors"
              >
                {t('myAccount')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
