import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";

import SEO from "../components/SEO";
import customTheme from "../styles/customTheme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCss theme={customTheme}>
      <SEO />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
