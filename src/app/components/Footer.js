"use client";
import React from 'react';
import { Box, useColorModeValue, Text } from "@chakra-ui/react";

export default function Footer() {


  return (
    <Box
      as="footer"
      p={4}
      textAlign="center"
      width={"100%"}
      height={"auto"}
   
    >
      <Text fontSize="sm">
      &copy; {new Date().getFullYear()} Marwan Khalil. All Rights Reserved. Made with ♥.{" "}
      </Text>
    </Box>
  );
}