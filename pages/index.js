import Intro from "../components/sections/about/Intro";
import ResumeBtn from "../components/sections/about/ResumeBtn";
import About from "../components/sections/about/About";
import Vitae from "../components/sections/about/Vitae";
import CommonBtn from "../components/sections/about/CommonBtn";
import Showcase from "../components/sections/about/Showcase";
import Bio from "../components/sections/about/Bio";
import Socials from "../components/sections/about/Socials";

import Section from "../components/animate/Section";

const Home = () => {
  return (
    <div>
      <Section delay={0.1}>
        <Intro />
      </Section>

      <Section delay={0.2}>
        <ResumeBtn />
      </Section>

      <Section delay={0.3}>
        <About />
      </Section>

      <Section delay={0.4}>
        <Vitae />
      </Section>

      <Section delay={0.5}>
        <CommonBtn image={"./images/project-button.png"} link={"/project"} />
      </Section>

      <Section delay={0.6}>
        <Showcase />
      </Section>

      <Section delay={0.7}>
        <CommonBtn image={"./images/content-button.png"} link={"/content"} />
      </Section>

      <Section delay={0.8}>
        <Bio />
      </Section>

      <Section delay={0.8}>
        <Socials />
      </Section>
    </div>
  );
};

export default Home;
