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
    <section id="productos" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl bg-navy p-6 text-white sm:p-8">
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
