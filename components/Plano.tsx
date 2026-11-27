import type { CSSProperties } from 'react'
import type { Capa } from '@/lib/servicios'

// El plano de un local de ejemplo. Es la pieza firma del sitio: todo sale del rack
// y cada servicio es una capa que se enciende con `data-capa`.
// Es un dibujo inventado, no el local de ningún cliente: por eso abajo dice «Plano de ejemplo».

const CABLES: { d: string; capas: string; t: string; r?: string }[] = [
  { d: 'M401 257H366V335H330', capas: 'auto sis', t: '3s' },
  { d: 'M401 257H366V200H190', capas: 'wifi', t: '3.6s', r: '-1.1s' },
  { d: 'M401 257H366V62H72', capas: 'cam', t: '4.6s', r: '-2.3s' },
  { d: 'M401 257V88H440', capas: 'sis', t: '3.2s', r: '-0.6s' },
  { d: 'M401 257V120H480', capas: 'wifi', t: '3.4s', r: '-1.9s' },
  { d: 'M401 257V214H525V176', capas: 'auto sis', t: '3.8s', r: '-2.8s' },
  { d: 'M401 257V398H368', capas: 'cam', t: '3s', r: '-1.4s' },
  { d: 'M401 257V404H210V421', capas: 'cam', t: '4.4s', r: '-3.1s' },
  { d: 'M401 257H568V398', capas: 'cam', t: '4s', r: '-0.3s' },
]

const PROBADOS: [number, number][] = [
  [342, 323],
  [202, 188],
  [84, 76],
  [452, 76],
  [492, 108],
  [537, 190],
  [356, 386],
  [222, 433],
  [556, 386],
]

const CONO = 'M0 0 L128 36 A133 133 0 0 1 36 128 Z'

function v(vars: Record<string, string | undefined>) {
  return vars as CSSProperties
}

