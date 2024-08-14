import { Box, Typography } from "@mui/material";
import React from "react";

export const Footer = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "auto",
        backgroundColor: "#333333",
      }}
    >
      <Box
        sx={{
          px: {
            xs: "30px",
            md: "170px",
          },
          py: "20px",
          height: "auto",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
          gap: "0.25rem",
          opacity: 0.65
        }}
      >
        <Typography sx={{ fontSize: '15px' }}>기업명 : 비더원</Typography>
        <Typography sx={{ fontSize: '15px' }}>사업자등록번호 : 481-71-00586</Typography>
        <Typography sx={{ fontSize: '15px' }}>주소 : 경기도 시흥시 마유로376</Typography>
        <Typography sx={{ fontSize: '15px' }}>이메일 : sales@smart-betheone.com</Typography>
        <Typography sx={{ fontSize: '15px' }}>연락처 : 010-6567-2785</Typography>
        <Box
          sx={{
            display: "flex",
            flex: 1,
            paddingTop: '20px',
            width: '100%',
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography sx={{
            opacity: 0.65,
            fontSize: '15px'
          }}>COPYRIGHT© {new Date().getFullYear()}. BETHEONE. ALL RIGHT RESERVED.</Typography>
        </Box>
      </Box>
    </Box>
  );
};
