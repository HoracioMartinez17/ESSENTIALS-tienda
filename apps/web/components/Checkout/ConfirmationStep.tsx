import Link from 'next/link'

export default function ConfirmationStep() {
  return (
    <article className="border border-gold-light/40 rounded-lg p-4 sm:p-6 md:p-8 bg-cream/20 space-y-4 sm:space-y-5">
      <h2 className="text-xl sm:text-2xl font-serif text-charcoal">Confirmacion y confianza</h2>

      <div className="space-y-2">
        <label className="flex items-start gap-3 text-sm text-charcoal/80 font-normal">
          <input type="checkbox" className="mt-1 accent-[#F9B95C]" />
          Acepto los Terminos y Condiciones de compra.
        </label>
        <label className="flex items-start gap-3 text-sm text-charcoal/80 font-normal">
          <input type="checkbox" className="mt-1 accent-[#F9B95C]" />
          He leido y acepto la Politica de Privacidad (RGPD).
        </label>
        <label className="flex items-start gap-3 text-sm text-charcoal/80 font-normal">
          <input type="checkbox" defaultChecked className="mt-1 accent-[#F9B95C]" />
          Quiero recibir novedades y lanzamientos exclusivos por email.
        </label>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
        <div className="border border-gold-light/35 rounded-md p-3 bg-white text-xs sm:text-sm whitespace-nowrap overflow-hidden text-ellipsis">
          🔒 Pago 100% seguro
        </div>
        <div className="border border-gold-light/35 rounded-md p-3 bg-white col-span-2 sm:col-span-1 text-xs sm:text-sm whitespace-nowrap ">
          ⚠️ Solo envios a la peninsula
        </div>
        <div className="border border-gold-light/35 rounded-md p-3 bg-white text-xs sm:text-sm whitespace-nowrap  text-ellipsis">
          ↩️ Devoluciones en 30 dias
        </div>
      </div>

      <p className="text-xs text-charcoal/60 font-normal">
        Al pulsar &quot;Pagar ahora&quot;, se procesara una simulacion frontend. No se realizara ningun cargo real.
      </p>

      <Link href="/cart" className="inline-flex items-center gap-2 text-sm font-normal text-charcoal hover:text-gold transition-colors">
        <span>←</span>
        Volver al carrito
      </Link>
    </article>
  )
}
