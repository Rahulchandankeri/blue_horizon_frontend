// theme.ts
'use client';
import { extendTheme } from '@mui/joy/styles';

declare module '@mui/joy/styles' {
  interface Palette {
    secondary: PaletteColorOptions;
  }

  interface PaletteColorOptions {
    50?: string;
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
  }

  interface Theme {
    palette: Palette;
  }
}
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          50: '#4f46e5',
          100: '#bbdefb',
          200: '#90caf9',
          300: '#64b5f6',
          400: '#42a5f5',
          500: '#4f46e5',
          600: '#4338ca',
          700: '#1976d2',
          800: '#1565c0',
          900: '#4f46e5',
        },
        secondary: {
          50: '#f3e5f5',
          100: '#e1bee7',
          200: '#ce93d8',
          300: '#ba68c8',
          400: '#ab47bc',
          500: '#9c27b0',
          600: '#8e24aa',
          700: '#7b1fa2',
          800: '#6a1b9a',
          900: '#4a148c',
        },
        // Add more color definitions as needed
      },
    },
  },
});

export default theme;
