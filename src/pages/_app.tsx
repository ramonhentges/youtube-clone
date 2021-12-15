import 'fontsource-roboto';
import type { AppProps } from 'next/app';
import { MyThemeProvider } from '../contexts/Theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MyThemeProvider>
      <Component {...pageProps} />
    </MyThemeProvider>
  );
}

export default MyApp;
