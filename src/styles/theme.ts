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
  }
});

export default theme;