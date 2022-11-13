import { CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Shell } from '@components';
import { config, theme } from '@config';
import '../font-awesome/styles.css';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>{`${config.name}'s Transition Timeline`}</title>
    </Head>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Shell>
        <Component {...pageProps} />
      </Shell>
    </ThemeProvider>
  </>
);

export default App;
