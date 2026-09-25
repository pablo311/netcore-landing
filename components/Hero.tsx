export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-14 sm:pb-20 flex flex-col gap-7">
      <p className="flex items-center gap-2.5 text-sm font-medium text-nc-steel">
        <span className="w-2 h-2 rounded-full bg-nc-teal" />
        Netcore Technology · Hecho en Paraguay
      </p>
      <h1 className="font-display font-extrabold text-[38px] sm:text-6xl xl:text-[84px] break-words leading-[0.98] tracking-[-0.03em] text-ink max-w-5xl">
        Infraestructura, desarrollo y automatizaciones para empresas de acá.
      </h1>
      <p className="text-lg sm:text-xl leading-relaxed text-muted max-w-2xl">
        Montamos la base tecnológica de tu empresa, construimos el software que necesita
        y automatizamos lo que hoy se hace a mano.
      </p>
      <div className="flex flex-col sm:flex-row gap-3.5 mt-1">
        <a href="#contacto" className="px-7 py-4 rounded-xl bg-ink text-white font-semibold text-center hover:bg-navy transition-colors">
          Hablemos de tu proyecto
        </a>
        <a href="#portafolio" className="px-7 py-4 rounded-xl border-[1.5px] border-ink text-ink font-semibold text-center hover:bg-mist transition-colors">
          Ver portafolio
        </a>
      </div>
    </section>
  )
}
