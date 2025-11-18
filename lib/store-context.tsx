'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import type { ProductColor } from '@/lib/data/products'

type CartColor = ProductColor | undefined

type CartItem = {
  id: number
  variantId: string
  name: string
  nameAr: string
  price: number
  quantity: number
  size: string
  color?: CartColor
  image: string
  category: string
  categoryAr: string
}

type AddToCartPayload = {
  id: number
  name: string
  nameAr: string
  price: number
  image: string
  category: string
  categoryAr: string
  size?: string
  color?: ProductColor
  quantity?: number
}

type StoreContextType = {
  cart: CartItem[]
  favorites: number[]
  addToCart: (product: AddToCartPayload) => void
  toggleFavorite: (productId: number) => void
  isFavorite: (productId: number) => boolean
  removeFromCart: (variantId: string) => void
  updateQuantity: (variantId: string, quantity: number) => void
  clearCart: () => void
}

const StoreContext = createContext<StoreContextType | undefined>(undefined)

const buildVariantId = (id: number, size?: string, color?: CartColor | string) => {
  const colorToken =
    typeof color === 'string'
      ? color
      : color?.value || (color && `${color.name}-${color.nameAr}`) || 'default'
  return `${id}-${size || 'any'}-${colorToken}`
}

const normalizeColor = (color: any): CartColor => {
  if (!color) return undefined
  if (typeof color === 'string') {
    return { name: color, nameAr: color, value: color }
  }
  if (typeof color === 'object' && 'name' in color && 'value' in color) {
    return color as ProductColor
  }
  return undefined
}

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])
  const [favorites, setFavorites] = useState<number[]>([])

  // Load from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    const savedFavorites = localStorage.getItem('favorites')
    
    if (savedCart) {
      const parsed: CartItem[] = JSON.parse(savedCart).map((item: any) => {
        const color = normalizeColor(item.color)
        const variantId = item.variantId || buildVariantId(item.id, item.size, color)
        return {
          variantId,
          id: item.id,
          name: item.name,
          nameAr: item.nameAr || item.name,
          price: item.price,
          quantity: item.quantity,
          size: item.size || 'M',
          color,
          image: item.image,
          category: item.category,
          categoryAr: item.categoryAr || item.category,
        }
      })
      setCart(parsed)
    }
    if (savedFavorites) setFavorites(JSON.parse(savedFavorites))
  }, [])

  // Save to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  // Save to localStorage whenever favorites changes
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  const addToCart = (product: AddToCartPayload) => {
    const size = product.size || 'M'
    const color = normalizeColor(product.color)
    const variantId = buildVariantId(product.id, size, color)

    setCart(currentCart => {
      const existingItem = currentCart.find(item => item.variantId === variantId)
      
      if (existingItem) {
        return currentCart.map(item =>
          item.variantId === variantId
            ? { ...item, quantity: item.quantity + (product.quantity || 1) }
            : item
        )
      } else {
        return [...currentCart, {
          id: product.id,
          variantId,
          name: product.name,
          nameAr: product.nameAr,
          price: product.price,
          quantity: product.quantity || 1,
          size,
          color,
          image: product.image,
          category: product.category,
          categoryAr: product.categoryAr,
        }]
      }
    })
  }

  const toggleFavorite = (productId: number) => {
    setFavorites(currentFavorites => {
      if (currentFavorites.includes(productId)) {
        return currentFavorites.filter(id => id !== productId)
      } else {
        return [...currentFavorites, productId]
      }
    })
  }

  const isFavorite = (productId: number) => {
    return favorites.includes(productId)
  }

  const removeFromCart = (variantId: string) => {
    setCart(currentCart => currentCart.filter(item => item.variantId !== variantId))
  }

  const updateQuantity = (variantId: string, quantity: number) => {
    setCart(currentCart =>
      currentCart.map(item =>
        item.variantId === variantId ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    )
  }

  const clearCart = () => setCart([])

  return (
    <StoreContext.Provider value={{ cart, favorites, addToCart, toggleFavorite, isFavorite, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </StoreContext.Provider>
  )
}

export function useStore() {
  const context = useContext(StoreContext)
  if (context === undefined) {
    throw new Error('useStore must be used within a StoreProvider')
  }
  return context
}
