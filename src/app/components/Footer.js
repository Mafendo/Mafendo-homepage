"use client";
import React from "react";
import { Box, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      as="footer"
      p={4}
      textAlign="center"
      width={"100%"}
      position="relative"
      bottom={0}
    >
      <Text fontSize="sm">
        &copy; {new Date().getFullYear()} Marwan Khalil. All Rights Reserved.
        Made with ♥.{" "}
      </Text>
    </Box>
  );
}
