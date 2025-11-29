export type ProductColor = {
  name: string
  nameAr: string
  value: string
}

export type Product = {
  id: number
  slug: string
  name: string
  nameAr: string
  price: number
  category: string
  categoryAr: string
  image: string
  images: string[]
  description: string
  descriptionAr: string
  sizes: string[]
  colors: ProductColor[]
  details: string[]
  detailsAr: string[]
}

const defaultSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

const sharedDetails = [
  'Premium natural fibers for breathable comfort',
  'Tailored silhouette with smart pattern work',
  'Double-stitched seams for everyday durability',
  'Designed for effortless transitions from day to night',
]

const sharedDetailsAr = [
  'أقمشة طبيعية فاخرة لراحة قابلة للتنفس',
  'قصة مصممة مع تفاصيل ذكية في النمط',
  'خياطة مزدوجة لتحمل الاستخدام اليومي',
  'تصميم ينتقل بسلاسة من النهار إلى الليل',
]

const baseProducts: Array<Omit<Product, 'slug' | 'images' | 'sizes' | 'colors' | 'details' | 'detailsAr'>> = [
  {
    id: 1,
    name: 'Classic Oxford Shirt',
    nameAr: 'قميص أكسفورد كلاسيكي',
    price: 89,
    category: 'Shirts',
    categoryAr: 'قمصان',
    image: '/white-oxford-shirt.png',
    description:
      'Tailored from long-staple cotton with a soft Oxford weave, this shirt keeps its crisp structure while feeling light against the skin.',
    descriptionAr:
      'مصنوع من قطن طويل التيلة بنسيج أكسفورد الناعم ليحافظ على بنية أنيقة مع ملمس خفيف على البشرة.',
  },
  {
    id: 2,
    name: 'Merino Wool Sweater',
    nameAr: 'سترة صوف ميرينو',
    price: 149,
    category: 'Knitwear',
    categoryAr: 'ملابس صوفية',
    image: '/mens-sweater-beige.jpg',
    description:
      'A breathable merino knit with a clean crew neckline, finished with rib trims for a modern, elevated layer.',
    descriptionAr:
      'حياكة من صوف الميرينو القابل للتنفس مع ياقة مستديرة نظيفة وحواف مضلعة لطبقة عصرية راقية.',
  },
  {
    id: 3,
    name: 'Tailored Chinos',
    nameAr: 'بنطلون تشينو مفصل',
    price: 119,
    category: 'Trousers',
    categoryAr: 'بناطيل',
    image: '/beige-chino-pants.png',
    description:
      'Clean front chinos with a tapered leg and hidden stretch waistband that keeps shape throughout the day.',
    descriptionAr:
      'بنطلون تشينو بواجهة نظيفة وساق مدببة مع خصر مرن مخفي يحافظ على الشكل طوال اليوم.',
  },
  {
    id: 4,
    name: 'Cotton Polo Shirt',
    nameAr: 'قميص بولو قطني',
    price: 69,
    category: 'Shirts',
    categoryAr: 'قمصان',
    image: '/navy-polo-shirt.jpg',
    description:
      'Fine piqué knit polo featuring a concealed button placket and tonal tipping along the collar.',
    descriptionAr:
      'قميص بولو من حياكة بيكيه ناعمة مع ياقة بأطراف من نفس اللون وأزرار مخفية.',
  },
  {
    id: 5,
    name: 'Wool Overcoat',
    nameAr: 'معطف صوفي',
    price: 299,
    category: 'Outerwear',
    categoryAr: 'ملابس خارجية',
    image: '/mens-wool-coat-camel.jpg',
    description:
      'A double-faced wool blend coat with hand-finished edges and a relaxed tailored drape.',
    descriptionAr:
      'معطف من صوف مزدوج الطبقات بحواف منتهية يدويًا وقصة رسمية مريحة.',
  },
  {
    id: 6,
    name: 'Linen Blazer',
    nameAr: 'جاكيت كتان',
    price: 189,
    category: 'Outerwear',
    categoryAr: 'ملابس خارجية',
    image: '/beige-linen-blazer.jpg',
    description:
      'Breathable linen blazer with softly structured shoulders and a fluid half lining.',
    descriptionAr:
      'جاكيت كتان قابل للتنفس بكتفين منسقين وبطانة نصفية خفيفة.',
  },
  {
    id: 7,
    name: 'Cashmere Cardigan',
    nameAr: 'كارديجان كشمير',
    price: 179,
    category: 'Knitwear',
    categoryAr: 'ملابس صوفية',
    image: '/grey-cashmere-cardigan.jpg',
    description:
      'Pure cashmere cardigan with horn buttons and fully fashioned seams for a refined drape.',
    descriptionAr:
      'كارديجان من الكشمير الخالص مع أزرار قرن وخياطات مصممة لانسدال أنيق.',
  },
  {
    id: 8,
    name: 'Dress Trousers',
    nameAr: 'بنطلون رسمي',
    price: 129,
    category: 'Trousers',
    categoryAr: 'بناطيل',
    image: '/grey-dress-pants.jpg',
    description:
      'Wool-blend trousers with front pleats, French pocketing, and a tailored hem break.',
    descriptionAr:
      'بنطلون من مزيج الصوف بثنيات أمامية وجيوب فرنسية وحفاف مصمم بعناية.',
  },
  {
    id: 9,
    name: 'Striped Dress Shirt',
    nameAr: 'قميص رسمي مخطط',
    price: 95,
    category: 'Shirts',
    categoryAr: 'قمصان',
    image: '/striped-dress-shirt.jpg',
    description:
      'Business-ready stripes, contrast cuffs, and a wrinkle-resistant finish make this shirt a travel staple.',
    descriptionAr:
      'خطوط عملية مع أساور متباينة وتشطيب مقاوم للتجاعيد ليكون القميص المثالي للسفر.',
  },
  {
    id: 10,
    name: 'Cable Knit Sweater',
    nameAr: 'سترة صوفية منسوجة',
    price: 135,
    category: 'Knitwear',
    categoryAr: 'ملابس صوفية',
    image: '/cable-knit-sweater-beige.jpg',
    description:
      'Heritage-inspired cable stitches updated with a contemporary relaxed fit.',
    descriptionAr:
      'حياكة الحبال التراثية بلمسة عصرية وقصة مريحة.',
  },
  {
    id: 11,
    name: 'Denim Jacket',
    nameAr: 'جاكيت جينز',
    price: 159,
    category: 'Outerwear',
    categoryAr: 'ملابس خارجية',
    image: '/denim-jacket-classic.jpg',
    description:
      'Vintage-wash denim with modern tailoring, finished with matte gunmetal hardware.',
    descriptionAr:
      'جينز بلمسة عتيقة مع حياكة عصرية ومعدّات معدنية غير لامعة.',
  },
  {
    id: 12,
    name: 'Slim Fit Jeans',
    nameAr: 'جينز بقصة ضيقة',
    price: 99,
    category: 'Trousers',
    categoryAr: 'بناطيل',
    image: '/slim-fit-jeans-dark-blue.jpg',
    description:
      'Soft stretch denim with a refined slim profile and clean pocket construction.',
    descriptionAr:
      'دينم مرن ناعم بقصة ضيقة مصقولة وجيوب نظيفة التصميم.',
  },
  {
    id: 13,
    name: 'Cozy Fleece Hoodie',
    nameAr: 'كنزة صوفية مريحة بغطاء للرأس',
    price: 75,
    category: 'Hoodies',
    categoryAr: 'الكنزات الثقيلة',
    image: '/black-turtleneck-sweater.png', // Placeholder image
    description: 'Ultra-soft fleece hoodie for ultimate comfort and warmth. Perfect for casual wear.',
    descriptionAr: 'كنزة صوفية فائقة النعومة لتوفير أقصى درجات الراحة والدفء. مثالية للارتداء اليومي غير الرسمي.',
  },
  {
    id: 14,
    name: 'Leather Sneakers',
    nameAr: 'أحذية رياضية جلدية',
    price: 130,
    category: 'Shoes',
    categoryAr: 'الأحذية',
    image: '/stylish-man-minimal-fashion-portrait.jpg', // Placeholder image
    description: 'Stylish and comfortable leather sneakers for everyday wear. Durable and versatile.',
    descriptionAr: 'أحذية رياضية جلدية أنيقة ومريحة للارتداء اليومي. متينة ومتعددة الاستخدامات.',
  },
]

