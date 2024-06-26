import React from "react";
import { Heading, Text, VStack, useColorModeValue } from "@chakra-ui/react";

const QR_Code_Verification = () => {
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.200");

  return (
    <VStack textAlign="left" bgColor={bgColor} p="4" rounded="lg">
      <Heading fontSize="24" w="full">
        QR Code Verification
      </Heading>
      <Text>
        This API allows for the verification of QR codes issued by the PSA
        (Philippine Statistics Authority). Below are the details of the
        available endpoints.
      </Text>
    </VStack>
  );
};

export default QR_Code_Verification;
