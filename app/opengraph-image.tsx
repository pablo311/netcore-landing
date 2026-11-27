import { ImageResponse } from 'next/og'

export const alt = 'Netcore: ¿qué te está frenando el negocio?'
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
          background: '#F4F8F6',
          color: '#111212',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', fontSize: 34, fontWeight: 700, letterSpacing: 4, color: '#2E6E99' }}>
          NETCORE
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 92, fontWeight: 800, lineHeight: 1 }}>¿Qué te está</div>
          <div style={{ display: 'flex', fontSize: 92, fontWeight: 800, lineHeight: 1 }}>
            <span style={{ background: '#9AC77D', borderRadius: 10, padding: '0 14px', marginLeft: -14 }}>frenando</span>
            <span style={{ marginLeft: 22 }}>el negocio?</span>
          </div>
          <div style={{ marginTop: 34, fontSize: 34, color: '#33423F' }}>
            Internet, cámaras y tecnología para tu negocio. Charla gratis de 15 minutos.
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
