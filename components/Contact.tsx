import { Mail, MapPin, Phone } from 'lucide-react'
import FormPresupuesto from '@/components/FormPresupuesto'
import Reveal from '@/components/Reveal'
import { EMPRESA, WA_PRESUPUESTO } from '@/lib/site'

export default function Contact() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-navy py-20 text-white sm:py-24">
      <div className="trama absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr]">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primario">Contacto</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
            Contanos qué necesitás y te mandamos el presupuesto
          </h2>
          <p className="mt-4 max-w-lg text-lg text-white/75">
            Si tenés fotos, un plano o una certificación anterior, mandala también por WhatsApp y lo resolvemos más
            rápido.
          </p>

          <ul className="mt-9 grid gap-5">
            <li className="flex gap-4">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-primario" aria-hidden="true" />
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-white/55">WhatsApp y teléfono</p>
                <a href={WA_PRESUPUESTO} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold hover:text-primario">
                  {EMPRESA.telefono}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <Mail className="mt-1 h-5 w-5 shrink-0 text-primario" aria-hidden="true" />
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-white/55">Ventas y administración</p>
                <a href={`mailto:${EMPRESA.emailVentas}`} className="block break-all text-lg font-semibold hover:text-primario">
                  {EMPRESA.emailVentas}
                </a>
                <a href={`mailto:${EMPRESA.emailAdmin}`} className="block break-all text-white/75 hover:text-primario">
                  {EMPRESA.emailAdmin}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-primario" aria-hidden="true" />
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-white/55">Dónde trabajamos</p>
                <p className="text-white/85">{EMPRESA.cobertura}</p>
              </div>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <FormPresupuesto />
        </Reveal>
      </div>
    </section>
  )
}
