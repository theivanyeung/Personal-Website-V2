import { Box, Center, Flex, Image, Heading, Text } from "@chakra-ui/react";

import { YOUTUBE_LINK, PRODICITY } from "../../constants";

const projects = [
  {
    id: "content",
    link: YOUTUBE_LINK,
    image: "./images/youtube-channel-icon.png",
    title: "iPiano",
    text: "My Youtube Channel",
  },
  {
    id: "work",
    link: PRODICITY,
    image: "./images/prodicity-icon.png",
    title: "Prodicity",
    text: "Gamified Productivity",
  },
];

const Showcase = () => {
  return (
    <Box align={"center"} mt={"100px"} mb={"100px"}>
      <Center
        w={"60vw"}
        bgColor={"rgba(149, 200, 216, 0.1)"}
        backdropFilter={"blur(12px)"}
        border={"2px solid #95C8D8"}
        borderRadius={"50px"}
        display={{ base: "none", xxl: "block" }}
      >
        <Box mt={"96px"}>
          <Flex w={"40vw"} justifyContent={"space-between"}>
            {projects.map((project) => (
              <Box key={project.id}>
                <a rel={"noreferrer"} target={"_blank"} href={project.link}>
                  <Image src={project.image} />
                </a>
                <Heading
                  mt={"36px"}
                  fontWeight={"light"}
                  fontSize={"6xl"}
                  letterSpacing={"0.2em"}
                  color={"white"}
                >
                  {project.title}
                </Heading>
                <Text fontSize={"3xl"} letterSpacing={"0.2em"} color={"white"}>
                  {project.text}
                </Text>
              </Box>
            ))}
          </Flex>

          <Heading
            mt={"36px"}
            mb={"64px"}
            fontWeight={"light"}
            fontSize={"7xl"}
            letterSpacing={"0.2em"}
            color={"rgba(255, 255, 255, 0.3)"}
          >
            ON THE WEB
          </Heading>
        </Box>
      </Center>

      <Center
        w={"70vw"}
        bgColor={"rgba(149, 200, 216, 0.1)"}
        backdropFilter={"blur(12px)"}
        border={"2px solid #95C8D8"}
        borderRadius={"50px"}
        display={{ base: "block", xxl: "none" }}
      >
        <Box>
          <Heading
            mt={"50px"}
            fontWeight={"light"}
            fontSize={"5vw"}
            letterSpacing={"0.2em"}
            color={"rgba(255, 255, 255, 0.3)"}
          >
            ON THE WEB
          </Heading>

          <Box mb={"50px"} w={"30vw"}>
            {projects.map((project) => (
              <Box mt={"36px"} key={project.id}>
                <a rel={"noreferrer"} target={"_blank"} href={project.link}>
                  <Image src={project.image} />
                </a>
                <Heading
                  mt={"24px"}
                  fontWeight={"light"}
                  fontSize={"3vw"}
                  letterSpacing={"0.2em"}
                  color={"white"}
                >
                  {project.title}
                </Heading>
                <Text
                  fontSize={"1.5vw"}
                  letterSpacing={"0.2em"}
                  color={"white"}
                >
                  {project.text}
                </Text>
              </Box>
            ))}
          </Box>
        </Box>
      </Center>
    </Box>
  );
};

export default Showcase;
