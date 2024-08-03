import MainButton from '@/components/MainButton'
import { Box, Typography } from '@mui/material'
import React from 'react'

export const Main_4 = () => {
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
            px: "170px",
            py: "60px",
            height: "auto",
            color: "white",
            display: "flex",
            flexDirection: "col",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              gap: "40px",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography
                sx={{
                  color: "black",
                  fontSize: "40px",
                  fontWeight: "bold",
                }}
              >
                빠른 연락.
              </Typography>
              <Typography
                sx={{ color: "black", fontSize: "40px", opacity: "50%" }}
              >
                기술시연 및 문의.
              </Typography>
            </Box>
            <MainButton
              href="https://forms.gle/RNYmpDQi2TsRyzmj7"
              sx={{ mt: "24px" }}
            >
              문의하기
            </MainButton>
          </Box>
        </Box>
      </Box>
  )
}
