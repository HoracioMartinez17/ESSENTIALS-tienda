import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream pt-20 pb-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="text-lg sm:text-2xl font-serif font-bold text-gold tracking-wide whitespace-nowrap leading-none">
                ESSENTIALS A&L
              </div>
              <div className="w-1 h-6 bg-gradient-to-b from-gold to-gold-light"></div>
            </div>
            <p className="text-cream/70 font-normal text-sm leading-relaxed">
              Joyería artesanal de lujo. Donde la tradición se encuentra con la modernidad.
            </p>
          </div>

          {/* Collections */}
          <div>
            <h4 className="font-serif text-lg text-gold mb-4">COLECCIONES</h4>
            <ul className="space-y-3 font-normal text-sm text-cream/70">
              <li>
                <Link href="/product?category=anillos" className="hover:text-gold transition-colors">
                  Anillos
                </Link>
              </li>
              <li>
                <Link href="/product?category=pulseras" className="hover:text-gold transition-colors">
                  Pulseras
                </Link>
              </li>
              <li>
                <Link href="/product?category=collares" className="hover:text-gold transition-colors">
                  Collares
                </Link>
              </li>
              <li>
                <Link href="/product?category=rosarios" className="hover:text-gold transition-colors">
                  Rosarios
                </Link>
              </li>
              <li>
                <Link href="/product?category=pendientes" className="hover:text-gold transition-colors">
                  Pendientes
                </Link>
              </li>
              <li>
                <Link href="/product?category=accesorios" className="hover:text-gold transition-colors">
                  Accesorios (Pañuelos)
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-lg text-gold mb-4">EMPRESA</h4>
            <ul className="space-y-3 font-normal text-sm text-cream/70">
              <li>
                <Link href="/#historia" className="hover:text-gold transition-colors">
                  Historia
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-gold transition-colors">
                  Preguntas Frecuentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-serif text-lg text-gold mb-4">SOPORTE</h4>
            <ul className="space-y-3 font-normal text-sm text-cream/70">
              <li>
                <Link href="/shipping" className="hover:text-gold transition-colors">
                  Envíos
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-gold transition-colors">
                  Devoluciones
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-gold transition-colors">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-gold transition-colors">
                  Términos
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-cream/5 rounded-lg p-8 mb-12 border border-gold/20">
          <div className="max-w-md">
            <h4 className="font-serif text-lg text-gold mb-2">SUSCRÍBETE</h4>
            <p className="text-cream/70 font-normal text-sm mb-4">
              Recibe noticias sobre nuestras colecciones exclusivas y ofertas especiales.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 w-full">
              <input 
                type="email" 
                placeholder="Tu correo" 
                className="w-full min-w-0 sm:flex-1 bg-charcoal border border-gold/30 text-cream placeholder:text-cream/50 px-4 py-3 font-normal text-sm focus:outline-none focus:border-gold transition-colors"
              />
              <button 
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-gold text-charcoal font-normal tracking-wide hover:bg-gold-light transition-colors"
              >
                Suscribir
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gold/20 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Copyright */}
            <div className="text-cream/60 font-normal text-sm">
              <p>&copy; 2026 Essentials A&L. Todos los derechos reservados.</p>
              <p className="mt-2">Creado con elegancia y dedicación.</p>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 md:justify-end">
              <Link href="#" aria-label="Instagram" className="text-cream/60 hover:text-gold transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5zm8.95 1.55a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4z"/>
                </svg>
              </Link>
              <Link href="#" aria-label="Facebook" className="text-cream/60 hover:text-gold transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.5 22v-8h2.7l.45-3h-3.15V9.1c0-.9.3-1.5 1.65-1.5h1.65V4.9c-.3 0-1.35-.15-2.55-.15-2.55 0-4.2 1.5-4.2 4.35V11H7v3h2.7v8h3.8z"/>
                </svg>
              </Link>
              <Link href="#" aria-label="TikTok" className="text-cream/60 hover:text-gold transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.9 3c.2 1.7 1.2 3.2 2.8 4 .9.5 1.9.7 2.9.7v3a8.5 8.5 0 0 1-2.9-.5v5.9a6.1 6.1 0 1 1-6.1-6.1c.4 0 .7 0 1.1.1v3.1a3.1 3.1 0 1 0 2 2.9V3h3.2z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
