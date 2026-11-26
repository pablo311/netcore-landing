// Marcas que usamos en obras y ventas. Cinta en movimiento, solo CSS.
const marcas = ['Furukawa', 'Fluke', 'Ubiquiti', 'Hikvision', 'TP-Link', 'Dell']

export default function Marcas() {
  return (
    <div className="relative mx-auto mt-16 max-w-6xl px-4 sm:px-6">
      <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-white/50">
        Trabajamos con marcas como
      </p>
      <div className="cinta-mascara mt-5 overflow-hidden">
        <ul className="cinta flex w-max items-center font-display text-xl font-bold text-white/55 sm:text-2xl">
          {[...marcas, ...marcas, ...marcas, ...marcas].map((m, i) => (
            <li key={i} aria-hidden={i >= marcas.length} className="whitespace-nowrap pr-12 sm:pr-16">
              {m}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
