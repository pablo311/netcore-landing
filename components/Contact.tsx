const WHATSAPP_URL = 'https://wa.me/595973323895?text=Hola%20Netcore%2C%20me%20interesa%20conocer%20sus%20soluciones.'
const EMAIL = 'contacto@netcoretec.com.py'

export default function Contact() {
  return (
    <section id="contacto" className="bg-navy text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-12 flex flex-col gap-14">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl leading-none tracking-[-0.02em] max-w-3xl">
            ¿Tenés un problema que el software podría resolver?
          </h2>
          <div className="flex flex-col sm:flex-row gap-3.5 shrink-0">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="px-7 py-4 rounded-xl bg-nc-blue text-navy font-bold text-center hover:bg-[#6DB5E5] transition-colors">
              Escribinos por WhatsApp
            </a>
            <a href={`mailto:${EMAIL}`}
              className="px-7 py-4 rounded-xl border-[1.5px] border-white/40 text-white font-semibold text-center hover:border-white transition-colors">
              {EMAIL}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
