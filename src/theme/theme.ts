'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#006bff',
      dark: '#0066CC',
      light: '#ffffff',
      contrastText: '#000000'
    }
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 720,
      laptop: 1024,
      desktop: 1200,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiButtonBase: {
        defaultProps: {
            sx: {
               backgroundColor: "#006bff" 
            },
        }
    }
  }
});

export default theme;