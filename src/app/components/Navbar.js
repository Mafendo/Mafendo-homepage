"use client";

import {
  Box,
  Flex,
  Link,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import { HamburgerIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import CubeIcon from "./CubeIcon";
import { FaGithub } from "react-icons/fa";
const handleClick = () => {
  window.location.href = '/';
};
const Navbar = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Flex
      px={4}
      position={"fixed"}
      w={"100%"}
      zIndex={10}
      backdropFilter="blur(10px)"
      justifyContent={"center"}
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box
        onClick={handleClick}
          _hover={{
            cursor: "pointer",
            "&:hover > svg": {
              transform: "rotate(30deg)",
              transition: "transform 200ms ease",
            },
          }}
          px={4}
          py={2}
        >
          <CubeIcon
            boxSize={{ base: "30px", md: "40px", lg: "50px" }}
            m={1}
            mx={2}
          />
          Marwan Khalil
        </Box>

        <Flex alignItems={"center"} display={{ base: "none", md: "flex" }}>
          <Link as={NextLink} href="/projects" p={2}>
            Projects
          </Link>

          
          
          <Link as={NextLink} href="https://github.com/Mafendo/Mafendo-homepage" p={2}>
            <Flex align={"center"}>
              <Box as={FaGithub} w={4} h={4} mr={2} />
              <Box>Source</Box>
            </Flex>
          </Link>
        </Flex>
        <Flex p={"0px"} mx={10}>
          <IconButton
            aria-label="Toggle theme"
            onClick={toggleColorMode}
            mx={2}
            size="lg"
            p={0}
            colorScheme={useColorModeValue("purple", "orange")}
            icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          ></IconButton>

          <Menu>
            <MenuButton
              as={IconButton}
              variant="outline"
              display={{ base: "flex", md: "none" }}
              aria-label="Open Menu"
              icon={<HamburgerIcon />}
              size="lg"
            />
            <MenuList display={{ base: "block", md: "none" }}>
              <MenuItem as={NextLink} href="/projects">
                Projects
              </MenuItem>

          
              <MenuItem as={NextLink} href="https://github.com/Mafendo/Mafendo-homepage">
                Source
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
