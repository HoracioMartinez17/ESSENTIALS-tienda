import Image from 'next/image'
import Link from 'next/link'

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

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    // TODO: Implementar lógica de carrito
    console.log('Agregado al carrito:', product.name)
  }

  return (
    <Link href="/product/details" className="group block h-full">
      <div className="rounded-lg overflow-hidden border border-gold-light/30 bg-white h-full flex flex-col hover:shadow-lg hover:shadow-gold/10 transition-all duration-300">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden flex-shrink-0 bg-cream/30">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {product.badge && (
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-gold/90 text-charcoal px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold tracking-wider uppercase">
              {product.badge}
            </div>
          )}
        </div>

        {/* Info Container */}
        <div className="p-2 sm:p-4 space-y-2 sm:space-y-3 flex-grow flex flex-col justify-between">
          <div className="space-y-1 sm:space-y-2">
            <h3 className="text-xs sm:text-base font-serif text-charcoal group-hover:text-gold transition-colors line-clamp-2">
              {product.name}
            </h3>
            <p className="text-xs text-charcoal/60 font-normal line-clamp-1 sm:line-clamp-2">
              {product.description}
            </p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 sm:gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-xs ${
                    i < Math.floor(product.rating) ? 'text-gold' : 'text-gold/30'
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-xs text-charcoal/50 font-normal">
              ({product.reviews})
            </span>
          </div>

          {/* Price and Action */}
          <div className="flex justify-between items-center pt-2 sm:pt-3 border-t border-gold-light/20">
            <span className="font-serif text-gold text-sm sm:text-base">
              €{product.price.toLocaleString()}
            </span>
            <button
              onClick={handleAddToCart}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-charcoal text-charcoal hover:border-gold hover:text-gold hover:bg-gold/5 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100"
              aria-label="Agregar al carrito"
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}
