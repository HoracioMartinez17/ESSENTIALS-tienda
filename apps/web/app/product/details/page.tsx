import ProductGallery from '@/components/ProductGallery'
import ProductDetails from '@/components/ProductDetails'
import ProductDescription from '@/components/ProductDescription'
import ProductReviews from '@/components/ProductReviews'
import RelatedProducts from '@/components/RelatedProducts'

export const metadata = {
  title: 'Anillo Étoile - Oro 18k con Diamante Natural | Essentials A&L',
  description: 'Anillo Étoile de oro 18k con diamante natural de 0.25ct. Diseño minimalista, elegancia atemporal, artesanía premium.',
}

export default function ProductDetailPage() {
  return (
    <div className="min-h-screen bg-white pt-24 overflow-x-hidden">
      {/* Product Section */}
      <section className="py-16 px-6 overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Product Main - Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-20">
            {/* Gallery */}
            <div className="order-1">
              <ProductGallery />
            </div>

            {/* Details */}
            <div className="order-2">
              <ProductDetails />
            </div>
          </div>

        </div>
      </section>

      {/* Description Section */}
      <section className="py-2 md:py-5 px-6 bg-gradient-to-b from-white via-cream/10 to-white overflow-x-hidden">
        <div className="max-w-4xl mx-auto">
          <ProductDescription />
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-5 md:py-5 px-6 bg-cream/20 overflow-x-hidden">
        <div className="max-w-4xl mx-auto">
          <ProductReviews />
        </div>
      </section>

      {/* Emotional Connection */}
      <section className="py-8 md:py-12 px-6 bg-gradient-to-b from-cream/20 to-white overflow-x-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gold-light/20 to-cream rounded-lg p-6 md:p-8 border border-gold-light/40">
            <p className="text-charcoal/80 font-normal leading-relaxed italic">
              &ldquo;Un anillo no es solo una joya. Es un símbolo que acompaña tus momentos más especiales.
              El Étoile está diseñado para brillar junto a ti, hoy y siempre.&rdquo;
            </p>
            <p className="text-gold font-serif mt-4">— Essentials A&L</p>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="py-20 px-6 overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          <RelatedProducts />
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 px-6 border-t border-gold-light/30 overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center space-y-3">
              <div className="text-4xl">🔐</div>
              <h4 className="font-serif text-charcoal">Compra Segura</h4>
              <p className="text-xs text-charcoal/60 font-normal">
                Certificado SSL y protección 100%
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="text-4xl">🔄</div>
              <h4 className="font-serif text-charcoal">Devolución Fácil</h4>
              <p className="text-xs text-charcoal/60 font-normal">
                30 días sin preguntas
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="text-4xl">🏆</div>
              <h4 className="font-serif text-charcoal">Garantía Vitalicia</h4>
              <p className="text-xs text-charcoal/60 font-normal">
                Cobertura completa de por vida
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="text-4xl">🚚</div>
              <h4 className="font-serif text-charcoal">Envío Gratis</h4>
              <p className="text-xs text-charcoal/60 font-normal">
                Solo península, 2-3 días hábiles
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Mini Section */}
      <section className="py-16 px-6 bg-gold-light/5 overflow-x-hidden">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-2xl font-serif text-charcoal text-center">
            Preguntas Frecuentes
          </h2>
          <div className="space-y-4">
            <details className="group border border-gold-light/30 rounded-lg">
              <summary className="p-6 font-normal cursor-pointer text-charcoal flex items-center justify-between">
                ¿Cómo sé si el anillo es de mi talla?
                <span className="transition group-open:rotate-180">▼</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal/70 font-normal text-sm">
                Puedes medir un anillo que uses o descargar nuestra guía de tallas. También ofrecemos 
                cambio de talla gratis dentro de 30 días de la compra.
              </div>
            </details>

            <details className="group border border-gold-light/30 rounded-lg">
              <summary className="p-6 font-normal cursor-pointer text-charcoal flex items-center justify-between">
                ¿Incluye certificado del diamante?
                <span className="transition group-open:rotate-180">▼</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal/70 font-normal text-sm">
                Sí, cada Étoile incluye certificado GIA del diamante natural, garantizando autenticidad, 
                claridad, color y peso confirmados.
              </div>
            </details>

            <details className="group border border-gold-light/30 rounded-lg">
              <summary className="p-6 font-normal cursor-pointer text-charcoal flex items-center justify-between">
                ¿Se puede ajustar la talla después?
                <span className="transition group-open:rotate-180">▼</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal/70 font-normal text-sm">
                Sí, ofrecemos servicio de ajuste de talla gratuito de por vida. Solo envía el anillo con 
                porte pagado y lo devolvemos en 7-10 días.
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  )
}
