type Project = {
  name: string
  desc: string
  segment: 'Desarrollo' | 'Automatizaciones' | 'Infraestructura'
  status: 'En vivo' | 'En desarrollo' | null
  href: string | null
  linkLabel: string
  logo?: string
  accent: string
}

// Propy y CertiCarPy: falta confirmar descripción y URL.
const projects: Project[] = [
  {
    name: 'Abocato',
    desc: 'Asistente legal con IA para Paraguay.',
    segment: 'Automatizaciones',
    status: 'En vivo',
    href: 'https://abocato.com',
    linkLabel: 'abocato.com',
    logo: '/brand/abocato-dark.svg',
    accent: 'bg-abocato-navy',
  },
  {
    name: 'Vendalia',
    desc: 'El marketplace de negocios del Paraguay.',
    segment: 'Desarrollo',
    status: 'En desarrollo',
    href: null,
    linkLabel: 'Próximamente',
    logo: '/brand/vendalia-icon.svg',
    accent: 'bg-vendalia-tint',
  },
  {
    name: 'Propy',
    desc: '[Descripción de Propy]',
    segment: 'Desarrollo',
    status: null,
    href: null,
    linkLabel: '[URL de Propy]',
    accent: 'bg-[#E8F2FA]',
  },
  {
    name: 'CertiCarPy',
    desc: '[Descripción de CertiCarPy]',
    segment: 'Desarrollo',
    status: null,
    href: null,
    linkLabel: '[URL de CertiCarPy]',
    accent: 'bg-[#EAF4E4]',
  },
]

const statusStyle: Record<NonNullable<Project['status']>, string> = {
  'En vivo':       'bg-[#E3F1D8] text-[#2F5D16]',
  'En desarrollo': 'bg-[#FCEFCB] text-[#6E5310]',
}

export default function Portfolio() {
  return (
    <section id="portafolio" className="bg-mist py-20 sm:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        <div className="flex flex-col gap-3 max-w-3xl">
          <p className="text-[13px] font-semibold tracking-[4px] text-nc-steel">PORTAFOLIO</p>
          <h2 className="font-display font-extrabold text-4xl sm:text-[56px] leading-[1.02] tracking-[-0.02em]">
            Proyectos que ya están andando.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {projects.map(p => {
            const card = (
              <>
                <div className={`${p.accent} aspect-[4/3] rounded-2xl flex items-center justify-center`}>
                  {p.logo
                    ? <img src={p.logo} alt="" className="h-20 w-auto" />
                    : <span className="font-display font-extrabold text-3xl text-ink/80">{p.name}</span>}
                </div>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-display font-bold text-2xl">{p.name}</h3>
                  {p.status && <span className={`text-xs font-semibold px-2.5 py-1 rounded-md ${statusStyle[p.status]}`}>{p.status}</span>}
                </div>
                <p className="text-[15px] leading-relaxed text-muted">{p.desc}</p>
                <dl className="mt-auto pt-4 border-t border-line flex items-center justify-between gap-2 text-sm">
                  <dt className="sr-only">Segmento</dt>
                  <dd className="text-[#5A6573]">{p.segment}</dd>
                  <dt className="sr-only">Acceso</dt>
                  <dd className={`font-semibold ${p.href ? 'text-nc-link' : 'text-[#6B7684]'}`}>
                    {p.linkLabel}{p.href ? ' →' : ''}
                  </dd>
                </dl>
              </>
            )
            const cls = 'bg-white rounded-3xl p-4 sm:p-5 flex flex-col gap-3 border border-line'
            return p.href
              ? <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer"
                  className={`${cls} transition-transform hover:-translate-y-1`}>{card}</a>
              : <article key={p.name} className={cls}>{card}</article>
          })}
        </div>
      </div>
    </section>
  )
}
