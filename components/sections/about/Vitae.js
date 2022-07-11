import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const info = {
  title: "VITAE",
  content1: "Full-stack developer",
  content2: "(MERN | Next.js | Blender)",
  content3: "Builder",
  content4: "(Product management | Marketing | Market Research | SEO | UI/UX)",
  content5: "Content Creation",
  content6: "(Adobe Premiere Pro | Branding)",
};

const Vitae = () => {
  return (
    <Box mt={"50px"} mb={"50px"}>
      <Flex display={{ base: "none", lg: "flex" }}>
        <Box>
          <Heading
            fontWeight={"medium"}
            fontSize={"2xl"}
            letterSpacing={"0.2em"}
            lineHeight={"50px"}
            color={"white"}
          >
            {info.content1}
          </Heading>
          <Text
            fontSize={"2xl"}
            letterSpacing={"0.2em"}
            lineHeight={"50px"}
            color={"white"}
            mb={"24px"}
          >
            {info.content2}
          </Text>
          <Heading
            fontWeight={"medium"}
            fontSize={"2xl"}
            letterSpacing={"0.2em"}
            lineHeight={"50px"}
            color={"white"}
          >
            {info.content3}
          </Heading>
          <Text
            fontSize={"2xl"}
            letterSpacing={"0.2em"}
            lineHeight={"50px"}
            color={"white"}
            mb={"24px"}
          >
            {info.content4}
          </Text>
          <Heading
            fontWeight={"medium"}
            fontSize={"2xl"}
            letterSpacing={"0.2em"}
            lineHeight={"50px"}
            color={"white"}
          >
            {info.content5}
          </Heading>
          <Text
            fontSize={"2xl"}
            letterSpacing={"0.2em"}
            lineHeight={"50px"}
            color={"white"}
          >
            {info.content6}
          </Text>
        </Box>
        <Box>
          <Heading
            fontWeight={"light"}
            fontSize={"5vw"}
            letterSpacing={"0.2em"}
            color={"rgba(255, 255, 255, 0.3)"}
            position={"relative"}
            w={"30vw"}
            mb={"50px"}
          >
            {info.title}
          </Heading>
        </Box>
      </Flex>

      <Flex display={{ base: "block", lg: "none" }}>
        <Box>
          <Heading
            fontWeight={"light"}
            fontSize={"5vw"}
            letterSpacing={"0.2em"}
            color={"rgba(255, 255, 255, 0.3)"}
            position={"relative"}
            w={"30vw"}
            mb={"50px"}
          >
            {info.title}
          </Heading>
        </Box>
        <Box>
          <Heading
            fontWeight={"medium"}
            fontSize={"2xl"}
            letterSpacing={"0.2em"}
            lineHeight={"50px"}
            color={"white"}
          >
            {info.content1}
          </Heading>
          <Text
            fontSize={"2xl"}
            letterSpacing={"0.2em"}
            lineHeight={"50px"}
            color={"white"}
            mb={"24px"}
          >
            {info.content2}
          </Text>
          <Heading
            fontWeight={"medium"}
            fontSize={"2xl"}
            letterSpacing={"0.2em"}
            lineHeight={"50px"}
            color={"white"}
          >
            {info.content3}
          </Heading>
          <Text
            fontSize={"2xl"}
            letterSpacing={"0.2em"}
            lineHeight={"50px"}
            color={"white"}
            mb={"24px"}
          >
            {info.content4}
          </Text>
          <Heading
            fontWeight={"medium"}
            fontSize={"2xl"}
            letterSpacing={"0.2em"}
            lineHeight={"50px"}
            color={"white"}
          >
            {info.content5}
          </Heading>
          <Text
            fontSize={"2xl"}
            letterSpacing={"0.2em"}
            lineHeight={"50px"}
            color={"white"}
          >
            {info.content6}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Vitae;
