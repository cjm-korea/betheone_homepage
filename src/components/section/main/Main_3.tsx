import ProductCarousel from "@/app/mainComponents/ProductCarousel";
import { Box, Typography } from "@mui/material";
import React from "react";
import InViewAnimate from "../InViewAnimate";

export const Main_3 = () => {
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
            sx={{
              color: "black",
              fontSize: {
                xs: "24px",
                md: "40px",
              },
              fontWeight: "bold",
            }}
          >
            추가적인 솔루션.
          </Typography>
          <Typography
            sx={{
              color: "black",
              fontSize: {
                xs: "24px",
                md: "40px",
              },
              opacity: "50%",
              paddingLeft: {
                xs: 0,
                md: "8px",
              },
            }}
          >
            불가능을 가능하게.
          </Typography>
        </InViewAnimate>
        <ProductCarousel />
      </Box>
    </Box>
  );
};
