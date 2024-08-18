"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

interface ProductCardANDProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  colorconcept: "white" | "black";
  href: Url;
}

const StyledBox = styled(Box)<{ colorconcept: "white" | "black" }>(
  ({ theme, colorconcept }) => ({
    width: 400, // 기본 width 설정
    height: 500,
    backgroundColor: colorconcept === "white" ? "white" : "black",
    color: colorconcept === "white" ? "black" : "white",
    borderRadius: "18px",
    transition: "all .3s cubic-bezier(0,0,.5,1)",
    boxShadow: "none",
    overflow: "hidden",
    "&:hover": {
      boxShadow: "2px 4px 12px #00000014",
      transform: "scale(1.01)",
    },
    [theme.breakpoints.down("md")]: {
      width: 330,
      height: 380,
    },
  })
);

const StyledUpperBox = styled(Box)({
  padding: 30,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
});

const StyledLowerBox = styled(Box)({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "18px",
});

const StyledImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderBottomRightRadius: "18px",
  borderBottomLeftRadius: "18px",
});

const ProductCardAND: React.FC<ProductCardANDProps> = ({
  title,
  subtitle,
  imageSrc,
  colorconcept,
  href,
}) => {
  return (
    <Link href={'/'} style={{ textDecoration: "none" }}>
      <StyledBox colorconcept={colorconcept}>
        <StyledUpperBox>
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
        </StyledUpperBox>
        <StyledLowerBox>
          <StyledImage src={imageSrc} alt={title} />
        </StyledLowerBox>
      </StyledBox>
    </Link>
  );
};

export default ProductCardAND;
