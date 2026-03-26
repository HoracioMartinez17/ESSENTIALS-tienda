export default function ProductSpecs() {
  const specs = [
    { label: 'Material', value: 'Oro 18k amarillo' },
    { label: 'Piedra Principal', value: 'Diamante natural 0.25ct' },
    { label: 'Claridad Diamante', value: 'VS1' },
    { label: 'Color Diamante', value: 'F (Incoloro)' },
    { label: 'Talla Diamante', value: 'Brillante redonda' },
    { label: 'Peso Aproximado', value: '3.5g - 4.5g' },
    { label: 'Tallas Disponibles', value: '5 - 10 (ajustables)' },
    { label: 'Acabado', value: 'Pulido espejo de alta calidad' },
    { label: 'Fabricación', value: 'Artesanal 100% hecha a mano' },
    { label: 'País de Origen', value: 'España' },
    { label: 'Garantía', value: 'Garantía de por vida' },
    { label: 'Packaging', value: 'Estuche de lujo personalizado' },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-serif text-charcoal">
        Especificaciones Técnicas
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-gold to-gold-light"></div>

      <div className="overflow-hidden border border-gold-light/30 rounded-lg">
        <table className="w-full">
          <tbody>
            {specs.map((spec, idx) => (
              <tr
                key={idx}
                className={`border-b border-gold-light/20 last:border-b-0 ${
                  idx % 2 === 0 ? 'bg-cream/20' : 'bg-white'
                }`}
              >
                <td className="px-6 py-4 text-charcoal font-normal w-40">
                  {spec.label}
                </td>
                <td className="px-6 py-4 text-charcoal/80 font-normal">
                  {spec.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Additional Notes */}
      <div className="bg-gold-light/5 rounded-lg p-6 border border-gold-light/30">
        <p className="text-sm text-charcoal/70 font-normal leading-relaxed">
          <strong className="text-charcoal font-serif">Nota:</strong> Las imágenes del producto 
          pueden variar ligeramente del original debido a diferentes condiciones de iluminación 
          y configuración de pantalla. La claridad, color y peso son certificados y garantizados.
        </p>
      </div>
    </div>
  )
}
