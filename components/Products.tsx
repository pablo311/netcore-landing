const products = [
  {
    tag: 'Live',
    tagColor: 'bg-green-500/20 text-green-400',
    title: 'Alexander — Agente IA WhatsApp',
    desc: 'Agente IA 24/7 integrado con ERP, Gmail y Google Drive. Atiende clientes, genera presupuestos y monitorea cobranza por WhatsApp.',
    url: null,
    urlLabel: 'Coordinar demo',
    highlight: true,
  },
  {
    tag: 'Live',
    tagColor: 'bg-green-500/20 text-green-400',
    title: 'AbocatoPY — Asistente Legal IA',
    desc: 'Asistente legal con legislacion paraguaya completa: Constitucion, Codigo Civil, Penal, Laboral y Procesal. Respuestas instantaneas.',
    url: 'https://abocatopy-frontend-production.up.railway.app',
    urlLabel: 'Abrir AbocatoPY',
    highlight: false,
  },
  {
    tag: 'En desarrollo',
    tagColor: 'bg-yellow-500/20 text-yellow-400',
    title: 'SafetyAI — Seguridad Laboral IA',
    desc: 'Deteccion automatica de EPP (casco, chaleco, guantes) en obras de construccion. Alertas en tiempo real y dashboard de cumplimiento.',
    url: null,
    urlLabel: 'Coordinar demo',
    highlight: false,
  },
  {
    tag: 'Operativo',
    tagColor: 'bg-blue-500/20 text-blue-400',
    title: 'Syskore — ERP + CRM',
    desc: 'Gestion integral para PyMEs: clientes, facturacion, cotizaciones, stock, proyectos, gastos y KPIs. Integrado con agente IA 24/7.',
    url: null,
    urlLabel: 'Solicitar demo',
    highlight: false,
  },
  {
    tag: 'En desarrollo',
    tagColor: 'bg-yellow-500/20 text-yellow-400',
    title: 'E-Commerce Paraguay',
    desc: 'Tienda online completa con app movil iOS/Android. Pagos con Stripe y MercadoPago, panel de administracion y multiidioma.',
    url: null,
    urlLabel: 'Coordinar demo',
    highlight: false,
  },
  {
    tag: 'En desarrollo',
    tagColor: 'bg-yellow-500/20 text-yellow-400',
    title: 'Vendalia — Marketplace de Negocios',
    desc: 'Plataforma para comprar y vender negocios en Paraguay. NDA digital integrado, mensajeria entre partes y app movil.',
    url: null,
    urlLabel: 'Coordinar demo',
    highlight: false,
  },
]

export default function Products() {
  return (
    <section id="productos" className="py-24 px-4 sm:px-6 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-brand-400 font-medium text-sm uppercase tracking-widest mb-3">Portafolio</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Nuestros productos
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Productos propios ya operativos o en etapa avanzada de desarrollo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(p => (
            <div key={p.title}
              className={`glass glass-hover rounded-2xl p-6 flex flex-col ${
                p.highlight ? 'ring-1 ring-brand-500/40' : ''
              }`}>
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${p.tagColor}`}>
                  {p.tag}
                </span>
                {p.highlight && (
                  <span className="text-xs text-brand-400 font-medium">Producto estrella</span>
                )}
              </div>
              <h3 className="text-white font-semibold mb-2">{p.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed flex-1">{p.desc}</p>
              <div className="mt-5">
                <a
                  href={p.url ?? '#contacto'}
                  target={p.url ? '_blank' : undefined}
                  rel={p.url ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-400 hover:text-brand-300 transition-colors">
                  {p.urlLabel}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
