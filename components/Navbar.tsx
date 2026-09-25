'use client'
import { useState } from 'react'

const links = [
  { label: 'Segmentos',       href: '#segmentos' },
  { label: 'Portafolio',      href: '#portafolio' },
  { label: 'Cómo trabajamos', href: '#proceso' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-line/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a href="#" aria-label="Netcore, inicio">
          <img src="/brand/netcore-horizontal-light.svg" alt="Netcore" className="h-8 sm:h-9 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-9 text-[15px] font-medium">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-[#3A4450] hover:text-ink transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contacto" className="px-5 py-3 rounded-[10px] bg-ink text-white font-semibold hover:bg-navy transition-colors">
            Contacto
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          className="md:hidden p-2 -mr-2 text-ink">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-line bg-white px-4 py-4 flex flex-col gap-1">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="py-3 text-base text-ink">
              {l.label}
            </a>
          ))}
          <a href="#contacto" onClick={() => setOpen(false)}
            className="mt-2 py-3 text-center font-semibold bg-ink text-white rounded-[10px]">
            Contacto
          </a>
        </div>
      )}
    </nav>
  )
}
