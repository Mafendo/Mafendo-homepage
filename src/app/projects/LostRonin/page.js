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

          <Text fontSize={"md"}> Lost Ronin</Text>
        </Flex>
        <Box width={"600px"}>
          <Text marginBottom={"20px"}>
            Lost Ronin a beat-'em-up game inspired by the Edo period. It explores a rich
            historical theme with unique visual designs and gameplay mechanics.
            This project gave me the chance to combine my interest in Japanese
            history with my passion for game development, focusing on creating
            fluid combat systems and an immersive atmosphere.
            <br />
            <br />
            you can try it{" "}
            <Link href="https://www.roblox.com/games/13874436663/Lost-Ronin-Beta" isExternal>
              HERE
            </Link>
          </Text>

          <Image
            src="/Images/Works/LostRoninScreen1.png"
            alt="Image of LostRonin project"
            width={500}
            height={300}
            marginBottom={"20px"}
          />
          <Image
            src="/Images/Works/LostRoninScreen2.png"
            alt="Image of LostRonin project"
            width={500}
            height={300}
            marginBottom={"20px"}
          />
           <Image
            src="/Images/Works/LostRoninScreen3.png"
            alt="Image of LostRonin project"
            width={500}
            height={300}
            marginBottom={"20px"}
          />

          <AspectRatio maxW="52vh" ratio={1}>
            <iframe
              title="video of the game"
              src="https://youtu.be/VdRWv_UKsSY"
              allowFullScreen
            />
          </AspectRatio>
        </Box>
      </Flex>
    </Box>
  );
}
