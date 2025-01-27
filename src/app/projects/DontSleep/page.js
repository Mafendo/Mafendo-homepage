"use client";
import {
  Box,
  position,
  Text,
  useColorModeValue,
  Spinner,
  Flex,
  Avatar,
  Button,
  Icon,
  Container,
  Heading,
  SimpleGrid,
  Divider,
  Link,
  Image,
  AspectRatio,
} from "@chakra-ui/react";
import Model from "../../components/Model";
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function Projects() {
  const BgColor = useColorModeValue("#f0e7db", "#202023");
  return (
    <Box width={"100%"} height={"200vh"}>
      <Flex justifyContent={"center"}>
        <Model color={BgColor} />
      </Flex>
      <Flex
        justifyContent={"center"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Flex marginBottom={"20px"}>
          <Link href="../projects">Projects</Link>

          <span>
            {" "}
            <Icon as={ChevronRightIcon}> </Icon>
          </span>

          <Text fontSize={"md"}> Don't Sleep</Text>
        </Flex>
        <Box maxW={"600px"}>
          <Text
            marginBottom={"20px"}
           
            
          >
            Our high school project entails the creation of a platform and
            puzzle-based video game infused with elements of horror, titled
            "Don't Sleep." Inspired by classics like "Limbo" and "Inside,"
            <br />
            <br />
            you can try it{" "}
            <Link href="https://mafendo.itch.io/dont-sleep" isExternal>
              HERE
            </Link>
          </Text>

          <Image
            src="/Images/Works/imagscreen1.png"
            alt="Image of DontSleep project"
            width={500}
            height={300}
            marginBottom={"20px"}
          />
          <Image
            src="/Images/Works/imagscreen2.png"
            alt="Image of DontSleep project"
            width={500}
            height={300}
            marginBottom={"20px"}
          />

          <AspectRatio maxW="52vh" ratio={1}>
            <iframe
              title="naruto"
              src="https://www.youtube.com/watch?v=1A2E1rFj3x8"
              allowFullScreen
            />
          </AspectRatio>
        </Box>
      </Flex>
    </Box>
  );
}
