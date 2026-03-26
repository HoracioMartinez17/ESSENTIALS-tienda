'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ProductGallery() {
  const [selectedImage, setSelectedImage] = useState(0)

  const images = [
    { id: 1, title: 'Vista frontal del anillo Étoile', src: '/image/anillos/1.jpeg' },
    { id: 2, title: 'Detalle del acabado artesanal', src: '/image/anillos/2.jpeg' },
  ]

  return (
    <div className="space-y-6">
      {/* Main Image */}
      <div className="relative bg-gradient-to-br from-cream via-white to-gold-light/10 rounded-lg aspect-square overflow-hidden border border-gold-light/30">
        <Image
          src={images[selectedImage].src}
          alt={images[selectedImage].title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority={selectedImage === 0}
        />
        {/* Badge */}
        <div className="absolute top-4 right-4 bg-gold text-charcoal px-4 py-2 rounded-full text-xs font-semibold tracking-wide">
          Premium
        </div>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-2 gap-4">
        {images.map((image, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedImage(idx)}
            onMouseEnter={() => setSelectedImage(idx)}
            aria-label={`Mostrar ${image.title}`}
            className={`relative aspect-square rounded-lg border-2 transition-all overflow-hidden flex items-center justify-center ${
              selectedImage === idx
                ? 'border-gold bg-gold/5'
                : 'border-gold-light/30 hover:border-gold/50'
            }`}
          >
            <Image
              src={image.src}
              alt={image.title}
              fill
              sizes="120px"
              className="object-cover"
            />
            {selectedImage === idx && (
              <div className="absolute inset-0 ring-2 ring-gold rounded-lg"></div>
            )}
          </button>
        ))}
      </div>

      {/* Image Description */}
      <p className="text-center text-charcoal/60 font-normal text-sm">
        {images[selectedImage].title}
      </p>

      {/* Beneficios Clave - Desktop only */}
      <div className="hidden md:block bg-cream/30 rounded-lg p-6 border border-gold-light/30 space-y-4 mt-8">
        <h3 className="text-lg font-serif text-charcoal">Beneficios Clave</h3>
        <div className="space-y-3">
          {['Oro 18k certificado e hipoalergénico', 'Diamante natural talla brillante de 0.25ct', 'Fabricado a mano por maestros joyeros en España', 'Acabado pulido espejo resistente al desgarre diario', 'Garantía de por vida + 30 días de devolución', 'Packaging de lujo y certificado incluido'].map((benefit) => (
            <div key={benefit} className="flex gap-3 pb-3 border-b border-gold-light/20 last:border-b-0">
              <span className="text-gold font-serif text-lg leading-none pt-1">✓</span>
              <p className="text-charcoal/80 font-normal leading-relaxed text-sm">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

