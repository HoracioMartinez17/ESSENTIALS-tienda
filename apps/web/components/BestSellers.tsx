"use client"

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Product = {
  name: string
  price: string
  image: string
  rating: number
  reviews: number
  badge: string | null
}

const products: Product[] = [
  {
    name: 'Anillo Artesanal Dorado',
    price: '€1,250',
    image: '/image/anillos/2.jpeg',
    rating: 5,
    reviews: 124,
    badge: 'Mas vendido',
  },
  {
    name: 'Collar Artesanal Elegante',
    price: '€980',
    image: '/image/collares/3.jpeg',
    rating: 5,
    reviews: 89,
    badge: null,
  },
  {
    name: 'Pulsera Tejida a Mano',
    price: '€720',
    image: '/image/pulceras/4.jpeg',
    rating: 5,
    reviews: 156,
    badge: 'Premium',
  },
  {
    name: 'Anillo Artesanal Clasico',
    price: '€890',
    image: '/image/anillos/5.jpeg',
    rating: 4,
    reviews: 42,
    badge: null,
  },
]

function ProductCard({ product }: { product: Product }) {
  return (
    <Link href="/product/details" className="group block h-full" aria-label={`Ver ${product.name}`}>
      <div className="relative mb-6 overflow-hidden rounded-lg bg-white border border-gold-light/20 aspect-square hover:border-gold transition-colors">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        {product.badge && (
          <div className="absolute top-4 right-4 bg-gold text-charcoal px-3 py-1 rounded-full text-xs font-semibold tracking-wide">
            {product.badge}
          </div>
        )}
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-serif text-charcoal">{product.name}</h3>

        <div className="flex items-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < product.rating ? 'text-gold fill-current' : 'text-gold-light fill-current'}`}
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-charcoal/50">({product.reviews})</span>
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-gold-light/30">
          <span className="text-xl font-serif text-gold">{product.price}</span>
          <span className="w-8 h-8 rounded-full border border-charcoal text-charcoal group-hover:border-gold group-hover:text-gold transition-colors inline-flex items-center justify-center">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  )
}

export default function BestSellers() {
  const galleryRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<Array<HTMLDivElement | null>>([])
  const scrollTimerRef = useRef<number | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollToCard = (index: number, smooth = true) => {
    const gallery = galleryRef.current
    const card = cardsRef.current[index]
    if (!gallery || !card) return

    gallery.scrollTo({
      left: card.offsetLeft - gallery.offsetLeft,
      behavior: smooth ? 'smooth' : 'auto',
    })
  }

  const scrollNext = () => {
    const nextIndex = (activeIndex + 1) % products.length
    setActiveIndex(nextIndex)
    scrollToCard(nextIndex)
  }

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!window.matchMedia('(max-width: 767px)').matches) return

    scrollToCard(0, false)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!window.matchMedia('(max-width: 767px)').matches) return
    if (sessionStorage.getItem('lumina-bestsellers-hint-seen')) return

    const startTimeout = window.setTimeout(() => {
      const hintIndex = products.length > 1 ? 1 : 0
      scrollToCard(hintIndex)
      window.setTimeout(() => scrollToCard(0), 520)
      sessionStorage.setItem('lumina-bestsellers-hint-seen', '1')
    }, 600)

    return () => window.clearTimeout(startTimeout)
  }, [])

  const handleScroll = () => {
    const gallery = galleryRef.current
    if (!gallery) return

    if (scrollTimerRef.current) window.clearTimeout(scrollTimerRef.current)

    scrollTimerRef.current = window.setTimeout(() => {
      const galleryLeft = gallery.scrollLeft

      let closestIndex = 0
      let closestDistance = Number.POSITIVE_INFINITY

      cardsRef.current.forEach((card, index) => {
        if (!card) return
        const targetLeft = card.offsetLeft - gallery.offsetLeft
        const distance = Math.abs(targetLeft - galleryLeft)
        if (distance < closestDistance) {
          closestDistance = distance
          closestIndex = index
        }
      })

      setActiveIndex(closestIndex)
    }, 80)
  }

  useEffect(() => {
    return () => {
      if (scrollTimerRef.current) {
        window.clearTimeout(scrollTimerRef.current)
      }
    }
  }, [])

  return (
    <section id="bestsellers" className="scroll-mt-28 py-24 px-6 bg-cream/30 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <p className="text-gold font-normal tracking-wider uppercase text-sm">LO MAS VENDIDO</p>
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal">Favoritos de Nuestros Clientes</h2>
          <div className="flex justify-center">
            <div className="w-20 h-1 bg-gradient-to-r from-gold to-gold-light"></div>
          </div>
        </div>

        <div className="relative md:hidden">
          <div
            ref={galleryRef}
            onScroll={handleScroll}
            className="flex gap-4 pr-[12%] overflow-x-scroll snap-x snap-mandatory scroll-smooth touch-pan-x pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {products.map((product, idx) => (
              <div
                key={product.name}
                ref={(el) => {
                  cardsRef.current[idx] = el
                }}
                className="flex-none min-w-[82%] sm:min-w-[56%] snap-start"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={scrollNext}
            aria-label="Deslizar productos"
            className="absolute right-3 top-[34%] w-9 h-9 rounded-full bg-white/90 border border-gold-light/50 backdrop-blur-sm flex items-center justify-center animate-pulse"
          >
            <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>

        <div className="md:hidden mt-3 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.18em] text-charcoal/55">
          <span className="w-8 h-px bg-gold-light/60" />
          <span>Desliza</span>
          <svg className="w-3.5 h-3.5 text-gold animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5l7 7-7 7" />
          </svg>
          <span className="w-8 h-px bg-gold-light/60" />
        </div>

        <div className="md:hidden mt-2 flex items-center justify-center gap-1.5">
          {products.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setActiveIndex(idx)
                scrollToCard(idx)
              }}
              aria-label={`Ir al producto ${idx + 1}`}
              className={idx === activeIndex ? 'h-1.5 w-4 rounded-full bg-gold/85' : 'h-1.5 w-1.5 rounded-full bg-gold-light/70'}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/product" className="inline-block px-8 py-3 bg-charcoal text-white font-normal tracking-wide hover:bg-gold hover:text-charcoal transition-colors duration-300">
            COMPRAR AHORA
          </Link>
        </div>
      </div>
    </section>
  )
}
