import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import { EMPRESA } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Política de privacidad | Netcore',
  description: 'Cómo usa Netcore Technology los datos que nos enviás por WhatsApp o correo.',
  alternates: { canonical: '/privacidad' },
}

export default function Privacidad() {
  return (
    <>
      <header className="bg-navy py-5">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <a href="/" aria-label="Volver al inicio">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/netcore-horizontal-dark.svg" alt="Netcore" className="h-8 w-auto" width={138} height={40} />
          </a>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-4 py-14 text-slate-700 sm:px-6">
        <h1 className="font-display text-3xl font-extrabold text-navy">Política de privacidad</h1>
        <div className="mt-8 space-y-5 text-[15px] leading-relaxed">
          <p>
            Este sitio es de {EMPRESA.razonSocial} (RUC {EMPRESA.ruc}). No tiene formularios ni cuentas de usuario y
            no usa cookies de seguimiento.
          </p>
          <p>
            Cuando nos escribís por WhatsApp o por correo, usamos tu nombre, tu contacto y lo que nos contás solo para
            responderte, preparar presupuestos y coordinar trabajos. No vendemos ni compartimos esos datos con
            terceros, salvo lo que exija la ley, por ejemplo para facturar.
          </p>
          <p>
            Podés pedirnos ver, corregir o borrar tus datos escribiendo a{' '}
            <a href={`mailto:${EMPRESA.emailAdmin}`} className="font-semibold text-enlace underline">
              {EMPRESA.emailAdmin}
            </a>
            .
          </p>
        </div>
        <a href="/" className="mt-10 inline-block font-semibold text-enlace hover:underline">
          ← Volver al inicio
        </a>
      </main>
      <Footer />
    </>
  )
}
