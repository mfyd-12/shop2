'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { MobileNav } from '@/components/mobile-nav'
import { Button } from '@/components/ui/button'
import { Currency } from '@/components/ui/currency'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { products } from '@/lib/data/products'

export default function HomePage() {
  const { t, language } = useLanguage()
  
  const categories = [
    { name: t('outerwear'), image: '/mens-jacket-minimal.jpg' },
    { name: t('shirts'), image: '/mens-dress-shirt.jpg' },
    { name: t('knitwear'), image: '/mens-sweater-minimal.jpg' },
    { name: t('trousers'), image: '/mens-trousers-minimal.jpg' },
  ]

  const featured = products.slice(0, 3)

  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-muted overflow-hidden">
        <img 
          src="/stylish-man-minimal-fashion-portrait.jpg" 
          alt="Hero" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-3 text-balance">
            {t('heroTitle')}
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-6 text-pretty">
            {t('heroSubtitle')}
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full h-12 px-8"
          >
            <Link href="/products">
              {t('shopNow')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="px-4 py-12">
        <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
          {t('shopByCategory')}
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {categories.map((category) => (
            <Link 
              key={category.name}
              href="/products"
              className="group"
            >
              <div className="aspect-square bg-muted rounded-2xl overflow-hidden mb-3">
                <img 
                  src={category.image || "/placeholder.svg"} 
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="font-medium text-foreground text-center">
                {category.name}
              </h4>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="px-4 pb-12">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-serif text-2xl font-bold text-foreground">
            {t('featuredItems')}
          </h3>
          <Link href="/products" className="text-primary text-sm font-medium hover:text-primary/90">
            {t('viewAll')}
          </Link>
        </div>
        <div className="space-y-4">
          {featured.map((product) => (
            <Link 
              key={product.id}
              href={`/products/${product.id}`}
              className="flex gap-4 bg-card rounded-2xl overflow-hidden group"
            >
              <div className="w-32 h-32 flex-shrink-0">
                <img 
                  src={product.image || "/placeholder.svg"} 
                  alt={language === 'ar' ? product.nameAr : product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col justify-center py-4 pr-4">
                <h4 className="font-medium text-foreground mb-1">
                  {language === 'ar' ? product.nameAr : product.name}
                </h4>
                <p className="text-muted-foreground text-sm mb-2">{t('premiumQuality')}</p>
                <Currency
                  value={product.price}
                  className="font-serif text-lg font-semibold text-foreground"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <MobileNav />
    </div>
  )
}
