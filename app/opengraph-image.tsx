import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Mark Basford — Principal Software Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#0A0A0A',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '24px',
          }}
        >
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '10px',
              background: '#60A5FA',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0A0A0A',
              fontSize: '24px',
              fontWeight: 700,
            }}
          >
            MB
          </div>
          <span style={{ color: '#A3A3A3', fontSize: '24px' }}>markbasford.dev</span>
        </div>
        <h1
          style={{
            fontSize: '64px',
            fontWeight: 700,
            color: '#FAFAFA',
            lineHeight: 1.1,
            margin: 0,
            marginBottom: '24px',
          }}
        >
          Mark Basford
        </h1>
        <p
          style={{
            fontSize: '28px',
            color: '#60A5FA',
            margin: 0,
            marginBottom: '16px',
          }}
        >
          Principal Software Engineer
        </p>
        <p
          style={{
            fontSize: '24px',
            color: '#A3A3A3',
            margin: 0,
            maxWidth: '700px',
            lineHeight: 1.4,
          }}
        >
          The web should work for everyone. Not most people. Everyone.
        </p>
      </div>
    ),
    { ...size }
  )
}
