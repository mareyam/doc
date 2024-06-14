import React from "react";
import { Code, Heading, Text, VStack, useColorModeValue } from "@chakra-ui/react";

const QR_Code_Verification_Valid2 = () => {
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.200");

  return (
    <VStack
      textAlign="left"
      border={null}
      py="4"
      bgColor={bgColor}
      p="4"
      rounded="lg"
    >
       
      <Heading fontSize="24" w="full">
        QR Code Verification (Valid 2)
      </Heading>
      <Text w="full">
        Endpoint:
        <Code> POST /api/v1/verification/qr_code_verification</Code>
      </Text>
      <Text w="full">
        Description: Verify another valid QR code. <br />
        Headers: <br />
        <Code>x-api-key: asdasuhdunninasdio</Code>
      </Text>
    </VStack>
  );
};

export default QR_Code_Verification_Valid2;
