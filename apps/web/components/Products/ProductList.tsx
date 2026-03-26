import ProductCard from './ProductCard'

interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  rating: number
  reviews: number
  badge?: string
}

interface ProductListProps {
  products: Product[]
  isLoading?: boolean
}

export default function ProductList({ products, isLoading }: ProductListProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="rounded-lg bg-cream/30 aspect-square animate-pulse"
          />
        ))}
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-16 space-y-4">
        <p className="text-xl font-serif text-charcoal">
          No hay productos que coincidan con tus filtros
        </p>
        <p className="text-charcoal/60 font-normal">
          Intenta cambiar los criterios de búsqueda
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
