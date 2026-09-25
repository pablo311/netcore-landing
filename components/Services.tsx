const services = [
  { title: 'Agentes de IA',          desc: 'Atención, cobranza y reportes 24/7.' },
  { title: 'Sistemas de gestión',    desc: 'ERP y tableros a la medida de tus procesos.' },
  { title: 'Apps web y móviles',     desc: 'iOS, Android y web con un solo equipo.' },
  { title: 'Visión por computadora', desc: 'Modelos entrenados con tus cámaras.' },
  { title: 'Infraestructura cloud',  desc: 'Deploy, escalado y monitoreo.' },
  { title: 'Soporte continuo',       desc: 'El sistema sigue mejorando después de entregarlo.' },
]

export default function Services() {
  return (
    <section id="servicios" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-10 lg:gap-20">
      <div className="flex flex-col gap-4">
        <p className="text-[13px] font-semibold tracking-[4px] text-nc-steel">SOFTWARE A MEDIDA</p>
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl leading-[1.04] tracking-[-0.02em]">
          Lo mismo que usamos para nuestros productos, aplicado a tu empresa.
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 gap-x-10">
        {services.map(s => (
          <div key={s.title} className="py-5 border-t border-line">
            <h3 className="font-semibold text-lg">{s.title}</h3>
            <p className="mt-1.5 text-[15px] leading-relaxed text-[#5A6573]">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
