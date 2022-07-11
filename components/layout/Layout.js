import React from "react";
import { useRouter } from "next/router";
import { Box } from "@chakra-ui/react";

import Header from "../sections/Header";
import Copyright from "../sections/Copyright";

const Layout = ({ children, router }) => {
  const route = useRouter();

  const setBackgroundImage = () => {
    if (route.asPath === "/") {
      return "./images/about-background.png";
    } else if (route.asPath === "/project") {
      return "./images/project-background.png";
    } else if (route.asPath === "/content") {
      return "./images/content-background.png";
    }
  };

  return (
    <Box
      direction={"column"}
      alignItems={"center"}
      bgSize={"cover"}
      bgPosition={"center"}
      bgRepeat={"none"}
      bgAttachment={"fixed"}
      bgImage={`url('${setBackgroundImage()}')`}
    >
      <Header path={router.asPath} />
      {children}
      <Copyright />
    </Box>
  );
};

export default Layout;
