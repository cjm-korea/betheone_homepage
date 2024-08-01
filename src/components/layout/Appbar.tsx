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
import ReviewCard from "../ReviewCard";
import { Grid } from "@mui/material";

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

const reviewCardContent: any = [
  {
    company: "바이온(주)",
    review:
      "This is the review content. If the content is too long, it will be truncated with ellipsis. This is the review content. If the content is too long, it will be truncated with ellipsis. This is the review content. If the content is too long, it will be truncated with ellipsis.",
  },
  {
    company: "우정TMS(주)",
    review:
      "This is the review content. If the content is too long, it will be truncated with ellipsis. This is the review content. If the content is too long, it will be truncated with ellipsis. This is the review content. If the content is too long, it will be truncated with ellipsis.",
  },
  {
    company: "에스제이글로벌(주)",
    review:
      "This is the review content. If the content is too long, it will be truncated with ellipsis. This is the review content. If the content is too long, it will be truncated with ellipsis. This is the review content. If the content is too long, it will be truncated with ellipsis.",
  },
  {
    company: "제이앤에이테크",
    review:
      "This is the review content. If the content is too long, it will be truncated with ellipsis. This is the review content. If the content is too long, it will be truncated with ellipsis. This is the review content. If the content is too long, it will be truncated with ellipsis.",
  },
  {
    company: "터닝솔루션",
    review:
      "This is the review content. If the content is too long, it will be truncated with ellipsis. This is the review content. If the content is too long, it will be truncated with ellipsis. This is the review content. If the content is too long, it will be truncated with ellipsis.",
  },
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
          <MainButton>알아보기</MainButton>
        </Box>
      </Box>
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
              sx={{ color: "black", fontSize: "40px", opacity: "50%" }}
            >
              USB, CF카드 없이 간단하게.
            </Typography>
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
              가장 쉬운 솔루션.
            </Typography>
            <Typography
              sx={{ color: "black", fontSize: "40px", opacity: "50%" }}
            >
              불가능을 가능하게.
            </Typography>
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
          backgroundColor: "#F5F5F7"
        }}
      >
        <LogoCarousel />
      </Box>
      {/* <Box
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
      </Box> */}
      {/* <Box
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
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                padding: 2,
              }}
            >
              <Grid container spacing={3} justifyContent="center">
                {reviewCardContent.map(
                  (
                    props: { company: string; review: string },
                    index: React.Key | null | undefined
                  ) => (
                    <Grid key={index} item xs={12} sm={12} md={6} lg={6} xl={3}>
                      <Box display="flex" justifyContent="center">
                        <ReviewCard
                          company={props.company}
                          review={props.review}
                        />
                      </Box>
                    </Grid>
                  )
                )}
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box> */}
      <Box
        sx={{
          width: "100vw",
          height: "auto",
          backgroundColor: "#F5F5F7"
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
            // gap: "",
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
              gap: "40px",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography
                sx={{
                  color: "black",
                  fontSize: "40px",
                  fontWeight: "bold",
                }}
              >
                빠른 연락.
              </Typography>
              <Typography
                sx={{ color: "black", fontSize: "40px", opacity: "50%" }}
              >
                기술시연 및 문의.
              </Typography>
            </Box>
            <MainButton
              href="https://forms.gle/RNYmpDQi2TsRyzmj7"
              sx={{ mt: "24px" }}
            >
              문의하기
            </MainButton>
          </Box>
        </Box>
      </Box>
      {/* <SupporterCarousel /> */}
      {/* </Container> */}
    </React.Fragment>
  );
}
