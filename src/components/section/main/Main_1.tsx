'use client'

import { Box, Typography } from '@mui/material';
import React from 'react'

export const Main_1 = () => {
  return (
    <Box
        sx={{
          width: "100vw",
          height: "400px",
          mt: "40px",
          backgroundImage: `url("/background_main.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 60%",
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            px: "170px",
            py: "60px",
            height: "400px",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "18px",
          }}
        >
          <Typography
            sx={{ color: "white", fontSize: "40px", fontWeight: "bold" }}
          >
            단 하나의 가공 솔루션
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: "28px",
              fontWeight: "bold",
              opacity: "70%",
            }}
          >
            캐드, 캠, 스마트팩토리, 모니터링 비더원
          </Typography>
        </Box>
      </Box>
  )
}
