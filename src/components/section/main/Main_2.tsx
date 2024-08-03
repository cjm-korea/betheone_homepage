"use client";

import ProductANDCarousel from "@/components/ui/ProductANDCarousel";
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
          px: "170px",
          py: "60px",
          height: "auto",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
          gap: "40px",
        }}
      >
        <Box sx={{ display: "flex", flex: 1, flexDirection: "row" }}>
          <Typography
            sx={{ color: "black", fontSize: "40px", fontWeight: "bold" }}
          >
            더 빠르고, 간편하고, 정확하게.
          </Typography>
          <Typography
            sx={{
              color: "black",
              fontSize: "40px",
              opacity: "50%",
              paddingLeft: "8px",
            }}
          >
            USB, CF카드 없이 간단하게.
          </Typography>
        </Box>
        <ProductANDCarousel />
      </Box>
    </Box>
  );
};
