
import React from "react";
import FAQSection from "@/app/and/components/FAQCard";
import { SelectSection } from "@/components/section/and/SelectSection";
import { Description_and } from "@/components/section/and/Description_and";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: '부착형 무선 데이터 서버',
  description: "제조 인프라의 혁신 부착형 무선 데이터 서버를 소개합니다.",
  keywords: "가격, 가격확인, 부착형 무선 데이터 서버, 화낙, LAN, RS232, 스마트팩토리, 모니터링",
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
