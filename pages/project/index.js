import Section from "../../components/animate/Section";
import Display from "../../components/sections/display/Display";
import { Interned, PastProjects, Projects } from "../../components/data/Card";

const ProjectPage = () => {
  return (
    <div>
      <Section delay={0.1}>
        <Display header={"PROJECT"} card={Projects} />
      </Section>

      <Section delay={0.2}>
        <Display header={"INTERNED"} card={Interned} />
      </Section>

      <Section delay={0.3}>
        <Display header={"PAST PROJECTS"} card={PastProjects} />
      </Section>
    </div>
  );
};

export default ProjectPage;
