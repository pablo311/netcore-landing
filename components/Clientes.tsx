import { CLIENTES } from '@/lib/site'

// Clientes agrupados en un solo lugar. Solo nombre o logo, sin datos de obras.
export default function Clientes() {
  return (
    <section aria-label="Clientes" className="border-y-2 border-[var(--ink)]">
      <div className="wrap flex flex-wrap items-center gap-x-11 gap-y-3.5 py-[34px]">
        <span className="sobre text-[var(--ink)]">Confían en nosotros</span>
        <ul className="flex flex-wrap items-center gap-x-10 gap-y-3">
          {CLIENTES.map((c) => (
            <li key={c.nombre} className="display whitespace-nowrap text-[clamp(18px,2.2vw,24px)] font-bold text-[#5C6B67]">
              {c.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={c.logo} alt={c.nombre} className="h-9 w-auto opacity-80 grayscale" loading="lazy" />
              ) : (
                c.nombre
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
