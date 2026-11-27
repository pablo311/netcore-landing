import type { Foco } from '@/lib/servicios'

// La red del panel derecho: el negocio en el centro y lo que conectamos alrededor.
// Es un dibujo de ejemplo, no el plano de ningún cliente.
const NODOS: { k: string; t: string; x: number; y: number }[] = [
  { k: 'wifi', t: 'WiFi', x: 200, y: 48 },
  { k: 'camaras', t: 'Cámaras', x: 338, y: 118 },
  { k: 'caja', t: 'Caja', x: 338, y: 282 },
  { k: 'whatsapp', t: 'WhatsApp', x: 200, y: 352 },
  { k: 'sistema', t: 'Sistema', x: 62, y: 282 },
  { k: 'deposito', t: 'Depósito', x: 62, y: 118 },
]

export default function Red({ foco }: { foco: Foco }) {
  return (
    <svg
      className="red"
      data-foco={foco}
      viewBox="0 0 400 400"
      role="img"
      aria-label="Tu negocio en el centro, conectado al WiFi, las cámaras, la caja, el WhatsApp, el sistema y el depósito"
    >
      {NODOS.map((n, i) => {
        const sig = NODOS[(i + 1) % NODOS.length]
        const ida = `M200 200L${n.x} ${n.y}`
        const vuelta = `M${n.x} ${n.y}L200 200`
        return (
          <g key={n.k} className={`rama ${n.k}`}>
            <path className="hilo borde" d={`M${n.x} ${n.y}L${sig.x} ${sig.y}`} />
            <path className="hilo" d={ida} />
            <path
              className="va"
              pathLength={100}
              d={i % 2 ? ida : vuelta}
              style={{ animationDuration: `${2.6 + i * 0.35}s`, animationDelay: `${-i * 0.7}s` }}
            />
          </g>
        )
      })}
      <g className="centro" transform="translate(200 200)">
        <circle className="halo" r="16" />
        <circle r="16" />
        <text x="28" y="5">
          Tu negocio
        </text>
      </g>
      {NODOS.map((n) => (
        <g key={n.k} className={`n ${n.k}`} transform={`translate(${n.x} ${n.y})`}>
          <circle r="7" />
          <text y={n.y < 200 ? -16 : 28} textAnchor="middle">
            {n.t}
          </text>
        </g>
      ))}
    </svg>
  )
}
