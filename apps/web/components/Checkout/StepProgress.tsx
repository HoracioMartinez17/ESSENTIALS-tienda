import { CheckoutStep } from './types'

type StepProgressProps = {
  currentStep: CheckoutStep
  onBackToStep: (step: CheckoutStep) => void
}

const steps: Array<{ id: CheckoutStep; label: string }> = [
  { id: 1, label: 'Contacto' },
  { id: 2, label: 'Envio' },
  { id: 3, label: 'Pago' },
  { id: 4, label: 'Confirmacion' },
]

export default function StepProgress({ currentStep, onBackToStep }: StepProgressProps) {
  return (
    <div className="border border-gold-light/40 rounded-lg p-4 sm:p-5 bg-white">
      <div className="grid grid-cols-4 gap-2">
        {steps.map((step) => {
          const isActive = step.id === currentStep
          const isCompleted = step.id < currentStep
          const isClickable = step.id <= currentStep

          return (
            <button
              key={step.id}
              type="button"
              onClick={() => isClickable && onBackToStep(step.id)}
              className={`rounded-md px-2 py-2 text-[11px] sm:text-xs font-normal transition-colors ${
                isActive
                  ? 'bg-charcoal text-white'
                  : isCompleted
                    ? 'bg-gold-light/35 text-charcoal hover:bg-gold-light/45'
                    : 'bg-cream/50 text-charcoal/60 cursor-default'
              }`}
            >
              <span className="block leading-tight">Paso {step.id}</span>
              <span className="block leading-tight mt-0.5">{step.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
