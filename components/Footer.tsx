import { EMPRESA } from '@/lib/site'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-dark py-10 text-white/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 text-sm sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/netcore-horizontal-dark.svg" alt="Netcore" className="h-7 w-auto" width={120} height={34} loading="lazy" />
        </div>
        <p>
          © {new Date().getFullYear()} {EMPRESA.razonSocial} · RUC {EMPRESA.ruc}
        </p>
        <nav className="flex flex-wrap gap-5" aria-label="Pie de página">
          <a href="/#servicios" className="hover:text-white">Servicios</a>
          <a href="/#obras" className="hover:text-white">Obras</a>
          <a href="/#contacto" className="hover:text-white">Contacto</a>
          <a href="/privacidad" className="hover:text-white">Privacidad</a>
        </nav>
      </div>
    </footer>
  )
}
