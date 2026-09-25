import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Netcore Technology — Soluciones IT e Inteligencia Artificial en Paraguay',
  description:
    'Netcore es la casa de Abocato, Vendalia, Syskore y SafetyAI: software e IA hechos en Paraguay. Y si lo que necesitás no existe, lo construimos a medida.',
  keywords: 'software Paraguay, inteligencia artificial Paraguay, ERP CRM, agente IA WhatsApp, seguridad laboral IA',
  authors: [{ name: 'Netcore Technology EAS' }],
  openGraph: {
    title: 'Netcore Technology — IT e IA en Paraguay',
    description: 'Software a medida e inteligencia artificial para empresas paraguayas.',
    url: 'https://netcoretec.com.py',
    siteName: 'Netcore Technology',
    locale: 'es_PY',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Netcore Technology',
    description: 'Software a medida e IA para empresas en Paraguay.',
  },
  metadataBase: new URL('https://netcoretec.com.py'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=Inter:wght@400;500;600;700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
