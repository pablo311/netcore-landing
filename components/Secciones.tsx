import { ArrowRight } from 'lucide-react'
import { EMPRESA, PREGUNTAS, WA_CHARLA } from '@/lib/site'

const frases = [
  {
    frase: 'Que todo funcione.',
    segmento: 'Infraestructura',
    texto: 'Internet, WiFi, cámaras, alarmas y equipos. Instalado prolijo y con alguien que responde si algo falla.',
  },
  {
    frase: 'Que se haga solo.',
    segmento: 'Automatizaciones',
    texto: 'Un WhatsApp que atiende, avisos que salen solos y reportes que te llegan al celular.',
  },
  {
    frase: 'Que sea tuyo.',
    segmento: 'Desarrollo',
    texto: 'Un sistema para pedidos, stock y cotizaciones, armado para cómo trabajás vos.',
  },
]

export function QueHacemos() {
  return (
    <section id="que-hacemos" className="bg-white">
      <div className="wrap py-[88px]">
        <h2 className="h2">Lo que hacemos, en simple</h2>
        <ul className="mt-7">
          {frases.map((f) => (
            <li
              key={f.segmento}
              className="grid items-center gap-x-10 gap-y-2.5 border-b-2 border-[var(--ink)] py-[30px] md:grid-cols-[1.1fr_1fr]"
            >
              <h3 className="frase">{f.frase}</h3>
              <div>
                <span className="sobre mb-2 block text-[var(--link)]">{f.segmento}</span>
                <p className="text-lg">{f.texto}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

const pasos = [
  { titulo: 'Charlamos 15 minutos', texto: 'Nos contás qué te complica el día. Sin palabras raras.' },
  { titulo: 'Vamos a tu negocio', texto: 'Miramos cómo trabajás y te pasamos un presupuesto claro.' },
  { titulo: 'Lo dejamos andando', texto: 'Instalamos, te mostramos cómo se usa y nos quedamos cerca.' },
]

export function ComoEmpezamos() {
  return (
    <section id="como-empezamos">
      <div className="wrap grid gap-10 py-[88px] lg:grid-cols-[.8fr_1.2fr]">
        <h2 className="h2">De la charla a tenerlo andando</h2>
        <ol className="pasos grid gap-3.5">
          {pasos.map((p) => (
            <li key={p.titulo} className="grid grid-cols-[auto_1fr] gap-x-[18px] gap-y-1 rounded-[20px] bg-white px-6 py-[22px]">
              <h3 className="display text-[21px] text-[var(--ink)]">{p.titulo}</h3>
              <p>{p.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function Productos() {
  return (
    <section aria-label="Productos propios">
      <div className="wrap flex flex-wrap items-baseline gap-x-10 gap-y-3.5 pb-[88px]">
        <b className="display text-xl text-[var(--ink)]">Productos propios</b>
        <span>
          Abocato, asistente legal con IA <span className="pill bg-[#D5EDC1] text-[#2F5D17]">En producción</span>{' '}
          <a href="https://abocato.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-[var(--link)] underline">
            abocato.com
          </a>
        </span>
        <span>
          Vendalia, compra y venta de negocios <span className="pill bg-[#E1E9E6] text-[#4A5B57]">En desarrollo</span>
        </span>
      </div>
    </section>
  )
}

export function Preguntas() {
  return (
    <section id="preguntas" className="bg-white">
      <div className="wrap grid gap-10 py-[88px] lg:grid-cols-[.8fr_1.2fr]">
        <h2 className="h2">Lo que más nos preguntan</h2>
        <div className="border-t-2 border-[var(--ink)]">
          {PREGUNTAS.map((q) => (
            <details key={q.p} className="group border-b-2 border-[var(--ink)] py-5">
              <summary className="display flex cursor-pointer list-none items-center justify-between gap-4 text-xl text-[var(--ink)]">
                {q.p}
                <span className="text-3xl font-normal leading-none text-[var(--teal)] transition group-open:rotate-45" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-[60ch] text-lg">{q.r}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Cierre() {
  return (
    <section id="contacto" className="bg-[var(--ink)] text-white">
      <div className="wrap flex flex-wrap items-center justify-between gap-7 py-[84px]">
        <div>
          <h2 className="h2 max-w-[640px]" style={{ color: '#fff' }}>
            Escribinos. Respondemos hoy.
          </h2>
          <p className="mt-3 text-lg text-[var(--texto-claro)]">La primera charla es gratis y dura 15 minutos.</p>
        </div>
        <a href={WA_CHARLA} target="_blank" rel="noopener noreferrer" className="btn bg-[var(--verde)] text-[var(--ink)]">
          Agendar charla gratis <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}

export function Pie() {
  return (
    <footer className="bg-[var(--navy-3)] text-sm text-[var(--texto-claro)]">
      <div className="wrap flex flex-wrap items-center justify-between gap-x-7 gap-y-4 py-7">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/netcore-horizontal-dark.svg" alt="Netcore" width={124} height={36} className="h-9 w-auto" loading="lazy" />
        <p className="flex flex-wrap gap-x-5 gap-y-1">
          <a href={WA_CHARLA} target="_blank" rel="noopener noreferrer" className="hover:text-white">
            {EMPRESA.telefono}
          </a>
          <a href={`mailto:${EMPRESA.email}`} className="break-all hover:text-white">
            {EMPRESA.email}
          </a>
          <span>{EMPRESA.cobertura}</span>
        </p>
        <p className="flex w-full flex-wrap gap-x-5 gap-y-1 border-t border-white/10 pt-4 text-xs">
          <span>
            © {new Date().getFullYear()} {EMPRESA.razonSocial} · RUC {EMPRESA.ruc}
          </span>
          <a href="/privacidad" className="underline hover:text-white">
            Privacidad
          </a>
        </p>
      </div>
    </footer>
  )
}
