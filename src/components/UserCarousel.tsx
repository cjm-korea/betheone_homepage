import React from "react";
import { Box, styled, keyframes } from "@mui/system";

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
    <Box sx={styles.appContainer}>
      <Box sx={styles.wrapper}>
        <Box sx={styles.text}>사용 사례</Box>
        <Box sx={styles.note}>
          부착형 무선 데이터 서버를 사용해주시는 기업들입니다.
        </Box>
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
          <MarqueeGroup sx={styles.reverseAnimation}>
            {row2.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup sx={styles.reverseAnimation}>
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

const styles = {
  appContainer: {
    width: "100vw",
    height: "auto",
    color: "#000000",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    width: "100%",
    height: "fit-content",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  text: {
    fontSize: "40px",
    fontWeight: 'bold',
    marginBottom: "10px",
    color: "#02203c",
  },
  note: {
    fontSize: "18px",
    fontWeight: 200,
    marginBottom: "40px",
    color: "#7c8e9a",
  },
  marquee: {
    display: "flex",
    width: "1200px",
    overflow: "hidden",
    userSelect: "none",
    maskImage: "linear-gradient(to right, hsl(0 0% 0% / 0), hsl(0 0% 0% / 1) 10%, hsl(0 0% 0% / 1) 90%, hsl(0 0% 0% / 0))",
    "&:hover": {
      animationPlayState: "paused",
    },
  },
  reverseAnimation: {
    animationDirection: "reverse",
    animationDelay: "-3s",
  },
};

const Marquee = styled(Box)({
  display: "flex",
  width: "1200px",
  overflow: "hidden",
  userSelect: "none",
  maskImage: "linear-gradient(to right, hsl(0 0% 0% / 0), hsl(0 0% 0% / 1) 10%, hsl(0 0% 0% / 1) 90%, hsl(0 0% 0% / 0))",
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
