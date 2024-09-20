import { ImageResponse } from 'next/og'

export const runtime = 'edge'

// Image metadata
export const alt = '공작기계 솔루션 비더원'
export const size = {
  width: 129,
  height: 60,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
  const imageUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/Logo.png`; // 절대 URL을 사용

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
