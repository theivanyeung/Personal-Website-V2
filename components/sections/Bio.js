import { Box, Heading, Flex, Image, Text } from "@chakra-ui/react";

const timeline = [
  { id: "1", text: "2003 - Born in Queens, New York City (I Love NYC!)" },
  { id: "2", text: "2019 - Moved to Silicon Valley from North Carolina" },
  { id: "3", text: "2019 - Co-founded a hackathon, HexaHacks" },
  { id: "4", text: "2019 - Started his passion of development" },
  { id: "5", text: "2020 - Interned at an AI Company, Titan Acacia" },
  { id: "6", text: "2021 - Graduated from Cupertino High School" },
  {
    id: "7",
    text: "2022 - Started content creating based on my passion of piano, iPiano",
  },
  {
    id: "8",
    text: "2022 - Started and failed two startups, LangSwap and Prodicity",
  },
  { id: "9", text: "2022 - Started a third startup, Future Technologies" },
  { id: "10", text: "2022 - Started a podcast channel, Every Other Morning" },
];

const Bio = () => {
  return (
    <Box mt={"200px"} mb={"200px"}>
      <Heading
        mb={"50px"}
        fontWeight={"light"}
        fontSize={"7xl"}
        letterSpacing={"0.2em"}
        color={"rgba(255, 255, 255, 0.3)"}
      >
        Bio
      </Heading>

      <Flex w={"761px"} display={{ base: "none", lg: "flex" }}>
        <Box w={"113px"}>
          <Image src={"./images/timeline.png"} />
        </Box>
        <Box mt={"30px"} w={"648px"}>
          {timeline.map((data) => (
            <Text
              key={data.id}
              mb={"48px"}
              textAlign={"left"}
              fontSize={"2xl"}
              letterSpacing={"0.2em"}
              color={"white"}
            >
              {data.text}
            </Text>
          ))}
        </Box>
      </Flex>

      <Box w={"80vw"} display={{ base: "block", lg: "none" }}>
        {timeline.map((data) => (
          <Text
            key={data.id}
            mb={"48px"}
            align={"center"}
            textAlign={"left"}
            fontSize={"2.5vw"}
            letterSpacing={"0.2em"}
            color={"white"}
          >
            {data.text}
          </Text>
        ))}
      </Box>
    </Box>
  );
};

export default Bio;
