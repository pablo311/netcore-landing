import type { Metadata, Viewport } from 'next'
import { Bricolage_Grotesque, Inter } from 'next/font/google'
import './globals.css'
import { EMPRESA, PREGUNTAS, SITE_URL } from '@/lib/site'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-bricolage',
  display: 'swap',
})

const TITULO = 'Cableado estructurado y fibra óptica en Asunción | Netcore'
const DESCRIPCION =
  'Instalamos y certificamos redes UTP Cat6 y fibra óptica para empresas y edificios en Asunción. Certificación Fluke, cámaras y racks. Presupuesto sin cargo.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITULO,
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

export const viewport: Viewport = { themeColor: '#0A2540' }

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#empresa`,
      name: EMPRESA.nombre,
      legalName: EMPRESA.razonSocial,
      taxID: EMPRESA.ruc,
      url: SITE_URL,
      logo: `${SITE_URL}/icon.png`,
      image: `${SITE_URL}/opengraph-image`,
      telephone: EMPRESA.telefonoE164,
      email: EMPRESA.emailVentas,
      description: DESCRIPCION,
      address: { '@type': 'PostalAddress', addressLocality: 'Asunción', addressCountry: 'PY' },
      areaServed: ['Asunción', 'Gran Asunción', 'San Lorenzo', 'Ciudad del Este', 'Paraguay'].map(
        (n) => ({ '@type': 'Place', name: n }),
      ),
      knowsAbout: [
        'Cableado estructurado',
        'Certificación de cableado UTP Cat6',
        'Fibra óptica',
        'Cámaras IP y CCTV',
        'Racks y switches',
        'Botones de pánico',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: PREGUNTAS.map((q) => ({
        '@type': 'Question',
        name: q.p,
        acceptedAnswer: { '@type': 'Answer', text: q.r },
      })),
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-PY" className={`${inter.variable} ${bricolage.variable}`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
