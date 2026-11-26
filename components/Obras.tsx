import Reveal from '@/components/Reveal'

const obras = [
  {
    cliente: 'Paseo La Galería',
    rubro: 'Centro comercial · Asunción',
    estado: 'En curso',
    texto:
      'Recableado UTP Cat6 y certificación de puestos de red en los estacionamientos de las dos torres, en turnos nocturnos para no frenar la operación.',
  },
  {
    cliente: 'Blue Tower',
    rubro: 'Edificio corporativo',
    estado: '2026',
    texto: 'Provisión de cable UTP Cat6 e instalación de un sistema de botones de pánico inalámbricos con central y receptores.',
  },
]

const estilos: Record<string, string> = {
  'En curso': 'bg-primario/15 text-enlace',
  '2026': 'bg-niebla text-acero',
}

const propios = [
  {
    nombre: 'Abocato',
    estado: 'En producción',
    texto: 'Asistente legal con IA para Paraguay. Responde consultas en lenguaje simple y te deriva a un abogado cuando hace falta.',
    url: 'https://abocato.com',
  },
  {
    nombre: 'Vendalia',
    estado: 'En desarrollo',
    texto: 'Marketplace para comprar y vender negocios y franquicias en Paraguay.',
    url: null,
  },
]

export default function Obras() {
  return (
    <section id="obras" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="eyebrow">Obras</p>
        <h2 className="titulo-seccion mt-3 max-w-2xl">Algunos trabajos recientes</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {obras.map((o, i) => (
            <Reveal key={o.cliente} delay={i * 0.08}>
            <article className="flex h-full flex-col rounded-2xl border border-slate-200 p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-extrabold text-navy">{o.cliente}</h3>
                  <p className="mt-1 text-sm text-slate-500">{o.rubro}</p>
                </div>
                <span className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${estilos[o.estado]}`}>
                  {o.estado}
                </span>
              </div>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-600">{o.texto}</p>
            </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-navy p-6 text-white sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primario">También desarrollamos</p>
          <h3 className="mt-2 font-display text-2xl font-extrabold">Productos propios</h3>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {propios.map((p) => (
              <article key={p.nombre} className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
                <div className="flex items-center justify-between gap-3">
                  <h4 className="font-display text-lg font-bold">{p.nombre}</h4>
                  <span className="rounded-full border border-white/15 px-2.5 py-0.5 text-xs text-white/75">{p.estado}</span>
                </div>
                <p className="mt-2 text-[15px] leading-relaxed text-white/75">{p.texto}</p>
                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm font-semibold text-primario hover:text-cian"
                  >
                    Abrir {p.nombre} →
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
