const reasons = [
  {
    title: 'Equipo local, mentalidad global',
    desc: 'Somos de Paraguay y entendemos el mercado local. Pero desarrollamos con estandares internacionales y las ultimas tecnologias.',
  },
  {
    title: 'IA integrada desde el dia 1',
    desc: 'No agregamos IA como extra. La construimos dentro del producto desde el inicio para que realmente genere valor operativo.',
  },
  {
    title: 'Entrega rapida, sin burocracia',
    desc: 'Equipo agil, ciclos cortos y comunicacion directa. De la idea al MVP en semanas, no en meses.',
  },
  {
    title: 'Producto vivo, no proyecto cerrado',
    desc: 'Una vez entregado, seguimos evolucionando el sistema con vos. Soporte, mejoras y nuevas funciones con continuidad garantizada.',
  },
  {
    title: 'Stack moderno y escalable',
    desc: 'Next.js, React Native, Python, Supabase, Stripe. Tecnologias que escalan y tienen ecosistemas activos.',
  },
  {
    title: 'Precio justo para el mercado PY',
    desc: 'Calidad de empresa regional con precios adaptados a la realidad de las PyMEs paraguayas.',
  },
]

export default function WhyUs() {
  return (
    <section id="nosotros" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-electric-DEFAULT font-medium text-sm uppercase tracking-widest mb-3">Por que elegirnos</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Lo que nos diferencia
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <div key={r.title} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-electric-glow text-electric-DEFAULT flex items-center justify-center text-sm font-bold mt-0.5">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1.5">{r.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
