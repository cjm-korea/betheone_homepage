"use client";

import React from "react";
import { Box, Typography } from "@mui/material";

interface ProductCardProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  colorConcept: "white" | "black";
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  subtitle,
  imageSrc,
  colorConcept,
}) => {
  const isWhite = colorConcept === "white";

  return (
    <Box
      sx={{
        width: {
          xs: "320px",
          md: "480px",
        },
        height: {
          xs: "340px",
          md: "500px",
        },
        display: "flex",
        flexDirection: "column",
        borderRadius: "18px",
        overflow: "hidden",
        transition: "all .3s cubic-bezier(0,0,.5,1)",
        boxShadow: "none",
        "&:hover": {
          boxShadow: "2px 4px 12px #00000014",
          transform: "scale(1.01)",
        },
        backgroundColor: isWhite ? "white" : "black",
        color: isWhite ? "black" : "white",
      }}
    >
      {/* 상단 영역 */}
      <Box
        sx={{
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          p: "30px",
          height: "auto",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: {
              xs: 14,
              md: 16,
            },
            fontWeight: "regular",
            marginBottom: 1,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontSize: {
              xs: 24,
              md: 28,
            },
            fontWeight: "bold",
          }}
        >
          {subtitle}
        </Typography>
      </Box>

      {/* 하단 영역 */}
      <Box
        sx={{
          flex: 1,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Box
          component="img"
          src={imageSrc}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderBottomLeftRadius: "18px",
            borderBottomRightRadius: "18px",
          }}
        />
      </Box>
    </Box>
  );
};

export default ProductCard;
