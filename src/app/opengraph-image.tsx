// import { ImageResponse } from 'next/og'

// export const runtime = 'edge'

// // Image metadata
// export const alt = '공작기계 솔루션 비더원'
// export const size = {
//   width: 1200,
//   height: 630,
// }

// export const contentType = 'image/png'

// // Image generation
// export default async function Image() {
//   const imageUrl = `/Logo.png`;

//   return new ImageResponse(
//     (
//       <div
//         style={{
//           fontSize: 128,
//           background: 'white',
//           width: '100%',
//           height: '100%',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//       >
//         <img src={imageUrl} alt="Logo" />
//       </div>
//     ),
//     {
//       width: size.width,
//       height: size.height,
//     }
//   )
// }
import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  openGraph: {
    title: "공작기계 솔루션 비더원",
    description: "가장 쉽고 빠른 부착형 데이터 서버",
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/Logo.png`,
        width: 800,
        height: 600,
        alt: "My Website Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "공작기계 솔루션 비더원",
    description: "가장 쉽고 빠른 부착형 데이터 서버",
    images: [`${siteUrl}/Logo.png`],
  },
};

export default function OpenGraphImage() {
  return (
    <main>
      <h1>공작기계 솔루션 비더원</h1>
    </main>
  );
}
