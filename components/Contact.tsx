export default function Contact() {
  return (
    <section id="contacto" className="py-24 px-4 sm:px-6 bg-white/[0.02]">
      <div className="max-w-2xl mx-auto text-center">
        <div className="glass rounded-3xl p-10 sm:p-14">
          <p className="text-brand-400 font-medium text-sm uppercase tracking-widest mb-3">Contacto</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Hablemos de tu proyecto
          </h2>
          <p className="text-slate-400 mb-10 leading-relaxed">
            Contanos que necesitas y coordinamos una demo o reunion sin compromiso.
            Respondemos en menos de 24 horas habiles.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/595973323895?text=Hola%20Netcore%2C%20me%20interesa%20conocer%20sus%20soluciones."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
            <a
              href="mailto:contacto@netcoretec.com.py"
              className="flex items-center justify-center gap-2 px-8 py-4 glass glass-hover text-white font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email
            </a>
          </div>

          <p className="text-slate-500 text-xs mt-8">
            Asuncion, Paraguay &mdash; contacto@netcoretec.com.py
          </p>
        </div>
      </div>
    </section>
  )
}
