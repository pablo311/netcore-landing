import Marco from '@/components/Marco'
import { ACCION, CLIENTES, MARCAS, PASOS, PREGUNTAS, WA_GENERAL } from '@/lib/site'
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
  return (
    <Marco actual="/">
      <h1 className="display">Instalamos la tecnología de tu negocio y nos quedamos para que ande.</h1>
      <p className="bajada">
        Internet, cableado, cámaras, un WhatsApp que atiende solo y sistemas a medida. Para locales, oficinas y
        edificios de Asunción y Ciudad del Este.
      </p>
      <p className="accion">
        <a className="btn tinta" href={WA_GENERAL} target="_blank" rel="noopener">
          {ACCION}
        </a>
      </p>

      <h2 className="display">Qué hacemos</h2>
      <ul className="lista enlaces">
        {SERVICIOS.map((s) => (
          <li key={s.slug}>
            <a href={`/${s.slug}`}>
              <b>{s.nombre}.</b> {s.corto}
            </a>
          </li>
        ))}
      </ul>

      <p className="frase">
        Un cableado mal hecho no se nota el primer día. Se nota cuando algo falla y nadie sabe qué cable es cuál.
      </p>

      <h2 className="display" id="clientes">
        Confían en nosotros
      </h2>
      <ul className="logos">
        {CLIENTES.map((c) => (
          <li key={c.nombre}>
            {c.logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={c.logo} alt={c.nombre} loading="lazy" />
            ) : (
              c.nombre
            )}
          </li>
        ))}
      </ul>

      <h2 className="display">Cómo trabajamos</h2>
      <ol className="lista pasos">
        {PASOS.map((p) => (
          <li key={p.t}>
            <b>{p.t}.</b> {p.d}
          </li>
        ))}
      </ol>
      <p className="nota">Instalamos {lista(MARCAS)}. Certificamos con equipos Fluke.</p>

      <h2 className="display">Lo que nos preguntan antes de empezar</h2>
      <div className="preguntas">
        {PREGUNTAS.map((q) => (
          <details key={q.p}>
            <summary>{q.p}</summary>
            <p>{q.r}</p>
          </details>
        ))}
      </div>

      <p className="accion final">
        <a className="btn tinta" href={WA_GENERAL} target="_blank" rel="noopener">
          {ACCION}
        </a>
      </p>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(preguntasLd) }} />
    </Marco>
  )
}
