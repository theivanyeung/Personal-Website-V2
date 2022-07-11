import { Container } from "@chakra-ui/react";

import Layout from "../../components/layout/Layout";
import Header from "../../components/sections/Header";
import Intro from "../../components/sections/about/Intro";
import ResumeBtn from "../../components/sections/about/ResumeBtn";
import About from "../../components/sections/about/About";
import Vitae from "../../components/sections/about/Vitae";
import CommonBtn from "../../components/sections/about/CommonBtn";
import Showcase from "../../components/sections/about/Showcase";
import Bio from "../../components/sections/about/Bio";
import Socials from "../../components/sections/about/Socials";
import Copyright from "../../components/sections/Copyright";

const AboutPage = () => {
  return (
    <Layout bgImage={"url('./images/about-background.png')"}>
      <Header />
      <Container maxW={"container.xl"} align={"center"}>
        <Intro />
        <ResumeBtn />
        <About />
        <Vitae />
        <CommonBtn image={"./images/project-button.png"} />
        <Showcase />
        <CommonBtn image={"./images/content-button.png"} />
        <Bio />
        <Socials />
        <Copyright />
      </Container>
    </Layout>
  );
};

export default AboutPage;
