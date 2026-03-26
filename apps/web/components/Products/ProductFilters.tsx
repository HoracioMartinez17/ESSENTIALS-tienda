'use client'

import { useState } from 'react'

interface ProductFiltersProps {
  categories: string[]
  priceRange: [number, number]
  onCategoryChange: (category: string) => void
  onPriceChange: (range: [number, number]) => void
  activeCategory?: string
}

export default function ProductFilters({
  categories,
  priceRange,
  onCategoryChange,
  onPriceChange,
  activeCategory,
}: ProductFiltersProps) {
  const [minPrice, maxPrice] = priceRange
  const [showCategories, setShowCategories] = useState(false)

  return (
    <aside className="space-y-8">
      {/* Category Filter - Dropdown on mobile, buttons on tablet+ */}
      <div className="space-y-4">
        <h3 className="text-lg font-serif text-charcoal">Categoría</h3>
        
        {/* Mobile: Dropdown */}
        <div className="lg:hidden">
          <details 
            className="group border border-gold-light/30 rounded-lg bg-white"
            open={showCategories}
            onToggle={(e) => setShowCategories(e.currentTarget.open)}
          >
            <summary className="px-4 py-3 font-normal cursor-pointer text-charcoal flex items-center justify-between hover:bg-cream/20 transition-colors">
              <span className="text-sm">
                {!activeCategory 
                  ? 'Todos los productos'
                  : activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)
                }
              </span>
              <span className="transition group-open:rotate-180">▼</span>
            </summary>

            <div className="px-4 py-2 space-y-2 border-t border-gold-light/20">
              <button
                onClick={() => {
                  onCategoryChange('')
                  setShowCategories(false)
                }}
                className={`block w-full text-left px-3 py-2 rounded text-sm transition-all ${
                  !activeCategory
                    ? 'bg-gold/10 text-gold font-semibold'
                    : 'text-charcoal/70 hover:text-charcoal hover:bg-cream/30'
                }`}
              >
                Todos los productos
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    onCategoryChange(category)
                    setShowCategories(false)
                  }}
                  className={`block w-full text-left px-3 py-2 rounded text-sm transition-all ${
                    activeCategory === category
                      ? 'bg-gold/10 text-gold font-semibold'
                      : 'text-charcoal/70 hover:text-charcoal hover:bg-cream/30'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </details>
        </div>

        {/* Tablet+: Buttons */}
        <div className="hidden lg:flex flex-col space-y-3">
          <button
            onClick={() => onCategoryChange('')}
            className={`block w-full text-left px-4 py-3 rounded-lg transition-all ${
              !activeCategory
                ? 'bg-gold/10 text-gold border border-gold/30'
                : 'text-charcoal/70 hover:text-charcoal hover:bg-cream/30'
            }`}
          >
            Todos los productos
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`block w-full text-left px-4 py-3 rounded-lg transition-all ${
                activeCategory === category
                  ? 'bg-gold/10 text-gold border border-gold/30'
                  : 'text-charcoal/70 hover:text-charcoal hover:bg-cream/30'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div className="space-y-3 pb-4 border-b border-gold-light/20">
        <h3 className="text-lg font-serif text-charcoal">Precio</h3>
        <div className="space-y-3">
          <div className="space-y-1">
            <label className="text-xs sm:text-sm text-charcoal/60 font-normal">
              Min: €{minPrice}
            </label>
            <input
              type="range"
              min="0"
              max="5000"
              value={minPrice}
              onChange={(e) => onPriceChange([Number(e.target.value), maxPrice])}
              className="w-full accent-gold"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs sm:text-sm text-charcoal/60 font-normal">
              Max: €{maxPrice}
            </label>
            <input
              type="range"
              min="0"
              max="5000"
              value={maxPrice}
              onChange={(e) => onPriceChange([minPrice, Number(e.target.value)])}
              className="w-full accent-gold"
            />
          </div>
        </div>
      </div>

      {/* Info Box */}
      <div className="bg-gold/5 rounded-lg p-4 border border-gold-light/30">
        <p className="text-xs text-charcoal/70 font-normal leading-relaxed">
          <span className="font-semibold text-charcoal">✨ Todas nuestras piezas</span> están hechas a mano con materiales premium y incluyen certificado de autenticidad.
        </p>
      </div>
    </aside>
  )
}