export default function Plano({
  capa,
  entrada = false,
  descripcion,
}: {
  capa: Capa
  entrada?: boolean
  descripcion: string
}) {
  return (
    <>
      <svg
        className={entrada ? 'plano entrada' : 'plano'}
        data-capa={capa}
        data-base={capa}
        viewBox="0 0 640 460"
        role="img"
        aria-label={descripcion}
      >
        <defs>
          <radialGradient id="plano-cono" cx="0" cy="0" r="140" gradientUnits="userSpaceOnUse">
            <stop offset="0" style={{ stopColor: 'var(--cian)' }} stopOpacity="0.5" />
            <stop offset="1" style={{ stopColor: 'var(--cian)' }} stopOpacity="0" />
          </radialGradient>
          <clipPath id="plano-adentro">
            <rect x="61" y="51" width="518" height="358" />
          </clipPath>
        </defs>

        <g className="mueble">
          <rect x="100" y="105" width="140" height="16" />
          <rect x="100" y="150" width="140" height="16" />
          <rect x="100" y="245" width="140" height="16" />
          <rect x="100" y="290" width="140" height="16" />
          <rect x="290" y="322" width="70" height="26" />
          <rect x="410" y="75" width="60" height="26" />
          <circle cx="440" cy="112" r="5" />
          <rect x="500" y="150" width="50" height="26" />
          <circle cx="525" cy="140" r="5" />
          <rect x="430" y="285" width="130" height="14" />
          <rect x="430" y="320" width="130" height="14" />
          <rect x="430" y="355" width="130" height="14" />
        </g>
        <path
          className="muro"
          pathLength={1}
          d="M60 50H580V410H240M180 410H60V50M380 50V130M380 170V300M380 340V410M380 230H580"
        />
        <path
          className="puerta"
          d="M240 410V350A60 60 0 0 0 180 410M380 170H420A40 40 0 0 0 380 130M380 300H420A40 40 0 0 1 380 340"
        />
        <text x="76" y="396">Salón</text>
        <text x="570" y="70" textAnchor="end">
          Oficina
        </text>
        <text x="420" y="398">Depósito</text>
        <text x="325" y="363" textAnchor="middle">
          Caja
        </text>
        <text x="418" y="247">Rack</text>

        {/* WiFi: la señal cubre el salón y la oficina */}
        <g className="capa wifi" clipPath="url(#plano-adentro)">
          <g transform="translate(190 200)">
            <circle className="onda" r="120" />
            <circle className="onda b" r="120" />
            <circle className="onda c" r="120" />
          </g>
          <g transform="translate(480 120)">
            <circle className="onda" r="84" />
            <circle className="onda b" r="84" />
            <circle className="onda c" r="84" />
          </g>
        </g>

        {/* Cámaras: lo que ve cada una */}
        <g className="capa cam">
          <g clipPath="url(#plano-adentro)">
            <g transform="translate(72 62)">
              <path className="cono" d={CONO} />
            </g>
            <g transform="translate(368 398) rotate(180)">
              <path className="cono r" d={CONO} />
            </g>
            <g transform="translate(568 398) rotate(180) scale(.8)">
              <path className="cono" d={CONO} />
            </g>
          </g>
          <g transform="translate(210 421) rotate(45) scale(.26)">
            <path className="cono r" d={CONO} />
          </g>
        </g>

        {/* Cables: todos salen del rack */}
        {CABLES.map((c) => (
          <g key={c.d} className={`cable ${c.capas}`} style={v({ '--t': c.t, '--d': c.r })}>
            <path className="k" pathLength={1} d={c.d} />
            <path className="p" pathLength={100} d={c.d} />
          </g>
        ))}

        <g className="nodo auto sis" transform="translate(330 335)">
          <circle r="4" />
        </g>
        <g className="nodo wifi" transform="translate(190 200)">
          <circle r="5" />
          <circle className="centro" r="1.6" />
        </g>
        <g className="nodo wifi" transform="translate(480 120)">
          <circle r="5" />
          <circle className="centro" r="1.6" />
        </g>
        <g className="nodo sis" transform="translate(440 88)">
          <circle r="4" />
        </g>
        <g className="nodo auto sis" transform="translate(525 176)">
          <circle r="4" />
        </g>
        {[
          [72, 62],
          [368, 398],
          [568, 398],
          [210, 421],
        ].map(([x, y]) => (
          <g key={`${x}-${y}`} className="nodo cam" transform={`translate(${x} ${y})`}>
            <rect className="camara" x="-5" y="-4" width="10" height="8" rx="2" />
          </g>
        ))}

        {/* Cableado: cada punto, probado */}
        <g className="capa cab">
          {PROBADOS.map(([x, y], i) => (
            <g key={`${x}-${y}`} transform={`translate(${x} ${y})`}>
              <g className="ok" style={v({ '--d': `${(0.2 + i * 0.4).toFixed(1)}s` })}>
                <circle r="6" />
                <path d="M-2.8 .2 l2 2 l3.6-4.4" />
              </g>
            </g>
          ))}
        </g>

        {/* Automatizaciones: una conversación que se responde sola */}
        <g className="capa auto chat" transform="translate(252 232)">
          <rect className="fondo" x="-8" y="-20" width="112" height="96" />
          <text x="0" y="-5">WhatsApp</text>
          <rect className="entra-msj" x="0" y="4" width="62" height="17" rx="8.5" />
          <path className="tx" d="M10 12.5H40M46 12.5H52" />
          <g className="m2">
            <rect className="sale-msj" x="28" y="27" width="68" height="17" rx="8.5" />
            <path className="tx o" d="M38 35.5H70M76 35.5H86" />
          </g>
          <g className="m3">
            <rect className="entra-msj" x="0" y="50" width="40" height="17" rx="8.5" />
            <circle className="punto" cx="13" cy="58.5" r="1.8" />
            <circle className="punto" cx="20" cy="58.5" r="1.8" />
            <circle className="punto" cx="27" cy="58.5" r="1.8" />
          </g>
          <path className="guia" d="M78 76V99" />
        </g>

        {/* Sistemas: pantallas que comparten la misma información */}
        <g className="capa sis">
          {[
            [330, 335],
            [440, 88],
            [525, 176],
          ].map(([x, y], i) => (
            <g key={`${x}-${y}`} className="pant" transform={`translate(${x} ${y})`}>
              <rect x="-11" y="-9" width="22" height="15" rx="1.5" />
              <path className="pie-pant" d="M-5 10H5" />
              <path className={i === 2 ? 'barra b' : 'barra'} d="M-7 -4H3" />
              <path className={i === 2 ? 'barra' : 'barra b'} d="M-7 1H3" />
            </g>
          ))}
          <g className="pant" transform="translate(495 309)">
            <rect x="-6" y="-9" width="12" height="18" rx="2" />
            <path className="barra" d="M-3 -3H3" />
            <path className="barra b" d="M-3 2H3" />
          </g>
          <text x="330" y="313" textAnchor="middle">
            Pedidos
          </text>
          <text x="440" y="66" textAnchor="middle">
            Cotizaciones
          </text>
          <text x="525" y="204" textAnchor="middle">
            Clientes
          </text>
          <text x="508" y="314">Stock</text>
        </g>

        <g className="rack" transform="translate(401 257)">
          <circle className="latido" r="9" />
          <circle className="latido b" r="9" />
          <rect className="caja" x="-10" y="-15" width="20" height="30" rx="2" />
          <path className="u" d="M-6 -8H6M-6 -2H6M-6 4H6M-6 10H6" />
        </g>
      </svg>
      <div className="pie-plano">
        <span>Plano de ejemplo</span>
        <button type="button" data-pausa aria-pressed="false">
          Pausar el movimiento
        </button>
      </div>
    </>
  )
}
