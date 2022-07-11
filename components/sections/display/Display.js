import { Box, Flex, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Display = (props) => {
  return (
    <Box mt={"100px"} mb={"100px"}>
      <Heading
        fontWeight={"light"}
        fontSize={"96px"}
        letterSpacing={"0.2em"}
        color={"rgba(255, 255, 255, 0.3)"}
      >
        {props.header}
      </Heading>
      <Flex
        mt={"25px"}
        display={"inline-block"}
        justifyContent={"space-between"}
      >
        {props.card.map((projectItem) => (
          <a
            key={projectItem.id}
            rel={"noreferrer"}
            target={"_blank"}
            href={projectItem.link}
          >
            <Box m={"80px"} as={"button"}>
              <motion.img
                whileHover={{
                  scale: 1.05,
                  transition: {
                    duration: 0.5,
                  },
                }}
                src={projectItem.image}
              />
            </Box>
          </a>
        ))}
      </Flex>
    </Box>
  );
};

export default Display;
