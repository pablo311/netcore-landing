'use client'
import { useState, useEffect } from 'react'

const links = [
  { label: 'Servicios',  href: '#servicios' },
  { label: 'Productos',  href: '#productos' },
  { label: 'Nosotros',   href: '#nosotros' },
  { label: 'Contacto',   href: '#contacto' },
]

/* Inline SVG logo — network-core icon + wordmark */
function NetcoreLogo({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 40"
      className={className}
      role="img"
      aria-label="Netcore Technology"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Icon: triangle network + core node */}
      <line x1="19" y1="8"  x2="7"  y2="30" stroke="#00D1FF" strokeWidth="1.4" strokeOpacity="0.35" strokeLinecap="round"/>
      <line x1="19" y1="8"  x2="31" y2="30" stroke="#00D1FF" strokeWidth="1.4" strokeOpacity="0.35" strokeLinecap="round"/>
      <line x1="7"  y1="30" x2="31" y2="30" stroke="#00D1FF" strokeWidth="1.4" strokeOpacity="0.35" strokeLinecap="round"/>
      <line x1="19" y1="21" x2="19" y2="10" stroke="#00D1FF" strokeWidth="1.6" strokeOpacity="0.8"  strokeLinecap="round"/>
      <line x1="19" y1="21" x2="9"  y2="28" stroke="#00D1FF" strokeWidth="1.6" strokeOpacity="0.8"  strokeLinecap="round"/>
      <line x1="19" y1="21" x2="29" y2="28" stroke="#00D1FF" strokeWidth="1.6" strokeOpacity="0.8"  strokeLinecap="round"/>
      {/* Outer nodes */}
      <circle cx="19" cy="8"  r="2.5" fill="#00D1FF" opacity="0.8"/>
      <circle cx="7"  cy="30" r="2.5" fill="#00D1FF" opacity="0.8"/>
      <circle cx="31" cy="30" r="2.5" fill="#00D1FF" opacity="0.8"/>
      {/* Core node */}
      <circle cx="19" cy="21" r="3.5" fill="#00D1FF"/>
      <circle cx="19" cy="21" r="1.5" fill="#0A2540"/>
      {/* Wordmark */}
      <text
        x="42" y="26"
        fontFamily="'Inter','Segoe UI',Arial,sans-serif"
        fontWeight="700"
        fontSize="16"
        fill="#FFFFFF"
        letterSpacing="0.5"
      >NETCORE</text>
    </svg>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass border-b border-white/10 shadow-lg shadow-black/20' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#" className="flex items-center">
            <NetcoreLogo className="h-9 w-auto" />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <a key={l.href} href={l.href}
                className="text-sm text-slate-300 hover:text-white transition-colors duration-200">
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="px-4 py-2 text-sm font-semibold bg-electric-DEFAULT hover:bg-electric-dim text-navy-DEFAULT rounded-lg transition-all duration-200 shadow-md shadow-electric-DEFAULT/20 hover:shadow-electric-DEFAULT/30 hover:-translate-y-0.5">
              Hablar con nosotros
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-slate-300 hover:text-white p-1">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass border-t border-white/10 px-4 py-4 space-y-1">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block py-2.5 text-sm text-slate-300 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contacto" onClick={() => setOpen(false)}
            className="block w-full text-center py-2.5 text-sm font-semibold bg-electric-DEFAULT text-navy-DEFAULT rounded-lg mt-3">
            Hablar con nosotros
          </a>
        </div>
      )}
    </nav>
  )
}
