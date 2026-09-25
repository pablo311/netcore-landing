const steps = [
  { title: 'Diagnóstico',  desc: 'Una reunión para entender qué te cuesta tiempo o plata.', color: 'text-nc-steel' },
  { title: 'Prototipo',    desc: 'Algo que puedas tocar en semanas, no en meses.',          color: 'text-nc-cyan' },
  { title: 'Lanzamiento',  desc: 'Lo ponemos en marcha con tu equipo.',                     color: 'text-nc-teal' },
  { title: 'Evolución',    desc: 'Soporte y mejoras continuas.',                            color: 'text-[#6E9E4F]' },
]

export default function Process() {
  return (
    <section id="proceso" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28 scroll-mt-24">
      <div className="rounded-[28px] border border-line p-8 sm:p-16 flex flex-col gap-10">
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-[-0.02em]">Cómo trabajamos</h2>
        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <li key={s.title} className="flex flex-col gap-2.5">
              <span className={`font-display font-bold text-xl ${s.color}`}>{i + 1}</span>
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="text-[15px] leading-relaxed text-[#5A6573]">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
