const faqs = [
  {
    q: '¿Trabajan con empresas chicas?',
    a: 'Sí. Pensamos nuestros servicios para PyMEs y empresas medianas de Paraguay. Arrancamos por lo que más tiempo o plata te está costando hoy.',
  },
  {
    q: '¿Cómo se cotiza un proyecto?',
    a: 'Después de una reunión de diagnóstico te pasamos una propuesta por escrito con alcance, plazos y costo, antes de empezar.',
  },
  {
    q: '¿Puedo contratar solo infraestructura o solo una automatización?',
    a: 'Sí. Cada segmento se contrata por separado. Si más adelante necesitás otro, ya conocemos tu operación.',
  },
  {
    q: '¿Qué pasa después de la entrega?',
    a: 'Seguimos con vos: soporte directo con el equipo que lo construyó, ajustes y mejoras continuas.',
  },
]

export default function Faq() {
  return (
    <section id="preguntas" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-8 lg:gap-16 scroll-mt-24">
      <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-[-0.02em]">Preguntas frecuentes</h2>
      <div className="flex flex-col border-t border-line">
        {faqs.map(f => (
          <details key={f.q} className="group border-b border-line">
            <summary className="flex items-center justify-between gap-6 py-5 cursor-pointer list-none font-semibold text-lg [&::-webkit-details-marker]:hidden">
              {f.q}
              <span className="text-2xl leading-none text-nc-steel transition-transform group-open:rotate-45" aria-hidden="true">+</span>
            </summary>
            <p className="pb-5 -mt-1 text-[16px] leading-relaxed text-muted max-w-2xl">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
