export default function ProductDescription() {
  return (
    <div className="space-y-8">
      {/* Main Description */}
      <div className="space-y-4">
        <h2 className="text-3xl font-serif text-charcoal">
          La Perfección en Cada Detalle
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-gold to-gold-light"></div>
        
        <p className="text-lg text-charcoal/70 font-normal leading-relaxed">
          El Anillo Étoile combina artesanía moderna y elegancia atemporal. Cada pieza se elabora a 
          mano en nuestro taller con oro 18k y diamantes naturales seleccionados por su claridad y 
          brillo, manteniendo un diseño minimalista perfecto para el día a día y para momentos 
          especiales.
        </p>

        <p className="text-lg text-charcoal/70 font-normal leading-relaxed">
          Su estructura reforzada y el pulido premium preservan su belleza con el paso del tiempo. 
          Cada Étoile nace de la pasión por la perfección, uniendo tradición joyera y estética 
          contemporánea.
        </p>
      </div>

      {/* Technical Details - Collapsible */}
      <details className="group border border-gold-light/30 rounded-lg overflow-hidden bg-cream/20">
        <summary className="p-6 font-normal cursor-pointer text-charcoal flex items-center justify-between hover:bg-cream/40 transition-colors">
          <h3 className="text-xl font-serif">Detalles Técnicos</h3>
          <span className="transition group-open:rotate-180">▼</span>
        </summary>
        
        <div className="px-6 pb-6 space-y-4 border-t border-gold-light/20">
          <div className="bg-cream/50 rounded-lg p-6 border border-gold-light/30">
            <h4 className="font-serif text-charcoal mb-3">Proceso de Creación</h4>
            <p className="text-charcoal/70 font-normal leading-relaxed text-sm">
              Diseñado y fabricado completamente a mano por maestros joyeros con más de 20 años de 
              experiencia. Cada anillo se pule de forma manual para lograr un acabado espejo que 
              realza el brillo natural del diamante.
            </p>
          </div>

          <div className="bg-cream/50 rounded-lg p-6 border border-gold-light/30">
            <h4 className="font-serif text-charcoal mb-3">Durabilidad y Cuidado</h4>
            <p className="text-charcoal/70 font-normal leading-relaxed text-sm">
              El oro 18k ofrece excelente resistencia al desgaste diario. Recomendamos limpieza 
              ocasional con paño suave y guardado en estuche para conservar su acabado impecable.
            </p>
          </div>

          <div className="bg-cream/50 rounded-lg p-6 border border-gold-light/30">
            <h4 className="font-serif text-charcoal mb-3">Certificación</h4>
            <p className="text-charcoal/70 font-normal leading-relaxed text-sm">
              Incluye certificado GIA del diamante natural y contraste de oro 18k certificado. 
              También incorpora documento de garantía sellado para mayor seguridad.
            </p>
          </div>
        </div>
      </details>

    </div>
  )
}
