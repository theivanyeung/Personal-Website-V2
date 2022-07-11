import { Box, Center, Image, Heading, Text } from "@chakra-ui/react";

const content = [
  { id: "1", title: "Builder & Content Creator" },
  { id: "1", title: "(Full-stack | UI/UX | Startups)" },
  { id: "1", title: "theivanyeung@gmail.com" },
];

const Intro = () => {
  return (
    <Box
      ml={"5vw"}
      mr={"5vw"}
      mt={"100px"}
      mb={"100px"}
      display={{ lg: "flex" }}
    >
      <Box flexShrink={0} align={"center"}>
        <Image src={"./images/profile-image.png"} />
      </Box>
      <Center display={{ base: "none", lg: "flex" }} ml={"7vw"}>
        <Box align={"center"}>
          <Heading
            color={"white"}
            fontWeight={"light"}
            fontSize={"7xl"}
            letterSpacing={"0.2em"}
            mb={"30px"}
          >
            Ivan Yeung
          </Heading>
          {content.map((contentItem) => (
            <Text
              key={contentItem.id}
              color={"white"}
              fontSize={"2xl"}
              letterSpacing={"0.3em"}
              lineHeight={"64px"}
            >
              {contentItem.title}
            </Text>
          ))}
        </Box>
      </Center>
      <Center display={{ base: "flex", lg: "none" }} w={"70vw"}>
        <Box align={"center"} mt={"2em"}>
          <Heading
            color={"white"}
            fontWeight={"light"}
            fontSize={"6.5vw"}
            letterSpacing={"0.2em"}
            mb={"30px"}
          >
            Ivan Yeung
          </Heading>
          {content.map((contentItem) => (
            <Text
              key={contentItem.id}
              color={"white"}
              fontSize={"2.4vw"}
              letterSpacing={"0.2em"}
              lineHeight={"45px"}
            >
              {contentItem.title}
            </Text>
          ))}
        </Box>
      </Center>
    </Box>
  );
};

export default Intro;
