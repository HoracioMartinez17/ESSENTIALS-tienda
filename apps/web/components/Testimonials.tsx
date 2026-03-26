"use client"

import { useEffect, useRef, useState } from 'react'

type Testimonial = {
  name: string
  role: string
  text: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    name: 'Aurora Martinez',
    role: 'Directora Ejecutiva',
    text: 'Compre mi anillo de compromiso en Essentials A&L y quede maravillada. La calidad, el diseno y la atencion personalizada fueron excepcionales. Lo recomiendo ampliamente.',
    rating: 5,
  },
  {
    name: 'Sebastian Lopez',
    role: 'Empresario',
    text: 'Cada pieza de Essentials A&L es una obra de arte. Mi esposa esta enamorada de sus pendientes. El servicio al cliente es impecable.',
    rating: 5,
  },
  {
    name: 'Valentina Ruiz',
    role: 'Empresaria de Moda',
    text: 'Como alguien en el mundo de la moda, reconozco la excelencia. Las joyas de Essentials A&L tienen ese toque de lujo accesible que buscaba.',
    rating: 5,
  },
  {
    name: 'Carlos Mendoza',
    role: 'Coleccionista de Arte',
    text: 'Tengo una pasion por las piezas unicas y Essentials A&L entrega exactamente eso. Cada compra es una inversion en belleza atemporal.',
    rating: 5,
  },
]

export default function Testimonials() {
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
    const nextIndex = (activeIndex + 1) % testimonials.length
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
    if (sessionStorage.getItem('lumina-testimonials-hint-seen')) return

    const startTimeout = window.setTimeout(() => {
      const hintIndex = testimonials.length > 1 ? 1 : 0
      scrollToCard(hintIndex)
      window.setTimeout(() => scrollToCard(0), 520)
      sessionStorage.setItem('lumina-testimonials-hint-seen', '1')
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
    <section className="py-24 px-6 bg-cream/20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <p className="text-gold font-normal tracking-wider uppercase text-sm">TESTIMONIOS</p>
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal">Lo Que Dicen Nuestros Clientes</h2>
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
            {testimonials.map((testimonial, idx) => (
              <div
                key={testimonial.name}
                ref={(el) => {
                  cardsRef.current[idx] = el
                }}
                className="flex-none w-[88%] max-w-[88%] snap-start bg-white rounded-xl p-5 border border-gold-light/55 shadow-[0_8px_24px_rgba(0,0,0,0.05)] aspect-square flex flex-col overflow-hidden"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-gold fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                <div className="flex-1 mb-5 overflow-y-auto pr-1 [scrollbar-width:thin]">
                  <p className="text-charcoal/70 text-sm sm:text-base font-normal leading-relaxed italic">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                </div>

                <div className="border-t border-gold-light/30 pt-4 mt-auto">
                  <p className="font-serif text-charcoal">{testimonial.name}</p>
                  <p className="text-charcoal/50 text-sm font-normal">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={scrollNext}
            aria-label="Deslizar testimonios"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 border border-gold-light/50 backdrop-blur-sm flex items-center justify-center animate-pulse"
          >
            <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-white rounded-lg p-8 border border-gold-light/30 hover:border-gold/50 transition-colors">
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-gold fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              <p className="text-charcoal/70 font-normal leading-relaxed mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>

              <div className="border-t border-gold-light/30 pt-6">
                <p className="font-serif text-charcoal">{testimonial.name}</p>
                <p className="text-charcoal/50 text-sm font-normal">{testimonial.role}</p>
              </div>
            </div>
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
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setActiveIndex(idx)
                scrollToCard(idx)
              }}
              aria-label={`Ir a resena ${idx + 1}`}
              className={idx === activeIndex ? 'h-1.5 w-4 rounded-full bg-gold/85' : 'h-1.5 w-1.5 rounded-full bg-gold-light/70'}
            />
          ))}
        </div>

        <div className="text-center mt-20 space-y-4">
          <p className="text-3xl md:text-4xl font-serif text-charcoal/30 italic">
            &ldquo;Aqui no hay produccion en masa: solo piezas con alma, creadas con intencion.&rdquo;
          </p>
          <p className="text-charcoal/50 font-normal">- Filosofia Essentials A&L</p>
        </div>
      </div>
    </section>
  )
}
