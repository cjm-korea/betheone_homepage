"use client"

import React from "react";
import {
  Box,
  Grid,
  Typography,
} from "@mui/material";
import ANDImage from "@/images/LAN_use1.jpg";
import ANDComposeCard from "@/app/and/components/ANDComposeCard";
import Image_Cable from "@/images/cable.png";
import Image_Power from "@/images/power.png";
import Image_AND from "@/images/and_only.png";
import Icon_DNC from "@/icons/Icon_DNC.png";
import Icon_Wireless from "@/icons/Icon_Wireless.png";
import Icon_Digital from "@/icons/Icon_Digital.png";

export const Description_and = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          marginBottom: 4,
          padding: 2,
          backgroundColor: "#F5F5F7",
        }}
      >
        <Box
          sx={{
            marginBottom: 3,
            display: "flex",
            flexDirection: "row",
            alignItems: "baseline",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "black",
              fontSize: { xs: "1.4rem", md: "24px" },
              fontWeight: "bold",
            }}
          >
            당신의 기계.
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: "black",
              fontSize: { xs: "1.4rem", md: "24px" },
              opacity: "50%",
              paddingLeft: { xs: 0, md: "8px" },
            }}
          >
            당신이 원하는 대로.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src={ANDImage.src}
            sx={{
              width: "80%",
              height: "300px",
              objectFit: { xs: "cover", md: "none" },
              objectPosition: "top",
              borderRadius: "18px",
            }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          mx: {
            xs: "30px",
            lg: "170px",
          },
          my: "60px",
          padding: 2,
          backgroundColor: "#F5F5F7",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} lg={4}>
            <ANDComposeCard imageSrc={Image_AND.src} text="AND" />
          </Grid>
          <Grid item xs={12} sm={4} lg={4}>
            <ANDComposeCard imageSrc={Image_Cable.src} text="통신선" />
          </Grid>
          <Grid item xs={12} sm={4} lg={4}>
            <ANDComposeCard imageSrc={Image_Power.src} text="전원" />
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          mx: {
            xs: "30px",
            lg: "170px",
          },
          my: "60px",
          padding: 2,
        }}
      >
        <Box sx={{ padding: 0 }}>
          <Typography
            variant="h5"
            sx={{ marginBottom: 4, textAlign: "center" }}
          >
            내 기계와 함께 누릴 수<br />
            있는 놀라움의 세계.
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: 2,
                }}
              >
                <Box
                  component="img"
                  src={Icon_DNC.src}
                  alt="Small Box"
                  sx={{
                    width: "50px",
                    height: "50px",
                    // backgroundColor: "#ccc",
                    borderRadius: "4px",
                    marginBottom: 2,
                  }}
                />
                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                  DNC(M198) 연속가공
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  USB, CF카드 없이 데이터를 바로 보내고, 즉시 가공
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: 2,
                }}
              >
                <Box
                  component="img"
                  src={Icon_Wireless.src}
                  alt="Small Box"
                  sx={{
                    width: "50px",
                    height: "50px",
                    // backgroundColor: "#ccc",
                    borderRadius: "4px",
                    marginBottom: 2,
                  }}
                />
                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                  무선 네트워크 인프라
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  기계와 별도의 무선 네트워크 구축으로 현장을 간단하게
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: 2,
                }}
              >
                <Box
                  component="img"
                  src={Icon_Digital.src}
                  alt="Small Box"
                  sx={{
                    width: "50px",
                    height: "50px",
                    // backgroundColor: "white",
                    borderRadius: "4px",
                    marginBottom: 2,
                  }}
                />
                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                  모든 기계를 디지털화
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  RS232, LAN 통신으로 구형, 신형 기계 모두 호환
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
