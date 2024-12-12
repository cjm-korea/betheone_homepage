import * as React from "react";
import Container from "@mui/material/Container";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import type { Metadata } from 'next'
import Logopath from "@/public/Logo.png";
import { MainContents } from "./components/MainContents";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: '2025 스마트 제조 공작기계 지원사업',
  description: "2025년 스마트제조 공작기계 지원사업(구.스마트공방)을 통해 3D캠과 스마트 장비를 지원합니다.",
  keywords: "스마트제조, 공작기계, 지원사업, 스마트공방, 스마트팩토리, 캠, 캐드, 부착형 무선 데이터 서버, 에스캠, 3D캠, 무상, 지원",
  openGraph: {
    title: '2025 스마트 제조 공작기계 지원사업',
    description: '2025년 스마트제조 공작기계 지원사업(구.스마트공방)을 통해 3D캠과 스마트 장비를 지원합니다.',
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
    title: '2025 스마트 제조 공작기계 지원사업',
    description: '2025년 스마트제조 공작기계 지원사업(구.스마트공방)을 통해 3D캠과 스마트 장비를 지원합니다.',
    images: [Logopath.src],
  },
}

export default function S2025() {
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
