import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Marco from '@/components/Marco'
import { ACCION } from '@/lib/site'
import { SERVICIOS, servicioPorSlug } from '@/lib/servicios'

export const dynamicParams = false

export function generateStaticParams() {
  return SERVICIOS.map((s) => ({ servicio: s.slug }))
}

type Props = { params: Promise<{ servicio: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = servicioPorSlug((await params).servicio)
  if (!s) return {}
  return {
    title: `${s.nombre} para tu negocio en Asunción`,
    description: s.descripcion,
    alternates: { canonical: `/${s.slug}` },
    openGraph: { title: `${s.nombre} | Netcore`, description: s.descripcion, url: `/${s.slug}` },
  }
}

export default async function PaginaServicio({ params }: Props) {
  const s = servicioPorSlug((await params).servicio)
  if (!s) notFound()
  const sigue = SERVICIOS[(SERVICIOS.indexOf(s) + 1) % SERVICIOS.length]

  return (
    <Marco actual={`/${s.slug}`} foco={s.foco} lema={s.lema} wa={s.wa}>
      <h1 className="display">{s.titulo}</h1>
      <p className="bajada">{s.bajada}</p>

      <h2 className="display">Qué hacemos</h2>
      <ul className="lista">
        {s.hace.map((h) => (
          <li key={h.t}>
            <b>{h.t}</b> {h.d}
          </li>
        ))}
      </ul>

      <p className="frase">{s.frase}</p>

      {s.productos && (
        <>
          <h2 className="display">Hechos por nosotros</h2>
          <ul className="lista">
            {s.productos.map((p) => (
              <li key={p.nombre}>
                <b>{p.nombre}.</b> {p.d} <span className="estado">{p.estado}</span>
              </li>
            ))}
          </ul>
        </>
      )}

      <h2 className="display">Qué te queda</h2>
      <ul className="lista">
        {s.queda.map((q) => (
          <li key={q}>{q}</li>
        ))}
      </ul>

      <p className="accion final">
        <a className="btn tinta" href={s.wa} target="_blank" rel="noopener">
          {ACCION}
        </a>
        <a className="sigue" href={`/${sigue.slug}`}>
          Seguir con {sigue.nombre.toLowerCase().replace('wifi', 'WiFi')}
        </a>
      </p>
    </Marco>
  )
}
