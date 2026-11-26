import { EMPRESA, WA_PRESUPUESTO } from '@/lib/site'

export default function Contact() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-navy py-20 text-white sm:py-24">
      <div className="trama absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primario">Contacto</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
            Contanos qué necesitás y te mandamos el presupuesto
          </h2>
          <p className="mt-4 max-w-lg text-lg text-white/75">
            Escribinos por WhatsApp. Si tenés fotos, un plano o una certificación anterior, mandala también y lo
            resolvemos más rápido.
          </p>
          <a href={WA_PRESUPUESTO} target="_blank" rel="noopener noreferrer" className="btn-primario mt-8 text-base">
            Escribir por WhatsApp
          </a>
        </div>

        <dl className="grid content-start gap-6 rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
          <div>
            <dt className="text-xs uppercase tracking-[0.18em] text-white/55">WhatsApp y teléfono</dt>
            <dd className="mt-1 text-lg font-semibold">
              <a href={WA_PRESUPUESTO} target="_blank" rel="noopener noreferrer" className="hover:text-primario">
                {EMPRESA.telefono}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.18em] text-white/55">Ventas y presupuestos</dt>
            <dd className="mt-1 text-lg font-semibold">
              <a href={`mailto:${EMPRESA.emailVentas}`} className="break-all hover:text-primario">
                {EMPRESA.emailVentas}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.18em] text-white/55">Administración</dt>
            <dd className="mt-1 text-lg font-semibold">
              <a href={`mailto:${EMPRESA.emailAdmin}`} className="break-all hover:text-primario">
                {EMPRESA.emailAdmin}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.18em] text-white/55">Dónde trabajamos</dt>
            <dd className="mt-1 text-white/85">{EMPRESA.cobertura}</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
