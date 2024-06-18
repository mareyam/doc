import { GridItem, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
const Compliance_Verification = () => {
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

export default Compliance_Verification;

import {
  Code,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

const Details = () => {
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.200");

  return (
    <VStack textAlign="left" bgColor={bgColor} p="4" rounded="lg">
      <Heading fontSize="24" w="full">
        Compliance Verification
      </Heading>
      <Text>
        This document outlines how to use the API endpoints available for
        Indonesia verification services. Each endpoint allows verification of
        different types of documents. The general setup and request structure
        are explained below, followed by specific endpoint instructions.
        <br />
        <Text fontWeight="600" fontSize="16">
          Common Setup:
        </Text>
        Base URL
        <br />
        All API requests should be made to the following base URL:
        <br />
        &nbsp;
        <Code>{`b2b-dev.idmetagroup.com/api/`}</Code>&nbsp;
        <br />
        <Text fontWeight="600" fontSize="16">
          Authentication
        </Text>
        All requests require an Authorization header with a valid access token:
        <br />
        css
        <br />
        <br />
        Authorization: &nbsp;
        <Code>{`{{ accessToken }}`}</Code>&nbsp;
        <br /> Headers
        <br />
        The following headers must be included in all requests:
        <br />
        makefile
        <br />
        <br /> accept: application/json
        <br /> Content-Type: application/json
        <br />
        Authorization: &nbsp;
        <Code>{`{{ accessToken }}`}</Code>&nbsp;
      </Text>
    </VStack>
  );
};
