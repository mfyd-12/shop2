'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { MobileNav } from '@/components/mobile-nav'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ChevronLeft, Wallet, CreditCard, Box } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import React from 'react'

export default function PaymentPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#F9F8F6] pb-20">
      <Header />

      <section className="px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/account">
            <Button variant="ghost" size="icon">
              <ChevronLeft className="w-6 h-6" />
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-[#2A2723]">{t('paymentMethods')}</h1>
        </div>

        <div className="space-y-4">
          <Card className="bg-white rounded-2xl shadow-sm">
            <CardContent className="p-4 flex items-center gap-4">
              <Box className="w-6 h-6 text-[#6B6561]" />
              <div>
                <h3 className="font-semibold text-[#2A2723]">{t('cashOnDelivery')}</h3>
                <p className="text-sm text-[#6B6561]">{t('payWhenYouReceive')}</p>
              </div>
            </CardContent>
          </Card>

          {/* Placeholder for future payment methods */}
          <div className="text-center text-sm text-[#6B6561] p-4">
            <p>{t('morePaymentMethodsComingSoon')}</p>
          </div>
        </div>
      </section>

      <MobileNav />
    </div>
  );
}
