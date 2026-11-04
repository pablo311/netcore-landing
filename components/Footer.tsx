import { EMAIL, WHATSAPP_LABEL, WHATSAPP_URL } from '@/lib/contact'

const columns = [
  {
    title: 'Segmentos',
    links: [
      { label: 'Infraestructura',  href: '#infraestructura' },
      { label: 'Desarrollo',       href: '#desarrollo' },
      { label: 'Automatizaciones', href: '#automatizaciones' },
    ],
  },
  {
    title: 'Portafolio',
    links: [
      { label: 'Abocato',    href: 'https://abocato.com' },
      { label: 'Vendalia',   href: '#portafolio' },
      { label: 'Propy',      href: '#portafolio' },
      { label: 'CertiCarPy', href: '#portafolio' },
    ],
  },
  {
    title: 'Contacto',
    links: [
      { label: `WhatsApp ${WHATSAPP_LABEL}`, href: WHATSAPP_URL },
      { label: EMAIL,                        href: `mailto:${EMAIL}` },
      { label: 'Asunción, Paraguay',         href: null },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-[#B7C8DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10 border-t border-white/10 flex flex-col gap-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))] gap-10">
          <div className="flex flex-col gap-4">
            <img src="/brand/netcore-horizontal-dark.svg" alt="Netcore" className="h-8 w-auto self-start" />
            <p className="text-sm leading-relaxed max-w-xs">
              Infraestructura, desarrollo y automatizaciones para empresas de Paraguay.
            </p>
          </div>
          {columns.map(c => (
            <nav key={c.title} aria-label={c.title} className="flex flex-col gap-3 text-sm">
              <p className="text-xs font-semibold tracking-[3px] uppercase text-white">{c.title}</p>
              {c.links.map(l => l.href
                ? <a key={l.label} href={l.href}
                    {...(l.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="hover:text-white transition-colors break-all">{l.label}</a>
                : <span key={l.label}>{l.label}</span>)}
            </nav>
          ))}
        </div>
        <p className="pt-6 border-t border-white/10 text-sm text-[#8FA6BD]">
          © {new Date().getFullYear()} Netcore Technology EAS
        </p>
      </div>
    </footer>
  )
}
