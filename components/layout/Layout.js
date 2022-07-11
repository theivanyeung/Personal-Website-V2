import { Box } from "@chakra-ui/react";

const Layout = (props) => {
  return (
    <Box
      direction={"column"}
      alignItems={"center"}
      bgSize={"cover"}
      bgPosition={"center"}
      bgRepeat={"none"}
      bgAttachment={"fixed"}
      {...props}
    />
  );
};

export default Layout;
