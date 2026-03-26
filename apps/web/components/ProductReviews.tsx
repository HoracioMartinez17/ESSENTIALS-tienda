export default function ProductReviews() {
  const reviews = [
    {
      author: 'María García',
      role: 'Cliente Verificado',
      rating: 5,
      date: 'Hace 2 semanas',
      title: 'Absolutamente perfecto',
      text: 'El anillo es exactamente como se describe. La calidad del oro y el diamante son excepcionales. El packaging fue un detalle precioso. ¡Lo recomiendo al 100%!',
      verified: true,
    },
    {
      author: 'Carlos López',
      role: 'Cliente Verificado',
      rating: 5,
      date: 'Hace 1 mes',
      title: 'Regalo de ensueño',
      content: 'Lecompré este anillo a mi pareja y quedó maravillada. El diseño minimalista es muy elegante y versátil. Para ocasiones especiales o día a día, es perfecto.',
      verified: true,
    },
    {
      author: 'Ana Rodríguez',
      role: 'Cliente Verificado',
      rating: 5,
      date: 'Hace 1 mes',
      title: 'Lujo accesible',
      text: 'Es mi tercer anillo de Essentials A&L. Siempre entrego calidad consistente. Este Étoile es brillante, resistente y definitivamente una pieza de inversión.',
      verified: true,
    },
  ]

  return (
    <details className="group border border-gold-light/30 rounded-lg overflow-hidden bg-cream/20">
      <summary className="p-6 font-normal cursor-pointer text-charcoal flex items-center justify-between hover:bg-cream/40 transition-colors">
        <h2 className="text-3xl font-serif text-charcoal">Opiniones de Clientes</h2>
        <span className="transition group-open:rotate-180">▼</span>
      </summary>

      <div className="px-6 pb-6 space-y-8 border-t border-gold-light/20">
        {/* Reviews Header */}
        <div className="space-y-4 pt-6">
          <div className="w-20 h-1 bg-gradient-to-r from-gold to-gold-light"></div>

          {/* Overall Rating */}
          <div className="flex items-center gap-6 pt-4">
          <div className="text-center">
            <div className="text-5xl font-serif text-gold">4.9</div>
            <div className="flex gap-1 justify-center mt-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-gold fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <p className="text-sm text-charcoal/60 font-normal mt-2">342 reseñas</p>
          </div>

          {/* Rating Distribution */}
          <div className="flex-1 space-y-2">
            {[5, 4, 3, 2, 1].map((stars) => (
              <div key={stars} className="flex items-center gap-3">
                <span className="text-xs text-charcoal/60 w-6">{stars}★</span>
                <div className="flex-1 h-2 bg-cream rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-gold to-gold-light"
                    style={{ width: `${stars === 5 ? 85 : stars === 4 ? 10 : 3}%` }}
                  ></div>
                </div>
                <span className="text-xs text-charcoal/60 w-8 text-right">
                  {stars === 5 ? '85%' : stars === 4 ? '10%' : '3%'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Individual Reviews */}
      <div className="space-y-6">
        {reviews.map((review, idx) => (
          <div key={idx} className="border border-gold-light/30 rounded-lg p-6">
            {/* Review Header */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-serif text-charcoal">{review.author}</p>
                  {review.verified && (
                    <span className="bg-gold/20 text-gold text-xs px-2 py-1 rounded font-normal">
                      ✓ Verificado
                    </span>
                  )}
                </div>
                <p className="text-xs text-charcoal/50 font-normal">{review.date}</p>
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-gold fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Review Content */}
            <h4 className="font-serif text-charcoal mb-2">{review.title}</h4>
            <p className="text-charcoal/70 font-normal leading-relaxed text-sm">
              {review.text || review.content}
            </p>

            {/* Helpful Actions */}
            <div className="mt-4 pt-4 border-t border-gold-light/20 flex gap-6">
              <button className="text-xs text-charcoal/50 hover:text-gold font-normal transition-colors">
                👍 Útil (24)
              </button>
              <button className="text-xs text-charcoal/50 hover:text-gold font-normal transition-colors">
                👎 No útil (2)
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-cream/50 rounded-lg p-6 border border-gold-light/30 text-center">
        <p className="text-charcoal/60 font-normal mb-4">
          ¿Ya tienes este producto? Comparte tu opinión
        </p>
        <button className="px-6 py-2 border border-charcoal text-charcoal font-normal hover:border-gold hover:text-gold transition-colors text-sm">
          Escribir una reseña
        </button>
      </div>
      </div>
    </details>
  )
}
