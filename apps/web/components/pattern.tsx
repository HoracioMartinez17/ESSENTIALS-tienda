export default function Pattern() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden futuristic-pattern" aria-hidden="true">
      <svg className="absolute w-0 h-0" focusable="false" aria-hidden="true">
        <defs>
          <filter id="advanced-texture">
            <feTurbulence result="noise" numOctaves={3} baseFrequency="0.7" type="fractalNoise" />
            <feSpecularLighting result="specular" lightingColor="#fff" specularExponent={20} specularConstant="0.8" surfaceScale={2} in="noise">
              <fePointLight z="100" y="50" x="50" />
            </feSpecularLighting>
            <feComposite result="litNoise" operator="in" in2="SourceGraphic" in="specular" />
            <feBlend mode="overlay" in2="litNoise" in="SourceGraphic" />
          </filter>
        </defs>
      </svg>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_44%,rgba(255,255,255,0.8),transparent_46%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_62%,rgba(249,185,92,0.14),transparent_50%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gold/10" />
    </div>
  )
}
