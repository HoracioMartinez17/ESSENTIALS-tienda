'use client'

import Link from 'next/link'
import { useState } from 'react'
import BrandLogo from './BrandLogo'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const navLinks = [
    { href: '/product', label: 'Productos' },
    { href: '/#collections', label: 'Colecciones' },
    { href: '/#bestsellers', label: 'Mas vendidos' },
    { href: '/#historia', label: 'Historia' },
    { href: '/cart', label: 'Carrito' },
  ]

  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="fixed w-full top-0 z-50 bg-white border-b border-gold-light/30">
      {/*annnouncement bar */}
      <div className="bg-zinc-900 text-white text-xs py-2 text-center">
        ⚠️ Solo hacemos envios a la peninsula iberica
      </div>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <BrandLogo />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-12 font-normal tracking-wide text-sm">
          <Link href="/product" className="text-charcoal hover:text-gold transition-colors">
            Productos
          </Link>
          <Link href="/#collections" className="text-charcoal hover:text-gold transition-colors">
            Colecciones
          </Link>
          <Link href="/#bestsellers" className="text-charcoal hover:text-gold transition-colors">
            Mas vendidos
          </Link>
          <Link href="/#historia" className="text-charcoal hover:text-gold transition-colors">
            Historia
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          <Link href="/cart" className="text-charcoal hover:text-gold transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4l1-12z" />
            </svg>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-charcoal"
            aria-label={isOpen ? 'Cerrar menu' : 'Abrir menu'}
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 6l12 12M6 18L18 6" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`md:hidden fixed inset-0 z-[70] transition-all duration-300 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        <button
          type="button"
          onClick={closeMenu}
          aria-label="Cerrar menu lateral"
          className={`absolute inset-0 bg-charcoal/55 transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <aside
          className={`absolute top-0 right-0 h-full w-[86%] max-w-[360px] bg-white border-l border-gold-light/45 shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="px-6 pt-20 pb-5 border-b border-gold-light/35 relative flex justify-center">
            <button
              type="button"
              onClick={closeMenu}
              aria-label="Cerrar menu"
              className="absolute top-6 right-6 w-9 h-9 rounded-full border border-gold-light/45 text-charcoal/75 hover:text-gold hover:border-gold transition-colors flex items-center justify-center"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 6l12 12M6 18L18 6" />
              </svg>
            </button>
            <Link href="/" onClick={closeMenu} className="inline-flex justify-center">
              <BrandLogo size="sm" />
            </Link>
          </div>

          <div className="px-6 py-6 space-y-2">
            {navLinks.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                style={{ transitionDelay: `${index * 45}ms` }}
                className={`group flex items-center justify-between rounded-lg px-4 py-3 border border-gold-light/35 bg-white text-charcoal hover:text-gold hover:border-gold/60 transition-all duration-300 ${
                  isOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                }`}
              >
                <span className="text-base font-normal">{item.label}</span>
                <span className="text-charcoal/35 group-hover:text-gold transition-colors">→</span>
              </Link>
            ))}
          </div>

          <div className="mt-auto px-6 py-6 border-t border-gold-light/35 bg-cream/20">
            <p className="text-[11px] uppercase tracking-[0.2em] text-charcoal/55 mb-4">Siguenos</p>
            <div className="flex items-center gap-4">
              <Link href="#" aria-label="Instagram" className="w-10 h-10 rounded-full border border-gold-light/45 text-charcoal/70 hover:text-gold hover:border-gold transition-colors flex items-center justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5zm8.95 1.55a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4z" />
                </svg>
              </Link>

              <Link href="#" aria-label="Facebook" className="w-10 h-10 rounded-full border border-gold-light/45 text-charcoal/70 hover:text-gold hover:border-gold transition-colors flex items-center justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.5 22v-8h2.7l.45-3h-3.15V9.1c0-.9.3-1.5 1.65-1.5h1.65V4.9c-.3 0-1.35-.15-2.55-.15-2.55 0-4.2 1.5-4.2 4.35V11H7v3h2.7v8h3.8z" />
                </svg>
              </Link>

              <Link href="#" aria-label="TikTok" className="w-10 h-10 rounded-full border border-gold-light/45 text-charcoal/70 hover:text-gold hover:border-gold transition-colors flex items-center justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.9 3c.2 1.7 1.2 3.2 2.8 4 .9.5 1.9.7 2.9.7v3a8.5 8.5 0 0 1-2.9-.5v5.9a6.1 6.1 0 1 1-6.1-6.1c.4 0 .7 0 1.1.1v3.1a3.1 3.1 0 1 0 2 2.9V3h3.2z" />
                </svg>
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </nav>
  )
}
