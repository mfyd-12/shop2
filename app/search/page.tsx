'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { MobileNav } from '@/components/mobile-nav'
import { Button } from '@/components/ui/button'
import { Currency } from '@/components/ui/currency'
import { Heart, Search, X } from 'lucide-react'
import { useStore } from '@/lib/store-context'
import { useState, useEffect } from 'react'
import { useToast } from '@/hooks/use-toast'
import { useLanguage } from '@/lib/language-context'
import { products as catalog } from '@/lib/data/products'
import type { Product } from '@/lib/data/products'

export default function SearchPage() {
  const { addToCart, toggleFavorite, isFavorite } = useStore()
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<Product[]>([])
  const { toast } = useToast()
  const { t, language } = useLanguage()

  useEffect(() => {
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      const results = catalog.filter(product => {
        const nameMatch = product.name.toLowerCase().includes(query)
        const nameArMatch = product.nameAr.includes(query)
        const categoryMatch = product.category.toLowerCase().includes(query)
        const categoryArMatch = product.categoryAr.includes(query)
        return nameMatch || nameArMatch || categoryMatch || categoryArMatch
      })
      setSearchResults(results)
    } else {
      setSearchResults([])
    }
  }, [searchQuery])

  const handleAddToCart = (product: Product) => {
    addToCart({
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
    })
    const productName = language === 'ar' ? product.nameAr : product.name
    toast({
      title: t('addedToCart'),
      description: `${productName} ${language === 'ar' ? 'تمت إضافته إلى السلة' : 'added to cart'}`,
      duration: 2000,
    })
  }

  const handleToggleFavorite = (e: React.MouseEvent, product: Product) => {
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
    <div className="min-h-screen bg-background text-foreground pb-20">
      <Header />
      
      {/* Search Bar */}
      <section className="px-4 py-6 border-b border-border">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={language === 'ar' ? 'ابحث عن المنتجات...' : 'Search for products...'}
            className="w-full h-12 pl-12 pr-12 rounded-full bg-muted text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            autoFocus
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-accent rounded-full transition-colors"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          )}
        </div>
      </section>

      {/* Search Results */}
      <section className="px-4 py-6">
        {searchQuery.trim() === '' ? (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
            <h2 className="font-serif text-xl font-bold text-foreground mb-2">
              {language === 'ar' ? 'ابحث عن منتجاتك المفضلة' : 'Search for your favorite products'}
            </h2>
            <p className="text-muted-foreground">
              {language === 'ar' 
                ? 'ابدأ بكتابة اسم المنتج أو الفئة' 
                : 'Start typing product name or category'}
            </p>
          </div>
        ) : searchResults.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              {language === 'ar' 
                ? 'لم يتم العثور على نتائج' 
                : 'No results found'}
            </p>
            <p className="text-muted-foreground text-sm mt-2">
              {language === 'ar' 
                ? 'جرب البحث بكلمات مختلفة' 
                : 'Try searching with different words'}
            </p>
          </div>
        ) : (
          <>
            <h2 className="font-serif text-xl font-bold text-foreground mb-4">
              {searchResults.length} {language === 'ar' ? 'نتيجة' : 'results'}
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {searchResults.map((product) => (
                <div key={product.id} className="group">
                  <Link href={`/products/${product.id}`}>
                    <div className="aspect-[3/4] bg-muted rounded-2xl overflow-hidden mb-3 relative">
                      <img 
                        src={product.image || "/placeholder.svg"} 
                        alt={language === 'ar' ? product.nameAr : product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <button
                        onClick={(e) => handleToggleFavorite(e, product)}
                        className="absolute top-3 right-3 w-9 h-9 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-all active:scale-95"
                      >
                        <Heart 
                          className={`w-5 h-5 transition-colors ${
                            isFavorite(product.id) 
                              ? 'fill-red-500 stroke-red-500' 
                              : 'stroke-foreground'
                          }`}
                        />
                      </button>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">
                        {language === 'ar' ? product.categoryAr : product.category}
                      </p>
                      <h3 className="font-medium text-foreground text-sm leading-tight">
                        {language === 'ar' ? product.nameAr : product.name}
                      </h3>
                      <Currency
                        value={product.price}
                        className="font-serif text-lg font-semibold text-foreground"
                      />
                    </div>
                  </Link>
                  <Button 
                    onClick={() => handleAddToCart(product)}
                    className="w-full mt-3 bg-accent hover:bg-accent/90 text-accent-foreground font-medium rounded-full h-10 transition-all active:scale-95"
                  >
                    {t('addToCart')}
                  </Button>
                </div>
              ))}
            </div>
          </>
        )}
      </section>

      <MobileNav />
    </div>
  )
}
