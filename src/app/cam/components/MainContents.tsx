"use client";

import { Box, Theme, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import InViewAnimate from "@/components/section/InViewAnimate";
import { Supporter } from "@/app/mainComponents/Supporter";
import { CAM_PriceCard } from "./CAM_PriceCard";

export const MainContents = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "auto",
        backgroundColor: "#F5F5F7",
      }}
    >
      <InViewAnimate
        sx={{
          px: {
            xs: "30px",
            md: "170px",
          },
          pt: "100px",
          pb: "60px",
          height: "auto",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: {
            xs: "10px",
            md: "10px",
          },
        }}
      >
        <Typography
          component="h1"
          sx={{
            color: "black",
            fontSize: {
              xs: "24px",
              md: "40px",
            },
            fontWeight: "bold",
          }}
        >
          대한민국 전문 CAM 파트너
        </Typography>
        <Typography
          component="h2"
          sx={{
            color: "black",
            fontSize: {
              xs: "16px",
              md: "24px",
            },
            opacity: "50%",
          }}
        >
          공작기계 전문 소프트웨어 지원
        </Typography>
      </InViewAnimate>

      <Box
        sx={{
          px: {
            xs: "30px",
            md: "170px",
          },
          pb: "60px",
          height: "auto",
          color: "white",
          display: "flex",
          flexDirection: { xs: 'column', sm: 'column', lg: 'row' },
          justifyContent: "center",
          alignItems: "center",
          gap: {
            xs: "10px",
            md: "10px",
          },
        }}
      >
        <CAM_PriceCard
          chipLabel="2D"
          title="마스터캠"
          features={[
            "2D 모델링",
            "2D 가공패스 계산",
            "2D 시뮬레이션",
            "1년 유지보수 포함",
          ]}
          link="https://forms.gle/b58Qzvj4ravBgadJ8"
          price="590,000"
          priceDetail="/ months"
        />
        <CAM_PriceCard
          chipLabel="(3+2)D"
          title="에스캠"
          features={[
            "3D 모델링",
            "(3+2)D 가공패스 계산",
            "3D 시뮬레이션",
            "1년 유지보수 제한 없음",
          ]}
          link="https://forms.gle/b58Qzvj4ravBgadJ8"
          price="590,000"
          priceDetail="/ months"
        />
        <CAM_PriceCard
          chipLabel="3D"
          title="시마트론캠"
          features={[
            "3D 모델링",
            "3D 가공패스 계산",
            "3D 시뮬레이션",
            "1년 유지보수 포함",
          ]}
          link="https://forms.gle/b58Qzvj4ravBgadJ8"
          price="590,000"
          priceDetail="/ months"
        />
      </Box>
      <Supporter />
    </Box>
  );
};
