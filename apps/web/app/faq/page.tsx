export default function FaqPage() {
  const faqs = [
    {
      question: 'A que zonas realizan envios?',
      answer: 'Actualmente realizamos envios unicamente a la peninsula iberica.',
    },
    {
      question: 'Cuanto tarda en llegar mi pedido?',
      answer: 'El envio estandar tarda entre 2 y 3 dias habiles desde la confirmacion del pago.',
    },
    {
      question: 'Puedo devolver una pieza?',
      answer: 'Si, aceptamos devoluciones dentro de los 30 dias posteriores a la compra.',
    },
    {
      question: 'Las piezas incluyen garantia?',
      answer: 'Si, todas nuestras piezas tienen garantia vitalicia por defectos de fabricacion.',
    },
    {
      question: 'Como puedo contactar con soporte?',
      answer: 'Puedes escribirnos desde la pagina de contacto y te responderemos lo antes posible.',
    },
  ]

  return (
    <div className="min-h-screen bg-white pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto space-y-10">
        <header className="space-y-4 text-center">
          <p className="text-gold font-normal tracking-wider uppercase text-sm">FAQ</p>
          <h1 className="text-4xl md:text-5xl font-serif text-charcoal">Preguntas frecuentes</h1>
          <div className="flex justify-center">
            <div className="w-20 h-1 bg-gradient-to-r from-gold to-gold-light" />
          </div>
          <p className="text-charcoal/70 font-normal">
            Resolvemos las dudas mas comunes sobre compras, envios y garantia.
          </p>
        </header>

        <section className="space-y-4">
          {faqs.map((item) => (
            <details key={item.question} className="group border border-gold-light/35 rounded-lg bg-white">
              <summary className="p-5 font-normal cursor-pointer text-charcoal flex items-center justify-between">
                {item.question}
                <span className="transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="px-5 pb-5 text-sm text-charcoal/70 leading-relaxed">{item.answer}</div>
            </details>
          ))}
        </section>
      </div>
    </div>
  )
}
