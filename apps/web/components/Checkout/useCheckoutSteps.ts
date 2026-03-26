'use client'

import { useState } from 'react'
import { CheckoutStep } from './types'

const FIRST_STEP: CheckoutStep = 1
const LAST_STEP: CheckoutStep = 4

export function useCheckoutSteps() {
  const [currentStep, setCurrentStep] = useState<CheckoutStep>(FIRST_STEP)

  const nextStep = () => {
    setCurrentStep((prev) => (prev < LAST_STEP ? ((prev + 1) as CheckoutStep) : prev))
  }

  const prevStep = () => {
    setCurrentStep((prev) => (prev > FIRST_STEP ? ((prev - 1) as CheckoutStep) : prev))
  }

  const goToStep = (step: CheckoutStep) => {
    setCurrentStep((prev) => (step <= prev ? step : prev))
  }

  const isFirstStep = currentStep === FIRST_STEP
  const isLastStep = currentStep === LAST_STEP

  return {
    currentStep,
    nextStep,
    prevStep,
    goToStep,
    isFirstStep,
    isLastStep,
  }
}
