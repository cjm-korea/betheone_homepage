import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Main_1 } from "@/components/section/main/Main_1";
import { Main_2 } from "@/components/section/main/Main_2";
import { Main_3 } from "@/components/section/main/Main_3";
import { Main_4 } from "@/components/section/main/Main_4";
import UserCarousel from "@/app/mainComponents/UserCarousel";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '공작기계 솔루션 비더원',
  description: "가장 쉽고 합리적인 제조 솔루션 공작기계 부착형 무선 데이터 서버, 캐드, 캠, 스마트팩토리, 모니터링 서비스를 소개합니다.",
  keywords: "제조 솔루션, 부착형 무선 데이터 서버, 무선 데이터 서버, 데이터 서버, 화낙, LAN, RS232, 캐드, 캠, 스마트팩토리, 모니터링",
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
