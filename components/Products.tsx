import type { ReactNode } from 'react'

type Product = {
  id: string
  name: string
  status: 'En vivo' | 'Operativo' | 'En desarrollo'
  site?: string
  desc: string
  cta: { label: string; href: string; className: string }
  visual: ReactNode
}

const statusStyle: Record<Product['status'], string> = {
  'En vivo':       'bg-[#E3F1D8] text-[#2F5D16]',
  'Operativo':     'bg-[#E3F1D8] text-[#2F5D16]',
  'En desarrollo': 'bg-[#FCEFCB] text-[#6E5310]',
}

const products: Product[] = [
  {
    id: 'abocato',
    name: 'Abocato',
    status: 'En vivo',
    site: 'abocato.com',
    desc: 'Un asistente legal con IA que responde en lenguaje simple, con la Constitución, el Código Civil, Penal, Laboral y Procesal del Paraguay.',
    cta: { label: 'Abrir Abocato', href: 'https://abocato.com', className: 'text-abocato-dark' },
    visual: (
      <div className="bg-abocato-navy rounded-3xl p-6 sm:p-8 flex flex-col gap-3.5">
        <p className="self-end max-w-sm px-4 py-3.5 rounded-2xl rounded-br bg-abocato-gold text-abocato-navy text-[15px] leading-normal">
          Me despidieron sin preaviso. ¿Qué me corresponde?
        </p>
        <p className="self-start max-w-md px-4 py-3.5 rounded-2xl rounded-bl bg-abocato-panel text-[#E7ECF3] text-[15px] leading-relaxed">
          Según el Código del Trabajo, en un despido sin preaviso te pueden corresponder la
          indemnización por preaviso y otros haberes pendientes. Te explico cada uno paso a paso.
        </p>
        <p className="text-xs text-[#9AA9BD]">
          Ejemplo ilustrativo. Abocato brinda orientación informativa, no reemplaza a un abogado.
        </p>
      </div>
    ),
  },
  {
    id: 'vendalia',
    name: 'Vendalia',
    status: 'En desarrollo',
    desc: 'El marketplace de negocios del Paraguay. Publicar es gratis, y una red de contadores y abogados aliados acompaña cada operación.',
    cta: { label: 'Quiero publicar mi negocio', href: '#contacto', className: 'text-vendalia-ink' },
    visual: (
      <div className="bg-white border border-[#E2E6F0] rounded-3xl p-6 sm:p-7 flex flex-col gap-3.5">
        <img src="/brand/vendalia-light.svg" alt="Vendalia" className="h-8 w-auto self-start" />
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { title: 'Ferretería en Luque', meta: '12 años operando', tint: 'bg-[#EFEAFD]' },
            { title: 'Franquicia de cafetería', meta: 'Asunción', tint: 'bg-[#E6F4FE]' },
          ].map(l => (
            <div key={l.title} className="border border-[#ECE8F8] rounded-2xl p-4 flex flex-col gap-1.5">
              <div className={`h-16 rounded-xl ${l.tint}`} />
              <p className="font-semibold text-[15px]">{l.title}</p>
              <p className="text-[13px] text-[#6B7684]">{l.meta}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-[#6B7684]">Publicaciones de ejemplo.</p>
      </div>
    ),
  },
  {
    id: 'syskore',
    name: 'Syskore',
    status: 'Operativo',
    site: 'syskore.netcoretec.com.py',
    desc: 'El ERP que también se maneja por WhatsApp. Clientes, facturación, stock, proyectos y KPIs, con un agente de IA que responde por vos.',
    cta: { label: 'Solicitar demo', href: 'https://syskore.netcoretec.com.py', className: 'text-syskore-navy' },
    visual: (
      <div className="bg-syskore-charcoal rounded-3xl p-6 sm:p-7 grid grid-cols-3 gap-3">
        {['Facturas del mes', 'Stock bajo', 'Por cobrar'].map(k => (
          <div key={k} className="bg-syskore-panel rounded-2xl p-4 flex flex-col gap-2">
            <span className="text-xs text-[#9AA3B8]">{k}</span>
            <span className="h-6 w-3/4 rounded bg-white/15" aria-hidden="true" />
          </div>
        ))}
        <p className="col-span-3 bg-syskore-navy rounded-2xl px-4 py-3.5 text-sm leading-relaxed text-[#E4E9F2]">
          Por WhatsApp: «¿Qué clientes tienen saldo vencido?». El agente responde con la lista y
          ofrece mandarles un recordatorio.
        </p>
      </div>
    ),
  },
  {
    id: 'safetyai',
    name: 'SafetyAI',
    status: 'En desarrollo',
    desc: 'Visión computacional para seguridad industrial. Usa tus cámaras IP para detectar falta de EPP y personas en zonas de riesgo, y avisa en el momento.',
    cta: { label: 'Coordinar demo', href: '#contacto', className: 'text-safety-deep' },
    visual: (
      <div className="bg-safety-navy rounded-3xl p-6 sm:p-7 flex flex-col gap-3">
        <div className="relative h-56 rounded-2xl bg-safety-panel overflow-hidden">
          <div className="absolute left-[15%] top-10 w-[24%] h-40 border-2 border-safety-teal rounded-md" />
          <span className="absolute left-[15%] top-3 px-2 py-0.5 rounded bg-safety-teal text-safety-navy text-xs font-bold">Casco · OK</span>
          <div className="absolute left-[58%] top-14 w-[22%] h-36 border-2 border-[#F2A541] rounded-md" />
          <span className="absolute left-[58%] top-7 px-2 py-0.5 rounded bg-[#F2A541] text-safety-navy text-xs font-bold">Sin chaleco</span>
        </div>
        <p className="text-xs text-[#8FA3B8]">Cámara 03 · Depósito. Vista de ejemplo.</p>
      </div>
    ),
  },
]

export default function Products() {
  return (
    <section id="productos" className="bg-mist py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16 sm:gap-20">
        <div className="flex flex-col gap-3 max-w-3xl">
          <p className="text-[13px] font-semibold tracking-[4px] text-nc-steel">NUESTROS PRODUCTOS</p>
          <h2 className="font-display font-extrabold text-4xl sm:text-[56px] leading-[1.02] tracking-[-0.02em]">
            Cada uno resuelve un problema que vimos de cerca.
          </h2>
        </div>

        {products.map((p, i) => (
          <article key={p.id} id={p.id} className="scroll-mt-24 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className={`flex flex-col gap-4 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="flex items-center gap-3">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-md ${statusStyle[p.status]}`}>{p.status}</span>
                {p.site && <span className="text-sm text-[#6B7684]">{p.site}</span>}
              </div>
              <h3 className="font-display font-bold text-4xl">{p.name}</h3>
              <p className="text-lg leading-relaxed text-muted max-w-xl">{p.desc}</p>
              <a href={p.cta.href}
                target={p.cta.href.startsWith('http') ? '_blank' : undefined}
                rel={p.cta.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`font-semibold ${p.cta.className} hover:underline underline-offset-4`}>
                {p.cta.label} →
              </a>
            </div>
            <div className={i % 2 === 1 ? 'lg:order-1' : ''}>{p.visual}</div>
          </article>
        ))}
      </div>
    </section>
  )
}
