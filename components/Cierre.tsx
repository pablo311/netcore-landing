import { ACCION, WA_GENERAL } from '@/lib/site'

export default function Cierre() {
  return (
    <section className="cierre sobre-marino">
      <div className="wrap">
        <h2 className="display">Contanos qué te está frenando.</h2>
        <div>
          <p>Una charla corta alcanza para saber por dónde empezar.</p>
          <a className="btn" href={WA_GENERAL} target="_blank" rel="noopener">
            {ACCION}
          </a>
        </div>
      </div>
    </section>
  )
}