const colorPalettes: Record<number, ProductColor[]> = {
  1: [
    { name: 'Snow', nameAr: 'أبيض ثلجي', value: '#f7f7f2' },
    { name: 'Stone', nameAr: 'حجري', value: '#d6d0c4' },
  ],
  2: [
    { name: 'Oat', nameAr: 'شوفان', value: '#d7c7b5' },
    { name: 'Charcoal', nameAr: 'رمادي داكن', value: '#4a4a4a' },
  ],
  3: [
    { name: 'Khaki', nameAr: 'كاكي', value: '#b89b74' },
    { name: 'Sage', nameAr: 'ساج', value: '#b3b191' },
  ],
  4: [
    { name: 'Navy', nameAr: 'كحلي', value: '#112445' },
    { name: 'Sky', nameAr: 'أزرق سماوي', value: '#87a9d9' },
  ],
  5: [
    { name: 'Camel', nameAr: 'جملي', value: '#c19a6b' },
    { name: 'Black', nameAr: 'أسود', value: '#1c1c1c' },
  ],
  6: [
    { name: 'Linen', nameAr: 'كتان طبيعي', value: '#e4d6c8' },
    { name: 'Olive', nameAr: 'زيتي', value: '#7a7c5b' },
  ],
  7: [
    { name: 'Fog', nameAr: 'ضبابي', value: '#b0b6c1' },
    { name: 'Midnight', nameAr: 'ليلي', value: '#1f2430' },
  ],
  8: [
    { name: 'Slate', nameAr: 'رمادي صخري', value: '#767b86' },
    { name: 'Coal', nameAr: 'فحمي', value: '#33363f' },
  ],
  9: [
    { name: 'Ice Stripe', nameAr: 'مخطط جليدي', value: '#d4e1ee' },
    { name: 'Ink Stripe', nameAr: 'مخطط حبر', value: '#1f2c3d' },
  ],
  10: [
    { name: 'Sand', nameAr: 'رملي', value: '#d8c2a5' },
    { name: 'Forest', nameAr: 'أخضر غامق', value: '#254734' },
  ],
  11: [
    { name: 'Indigo', nameAr: 'نيلي', value: '#1c2a44' },
    { name: 'Washed Black', nameAr: 'أسود باهت', value: '#2b2b2b' },
  ],
  12: [
    { name: 'Deep Blue', nameAr: 'أزرق داكن', value: '#0f1a2c' },
    { name: 'Graphite', nameAr: 'غرافيت', value: '#3b3d45' },
  ],
  13: [
    { name: 'Black', nameAr: 'أسود', value: '#1c1c1c' },
    { name: 'Grey', nameAr: 'رمادي', value: '#6B6561' },
  ],
  14: [
    { name: 'White', nameAr: 'أبيض', value: '#f7f7f2' },
    { name: 'Black', nameAr: 'أسود', value: '#1c1c1c' },
  ],
}

