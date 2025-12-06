'use client'

import * as React from 'react'
import Link from 'next/link'
import { ShoppingBag, Menu, X, Search, User, Package, Settings } from 'lucide-react'
import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation' // Add this import
import { useStore } from '@/lib/store-context'
import { useLanguage } from '@/lib/language-context'
import { useIsMobile } from '@/hooks/use-mobile'
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ThemeToggleButton } from './theme-toggle-button'

const ListItem = React.forwardRef<
  HTMLDivElement, // Ref type for a div element
  React.ComponentPropsWithoutRef<"div"> & { href: string; onClick: (href: string) => void }
>(({ className, title, children, href, onClick, ...props }, ref) => {
  return (
    <li>
      <div
        ref={ref}
        onClick={() => onClick(href)} // Use the passed onClick handler
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer", // Added cursor-pointer
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </div>
    </li>
  )
})
ListItem.displayName = "ListItem"


export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { cartCount } = useStore()
  const { language, toggleLanguage, t } = useLanguage()
  const isMobile = useIsMobile()
  const router = useRouter() // Initialize useRouter here
  const pathname = usePathname()

  const categories = [
    { name: t('shirts'), href: '/products?category=shirts' },
    { name: t('pants'), href: '/products?category=pants' },
    { name: t('jackets'), href: '/products?category=jackets' },
    { name: t('hoodies'), href: '/products?category=hoodies' },
    { name: t('shoes'), href: '/products?category=shoes' },
    { name: t('accessories'), href: '/products?category=accessories' },
  ]

  const titles: { [key: string]: string } = {
    '/': 'home',
    '/cart': 'shoppingCart',
    '/favorites': 'favorites',
    '/orders': 'myOrders',
    '/account': 'myAccount',
    '/account/addresses': 'addresses',
    '/account/payment': 'paymentMethods',
    '/account/profile': 'profile',
    '/products': 'products',
    '/search': 'search',
    '/settings': 'settings',
  };

  const getTitle = () => {
    if (pathname.startsWith('/products/')) {
      return t('productDetails');
    }
    const titleKey = titles[pathname];
    return titleKey ? t(titleKey) : '';
  };

  return (
    <>
      <header className="sticky top-0 bg-background border-b z-40">
        <div className="flex items-center justify-between h-16 px-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center">
             <img src="/logo.png" alt="logo" className="w-24 h-10"/>
            </Link>
           <div className="flex items-center gap-2">
           {categories.map((category) => (
            <Link href={category.href} key={category.name} className="text-sm font-medium text-foreground hover:text-muted-foreground">
              {category.name}
            </Link>
           ))}
           </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Link
              href="/search"
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Search"
            >
              <Search className="w-6 h-6 text-foreground" />
            </Link>
            
            <Link href="/settings" className="p-2 hover:bg-muted rounded-lg transition-colors" aria-label="Settings">
              <Settings className="w-6 h-6 text-foreground" />
            </Link>

            <Link href="/cart" className="relative p-2 hover:bg-muted rounded-lg transition-colors" aria-label="Cart">
              <ShoppingBag className="w-6 h-6 text-foreground" />
              {cartCount > 0 && (
                <div className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-[10px] font-bold">
                  {cartCount}
                </div>
              )}
            </Link>
            
            <button
              onClick={toggleLanguage}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Toggle language"
            >
              <span className="text-2xl">
                {language === 'ar' ? '🇸🇦' : '🇺🇸'}
              </span>
            </button>
            <ThemeToggleButton />
            <button 
              className="p-2 md:hidden"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="w-6 h-6 text-foreground" />
            </button>
            <div className="hidden md:flex items-center gap-2">
              <Link href="/orders" className="p-2 hover:bg-muted rounded-lg transition-colors" aria-label="My Orders">
                <Package className="w-6 h-6 text-foreground" />
              </Link>
              <Link href="/account" className="p-2 hover:bg-muted rounded-lg transition-colors" aria-label="Account">
                <User className="w-6 h-6 text-foreground" />
              </Link>
            </div>
          </div>
        </div>

      </header>



      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-50"
          onClick={() => setIsMenuOpen(false)}
        >
          <div 
            className={`absolute top-0 ${language === 'ar' ? 'right-0' : 'left-0'} h-full w-[280px] bg-background shadow-xl`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between h-16 px-4 border-b">
              <h2 className="font-serif text-xl font-bold text-foreground">
                {t('categories')}
              </h2>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-2"
              >
                <X className="w-6 h-6 text-foreground" />
              </button>
            </div>

            <nav className="p-4">
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.name}>
                    <button
                      onClick={() => {
                        router.push(category.href)
                        setIsMenuOpen(false)
                      }}
                      className="block px-4 py-3 rounded-xl text-foreground font-medium hover:bg-muted transition-colors w-full text-left"
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2 border-t">
              <Link
                href="/orders"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 rounded-xl text-center bg-card text-foreground font-medium hover:bg-muted transition-colors"
              >
                {t('myOrders')}
              </Link>
              <Link
                href="/account"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 rounded-xl text-center bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
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
