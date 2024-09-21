import * as React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme/theme";
import HideAppBar from "@/components/layout/Appbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";
import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "공작기계 솔루션 비더원",
  description: "가장 쉽고 합리적인 제조 솔루션 공작기계 부착형 무선 데이터 서버, 캐드, 캠, 스마트팩토리, 모니터링 서비스를 소개합니다.",
  keywords: "제조 솔루션, 부착형 무선 데이터 서버, 화낙, LAN, RS232, 캐드, 캠, 스마트팩토리, 모니터링",
  openGraph: {
    title: '공작기계 솔루션 비더원',
    description: '가장 쉽고 합리적인 제조 솔루션 비더원',
    url: "/",
    images: [
      {
        url: '/Logo.png',
        width: 1200,
        height: 630,
        alt: '비더원 로고'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: '공작기계 솔루션 비더원',
    description: '가장 쉽고 합리적인 제조 솔루션 비더원',
    images: ['/Logo.png']
  }
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <HideAppBar key={1}>
              <div></div>
            </HideAppBar>
              {props.children}
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
