export default function PaymentStep() {
  return (
    <article className="border border-gold-light/40 rounded-lg p-4 sm:p-6 md:p-8 bg-white space-y-4 sm:space-y-6">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-xl sm:text-2xl font-serif text-charcoal">Facturacion y pago</h2>
        <span className="text-xs text-charcoal/50 font-normal">Paso 3 de 4</span>
      </div>

      <div className="space-y-2">
        <label className="flex items-start gap-3 text-sm text-charcoal/80 font-normal">
          <input type="checkbox" defaultChecked className="mt-1 accent-[#F9B95C]" />
          Direccion de facturacion igual que la de envio
        </label>
        <label className="flex items-start gap-3 text-sm text-charcoal/80 font-normal">
          <input type="checkbox" className="mt-1 accent-[#F9B95C]" />
          Quiero factura (NIF/CIF y datos fiscales)
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        <div className="space-y-1.5 md:col-span-2">
          <label className="text-xs uppercase tracking-wider text-charcoal/60 font-normal">Titular de la tarjeta</label>
          <input
            defaultValue="Lucia Martinez Ortega"
            className="w-full h-11 px-4 rounded-md border border-gold-light/40 bg-white text-charcoal/85 font-normal focus:outline-none focus:border-gold"
          />
        </div>
        <div className="space-y-1.5 md:col-span-2">
          <label className="text-xs uppercase tracking-wider text-charcoal/60 font-normal">Numero de tarjeta</label>
          <input
            defaultValue="4242 4242 4242 4242"
            className="w-full h-11 px-4 rounded-md border border-gold-light/40 bg-white text-charcoal/85 font-normal focus:outline-none focus:border-gold"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs uppercase tracking-wider text-charcoal/60 font-normal">Caducidad</label>
          <input
            defaultValue="12/29"
            className="w-full h-11 px-4 rounded-md border border-gold-light/40 bg-white text-charcoal/85 font-normal focus:outline-none focus:border-gold"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs uppercase tracking-wider text-charcoal/60 font-normal">CVV</label>
          <input
            defaultValue="123"
            className="w-full h-11 px-4 rounded-md border border-gold-light/40 bg-white text-charcoal/85 font-normal focus:outline-none focus:border-gold"
          />
        </div>
      </div>

      <div className="pt-1 border-t border-gold-light/35">
        <p className="text-xs uppercase tracking-wider text-charcoal/55 mb-3 mt-4">Metodos de pago</p>
        <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
          {['VISA', 'Mastercard', 'AMEX', 'PayPal', 'Apple Pay', 'Klarna'].map((method) => (
            <div
              key={method}
              className="h-10 rounded-md border border-gold-light/45 bg-white flex items-center justify-center text-[11px] text-charcoal/70 font-normal"
            >
              {method}
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}
