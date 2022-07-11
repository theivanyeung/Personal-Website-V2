import { Box, Heading, Text } from "@chakra-ui/react";

const info = {
  title: "ABOUT ME",
  content:
    "Ivan is a builder and content creator based in Silicon Valley. He has a passion towards developing and designing digital services as well as exploring new tech. Currently he offers freelancing services and expresses interests in joining any projects/startups. When he is not working, Ivan enjoys his hobbies of piano, traveling, and exercising.",
};

const About = () => {
  return (
    <Box mt={"200px"} mb={"200px"} align={"center"}>
      <Box>
        <Heading
          fontWeight={"light"}
          fontSize={"5vw"}
          letterSpacing={"0.2em"}
          color={"rgba(255, 255, 255, 0.3)"}
          position={"relative"}
          w={"60vw"}
          mb={"50px"}
        >
          {info.title}
        </Heading>
      </Box>
      <Box>
        <Text
          fontSize={"2xl"}
          letterSpacing={"0.2em"}
          lineHeight={"50px"}
          color={"white"}
          display={{ base: "none", lg: "block" }}
        >
          {info.content}
        </Text>

        <Text
          fontSize={"2.5vw"}
          letterSpacing={"0.2em"}
          lineHeight={"8vw"}
          color={"white"}
          display={{ base: "block", lg: "none" }}
        >
          {info.content}
        </Text>
      </Box>
    </Box>
  );
};

export default About;
