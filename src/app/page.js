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
} from "@chakra-ui/react";

import React from "react";

import Model from "./components/Model";

import { ChevronRightIcon } from "@chakra-ui/icons";
import { BioSection, BioYear } from "./components/Bio.js";
export default function Home() {
  const BgColor = useColorModeValue("#f0e7db", "#202023");
  return (
    <Box width={"100%"} height={"1600px"}>
      <Flex justifyContent={"center"}>
        <Model color={BgColor} />
      </Flex>

      <Flex justifyContent={"center"}>
        <Box
          bg={useColorModeValue("#ebd3b4  ", "#19191c")}
          w={"600px"}
          h={"50px"}
          textAlign={"Center"}
          p={"6px"}
        >
          <Text fontSize="xl">Welcome to my portfolio page.</Text>

          <Flex margin={"20px"}>
            <Flex flexDir={"column"}>
              <Text
                as={"b"}
                fontSize="4xl"
                margin={"10px"}
                alignItems={"center"}
              >
                Marwan Khalil
              </Text>
              <Text fontSize="md" wordBreak={"keep-all"}>
                {" "}
                Digital Craftsman ( Innovator/Developer/Designer ){" "}
              </Text>
            </Flex>
            <Avatar
              marginLeft={"30px"}
              border="3px solid white"
              size="xl"
              name="Marwan Khalil"
              src="/Images/Works/pfp.png"
            />
          </Flex>

          <Box textAlign={"left"}>
            <Text
              fontSize={"lg"}
              as={"b"}
              textDecoration={"underline"}
              textDecorationColor={"#525252"}
              textDecorationThickness={"4px"}
              textUnderlineOffset={"6px"}
            >
              About me
            </Text>
            <Text m={"10px"}>
              My name is Marwan, and I’m a curious person who’s always striving
              to learn new things and become the best version of myself. I have
              a strong interest in problem-solving and enjoy tackling complex
              challenges. In my free time, I like going to the gym and
              experimenting with new recipes in the kitchen – it helps me stay
              active and creative. I’m also passionate about game development
              and love building plastic models, which allows me to combine my
              attention to detail with my creative side.
            </Text>
          </Box>
          <Button m={"10px"} 
          as={"a"}
          href="/projects"
          >
            {" "}
            My portfolio <Icon as={ChevronRightIcon}></Icon>
          </Button>

          <Box textAlign={"left"} marginBottom={"10px"}>
            <Text
              fontSize={"lg"}
              as={"b"}
              textDecoration={"underline"}
              textDecorationColor={"#525252"}
              textDecorationThickness={"4px"}
              textUnderlineOffset={"6px"}
            >
              Bio
            </Text>

            <BioSection>
              <BioYear>2005</BioYear>
              Born in Iraq
            </BioSection>
            <BioSection>
              <BioYear>2024 to present</BioYear>I am studying Computer
              Engineering at Högskolan i Gävle.
            </BioSection>
          </Box>

          <Box textAlign={"left"} marginBottom={"10px"}>
            <Text
              fontSize={"lg"}
              as={"b"}
              textDecoration={"underline"}
              textDecorationColor={"#525252"}
              textDecorationThickness={"4px"}
              textUnderlineOffset={"6px"}
            >
              I ♥
            </Text>
            <Text>
              {" "}
              Programing, WebDevelopment, GameDevelopment, Building plastic
              models, learning new things, Math{" "}
            </Text>

            <Text > <br/> You can reach me at <Box  as={"b"}> marwan.khalil.basim@gmail.com.</Box> </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
