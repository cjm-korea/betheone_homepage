import * as React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme/theme";
import HideAppBar from "@/components/layout/Appbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "공작기계 솔루션 비더원",
  description: "가장 쉽고 합리적인 제조 솔루션 공작기계 부착형 무선 데이터 서버, 캐드, 캠, 스마트팩토리, 모니터링 서비스를 소개합니다.",
  keywords: "제조 솔루션, 부착형 무선 데이터 서버, 화낙, LAN, RS232, 캐드, 캠, 스마트팩토리, 모니터링",
  other: {
    'naver-site-verification': 'ca865406870934095525f63f8b96c3e6cf7e6960'
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
