import { ImageResponse } from 'next/og'

export const alt = 'Netcore: cableado estructurado y fibra óptica en Asunción'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Vista previa para WhatsApp, Facebook y LinkedIn.
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0A2540',
          color: '#FFFFFF',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', fontSize: 34, fontWeight: 700, letterSpacing: 4, color: '#47A1DD' }}>
          NETCORE TECHNOLOGY
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.05 }}>Cableado estructurado</div>
          <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.05 }}>y fibra óptica en Asunción</div>
          <div style={{ marginTop: 28, fontSize: 32, color: '#C9D8E6' }}>
            Instalado y certificado con equipos Fluke · Cámaras · Racks
          </div>
        </div>
        <div style={{ display: 'flex', gap: 16 }}>
          {['#47A1DD', '#27ABCB', '#0CB8B3', '#9AC77D'].map((c) => (
            <div key={c} style={{ width: 120, height: 10, borderRadius: 5, background: c }} />
          ))}
        </div>
      </div>
    ),
    size,
  )
}
