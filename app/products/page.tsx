'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { MobileNav } from '@/components/mobile-nav'
import { Button } from '@/components/ui/button'
import { Currency } from '@/components/ui/currency'
import { Heart } from 'lucide-react'
import { useStore } from '@/lib/store-context'
import { useMemo, useState } from 'react'
import { useToast } from '@/hooks/use-toast'
import { useLanguage } from '@/lib/language-context'
import { products } from '@/lib/data/products'

export default function ProductsPage() {
  const { addToCart, toggleFavorite, isFavorite } = useStore()
  const [filter, setFilter] = useState('All')
  const { toast } = useToast()
  const { t, language } = useLanguage()

  const categoryFilters = useMemo(() => {
    const map = new Map<string, string>()
    products.forEach((product) => {
      if (!map.has(product.category)) {
        map.set(product.category, product.categoryAr)
      }
    })
    return [
      { key: 'All', labelEn: t('all') || 'All', labelAr: 'الكل' },
      ...Array.from(map.entries()).map(([key, value]) => ({
        key,
        labelEn: key,
        labelAr: value,
      })),
    ]
  }, [t])

  const filteredProducts = filter === 'All'
    ? products
    : products.filter(p => p.category === filter)

  const handleAddToCart = (product: typeof products[0]) => {
    const payload = {
      id: product.id,
      name: product.name,
      nameAr: product.nameAr,
      price: product.price,
      image: product.image,
      category: product.category,
      categoryAr: product.categoryAr,
      size: product.sizes[2] || product.sizes[0],
      color: product.colors[0],
      quantity: 1,
    }
    addToCart(payload)
    const productName = language === 'ar' ? product.nameAr : product.name
    toast({
      title: t('addedToCart'),
      description: `${productName} ${language === 'ar' ? 'تمت إضافته إلى السلة' : 'added to cart'}`,
      duration: 2000,
    })
  }

  const handleToggleFavorite = (e: React.MouseEvent, product: typeof products[0]) => {
    e.preventDefault()
    const wasAlreadyFavorite = isFavorite(product.id)
    toggleFavorite(product.id)
    
    if (!wasAlreadyFavorite) {
      const productName = language === 'ar' ? product.nameAr : product.name
      toast({
        title: t('addedToFavorites'),
        description: `${productName} ${language === 'ar' ? 'تمت إضافته إلى المفضلة' : 'added to favorites'}`,
        duration: 2000,
      })
    }
  }

  return (
    <div className="min-h-screen bg-[#F9F8F6] pb-20">
      <Header />
      
      {/* Page Title */}
      <section className="px-4 py-8 border-b border-[#D9CFC7]">
        <h1 className="font-serif text-3xl font-bold text-[#2A2723] mb-2">
          {t('allProducts')}
        </h1>
        <p className="text-[#6B6561]">
          {filteredProducts.length} {language === 'ar' ? 'منتج' : 'items'}
        </p>
      </section>

      {/* Filters */}
      <section className="px-4 py-4 border-b border-[#D9CFC7]">
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4">
          {categoryFilters.map((filterName) => (
            <button
              key={filterName.key}
              onClick={() => setFilter(filterName.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all active:scale-95 ${
                filter === filterName.key
                  ? 'bg-[#2A2723] text-[#F9F8F6]' 
                  : 'bg-[#EFE9E3] text-[#6B6561]'
              }`}
            >
              {language === 'ar' ? filterName.labelAr : filterName.labelEn}
            </button>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-4 py-6">
        <div className="grid grid-cols-2 gap-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group">
              <Link href={`/products/${product.id}`}>
                <div className="aspect-[3/4] bg-[#EFE9E3] rounded-2xl overflow-hidden mb-3 relative">
                  <img 
                    src={product.image || "/placeholder.svg"} 
                    alt={language === 'ar' ? product.nameAr : product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <button
                    onClick={(e) => handleToggleFavorite(e, product)}
                    className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all active:scale-95"
                  >
                    <Heart 
                      className={`w-5 h-5 transition-colors ${
                        isFavorite(product.id) 
                          ? 'fill-red-500 stroke-red-500' 
                          : 'stroke-[#2A2723]'
                      }`}
                    />
                  </button>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-[#6B6561] uppercase tracking-wide">
                    {language === 'ar' ? product.categoryAr : product.category}
                  </p>
                  <h3 className="font-medium text-[#2A2723] text-sm leading-tight">
                    {language === 'ar' ? product.nameAr : product.name}
                  </h3>
                  <Currency
                    value={product.price}
                    className="font-serif text-lg font-semibold text-[#2A2723]"
                  />
                </div>
              </Link>
              <Button 
                onClick={() => handleAddToCart(product)}
                className="w-full mt-3 bg-[#C9B59C] hover:bg-[#B8A58B] text-[#2A2723] font-medium rounded-full h-10 transition-all active:scale-95"
              >
                {t('addToCart')}
              </Button>
            </div>
          ))}
        </div>
      </section>

      <MobileNav />
    </div>
  )
}
