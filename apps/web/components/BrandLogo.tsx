type BrandLogoProps = {
  size?: 'sm' | 'md'
  className?: string
}

export default function BrandLogo({ size = 'md', className = '' }: BrandLogoProps) {
  const textSize = size === 'sm' ? 'text-lg' : 'text-xl sm:text-2xl'
  const barHeight = size === 'sm' ? 'h-5' : 'h-6'

  return (
    <div className={`flex items-center gap-2 ${className}`.trim()}>
      <div className={`${textSize} font-serif font-bold text-charcoal tracking-wide whitespace-nowrap leading-tight`}>
        ESSENTIALS A&L
      </div>
      <div className={`w-1 ${barHeight} bg-gradient-to-b from-gold to-gold-light`} />
    </div>
  )
}
