export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">

      {/* Layered background */}
      <div className="absolute inset-0 bg-navy-DEFAULT" />
      <div className="absolute inset-0 grid-bg opacity-60" />
      {/* Radial glow — off-center for depth */}
      <div className="absolute top-1/4 left-1/3 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,209,255,0.12) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,65,255,0.08) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">

        {/* Pill badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-electric text-xs text-electric-DEFAULT mb-10 font-medium tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-electric-DEFAULT animate-pulse-glow" />
          Soluciones IT activas en Paraguay
        </div>

        {/* Headline — large typographic scale */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6">
          <span className="text-white">Software e </span>
          <span className="text-gradient">Inteligencia Artificial</span>
          <br />
          <span className="text-white">para tu empresa</span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          Desarrollamos soluciones tecnológicas personalizadas para PyMEs e industrias
          en Paraguay — desde agentes IA hasta plataformas completas de gestión.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <a href="#contacto"
            className="px-8 py-4 bg-electric-DEFAULT hover:bg-electric-dim text-navy-DEFAULT font-bold rounded-xl transition-all duration-200 shadow-lg shadow-electric-DEFAULT/25 hover:shadow-electric-DEFAULT/40 hover:-translate-y-1 text-base">
            Solicitar demo
          </a>
          <a href="#productos"
            className="px-8 py-4 glass glass-hover text-white font-semibold rounded-xl text-base">
            Ver productos →
          </a>
        </div>

        {/* Stats bar */}
        <div className="inline-flex flex-wrap justify-center gap-8 sm:gap-16 glass rounded-2xl px-10 py-6">
          {[
            { value: '4+',   label: 'Productos propios' },
            { value: '3+',   label: 'Años de experiencia' },
            { value: '24/7', label: 'Soporte & monitoreo' },
            { value: 'PY',   label: 'Made in Paraguay' },
          ].map(s => (
            <div key={s.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-black text-electric-DEFAULT">{s.value}</div>
              <div className="text-xs text-slate-400 mt-1 font-medium uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-navy-DEFAULT to-transparent" />

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500">
        <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7"/>
        </svg>
      </div>
    </section>
  )
}
