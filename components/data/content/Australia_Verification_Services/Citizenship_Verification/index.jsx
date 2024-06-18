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
  Tooltip,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { MdDone, MdOutlineCopyAll } from "react-icons/md";
import { atomOneLight } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const Citizenship_Verification = () => {
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <>
      {isDesktop ? (
        <>
          <GridItem h="100%" pos="sticky" top="20" w={{ base: "", xl: "40vw" }}>
            <Details />
          </GridItem>
          <GridItem w={{ base: "", xl: "40vw" }}>
            <Example />
          </GridItem>
        </>
      ) : (
        <>
          <GridItem w="100%">
            <Details />
            <Example />
          </GridItem>
        </>
      )}
    </>
  );
};

export default Citizenship_Verification;

const Details = () => {
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.200");
  const [currentCode, setCurrentCode] = useState("");
  const { onCopy, hasCopied } = useClipboard(currentCode);
  const isDesktop = useBreakpointValue({ base: false, md: true });

  const handleCopy = (code) => {
    setCurrentCode(code);
    onCopy();
  };

  return (
    <VStack textAlign="left" bgColor={bgColor} p="4" rounded="lg">
      <Heading fontSize="24" w="full">
        Citizenship Verification
      </Heading>
      <Text w="full">
        Endpoint: &nbsp;
        <Tooltip label={hasCopied ? "copied" : "Click to copy"}>
          <Code
            whiteSpace="pre-wrap"
            wordWrap="break-word"
            overflowWrap="break-word"
            cursor="pointer"
            onClick={() =>
              handleCopy(
                `POST /v1/verification/australia/certificate/citizenship`
              )
            }
          >
            {isDesktop
              ? `POST /v1/verification/australia/certificate/citizenship`
              : `POST /v1/verification/australia/   certificate/citizenship`}
          </Code>
        </Tooltip>
        &nbsp;
      </Text>
    </VStack>
  );
};

const Example = () => {
  const jsonCode = `
{
  "Header": {
    "accept": "application/json",
    "Authorization": "{{accessToken}}"
  },
  "Body": {
    "form-data": {
      "image1": "@/path/to/your/image1.jpg;type=image/jpeg",
      "image2": "@/path/to/your/image2.png;type=image/png"
    }
  }
}`;

  const response = `{
{
  "200 OK": "Verification successful.",
  "401 Unauthorized": "Invalid or missing access token."
}
Example cURL:
bash 
curl -X 'POST' \
  '{{baseUrl}}/v1/verification/australia/certificate/citizenship' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: {{accessToken}}' \
  -d '{
        "dob": "01-02-1987",
        "acquisition_date": "2013-06-27",
        "family_name": "Walker",
        "given_name": "Sarah",
        "stock_number": "75213019409"
     }`;

  const { onCopy, hasCopied } = useClipboard(JSON.stringify(jsonCode, null, 2));
  const [showTransition, setShowTransition] = useState(false);
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.200");
  const { colorMode } = useColorMode();

  useEffect(() => {
    setShowTransition(hasCopied);
  }, [hasCopied]);

  return (
    <VStack pos="relative" bgColor={bgColor} borderRadius="lg">
      <Code mt="6">Request:</Code>
      <SyntaxHighlighter
        customStyle={{
          height: "100%",
          width: "100%",
          backgroundColor:
            colorMode == "dark" ? "RGBA(0, 0, 0, 0.04)" : "#F7FAFC",
        }}
        language="applescript"
        style={colorMode == "dark" ? okaidia : atomOneLight}
        wrapLongLines
      >
        {jsonCode}
      </SyntaxHighlighter>
      <Code>Responses:</Code>
      <SyntaxHighlighter
        customStyle={{
          height: "100%",
          width: "100%",
          backgroundColor:
            colorMode == "dark" ? "RGBA(0, 0, 0, 0.04)" : "#F7FAFC",
        }}
        language="applescript"
        style={colorMode == "dark" ? okaidia : atomOneLight}
        wrapLongLines
      >
        {response}
      </SyntaxHighlighter>
      <Box pos="absolute" top="4" right={{ base: "-4", xl: "2", "2xl": "2" }}>
        <IconButton
          onClick={onCopy}
          aria-label={hasCopied ? "Copied" : "Copy"}
          icon={hasCopied ? <MdDone /> : <MdOutlineCopyAll />}
          bgColor="transparent"
          transition={showTransition ? "all 0.5s ease" : "none"}
        />
      </Box>
    </VStack>
  );
};
