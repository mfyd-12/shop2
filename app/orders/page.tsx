'use client'

import Link from 'next/link'
import { useStore } from '@/lib/store-context'
import { Header } from '@/components/header'
import { MobileNav } from '@/components/mobile-nav'
import { Button } from '@/components/ui/button'
import { Currency } from '@/components/ui/currency'
import { useLanguage } from '@/lib/language-context'

export default function OrdersPage() {
  const { orders } = useStore()
  const { t, language } = useLanguage()

  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      <Header />
      
      <section className="px-4 py-8 border-b border-border">
        <h1 className="font-serif text-3xl font-bold text-foreground mb-2">
          {t('myOrders')}
        </h1>
        <p className="text-muted-foreground">
          {orders.length} {orders.length === 1 ? t('order') : t('orders')}
        </p>
      </section>

      {orders.length > 0 ? (
        <section className="px-4 py-6 space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-muted/50 rounded-2xl p-6">
              <div className="pb-4 border-b border-border mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-foreground">
                      {t('order')} #{order.id.slice(0, 7)}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {new Date(order.date).toLocaleDateString(language === 'ar' ? 'ar-EG' : 'en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  </div>
                  <Currency value={order.total} className="font-serif text-xl font-bold text-foreground" />
                </div>
                <div className="text-sm text-foreground mt-3 space-y-1">
                  <p>{order.form.fullName} • {order.form.phone}</p>
                  <p>{order.form.address}, {order.form.city}</p>
                </div>
              </div>

              <div className="space-y-3">
                {order.items.map((item) => (
                  <div key={item.variantId} className="flex gap-4">
                    <div className="w-16 h-16 flex-shrink-0 bg-background rounded-lg overflow-hidden">
                      <img 
                        src={item.image || "/placeholder.svg"} 
                        alt={language === 'ar' ? item.nameAr : item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground truncate">
                        {language === 'ar' ? item.nameAr : item.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {t('size')}: {item.size}
                        {item.color ? ` • ${language === 'ar' ? item.color.nameAr : item.color.name}` : ''}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {t('quantity')}: {item.quantity}
                      </p>
                    </div>
                    <Currency value={item.price * item.quantity} className="font-medium text-foreground" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      ) : (
        <section className="px-4 py-16 text-center">
          <div className="max-w-sm mx-auto">
            <div className="w-24 h-24 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">📦</span>
            </div>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
              {t('noOrdersYet')}
            </h2>
            <p className="text-muted-foreground mb-8">
              {t('noOrdersDescription')}
            </p>
            <Button 
              asChild
              className="bg-foreground hover:bg-foreground/90 text-background font-medium rounded-full h-12 px-8 transition-all active:scale-95"
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
