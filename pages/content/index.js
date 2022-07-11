import { Container } from "@chakra-ui/react";

import Layout from "../../components/layout/Layout";
import Header from "../../components/sections/Header";
import Display from "../../components/sections/display/Display";
import { PopularPosts } from "../../components/data/Card";
import Copyright from "../../components/sections/Copyright";

const ContentPage = () => {
  return (
    <Layout bgImage={"url('./images/content-background.png')"}>
      <Header />
      <Container maxW={"container.xl"} align={"center"}>
        <Display header={"POPULAR POSTS"} card={PopularPosts} />
        <Copyright />
      </Container>
    </Layout>
  );
};

export default ContentPage;
