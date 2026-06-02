import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Netcore Technology — Soluciones IT e Inteligencia Artificial en Paraguay',
  description:
    'Desarrollamos software a medida, soluciones de IA y plataformas digitales para empresas en Paraguay. ERP, agentes IA, seguridad laboral, e-commerce y más.',
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
      <body>{children}</body>
    </html>
  )
}
