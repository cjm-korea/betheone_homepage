"use client";

import { Box, Theme, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import RS232_use2 from "@/images/RS232_use2.jpg";
import Before_and from "@/images/Before_and.png";
import After_and from "@/images/After_and.png";

export const Main_1 = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100vw",
        height: "auto",
        backgroundColor: "#F5F5F7",
      }}
    >
      <Box
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
          alignItems: "start",
          gap: {
            xs: "10px",
            md: "40px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            width: "100%",
            flex: 1,
            flexDirection: {
              xs: "column",
              md: "column",
            },
            pb: {
              xs: "10px",
              md: 0,
            },
          }}
        >
          <Typography
            sx={{
              color: "black",
              fontSize: {
                xs: "24px",
                md: "40px",
              },
              fontWeight: "bold",
            }}
          >
            가장 쉬운 공작기계,{" "}
            {useMediaQuery(theme.breakpoints.down('md')) ? <br /> : null}제조 인프라 솔루션
          </Typography>
          <Typography
            sx={{
              color: "black",
              fontSize: {
                xs: "24px",
                md: "40px",
              },
              opacity: "50%",
            }}
          >
            데이터 전송 및 관리
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            gap: 5,
            width: "100%",
          }}
        >
          <Box
            component="img"
            src={Before_and.src}
            alt="Image 1"
            sx={{
              width: {
                xs: "100%",
                md: "40%",
              },
              height: "auto",
              borderRadius: "8px",
            }}
          />
          <Box
            component="img"
            src={After_and.src}
            alt="Image 2"
            sx={{
              width: {
                xs: "100%",
                md: "40%",
              },
              height: "auto",
              borderRadius: "8px",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};