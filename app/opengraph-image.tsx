import { ImageResponse } from 'next/og'

export const alt = 'Netcore: todo conectado, todo andando.'
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
          color: '#EEF4F8',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', fontSize: 36, fontWeight: 700 }}>Netcore</div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 104, fontWeight: 800, lineHeight: 1.02 }}>Todo conectado.</div>
          <div style={{ fontSize: 104, fontWeight: 800, lineHeight: 1.02 }}>Todo andando.</div>
          <div style={{ marginTop: 36, fontSize: 34, color: '#A9C1D6' }}>
            Internet, cableado, cámaras y sistemas para tu negocio.
          </div>
        </div>
        <div style={{ display: 'flex', width: 1040, height: 4, background: '#9AC77D' }} />
      </div>
    ),
    size,
  )
}
