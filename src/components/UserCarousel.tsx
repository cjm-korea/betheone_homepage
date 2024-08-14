"use client";

import React from "react";
import { Box, styled, keyframes } from "@mui/system";
import { Typography } from "@mui/material";

import AJTech from "@/images/company/AJTech.png"
import Bion from "@/images/company/Bion.png"
import ConnectFactory from "@/images/company/ConnectFactory.png"
import Datagobongbab from "@/images/company/Datagobongbab.png"
import FactoryDoctor from "@/images/company/FactoryDoctor.png"
import FindMachine from "@/images/company/FindMachine.png"
import Future from "@/images/company/Future.png"
import Hinols from "@/images/company/Hinols.png"
import IdeaPlus from "@/images/company/IdeaPlus.png"
import Juho from "@/images/company/Juho.png"

import KHKorea from "@/images/company/KHKorea.png"
import Maketen from "@/images/company/Maketen.png"
import Mungil from "@/images/company/Mungil.png"
import Royal from "@/images/company/Royal.png"
import SafePro from "@/images/company/SafePro.png"
import Sbhe from "@/images/company/Sbhe.png"
import Sinsung from "@/images/company/Sinsung.png"
import TurningSolution from "@/images/company/TurningSolution.png"
import WoojungTMS from "@/images/company/WoojungTMS.png"
import YoungGwang from "@/images/company/YoungGwang.png"

const row1 = [
  AJTech.src.toString(),
  Bion.src.toString(),
  ConnectFactory.src.toString(),
  Datagobongbab.src.toString(),
  FactoryDoctor.src.toString(),
  FindMachine.src.toString(),
  Future.src.toString(),
];

const row2 = [
  Hinols.src.toString(),
  IdeaPlus.src.toString(),
  Juho.src.toString(),
  KHKorea.src.toString(),
  Maketen.src.toString(),
  Mungil.src.toString(),
  Royal.src.toString(),
];

const row3 = [
  SafePro.src.toString(),
  Sbhe.src.toString(),
  Sinsung.src.toString(),
  TurningSolution.src.toString(),
  WoojungTMS.src.toString(),
  YoungGwang.src.toString(),
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
        px: {
          xs: "10px",
          md: "170px",
        },
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
          px: {
            xs: "20px",
            sm: "20px",
          },
        }}
      >
        <Box sx={{ display: "flex", flex: 1 }}>
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
        <Marquee>
          <MarqueeGroup
            sx={{ animationDirection: "reverse", animationDelay: "-3s" }}
          >
            {row3.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup
            sx={{ animationDirection: "reverse", animationDelay: "-3s" }}
          >
            {row3.map((el, index) => (
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
  width: "120%",
  animation: `${scrollX} 30s linear infinite`,
});

const ImageGroup = styled(Box)({
  display: "grid",
  placeItems: "center",
  width: "clamp(10rem, 1rem + 40vmin, 30rem)",
  padding: "calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10)",
});

const Image = styled("img")(({ theme }) => ({
  objectFit: "contain",
  aspectRatio: "16/9",
  [theme.breakpoints.down("lg")]: {
    padding: 0,
    width: "32px",
    height: "100%"
  },
  [theme.breakpoints.up("lg")]: {
    padding: "2px 5px",
    width: "100%",
    height: "100%"
  },
}));

export default UserCarousel;
