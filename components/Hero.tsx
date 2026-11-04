const layers = [
  { name: 'Automatizaciones', eg: 'Agentes de IA · Cobranza · Reportes', bar: 'bg-nc-green', offset: 'lg:ml-16' },
  { name: 'Desarrollo',       eg: 'Apps · Sistemas de gestión · APIs',   bar: 'bg-nc-cyan',  offset: 'lg:ml-8' },
  { name: 'Infraestructura',  eg: 'Cloud · DevOps · Monitoreo',          bar: 'bg-nc-steel', offset: '' },
]

const proof = [
  'Equipo en Asunción',
  'Abocato en producción',
  'Soporte directo por WhatsApp',
]

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-16 sm:pb-24 grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] gap-12 lg:gap-16 items-center">
      <div className="flex flex-col gap-7">
        <p className="flex items-center gap-2.5 text-sm font-medium text-nc-steel">
          <span className="w-2 h-2 rounded-full bg-nc-teal" />
          Netcore Technology · Hecho en Paraguay
        </p>
        <h1 className="font-display font-extrabold text-[38px] sm:text-6xl xl:text-[76px] leading-[0.98] tracking-[-0.03em] text-ink break-words">
          Infraestructura, desarrollo y automatizaciones para empresas de acá.
        </h1>
        <p className="text-lg sm:text-xl leading-relaxed text-muted max-w-xl">
          Montamos la base tecnológica de tu empresa, construimos el software que necesita
          y automatizamos lo que hoy se hace a mano.
        </p>
        <div className="flex flex-col sm:flex-row gap-3.5 mt-1">
          <a href="#contacto" className="px-7 py-4 rounded-xl bg-ink text-white font-semibold text-center hover:bg-navy transition-colors">
            Hablemos de tu proyecto
          </a>
          <a href="#portafolio" className="px-7 py-4 rounded-xl border-[1.5px] border-ink text-ink font-semibold text-center hover:bg-mist transition-colors">
            Ver portafolio
          </a>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-5 border-t border-line text-sm text-[#5A6573]">
          {proof.map(p => (
            <li key={p} className="flex items-center gap-2">
              <svg className="w-4 h-4 text-nc-teal" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {p}
            </li>
          ))}
        </ul>
      </div>

      {/* Las tres capas de servicio, de la base hacia arriba */}
      <div className="relative rounded-[28px] border border-line p-5 sm:p-8 bg-white overflow-hidden"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(71,128,167,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(71,128,167,0.07) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}>
        <div className="flex flex-col gap-3">
          {layers.map(l => (
            <a key={l.name} href={`#${l.name.toLowerCase()}`}
              className={`${l.offset} group bg-white rounded-2xl border border-line shadow-[0_1px_0_rgba(17,18,18,0.04)] p-4 sm:p-5 flex items-center gap-4 hover:border-nc-steel transition-colors`}>
              <span className={`w-1.5 self-stretch rounded-full ${l.bar}`} />
              <span className="flex flex-col gap-1 min-w-0">
                <span className="font-display font-bold text-xl sm:text-2xl text-ink">{l.name}</span>
                <span className="text-sm text-[#5A6573]">{l.eg}</span>
              </span>
              <span className="ml-auto text-nc-link opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true">→</span>
            </a>
          ))}
        </div>
        <p className="mt-5 text-xs tracking-[3px] text-nc-steel">UNA SOLA EMPRESA PARA LAS TRES CAPAS</p>
      </div>
    </section>
  )
}
