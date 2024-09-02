"use client";

import { Box, Typography } from "@mui/material";
import React from "react";
import LAN_use1 from "@/images/LAN_use1.jpg";
import LAN_use2 from "@/images/LAN_use2.jpg";
import RS232_use1 from "@/images/RS232_use1.jpg";
import RS232_use2 from "@/images/RS232_use2.jpg";

export const Main_1 = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "auto",
        backgroundColor: "#F5F5F7",
      }}
    >
      <Box
        sx={{
          px: {
            xs: "30px",
            md: "170px",
          },
          py: "60px",
          height: "auto",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
          gap: {
            xs: "10px",
            md: "40px"
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            width: '100%',
            flex: 1,
            flexDirection: {
              xs: "column",
              md: "column",
            },
            pb: {
              xs: '10px',
              md: 0
            }
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
            인프라는 가볍게, 작업은 쉽고 빠르게
          </Typography>
          <Typography
            sx={{
              color: "black",
              fontSize: {
                xs: "24px",
                md: "40px",
              },
              opacity: "50%",
            }}
          >
            검증받은 기술력으로 믿고 맡기는 무선 인프라
          </Typography>
        </Box>
        {/* 이미지 추가 */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: {
              xs: "column", // 작은 화면에서는 세로로 나열
              md: "row",    // 큰 화면에서는 가로로 나열
            },
            gap: "20px", // 이미지 간의 간격
            width: "100%",
          }}
        >
          <Box
            component="img"
            src={LAN_use1.src} // 첫 번째 이미지 경로
            alt="Image 1"
            sx={{
              width: {
                xs: "100%", // 작은 화면에서는 이미지가 전체 너비를 차지
                md: "45%",  // 큰 화면에서는 이미지가 45% 너비를 차지
              },
              height: "auto",
              borderRadius: "8px", // 이미지 모서리를 둥글게
            }}
          />
          <Box
            component="img"
            src={LAN_use1.src} // 두 번째 이미지 경로
            alt="Image 2"
            sx={{
              width: {
                xs: "100%", // 작은 화면에서는 이미지가 전체 너비를 차지
                md: "45%",  // 큰 화면에서는 이미지가 45% 너비를 차지
              },
              height: "auto",
              borderRadius: "8px", // 이미지 모서리를 둥글게
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

// "use client";

// import { Box, Typography } from "@mui/material";
// import React from "react";
// import Background_main from "@/images/background_main.jpg"

// export const Main_1 = () => {
//   return (
//     <Box
//       sx={{
//         width: "100vw",
//         height: "400px",
//         backgroundImage: `url(${Background_main.src})`,
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "50% 60%",
//         backgroundSize: "cover",
//       }}
//     >
//       <Box
//         sx={{
//           px: {
//             xs: "30px",
//             md: "170px",
//           },
//           py: "60px",
//           height: "400px",
//           color: "white",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           gap: "18px",
//         }}
//       >
//         <Typography
//           sx={{
//             color: "white",
//             fontSize: {
//               xs: "24px",
//               md: "40px"
//             },
//             fontWeight: "bold",
//           }}
//         >
//           단 하나의 제조 솔루션
//         </Typography>
//         <Typography
//           sx={{
//             color: "white",
//             fontSize: {
//               xs: "18px",
//               md: "28px"
//             },
//             fontWeight: "bold",
//             opacity: "70%",
//           }}
//         >
//           캐드, 캠, 스마트팩토리, 모니터링 비더원
//         </Typography>
//       </Box>
//     </Box>
//   );
// };
