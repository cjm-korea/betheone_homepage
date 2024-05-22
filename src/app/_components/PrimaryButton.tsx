import React from 'react'
import Button from '@mui/material/Button';
import { ThemeProvider } from '@emotion/react';
import theme from '@/theme/theme';

type primaryButtonTitle = {
  title: string;
}

export const PrimaryButton = ({ title }: primaryButtonTitle) => {
  return (
    <ThemeProvider theme={theme}>
      <Button sx={{
        bgcolor: 'primary.main',
        color: 'primary.light',
        width: 'fit-content',
        px: 2.5,
        py: 1.5,
        ":hover": {
          bgcolor: 'primary.dark'
        }
      }}>
        {title}
      </Button>
    </ThemeProvider>
  )
}