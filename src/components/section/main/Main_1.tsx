"use client";

import { Box, Typography } from "@mui/material";
import React from "react";
import Background_main from "@/images/background_main.jpg"

export const Main_1 = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "400px",
        backgroundImage: `url(${Background_main.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 60%",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          px: {
            xs: "30px",
            md: "170px",
          },
          py: "60px",
          height: "400px",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "18px",
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: {
              xs: "24px",
              md: "40px"
            },
            fontWeight: "bold",
          }}
        >
          단 하나의 제조 솔루션
        </Typography>
        <Typography
          sx={{
            color: "white",
            fontSize: {
              xs: "18px",
              md: "28px"
            },
            fontWeight: "bold",
            opacity: "70%",
          }}
        >
          캐드, 캠, 스마트팩토리, 모니터링 비더원
        </Typography>
      </Box>
    </Box>
  );
};
