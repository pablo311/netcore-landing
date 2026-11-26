'use client'
import { useEffect, useState } from 'react'
import { WA_PRESUPUESTO } from '@/lib/site'

const links = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Cómo trabajamos', href: '#proceso' },
  { label: 'Obras', href: '#obras' },
  { label: 'Preguntas', href: '#preguntas' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'bg-navy/95 shadow-lg shadow-black/20 backdrop-blur' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6" aria-label="Principal">
        <a href="#inicio" className="flex items-center" aria-label="Netcore Technology, inicio">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/netcore-horizontal-dark.svg" alt="Netcore" className="h-8 w-auto" width={138} height={40} />
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-white/80 transition hover:text-white">
              {l.label}
            </a>
          ))}
          <a href={WA_PRESUPUESTO} target="_blank" rel="noopener noreferrer" className="btn-primario px-4 py-2 text-sm">
            Pedir presupuesto
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="p-1 text-white md:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div id="menu-movil" className="border-t border-white/10 px-4 pb-5 pt-2 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-white/85 hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WA_PRESUPUESTO}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primario mt-3 w-full"
            onClick={() => setOpen(false)}
          >
            Pedir presupuesto
          </a>
        </div>
      )}
    </header>
  )
}
