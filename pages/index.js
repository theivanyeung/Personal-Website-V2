import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ivan Yeung | @theivanyeung</title>
        <meta
          name="keywords"
          content="tech, software, startup, business, marketing, network, development, porfolio, piano, products"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Ivan is a builder and content creator based in Silicon Valley. He has a passion towards developing and designing digital services as well as exploring new tech. Currently he offers freelancing services and expresses interests in joining any projects/startups. When he is not working, Ivan enjoys his hobbies of piano, traveling, and exercising."
        />
        <meta property="og:site_name" content="Ivan Yeung | @theivanyeung" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </Head>
    </div>
  );
}
