import Display from "../../components/sections/display/Display";
import { PopularPosts } from "../../components/data/Card";
import Section from "../../components/animate/Section";

const ContentPage = () => {
  return (
    <div>
      <Section delay={0.1}>
        <Display header={"POPULAR POSTS"} card={PopularPosts} />
      </Section>
    </div>
  );
};

export default ContentPage;
