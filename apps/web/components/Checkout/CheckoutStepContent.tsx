import { CheckoutStep } from './types'
import ContactStep from './ContactStep'
import ShippingStep from './ShippingStep'
import PaymentStep from './PaymentStep'
import ConfirmationStep from './ConfirmationStep'

type CheckoutStepContentProps = {
  step: CheckoutStep
}

export default function CheckoutStepContent({ step }: CheckoutStepContentProps) {
  if (step === 1) return <ContactStep />
  if (step === 2) return <ShippingStep />
  if (step === 3) return <PaymentStep />
  return <ConfirmationStep />
}
