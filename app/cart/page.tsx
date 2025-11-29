'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Minus, Plus, Trash2, X } from 'lucide-react'

import { useStore } from '@/lib/store-context'
import { Header } from '@/components/header'
import { MobileNav } from '@/components/mobile-nav'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Currency } from '@/components/ui/currency'
import { useLanguage } from '@/lib/language-context'
import { useToast } from '@/components/ui/use-toast'

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, addOrder } = useStore()
  const { t, language } = useLanguage()
  const { toast } = useToast()
  const [checkoutOpen, setCheckoutOpen] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)

  const orderFormInitial = {
    fullName: '',
    phone: '',
    address: '',
    city: '',
    notes: '',
    paymentMethod: 'cod',
  }

  const [orderForm, setOrderForm] = useState(orderFormInitial)

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = cart.length > 0 ? 12 : 0
  const total = subtotal + shipping

  const handleQuantityChange = (variantId: string, delta: number) => {
    const item = cart.find(entry => entry.variantId === variantId)
    if (!item) return
    const nextQuantity = Math.max(1, item.quantity + delta)
    updateQuantity(variantId, nextQuantity)
  }

  const handleInputChange = (field: keyof typeof orderFormInitial, value: string) => {
    setOrderForm(prev => ({ ...prev, [field]: value }))
  }

  const handleCheckoutSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    addOrder({
      form: orderForm,
      items: cart,
      subtotal,
      shipping,
      total,
    })
    closeCheckout()
    setOrderForm(orderFormInitial)
    setShowConfirmation(true)
  }

  const closeCheckout = () => setCheckoutOpen(false)

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
              <div key={item.variantId} className="bg-[#EFE9E3] rounded-2xl p-4">
                <div className="flex gap-4 mb-4">
                  <div className="w-24 h-24 flex-shrink-0 bg-[#F9F8F6] rounded-xl overflow-hidden">
                    <img 
                      src={item.image || "/placeholder.svg"} 
                      alt={language === 'ar' ? item.nameAr : item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-[#2A2723] mb-2 truncate">
                      {language === 'ar' ? item.nameAr : item.name}
                    </h3>
                    <div className="space-y-1 text-sm text-[#6B6561]">
                      <p>
                        {t('size')}: <span className="font-medium text-[#2A2723]">{item.size}</span>
                      </p>
                      {item.color && (
                        <p className="flex items-center gap-2">
                          <span>{t('color')}:</span>
                          <span className="inline-flex items-center gap-2 text-[#2A2723] font-medium">
                            <span
                              className="w-4 h-4 rounded-full border border-white shadow-sm"
                              style={{ backgroundColor: item.color.value }}
                              aria-hidden
                            />
                            {language === 'ar' ? item.color.nameAr : item.color.name}
                          </span>
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <Currency
                      value={item.price}
                      className="font-serif text-lg font-semibold text-[#2A2723]"
                    />
                    <button 
                      onClick={() => removeFromCart(item.variantId)}
                      className="p-2 hover:bg-[#D9CFC7] rounded-full transition-all active:scale-95"
                      aria-label={t('remove')}
                    >
                      <Trash2 className="w-5 h-5 text-[#6B6561]" />
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-3 bg-[#F9F8F6] rounded-full px-4 py-2">
                    <button 
                      onClick={() => handleQuantityChange(item.variantId, -1)}
                      className="p-1 hover:bg-[#EFE9E3] rounded-full transition-all active:scale-95"
                      aria-label="decrease quantity"
                    >
                      <Minus className="w-4 h-4 text-[#2A2723]" />
                    </button>
                    <span className="font-medium text-[#2A2723] w-8 text-center">
                      {item.quantity}
                    </span>
                    <button 
                      onClick={() => handleQuantityChange(item.variantId, 1)}
                      className="p-1 hover:bg-[#EFE9E3] rounded-full transition-all active:scale-95"
                      aria-label="increase quantity"
                    >
                      <Plus className="w-4 h-4 text-[#2A2723]" />
                    </button>
                  </div>
                  <Currency
                    value={item.price * item.quantity}
                    className="font-serif text-xl font-semibold text-[#2A2723]"
                  />
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
                  <Currency value={subtotal} className="font-medium text-[#2A2723]" />
                </div>
                <div className="flex justify-between text-[#6B6561]">
                  <span>{t('shipping')}</span>
                  <Currency value={shipping} className="font-medium text-[#2A2723]" />
                </div>
                <div className="pt-3 border-t border-[#D9CFC7] flex justify-between">
                  <span className="font-serif text-lg font-bold text-[#2A2723]">{t('total')}</span>
                  <Currency value={total} className="font-serif text-xl font-bold text-[#2A2723]" />
                </div>
              </div>

              <Button 
                disabled={cart.length === 0}
                onClick={() => setCheckoutOpen(true)}
                className="w-full bg-[#2A2723] hover:bg-[#3A3733] disabled:bg-[#A29C96] text-[#F9F8F6] font-medium rounded-full h-14 text-lg mt-6 transition-all active:scale-[0.98]"
              >
                {t('completeOrder')}
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

      {showConfirmation && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="bg-[#F9F8F6] w-full max-w-md rounded-3xl p-8 text-center shadow-2xl animate-in zoom-in-95 duration-300">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-5xl">🎉</span>
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#2A2723] mb-3">
              {t('orderPlaced')}
            </h2>
            <p className="text-[#6B6561] mb-8">
              Your order has been received successfully.
            </p>
            <div className="flex flex-col gap-3">
              <Link href="/orders">
                <Button className="w-full bg-[#2A2723] hover:bg-[#3A3733] text-[#F9F8F6] font-medium rounded-full h-12 transition-all active:scale-95">
                  Go to My Orders
                </Button>
              </Link>
              <Button
                variant="outline"
                onClick={() => setShowConfirmation(false)}
                className="w-full border-[#D9CFC7] text-[#2A2723] font-medium rounded-full h-12 hover:bg-[#EFE9E3] transition-all active:scale-95"
              >
                {t('close')}
              </Button>
            </div>
          </div>
        </div>
      )}

      {checkoutOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-end md:items-center justify-center px-4"
          onClick={closeCheckout}
        >
          <div 
            className="bg-[#F9F8F6] w-full max-w-lg rounded-t-3xl md:rounded-3xl p-6 space-y-6 shadow-2xl max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#2A2723]">
                  {t('checkoutFormTitle')}
                </h3>
                <p className="text-sm text-[#6B6561]">{t('reviewOrder')}</p>
              </div>
              <button
                onClick={closeCheckout}
                className="p-2 hover:bg-[#EFE9E3] rounded-full transition-all active:scale-95"
                aria-label={t('close')}
              >
                <X className="w-5 h-5 text-[#2A2723]" />
              </button>
            </div>

            <form className="space-y-4" onSubmit={handleCheckoutSubmit}>
              <div className="space-y-1">
                <label className="text-sm font-medium text-[#2A2723]">{t('fullName')}</label>
                <Input
                  value={orderForm.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-[#2A2723]">{t('phoneNumber')}</label>
                <Input
                  type="tel"
                  value={orderForm.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-[#2A2723]">{t('address')}</label>
                <Input
                  value={orderForm.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-[#2A2723]">{t('cityLabel')}</label>
                <Input
                  value={orderForm.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-[#2A2723]">{t('deliveryNotes')}</label>
                <Textarea
                  value={orderForm.notes}
                  onChange={(e) => handleInputChange('notes', e.target.value)}
                  placeholder={language === 'ar' ? 'ملاحظات إضافية للمندوب' : 'Any extra delivery notes'}
                  rows={3}
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-[#2A2723]">{t('paymentMethod')}</label>
                <div className="flex items-center gap-3 rounded-2xl border border-[#E1DCD4] px-4 py-3 bg-white">
                  <input type="radio" id="cod" name="payment" checked readOnly />
                  <label htmlFor="cod" className="text-sm font-medium text-[#2A2723]">
                    {t('cashOnDelivery')}
                  </label>
                </div>
              </div>
              <Button
                type="submit"
                className="w-full bg-[#2A2723] hover:bg-[#3A3733] text-[#F9F8F6] font-medium rounded-full h-12 transition-all active:scale-[0.98]"
              >
                {t('placeOrder')}
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
