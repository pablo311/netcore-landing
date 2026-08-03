function NetcoreLogoSmall() {
  return (
    <svg viewBox="0 0 160 32" className="h-7 w-auto" role="img" aria-label="Netcore Technology" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="15" y1="6"  x2="5"  y2="24" stroke="#00D1FF" strokeWidth="1.2" strokeOpacity="0.35" strokeLinecap="round"/>
      <line x1="15" y1="6"  x2="25" y2="24" stroke="#00D1FF" strokeWidth="1.2" strokeOpacity="0.35" strokeLinecap="round"/>
      <line x1="5"  y1="24" x2="25" y2="24" stroke="#00D1FF" strokeWidth="1.2" strokeOpacity="0.35" strokeLinecap="round"/>
      <line x1="15" y1="17" x2="15" y2="8"  stroke="#00D1FF" strokeWidth="1.4" strokeOpacity="0.8"  strokeLinecap="round"/>
      <line x1="15" y1="17" x2="7"  y2="22" stroke="#00D1FF" strokeWidth="1.4" strokeOpacity="0.8"  strokeLinecap="round"/>
      <line x1="15" y1="17" x2="23" y2="22" stroke="#00D1FF" strokeWidth="1.4" strokeOpacity="0.8"  strokeLinecap="round"/>
      <circle cx="15" cy="6"  r="2"   fill="#00D1FF" opacity="0.8"/>
      <circle cx="5"  cy="24" r="2"   fill="#00D1FF" opacity="0.8"/>
      <circle cx="25" cy="24" r="2"   fill="#00D1FF" opacity="0.8"/>
      <circle cx="15" cy="17" r="2.8" fill="#00D1FF"/>
      <circle cx="15" cy="17" r="1.2" fill="#0A2540"/>
      <text x="34" y="21" fontFamily="'Inter','Segoe UI',Arial,sans-serif" fontWeight="700" fontSize="13" fill="#FFFFFF" letterSpacing="0.5">NETCORE</text>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">

        <NetcoreLogoSmall />

        <p className="text-slate-600 text-sm">
          &copy; {new Date().getFullYear()} Netcore Technology EAS — Asunción, Paraguay
        </p>

        <div className="flex items-center gap-6 text-sm text-slate-500">
          <a href="#servicios" className="hover:text-slate-300 transition-colors">Servicios</a>
          <a href="#productos" className="hover:text-slate-300 transition-colors">Productos</a>
          <a href="#contacto"  className="hover:text-slate-300 transition-colors">Contacto</a>
        </div>
      </div>
    </footer>
  )
}
