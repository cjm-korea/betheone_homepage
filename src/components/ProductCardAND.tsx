"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

interface ProductCardANDProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  colorconcept: "white" | "black";
}

const StyledBox = styled(Box)(
  ({ colorconcept }: { colorconcept: "white" | "black" }) => ({
    width: 400,
    height: 500,
    backgroundColor: colorconcept === "white" ? "white" : "black",
    color: colorconcept === "white" ? "black" : "white",
    borderRadius: "18px",
    transition: "all .3s cubic-bezier(0,0,.5,1)",
    boxShadow: "none",
    "&:hover": {
      boxShadow: "2px 4px 12px #00000014",
      transform: 'scale(1.01)',
    },
    overflow: 'hidden'
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
}) => {
  return (
    <StyledBox colorconcept={colorconcept}>
      <StyledUpperBox>
        <Typography
          variant="h3"
          sx={{ fontSize: 16, fontWeight: "regular", marginBottom: 1 }}
        >
          {title}
        </Typography>
        <Typography variant="h6" sx={{ fontSize: 28, fontWeight: "bold" }}>
          {subtitle}
        </Typography>
      </StyledUpperBox>
      <StyledLowerBox>
        <StyledImage src={imageSrc} alt={title} />
      </StyledLowerBox>
    </StyledBox>
  );
};

export default ProductCardAND;
