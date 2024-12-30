"use client";

import React from "react";
import Support_1 from "@/images/Support_1.png";
import Support_2 from "@/images/Support_2.png";
import Support_3 from "@/images/Support_3.png";
import Support_4 from "@/images/Support_4.png";
import Support_5 from "@/images/Support_5.png";
import Support_6 from "@/images/Support_6.png";
import Support_7 from "@/images/Support_7.png";
import Support_8 from "@/images/Support_8.png";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import InViewAnimate from "@/components/section/InViewAnimate";
import SquareBox from "./SquareBox";

const supporterData = [
  {
    ImageSource: Support_1.src,
  },
  {
    ImageSource: Support_2.src,
  },
  {
    ImageSource: Support_3.src,
  },
  {
    ImageSource: Support_4.src,
  },
  {
    ImageSource: Support_5.src,
  },
  {
    ImageSource: Support_6.src,
  },
  {
    ImageSource: Support_7.src,
  },
  {
    ImageSource: Support_8.src,
  },
  {
    ImageSource: Support_8.src,
  },
];

export const Supporter = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

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
            md: "40px",
          },
        }}
      >
        <InViewAnimate
          sx={{
            display: "flex",
            flex: 1,
            flexDirection: {
              xs: "column",
              md: "row",
            },
            pb: {
              xs: "10px",
              md: 0,
            },
          }}
        >
          <Typography
            component={"h3"}
            sx={{
              color: "black",
              fontSize: {
                xs: "24px",
                md: "40px",
              },
              fontWeight: "bold",
            }}
          >
            Supporter.
          </Typography>
        </InViewAnimate>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
            flexWrap: "wrap",
            padding: 4,
            backgroundColor: "#f5f5f5",
          }}
        >
          {supporterData
            .filter((_, index) => isSmallScreen || index < 8) // isSmallScreen이 아닐 경우 8개까지만 표시
            .map((data, index) => (
              <SquareBox
                src={data.ImageSource}
                alt={`서포터 ${index + 1}`}
                minSize={50}
                maxSize={200}
                key={index}
              />
            ))}
        </Box>
      </Box>
    </Box>
  );
};
