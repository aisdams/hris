import '@/styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import Layout from '@/components/layouts/layout';
import { NextPageCustomLayout } from '@/types/_app.type';
import AppProvider from '@/components/providers/app-provider';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const qc = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const App = ({
  Component,
  pageProps,
}: AppProps & {
  Component: NextPageCustomLayout;
}) => {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);
  return(
    <>
    <Head>
        <title>HRIS | NELLO</title>
        <meta name="keywords" key="keywords" content="HRIS NELLO" />
        <link
          rel="shortcut icon"
          href=""
        />
      </Head>
      <QueryClientProvider client={qc}>
            <AppProvider initialLoading={false}>
              {getLayout(<Component {...pageProps} />)}
            </AppProvider>

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
};

export default App;