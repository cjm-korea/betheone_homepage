// import { Theme, ThemeOptions } from "@mui/material/styles";

// declare module "@mui/material/styles" {
//     interface Palette {
//       rg: Palette["primary"];
//     }
//     interface PaletteOptions {
//       rg: PaletteOptions[""];
//     }
//     export function createTheme(options: ThemeOptions): Theme;
//   }

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