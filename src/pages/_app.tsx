/* eslint-disable @typescript-eslint/no-explicit-any */
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { NextComponentType } from 'next';
import { AuthProvider } from '../context/auth';
import theme from '../theme';
import createEmotionCache from '../theme/createEmotionCache';

const clientSideEmotionCache = createEmotionCache();

interface IApp {
  Component: NextComponentType;
  pageProps: any;
  emotionCache: EmotionCache;
}

export default function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: IApp): JSX.Element {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Wannago</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
      </Head>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <CssBaseline />
          <Component {...pageProps} />
        </AuthProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}
