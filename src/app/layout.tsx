import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from "@/theme/theme";
import { Header } from "./_components/Header";
import { Footer } from "./_components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "비더원",
  description: "비더원은 공작기계 솔루션 전문 기업입니다. 부착형 무선 데이터 서버, 단독 네트워크 무선망 구축, 모니터링, 이상치 감지 등 공작기계 관련 다양한 솔루션을 제공하고 있습니다. 또한 정부지원사업과 연계하여 솔루션을 쉽게 구축할 수 있도록 지원하고 있습니다.",
  icons: {
    icon: '/icon.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
              <Header />
              {children}
              <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html >
  );
}
