import Head from "next/head";
import { useRouter } from "next/router";

import {
  SEO_TITLE,
  SEO_DESCRIPTION,
  SEO_KEYWORDS,
  PRODUCTION_URL,
} from "./constants";

const SEO = () => {
  const router = useRouter();

  return (
    <Head>
      <meta name="description" content={SEO_DESCRIPTION} />
      <meta name="keywords" content={SEO_KEYWORDS} />
      <title>{SEO_TITLE}</title>
      <meta property="og:title" content={SEO_TITLE} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={SEO_DESCRIPTION} />
      <meta property="og:site_name" content={SEO_TITLE} />
      <meta property="og:url" content={`${PRODUCTION_URL}${router.asPath}`} />
    </Head>
  );
};

export default SEO;
