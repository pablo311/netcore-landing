import { WA_PRESUPUESTO } from '@/lib/site'

// Elemento firma: una tarjeta de informe de certificación, como la que
// entregamos por cada punto. Los datos son de ejemplo y lo dice.
const pruebas = [
  { id: 'P2-SW01-P12', largo: '38,4 m', margen: '6,1 dB' },
  { id: 'P2-SW01-P13', largo: '41,0 m', margen: '5,4 dB' },
  { id: 'P2-SW01-P14', largo: '44,7 m', margen: '4,8 dB' },
  { id: 'P2-SW01-P15', largo: '29,2 m', margen: '7,3 dB' },
]

function TarjetaInforme() {
  return (
    <figure className="w-full max-w-md rounded-2xl border border-white/10 bg-white p-5 text-ink shadow-2xl shadow-black/40 sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-acero">Informe de certificación</p>
          <p className="mt-1 font-display text-lg font-extrabold text-navy">TIA Cat 6 Channel</p>
        </div>
        <span className="rounded-full bg-niebla px-2.5 py-1 text-[11px] font-medium text-acero">Ejemplo</span>
      </div>

      <table className="mt-5 w-full text-left text-sm">
        <thead>
          <tr className="border-b border-slate-200 text-[11px] uppercase tracking-wider text-slate-500">
            <th className="pb-2 font-medium">Punto</th>
            <th className="pb-2 font-medium">Largo</th>
            <th className="pb-2 font-medium">Margen</th>
            <th className="pb-2 text-right font-medium">Resultado</th>
          </tr>
        </thead>
        <tbody>
          {pruebas.map((p) => (
            <tr key={p.id} className="border-b border-slate-100 last:border-0">
              <td className="py-2.5 font-mono text-[13px] text-navy">{p.id}</td>
              <td className="py-2.5 text-slate-600">{p.largo}</td>
              <td className="py-2.5 text-slate-600">{p.margen}</td>
              <td className="py-2.5 text-right">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-verde/25 px-2 py-0.5 text-xs font-bold text-[#2F5D17]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#3E7A1F]" aria-hidden="true" />
                  PASS
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <figcaption className="mt-4 border-t border-slate-200 pt-3 text-xs leading-relaxed text-slate-500">
        Medido con equipos Fluke. Cada punto queda con su resultado, largo y margen en el informe que te entregamos.
      </figcaption>
    </figure>
  )
}

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
          <TarjetaInforme />
        </div>
      </div>
    </section>
  )
}
