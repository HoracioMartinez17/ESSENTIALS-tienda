export default function ContactStep() {
  return (
    <article className="border border-gold-light/40 rounded-lg p-4 sm:p-6 md:p-8 bg-white space-y-4 sm:space-y-6">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-xl sm:text-2xl font-serif text-charcoal">Contacto</h2>
        <span className="text-xs text-charcoal/50 font-normal">Paso 1 de 4</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        <div className="space-y-1.5 md:col-span-2">
          <label className="text-xs uppercase tracking-wider text-charcoal/60 font-normal">Email</label>
          <input
            defaultValue="lucia.martinez@email.com"
            className="w-full h-11 px-4 rounded-md border border-gold-light/40 bg-white text-charcoal/85 font-normal focus:outline-none focus:border-gold"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs uppercase tracking-wider text-charcoal/60 font-normal">Nombre</label>
          <input
            defaultValue="Lucia"
            className="w-full h-11 px-4 rounded-md border border-gold-light/40 bg-white text-charcoal/85 font-normal focus:outline-none focus:border-gold"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs uppercase tracking-wider text-charcoal/60 font-normal">Apellidos</label>
          <input
            defaultValue="Martinez Ortega"
            className="w-full h-11 px-4 rounded-md border border-gold-light/40 bg-white text-charcoal/85 font-normal focus:outline-none focus:border-gold"
          />
        </div>
        <div className="space-y-2 md:col-span-2">
          <label className="text-xs uppercase tracking-wider text-charcoal/60 font-normal">Telefono</label>
          <input
            defaultValue="+34 612 345 678"
            className="w-full h-11 px-4 rounded-md border border-gold-light/40 bg-white text-charcoal/85 font-normal focus:outline-none focus:border-gold"
          />
        </div>
      </div>
    </article>
  )
}
