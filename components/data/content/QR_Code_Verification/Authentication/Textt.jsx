import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

const Textt = () => {
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.200");

  return (
    <VStack gap="4" bgColor={bgColor} p="4" rounded="lg">
      <Heading fontSize="24" w="full">
        Authentication
      </Heading>
      <Text w="full">
        This API uses Basic Authentication. Include the following credentials in
        your requests:
      </Text>
      <Box as="ul" pl="12" w="full">
        <Text as="li">
          <Text as="span" fontWeight="bold">
            Username:
          </Text>
          tosefezo@mailinator.com
        </Text>
        <Text as="li">
          <Text as="span" fontWeight="bold">
            Password:
          </Text>
          Pa$$w0rd!
        </Text>
      </Box>
      <Text w="full">
        Additionally, the x-api-key header must be included with each request.
      </Text>
    </VStack>
  );
};

export default Textt;
