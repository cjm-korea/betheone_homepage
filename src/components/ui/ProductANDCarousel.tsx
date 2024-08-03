"use client";

import React, { forwardRef } from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import ProductCardAND from "./ProductCardAND";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

const StyledSlider = styled(
  forwardRef<Slider, any>((props, ref) => <Slider ref={ref} {...props} />)
)({
  position: "relative",
  overflow: "visible",
});

const CarouselContainer = styled(Box)({
  width: "100vw",
  height: "500px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  position: "relative",
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
  slidesToShow: 4,
  slidesToScroll: 1,
  swipeToSlide: true,
  arrows: false,
};

const ProductANDCarousel: React.FC = () => {
  const slider = React.useRef<Slider>(null);

  return (
    <CarouselContainer>
      <ArrowButton
        className="arrow"
        sx={{ left: "3%" }}
        onClick={() => slider.current?.slickPrev()}
      >
        <ArrowLeft sx={{ width: "48px", height: "48px" }} />
      </ArrowButton>
      <StyledSlider {...settings} ref={slider}>
          <ProductCardAND
            title="AND for RS232"
            subtitle="놀라움은 구형 기계부터."
            imageSrc="https://via.placeholder.com/100"
            colorconcept="black"
            href={"/and"}
          />
          <ProductCardAND
            title="AND for LAN"
            subtitle="한 단계 더 높아진 인프라."
            imageSrc="https://via.placeholder.com/100"
            colorconcept="black"
            href={"/and"}
          />
          <ProductCardAND
            title="AND for RS232"
            subtitle="작업을 가볍게."
            imageSrc="https://via.placeholder.com/100"
            colorconcept="white"
            href={"/and"}
          />
          <ProductCardAND
            title="AND for LAN"
            subtitle="또 다른 경쟁력."
            imageSrc="https://via.placeholder.com/100"
            colorconcept="white"
            href={"/and"}
          />
      </StyledSlider>
      <ArrowButton
        className="arrow"
        sx={{ right: "13%" }}
        onClick={() => slider.current?.slickNext()}
      >
        <ArrowRight sx={{ width: "48px", height: "48px" }} />
      </ArrowButton>
    </CarouselContainer>
  );
};

export default ProductANDCarousel;
