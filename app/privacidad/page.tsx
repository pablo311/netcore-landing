import type { Metadata } from 'next'
import { Pie } from '@/components/Secciones'
import { EMPRESA } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Política de privacidad | Netcore',
  description: 'Cómo usa Netcore Technology los datos que nos enviás por WhatsApp o correo.',
  alternates: { canonical: '/privacidad' },
}

export default function Privacidad() {
  return (
    <>
      <header className="py-5">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <a href="/" aria-label="Volver al inicio">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/netcore-horizontal-light.svg" alt="Netcore" className="h-9 w-auto" width={138} height={40} />
          </a>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-4 py-14 text-[var(--texto)] sm:px-6">
        <h1 className="display text-4xl text-[var(--ink)]">Política de privacidad</h1>
        <div className="mt-8 space-y-5 text-[15px] leading-relaxed">
          <p>
            Este sitio es de {EMPRESA.razonSocial} (RUC {EMPRESA.ruc}). No tiene cuentas de usuario ni usa cookies
            de seguimiento. Los botones del sitio no guardan nada: solo arman un mensaje y abren WhatsApp para
            que lo envíes vos.
          </p>
          <p>
            Cuando nos escribís por WhatsApp o por correo, usamos tu nombre, tu contacto y lo que nos contás solo para
            responderte, preparar presupuestos y coordinar trabajos. No vendemos ni compartimos esos datos con
            terceros, salvo lo que exija la ley, por ejemplo para facturar.
          </p>
          <p>
            Podés pedirnos ver, corregir o borrar tus datos escribiendo a{' '}
            <a href={`mailto:${EMPRESA.email}`} className="font-semibold text-[var(--link)] underline">
              {EMPRESA.email}
            </a>
            .
          </p>
        </div>
        <a href="/" className="mt-10 inline-block font-semibold text-[var(--link)] hover:underline">
          ← Volver al inicio
        </a>
      </main>
      <Pie />
    </>
  )
}
