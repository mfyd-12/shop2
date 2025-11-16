'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { MobileNav } from '@/components/mobile-nav'
import { Button } from '@/components/ui/button'
import { Heart, Search, X } from 'lucide-react'
import { useStore } from '@/lib/store-context'
import { useState, useEffect } from 'react'
import { useToast } from '@/hooks/use-toast'
import { useLanguage } from '@/lib/language-context'

export default function SearchPage() {
  const { addToCart, toggleFavorite, isFavorite } = useStore()
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<typeof products>([])
  const { toast } = useToast()
  const { t, language } = useLanguage()

  const products = [
    { id: 1, name: 'Classic Oxford Shirt', nameAr: 'قميص أكسفورد كلاسيكي', price: 89, category: 'Shirts', categoryAr: 'قمصان', image: '/white-oxford-shirt.png' },
    { id: 2, name: 'Merino Wool Sweater', nameAr: 'سترة صوف ميرينو', price: 149, category: 'Knitwear', categoryAr: 'ملابس صوفية', image: '/mens-sweater-beige.jpg' },
    { id: 3, name: 'Tailored Chinos', nameAr: 'بنطلون تشينو مفصل', price: 119, category: 'Trousers', categoryAr: 'بناطيل', image: '/beige-chino-pants.png' },
    { id: 4, name: 'Cotton Polo Shirt', nameAr: 'قميص بولو قطني', price: 69, category: 'Shirts', categoryAr: 'قمصان', image: '/navy-polo-shirt.jpg' },
    { id: 5, name: 'Wool Overcoat', nameAr: 'معطف صوفي', price: 299, category: 'Outerwear', categoryAr: 'ملابس خارجية', image: '/mens-wool-coat-camel.jpg' },
    { id: 6, name: 'Linen Blazer', nameAr: 'جاكيت كتان', price: 189, category: 'Outerwear', categoryAr: 'ملابس خارجية', image: '/beige-linen-blazer.jpg' },
    { id: 7, name: 'Cashmere Cardigan', nameAr: 'كارديجان كشمير', price: 179, category: 'Knitwear', categoryAr: 'ملابس صوفية', image: '/grey-cashmere-cardigan.jpg' },
    { id: 8, name: 'Dress Trousers', nameAr: 'بنطلون رسمي', price: 129, category: 'Trousers', categoryAr: 'بناطيل', image: '/grey-dress-pants.jpg' },
    { id: 9, name: 'Striped Dress Shirt', nameAr: 'قميص رسمي مخطط', price: 95, category: 'Shirts', categoryAr: 'قمصان', image: '/striped-dress-shirt.jpg' },
    { id: 10, name: 'Cable Knit Sweater', nameAr: 'سترة صوفية منسوجة', price: 135, category: 'Knitwear', categoryAr: 'ملابس صوفية', image: '/cable-knit-sweater-beige.jpg' },
    { id: 11, name: 'Denim Jacket', nameAr: 'جاكيت جينز', price: 159, category: 'Outerwear', categoryAr: 'ملابس خارجية', image: '/denim-jacket-classic.jpg' },
    { id: 12, name: 'Slim Fit Jeans', nameAr: 'جينز بقصة ضيقة', price: 99, category: 'Trousers', categoryAr: 'بناطيل', image: '/slim-fit-jeans-dark-blue.jpg' },
    { id: 13, name: 'Henley Shirt', nameAr: 'قميص هينلي', price: 59, category: 'Shirts', categoryAr: 'قمصان', image: '/henley-shirt-beige.jpg' },
    { id: 14, name: 'V-Neck Sweater', nameAr: 'سترة بياقة على شكل V', price: 119, category: 'Knitwear', categoryAr: 'ملابس صوفية', image: '/v-neck-sweater-grey.jpg' },
    { id: 15, name: 'Bomber Jacket', nameAr: 'جاكيت بومبر', price: 199, category: 'Outerwear', categoryAr: 'ملابس خارجية', image: '/bomber-jacket-olive.jpg' },
    { id: 16, name: 'Cargo Pants', nameAr: 'بنطلون كارجو', price: 109, category: 'Trousers', categoryAr: 'بناطيل', image: '/cargo-pants-khaki.jpg' },
    { id: 17, name: 'Linen Shirt', nameAr: 'قميص كتان', price: 79, category: 'Shirts', categoryAr: 'قمصان', image: '/linen-shirt-white.jpg' },
    { id: 18, name: 'Turtleneck Sweater', nameAr: 'سترة برقبة عالية', price: 145, category: 'Knitwear', categoryAr: 'ملابس صوفية', image: '/black-turtleneck-sweater.png' },
    { id: 19, name: 'Parka Coat', nameAr: 'معطف باركا', price: 279, category: 'Outerwear', categoryAr: 'ملابس خارجية', image: '/parka-coat-navy.jpg' },
    { id: 20, name: 'Pleated Trousers', nameAr: 'بنطلون بكسرات', price: 139, category: 'Trousers', categoryAr: 'بناطيل', image: '/pleated-trousers-beige.jpg' },
    { id: 21, name: 'Flannel Shirt', nameAr: 'قميص فانيلا', price: 85, category: 'Shirts', categoryAr: 'قمصان', image: '/flannel-shirt-checkered.jpg' },
    { id: 22, name: 'Zip Cardigan', nameAr: 'كارديجان بسحاب', price: 129, category: 'Knitwear', categoryAr: 'ملابس صوفية', image: '/zip-cardigan-grey.jpg' },
    { id: 23, name: 'Trench Coat', nameAr: 'معطف ترينش', price: 319, category: 'Outerwear', categoryAr: 'ملابس خارجية', image: '/trench-coat-beige.jpg' },
    { id: 24, name: 'Corduroy Pants', nameAr: 'بنطلون قطيفة', price: 115, category: 'Trousers', categoryAr: 'بناطيل', image: '/corduroy-pants-brown.jpg' },
  ]

  useEffect(() => {
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      const results = products.filter(product => {
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

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart(product)
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
      
      {/* Search Bar */}
      <section className="px-4 py-6 border-b border-[#D9CFC7]">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B6561]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={language === 'ar' ? 'ابحث عن المنتجات...' : 'Search for products...'}
            className="w-full h-12 pl-12 pr-12 rounded-full bg-[#EFE9E3] text-[#2A2723] placeholder:text-[#6B6561] focus:outline-none focus:ring-2 focus:ring-[#C9B59C]"
            autoFocus
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-[#D9CFC7] rounded-full transition-colors"
            >
              <X className="w-4 h-4 text-[#6B6561]" />
            </button>
          )}
        </div>
      </section>

      {/* Search Results */}
      <section className="px-4 py-6">
        {searchQuery.trim() === '' ? (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-[#D9CFC7] mx-auto mb-4" />
            <h2 className="font-serif text-xl font-bold text-[#2A2723] mb-2">
              {language === 'ar' ? 'ابحث عن منتجاتك المفضلة' : 'Search for your favorite products'}
            </h2>
            <p className="text-[#6B6561]">
              {language === 'ar' 
                ? 'ابدأ بكتابة اسم المنتج أو الفئة' 
                : 'Start typing product name or category'}
            </p>
          </div>
        ) : searchResults.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-[#6B6561] text-lg">
              {language === 'ar' 
                ? 'لم يتم العثور على نتائج' 
                : 'No results found'}
            </p>
            <p className="text-[#6B6561] text-sm mt-2">
              {language === 'ar' 
                ? 'جرب البحث بكلمات مختلفة' 
                : 'Try searching with different words'}
            </p>
          </div>
        ) : (
          <>
            <h2 className="font-serif text-xl font-bold text-[#2A2723] mb-4">
              {searchResults.length} {language === 'ar' ? 'نتيجة' : 'results'}
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {searchResults.map((product) => (
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
                      <p className="font-serif text-lg font-semibold text-[#2A2723] inline-flex items-baseline gap-1">
                        {language === 'ar' ? (
                          <>
                            <span>{product.price}</span>
                            <span>ر.س</span>
                          </>
                        ) : (
                          <>
                            <span>$</span>
                            <span>{product.price}</span>
                          </>
                        )}
                      </p>
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
          </>
        )}
      </section>

      <MobileNav />
    </div>
  )
}
