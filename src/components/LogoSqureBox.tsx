import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
import { LogoImage } from "./LogoImage";

interface LogoSquareBoxProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  colorConcept: "white" | "black";
  href: Url;
}

const StyledLogoSquareBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "colorConcept",
})<{ colorConcept: "white" | "black" }>(({ theme, colorConcept }) => ({
  width: 400,
  height: 500,
  backgroundColor: colorConcept === "white" ? "white" : "black",
  color: colorConcept === "white" ? "black" : "white",
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
}));

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

const LogoSquareBox: React.FC<LogoSquareBoxProps> = ({
  title,
  subtitle,
  imageSrc,
  colorConcept,
  href,
}) => {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <StyledLogoSquareBox colorConcept={colorConcept}>
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
          <LogoImage src={imageSrc} alt={title} />
        </StyledLowerBox>
      </StyledLogoSquareBox>
    </Link>
  );
};

export default LogoSquareBox;
