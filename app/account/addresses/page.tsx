'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { MobileNav } from '@/components/mobile-nav'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ChevronLeft, Edit, Trash2 } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import React, { useState, useEffect } from 'react'

interface Address {
  id: string;
  fullName: string;
  streetAddress: string;
  city: string;
  postalCode: string;
  country: string;
  phoneNumber: string;
}

const LOCAL_STORAGE_KEY = 'user_addresses';

export default function AddressesPage() {
  const { t } = useLanguage();
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [currentAddress, setCurrentAddress] = useState<Address>({
    id: '',
    fullName: '',
    streetAddress: '',
    city: '',
    postalCode: '',
    country: '',
    phoneNumber: '',
  });
  const [editingId, setEditingId] = useState<string | null>(null);

  // Load addresses from localStorage on component mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedAddresses = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (storedAddresses) {
        setAddresses(JSON.parse(storedAddresses));
      }
    }
  }, []);

  // Save addresses to localStorage whenever addresses state changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(addresses));
    }
  }, [addresses]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setCurrentAddress((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentAddress.fullName || !currentAddress.phoneNumber || !currentAddress.streetAddress || !currentAddress.city || !currentAddress.postalCode || !currentAddress.country) {
      alert(t('fill_all_fields')); // Reverted to snake_case
      return;
    }

    if (editingId) {
      setAddresses((prev) =>
        prev.map((addr) => (addr.id === editingId ? { ...currentAddress, id: editingId } : addr))
      );
      setEditingId(null);
    } else {
      setAddresses((prev) => [...prev, { ...currentAddress, id: Date.now().toString() }]);
    }
    setCurrentAddress({
      id: '',
      fullName: '',
      streetAddress: '',
      city: '',
      postalCode: '',
      country: '',
      phoneNumber: '',
    });
  };

  const handleEdit = (address: Address) => {
    setCurrentAddress(address);
    setEditingId(address.id);
  };

  const handleDelete = (id: string) => {
    if (confirm(t('confirm_delete_address'))) { // Reverted to snake_case
      setAddresses((prev) => prev.filter((addr) => addr.id !== id));
    }
  };

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
          <h1 className="text-2xl font-bold text-[#2A2723]">{t('addresses')}</h1>
        </div>

        <Card className="bg-white rounded-2xl shadow-sm mb-6">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-[#2A2723]">
              {editingId ? t('edit_address') : t('add_new_address')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="fullName">{t('full_name')}</Label>
                <Input
                  id="fullName"
                  placeholder={t('full_name_placeholder')}
                  value={currentAddress.fullName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="phoneNumber">{t('phoneNumber')}</Label>
                <Input
                  id="phoneNumber"
                  placeholder={t('phoneNumberPlaceholder')}
                  value={currentAddress.phoneNumber}
                  onChange={handleChange}
                  type="tel"
                />
              </div>
              <div>
                <Label htmlFor="streetAddress">{t('street_address')}</Label>
                <Input
                  id="streetAddress"
                  placeholder={t('street_address_placeholder')}
                  value={currentAddress.streetAddress}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="city">{t('city')}</Label>
                <Input
                  id="city"
                  placeholder={t('city_placeholder')}
                  value={currentAddress.city}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="postalCode">{t('postal_code')}</Label>
                <Input
                  id="postalCode"
                  placeholder={t('postal_code_placeholder')}
                  value={currentAddress.postalCode}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="country">{t('country')}</Label>
                <Input
                  id="country"
                  placeholder={t('country_placeholder')}
                  value={currentAddress.country}
                  onChange={handleChange}
                />
              </div>
              <Button type="submit" className="w-full bg-[#2A2723] text-white hover:bg-[#4A4A4A]">
                {editingId ? t('update_address') : t('save_address')}
              </Button>
              {editingId && (
                <Button variant="outline" onClick={() => {
                  setEditingId(null);
                  setCurrentAddress({ id: '', fullName: '', phoneNumber: '', streetAddress: '', city: '', postalCode: '', country: '' });
                }} className="w-full mt-2">
                  {t('cancel_edit')}
                </Button>
              )}
            </form>
          </CardContent>
        </Card>

        <h2 className="text-xl font-bold text-[#2A2723] mb-4">{t('your_addresses')}</h2>
        {addresses.length === 0 ? (
          <p className="text-[#6B6561]">{t('no_addresses_saved')}</p>
        ) : (
          <div className="space-y-4">
            {addresses.map((addr) => (
              <Card key={addr.id} className="bg-white rounded-2xl shadow-sm">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-[#2A2723]">{addr.fullName}</h3>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" onClick={() => handleEdit(addr)}>
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handleDelete(addr.id)}>
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </Button>
                    </div>
                  </div>
                  <p className="text-sm text-[#6B6561]">{addr.phoneNumber}</p>
                  <p className="text-sm text-[#6B6561]">{addr.streetAddress}</p>
                  <p className="text-sm text-[#6B6561]">{`${addr.city}, ${addr.postalCode}`}</p>
                  <p className="text-sm text-[#6B6561]">{addr.country}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>

      <MobileNav />
    </div>
  );
}
