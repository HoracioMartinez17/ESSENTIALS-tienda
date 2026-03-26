import Link from 'next/link'
import Image from 'next/image'

export default function RelatedProducts() {
  const relatedProducts = [
    {
      name: 'Collar Minimalista Oro',
      description: 'Cadena sutil en oro 18k',
      price: '€1,200',
      image: '/image/collares/2.jpeg',
      match: 'Combina perfectamente',
    },
    {
      name: 'Pendientes Diamante Pequeños',
      description: 'Studs de diamante natural',
      price: '€1,450',
      image: '/image/pendientes/pendientes-1.jpg',
      match: 'Estilo coordinado',
    },
    {
      name: 'Brazalete Delicado',
      description: 'Pulsera en oro 18k',
      price: '€680',
      image: '/image/collares/3.jpeg',
      match: 'Conjunto elegante',
    },
    {
      name: 'Caja de Almacenamiento',
      description: 'Estuche premium para joyas',
      price: '€85',
      image: '/image/collares/4.jpeg',
      match: 'Protección ideal',
    },
  ]

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-3xl font-serif text-charcoal">
          Combínalo con…
        </h2>
        <p className="text-charcoal/60 font-normal">
          Productos seleccionados para formar un conjunto elegante y coordinado.
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-gold to-gold-light"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product, idx) => (
          <Link key={idx} href="/product" className="group cursor-pointer">
            {/* Product Card */}
            <div className="space-y-4">
              {/* Image */}
              <div className="relative bg-gradient-to-br from-cream/50 to-gold-light/10 rounded-lg aspect-square flex items-center justify-center overflow-hidden border border-gold-light/30 hover:border-gold transition-colors group-hover:shadow-lg group-hover:shadow-gold/10">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Info */}
              <div className="space-y-2">
                <div className="space-y-1">
                  <h3 className="font-serif text-charcoal text-base group-hover:text-gold transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-charcoal/50 font-normal">
                    {product.description}
                  </p>
                </div>

                {/* Badge */}
                <div className="pt-2">
                  <span className="inline-block text-xs bg-gold/10 text-gold px-3 py-1 rounded-full font-normal">
                    {product.match}
                  </span>
                </div>

                {/* Price and Action */}
                <div className="flex justify-between items-center pt-3 border-t border-gold-light/20">
                  <span className="font-serif text-gold text-sm">{product.price}</span>
                  <button className="w-8 h-8 rounded-full border border-charcoal text-charcoal hover:border-gold hover:text-gold transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-gold-light/20 via-cream/30 to-gold-light/20 rounded-lg p-8 text-center border border-gold-light/40">
        <h3 className="text-2xl font-serif text-charcoal mb-2">
          Colección Completa
        </h3>
        <p className="text-charcoal/60 font-normal mb-6">
          Descubre todas nuestras joyas premium coordinadas
        </p>
        <Link href="/product" className="inline-block px-8 py-3 border border-charcoal text-charcoal font-normal tracking-wide hover:border-gold hover:text-gold transition-colors duration-300">
          VER COLECCIONES
        </Link>
      </div>
    </div>
  )
}
