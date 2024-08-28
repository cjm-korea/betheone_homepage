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
  '에이앤제이테크',
  '(주)바이온',
  '(주)커넥트팩토리',
  '(주)데이터고봉밥',
  '(주)팩토리닥터',
  '(주)파인드머신',
  '(주)퓨쳐테크',
];

const row2 = [
  '(주)하이놀시스템',
  '아이디어플러스',
  '(주)주호레포츠',
  '케이에이치코리아',
  '(주)메이크텐',
  '(주)명일정밀',
  '(조)로얄신소재',
];

const row3 = [
  '(주)세이프프로',
  '(주)에스비에이치비',
  '신성나노텍',
  '터닝솔루션',
  '(주)우정티엠에스',
  '영광테크',
];

const row1_m = [
  '에이앤제이테크',
  '(주)바이온',
  '(주)팩토리닥터',
  '(주)메이크텐',
];

const row2_m = [
  '(주)주호레포츠',
  '케이에이치코리아',
  '신성나노텍',
];

const row3_m = [
  '(주)우정티엠에스',
  '영광테크',
  '(주)명일정밀',
  '(주)퓨쳐테크',
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
          lg: "170px",
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
          display: { xs: 'none', sm: 'none', md: 'none', lg: 'none', xl: 'flex' },
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Marquee>
          <MarqueeGroup>
            {row1.map((el, index) => (
              <ImageGroup key={index}>
                <Typography sx={{ color: 'black' }}>
                  {el}
                </Typography>
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el, index) => (
              <ImageGroup key={index}>
                <Typography sx={{ color: 'black' }}>
                  {el}
                </Typography>
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
                <Typography sx={{ color: 'black' }}>
                  {el}
                </Typography>
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup
            sx={{ animationDirection: "reverse", animationDelay: "-3s" }}
          >
            {row2.map((el, index) => (
              <ImageGroup key={index}>
                <Typography sx={{ color: 'black' }}>
                  {el}
                </Typography>
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
                <Typography sx={{ color: 'black' }}>
                  {el}
                </Typography>
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup
            sx={{ animationDirection: "reverse", animationDelay: "-3s" }}
          >
            {row3.map((el, index) => (
              <ImageGroup key={index}>
                <Typography sx={{ color: 'black' }}>
                  {el}
                </Typography>
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "fit-content",
          display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'flex', xl: 'none' },
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Marquee>
          <MarqueeGroup>
            {row1_m.map((el, index) => (
              <ImageGroup key={index}>
                <Typography sx={{ color: 'black' }}>
                  {el}
                </Typography>
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1_m.map((el, index) => (
              <ImageGroup key={index}>
                <Typography sx={{ color: 'black' }}>
                  {el}
                </Typography>
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
        <Marquee>
          <MarqueeGroup
            sx={{ animationDirection: "reverse", animationDelay: "-3s" }}
          >
            {row2_m.map((el, index) => (
              <ImageGroup key={index}>
                <Typography sx={{ color: 'black' }}>
                  {el}
                </Typography>
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup
            sx={{ animationDirection: "reverse", animationDelay: "-3s" }}
          >
            {row2_m.map((el, index) => (
              <ImageGroup key={index}>
                <Typography sx={{ color: 'black' }}>
                  {el}
                </Typography>
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
        <Marquee>
          <MarqueeGroup
            sx={{ animationDirection: "reverse", animationDelay: "-3s" }}
          >
            {row3_m.map((el, index) => (
              <ImageGroup key={index}>
                <Typography sx={{ color: 'black' }}>
                  {el}
                </Typography>
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup
            sx={{ animationDirection: "reverse", animationDelay: "-3s" }}
          >
            {row3_m.map((el, index) => (
              <ImageGroup key={index}>
                <Typography sx={{ color: 'black' }}>
                  {el}
                </Typography>
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
  paddingTop: '20px',
  maskImage:
    "linear-gradient(to right, hsl(0 0% 0% / 0), hsl(0 0% 0% / 1) 5%, hsl(0 0% 0% / 1) 95%, hsl(0 0% 0% / 0))",
  "&:hover": {
    animationPlayState: "paused",
    "& *": {
      animationPlayState: "paused",
    },
  },
});

const MarqueeGroup = styled(Box)(({ theme }) => ({
  flexShrink: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  whiteSpace: "nowrap",
  width: theme.breakpoints.down('lg') ? '210%' : '150%',
  animation: `${scrollX} 30s linear infinite`,
}));

const ImageGroup = styled(Box)(({ theme }) => ({
  display: "grid",
  placeItems: "center",
  width: "400px",
  height: "200px",
  margin: "10px",
  borderRadius: "10px",
  boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.1)",
  backgroundColor: "white",
  [theme.breakpoints.down("lg")]: {
    width: "300px",  // 작은 화면에서는 약간 축소
    height: "150px",
  },
  [theme.breakpoints.down("md")]: {
    width: "200px",  // 더 작은 화면에서는 더 축소
    height: "100px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "300px",
    height: "150px",
  },
}));

// const Image = styled("img")(({ theme }) => ({
//   objectFit: "contain",
//   aspectRatio: "16/9",
//   [theme.breakpoints.down("lg")]: {
//     padding: 0,
//     width: "32px",
//     height: "100%"
//   },
//   [theme.breakpoints.up("lg")]: {
//     padding: "2px 5px",
//     width: "100%",
//     height: "100%"
//   },
// }));

export default UserCarousel;
