import { WA_PRESUPUESTO } from '@/lib/site'
import InformeDemo from '@/components/InformeDemo'
import Marcas from '@/components/Marcas'

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-navy pb-20 pt-28 text-white sm:pb-24 sm:pt-36">
      <div className="trama absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 px-3.5 py-1.5 text-xs font-medium text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-teal" aria-hidden="true" />
            Infraestructura de red para empresas y edificios
          </p>
          <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Cableado estructurado y fibra óptica en Asunción,{' '}
            <span className="text-primario">instalado y certificado.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            Tendemos tu red UTP Cat6 y fibra, armamos racks, instalamos cámaras y te entregamos cada punto
            certificado con equipos Fluke. Trabajamos de noche o por etapas para que tu negocio no pare.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={WA_PRESUPUESTO} target="_blank" rel="noopener noreferrer" className="btn-primario text-base">
              Pedir presupuesto por WhatsApp
            </a>
            <a href="#servicios" className="btn-secundario text-base">
              Ver servicios
            </a>
          </div>
          <p className="mt-4 text-sm text-white/60">Presupuesto sin cargo y detallado, ítem por ítem.</p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <InformeDemo />
        </div>
      </div>
      <Marcas />
    </section>
  )
}
