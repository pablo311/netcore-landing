const razones = [
  {
    titulo: 'Certificamos, no solo instalamos',
    texto: 'Cada punto se mide con equipos Fluke. Te queda un informe que demuestra que la red cumple la norma.',
  },
  {
    titulo: 'Tu negocio no para',
    texto: 'Obras de noche, fines de semana y por sectores, con un cronograma que sabés de antemano.',
  },
  {
    titulo: 'Presupuesto claro',
    texto: 'Materiales, mano de obra y certificación separados. Sabés qué pagás y por qué.',
  },
  {
    titulo: 'Un solo responsable',
    texto: 'Desde el relevamiento hasta el informe final. Hablás siempre con el mismo equipo, sin intermediarios.',
  },
  {
    titulo: 'Materiales que cumplen',
    texto: 'Cable de cobre sólido y marcas reconocidas. Si tu obra exige una especificación, la respetamos.',
  },
  {
    titulo: 'Avance a la vista',
    texto: 'Te compartimos el avance por punto y por etapa mientras dura la obra.',
  },
]

export default function WhyUs() {
  return (
    <section id="nosotros" className="bg-niebla py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="eyebrow">Por qué Netcore</p>
        <h2 className="titulo-seccion mt-3 max-w-2xl">Lo que nos piden los administradores de edificios y empresas</h2>
        <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {razones.map((r) => (
            <div key={r.titulo} className="border-l-2 border-primario pl-5">
              <h3 className="font-display text-lg font-bold text-navy">{r.titulo}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-slate-600">{r.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
