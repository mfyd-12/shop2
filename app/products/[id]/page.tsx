import { notFound } from 'next/navigation'

import { getProductById, products } from '@/lib/data/products'
import { ProductDetailView } from './product-detail-view'

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }))
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const { id } = await params
  const productId = Number(id)
  const product = getProductById(productId)

  if (!product) {
    notFound()
  }

  return <ProductDetailView product={product} />
}

