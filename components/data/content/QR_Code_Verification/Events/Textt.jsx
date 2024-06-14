import React from "react";
import { Heading, Text, VStack, useColorModeValue } from "@chakra-ui/react";

const Events = () => {
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.200");

  return (
    <VStack textAlign="left" bgColor={bgColor} p="4" rounded="lg">
      <Heading fontSize="24" w="full">
        Events
      </Heading>
      <Text w="full" textAlign="left">
        There are two event listeners included in the collection, but they are
        currently empty:
        <Text as="ul" pl="8">
          <Text as="li">
            Prerequest Script: Executes before the request is sent.
          </Text>
          <Text as="li">Test Script: Executes after the request is sent.</Text>
        </Text>
      </Text>
    </VStack>
  );
};

export default Events;
