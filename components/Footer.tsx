export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-brand-600 flex items-center justify-center">
            <span className="text-white font-bold text-xs">N</span>
          </div>
          <span className="text-slate-400 text-sm">Netcore Technology EAS</span>
        </div>

        <p className="text-slate-600 text-sm">
          &copy; {new Date().getFullYear()} Netcore Technology EAS — Asuncion, Paraguay
        </p>

        <div className="flex items-center gap-6 text-sm text-slate-500">
          <a href="#servicios" className="hover:text-slate-300 transition-colors">Servicios</a>
          <a href="#productos" className="hover:text-slate-300 transition-colors">Productos</a>
          <a href="#contacto" className="hover:text-slate-300 transition-colors">Contacto</a>
        </div>
      </div>
    </footer>
  )
}
