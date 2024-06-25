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
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { MdDone, MdOutlineCopyAll } from "react-icons/md";
import { atomOneLight } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { stackoverflowLight } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const AML_Verification = () => {
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

export default AML_Verification;

const Details = () => {
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.200");

  return (
    <VStack textAlign="left" bgColor={bgColor} p="4" rounded="lg">
      <Heading fontSize="24" w="full">
        AML Verification
      </Heading>
      <Text w="full">
        Endpoint: &nbsp;
        <Code>{` POST /v1/verification/aml`}</Code>
        &nbsp;
      </Text>
    </VStack>
  );
};

const Example = () => {
  const jsonCode = `{
{
  "countries": [
    "ID",
    "MY"
  ],
  "datasets": [
    "SAN"
  ],
  "dob": "1999-12-31",
  "name": "String"
}

  }`;

  const response = `{
  200 OK:
{
  "status": true,
  "message": "OK",
  "result": {
      "results": {
          "matchCount": 0,
          "matches": []
      }
  }
}
401 Unauthorized: Invalid or missing access token.
Example cURL:

bash curl -X 'POST' \
  '{{baseUrl}}/v1/verification/aml' \
  -H 'Accept: application/json' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: {{accessToken}}' \
  -d '{
    "countries": [
      "ID",
      "MY"
    ],
    "datasets": [
      "SAN"
    ],
    "dob": "1999-12-31",
    "name": "String"
  }'
  }`;

  const PjsonCode = `{
  "countries": [
    "ID",
    "MY"
  ],
  "datasets": [
    "SAN"
  ],
  "dob": "1999-12-31",
  "name": "String"
}`;

  const Presponse = `{
  "200 OK": {
    "status": true,
    "message": "OK",
    "result": {
      "results": {
        "matchCount": 0,
        "matches": []
      }
    }
  },
  "401 Unauthorized": "Invalid or missing access token.",
  "Example cURL": "bash curl -X \'POST\' \\\n  \'{{baseUrl}}/v1/verification/aml\' \\\n  -H \'Accept: application/json\' \\\n  -H \'Content-Type: application/json\' \\\n  -H \'Authorization: {{accessToken}}\' \\\n  -d \'"countries": [\n    "ID",\n    "MY"\n  ],\n  "datasets": [\n    "SAN"\n  ],\n  "dob": "1999-12-31",\n  "name": "String"\'"
}`;

  const { onCopy, hasCopied } = useClipboard(JSON.stringify(jsonCode, null, 2));
  const [showTransition, setShowTransition] = useState(false);
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.200");
  const { colorMode } = useColorMode();

  useEffect(() => {
    setShowTransition(hasCopied);
  }, [hasCopied]);

  return (
    <VStack
      w="full"
      alignItems="left"
      pos="relative"
      bgColor={bgColor}
      borderRadius="lg"
    >
      <Code w="24" mt="6">
        Request:
      </Code>
      <Tabs>
        <TabList>
          <Tab>PHP</Tab>
          <Tab>curl</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
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
          </TabPanel>
          <TabPanel>
            <SyntaxHighlighter
              customStyle={{
                height: "100%",
                width: "100%",
                backgroundColor:
                  colorMode == "dark" ? "RGBA(0, 0, 0, 0.04)" : "#F7FAFC",
                border: "none",
                boxShadow: "none",
              }}
              language="applescript"
              style={colorMode == "dark" ? okaidia : stackoverflowLight}
              wrapLongLines
            >
              {PjsonCode}
            </SyntaxHighlighter>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Code w="24">Responses:</Code>

      <Tabs>
        <TabList>
          <Tab>PHP</Tab>
          <Tab>curl</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
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
          </TabPanel>
          <TabPanel>
            <SyntaxHighlighter
              customStyle={{
                height: "100%",
                width: "100%",
                backgroundColor:
                  colorMode == "dark" ? "RGBA(0, 0, 0, 0.04)" : "#F7FAFC",
                border: "none",
                boxShadow: "none",
              }}
              language="applescript"
              style={colorMode == "dark" ? okaidia : stackoverflowLight}
              wrapLongLines
            >
              {Presponse}
            </SyntaxHighlighter>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Box pos="absolute" top="4" right={{ base: "2", xl: "2", "2xl": "2" }}>
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
