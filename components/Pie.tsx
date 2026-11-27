import { EMPRESA, WA_GENERAL } from '@/lib/site'
import { SERVICIOS } from '@/lib/servicios'

export default function Pie() {
  return (
    <footer className="pie sobre-marino">
      <div className="wrap">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/netcore-horizontal-dark.svg" alt="Netcore" width={98} height={28} />
        <ul>
          {SERVICIOS.map((s) => (
            <li key={s.slug}>
              <a href={`/${s.slug}`}>{s.nombre}</a>
            </li>
          ))}
        </ul>
        <ul>
          <li>
            <a href={WA_GENERAL} target="_blank" rel="noopener">
              WhatsApp {EMPRESA.telefono.replace(/ /g, ' ')}
            </a>
          </li>
          <li>
            <a href={`mailto:${EMPRESA.email}`}>{EMPRESA.email}</a>
          </li>
          <li>{EMPRESA.cobertura}</li>
        </ul>
        <ul>
          <li>{EMPRESA.razonSocialLegible}</li>
          <li>RUC&nbsp;{EMPRESA.ruc}</li>
          <li>
            <a href="/privacidad">Política de privacidad</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
