import type { Metadata } from 'next'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'
import { Header } from '@/components/Header'

export const metadata: Metadata = {
  title: 'Essentials A&L - Joyería Artesanal',
  description: 'Descubre nuestra colección de joyas de lujo artesanal. Diseños exclusivos en oro, diamantes y piedras preciosas.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
  const whatsappMessage = encodeURIComponent('Hola, me gustaría recibir información sobre sus joyas.')
  const whatsappHref = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
    : `https://api.whatsapp.com/send?text=${whatsappMessage}`

  return (
    <html lang="es">
      <body className="relative bg-white text-charcoal overflow-x-hidden">
        <div className="pointer-events-none fixed inset-0 z-10 opacity-3 mix-blend-multiply" aria-hidden="true">
          <Image
            src="/iconos/separadores/Historia de Instagram Catalogo Delicado Pastel (1).svg"
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
        </div>

        <div className="relative z-10">
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </div>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
          className="fixed right-6 bottom-6 z-[60] h-14 w-14 rounded-full bg-charcoal text-white border border-gold-light/40 hover:bg-gold hover:text-charcoal transition-colors duration-300 flex items-center justify-center"
        >
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.52 3.48A11.83 11.83 0 0 0 12.1 0C5.57 0 .26 5.3.26 11.84c0 2.08.54 4.1 1.57 5.88L0 24l6.5-1.8a11.8 11.8 0 0 0 5.6 1.43h.01c6.53 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.13-3.43-8.31Zm-8.42 18.15h-.01a9.88 9.88 0 0 1-5.03-1.38l-.36-.21-3.86 1.07 1.03-3.76-.24-.38a9.86 9.86 0 0 1-1.52-5.25c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.12 1.02 6.98 2.88a9.8 9.8 0 0 1 2.9 6.98c0 5.45-4.44 9.88-9.89 9.88Zm5.42-7.42c-.3-.15-1.78-.88-2.06-.98-.27-.1-.47-.15-.66.15-.2.3-.76.98-.93 1.18-.17.2-.34.23-.64.08-.3-.15-1.25-.46-2.39-1.48a8.95 8.95 0 0 1-1.65-2.06c-.17-.3-.02-.46.13-.61.13-.13.3-.34.44-.51.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.66-.5h-.57c-.2 0-.5.08-.76.38-.26.3-.99.96-.99 2.35 0 1.38 1 2.72 1.15 2.9.15.2 1.97 3 4.78 4.2.67.3 1.2.47 1.6.6.67.21 1.28.18 1.76.11.54-.08 1.78-.73 2.03-1.43.25-.7.25-1.31.17-1.43-.07-.12-.27-.2-.57-.35Z" />
          </svg>
        </a>
      </body>
    </html>
  )
}
