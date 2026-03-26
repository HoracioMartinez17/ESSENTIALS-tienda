'use client'

import { useState } from 'react'

export default function ProductDetails() {
  const [quantity, setQuantity] = useState(1)
  const [size, setSize] = useState('7')

  const sizes = ['5', '6', '7', '8', '9', '10']
  const price = 2850
  const discount = 0 // No hay descuento en joyería premium

  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <div className="text-xs text-charcoal/50 font-normal tracking-wider uppercase">
        Inicio / Anillos / Anillo Étoile
      </div>

      {/* Title */}
      <div className="space-y-3">
        <h1 className="text-4xl md:text-5xl font-serif text-charcoal leading-tight">
          Anillo Étoile
        </h1>
        <p className="text-lg text-charcoal/70 font-normal">
          Oro 18k con diamante natural
        </p>
        <p className="text-lg italic text-gold font-normal">
          Elegancia atemporal con brillo artesanal
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-gold to-gold-light"></div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-4">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-gold fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
        <span className="text-charcoal/60 font-normal text-sm">342 reseñas</span>
      </div>

      {/* Price Section */}
      <div className="bg-cream/50 rounded-lg p-8 border border-gold-light/30 space-y-4">
        <div className="flex items-baseline gap-4">
          <span className="text-5xl font-serif text-gold">
            ${price.toLocaleString()}
          </span>
          <span className="text-charcoal/50 text-sm font-normal">USD</span>
        </div>
        <p className="text-charcoal/60 font-normal text-sm">
          Precio final. Impuestos incluidos en checkout.
        </p>
        <div className="pt-4 border-t border-gold-light/30">
          <p className="text-xs text-charcoal/50 font-normal">
            ✓ Garantía de por vida
            <br />✓ Devolución gratuita 30 días
          </p>
        </div>
      </div>

      {/* Size Selector */}
      <div className="space-y-4">
        <label className="block text-charcoal font-normal tracking-wide">
          Selecciona tu talla
        </label>
        <div className="grid grid-cols-6 gap-2">
          {sizes.map((s) => (
            <button
              key={s}
              onClick={() => setSize(s)}
              className={`py-3 rounded-lg border-2 font-normal transition-all ${
                size === s
                  ? 'border-gold bg-gold/10 text-gold'
                  : 'border-gold-light/30 text-charcoal hover:border-gold/50'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
        <p className="text-xs text-charcoal/50 font-normal">
          <a href="#" className="text-gold hover:underline">
            ¿Cómo sé mi talla?
          </a>
        </p>
      </div>

      {/* Quantity Selector */}
      <div className="space-y-4">
        <label className="block text-charcoal font-normal tracking-wide">
          Cantidad
        </label>
        <div className="flex items-center gap-4 w-full max-w-xs">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-12 h-12 rounded-lg border border-gold-light/30 hover:border-gold text-charcoal transition-colors flex items-center justify-center"
          >
            −
          </button>
          <span className="text-center flex-1 font-serif text-lg">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-12 h-12 rounded-lg border border-gold-light/30 hover:border-gold text-charcoal transition-colors flex items-center justify-center"
          >
            +
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3 pt-6 border-t border-gold-light/30">
        <button className="w-full py-4 bg-charcoal text-white font-normal tracking-wide hover:bg-gold hover:text-charcoal transition-colors duration-300 rounded-lg">
          AÑADIR AL CARRITO
        </button>
        <button className="w-full py-4 border-2 border-charcoal text-charcoal font-normal tracking-wide hover:border-gold hover:text-gold transition-colors duration-300 rounded-lg">
          COMPRAR AHORA
        </button>
      </div>

      {/* Payment Methods */}
      <div className="space-y-4 bg-gold-light/10 rounded-lg p-6">
        <p className="text-sm font-normal text-charcoal/70 mb-4">
          Métodos de pago disponibles
        </p>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-3xl mb-2">💳</p>
            <p className="text-xs text-charcoal/60 font-normal">Tarjeta</p>
          </div>
          <div className="text-center">
            <p className="text-3xl mb-2">🏦</p>
            <p className="text-xs text-charcoal/60 font-normal">Transferencia</p>
          </div>
          <div className="text-center">
            <p className="text-3xl mb-2">💳</p>
            <p className="text-xs text-charcoal/60 font-normal">Financiación</p>
          </div>
        </div>
      </div>

      {/* Shipping Info */}
      <div className="space-y-3 border-t border-gold-light/30 pt-6">
        <div className="flex gap-4">
          <span className="text-2xl">🚚</span>
          <div>
            <p className="font-normal text-charcoal">Solo envíos a la península</p>
            <p className="text-xs text-charcoal/60 font-normal">Entrega en 2-3 días hábiles</p>
          </div>
        </div>
        <div className="flex gap-4">
          <span className="text-2xl">🔐</span>
          <div>
            <p className="font-normal text-charcoal">Seguridad garantizada</p>
            <p className="text-xs text-charcoal/60 font-normal">Compra protegida con certificado SSL</p>
          </div>
        </div>
      </div>

      {/* Beneficios Clave - Mobile only */}
      <div className="md:hidden bg-cream/30 rounded-lg p-6 border border-gold-light/30 space-y-4">
        <h3 className="text-lg font-serif text-charcoal">Beneficios Clave</h3>
        <div className="space-y-3">
          {['Oro 18k certificado e hipoalergénico', 'Diamante natural talla brillante de 0.25ct', 'Fabricado a mano por maestros joyeros en España', 'Acabado pulido espejo resistente al desgarre diario', 'Garantía de por vida + 30 días de devolución', 'Packaging de lujo y certificado incluido'].map((benefit) => (
            <div key={benefit} className="flex gap-3 pb-3 border-b border-gold-light/20 last:border-b-0">
              <span className="text-gold font-serif text-lg leading-none pt-1">✓</span>
              <p className="text-charcoal/80 font-normal leading-relaxed text-sm">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
