const pasos = [
  {
    n: '01',
    titulo: 'Relevamiento',
    texto: 'Vamos al lugar, medimos recorridos y revisamos lo que ya tenés. Si hay una certificación anterior, la usamos para ver qué falla.',
  },
  {
    n: '02',
    titulo: 'Presupuesto detallado',
    texto: 'Materiales, mano de obra y certificación por separado, ítem por ítem. Sin letra chica.',
  },
  {
    n: '03',
    titulo: 'Obra por etapas',
    texto: 'Armamos un cronograma por sectores. Si tu lugar no puede parar, trabajamos de noche y fines de semana.',
  },
  {
    n: '04',
    titulo: 'Certificación e informe',
    texto: 'Certificamos cada punto con equipos Fluke y te entregamos el informe con el resultado de cada uno.',
  },
]

export default function Proceso() {
  return (
    <section id="proceso" className="bg-niebla py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="eyebrow">Cómo trabajamos</p>
        <h2 className="titulo-seccion mt-3 max-w-2xl">Sabés qué se hace, cuándo y cuánto cuesta</h2>
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pasos.map((p) => (
            <li key={p.n} className="relative rounded-2xl bg-white p-6 shadow-sm">
              <span className="font-display text-sm font-extrabold text-primario">{p.n}</span>
              <h3 className="mt-2 font-display text-lg font-bold text-navy">{p.titulo}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{p.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
