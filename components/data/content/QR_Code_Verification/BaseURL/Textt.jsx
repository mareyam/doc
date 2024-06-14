import React from "react";
import {
  Code,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

const Textt = () => {
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.200");

  return (
    <VStack textAlign="left" bgColor={bgColor} p="4" rounded="lg">
      <Heading fontSize="24" w="full">
        Base URL
      </Heading>
      <Text w="full">
        The base URL for all endpoints is: <br />
        <Code mt="4"> arduino</Code>
      </Text>
    </VStack>
  );
};

export default Textt;
