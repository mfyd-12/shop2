'use client'

import { useStore } from '@/lib/store-context'
import Link from 'next/link'
import { Header } from '@/components/header'
import { MobileNav } from '@/components/mobile-nav'
import { Button } from '@/components/ui/button'
import { Minus, Plus, Trash2 } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

export default function CartPage() {
  const { cart } = useStore()
  const { t, language } = useLanguage()

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 12
  const total = subtotal + shipping

  return (
    <div className="min-h-screen bg-[#F9F8F6] pb-20">
      <Header />
      
      {/* Page Title */}
      <section className="px-4 py-8 border-b border-[#D9CFC7]">
        <h1 className="font-serif text-3xl font-bold text-[#2A2723] mb-2">
          {t('shoppingCart')}
        </h1>
        <p className="text-[#6B6561]">
          {cart.length} {cart.length === 1 ? t('item') : t('items')}
        </p>
      </section>

      {/* Cart Items */}
      {cart.length > 0 ? (
        <>
          <section className="px-4 py-6 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="bg-[#EFE9E3] rounded-2xl p-4">
                <div className="flex gap-4 mb-4">
                  <div className="w-24 h-24 flex-shrink-0 bg-[#F9F8F6] rounded-xl overflow-hidden">
                    <img 
                      src={item.image || "/placeholder.svg"} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-[#2A2723] mb-1 truncate">
                      {item.name}
                    </h3>
                    <p className="text-sm text-[#6B6561] mb-2">
                      {t('size')}: {item.size}
                    </p>
                    <p className="font-serif text-lg font-semibold text-[#2A2723] inline-flex items-baseline gap-1">
                      {language === 'ar' ? (
                        <>
                          <span>{item.price}</span>
                          <span>ر.س</span>
                        </>
                      ) : (
                        <>
                          <span>$</span>
                          <span>{item.price}</span>
                        </>
                      )}
                    </p>
                  </div>
                  <button 
                    className="p-2 h-fit hover:bg-[#D9CFC7] rounded-full transition-all active:scale-95"
                  >
                    <Trash2 className="w-5 h-5 text-[#6B6561]" />
                  </button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-3 bg-[#F9F8F6] rounded-full px-4 py-2">
                    <button 
                      className="p-1 hover:bg-[#EFE9E3] rounded-full transition-all active:scale-95"
                    >
                      <Minus className="w-4 h-4 text-[#2A2723]" />
                    </button>
                    <span className="font-medium text-[#2A2723] w-8 text-center">
                      {item.quantity}
                    </span>
                    <button 
                      className="p-1 hover:bg-[#EFE9E3] rounded-full transition-all active:scale-95"
                    >
                      <Plus className="w-4 h-4 text-[#2A2723]" />
                    </button>
                  </div>
                  <p className="font-serif text-xl font-semibold text-[#2A2723] inline-flex items-baseline gap-1">
                    {language === 'ar' ? (
                      <>
                        <span>{item.price * item.quantity}</span>
                        <span>ر.س</span>
                      </>
                    ) : (
                      <>
                        <span>$</span>
                        <span>{item.price * item.quantity}</span>
                      </>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </section>

          {/* Summary */}
          <section className="px-4 pb-6">
            <div className="bg-[#EFE9E3] rounded-2xl p-6 space-y-4">
              <h3 className="font-serif text-xl font-bold text-[#2A2723] pb-3 border-b border-[#D9CFC7]">
                {language === 'ar' ? 'ملخص الطلب' : 'Order Summary'}
              </h3>
              
              <div className="space-y-3">
                <div className="flex justify-between text-[#6B6561]">
                  <span>{t('subtotal')}</span>
                  <span className="font-medium text-[#2A2723] inline-flex items-baseline gap-1">
                    {language === 'ar' ? (
                      <>
                        <span>{subtotal}</span>
                        <span>ر.س</span>
                      </>
                    ) : (
                      <>
                        <span>$</span>
                        <span>{subtotal}</span>
                      </>
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-[#6B6561]">
                  <span>{t('shipping')}</span>
                  <span className="font-medium text-[#2A2723] inline-flex items-baseline gap-1">
                    {language === 'ar' ? (
                      <>
                        <span>{shipping}</span>
                        <span>ر.س</span>
                      </>
                    ) : (
                      <>
                        <span>$</span>
                        <span>{shipping}</span>
                      </>
                    )}
                  </span>
                </div>
                <div className="pt-3 border-t border-[#D9CFC7] flex justify-between">
                  <span className="font-serif text-lg font-bold text-[#2A2723]">{t('total')}</span>
                  <span className="font-serif text-xl font-bold text-[#2A2723] inline-flex items-baseline gap-1">
                    {language === 'ar' ? (
                      <>
                        <span>{total}</span>
                        <span>ر.س</span>
                      </>
                    ) : (
                      <>
                        <span>$</span>
                        <span>{total}</span>
                      </>
                    )}
                  </span>
                </div>
              </div>

              <Button 
                className="w-full bg-[#2A2723] hover:bg-[#3A3733] text-[#F9F8F6] font-medium rounded-full h-14 text-lg mt-6 transition-all active:scale-[0.98]"
              >
                {t('proceedToCheckout')}
              </Button>
              
              <Link href="/products">
                <Button 
                  variant="outline"
                  className="w-full border-[#D9CFC7] text-[#2A2723] font-medium rounded-full h-12 hover:bg-[#EFE9E3] transition-all active:scale-[0.98]"
                >
                  {t('continueShopping')}
                </Button>
              </Link>
            </div>
          </section>
        </>
      ) : (
        <section className="px-4 py-16 text-center">
          <div className="max-w-sm mx-auto">
            <div className="w-24 h-24 bg-[#EFE9E3] rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">🛍️</span>
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#2A2723] mb-3">
              {t('yourCartEmpty')}
            </h2>
            <p className="text-[#6B6561] mb-8">
              {t('startAddingItems')}
            </p>
            <Button 
              asChild
              className="bg-[#2A2723] hover:bg-[#3A3733] text-[#F9F8F6] font-medium rounded-full h-12 px-8 transition-all active:scale-95"
            >
              <Link href="/products">
                {t('shopNow')}
              </Link>
            </Button>
          </div>
        </section>
      )}

      <MobileNav />
    </div>
  )
}
