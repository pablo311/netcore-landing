export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-brand-300 mb-8 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Soluciones IT activas en Paraguay
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Software a medida e{' '}
          <span className="text-gradient">Inteligencia Artificial</span>{' '}
          para tu empresa
        </h1>

        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Desarrollamos soluciones tecnologicas personalizadas para PyMEs e industrias
          en Paraguay. Desde agentes IA hasta plataformas completas de gestion.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contacto"
            className="px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-brand-600/30 hover:shadow-brand-500/40 hover:-translate-y-0.5">
            Solicitar demo
          </a>
          <a href="#productos"
            className="px-8 py-4 glass glass-hover text-white font-semibold rounded-xl">
            Ver productos
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-sm mx-auto text-center">
          {[
            { value: '6+', label: 'Productos activos' },
            { value: '3+', label: 'Anos de experiencia' },
            { value: '24/7', label: 'Soporte y monitoreo' },
          ].map(s => (
            <div key={s.label}>
              <div className="text-2xl font-bold text-brand-400">{s.value}</div>
              <div className="text-xs text-slate-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0f1e] to-transparent" />
    </section>
  )
}
