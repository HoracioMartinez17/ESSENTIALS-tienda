import Link from 'next/link'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        <header className="space-y-4 text-center">
          <p className="text-gold font-normal tracking-wider uppercase text-sm">Contacto</p>
          <h1 className="text-4xl md:text-5xl font-serif text-charcoal">Estamos aqui para ayudarte</h1>
          <div className="flex justify-center">
            <div className="w-20 h-1 bg-gradient-to-r from-gold to-gold-light" />
          </div>
          <p className="text-charcoal/70 font-normal max-w-2xl mx-auto">
            Si tienes dudas sobre tallas, envios o disponibilidad, escribenos y te responderemos lo antes posible.
          </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8">
          <article className="bg-white border border-gold-light/35 rounded-lg p-6 md:p-8 space-y-5">
            <h2 className="text-2xl font-serif text-charcoal">Envianos un mensaje</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider text-charcoal/60">Nombre</label>
                <input className="w-full h-11 px-4 rounded-md border border-gold-light/40 focus:outline-none focus:border-gold" placeholder="Tu nombre" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider text-charcoal/60">Email</label>
                <input className="w-full h-11 px-4 rounded-md border border-gold-light/40 focus:outline-none focus:border-gold" placeholder="tu@email.com" />
              </div>
              <div className="space-y-1.5 md:col-span-2">
                <label className="text-xs uppercase tracking-wider text-charcoal/60">Asunto</label>
                <input className="w-full h-11 px-4 rounded-md border border-gold-light/40 focus:outline-none focus:border-gold" placeholder="Consulta sobre un producto" />
              </div>
              <div className="space-y-1.5 md:col-span-2">
                <label className="text-xs uppercase tracking-wider text-charcoal/60">Mensaje</label>
                <textarea className="w-full min-h-[150px] p-4 rounded-md border border-gold-light/40 focus:outline-none focus:border-gold resize-y" placeholder="Escribe tu mensaje..." />
              </div>
            </div>
            <button className="w-full sm:w-auto px-7 py-3 rounded-md bg-charcoal text-white hover:bg-gold hover:text-charcoal transition-colors">
              Enviar mensaje
            </button>
          </article>

          <aside className="bg-cream/35 border border-gold-light/35 rounded-lg p-6 md:p-8 space-y-5">
            <h2 className="text-2xl font-serif text-charcoal">Atencion al cliente</h2>
            <div className="space-y-3 text-sm text-charcoal/80">
              <p><span className="font-semibold text-charcoal">Email:</span> contacto@essentialsal.com</p>
              <p><span className="font-semibold text-charcoal">Horario:</span> Lunes a Viernes, 10:00 - 19:00</p>
              <p><span className="font-semibold text-charcoal">Zona de envio:</span> Solo peninsula iberica</p>
            </div>
            <div className="h-px bg-gold-light/40" />
            <p className="text-sm text-charcoal/70">
              Para preguntas comunes, tambien puedes visitar nuestras respuestas rapidas.
            </p>
            <Link href="/faq" className="inline-flex items-center gap-2 text-sm text-charcoal hover:text-gold transition-colors">
              Ver preguntas frecuentes
              <span>→</span>
            </Link>
          </aside>
        </section>
      </div>
    </div>
  )
}
