export default function ShippingStep() {
  return (
    <article className="border border-gold-light/40 rounded-lg p-4 sm:p-6 md:p-8 bg-cream/25 space-y-4 sm:space-y-6">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-xl sm:text-2xl font-serif text-charcoal">Direccion de envio</h2>
        <span className="text-xs text-charcoal/50 font-normal">Paso 2 de 4</span>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        <div className="space-y-1.5 col-span-2">
          <label className="text-xs uppercase tracking-wider text-charcoal/60 font-normal">Direccion</label>
          <input
            defaultValue="Calle Serrano 42, 3oB"
            className="w-full h-11 px-4 rounded-md border border-gold-light/40 bg-white text-charcoal/85 font-normal focus:outline-none focus:border-gold"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs uppercase tracking-wider text-charcoal/60 font-normal">Codigo postal</label>
          <input
            defaultValue="28001"
            className="w-full h-11 px-4 rounded-md border border-gold-light/40 bg-white text-charcoal/85 font-normal focus:outline-none focus:border-gold"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs uppercase tracking-wider text-charcoal/60 font-normal">Ciudad</label>
          <input
            defaultValue="Madrid"
            className="w-full h-11 px-4 rounded-md border border-gold-light/40 bg-white text-charcoal/85 font-normal focus:outline-none focus:border-gold"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs uppercase tracking-wider text-charcoal/60 font-normal">Provincia</label>
          <input
            defaultValue="Madrid"
            className="w-full h-11 px-4 rounded-md border border-gold-light/40 bg-white text-charcoal/85 font-normal focus:outline-none focus:border-gold"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs uppercase tracking-wider text-charcoal/60 font-normal">Pais</label>
          <input
            defaultValue="Espana"
            className="w-full h-11 px-4 rounded-md border border-gold-light/40 bg-white text-charcoal/85 font-normal focus:outline-none focus:border-gold"
          />
        </div>
      </div>

      <div className="space-y-3 border-t border-gold-light/35 pt-5">
        <p className="text-sm font-normal text-charcoal/75">Metodo de envio</p>
        <label className="flex items-center justify-between gap-3 border border-gold rounded-md bg-white p-3 cursor-pointer">
          <span className="text-sm text-charcoal font-normal">Envio estandar (2-3 dias)</span>
          <span className="text-sm text-gold font-serif">Gratis</span>
        </label>
        <label className="flex items-center justify-between gap-3 border border-gold-light/40 rounded-md bg-white p-3 cursor-pointer">
          <span className="text-sm text-charcoal/80 font-normal">Envio express (24h)</span>
          <span className="text-sm text-charcoal font-serif">EUR14,90</span>
        </label>
      </div>
    </article>
  )
}
