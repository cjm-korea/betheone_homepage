import { ImageResponse } from 'next/og'

export const runtime = 'edge'

// Image metadata
export const alt = '공작기계 솔루션 비더원'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
  const imageUrl = `/Logo.png`;

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src={imageUrl} alt="Logo" />
      </div>
    ),
    {
      width: size.width,
      height: size.height,
    }
  )
}
