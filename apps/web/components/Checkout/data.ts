import { CheckoutItem, CheckoutTotals } from './types'

export const checkoutItems: CheckoutItem[] = [
  {
    id: 1,
    name: 'Anillo Etoile - Oro 18k con diamante natural',
    size: '7',
    unitPrice: 2850,
    quantity: 1,
  },
  {
    id: 2,
    name: 'Collar Minimalista Essentials A&L',
    size: 'Unica',
    unitPrice: 1200,
    quantity: 1,
  },
]

export function getCheckoutTotals(items: CheckoutItem[]): CheckoutTotals {
  const subtotal = items.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0)
  const shipping = subtotal >= 150 ? 0 : 12.9
  const taxes = subtotal * 0.21
  const total = subtotal + shipping + taxes

  return {
    subtotal,
    shipping,
    taxes,
    total,
  }
}
