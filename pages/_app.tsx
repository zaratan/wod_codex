/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
import type { AppProps } from 'next/app';
import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Neuton&display=swap"
          rel="stylesheet"
        />
        {/* <link rel="stylesheet" href="https://rsms.me/inter/inter.css" /> */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
