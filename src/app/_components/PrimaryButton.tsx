import React from 'react'
import Button from '@mui/material/Button';
import { ThemeProvider } from '@emotion/react';
import theme from '@/theme/theme';

export const PrimaryButton = ({ title }: any) => {
  return (
    <ThemeProvider theme={theme}>
      <Button sx={{
        bgcolor: 'primary.main',
        color: 'primary.light',
        width: 'fit-content',
        px: 4,
        ":hover": {
          bgcolor: 'primary.dark'
        }
      }}>
        {title}
      </Button>
    </ThemeProvider>
  )
}