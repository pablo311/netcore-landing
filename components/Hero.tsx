'use client'
import { useState } from 'react'
import { PROBLEMAS, waLink } from '@/lib/site'

const CIERRE = '¿Te queda bien una charla de 15 minutos esta semana?'

export default function Hero() {
  const [i, setI] = useState(0)
  const p = PROBLEMAS[i]
  const globos = [
    { de: 'yo', texto: p.dice },
    ...p.respuestas.map((texto) => ({ de: 'net', texto })),
    { de: 'net', texto: CIERRE },
  ]

  return (
    <section className="wrap grid items-start gap-12 pb-16 pt-6 lg:grid-cols-[1.15fr_.85fr] lg:pb-24 lg:pt-8">
      <div>
        <h1 className="display titular">
          ¿Qué te está <em>frenando</em> el negocio?
        </h1>
        <p className="mt-6 max-w-[520px] text-xl">
          Contanos por WhatsApp. Te decimos cómo lo arreglamos y cuánto sale, sin vueltas.
        </p>
        <p className="mt-8 text-[13px] font-semibold uppercase tracking-[0.14em] text-[var(--acero)]">
          Elegí lo que más te suena
        </p>
        <div className="mt-3 flex flex-wrap gap-2.5" role="group" aria-label="Problemas frecuentes">
          {PROBLEMAS.map((x, n) => (
            <button key={x.boton} type="button" className="problema" aria-pressed={n === i} onClick={() => setI(n)}>
              {x.boton}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-center lg:justify-end">
        <div className="telefono">
          <div className="pantalla">
            <div className="flex items-center gap-3 bg-[var(--navy)] px-4 py-3.5 text-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/netcore-icon.svg" alt="" width={38} height={38} className="h-[38px] w-[38px] rounded-full bg-white" />
              <div>
                <b className="block text-[15px]">Netcore</b>
                <span className="text-xs text-[var(--texto-claro)]">en línea</span>
              </div>
              <span className="pill ml-auto bg-white/15 uppercase tracking-[0.08em] text-white" style={{ fontSize: 11 }}>
                Ejemplo
              </span>
            </div>
            {/* key reinicia la animación de los globos al cambiar de problema */}
            <div key={i} className="flex flex-1 flex-col gap-2.5 px-3.5 py-[18px]" aria-live="polite">
              {globos.map((g, n) => (
                <p key={n} className={`globo ${g.de}`} style={{ animationDelay: `${n * 0.45}s` }}>
                  {g.texto}
                </p>
              ))}
            </div>
            <a
              href={waLink(`Hola Netcore. ${p.dice}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn mx-3.5 mb-4 bg-[#1FA855] text-white"
            >
              Mandar esto por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
