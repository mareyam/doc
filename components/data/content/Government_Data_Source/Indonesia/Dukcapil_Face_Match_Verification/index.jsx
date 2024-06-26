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
import { atomOneLight } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import stackoverflowLight from "react-syntax-highlighter/dist/cjs/styles/hljs/stackoverflow-light";

const Dukcapil_Face_Match_Verification = () => {
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

export default Dukcapil_Face_Match_Verification;

const Details = () => {
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.200");
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <VStack textAlign="left" bgColor={bgColor} p="4" rounded="lg">
      <Heading fontSize="24" w="full">
        Dukcapil Face Match Verification
      </Heading>
      <Text w="full">
        Endpoint: &nbsp;
        <Code>
          {isDesktop
            ? ` POST /v1/verification/philippines/dukcapilfacematch`
            : ` POST /v1/verification/philippines/   dukcapilfacematch`}
        </Code>
        &nbsp;
      </Text>
    </VStack>
  );
};

const Example = () => {
  const jsonCode = `{
This request uses form-data to send the following parameters:

date_of_birth: 1999-12-31
name: String
nik: 317
selfie_image: A file with content type image/jpeg.
Example Form-data:

vbnet
 
date_of_birth: 1999-12-31
name: String
nik: 317
selfie_image: (file upload)
  }`;

  const response = `{
No response example is provided in the collection.
Example cURL:

bash
 
curl -X 'POST' \
  '{{baseUrl}}/v1/verification/dukcapilfacematch' \
  -H 'accept: application/json' \
  -H 'Authorization: {{accessToken}}' \
  -F 'date_of_birth=1999-12-31' \
  -F 'name=String' \
  -F 'nik=317' \
  -F 'selfie_image=@/path/to/your/file.jpg;type=image/jpeg'
  }`;

  const Pjsondata = `{
  $url = '{{baseUrl}}/v1/verification/dukcapilfacematch';
$accessToken = 'your_access_token';
$filePath = '/path/to/your/file.jpg';

$data = [
    'date_of_birth' => '1999-12-31',
    'name' => 'String',
    'nik' => '317',
    'selfie_image' => new CURLFile($filePath, 'image/jpeg', 'selfie_image')
];

$headers = [
    'Authorization: ' . $accessToken,
    'Accept: application/json'
];
}`;

  const Presponse = `{
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
curl_close($ch);

echo $response;
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
      px="4"
      alignItems="flex-start"
      pos="relative"
      bgColor={bgColor}
      borderRadius="lg"
    >
      <Code mt="6">Request:</Code>

      <Tabs>
        <TabList>
          <Tab>CURL</Tab>
          <Tab>PHP</Tab>
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
              {Pjsondata}
            </SyntaxHighlighter>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Code w="fit-content">Responses:</Code>

      <Tabs>
        <TabList>
          <Tab>CURL</Tab>
          <Tab>PHP</Tab>
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