const galleryMap: Record<number, string[]> = {
  1: ['/white-oxford-shirt-front.jpg', '/white-oxford-shirt-back.jpg', '/white-oxford-shirt-detail.jpg'],
  2: ['/mens-sweater-beige.jpg', '/mens-sweater-minimal.jpg', '/mens-sweater-beige.jpg'],
  3: ['/beige-chino-pants.png', '/mens-trousers-minimal.jpg', '/pleated-trousers-beige.jpg'],
  4: ['/navy-polo-shirt.jpg', '/mens-dress-shirt.jpg', '/mens-dress-shirt.jpg'],
  5: ['/mens-wool-coat-camel.jpg', '/mens-jacket-minimal.jpg', '/trench-coat-beige.jpg'],
  6: ['/beige-linen-blazer.jpg', '/beige-linen-blazer.jpg', '/linen-shirt-white.jpg'],
  7: ['/grey-cashmere-cardigan.jpg', '/mens-sweater-minimal.jpg', '/mens-sweater-beige.jpg'],
  8: ['/grey-dress-pants.jpg', '/mens-trousers-minimal.jpg', '/white-oxford-shirt.png'],
  9: ['/striped-dress-shirt.jpg', '/mens-dress-shirt.jpg', '/white-oxford-shirt-front.jpg'],
  10: ['/cable-knit-sweater-beige.jpg', '/mens-sweater-beige.jpg', '/mens-sweater-minimal.jpg'],
  11: ['/denim-jacket-classic.jpg', '/mens-jacket-minimal.jpg', '/bomber-jacket-olive.jpg'],
  12: ['/slim-fit-jeans-dark-blue.jpg', '/cargo-pants-khaki.jpg', '/mens-trousers-minimal.jpg'],
  13: ['/black-turtleneck-sweater.png', '/black-turtleneck-sweater.png', '/black-turtleneck-sweater.png'], // Placeholder images
  14: ['/stylish-man-minimal-fashion-portrait.jpg', '/stylish-man-minimal-fashion-portrait.jpg', '/stylish-man-minimal-fashion-portrait.jpg'], // Placeholder images
}

export const products: Product[] = baseProducts.map((product) => ({
  ...product,
  slug: product.name.toLowerCase().replace(/\s+/g, '-'),
  sizes: defaultSizes,
  colors: colorPalettes[product.id] || [{ name: 'Classic', nameAr: 'تقليدي', value: '#444' }],
  images: galleryMap[product.id] || [product.image, product.image, product.image],
  details: sharedDetails,
  detailsAr: sharedDetailsAr,
}))

export const productsById = products.reduce<Record<number, Product>>((acc, product) => {
  acc[product.id] = product
  return acc
}, {})

export function getProductById(id: number) {
  return productsById[id]
}

