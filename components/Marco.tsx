import Red from '@/components/Red'
import { ACCION, EMPRESA, WA_GENERAL } from '@/lib/site'
import { SERVICIOS, type Foco } from '@/lib/servicios'

// El marco de todas las páginas: menú fijo a la izquierda, texto al medio
// y panel oscuro con la red a la derecha. En celular se apila en una columna.
export default function Marco({
  actual,
  foco = 'todo',
  lema = ['Todo conectado.', 'Todo andando.'],
  wa = WA_GENERAL,
  children,
}: {
  actual: string
  foco?: Foco
  lema?: [string, string]
  wa?: string
  children: React.ReactNode
}) {
  const marca = (href: string) => (href === actual ? ({ 'aria-current': 'page' } as const) : {})
  return (
    <div className="marco">
      <header className="lateral">
        <div className="arriba">
          <a className="logo" href="/" aria-label="Netcore, inicio">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/netcore-horizontal-light.svg" alt="" width={111} height={32} />
          </a>
          <button className="abrir" type="button" aria-expanded="false" aria-controls="menu">
            Menú
          </button>
        </div>
        <nav id="menu" aria-label="Principal">
          <h2>Servicios</h2>
          <ul>
            <li>
              <a href="/" {...marca('/')}>
                Inicio
              </a>
            </li>
            {SERVICIOS.map((s) => (
              <li key={s.slug}>
                <a href={`/${s.slug}`} {...marca(`/${s.slug}`)}>
                  {s.nombre}
                </a>
              </li>
            ))}
          </ul>
          <h2>Empresa</h2>
          <ul>
            <li>
              <a href="/#clientes">Clientes</a>
            </li>
            <li>
              <a href="/contacto" {...marca('/contacto')}>
                Contacto
              </a>
            </li>
          </ul>
        </nav>
        <div className="abajo">
          <p>Respondemos por WhatsApp</p>
          <a className="btn" href={wa} target="_blank" rel="noopener">
            {ACCION}
          </a>
        </div>
      </header>

      <main className="contenido">
        <div className="col">
          {children}
          <footer className="pie">
            <span>{EMPRESA.razonSocialLegible}</span>
            <span>RUC&nbsp;{EMPRESA.ruc}</span>
            <span>{EMPRESA.cobertura}</span>
            <a href="/privacidad">Política de privacidad</a>
          </footer>
        </div>
      </main>

      <aside className="panel">
        <Red foco={foco} />
        <p className="lema">
          {lema[0]}
          <span>{lema[1]}</span>
        </p>
      </aside>
    </div>
  )
}
