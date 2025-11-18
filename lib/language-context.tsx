'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'ar' | 'en'

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Header
    menu: 'Menu',
    categories: 'Categories',
    myAccount: 'My Account',
    
    // Categories
    allProducts: 'All Products',
    shirts: 'Shirts',
    pants: 'Trousers',
    jackets: 'Jackets',
    accessories: 'Accessories',
    
    // Home Page
    heroTitle: 'Timeless Elegance, Modern Comfort',
    heroSubtitle: 'Discover our new Spring collection',
    shopNow: 'Shop Now',
    shopByCategory: 'Shop by Category',
    featuredItems: 'Featured Items',
    viewAll: 'View All',
    premiumQuality: 'Premium quality',
    
    // Category Names
    outerwear: 'Outerwear',
    knitwear: 'Knitwear',
    trousers: 'Trousers',
    
    // Products Page
    filterBy: 'Filter by Category',
    allCategories: 'All Categories',
    showing: 'Showing',
    products: 'products',
    addToCart: 'Add to Cart',
    
    // Search
    search: 'Search',
    searchProducts: 'Search for products...',
    searchFavorites: 'Search for your favorite products',
    startTyping: 'Start typing product name or category',
    noResults: 'No results found',
    tryDifferentWords: 'Try searching with different words',
    results: 'results',
    
    // Product Detail
    selectSize: 'Select Size',
    quantity: 'Quantity',
    addToBag: 'Add to Bag',
    productDetails: 'Product Details',
    selectColor: 'Select Color',
    color: 'Color',
    share: 'Share',
    shareProduct: 'Share Product',
    shareVia: 'Share via',
    whatsapp: 'WhatsApp',
    facebook: 'Facebook',
    instagram: 'Instagram',
    close: 'Close',
    backToProducts: 'Back to Products',
    size: 'Size',
    
    // Cart
    shoppingCart: 'Shopping Cart',
    yourCart: 'Your cart',
    emptyCart: 'Your cart is empty',
    startShopping: 'Start shopping to add items',
    remove: 'Remove',
    subtotal: 'Subtotal',
    shipping: 'Shipping',
    total: 'Total',
    checkout: 'Checkout',
    item: 'item',
    items: 'items',
    continueShopping: 'Continue Shopping',
    proceedToCheckout: 'Proceed to Checkout',
    completeOrder: 'Complete Order',
    checkoutFormTitle: 'Checkout Details',
    fullName: 'Full Name',
    phoneNumber: 'Phone Number',
    address: 'Location / Address',
    cityLabel: 'City',
    deliveryNotes: 'Delivery Notes',
    paymentMethod: 'Payment Method',
    cashOnDelivery: 'Cash on Delivery',
    placeOrder: 'Place Order',
    orderSummary: 'Order Summary',
    reviewOrder: 'Review your order before confirming',
    yourCartEmpty: 'Your cart is empty',
    startAddingItems: 'Start adding some items to your cart to see them here.',
    
    // Favorites
    favorites: 'Favorites',
    myFavorites: 'My Favorites',
    emptyFavorites: 'No favorites yet',
    addFavorites: 'Start adding items you love',
    noFavoritesYet: 'No favorites yet',
    startAddingFavorites: 'Start adding items to your favorites by tapping the heart icon on products.',
    
    // Toast Messages
    addedToCart: 'Added to cart successfully',
    addedToFavorites: 'Added to favorites successfully',
    removedFromCart: 'Removed from cart',
    removedFromFavorites: 'Removed from favorites',
    copiedToClipboard: 'Link copied to clipboard',
    shareSuccess: 'Share opened successfully',
    
    // Navigation
    home: 'Home',
    shop: 'Shop',
    account: 'Account',
    all: 'All',
  },
  ar: {
    // Header
    menu: 'القائمة',
    categories: 'الأقسام',
    myAccount: 'حسابي',
    
    // Categories
    allProducts: 'جميع المنتجات',
    shirts: 'القمصان',
    pants: 'السراويل',
    jackets: 'الجاكيتات',
    accessories: 'الإكسسوارات',
    
    // Home Page
    heroTitle: 'أناقة خالدة، راحة عصرية',
    heroSubtitle: 'اكتشف مجموعتنا الجديدة للربيع',
    shopNow: 'تسوق الآن',
    shopByCategory: 'تسوق حسب الفئة',
    featuredItems: 'المنتجات المميزة',
    viewAll: 'عرض الكل',
    premiumQuality: 'جودة ممتازة',
    
    // Category Names
    outerwear: 'الملابس الخارجية',
    knitwear: 'الملابس الصوفية',
    trousers: 'البناطيل',
    
    // Products Page
    filterBy: 'تصفية حسب الفئة',
    allCategories: 'جميع الفئات',
    showing: 'عرض',
    products: 'منتج',
    addToCart: 'أضف للسلة',
    
    // Search
    search: 'بحث',
    searchProducts: 'ابحث عن المنتجات...',
    searchFavorites: 'ابحث عن منتجاتك المفضلة',
    startTyping: 'ابدأ بكتابة اسم المنتج أو الفئة',
    noResults: 'لم يتم العثور على نتائج',
    tryDifferentWords: 'جرب البحث بكلمات مختلفة',
    results: 'نتيجة',
    
    // Product Detail
    selectSize: 'اختر المقاس',
    quantity: 'الكمية',
    addToBag: 'أضف للسلة',
    productDetails: 'تفاصيل المنتج',
    selectColor: 'اختر اللون',
    color: 'اللون',
    share: 'مشاركة',
    shareProduct: 'مشاركة المنتج',
    shareVia: 'مشاركة عبر',
    whatsapp: 'واتساب',
    facebook: 'فيسبوك',
    instagram: 'انستغرام',
    close: 'إغلاق',
    backToProducts: 'العودة للمنتجات',
    size: 'المقاس',
    
    // Cart
    shoppingCart: 'سلة التسوق',
    yourCart: 'سلتك',
    emptyCart: 'سلتك فارغة',
    startShopping: 'ابدأ التسوق لإضافة المنتجات',
    remove: 'إزالة',
    subtotal: 'المجموع الفرعي',
    shipping: 'الشحن',
    total: 'الإجمالي',
    checkout: 'إتمام الطلب',
    item: 'منتج',
    items: 'منتجات',
    continueShopping: 'متابعة التسوق',
    proceedToCheckout: 'إتمام الطلب',
    completeOrder: 'إكمال الطلب',
    checkoutFormTitle: 'بيانات الشحن',
    fullName: 'الاسم الكامل',
    phoneNumber: 'رقم الجوال',
    address: 'الموقع / العنوان',
    cityLabel: 'المدينة',
    deliveryNotes: 'ملاحظات التوصيل',
    paymentMethod: 'طريقة الدفع',
    cashOnDelivery: 'الدفع عند الاستلام',
    placeOrder: 'تأكيد الطلب',
    orderSummary: 'ملخص الطلب',
    reviewOrder: 'راجع طلبك قبل التأكيد',
    yourCartEmpty: 'سلتك فارغة',
    startAddingItems: 'ابدأ بإضافة المنتجات لسلتك لتظهر هنا.',
    
    // Favorites
    favorites: 'المفضلة',
    myFavorites: 'مفضلتي',
    emptyFavorites: 'لا توجد مفضلة بعد',
    addFavorites: 'ابدأ بإضافة المنتجات التي تحبها',
    noFavoritesYet: 'لا توجد مفضلة بعد',
    startAddingFavorites: 'ابدأ بإضافة المنتجات للمفضلة بالضغط على أيقونة القلب.',
    
    // Toast Messages
    addedToCart: 'تم إضافة المنتج للسلة بنجاح ✓',
    addedToFavorites: 'تم إضافة المنتج للمفضلة بنجاح ✓',
    removedFromCart: 'تم إزالة المنتج من السلة',
    removedFromFavorites: 'تم إزالة المنتج من المفضلة',
    copiedToClipboard: 'تم نسخ الرابط',
    shareSuccess: 'تم فتح المشاركة بنجاح',
    
    // Navigation
    home: 'الرئيسية',
    shop: 'المتجر',
    account: 'الحساب',
    all: 'الكل',
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ar')

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language
    if (saved) {
      setLanguage(saved)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('language', language)
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = language
  }, [language])

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ar' ? 'en' : 'ar')
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
