import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  List,
  ListItem,
  Link,
  Text,
} from "@chakra-ui/react";

import {
  INSTAGRAM_LINK,
  FACEBOOK_LINK,
  TWITTER_LINK,
  LINKEDIN_LINK,
  YOUTUBE_LINK,
} from "../constants";

const social = [
  {
    id: "discord",
    title: "Ivan",
    image: "./images/discord-icon.png",
    link: "https://discord.com/",
  },
  {
    id: "instagram",
    title: "@theivanyeung",
    image: "./images/instagram-icon.png",
    link: INSTAGRAM_LINK,
  },
  {
    id: "facebook",
    title: "Ivan Yeung",
    image: "./images/facebook-icon.png",
    link: FACEBOOK_LINK,
  },
  {
    id: "twitter",
    title: "@theivanyeung",
    image: "./images/twitter-icon.png",
    link: TWITTER_LINK,
  },
  {
    id: "linkedin",
    title: "Ivan Yeung",
    image: "./images/linkedin-icon.png",
    link: LINKEDIN_LINK,
  },
  {
    id: "youtube",
    title: "iPiano",
    image: "./images/youtube-icon.png",
    link: YOUTUBE_LINK,
  },
];

const Socials = () => {
  return (
    <Box mt={"50px"} mb={"50px"}>
      <Heading
        fontWeight={"light"}
        fontSize={"7xl"}
        letterSpacing={"0.2em"}
        color={"rgba(255, 255, 255, 0.3)"}
      >
        Socials
      </Heading>
      <Flex
        mt={"25px"}
        display={"inline-block"}
        justifyContent={"space-between"}
      >
        {social.map((socialItem) => (
          <Link href={socialItem.link}>
            <Button
              w={"200px"}
              mt={"25px"}
              mb={"25px"}
              mr={"25px"}
              ml={"25px"}
              variant={"outline"}
              colorScheme={"whiteAlpha"}
              leftIcon={<Image src={socialItem.image} />}
            >
              <Text
                fontWeight={"light"}
                fontSize={"md"}
                letterSpacing={"0.15em"}
                color={"white"}
              >
                {socialItem.title}
              </Text>
            </Button>
          </Link>
        ))}
      </Flex>
    </Box>
  );
};

export default Socials;
