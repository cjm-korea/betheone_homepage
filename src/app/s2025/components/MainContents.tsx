"use client";

import { Box, Theme, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import S2025_main from "@/images/S2025_main.jpg";
import Icon_s2025_1 from "@/icons/Icon_s2025_1.png";
import Icon_s2025_2 from "@/icons/Icon_s2025_2.png";
import Icon_s2025_3 from "@/icons/Icon_s2025_3.png";
import Icon_s2025_4 from "@/icons/Icon_s2025_4.png";
import InViewAnimate from "@/components/section/InViewAnimate";
import MainButton from "@/components/MainButton";
import DescriptionCard from "./DescriptionCard";

export const MainContents = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const handleCopyCall = () => {
    navigator.clipboard.writeText("010-6567-2785");
    alert("전화번호가 클립보드에 복사되었습니다.");
  };

  const descriptionData = [
    {
      Icon: Icon_s2025_1.src,
      subtitle: "교육 및 기술지원 제공",
      title: "정기적인 교육 및 기술지원 제공",
      descriptions: [
        "한국에스캠 주식회사 전문 파트너사",
        "정기 교육을 제공합니다.",
        "1:1 기술지원을 제공합니다.",
      ],
    },
    {
      Icon: Icon_s2025_2.src,
      subtitle: "기술사업계획서 서포팅",
      title: "스마트공방 전문인력 서포팅",
      descriptions: [
        "스마트공방 전문가와 함께 서포팅을 제공합니다.",
        "가장 합격률이 높은 사업계획서를 제시합니다.",
      ],
    },
    {
      Icon: Icon_s2025_3.src,
      subtitle: "타사 대비 확실한 제품구성",
      title: "공작기계에 특화된 제품 구성",
      descriptions: [
        "업계 최고의 제품과 서비스를 제공합니다.",
        "공작기계를 사용하다면 꼭! 필요한 제품 구성",
      ],
    },
    {
      Icon: Icon_s2025_4.src,
      subtitle: "높은 공작기계 이해도",
      title: "30년 경력의 엔지니어",
      descriptions: [
        "믿을 수 있는 솔루션을 제시합니다.",
        "가장 합리적인 서비스를 제공합니다.",
      ],
    },
  ];

  return (
    <Box
      sx={{
        width: "100vw",
        height: "auto",
        backgroundColor: "#F5F5F7",
      }}
    >
      <InViewAnimate
        sx={{
          px: {
            xs: "30px",
            md: "170px",
          },
          pt: "100px",
          pb: "60px",
          height: "auto",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: {
            xs: "10px",
            md: "10px",
          },
        }}
      >
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
          2025 스마트 제조 공작기계 지원사업
        </Typography>
        <Typography
          sx={{
            color: "black",
            fontSize: {
              xs: "16px",
              md: "24px",
            },
            opacity: "50%",
          }}
        >
          공작기계 전문 소프트웨어 및 Iot 통신 장비 지원
        </Typography>
      </InViewAnimate>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          paddingBottom: "30px",
          width: "100%",
          height: "auto",
          gap: "24px",
        }}
      >
        <Box
          component="img"
          src={S2025_main.src}
          alt="Image 1"
          sx={{
            paddingX: 1,
            width: {
              xs: "90%",
              md: "50%",
            },
            height: "auto",
            borderRadius: "8px",
          }}
        />
        <MainButton
          href="https://forms.gle/iYyqPPACGQZNJv856"
          sx={{
            width: "fit-content",
            fontSize: "24px",
          }}
        >
          상담신청
        </MainButton>
        <Typography
          sx={{
            color: "black",
            fontSize: {
              xs: "16px",
              md: "24px",
            },
            opacity: "50%",
          }}
        >
          잠깐의 상담이 사장님의 공장에 혁신을 불러옵니다.
        </Typography>
      </Box>

      <InViewAnimate
        sx={{
          px: {
            xs: "30px",
            md: "170px",
          },
          pt: "30px",
          pb: "30px",
          height: "auto",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: {
            xs: "10px",
            md: "10px",
          },
        }}
      >
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
          왜 비더원을 선택해야 할까요?
        </Typography>
        <Typography
          sx={{
            color: "black",
            fontSize: {
              xs: "16px",
              md: "24px",
            },
            opacity: "50%",
          }}
        >
          국내 유일 공작기계 CNC/MCT 스마트화 전문기업
        </Typography>
      </InViewAnimate>

      <Box
        sx={{
          display: "flex",
          justifyContent: isSmallScreen ? "center" : "space-around",
          alignItems: "center",
          flexDirection: isSmallScreen ? "column" : "row",
          gap: 2, // 카드 간 간격
          flexWrap: "wrap", // 카드들이 화면을 넘어가면 줄바꿈
          padding: 4,
          backgroundColor: "#f5f5f5",
        }}
      >
        {descriptionData.map((data, index) => (
          <DescriptionCard
            Icon={data.Icon}
            subtitle={data.subtitle}
            title={data.title}
            descriptions={data.descriptions}
            key={index}
          />
        ))}
      </Box>

      <InViewAnimate
        sx={{
          px: {
            xs: "30px",
            md: "170px",
          },
          pt: "60px",
          pb: "30px",
          height: "auto",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: {
            xs: "10px",
            md: "10px",
          },
        }}
      >
        <Typography
          sx={{
            color: "black",
            fontSize: {
              xs: "12px",
              md: "16px",
            },
            fontWeight: "bold",
          }}
        >
          &lt;중소벤처기업부, 소상공인진흥공단 주관&gt;
        </Typography>
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
          공작기계 스마트화 지원사업
        </Typography>
        <Typography
          sx={{
            color: "black",
            fontSize: {
              xs: "16px",
              md: "24px",
            },
            opacity: "50%",
          }}
        >
          10인 미만 제조기업 지원사업
        </Typography>
      </InViewAnimate>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          paddingTop: "30px",
          paddingBottom: "60px",
          width: "100%",
          height: "auto",
          gap: "50px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            flexDirection: "column",
            gap: "12px",
            width: "100%",
            px: {
              xs: "30px",
              md: "170px",
            },
          }}
        >
          <Typography
            sx={{
              color: "black",
              fontSize: {
                xs: "16px",
                md: "24px",
              },
            }}
          >
            • 10인 미만 소상공인 / 사업장에 스마트 기술(IoT, AI 등) 맞춤 접목을
            통해 디지털화를 지원하는 사업입니다.
          </Typography>
          <Typography
            sx={{
              color: "black",
              fontSize: {
                xs: "16px",
                md: "24px",
              },
            }}
          >
            • 수작업 중심의 제조 공정에 소프트웨어, 하드웨어를 활용해 공정을
            개선합니다.
          </Typography>
          <Typography
            sx={{
              color: "black",
              fontSize: {
                xs: "16px",
                md: "24px",
              },
            }}
          >
            • CAD/CAM, 스마트 장비를 활용해{" "}
            <Box component="span" sx={{ fontWeight: "bold" }}>
              생산성 향상
            </Box>
            에 초점을 둔,{" "}
            <Box component="span" sx={{ fontWeight: "bold" }}>
              소상공인 맞춤 지원사업
            </Box>
            입니다.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            flexDirection: "column",
            gap: "12px",
            width: "100%",
            px: {
              xs: "30px",
              md: "170px",
            },
          }}
        >
          <Typography
            sx={{
              color: "black",
              fontSize: {
                xs: "16px",
                md: "24px",
              },
            }}
          >
            * 참여요건
          </Typography>
          <Typography
            sx={{
              color: "black",
              fontSize: {
                xs: "16px",
                md: "24px",
              },
            }}
          >
            (1) 10인 미만 사업장
          </Typography>
          <Typography
            sx={{
              color: "black",
              fontSize: {
                xs: "16px",
                md: "24px",
              },
            }}
          >
            (2) 사업자등록증 업태 : 제조업 (주 매출이 제조업인 기업)
          </Typography>
        </Box>

        <InViewAnimate
          sx={{
            px: {
              xs: "30px",
              md: "170px",
            },
            pt: "30px",
            pb: "30px",
            height: "auto",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: {
              xs: "10px",
              md: "10px",
            },
          }}
        >
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
            예산 구성
          </Typography>
          <Typography
            sx={{
              color: "black",
              fontSize: {
                xs: "16px",
                md: "24px",
              },
              opacity: "50%",
            }}
          >
            (2024년 기준)
          </Typography>
        </InViewAnimate>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            flexDirection: "column",
            gap: "12px",
            width: "100%",
            px: {
              xs: "30px",
              md: "170px",
            },
          }}
        >
          <Typography
            sx={{
              color: "black",
              fontSize: {
                xs: "16px",
                md: "24px",
              },
            }}
          >
            • 총 예산 규모 : 5,100 만 원 &#10142; 정부지원금 4,200만 원 + 업체
            자부담 현금 900만 원 (부가세 별도)
          </Typography>
        </Box>

        <MainButton
          href="https://forms.gle/iYyqPPACGQZNJv856"
          sx={{
            width: "fit-content",
            fontSize: "24px",
          }}
        >
          상담신청
        </MainButton>
        <Typography
          sx={{
            color: "black",
            fontSize: {
              xs: "16px",
              md: "24px",
            },
            opacity: "50%",
          }}
        >
          잠깐의 상담이 사장님의 공장에 혁신을 불러옵니다.
        </Typography>
      </Box>
    </Box>
  );
};
