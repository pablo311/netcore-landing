import { ACCION, WA_GENERAL } from '@/lib/site'
import { SERVICIOS } from '@/lib/servicios'

// La cabecera es igual en todas las páginas: los cinco servicios siempre a mano.
// `actual` es la ruta de la página en la que estamos.
export default function Cabecera({ actual, wa = WA_GENERAL }: { actual: string; wa?: string }) {
  return (
    <header className="cab sobre-marino">
      <div className="wrap">
        <a className="logo" href="/" aria-label="Netcore, inicio">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/netcore-horizontal-dark.svg" alt="" width={118} height={34} />
        </a>
        <button className="abrir" type="button" aria-expanded="false" aria-controls="menu">
          Menú
        </button>
        <nav id="menu" aria-label="Principal">
          {SERVICIOS.map((s) => (
            <a key={s.slug} href={`/${s.slug}`} aria-current={actual === `/${s.slug}` ? 'page' : undefined}>
              {s.menu}
            </a>
          ))}
          <a href="/contacto" aria-current={actual === '/contacto' ? 'page' : undefined}>
            Contacto
          </a>
          <a className="btn" href={wa} target="_blank" rel="noopener">
            {ACCION}
          </a>
        </nav>
      </div>
    </header>
  )
}
