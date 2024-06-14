import {
  GridItem,
  useBreakpointValue,
  useClipboard,
  useColorMode,
  Code,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  Box,
  IconButton,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { MdDone, MdOutlineCopyAll } from "react-icons/md";

const Error_Handling = () => {
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <>
      {isDesktop ? (
        <>
          <GridItem h="100%" pos="sticky" top="20" w={{ base: "", xl: "40vw" }}>
            <Details />
          </GridItem>
          <GridItem w={{ base: "", xl: "40vw" }}></GridItem>
        </>
      ) : (
        <>
          <GridItem w="100%">
            <Details />
          </GridItem>
        </>
      )}
    </>
  );
};

export default Error_Handling;

const Details = () => {
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.200");

  return (
    <VStack textAlign="left" bgColor={bgColor} p="4" rounded="lg">
      <Heading fontSize="24" w="full">
        Error Handling
      </Heading>
      <Text w="full">
        Error Handling Common Error Responses 401 Unauthorized: This error
        indicates that the access token provided is invalid or missing. Ensure
        that the Authorization header is correctly set with a valid token. This
        documentation should help you to utilize the Philippines verification
        API endpoints effectively. If you encounter any issues or need further
        assistance, please refer to the API support team.
      </Text>
    </VStack>
  );
};
