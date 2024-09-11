"use client";

import ProductANDCarousel from "@/app/mainComponents/ProductANDCarousel";
import { Box, Typography } from "@mui/material";
import React from "react";

export const Main_2 = () => {
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
          py: "60px",
          height: "auto",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
          gap: {
            xs: "10px",
            md: "40px"
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flex: 1,
            flexDirection: {
              xs: "column",
              md: "row",
            },
            pb: {
              xs: '10px',
              md: 0
            }
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
            부착형 무선 데이터서버 AND
          </Typography>
          <Typography
            sx={{
              color: "black",
              fontSize: {
                xs: "24px",
                md: "40px",
              },
              opacity: "50%",
              paddingLeft: {
                xs: 0,
                md: "8px",
              },
            }}
          >
            더 빠르고, 간편하고, 정확하게.
          </Typography>
        </Box>
        <ProductANDCarousel />
      </Box>
    </Box>
  );
};
