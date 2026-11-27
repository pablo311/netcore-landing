import Cabecera from '@/components/Cabecera'
import Cierre from '@/components/Cierre'
import Pie from '@/components/Pie'
import Plano from '@/components/Plano'
import { ACCION, CLIENTES, EMPRESA, MARCAS, PASOS, PREGUNTAS, WA_GENERAL } from '@/lib/site'
import { SERVICIOS } from '@/lib/servicios'

const preguntasLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: PREGUNTAS.map((q) => ({
    '@type': 'Question',
    name: q.p,
    acceptedAnswer: { '@type': 'Answer', text: q.r },
  })),
}

function lista(nombres: string[]) {
  return new Intl.ListFormat('es', { style: 'long', type: 'conjunction' }).format(nombres)
}

export default function Inicio() {
  const logos = CLIENTES.filter((c) => c.logo)
  return (
    <>
      <Cabecera actual="/" />
      <main>
        <section className="portada sobre-marino">
          <div className="wrap arriba">
            <div>
              <h1 className="display">
                <span>Todo conectado.</span>
                <span>Todo andando.</span>
              </h1>
              <p className="bajada">
                Internet, cableado, cámaras y sistemas para tu negocio, instalados y funcionando.
              </p>
              <div className="acciones">
                <a className="btn" href={WA_GENERAL} target="_blank" rel="noopener">
                  {ACCION}
                </a>
                <p className="zona">{EMPRESA.cobertura}</p>
              </div>
            </div>
            <div className="lamina">
              <Plano
                capa="todo"
                entrada
                descripcion="Plano de ejemplo de un local con salón, caja, oficina y depósito. La red, el WiFi y las cámaras salen de un mismo rack."
              />
            </div>
          </div>
          <div className="wrap">
            <nav className="leyenda" aria-label="Servicios">
              {SERVICIOS.map((s) => (
                <a key={s.slug} href={`/${s.slug}`} data-capa-de={s.capa}>
                  <b>{s.nombre}</b>
                  <span>{s.corto}</span>
                </a>
              ))}
            </nav>
          </div>
        </section>

        <section className="clientes">
          <div className="wrap">
            {logos.length === CLIENTES.length ? (
              <>
                <h2 className="display">Confían en nosotros</h2>
                <ul>
                  {logos.map((c) => (
                    <li key={c.nombre}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={c.logo} alt={c.nombre} loading="lazy" />
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <p className="display">Confían en nosotros {lista(CLIENTES.map((c) => c.nombre))}.</p>
            )}
          </div>
        </section>

        <section className="proceso">
          <div className="wrap">
            <h2 className="display">Primero entendemos. Después instalamos.</h2>
            <ol className="pasos">
              {PASOS.map((p) => (
                <li key={p.t}>
                  <h3>{p.t}</h3>
                  <p>{p.d}</p>
                </li>
              ))}
            </ol>
            <p className="marcas">
              Instalamos {lista(MARCAS)}. Certificamos con equipos Fluke.
            </p>
          </div>
        </section>

        <section className="preguntas">
          <div className="wrap">
            <h2 className="display">Lo que nos preguntan antes de empezar.</h2>
            <div>
              {PREGUNTAS.map((q) => (
                <details key={q.p}>
                  <summary>{q.p}</summary>
                  <p>{q.r}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <Cierre />
      </main>
      <Pie />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(preguntasLd) }} />
    </>
  )
}
