import type { Metadata } from 'next'
import Cabecera from '@/components/Cabecera'
import Pie from '@/components/Pie'
import { ACCION, EMPRESA, WA_GENERAL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Escribinos por WhatsApp o por correo. Trabajamos en Asunción, Gran Asunción y Ciudad del Este.',
  alternates: { canonical: '/contacto' },
}

export default function Contacto() {
  return (
    <>
      <Cabecera actual="/contacto" />
      <main className="pagina">
        <div className="wrap">
          <h1 className="display">Contanos qué necesita tu negocio.</h1>
          <p className="bajada">
            Escribinos por WhatsApp. Te respondemos con una pregunta o dos y vemos juntos por dónde empezar.
          </p>
          <a className="btn tinta" href={WA_GENERAL} target="_blank" rel="noopener">
            {ACCION}
          </a>
          <dl className="datos">
            <div>
              <dt>WhatsApp y llamadas</dt>
              <dd>
                <a href={`tel:${EMPRESA.telefonoE164}`}>{EMPRESA.telefono.replace(/ /g, ' ')}</a>
              </dd>
            </div>
            <div>
              <dt>Correo</dt>
              <dd>
                <a href={`mailto:${EMPRESA.email}`}>{EMPRESA.email}</a>
              </dd>
            </div>
            <div>
              <dt>Dónde trabajamos</dt>
              <dd>
                {EMPRESA.cobertura}
                <small>Para otras ciudades, consultanos.</small>
              </dd>
            </div>
            <div>
              <dt>Para tu factura</dt>
              <dd>
                {EMPRESA.razonSocialLegible}
                <small>RUC&nbsp;{EMPRESA.ruc}</small>
              </dd>
            </div>
          </dl>
        </div>
      </main>
      <Pie />
    </>
  )
}
