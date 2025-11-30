'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { MobileNav } from '@/components/mobile-nav'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { User, ChevronRight, ShoppingBag, Heart, MapPin, CreditCard, Settings, HelpCircle } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import React, { useState, useEffect } from 'react' // Import useState and useEffect

const LOCAL_STORAGE_PROFILE_KEY = 'user_profile';

interface UserProfile {
  name: string;
  email: string;
  profileImage: string; // Base64 string or URL
}

export default function AccountPage() {
  const { t } = useLanguage()
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: 'John Doe',
    email: 'john.doe@example.com',
    profileImage: '/placeholder-user.jpg',
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedProfile = localStorage.getItem(LOCAL_STORAGE_PROFILE_KEY);
      if (storedProfile) {
        setUserProfile(JSON.parse(storedProfile));
      }
    }
  }, []);

  const accountSections = [
    {
      title: t('settings'),
      items: [
        { icon: User, label: t('profile'), href: '/account/profile' },
        { icon: MapPin, label: t('addresses'), href: '/account/addresses' },
        { icon: CreditCard, label: t('paymentMethods'), href: '/account/payment' },
      ],
    },
    {
      title: t('activity'),
      items: [
        { icon: ShoppingBag, label: t('orders'), href: '/orders' },
        { icon: Heart, label: t('favorites'), href: '/favorites' },
      ],
    },
    {
      title: t('support'),
      items: [{ icon: HelpCircle, label: t('support'), href: '/support' }],
    },
  ]

  return (
    <div className="min-h-screen bg-[#F9F8F6] pb-20">
      <Header />

      <section className="px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Avatar className="w-16 h-16">
            <AvatarImage src={userProfile.profileImage} alt={userProfile.name} />
            <AvatarFallback>
              <User className="w-8 h-8" />
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold text-[#2A2723]">{userProfile.name}</h1>
            <p className="text-sm text-[#6B6561]">{userProfile.email}</p>
          </div>
        </div>

        <div className="space-y-6">
          {accountSections.map((section) => (
            <Card key={section.title} className="bg-white rounded-2xl shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-[#2A2723]">{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {section.items.map((item) => {
                    const Icon = item.icon
                    return (
                      <Link href={item.href} key={item.label}>
                        <div className="flex items-center justify-between p-3 -mx-3 rounded-lg hover:bg-[#EFE9E3] transition-colors">
                          <div className="flex items-center gap-4">
                            <Icon className="w-5 h-5 text-[#6B6561]" />
                            <span className="font-medium text-[#2A2723]">{item.label}</span>
                          </div>
                          <ChevronRight className="w-5 h-5 text-[#6B6561]" />
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <MobileNav />
    </div>
  )
}
