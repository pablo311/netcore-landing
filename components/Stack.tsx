const groups = [
  { label: 'Desarrollo',       items: ['Next.js', 'React', 'React Native / Expo', 'Python'] },
  { label: 'Datos y pagos',    items: ['Supabase', 'Stripe'] },
  { label: 'Infraestructura',  items: ['Vercel', 'Railway', 'Hetzner'] },
  { label: 'IA',               items: ['Agentes por WhatsApp', 'YOLOv8 (visión)'] },
]

export default function Stack() {
  return (
    <section aria-labelledby="stack-title" className="border-y border-line max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 grid lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-8 lg:gap-16">
      <h2 id="stack-title" className="font-display font-bold text-2xl sm:text-3xl tracking-[-0.01em]">
        Tecnologías con las que trabajamos
      </h2>
      <dl className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
        {groups.map(g => (
          <div key={g.label} className="flex flex-col gap-2.5">
            <dt className="text-xs font-semibold tracking-[3px] text-nc-steel uppercase">{g.label}</dt>
            <dd className="flex flex-wrap gap-2">
              {g.items.map(i => (
                <span key={i} className="px-3 py-1.5 rounded-lg border border-line text-sm text-ink">{i}</span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
