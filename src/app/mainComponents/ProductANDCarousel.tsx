"use client";

import React, { forwardRef } from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import LAN_use1 from "@/images/LAN_use1.jpg";
import LAN_use2 from "@/images/LAN_use2.jpg";
import RS232_use1 from "@/images/RS232_use1.jpg";
import RS232_use2 from "@/images/RS232_use2.jpg";
import ProductSquareBox from "../../components/ProductSquareBox";

const StyledSlider = styled(
  forwardRef<Slider, any>((props, ref) => <Slider ref={ref} {...props} />)
)({
  position: "relative",
  overflow: "visible"
});

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

const ProductANDCarousel: React.FC = () => {
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
          <ProductSquareBox
            title="AND for RS232"
            subtitle="놀라움은 구형 기계부터."
            imageSrc={RS232_use1.src.toString()}
            colorConcept="black"
            href={"/and"}
          />
          <ProductSquareBox
            title="AND for LAN"
            subtitle="작업을 가볍게."
            imageSrc={LAN_use1.src.toString()}
            colorConcept="black"
            href={"/and"}
          />
          <ProductSquareBox
            title="AND for RS232"
            subtitle="더 간단한 인프라."
            imageSrc={RS232_use2.src.toString()}
            colorConcept="white"
            href={"/and"}
          />
          <ProductSquareBox
            title="AND for LAN"
            subtitle="또 다른 경쟁력."
            imageSrc={LAN_use2.src.toString()}
            colorConcept="white"
            href={"/and"}
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

export default ProductANDCarousel;
