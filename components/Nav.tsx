import { WA_CHARLA } from '@/lib/site'

const links = [
  { label: 'Qué hacemos', href: '#que-hacemos' },
  { label: 'Cómo empezamos', href: '#como-empezamos' },
  { label: 'Preguntas', href: '#preguntas' },
]

export default function Nav() {
  return (
    <header className="wrap flex items-center justify-between gap-4 py-[22px]">
      <a href="/" aria-label="Netcore, inicio">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/netcore-horizontal-light.svg" alt="Netcore" width={124} height={36} className="h-9 w-auto" />
      </a>
      <nav aria-label="Principal" className="hidden md:block">
        <ul className="flex gap-7 text-[15px] font-medium text-[var(--ink)]">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:underline">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <a
        href={WA_CHARLA}
        target="_blank"
        rel="noopener noreferrer"
        className="btn bg-[var(--ink)] text-white"
        style={{ padding: '10px 16px', fontSize: 14, borderRadius: 11 }}
      >
        Agendar charla
      </a>
    </header>
  )
}
