"use client";

import React, { forwardRef } from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import ProductCard from "./ProductCard";
import AND from "@/images/AND.png";
import IntelliCAD from "@/images/IntelliCAD.png";
import Scam from "@/images/Scam.png";
import Monitoring from "@/images/Monitoring.png";

// StyledSlider를 styled로 스타일링
const StyledSlider = styled(
  forwardRef<Slider, any>((props, ref) => <Slider ref={ref} {...props} />)
)({
  position: "relative",
  overflow: "visible",
});

// 화살표 버튼을 포함한 상위 Box 스타일
const CarouselContainer = styled(Box)({
  width: "100%",
  height: "fit",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  position: "relative",
  overflowX: 'visible',
  "&:hover .arrow": {
    opacity: 1,
  },
});

// 화살표 버튼 스타일
const ArrowButton = styled(Box)({
  width: "48px",
  height: "48px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  zIndex: 9999,
  cursor: "pointer",
  background: "gray",
  borderRadius: "50%",
  opacity: 0.7,
  transition: "opacity 0.3s",
  "&:hover": {
    opacity: 1,
    transform: "scale(1.2)",
    transition: "transform 0.3s",
  },
});

const settings = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  swipeToSlide: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1950,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1550,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    }
  ],
};

const ProductCarousel: React.FC = () => {
  const slider = React.useRef<Slider>(null);

  return (
    <CarouselContainer>
      <ArrowButton
        className="arrow"
        sx={{ left: "-3%" }}
        onClick={() => slider.current?.slickPrev()}
      >
        <ArrowLeft sx={{ width: "48px", height: "48px" }} />
      </ArrowButton>
      <StyledSlider {...settings} ref={slider}>
        <ProductCard
          imageSrc={AND.src.toString()}
          subtitle={"어디서나 완벽하게."}
          title={"부착형 무선 데이터서버"}
          colorConcept="black"
        />
        <ProductCard
          imageSrc={Monitoring.src.toString()}
          subtitle={"항상 정확하게."}
          title={"데이터 모니터링 & 공구 파손 감지"}
          colorConcept="black"
        />
        <ProductCard
          imageSrc={IntelliCAD.src.toString()}
          subtitle={"언제나 합리적인 선택."}
          title={"Intelli CMS CAD"}
          colorConcept="white"
        />
        <ProductCard
          imageSrc={Scam.src.toString()}
          subtitle={"무엇이든 간단하게."}
          title={"S-CAM"}
          colorConcept="white"
        />
      </StyledSlider>
      <ArrowButton
        className="arrow"
        sx={{ right: "-3%" }}
        onClick={() => slider.current?.slickNext()}
      >
        <ArrowRight sx={{ width: "48px", height: "48px" }} />
      </ArrowButton>
    </CarouselContainer>
  );
};

export default ProductCarousel;