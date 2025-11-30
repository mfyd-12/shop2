'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { MobileNav } from '@/components/mobile-nav'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ChevronLeft, User as UserIcon, Camera } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import React, { useState, useEffect, ChangeEvent } from 'react'

interface UserProfile {
  name: string;
  email: string;
  profileImage: string; // Base64 string or URL
}

const LOCAL_STORAGE_PROFILE_KEY = 'user_profile';

export default function ProfilePage() {
  const { t } = useLanguage();
  const [profile, setProfile] = useState<UserProfile>({
    name: 'John Doe',
    email: 'john.doe@example.com',
    profileImage: '/placeholder-user.jpg',
  });
  const [initialProfile, setInitialProfile] = useState<UserProfile>(profile);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedProfile = localStorage.getItem(LOCAL_STORAGE_PROFILE_KEY);
      if (storedProfile) {
        const parsedProfile = JSON.parse(storedProfile);
        setProfile(parsedProfile);
        setInitialProfile(parsedProfile); // Set initial profile for comparison
      }
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setProfile((prev) => ({ ...prev, [id]: value }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile((prev) => ({ ...prev, profileImage: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      localStorage.setItem(LOCAL_STORAGE_PROFILE_KEY, JSON.stringify(profile));
      setInitialProfile(profile); // Update initial profile after saving
      // Optionally, add a toast notification for success
      alert(t('profile_saved_successfully')); // Placeholder
    }
  };

  const hasChanges = JSON.stringify(profile) !== JSON.stringify(initialProfile);

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
          <h1 className="text-2xl font-bold text-[#2A2723]">{t('profile')}</h1>
        </div>

        <Card className="bg-white rounded-2xl shadow-sm mb-6">
          <CardHeader className="flex flex-col items-center">
            <CardTitle className="text-lg font-semibold text-[#2A2723] mb-4">{t('editProfile')}</CardTitle>
            <div className="relative w-24 h-24 mb-4 group">
              <Avatar className="w-full h-full">
                <AvatarImage src={profile.profileImage} alt={profile.name} />
                <AvatarFallback>
                  <UserIcon className="w-12 h-12" />
                </AvatarFallback>
              </Avatar>
              <label htmlFor="profile-image-upload" className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                <Camera className="w-6 h-6 text-white" />
                <input
                  id="profile-image-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <Label htmlFor="name">{t('name')}</Label>
                <Input
                  id="name"
                  placeholder={t('yourNamePlaceholder')}
                  value={profile.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="email">{t('email')}</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t('yourEmailPlaceholder')}
                  value={profile.email}
                  onChange={handleChange}
                />
              </div>
              <Button type="submit" className="w-full bg-[#2A2723] text-white hover:bg-[#4A4A4A]" disabled={!hasChanges}>
                {t('saveChanges')}
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>

      <MobileNav />
    </div>
  );
}
