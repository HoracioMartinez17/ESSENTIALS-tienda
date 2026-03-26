'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'

type CartItem = {
  id: number
  name: string
  subtitle: string
  size?: string
  price: number
  quantity: number
  image: string
}

const initialItems: CartItem[] = [
  {
    id: 1,
    name: 'Anillo Étoile – Oro 18k con diamante natural',
    subtitle: 'Acabado espejo · Diamante 0.25ct',
    size: '7',
    price: 2850,
    quantity: 1,
    image:
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 2,
    name: 'Collar Minimalista Essentials A&L',
    subtitle: 'Oro 18k · Cadena delicada',
    price: 1200,
    quantity: 1,
    image:
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=300&q=80',
  },
]

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>(initialItems)

  const updateQuantity = (id: number, delta: number) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id !== id) {
          return item
        }

        const nextQuantity = Math.max(1, item.quantity + delta)
        return { ...item, quantity: nextQuantity }
      })
    )
  }

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  const subtotal = useMemo(
    () => items.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [items]
  )
  const shipping = subtotal >= 150 ? 0 : 12.9
  const taxes = subtotal * 0.21
  const total = subtotal + shipping + taxes

  return (
    <div className="min-h-screen bg-white pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto space-y-10">
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-wider text-gold font-normal">Carrito</p>
          <h1 className="text-4xl md:text-5xl font-serif text-charcoal">Tu selección de joyas</h1>
          <p className="text-charcoal/65 font-normal max-w-2xl">
            Revisa tus piezas antes de finalizar la compra. Diseño limpio, proceso seguro y atención artesanal en cada detalle.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-gold to-gold-light" />
        </header>

        {items.length === 0 ? (
          <section className="bg-cream/40 border border-gold-light/40 rounded-lg p-10 text-center space-y-4">
            <h2 className="text-2xl font-serif text-charcoal">Tu carrito está vacío</h2>
            <p className="text-charcoal/65 font-normal">Descubre nuestras colecciones y encuentra tu próxima pieza especial.</p>
            <Link
              href="/"
              className="inline-block px-8 py-3 border border-charcoal text-charcoal font-normal tracking-wide hover:border-gold hover:text-gold transition-colors"
            >
              Seguir comprando
            </Link>
          </section>
        ) : (
          <section className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 items-start">
            <div className="space-y-5">
              {items.map((item) => (
                <article
                  key={item.id}
                  className="grid grid-cols-[88px_1fr] sm:grid-cols-[110px_1fr_auto] gap-5 bg-white border border-gold-light/35 rounded-lg p-5"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={300}
                    height={300}
                    className="w-full h-24 sm:h-28 object-cover rounded-md border border-gold-light/30"
                  />

                  <div className="space-y-2">
                    <h3 className="font-serif text-lg text-charcoal leading-snug">{item.name}</h3>
                    <p className="text-sm text-charcoal/60 font-normal">{item.subtitle}</p>
                    {item.size ? <p className="text-sm text-charcoal/70 font-normal">Talla: {item.size}</p> : null}

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <div className="flex items-center border border-gold-light/40 rounded-md overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-9 h-9 text-charcoal hover:bg-cream transition-colors"
                          aria-label={`Reducir cantidad de ${item.name}`}
                        >
                          −
                        </button>
                        <span className="w-10 text-center text-sm font-normal text-charcoal">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-9 h-9 text-charcoal hover:bg-cream transition-colors"
                          aria-label={`Aumentar cantidad de ${item.name}`}
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-sm text-charcoal/55 hover:text-gold font-normal transition-colors"
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>

                  <div className="sm:text-right">
                    <p className="text-2xl font-serif text-gold">€{(item.price * item.quantity).toLocaleString('es-ES')}</p>
                    <p className="text-xs text-charcoal/55 font-normal">Precio unidad: €{item.price.toLocaleString('es-ES')}</p>
                  </div>
                </article>
              ))}

              <div className="pt-3">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-sm font-normal text-charcoal hover:text-gold transition-colors"
                >
                  <span>←</span>
                  Seguir comprando
                </Link>
              </div>
            </div>

            <aside className="bg-cream/45 border border-gold-light/45 rounded-lg p-6 lg:sticky lg:top-28 space-y-6">
              <h2 className="text-2xl font-serif text-charcoal">Resumen del pedido</h2>

              <div className="space-y-3 text-sm font-normal text-charcoal/80">
                <div className="flex items-center justify-between">
                  <span>Subtotal</span>
                  <span>€{subtotal.toLocaleString('es-ES', { minimumFractionDigits: 2 })}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Envío estimado</span>
                  <span>{shipping === 0 ? 'Gratis' : `€${shipping.toLocaleString('es-ES', { minimumFractionDigits: 2 })}`}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Impuestos (IVA)</span>
                  <span>€{taxes.toLocaleString('es-ES', { minimumFractionDigits: 2 })}</span>
                </div>
              </div>

              <div className="h-px bg-gold-light/50" />

              <div className="flex items-center justify-between">
                <p className="text-base text-charcoal font-normal">Total</p>
                <p className="text-3xl font-serif text-gold">€{total.toLocaleString('es-ES', { minimumFractionDigits: 2 })}</p>
              </div>

              <Link
                href="/checkout"
                className="block w-full text-center py-4 rounded-lg bg-charcoal text-white font-normal tracking-wide hover:bg-gold hover:text-charcoal transition-colors"
              >
                Finalizar compra
              </Link>

              <div className="space-y-2 pt-1 text-xs text-charcoal/70 font-normal">
                <p>🔒 Pago 100% seguro</p>
                <p>🚚 Solo envíos a la península ibérica</p>
                <p>↩️ Devoluciones en 30 días</p>
              </div>

              <div className="pt-2 border-t border-gold-light/45">
                <p className="text-xs uppercase tracking-wider text-charcoal/55 mb-3">Métodos de pago</p>
                <div className="grid grid-cols-4 gap-2">
                  {['VISA', 'MC', 'AMEX', 'PayPal'].map((method) => (
                    <div
                      key={method}
                      className="h-10 rounded-md border border-gold-light/45 bg-white flex items-center justify-center text-[11px] text-charcoal/70 font-normal"
                    >
                      {method}
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </section>
        )}
      </div>
    </div>
  )
}
