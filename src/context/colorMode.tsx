import { createTheme, PaletteMode, ThemeProvider } from '@mui/material';
import { parseCookies, setCookie } from 'nookies';
import { createContext, ReactNode, useMemo, useState } from 'react';
import { theme } from '../theme';

export interface IColorModeContext {
  colorMode: {
    toggleColorMode: () => void;
  };
  mode: 'light' | 'dark';
}

interface IColorModeContextProvider {
  children: ReactNode;
}

export const ColorModeContext = createContext({} as IColorModeContext);

export const ColorModeContextProvider = ({
  children,
}: IColorModeContextProvider): JSX.Element => {
  const cookies = parseCookies(undefined);
  const [mode, setMode] = useState<PaletteMode>(
    cookies['@wannago_theme'] as PaletteMode
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light'
        );
        setCookie(
          undefined,
          '@wannago_theme',
          mode === 'light' ? 'dark' : 'light'
        );
      },
    }),
    [mode]
  );

  const themeActual = useMemo(
    () => createTheme(theme(cookies['@wannago_theme'] as PaletteMode)),
    [cookies]
  );

  return (
    <ColorModeContext.Provider value={{ mode, colorMode }}>
      <ThemeProvider theme={themeActual}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};
