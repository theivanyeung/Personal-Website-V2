import Head from "next/head";
import { ChakraProvider, Container } from "@chakra-ui/react";

import SEO from "../components/SEO";
import customTheme from "../styles/customTheme";
import Layout from "../components/layout/Layout";
import Animate from "../components/animate/Animate";

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider resetCss theme={customTheme}>
      <SEO />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="stylesheet" />
      </Head>
      <Layout bgImage={"url('./images/about-background.png')"} router={router}>
        <Container maxW={"container.xl"} align={"center"}>
          <Animate>
            <Component {...pageProps} key={router.route} />
          </Animate>
        </Container>
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
