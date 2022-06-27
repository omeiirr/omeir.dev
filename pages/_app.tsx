import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import ReactGA from 'react-ga4';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Add Google Analytics
    ReactGA.initialize(process.env.NEXT_PUBLIC_GA_ID || '');
    ReactGA.event('websiteOpened', {
      event_category: 'APP',
    });
  }, []);

  return (
    <ThemeProvider attribute='class'>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
