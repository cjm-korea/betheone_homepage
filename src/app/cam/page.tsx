import * as React from "react";
import Container from "@mui/material/Container";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import type { Metadata } from 'next'
import Logopath from "@/public/Logo.png";
import { MainContents } from "./components/MainContents";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: '대한민국 정품 캠(CAM)프로그램 구매',
  description: "대한민국 정품 캠(CAM)구매 파트너 비더원이 합리적인 가격을 제시합니다.",
  keywords: "스마트제조, 공작기계, 지원사업, 스마트팩토리, 캠, 캐드, 부착형 무선 데이터 서버, 에스캠, 마스터캠, 시마트론, 3D캠, 2D캠",
  openGraph: {
    title: '대한민국 정품 캠(CAM)프로그램 구매',
    description: '대한민국 정품 캠(CAM)구매 파트너 비더원이 합리적인 가격을 제시합니다.',
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
    title: '대한민국 정품 캠(CAM)프로그램 구매',
    description: '대한민국 정품 캠(CAM)구매 파트너 비더원이 합리적인 가격을 제시합니다.',
    images: [Logopath.src],
  },
}

export default function CAM() {
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
          <MainContents />
        </Box>
      </Container>
  );
}