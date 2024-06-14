import React from "react";
import {
  Code,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

const Variables = () => {
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.200");

  return (
    <VStack textAlign="left" py="4" bgColor={bgColor} p="4" rounded="lg">
      <Heading fontSize="24" w="full">
        Variables
      </Heading>
      <Text w="full">
        The following variable is used in the request URLs: <br />
        <Code>{`{{ BaseURL }}: http://idmeta-api.test`}</Code>
      </Text>
    </VStack>
  );
};

export default Variables;
