'use client'

import React from "react";
import { Box, styled, keyframes } from "@mui/system";
import { Typography } from "@mui/material";

const row1 = [
  "/Logo1.png",
  "/Logo2.png",
  "/Logo3.png",
  "/Logo4.png",
  "/Logo5.png",
  "/Logo6.png",
];

const row2 = [
  "/Logo1.png",
  "/Logo2.png",
  "/Logo3.png",
  "/Logo4.png",
  "/Logo5.png",
  "/Logo6.png",
];

const scrollX = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const UserCarousel = () => {
  return (
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
      <Box
        sx={{
          width: "100%",
          height: "fit-content",
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box sx={{ display: "flex", flex: 1 }}>
          <Typography
            sx={{ color: "black", fontSize: "40px", fontWeight: "bold" }}
          >
            Partners
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "fit-content",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Marquee>
          <MarqueeGroup>
            {row1.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
        <Marquee>
          <MarqueeGroup
            sx={{ animationDirection: "reverse", animationDelay: "-3s" }}
          >
            {row2.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup
            sx={{ animationDirection: "reverse", animationDelay: "-3s" }}
          >
            {row2.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
      </Box>
    </Box>
  );
};

const Marquee = styled(Box)({
  display: "flex",
  width: "90%",
  overflow: "hidden",
  userSelect: "none",
  maskImage:
    "linear-gradient(to right, hsl(0 0% 0% / 0), hsl(0 0% 0% / 1) 5%, hsl(0 0% 0% / 1) 95%, hsl(0 0% 0% / 0))",
  "&:hover": {
    animationPlayState: "paused",
    "& *": {
      animationPlayState: "paused",
    },
  },
});

const MarqueeGroup = styled(Box)({
  flexShrink: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  whiteSpace: "nowrap",
  width: "100%",
  animation: `${scrollX} 30s linear infinite`,
});

const ImageGroup = styled(Box)({
  display: "grid",
  placeItems: "center",
  width: "clamp(10rem, 1rem + 40vmin, 30rem)",
  padding: "calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10)",
});

const Image = styled("img")({
  objectFit: "contain",
  width: "100%",
  height: "100%",
  aspectRatio: "16/9",
  padding: "2px 5px",
});

export default UserCarousel;
