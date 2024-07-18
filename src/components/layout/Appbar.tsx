"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import Image from "next/image";
import Logopath from "/public/Logo.png";
import BackgroundImagepath from "/public/background_main.jpg";
import MainButton from "../MainButton";
import ProductCard from "../ProductCard";
import LogoCarousel from "../UserCarousel";
import BenefitCard from "../BenefitCard";
import SupporterCarousel from "../SupporterCarousel";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const logos: string[] = [
  "/Logo1.png",
  "/Logo2.png",
  "/Logo3.png",
  "/Logo4.png",
  "/Logo5.png",
  "/Logo6.png",
  "/Logo1.png",
  "/Logo2.png",
];

export default function HideAppBar(props: Props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          elevation={1}
          sx={{ py: "20px", px: "170px", backgroundColor: "white" }}
        >
          <Toolbar>
            <Image
              // width={129}
              // height={60}
              src={Logopath}
              alt="Logo"
            />
            <Typography variant="h6" component="div">
              Scroll to hide App bar
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      {/* <Container sx={{ p: 0, m: 0, width: "100vw" }}> */}
      <Box
        sx={{
          width: "100vw",
          //   minHeight: "288px",
          height: "400px",
          mt: "40px",
          backgroundImage: `url("/background_main.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 60%",
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            px: "170px",
            py: "60px",
            height: "400px",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <Typography
            sx={{ color: "white", fontSize: "40px", fontWeight: "bold" }}
          >
            제조 산업의 문제점을 해결합니다.
          </Typography>
          <Typography sx={{ color: "white", fontSize: "16px" }}>
            CNC/MCT 공작기계의 혁신적인 부착형 무선 데이터서버를 소개합니다.
          </Typography>
          <MainButton>알아보기</MainButton>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100vw",
          height: "auto",
        }}
      >
        <Box
          sx={{
            px: "170px",
            py: "60px",
            height: "auto",
            color: "white",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "8rem",
          }}
        >
          <Box sx={{ display: "flex", flex: 1, flexDirection: "column" }}>
            <Typography
              sx={{ color: "black", fontSize: "40px", fontWeight: "bold" }}
            >
              부착형 무선 데이터 서버
            </Typography>
            <Typography sx={{ color: "black", fontSize: "40px" }}>
              All New DNC
            </Typography>
            <Typography sx={{ color: "black", fontSize: "16px", mt: "24px" }}>
              더 이상 케이블과 이동식 저장장치의 사용을 하지 않습니다
              <br />
              다양한 공작기계에 사용이 가능하며 간단한 부착으로 즉시 적용
              가능합니다.
            </Typography>
            <MainButton sx={{ mt: "24px" }}>제품 상세보기</MainButton>
          </Box>
          <Box
            sx={{
              width: "auto",
              height: "420px",
              display: "flex",
              flex: 1,
              justifyContent: "center",
            }}
          >
            <ProductCard
              image={"https://via.placeholder.com/100"}
              subtitle={"부착형 무선 데이터서버"}
              maintitle={"DNC 가공 및 데이터 용량 추가"}
            />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100vw",
          height: "auto",
        }}
      >
        <LogoCarousel />
      </Box>
      <Box
        sx={{
          width: "100vw",
          height: "auto",
        }}
      >
        <Box
          sx={{
            px: "170px",
            py: "60px",
            height: "auto",
            color: "white",
            display: "flex",
            flexDirection: "col",
            justifyContent: "center",
            alignItems: "center",
            gap: "8rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{ color: "black", fontSize: "40px", fontWeight: "bold" }}
            >
              왜 부착형 무선 데이터 서버를
              <br />
              사용해야 하나요?
            </Typography>
            <Box
              sx={{
                mt: "50px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: "40px",
                flexWrap: "wrap",
              }}
            >
              {[
                {
                  maintitle: "유선 케이블 및 USB, CF카드를 제거",
                  subtitle: [
                    "ㆍ 현장은 깔끔해지고, 데이터 전송은 빨라집니다.",
                    "ㆍ USB, CF카드의 연결부 고장을 방지합니다.",
                  ],
                },
                {
                  maintitle: "구형 공작기계 DNC 가공 및 무선화",
                  subtitle: [
                    "ㆍ 업그레이드가 불가능한 공작기계에서 DNC(Direct Numerical Control)가공 및 무선화가 가능합니다.",
                  ],
                },
                {
                  maintitle: "안정적인 연결 및 DNC 가공",
                  subtitle: [
                    "ㆍ 연결망이 별도로 구성되어 노이즈의 취약점이 없습니다.",
                    "ㆍ 메쉬 연결망이 아닌 별도의 네트워크 구성으로 9시간 이상 DNC가공이 가능합니다.",
                  ],
                },
                {
                  maintitle: "쉽고 빠른 설치",
                  subtitle: [
                    'ㆍ "부착"만으로 설치가 끝납니다.',
                    "ㆍ 기계 인프라 구성이 쉽고 깔끔합니다.",
                  ],
                },
              ].map((props, index) => (
                <Box
                  key={index}
                  sx={{
                    flex: "1 1 200px",
                    maxWidth: "300px",
                    minWidth: "200px",
                  }}
                >
                  <BenefitCard {...props} />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100vw",
          height: "auto",
        }}
      >
        <Box
          sx={{
            px: "170px",
            py: "60px",
            height: "auto",
            color: "white",
            display: "flex",
            flexDirection: "col",
            justifyContent: "center",
            alignItems: "center",
            gap: "8rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{ color: "black", fontSize: "40px", fontWeight: "bold" }}
            >
              사용후기
            </Typography>
            <MainButton sx={{ mt: "24px" }}>자세히 알아보기</MainButton>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100vw",
          height: "auto",
        }}
      >
        <Box
          sx={{
            px: "170px",
            py: "60px",
            height: "auto",
            color: "white",
            display: "flex",
            flexDirection: "col",
            justifyContent: "center",
            alignItems: "center",
            gap: "8rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                color: "black",
                fontSize: "40px",
                fontWeight: "bold",
                marginBottom: "24px",
              }}
            >
              문의하기
            </Typography>
            <Box sx={{ fontSize: "18px", fontWeight: 200, color: "#7c8e9a" }}>
              기술시연 및 설치 문의
            </Box>
          </Box>
        </Box>
      </Box>
      <SupporterCarousel />
      {/* </Container> */}
    </React.Fragment>
  );
}
