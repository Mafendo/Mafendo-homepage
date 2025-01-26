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

          <Text fontSize={"md"}> WorkOutTrack</Text>
        </Flex>
        <Box width={"600px"}>
          <Text marginBottom={"20px"}>
            WorkOutTrack is a simple app that helps you track your workout
                sets and weights, then suggests your next goal based on your
                input.
            <br />
            <br />
            you can try it{" "}
            <Link href="https://mafendo.github.io/WorkOutTrack/index.html" isExternal>
              HERE
            </Link>
          </Text>

          <Image
            src="/Images/Works/WorkOutTrack.png"
            alt="Image of LostRonin project"
            width={500}
            height={300}
            marginBottom={"20px"}
          />
          <Image
            src="/Images/Works/WorkOutTrack2.png"
            alt="Image of LostRonin project"
            width={500}
            height={300}
            marginBottom={"20px"}
          />
           <Image
            src="/Images/Works/WorkOutTrack3.png"
            alt="Image of LostRonin project"
            width={500}
            height={300}
            marginBottom={"20px"}
          />

        </Box>
      </Flex>
    </Box>
  );
}
