
import React from "react";
import FAQSection from "@/app/and/components/FAQCard";
import { SelectSection } from "@/components/section/and/SelectSection";
import { Description_and } from "@/components/section/and/Description_and";
import { Metadata } from "next";

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
        url: '/Logo.png',
        width: 800,
        height: 600,
        alt: 'Betheone Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '공작기계 솔루션 비더원',
    description: '가장 쉽고 빠른 부착형 데이터 서버',
    images: ['/Logo.png'],
  },
}

export default function AND() {
  return (
    <>
      <SelectSection />
      <Description_and />
      <FAQSection />
    </>
  );
}
