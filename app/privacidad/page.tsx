import type { Metadata } from 'next'
import Cabecera from '@/components/Cabecera'
import Pie from '@/components/Pie'
import { EMPRESA } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Política de privacidad',
  description: 'Cómo usa Netcore Technology los datos que nos enviás por WhatsApp o correo.',
  alternates: { canonical: '/privacidad' },
}

export default function Privacidad() {
  return (
    <>
      <Cabecera actual="/privacidad" />
      <main className="pagina">
        <div className="wrap">
          <h1 className="display">Política de privacidad</h1>
          <div className="prosa">
            <p>
              Este sitio es de {EMPRESA.razonSocialLegible} (RUC&nbsp;{EMPRESA.ruc}). No tiene cuentas de usuario ni usa cookies de
              seguimiento. Los botones no guardan nada: solo arman un mensaje y abren WhatsApp para que lo envíes vos.
              Lo único que el sitio recuerda, y solo en tu navegador, es si dejaste abierto el detalle técnico.
            </p>
            <p>
              Cuando nos escribís por WhatsApp o por correo, usamos tu nombre, tu contacto y lo que nos contás solo para
              responderte, preparar presupuestos y coordinar trabajos. No vendemos ni compartimos esos datos con
              terceros, salvo lo que exija la ley, por ejemplo para facturar.
            </p>
            <p>
              Podés pedirnos ver, corregir o borrar tus datos escribiendo a{' '}
              <a href={`mailto:${EMPRESA.email}`}>{EMPRESA.email}</a>.
            </p>
          </div>
        </div>
      </main>
      <Pie />
    </>
  )
}
