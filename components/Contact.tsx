import { EMAIL, WHATSAPP_LABEL, WHATSAPP_URL } from '@/lib/contact'

export default function Contact() {
  return (
    <section id="contacto" className="bg-navy text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-10 lg:gap-16 items-end">
        <div className="flex flex-col gap-5">
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl leading-none tracking-[-0.02em]">
            ¿Tenés un problema que el software podría resolver?
          </h2>
          <p className="text-lg text-[#B7C8DA] max-w-xl">
            Contanos qué necesitás. Respondemos en menos de 24 horas hábiles y coordinamos
            una reunión sin compromiso.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
            className="group rounded-2xl bg-nc-blue text-navy p-6 flex items-center justify-between gap-4 hover:bg-[#6DB5E5] transition-colors">
            <span className="flex flex-col gap-1">
              <span className="text-sm font-medium">La vía más rápida</span>
              <span className="font-display font-bold text-2xl">Escribinos por WhatsApp</span>
              <span className="text-sm">{WHATSAPP_LABEL}</span>
            </span>
            <span className="text-2xl group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
          </a>
          <a href={`mailto:${EMAIL}`}
            className="group rounded-2xl border border-white/25 p-6 flex items-center justify-between gap-4 hover:border-white transition-colors">
            <span className="flex flex-col gap-1">
              <span className="text-sm text-[#B7C8DA]">Por email</span>
              <span className="font-semibold text-lg break-all">{EMAIL}</span>
            </span>
            <span className="text-2xl group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
