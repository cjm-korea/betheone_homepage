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
  title: "스마트팩토리 비더원",
  description: "가장 빠르고 정확한 제조 솔루션 캐드, 캠, 스마트팩토리, 모니터링 서비스를 소개합니다.",
  keywords: "제조 솔루션, 캐드, 캠, 스마트팩토리, 모니터링",
  // icons: {
    // icon: "/betheone_icon.png"
  // }
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
