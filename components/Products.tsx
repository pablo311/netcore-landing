const products = [
  {
    status: 'Operativo',
    statusColor: 'text-electric-DEFAULT bg-electric-glow border border-electric-DEFAULT/20',
    name: 'Syskore',
    tagline: 'ERP INTELLIGENCE',
    desc: 'Sistema ERP inteligente con agente IA integrado por WhatsApp. Gestión de clientes, facturación, stock, proyectos y KPIs — todo desde el chat.',
    accent: '#00C896',
    url: 'https://syskore.netcoretec.com.py',
    urlLabel: 'Solicitar demo',
  },
  {
    status: 'Live',
    statusColor: 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/20',
    name: 'Abocato',
    tagline: 'ASISTENTE LEGAL IA',
    desc: 'Consultas legales en lenguaje simple con IA. Legislación paraguaya completa: Constitución, Código Civil, Penal, Laboral y Procesal.',
    accent: '#F4A300',
    url: 'https://abocato.com',
    urlLabel: 'Abrir Abocato',
  },
  {
    status: 'En desarrollo',
    statusColor: 'text-amber-400 bg-amber-500/10 border border-amber-500/20',
    name: 'Vendalia',
    tagline: 'VENTAS INTELIGENTES',
    desc: 'Plataforma inteligente para gestión de ventas y comercio. App web + móvil para vendedores, comerciantes y emprendedores que quieren vender más.',
    accent: '#FF5E3A',
    url: null,
    urlLabel: 'Coordinar demo',
  },
  {
    status: 'En desarrollo',
    statusColor: 'text-amber-400 bg-amber-500/10 border border-amber-500/20',
    name: 'SafetyAI',
    tagline: 'VISION INTELLIGENCE',
    desc: 'Detección visual en tiempo real de riesgos de seguridad industrial. EPP, zonas peligrosas y alertas automáticas 24/7 sin operadores humanos.',
    accent: '#00B4A6',
    url: null,
    urlLabel: 'Coordinar demo',
  },
]

export default function Products() {
  return (
    <section id="productos" className="py-28 px-4 sm:px-6 section-divider">
      <div className="max-w-6xl mx-auto">

        <div className="mb-16">
          <p className="text-electric-DEFAULT font-semibold text-xs uppercase tracking-[0.2em] mb-3">Portafolio</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            Nuestros productos
          </h2>
          <p className="text-slate-400 mt-4 max-w-lg text-lg font-light">
            Soluciones propias activas o en desarrollo avanzado.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {products.map(p => (
            <div key={p.name}
              className="glass glass-hover rounded-2xl p-7 flex flex-col group relative overflow-hidden">

              {/* Accent glow on hover */}
              <div
                className="absolute -top-16 -right-16 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle, ${p.accent}18 0%, transparent 70%)` }}
              />

              <div className="flex items-center justify-between mb-5">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${p.statusColor}`}>
                  {p.status}
                </span>
              </div>

              {/* Product identity */}
              <div className="mb-4">
                <h3 className="text-2xl font-black text-white leading-none" style={{ color: p.accent }}>
                  {p.name}
                </h3>
                <p className="text-[10px] font-semibold tracking-[0.2em] text-slate-500 mt-1">
                  {p.tagline}
                </p>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed flex-1">{p.desc}</p>

              <div className="mt-6 pt-5 border-t border-white/[0.06]">
                <a
                  href={p.url ?? '#contacto'}
                  target={p.url ? '_blank' : undefined}
                  rel={p.url ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200"
                  style={{ color: p.accent }}>
                  {p.urlLabel}
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
