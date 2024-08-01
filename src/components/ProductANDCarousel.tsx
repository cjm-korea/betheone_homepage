// import React from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import { Box } from "@mui/material";
// import ProductCardAND from "./ProductCardAND";

// // Define the responsive settings for different screen sizes
// const responsive = {
//   superLargeDesktop: {
//     breakpoint: { max: 4000, min: 3000 },
//     items: 5,
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//   },
// };

// const ProductCarousel: React.FC = () => {
//   return (
//     <Box
//       sx={{
//         width: "100%", // Make sure the container is full-width
//         height: "500px",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Carousel
//         responsive={responsive}
//         swipeable={true}
//         draggable={true}
//         showDots={true}
//         infinite={true}
//         autoPlay={false}
//         autoPlaySpeed={1000}
//         keyBoardControl={true}
//         customTransition="all .5"
//         transitionDuration={500}
//         containerClass="carousel-container"
//         removeArrowOnDeviceType={["tablet", "mobile"]}
//         dotListClass="custom-dot-list-style"
//         itemClass="carousel-item-padding-40-px"
//       >
//         {/* Ensure each item (Box) is properly displayed as a carousel item */}
//         <Box
//           sx={{
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             height: '100%', // Ensure item fills height of carousel
//           }}
//         >
//           <ProductCardAND
//             title="AND for RS232"
//             subtitle="놀라움은 구형 기계부터."
//             imageSrc="https://via.placeholder.com/100"
//             colorconcept="black"
//           />
//         </Box>
//         <Box
//           sx={{
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             height: '100%',
//           }}
//         >
//           <ProductCardAND
//             title="AND for LAN"
//             subtitle="한 단계 더 나아간 인프라."
//             imageSrc="https://via.placeholder.com/100"
//             colorconcept="black"
//           />
//         </Box>
//         <Box
//           sx={{
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             height: '100%',
//           }}
//         >
//           <ProductCardAND
//             title="AND for RS232"
//             subtitle="일정을 가볍게."
//             imageSrc="https://via.placeholder.com/100"
//             colorconcept="white"
//           />
//         </Box>
//         <Box
//           sx={{
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             height: '100%',
//           }}
//         >
//           <ProductCardAND
//             title="AND for LAN"
//             subtitle="또 다른 경쟁력."
//             imageSrc="https://via.placeholder.com/100"
//             colorconcept="white"
//           />
//         </Box>
//       </Carousel>
//     </Box>
//   );
// };

// export default ProductCarousel;
