const segments = [
  {
    id: 'infraestructura',
    title: 'Infraestructura',
    desc: 'La base para que tus sistemas estén siempre disponibles.',
    items: ['Cloud y servidores', 'Deploy y DevOps', 'Monitoreo y respaldos', 'Soporte directo'],
    fit: 'Ideal si tu sistema se cae, anda lento o nadie sabe dónde está alojado.',
    bar: 'bg-nc-steel',
    tag: 'text-nc-steel',
  },
  {
    id: 'desarrollo',
    title: 'Desarrollo',
    desc: 'Software a medida de tus procesos, del prototipo a producción.',
    items: ['Apps web y móviles', 'Sistemas de gestión', 'Integraciones y APIs', 'Tableros y reportes'],
    fit: 'Ideal si trabajás con planillas que ya no alcanzan o necesitás una app propia.',
    bar: 'bg-nc-cyan',
    tag: 'text-[#1D7F99]',
  },
  {
    id: 'automatizaciones',
    title: 'Automatizaciones',
    desc: 'IA que hace el trabajo repetitivo por tu equipo, 24/7.',
    items: ['Agentes de IA por WhatsApp', 'Cobranza y facturación', 'Reportes automáticos', 'Visión por computadora'],
    fit: 'Ideal si tu equipo repite las mismas tareas todos los días.',
    bar: 'bg-nc-green',
    tag: 'text-[#4F7F32]',
  },
]

export default function Segments() {
  return (
    <section id="segmentos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28 scroll-mt-24 flex flex-col gap-10">
      <div className="flex flex-col gap-3 max-w-3xl">
        <p className="text-[13px] font-semibold tracking-[4px] text-nc-steel">SEGMENTOS</p>
        <p className="font-display font-extrabold text-3xl sm:text-[44px] leading-[1.05] tracking-[-0.02em]">
          Tres formas de ayudarte. Podés empezar por cualquiera.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-4 sm:gap-5">
        {segments.map(s => (
          <article key={s.id} id={s.id} className="rounded-3xl bg-mist p-7 sm:p-9 flex flex-col gap-5 scroll-mt-24">
            <span className={`h-1.5 w-12 rounded-full ${s.bar}`} />
            <div className="flex flex-col gap-2">
              <h2 className="font-display font-extrabold text-3xl lg:text-[34px] tracking-[-0.02em] break-words">{s.title}</h2>
              <p className="text-[17px] leading-relaxed text-muted">{s.desc}</p>
            </div>
            <ul className="flex flex-col border-t border-line">
              {s.items.map(i => (
                <li key={i} className="py-3 border-b border-line text-[15px] font-medium flex items-center gap-2.5">
                  <span className={`text-xs ${s.tag}`} aria-hidden="true">●</span>
                  {i}
                </li>
              ))}
            </ul>
            <p className="mt-auto text-[15px] leading-relaxed text-ink font-medium">{s.fit}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
