import { Container } from "@chakra-ui/react";

import Layout from "../../components/layout/Layout";
import Header from "../../components/sections/Header";
import Intro from "../../components/sections/Intro";
import ResumeBtn from "../../components/sections/ResumeBtn";
import About from "../../components/sections/About";
import Vitae from "../../components/sections/Vitae";
import CommonBtn from "../../components/sections/CommonBtn";
import Showcase from "../../components/sections/Showcase";
import Bio from "../../components/sections/Bio";
import Socials from "../../components/sections/Socials";
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
