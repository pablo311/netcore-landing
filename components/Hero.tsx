import { SafetyMark, SyskoreMark } from './BrandMarks'

const tiles = [
  {
    name: 'Abocato', tagline: 'ASISTENTE LEGAL IA', href: '#abocato',
    bg: 'bg-abocato-navy', nameColor: 'text-abocato-light', tagColor: 'text-abocato-deep',
    mark: <img src="/brand/abocato-dark.svg" alt="" className="h-20 sm:h-28 w-auto" />,
  },
  {
    name: 'Vendalia', tagline: 'MARKETPLACE DE NEGOCIOS', href: '#vendalia',
    bg: 'bg-vendalia-tint', nameColor: 'text-ink', tagColor: 'text-vendalia-ink',
    mark: <img src="/brand/vendalia-icon.svg" alt="" className="h-20 sm:h-28 w-auto" />,
  },
  {
    name: 'Syskore', tagline: 'ERP INTELLIGENCE', href: '#syskore',
    bg: 'bg-syskore-charcoal', nameColor: 'text-white', tagColor: 'text-syskore-silver',
    mark: <SyskoreMark className="h-20 sm:h-28 w-auto" />,
  },
  {
    name: 'SafetyAI', tagline: 'VISION INTELLIGENCE', href: '#safetyai',
    bg: 'bg-safety-navy', nameColor: 'text-white', tagColor: 'text-safety-teal',
    mark: <SafetyMark className="h-20 sm:h-28 w-auto" />,
  },
]

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-20 sm:pb-28 grid lg:grid-cols-[minmax(0,1fr)_minmax(0,600px)] gap-12 lg:gap-16 items-center">
      <div className="flex flex-col gap-7">
        <p className="flex items-center gap-2.5 text-sm font-medium text-nc-steel">
          <span className="w-2 h-2 rounded-full bg-nc-teal" />
          Hecho en Paraguay
        </p>
        <h1 className="font-display font-extrabold text-5xl sm:text-6xl xl:text-[84px] leading-[0.98] tracking-[-0.03em] text-ink">
          Software que las empresas de acá usan todos los días.
        </h1>
        <p className="text-lg sm:text-xl leading-relaxed text-muted max-w-xl">
          Netcore es la casa de Abocato, Vendalia, Syskore y SafetyAI. Y cuando lo que necesitás
          todavía no existe, lo construimos con vos.
        </p>
        <div className="flex flex-col sm:flex-row gap-3.5 mt-1">
          <a href="#productos" className="px-7 py-4 rounded-xl bg-ink text-white font-semibold text-center hover:bg-navy transition-colors">
            Conocer los productos
          </a>
          <a href="#contacto" className="px-7 py-4 rounded-xl border-[1.5px] border-ink text-ink font-semibold text-center hover:bg-mist transition-colors">
            Pedir un proyecto a medida
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {tiles.map(t => (
          <a key={t.name} href={t.href}
            className={`${t.bg} aspect-square rounded-3xl p-5 sm:p-7 flex flex-col justify-between transition-transform hover:-translate-y-1`}>
            <div className="self-start">{t.mark}</div>
            <div className="flex flex-col gap-1">
              <span className={`font-display font-bold text-xl sm:text-[28px] ${t.nameColor}`}>{t.name}</span>
              <span className={`text-[9px] sm:text-[11px] tracking-[0.3em] sm:tracking-[5px] ${t.tagColor}`}>{t.tagline}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
