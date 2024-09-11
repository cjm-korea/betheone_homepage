// import React from "react";
// import { Box, styled, keyframes } from "@mui/system";

// import AJTech from "@/images/company/AJTech.png"
// import Bion from "@/images/company/Bion.png"
// import ConnectFactory from "@/images/company/ConnectFactory.png"
// import Datagobongbab from "@/images/company/Datagobongbab.png"
// import FactoryDoctor from "@/images/company/FactoryDoctor.png"
// import FindMachine from "@/images/company/FindMachine.png"
// import Future from "@/images/company/Future.png"
// import Hinols from "@/images/company/Hinols.png"
// import IdeaPlus from "@/images/company/IdeaPlus.png"
// import Juho from "@/images/company/Juho.png"

// import KHKorea from "@/images/company/KHKorea.png"
// import Maketen from "@/images/company/Maketen.png"
// import Mungil from "@/images/company/Mungil.png"
// import Royal from "@/images/company/Royal.png"
// import SafePro from "@/images/company/SafePro.png"
// import Sbhe from "@/images/company/Sbhe.png"
// import Sinsung from "@/images/company/Sinsung.png"
// import TurningSolution from "@/images/company/TurningSolution.png"
// import WoojungTMS from "@/images/company/WoojungTMS.png"
// import YoungGwang from "@/images/company/YoungGwang.png"

// const row1 = [
//   AJTech.src.toString(),
//   Bion.src.toString(),
//   ConnectFactory.src.toString(),
//   Datagobongbab.src.toString(),
//   FactoryDoctor.src.toString(),
//   FindMachine.src.toString(),
//   Future.src.toString(),
//   Hinols.src.toString(),
//   IdeaPlus.src.toString(),
//   Juho.src.toString(),
// ];

// const row2 = [
//   KHKorea.src.toString(),
//   Maketen.src.toString(),
//   Mungil.src.toString(),
//   Royal.src.toString(),
//   SafePro.src.toString(),
//   Sbhe.src.toString(),
//   Sinsung.src.toString(),
//   TurningSolution.src.toString(),
//   WoojungTMS.src.toString(),
//   YoungGwang.src.toString(),
// ];

// const scrollX = keyframes`
//   from {
//     transform: translateX(0);
//   }
//   to {
//     transform: translateX(-100%);
//   }
// `;

// const SupporterCarousel = () => {
//   return (
//     <Box sx={styles.appContainer}>
//       <Box sx={styles.wrapper}>
//         <Box sx={styles.text}>Supported</Box>
//         <Marquee>
//           <MarqueeGroup>
//             {row1.map((el, index) => (
//               <ImageGroup key={index}>
//                 <Image src={el} />
//               </ImageGroup>
//             ))}
//           </MarqueeGroup>
//           <MarqueeGroup>
//             {row2.map((el, index) => (
//               <ImageGroup key={index}>
//                 <Image src={el} />
//               </ImageGroup>
//             ))}
//           </MarqueeGroup>
//         </Marquee>
//       </Box>
//     </Box>
//   );
// };

// const styles = {
//   appContainer: {
//     width: "100vw",
//     height: "auto",
//     color: "#000000",
//     position: "relative",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   wrapper: {
//     width: "100%",
//     height: "fit-content",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     flexDirection: "column",
//   },
//   text: {
//     fontSize: "40px",
//     fontWeight: 'bold',
//     marginBottom: "10px",
//     color: "#02203c",
//   },
//   note: {
//     fontSize: "18px",
//     fontWeight: 200,
//     marginBottom: "40px",
//     color: "#7c8e9a",
//   },
//   marquee: {
//     display: "flex",
//     width: "1200px",
//     overflow: "hidden",
//     userSelect: "none",
//     maskImage: "linear-gradient(to right, hsl(0 0% 0% / 0), hsl(0 0% 0% / 1) 10%, hsl(0 0% 0% / 1) 90%, hsl(0 0% 0% / 0))",
//     "&:hover": {
//       animationPlayState: "paused",
//     },
//   },
//   reverseAnimation: {
//     animationDirection: "reverse",
//     animationDelay: "-3s",
//   },
// };

// const Marquee = styled(Box)({
//   display: "flex",
//   width: "1200px",
//   overflow: "hidden",
//   userSelect: "none",
//   maskImage: "linear-gradient(to right, hsl(0 0% 0% / 0), hsl(0 0% 0% / 1) 10%, hsl(0 0% 0% / 1) 90%, hsl(0 0% 0% / 0))",
//   "&:hover": {
//     animationPlayState: "paused",
//     "& *": {
//       animationPlayState: "paused",
//     },
//   },
// });

// const MarqueeGroup = styled(Box)({
//   flexShrink: 0,
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "space-around",
//   whiteSpace: "nowrap",
//   width: "100%",
//   animation: `${scrollX} 30s linear infinite`,
  
// });

// const ImageGroup = styled(Box)({
//   display: "grid",
//   placeItems: "center",
//   width: "clamp(10rem, 1rem + 40vmin, 30rem)",
//   padding: "calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10)",
// });

// const Image = styled("img")({
//   objectFit: "contain",
//   width: "100%",
//   height: "100%",
//   aspectRatio: "16/9",
//   padding: "2px 5px",
// });

// export default SupporterCarousel;
