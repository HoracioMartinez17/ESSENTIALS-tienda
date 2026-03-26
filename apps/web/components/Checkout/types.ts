export type CheckoutStep = 1 | 2 | 3 | 4

export type CheckoutItem = {
  id: number
  name: string
  size: string
  unitPrice: number
  quantity: number
}

export type CheckoutTotals = {
  subtotal: number
  shipping: number
  taxes: number
  total: number
}
