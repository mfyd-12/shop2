'use client'

import Link from 'next/link'
import { ShoppingBag, Menu, X, Search } from 'lucide-react'
import { useState } from 'react'
import { useStore } from '@/lib/store-context'
import { useLanguage } from '@/lib/language-context'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { cart } = useStore()
  const { language, toggleLanguage, t } = useLanguage()

  const categories = [
    { name: t('allProducts'), href: '/products' },
    { name: t('shirts'), href: '/products?category=shirts' },
    { name: t('pants'), href: '/products?category=pants' },
    { name: t('jackets'), href: '/products?category=jackets' },
    { name: t('accessories'), href: '/products?category=accessories' },
  ]

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <>
      <header className="sticky top-0 bg-[#F9F8F6] border-b border-[#D9CFC7] z-40">
        <div className="flex items-center justify-between h-16 px-4">
          <button 
            className="p-2 -ml-2"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="w-6 h-6 text-[#2A2723]" />
          </button>
          
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl font-serif font-bold tracking-tight text-[#2A2723]">
              REEVE
            </h1>
          </Link>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 hover:bg-[#EFE9E3] rounded-lg transition-colors"
              aria-label="Search"
            >
              <Search className="w-6 h-6 text-[#2A2723]" />
            </button>
            
            <button
              onClick={toggleLanguage}
              className="p-2 hover:bg-[#EFE9E3] rounded-lg transition-colors"
              aria-label="Toggle language"
            >
              <span className="text-2xl">
                {language === 'ar' ? '🇸🇦' : '🇺🇸'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {isSearchOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-50"
          onClick={() => setIsSearchOpen(false)}
        >
          <div 
            className="absolute top-0 left-0 right-0 bg-[#F9F8F6] shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 h-16 px-4 border-b border-[#D9CFC7]">
              <Search className="w-5 h-5 text-[#6B6561]" />
              <Link 
                href="/search"
                onClick={() => setIsSearchOpen(false)}
                className="flex-1 text-[#6B6561] text-base"
              >
                {language === 'ar' ? 'ابحث عن المنتجات...' : 'Search for products...'}
              </Link>
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="p-2"
              >
                <X className="w-6 h-6 text-[#2A2723]" />
              </button>
            </div>
          </div>
        </div>
      )}

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
