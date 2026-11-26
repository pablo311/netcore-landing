const infraestructura = [
  {
    titulo: 'Cableado UTP Cat6 certificado',
    texto: 'Puestos de red nuevos o recableado de los que fallan. Cada punto se certifica con equipos Fluke y queda en el informe.',
  },
  {
    titulo: 'Fibra óptica',
    texto: 'Tendido de fibra monomodo entre edificios, pisos o racks, fusiones y enlace funcionando con tus switches.',
  },
  {
    titulo: 'Racks y switches',
    texto: 'Montaje y ordenamiento de racks, patcheras, organizadores y switches, con todo etiquetado.',
  },
  {
    titulo: 'Cámaras y seguridad',
    texto: 'Cámaras IP con grabador, botones de pánico y alarmas inalámbricas para oficinas, edificios y comercios.',
  },
  {
    titulo: 'WiFi para empresas',
    texto: 'Cobertura pensada para el lugar, con equipos administrables para que la señal llegue donde se trabaja.',
  },
  {
    titulo: 'Equipos y materiales',
    texto: 'PCs, switches, cable y accesorios con compra en Ciudad del Este o importación a pedido.',
  },
]

const otros = [
  {
    titulo: 'Desarrollo',
    texto: 'Sistemas y apps a medida para ordenar procesos de tu empresa, desde cotizaciones hasta reportes.',
  },
  {
    titulo: 'Automatizaciones',
    texto: 'Atención por WhatsApp, avisos y tareas repetitivas que se hacen solas, conectadas con lo que ya usás.',
  },
]

export default function Services() {
  return (
    <section id="servicios" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="eyebrow">Servicios</p>
          <h2 className="titulo-seccion mt-3">Toda la red de tu empresa, con un solo responsable</h2>
          <p className="mt-4 text-lg text-slate-600">
            Desde el relevamiento hasta el último informe. Vos tenés un solo contacto y un presupuesto claro.
          </p>
        </div>

        <h3 className="mt-14 text-sm font-semibold uppercase tracking-[0.18em] text-acero">Infraestructura</h3>
        <div className="mt-5 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
          {infraestructura.map((s) => (
            <article key={s.titulo} className="bg-white p-6">
              <h4 className="font-display text-lg font-bold text-navy">{s.titulo}</h4>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{s.texto}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {otros.map((s) => (
            <article key={s.titulo} className="rounded-2xl bg-niebla p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-acero">{s.titulo}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-700">{s.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
