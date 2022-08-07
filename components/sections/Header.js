import Link from "next/link";
import {
  Box,
  Flex,
  Image,
  HStack,
  Button,
  Text,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const navData = [
  {
    name: "About",
    id: "about",
    path: "/",
  },
  {
    name: "Projects",
    id: "projects",
    path: "/project",
  },
  {
    name: "Content",
    id: "content",
    path: "/content",
  },
];

const Header = (props) => {
  const { path } = props;

  return (
    <Box w={"full"} h={"5em"}>
      <Flex ml={"5em"} mr={"5em"} h={"7em"} align={"center"}>
        <Image
          w={"194px"}
          h={"47px"}
          src={"./images/logo.png"}
          alt={"porfolio's signature logo"}
        />
        <Spacer />
        <HStack
          as={"nav"}
          w={"40vw"}
          ml={"5vw"}
          mr={"5vw"}
          align={"center"}
          justifyContent={"space-between"}
          display={{ base: "none", lg: "flex" }}
        >
          {navData.map((navItem) => (
            <Link key={navItem.id} href={navItem.path} path={path}>
              <Button colorScheme={"whiteAlpha"} variant={"ghost"}>
                <Text
                  letterSpacing={"5px"}
                  fontWeight={"normal"}
                  fontSize={"2xl"}
                  color={"white"}
                >
                  {navItem.name}
                </Text>
              </Button>
            </Link>
          ))}
        </HStack>
        <Spacer />
        <HStack
          as={"nav"}
          align={"center"}
          display={{ base: "none", lg: "flex" }}
        >
          <a
            rel={"noreferrer"}
            target={"_blank"}
            href={"./files/resume.pdf"}
            path={path}
          >
            <Button colorScheme={"whiteAlpha"} variant={"outline"}>
              <Text
                letterSpacing={"5px"}
                fontWeight={"normal"}
                fontSize={"2xl"}
                color={"white"}
              >
                Resume
              </Text>
            </Button>
          </a>
          <a
            rel={"noreferrer"}
            target={"_blank"}
            href={"https://github.com/theivanyeung"}
            path={path}
          >
            <Button colorScheme={"whiteAlpha"} variant={"ghost"}>
              <Image
                src={"./images/github-icon.png"}
                alt={"porfolio's signature logo"}
              />
            </Button>
          </a>
        </HStack>
        <Box display={{ base: "inline-block", lg: "none" }}>
          <Menu id="navbar-menu">
            <MenuButton
              as={IconButton}
              icon={<HamburgerIcon color={"white"} />}
              colorScheme={"whiteAlpha"}
              variant={"outline"}
              aria-label={"Options"}
            />
            <MenuList>
              {navData.map((navItem) => (
                <Link key={navItem.id} href={navItem.path} path={path}>
                  <MenuItem>{navItem.name}</MenuItem>
                </Link>
              ))}
              <a
                rel={"noreferrer"}
                target={"_blank"}
                href={"./files/resume.pdf"}
                path={path}
              >
                <MenuItem>Resume</MenuItem>
              </a>
              <a
                rel={"noreferrer"}
                target={"_blank"}
                href={"https://github.com/theivanyeung"}
                path={path}
              >
                <MenuItem>Github</MenuItem>
              </a>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
