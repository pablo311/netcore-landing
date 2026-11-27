import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { EMPRESA, SITE_URL } from '@/lib/site'

// Las tipografías van en el repo (app/fonts, licencia OFL): el build no
// depende de bajar nada de Google Fonts. Son variables: cubren todos los pesos que se usan.
const inter = localFont({
  src: './fonts/inter-latin-wght-normal.woff2',
  weight: '100 900',
  variable: '--font-inter',
  display: 'swap',
})
const bricolage = localFont({
  src: './fonts/bricolage-grotesque-latin-wght-normal.woff2',
  weight: '200 800',
  variable: '--font-bricolage',
  display: 'swap',
})

const TITULO = 'Netcore | Internet, cámaras y tecnología para tu negocio en Asunción'
const DESCRIPCION =
  'Internet y WiFi que no se cortan, cableado y fibra óptica, cámaras que ves desde el celular, un WhatsApp que atiende solo y sistemas a medida. Para negocios y empresas de Asunción.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITULO, template: '%s | Netcore' },
  description: DESCRIPCION,
  alternates: { canonical: '/' },
  authors: [{ name: EMPRESA.razonSocial }],
  openGraph: {
    title: TITULO,
    description: DESCRIPCION,
    url: SITE_URL,
    siteName: EMPRESA.nombre,
    locale: 'es_PY',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: TITULO, description: DESCRIPCION },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = { themeColor: '#FFFFFF' }

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#empresa`,
  name: EMPRESA.nombre,
  legalName: EMPRESA.razonSocial,
  taxID: EMPRESA.ruc,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  image: `${SITE_URL}/opengraph-image`,
  telephone: EMPRESA.telefonoE164,
  email: EMPRESA.email,
  description: DESCRIPCION,
  address: { '@type': 'PostalAddress', addressLocality: 'Asunción', addressCountry: 'PY' },
  areaServed: ['Asunción', 'Gran Asunción', 'Ciudad del Este', 'Paraguay'].map((n) => ({
    '@type': 'Place',
    name: n,
  })),
  knowsAbout: [
    'Internet y WiFi para negocios',
    'Redes y cableado estructurado',
    'Fibra óptica',
    'Cámaras de seguridad y alarmas',
    'Automatización de WhatsApp',
    'Sistemas a medida',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-PY" className={`${inter.variable} ${bricolage.variable}`} suppressHydrationWarning>
      <head>
        {/* Marca que hay JavaScript antes de pintar, para que el menú de celular no parpadee. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script src="/sitio.js" defer />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  )
}
