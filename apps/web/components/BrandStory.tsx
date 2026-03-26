import Image from 'next/image'

export default function BrandStory() {
  return (
    <section id="historia" className="scroll-mt-28 py-24 px-6 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-8 order-2 md:order-1">
            <div className="space-y-4">
              <p className="text-gold font-medium tracking-wider uppercase text-sm">NUESTRA HISTORIA</p>
              <h2 className="text-4xl md:text-5xl font-serif text-charcoal">
                Hola, soy Andrea
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-gold to-gold-light"></div>
            </div>

            <div className="space-y-6 text-charcoal/85 font-normal leading-relaxed text-[1.02rem]">
              <p>
                Soy la persona detrás de Essentials A&amp;L. Creo pulseras hechas a mano y selecciono piezas especiales
                para mujeres que quieren sentirse únicas cada día.
              </p>
              
              <p>
                Cada pieza está pensada para acompañarte en momentos importantes: un regalo, una celebración
                o simplemente para recordarte lo especial que eres.
              </p>

              <p>
                Aquí no hay producción en masa. Muchas de mis piezas son únicas y cuando se van… no vuelven.
                Gracias por estar aquí.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gold-light/30">
              <div>
                <p className="text-3xl font-serif text-gold mb-2">100%</p>
                <p className="text-xs text-charcoal/70 uppercase tracking-wider font-medium">Hecho a Mano</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-gold mb-2">ÚNICAS</p>
                <p className="text-xs text-charcoal/70 uppercase tracking-wider font-medium">Ediciones Limitadas</p>
              </div>
            </div>
          </div>

          {/* Right - Visual */}
          <div className="order-1 md:order-2">
            <div className="relative">
              {/* Decorative BG */}
              <div className="absolute -inset-10 bg-gradient-to-br from-gold-light/10 to-cream rounded-lg"></div>
              
              <div className="relative rounded-lg overflow-hidden border border-gold-light/40 bg-cream aspect-[3/4]">
                <Image
                  src="/image/general/image-premiun.webp"
                  alt="Historia de Andrea, creadora de Essentials A&L"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
