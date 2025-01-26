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
} from "@chakra-ui/react";
import Model from "../components/Model";
import { WorkGridItem } from "../components/grid-item";
import Section from "../components/section";

import dontSleepPng from "/public/Images/Works/dontSleepPng.png";
import LostRoninPng from "/public/Images/Works/LostRoningIcon.png";
import WorkOutTrackPng from "/public/Images/Works/WorkOutTrack.png";

export default function Projects() {
  const BgColor = useColorModeValue("#f0e7db", "#202023");
  return (
    <Box width={"100%"} height={"auto"}>
      <Flex justifyContent={"center"}>
        <Model color={BgColor} />
      </Flex>

      <Flex justifyContent={"center"}>
        <Box>
          <Text
            fontSize={"lg"}
            as={"b"}
            textDecoration={"underline"}
            textDecorationColor={"#525252"}
            textDecorationThickness={"4px"}
            textUnderlineOffset={"6px"}
            marginBottom={"20px"}
          >
            works
          </Text>
          <SimpleGrid columns={[1, 1, 2]} margin={"10px"} gap={6}>
            <Section>
              <WorkGridItem
                id="DontSleep"
                title="Don't Sleep"
                thumbnail={dontSleepPng}
              >
                Our high school project entails the creation of a platform and
                puzzle-based video game infused with elements of horror, titled
                "Don't Sleep." Inspired by classics like "Limbo" and "Inside ,"
              </WorkGridItem>
            </Section>
            <Section>
              <WorkGridItem
                id="LostRonin"
                title="Lost Ronin"
                thumbnail={LostRoninPng}
              >
                A beat-'em-up game inspired by the Edo period.
              </WorkGridItem>
            </Section>
            <Section>
              <WorkGridItem
                id="WorkOutTrack"
                title="WorkOutTrack"
                thumbnail={WorkOutTrackPng}
              >
                WorkOutTrack is a simple app that helps you track your workout
                sets and weights, then suggests your next goal based on your
                input.
              </WorkGridItem>
            </Section>
          </SimpleGrid>
        </Box>
      </Flex>
    </Box>
  );
}
