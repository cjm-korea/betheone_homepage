"use client";

import React, { forwardRef } from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import AND from "@/images/AND.jpg";
import IntelliCAD from "@/images/IntelliCAD.jpg";
import MasterCAM_Logo from "@/logos/masterCAM_logo.png";
import sCAM_Logo from "@/logos/sCAM_logo.png";
import cimatronCAM_Logo from "@/logos/cimatronCAM_logo.png";
import Monitoring from "@/images/Monitoring.jpg";
import ProductSquareBox from "../../components/ProductSquareBox";
import LogoSquareBox from "@/components/LogoSqureBox";

const StyledSlider = styled(
  forwardRef<Slider, any>((props, ref) => <Slider ref={ref} {...props} />)
)({
  position: "relative",
  overflow: "visible",
});

const CarouselContainer = styled(Box)({
  width: "100%",
  height: "fit",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  position: "relative",
  overflowX: "visible",
  "&:hover .arrow": {
    opacity: 1,
  },
});

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
    },
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
        <LogoSquareBox
          imageSrc={sCAM_Logo.src.toString()}
          subtitle={"가장 합리적인 선택."}
          title={"에스캠"}
          colorConcept="white"
          href={"/cam"}
        />
        <LogoSquareBox
          imageSrc={MasterCAM_Logo.src.toString()}
          subtitle={"최고의 방법."}
          title={"마스터캠"}
          colorConcept="white"
          href={"/cam"}
        />
        <LogoSquareBox
          imageSrc={cimatronCAM_Logo.src.toString()}
          subtitle={"당신의 파트너."}
          title={"시마트론"}
          colorConcept="black"
          href={"/cam"}
        />
        <ProductSquareBox
          imageSrc={AND.src.toString()}
          subtitle={"쉬운 업그레이드."}
          title={"2025 스마트 지원사업"}
          colorConcept="black"
          href={"/s2025"}
        />
        <ProductSquareBox
          imageSrc={Monitoring.src.toString()}
          subtitle={"항상 정확하게."}
          title={"데이터 모니터링 & 공구 파손 감지"}
          colorConcept="black"
          href={"#"}
        />
        <LogoSquareBox
          imageSrc={IntelliCAD.src.toString()}
          subtitle={"압도적인 가성비."}
          title={"Intelli CMS CAD"}
          colorConcept="white"
          href={"/s2025"}
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
