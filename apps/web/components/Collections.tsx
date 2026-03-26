import Image from 'next/image'
import Link from 'next/link'

export default function Collections() {
  const collections = [
    {
      name: 'Anillos',
      description: 'Piezas artesanales hechas a mano para celebrar momentos especiales.',
      image: '/image/anillos/1.jpeg',
      href: '/product?category=anillos',
    },
    {
      name: 'Pulseras',
      description: 'Diseños delicados y versátiles, creados con detalle y dedicación.',
      image: '/image/pulceras/1.jpeg',
      href: '/product?category=pulseras',
    },
    {
      name: 'Collares',
      description: 'Collares únicos que resaltan tu estilo con elegancia artesanal.',
      image: '/image/collares/2.jpeg',
      href: '/product?category=collares',
    },
    {
      name: 'Rosarios',
      description: 'Rosarios artesanales con detalles delicados y acabados elegantes.',
      image: '/image/rosarios/rosario-3.webp',
      href: '/product?category=rosarios',
    },
    {
      name: 'Pendientes',
      description: 'Pendientes diseñados para realzar tu estilo en cualquier ocasión.',
      image: '/image/pendientes/pendientes-1.jpg',
      href: '/product?category=pendientes',
    },
    {
      name: 'Accesorios',
      description: 'Pañuelos de seda estampados y extras para completar tu look.',
      image: '/image/panuelos-seda/pañuelos 1.avif',
      href: '/product?category=accesorios',
    },
  ]

  return (
    <section id="collections" className="scroll-mt-28 py-24 px-6 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Sección Header */}
        <div className="text-center space-y-4 mb-16">
          <p className="text-gold font-normal tracking-wider uppercase text-sm">NUESTRAS COLECCIONES</p>
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal">
            Piezas Exclusivas
          </h2>
          <div className="flex justify-center">
            <div className="w-20 h-1 bg-gradient-to-r from-gold to-gold-light"></div>
          </div>
          <p className="text-charcoal/60 font-normal max-w-lg mx-auto pt-4">
            Cada colección cuenta una historia de elegancia, artesanía y dedicación a la perfección
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, idx) => (
            <Link key={idx} href={collection.href} className="hover-lift group block">
              <div className="rounded-lg overflow-hidden border border-gold-light/30 bg-white">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-2xl font-serif text-charcoal">{collection.name}</h3>
                  <p className="text-charcoal/60 text-sm font-normal leading-relaxed">
                    {collection.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link href="/product" className="inline-block px-8 py-3 border border-charcoal text-charcoal font-normal tracking-wide hover:border-gold hover:text-gold transition-colors duration-300">
            VER TODAS LAS COLECCIONES
          </Link>
        </div>
      </div>
    </section>
  )
}
