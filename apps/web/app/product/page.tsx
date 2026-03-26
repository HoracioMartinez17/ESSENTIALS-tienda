'use client'

import { useState, useMemo } from 'react'
import ProductFilters from '@/components/Products/ProductFilters'
import ProductList from '@/components/Products/ProductList'

// Datos de productos (en producción, vendrían de una API)
const PRODUCTS = [
  {
    id: '1',
    name: 'Anillo Étoile Dorado',
    description: 'Anillo con diamante 0.25ct en oro 18k',
    price: 1250,
    image: '/image/anillos/1.jpeg',
    category: 'anillos',
    rating: 5,
    reviews: 124,
    badge: 'Más vendido',
  },
  {
    id: '2',
    name: 'Collar Minimalista',
    description: 'Cadena sutil en oro 18k con acabado espejo',
    price: 980,
    image: '/image/collares/2.jpeg',
    category: 'collares',
    rating: 5,
    reviews: 89,
  },
  {
    id: '3',
    name: 'Pulsera Artesanal',
    description: 'Brazalete tejido a mano en oro puro',
    price: 720,
    image: '/image/pulceras/1.jpeg',
    category: 'pulseras',
    rating: 5,
    reviews: 156,
    badge: 'Premium',
  },
  {
    id: '4',
    name: 'Anillo Clásico',
    description: 'Diseño intemporal en oro 18k con blanca',
    price: 890,
    image: '/image/anillos/2.jpeg',
    category: 'anillos',
    rating: 4,
    reviews: 42,
  },
  {
    id: '5',
    name: 'Pendientes Diamante',
    description: 'Studs de diamante natural certificado',
    price: 1450,
    image: '/image/pendientes/pendientes-1.jpg',
    category: 'pendientes',
    rating: 5,
    reviews: 67,
  },
  {
    id: '6',
    name: 'Collar con Colgante',
    description: 'Colgante minimalista con cadena delicada',
    price: 650,
    image: '/image/collares/3.jpeg',
    category: 'collares',
    rating: 4,
    reviews: 45,
  },
  {
    id: '7',
    name: 'Anillo de Diamante',
    description: 'Anillo solitario de diamante con certificate GIA',
    price: 2100,
    image: '/image/anillos/5.jpeg',
    category: 'anillos',
    rating: 5,
    reviews: 93,
    badge: 'Exclusivo',
  },
  {
    id: '8',
    name: 'Pulsera de Oro',
    description: 'Brazalete delicado con perlas naturales',
    price: 850,
    image: '/image/pulceras/4.jpeg',
    category: 'pulseras',
    rating: 5,
    reviews: 78,
  },
]

const CATEGORIES = ['anillos', 'collares', 'pulseras', 'pendientes', 'rosarios', 'accesorios']

export default function ProductListingPage() {
  const [activeCategory, setActiveCategory] = useState<string>('')
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000])

  // Filtrar productos
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory = !activeCategory || product.category === activeCategory
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
      return matchesCategory && matchesPrice
    })
  }, [activeCategory, priceRange])

  return (
    <div className="min-h-screen bg-white pt-24 overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-6 bg-gradient-to-b from-cream/30 to-white border-b border-gold-light/20 overflow-x-hidden">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <div className="space-y-4">
            <p className="text-gold font-normal tracking-wider uppercase text-sm">
              Nuestros Productos
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal leading-tight">
              Joyería Artesanal Premium
            </h1>
            <div className="flex justify-center">
              <div className="w-20 h-1 bg-gradient-to-r from-gold to-gold-light"></div>
            </div>
          </div>

          <p className="text-charcoal/70 font-normal max-w-2xl mx-auto text-lg leading-relaxed">
            Descubre nuestra colección exclusiva de joyas hechas a mano con los mejores materiales
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 px-6 overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar - Filters */}
            <div className="lg:col-span-1">
              <ProductFilters
                categories={CATEGORIES}
                priceRange={priceRange}
                onCategoryChange={setActiveCategory}
                onPriceChange={setPriceRange}
                activeCategory={activeCategory}
              />
            </div>

            {/* Main - Products */}
            <div className="lg:col-span-3">
              {/* Results Header */}
              <div className="mb-8 flex items-center justify-between">
                <div className="space-y-1">
                  <h2 className="text-2xl font-serif text-charcoal">
                    {activeCategory ? `${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}` : 'Todos los Productos'}
                  </h2>
                  <p className="text-charcoal/60 font-normal text-sm">
                    {filteredProducts.length} producto{filteredProducts.length !== 1 ? 's' : ''} encontrado{filteredProducts.length !== 1 ? 's' : ''}
                  </p>
                </div>
              </div>

              {/* Products Grid */}
              <ProductList products={filteredProducts} />
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 md:py-24 px-6 bg-gradient-to-r from-gold-light/10 via-cream/30 to-gold-light/10 border-t border-b border-gold-light/30 overflow-x-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center space-y-3">
            <div className="text-4xl">✨</div>
            <h3 className="font-serif text-charcoal">Garantía Vitalicia</h3>
            <p className="text-charcoal/60 text-xs font-normal">
              Cobertura completa de por vida en todas nuestras piezas
            </p>
          </div>
          <div className="text-center space-y-3">
            <div className="text-4xl">🔐</div>
            <h3 className="font-serif text-charcoal">Compra Segura</h3>
            <p className="text-charcoal/60 text-xs font-normal">
              Certificado SSL y protección de datos 100%
            </p>
          </div>
          <div className="text-center space-y-3">
            <div className="text-4xl">📦</div>
            <h3 className="font-serif text-charcoal">Envío Gratis</h3>
            <p className="text-charcoal/60 text-xs font-normal">
              Solo a la península ibérica
            </p>
          </div>
          <div className="text-center space-y-3">
            <div className="text-4xl">🔄</div>
            <h3 className="font-serif text-charcoal">Devolución Fácil</h3>
            <p className="text-charcoal/60 text-xs font-normal">
              30 días sin preguntas, sin compromiso
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
