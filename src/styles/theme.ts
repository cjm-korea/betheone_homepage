import { ThemeOptions, createTheme } from '@mui/material/styles';
import { blue, red } from '@mui/material/colors';

declare module "@mui/material" {
  interface ButtonPropsColorOverrides {
    text: true;
  }
}

// declare module '@mui/material' {
//   interface Color {
//     dark: string
//     main: string
//     light: string
//   }
// }

// const themeOptions: ThemeOptions = {
//   palette: {
//     text: {
//       primary: '#FFFFFF',
//       secondary: '#000000'
//     },
//   },
// }

// const theme = createTheme(themeOptions)

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

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#73B5E0',
      light: '#FFFFFF'
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    
  },
  components: {
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200
    }
  }
});

export default theme;