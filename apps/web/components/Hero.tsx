import Image from 'next/image'
import Link from 'next/link'
import Pattern from './pattern'

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-start lg:items-center justify-center pt-20 pb-10 md:pt-28 lg:pt-16 md:pb-0 bg-white overflow-x-hidden overflow-y-visible">
      {/* Hero Background - Pattern Adaptado a la paleta */}
      <Pattern />

      {/* SVG encima del pattern */}
      <div className="absolute inset-0 pointer-events-none z-[5] opacity-10 mix-blend-multiply">
        <Image
          src="/iconos/separadores/Historia de Instagram Catalogo Delicado Pastel (1).svg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 sm:w-72 sm:h-72 bg-gold-light rounded-full filter blur-3xl opacity-8"></div>
      <div className="absolute bottom-0 left-10 w-64 h-64 sm:w-80 sm:h-80 bg-gold rounded-full filter blur-3xl opacity-5"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-0 md:py-0 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 sm:space-y-8 animate-[fadeInUp_0.8s_ease-out] bg-white/55 border border-gold-light/50 rounded-2xl p-6 sm:p-8 md:p-10 backdrop-blur-sm">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-charcoal leading-[1.05]">
              Lujo en Cada
              <span className="block text-gold"> Detalle</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-gold to-gold-light"></div>
          </div>

          <p className="text-base sm:text-lg text-charcoal/80 font-normal leading-relaxed max-w-none sm:max-w-md">
            Descubre nuestra colección exclusiva de joyería artesanal. Cada pieza es un acto de maestría y elegancia, diseñada para quienes aprecian la belleza atemporal.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full max-w-md">
            <Link href="/product" className="w-full sm:w-auto px-8 py-3 bg-charcoal text-white font-normal tracking-wide hover:bg-gold hover:text-charcoal transition-colors duration-300 text-center">
              EXPLORAR
            </Link>
            <Link href="#collections" className="w-full sm:w-auto px-8 py-3 border border-charcoal text-charcoal font-normal tracking-wide hover:border-gold hover:text-gold transition-colors duration-300 text-center">
              COLECCIONES
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 divide-x divide-gold-light/40 pt-6 sm:pt-8 border-t border-gold-light/30">
            <div className="text-center px-2 sm:px-3">
              <p className="text-gold font-serif  text-sm sm:text-lg">10+</p>
              <p className="text-[10px] sm:text-xs text-charcoal/65 uppercase tracking-[0.18em] leading-tight">Años Creando</p>
            </div>
            <div className="text-center px-2 sm:px-3">
              <p className="text-gold font-serif text-sm sm:text-lg">100%</p>
              <p className="text-[10px] sm:text-xs text-charcoal/65 uppercase tracking-[0.18em] leading-tight">Artesanal</p>
            </div>
            <div className="text-center px-2 sm:px-3">
              <p className="text-gold text-[20px]  font-serif text-sm sm:text-lg">∞</p>
              <p className="text-[10px] sm:text-xs text-charcoal/65 uppercase tracking-[0.18em] leading-tight">Garantía</p>
            </div>
          </div>
        </div>

        {/* Right - Image */}
        <div className="relative flex items-center justify-center">
          <div className="relative w-full aspect-[4/5] sm:aspect-square max-w-[320px] sm:max-w-md rounded-2xl border border-gold-light/60 bg-white/45 p-3 backdrop-blur-sm">
            <div className="w-full h-full rounded-xl overflow-hidden bg-cream border border-gold-light/35">
              <Image
                src="/image/pulceras/7.jpeg"
                alt="Joyería artesanal Essentials A&L"
                fill
                className="object-cover object-[52%_center] scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce hidden lg:block">
        <svg className="w-5 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
