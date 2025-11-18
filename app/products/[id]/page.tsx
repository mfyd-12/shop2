import { notFound } from 'next/navigation'

import { getProductById, products } from '@/lib/data/products'
import { ProductDetailView } from './product-detail-view'

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }))
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const productId = Number(params.id)
  const product = getProductById(productId)

  if (!product) {
    notFound()
  }

  return <ProductDetailView product={product} />
}

