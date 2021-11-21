import { PaletteMode } from '@mui/material';

const theme = (mode: PaletteMode): any => ({
  palette: {
    mode,
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#023e8a',
    },
  },

  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          background: mode === 'dark' ? '#000000' : '#FFFFFF',
          backgroundColor: '#FFFFFF',
          borderRadius: 16,
          padding: 0,
        },
      },
    },
  },
});

export { theme };
