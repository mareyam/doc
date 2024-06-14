"use client";
import React from "react";
import {
  HStack,
  Flex,
  Link,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";

const Navbar = () => {
  return (
    <Flex
      p="4"
      w="full"
      position="sticky"
      top="0"
      justifyContent="flex-end"
      color="blue.500"
      borderBottom="0.8px solid #2B3039"
      zIndex="2"
      bg={useColorModeValue("white", "#121539")}
    >
      <HStack position="relative" px="12">
        <Link
          as={NextLink}
          href="/"
          color={useColorModeValue("#121539", "RGBA(255, 255, 255, 0.92)")}
        >
          API Reference
        </Link>
      </HStack>
    </Flex>
  );
};

export default Navbar;
