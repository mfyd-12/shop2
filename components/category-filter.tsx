'use client'

import * as React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useLanguage } from '@/lib/language-context'
import type { Product } from '@/lib/data/products'

type CategoryFilterProps = {
  products: Product[]
  onSelectCategory: (category: string) => void
  selectedCategory: string
}

export function CategoryFilter({
  products,
  onSelectCategory,
  selectedCategory,
}: CategoryFilterProps) {
  const { t, language } = useLanguage()

  const categories = React.useMemo(() => {
    const uniqueCategories = new Set<string>()
    products.forEach((product) => uniqueCategories.add(product.category))
    return ['All', ...Array.from(uniqueCategories)]
  }, [products])

  return (
    <Select value={selectedCategory} onValueChange={onSelectCategory}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={t('filterBy')} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="All">{t('allCategories')}</SelectItem>
        {categories.map((category) => (
          <SelectItem key={category} value={category}>
            {language === 'ar'
              ? (
                  products.find((p) => p.category === category)?.categoryAr || category
                )
              : category}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
