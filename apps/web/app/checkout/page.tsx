'use client'

import StepProgress from '@/components/Checkout/StepProgress'
import CheckoutStepContent from '@/components/Checkout/CheckoutStepContent'
import OrderSummary from '@/components/Checkout/OrderSummary'
import { checkoutItems, getCheckoutTotals } from '@/components/Checkout/data'
import { useCheckoutSteps } from '@/components/Checkout/useCheckoutSteps'

export default function CheckoutPage() {
  const { currentStep, nextStep, prevStep, goToStep, isFirstStep, isLastStep } = useCheckoutSteps()
  const totals = getCheckoutTotals(checkoutItems)

  return (
    <div className="min-h-screen bg-white pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-10">
        <header className="space-y-2 sm:space-y-3">
          <p className="text-xs uppercase tracking-wider text-gold font-normal">Checkout</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-charcoal">Finalizar compra</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-gold to-gold-light" />
        </header>

        <StepProgress currentStep={currentStep} onBackToStep={goToStep} />

        <section className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6 lg:gap-8 items-start">
          <div className="space-y-4 sm:space-y-6">
            <CheckoutStepContent step={currentStep} />

            <div className="flex items-center justify-between gap-3">
              {!(isLastStep && currentStep === 4) && (
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={isFirstStep}
                  className="h-11 px-5 rounded-md border border-gold-light/45 text-charcoal text-sm font-normal disabled:opacity-40 disabled:cursor-not-allowed hover:border-gold transition-colors"
                >
                  Volver
                </button>
              )}

              {!isLastStep && (
                <button
                  type="button"
                  onClick={nextStep}
                  className="h-11 px-6 rounded-md bg-charcoal text-white text-sm font-normal tracking-wide hover:bg-gold hover:text-charcoal transition-colors"
                >
                  Continuar
                </button>
              )}
            </div>

            {isLastStep && <OrderSummary mobile items={checkoutItems} totals={totals} showPayAction onMobileBack={prevStep} />}
          </div>

          <OrderSummary items={checkoutItems} totals={totals} showPayAction={isLastStep} />
        </section>
      </div>
    </div>
  )
}
