import { Box } from "@chakra-ui/react";

const Copyright = () => {
  return (
    <Box
      mt={"95px"}
      h={"48px"}
      align={"center"}
      fontSize={"md"}
      letterSpacing={"0.2em"}
      color={"rgba(255, 255, 255, 0.2)"}
    >
      &copy; {new Date().getFullYear()} Ivan Yeung. All Rights Reserved.
    </Box>
  );
};

export default Copyright;
