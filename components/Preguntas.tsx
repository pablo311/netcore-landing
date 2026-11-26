import { PREGUNTAS } from '@/lib/site'

export default function Preguntas() {
  return (
    <section id="preguntas" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <p className="eyebrow">Preguntas frecuentes</p>
        <h2 className="titulo-seccion mt-3">Lo que más nos consultan</h2>
        <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
          {PREGUNTAS.map((q) => (
            <details key={q.p} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold text-navy">
                {q.p}
                <span className="text-2xl font-normal text-primario transition group-open:rotate-45" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-600">{q.r}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
