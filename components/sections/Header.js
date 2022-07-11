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
  useDisclosure,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

const navData = [
  {
    name: "About",
    id: "about",
    path: "",
  },
  {
    name: "Projects",
    id: "projects",
    path: "",
  },
  {
    name: "Content",
    id: "content",
    path: "",
  },
];

const Header = () => {
  const { isOpen: isMobileNavOpen, onToggle } = useDisclosure();

  return (
    <Box w={"full"} h={"5em"}>
      <Flex ml={"5em"} mr={"5em"} h={"5em"} align={"center"}>
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
            <Link key={navItem.id} href={navItem.path}>
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
          <Link key={"resume"} href={""}>
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
          </Link>
          <Link key={"github"} href={""}>
            <Button colorScheme={"whiteAlpha"} variant={"ghost"}>
              <Image
                src={"./images/github-icon.png"}
                alt={"porfolio's signature logo"}
              />
            </Button>
          </Link>
        </HStack>
        <Box display={{ base: "inline-block", lg: "none" }}>
          <Menu id="navbar-menu">
            <MenuButton
              as={IconButton}
              onClick={onToggle}
              icon={<HamburgerIcon color={"white"} />}
              colorScheme={"whiteAlpha"}
              variant={"outline"}
              aria-label={"Options"}
            />
            <MenuList>
              {navData.map((navItem) => (
                <Link key={navItem.id} href={navItem.path}>
                  <MenuItem>{navItem.name}</MenuItem>
                </Link>
              ))}
              <Link href={""}>
                <MenuItem>Resume</MenuItem>
              </Link>
              <Link href={""}>
                <MenuItem>Github</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
