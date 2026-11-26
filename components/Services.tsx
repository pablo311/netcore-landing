import { Cable, Camera, Code2, PackageSearch, Server, Wifi, Workflow } from 'lucide-react'
import Reveal from '@/components/Reveal'

// Dibujo de una patchera: cada boca con su luz de estado.
function Patchera() {
  return (
    <div className="mt-6 rounded-xl bg-navy p-4" aria-hidden="true">
      <div className="grid grid-cols-12 gap-1.5">
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <span className={`h-1 w-1 rounded-full ${i === 17 ? 'bg-primario' : 'bg-verde'}`} />
            <span className="h-4 w-full rounded-[3px] border border-white/20 bg-white/[0.06]" />
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between text-[11px] text-white/60">
        <span>Patchera 24 bocas</span>
        <span className="flex items-center gap-3">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-verde" /> Certificado
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primario" /> En prueba
          </span>
        </span>
      </div>
    </div>
  )
}

// Dibujo de un enlace de fibra entre dos racks, con un pulso de luz.
function EnlaceFibra() {
  return (
    <svg viewBox="0 0 320 90" className="mt-6 w-full" aria-hidden="true">
      <defs>
        <linearGradient id="fibra" x1="0" x2="1">
          <stop offset="0" stopColor="#47A1DD" />
          <stop offset="0.5" stopColor="#0CB8B3" />
          <stop offset="1" stopColor="#9AC77D" />
        </linearGradient>
      </defs>
      <rect x="2" y="18" width="46" height="56" rx="6" fill="#0A2540" />
      <rect x="272" y="18" width="46" height="56" rx="6" fill="#0A2540" />
      {[30, 42, 54].map((y) => (
        <g key={y}>
          <rect x="10" y={y} width="30" height="5" rx="2" fill="#ffffff" opacity="0.18" />
          <rect x="280" y={y} width="30" height="5" rx="2" fill="#ffffff" opacity="0.18" />
        </g>
      ))}
      <path d="M48 46 C 110 8, 210 84, 272 46" fill="none" stroke="url(#fibra)" strokeWidth="3" opacity="0.35" strokeLinecap="round" />
      <path d="M48 46 C 110 8, 210 84, 272 46" fill="none" stroke="url(#fibra)" strokeWidth="3" strokeLinecap="round" className="pulso-fibra" />
      <text x="25" y="88" textAnchor="middle" fontSize="9" fill="#4780A7">Rack A</text>
      <text x="295" y="88" textAnchor="middle" fontSize="9" fill="#4780A7">Rack B</text>
    </svg>
  )
}

const chicos = [
  {
    icono: Server,
    titulo: 'Racks y switches',
    texto: 'Montaje y ordenamiento de racks, patcheras, organizadores y switches, con todo etiquetado.',
  },
  {
    icono: Camera,
    titulo: 'Cámaras y seguridad',
    texto: 'Cámaras IP con grabador, botones de pánico y alarmas inalámbricas para oficinas, edificios y comercios.',
  },
  {
    icono: Wifi,
    titulo: 'WiFi para empresas',
    texto: 'Cobertura pensada para el lugar, con equipos administrables para que la señal llegue donde se trabaja.',
  },
  {
    icono: PackageSearch,
    titulo: 'Equipos y materiales',
    texto: 'PCs, switches, cable y accesorios con compra en Ciudad del Este o importación a pedido.',
  },
]

const otros = [
  {
    icono: Code2,
    titulo: 'Desarrollo',
    texto: 'Sistemas y apps a medida para ordenar procesos de tu empresa, desde cotizaciones hasta reportes.',
  },
  {
    icono: Workflow,
    titulo: 'Automatizaciones',
    texto: 'Atención por WhatsApp, avisos y tareas repetitivas que se hacen solas, conectadas con lo que ya usás.',
  },
]

const tarjeta = 'h-full rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-primario/60 hover:shadow-lg hover:shadow-navy/5'

export default function Services() {
  return (
    <section id="servicios" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Servicios</p>
          <h2 className="titulo-seccion mt-3">Toda la red de tu empresa, con un solo responsable</h2>
          <p className="mt-4 text-lg text-slate-600">
            Desde el relevamiento hasta el último informe. Vos tenés un solo contacto y un presupuesto claro.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-6">
          <Reveal className="lg:col-span-4">
            <article className={tarjeta}>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primario/15 text-enlace">
                  <Cable className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-display text-xl font-extrabold text-navy">Cableado UTP Cat6 certificado</h3>
              </div>
              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-slate-600">
                Puestos de red nuevos o recableado de los que fallan. Cada punto se certifica con equipos Fluke y
                queda en el informe.
              </p>
              <Patchera />
            </article>
          </Reveal>

          <Reveal className="lg:col-span-2" delay={0.08}>
            <article className={tarjeta}>
              <h3 className="font-display text-xl font-extrabold text-navy">Fibra óptica</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                Tendido de fibra monomodo entre edificios, pisos o racks, fusiones y enlace funcionando con tus
                switches.
              </p>
              <EnlaceFibra />
            </article>
          </Reveal>

          {chicos.map((s, i) => (
            <Reveal key={s.titulo} className="sm:col-span-1 lg:col-span-3" delay={0.05 * (i % 2)}>
              <article className={`${tarjeta} flex gap-4`}>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-niebla text-acero">
                  <s.icono className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-navy">{s.titulo}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-slate-600">{s.texto}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {otros.map((s) => (
            <Reveal key={s.titulo}>
              <article className="flex h-full gap-4 rounded-2xl bg-niebla p-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-acero">
                  <s.icono className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-acero">{s.titulo}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate-700">{s.texto}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
