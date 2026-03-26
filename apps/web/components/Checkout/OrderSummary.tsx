import Link from 'next/link'
import { CheckoutItem, CheckoutTotals } from './types'

type OrderSummaryProps = {
  items: CheckoutItem[]
  totals: CheckoutTotals
  showPayAction?: boolean
  onMobileBack?: () => void
  mobile?: boolean
}

export default function OrderSummary({ items, totals, showPayAction = false, onMobileBack, mobile = false }: OrderSummaryProps) {
  return (
    <aside
      className={`${
        mobile
          ? 'bg-cream/45 border border-gold-light/45 rounded-lg p-4 sm:p-6 space-y-4 lg:hidden'
          : 'hidden lg:block bg-cream/45 border border-gold-light/45 rounded-lg p-6 lg:sticky lg:top-28 space-y-6'
      }`}
    >
      <h2 className="text-xl sm:text-2xl font-serif text-charcoal">Resumen</h2>

      <div className={mobile ? 'space-y-2' : 'space-y-3'}>
        {items.map((item) => (
          <div key={item.id} className={`flex items-start justify-between ${mobile ? 'gap-2 text-xs sm:text-sm' : 'gap-3 text-sm'}`}>
            <div className="flex-1">
              <p className={`${mobile ? 'line-clamp-2' : ''} text-charcoal font-normal leading-snug`}>{item.name}</p>
              <p className="text-xs text-charcoal/55 font-normal">T: {item.size} · C: {item.quantity}</p>
            </div>
            <p className="font-serif text-gold whitespace-nowrap">EUR{(item.unitPrice * item.quantity).toLocaleString('es-ES')}</p>
          </div>
        ))}
      </div>

      <div className="h-px bg-gold-light/50" />

      <div className={`${mobile ? 'space-y-1 text-xs' : 'space-y-2 text-sm'} text-charcoal/80 font-normal`}>
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>EUR{totals.subtotal.toLocaleString('es-ES', { minimumFractionDigits: 2 })}</span>
        </div>
        <div className="flex justify-between">
          <span>{mobile ? 'Envio' : 'Envio estimado'}</span>
          <span>{totals.shipping === 0 ? 'Gratis' : `EUR${totals.shipping.toLocaleString('es-ES', { minimumFractionDigits: 2 })}`}</span>
        </div>
        <div className="flex justify-between">
          <span>{mobile ? 'Impuestos' : 'Impuestos (IVA)'}</span>
          <span>EUR{totals.taxes.toLocaleString('es-ES', { minimumFractionDigits: 2 })}</span>
        </div>
      </div>

      <div className="h-px bg-gold-light/50" />

      <div className="flex items-center justify-between">
        <p className={`${mobile ? 'text-sm' : 'text-base'} text-charcoal font-normal`}>Total</p>
        <p className={`${mobile ? 'text-2xl' : 'text-3xl'} font-serif text-gold`}>
          EUR{totals.total.toLocaleString('es-ES', { minimumFractionDigits: 2 })}
        </p>
      </div>

      {showPayAction && (
        <>
          <button className="w-full py-4 rounded-lg bg-charcoal text-white font-normal tracking-wide hover:bg-gold hover:text-charcoal transition-colors">
            Confirmar y pagar
          </button>

          <p className="text-xs text-charcoal/60 font-normal">
            Al pulsar "Confirmar y pagar", se procesara una simulacion frontend. No se realizara ningun cargo real.
          </p>

          {mobile && onMobileBack && (
            <button
              type="button"
              onClick={onMobileBack}
              className="inline-flex items-center gap-2 text-sm font-normal text-charcoal hover:text-gold transition-colors"
            >
              <span>←</span>
              Volver
            </button>
          )}
        </>
      )}
    </aside>
  )
}
