import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Main_1 } from "@/components/section/main/Main_1";
import { Main_2 } from "@/components/section/main/Main_2";
import { Main_3 } from "@/components/section/main/Main_3";
import { Main_4 } from "@/components/section/main/Main_4";
import UserCarousel from "@/app/mainComponents/UserCarousel";
import type { Metadata } from 'next'
import Logopath from "@/public/Logo.png";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: '부착형 무선 데이터 서버',
  description: "제조 인프라의 혁신 부착형 무선 데이터 서버를 소개합니다.",
  keywords: "가격, 가격확인, 부착형 무선 데이터 서버, 무선 데이터 서버, 데이터 서버, 화낙, LAN, RS232, 스마트팩토리, 모니터링",
  openGraph: {
    title: '공작기계 솔루션 비더원',
    description: '가장 쉽고 빠른 부착형 데이터 서버',
    url: siteUrl,
    images: [
      {
        url: Logopath.src,
        width: 1200,
        height: 630,
        alt: 'Betheone Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '공작기계 솔루션 비더원',
    description: '가장 쉽고 빠른 부착형 데이터 서버',
    images: [Logopath.src],
  },
}

export default function Home() {
  return (
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Main_1 />
          <Main_2 />
          <Main_4 />
          <Box
            sx={{
              width: "100vw",
              height: "auto",
              backgroundColor: "#F5F5F7",
            }}
          >
            <UserCarousel />
          </Box>
          <Main_3 />
        </Box>
      </Container>
  );
}
