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

const Marriage_Certificate_Verification = () => {
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

export default Marriage_Certificate_Verification;

const Details = () => {
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.200");
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <VStack textAlign="left" bgColor={bgColor} p="4" rounded="lg">
      <Heading fontSize="24" w="full">
        Marriage Certificate Verification
      </Heading>
      <Text w="full">
        Endpoint: &nbsp;
        <Code>
          {isDesktop
            ? `POST /v1/verification/australia/certificate/marriage`
            : `POST /v1/verification/australia/certificate/    marriage`}
        </Code>
        &nbsp;
      </Text>
    </VStack>
  );
};

const Example = () => {
  const jsonCode = `{
Header:
{
  "accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": "{{accessToken}}"
}
Body (raw JSON):
{
  "doe": "12-03-1990",
  "bride_family_name": "famit",
  "bride_given_name": "Pillow",
  "groom_family_name": "werwe",
  "groom_given_name": "werws",
  "registration_state": "QLD",
  "registration_number": "55421210",
  "registration_date": "1990-02-12",
  "certificate_number": "23324",
  "registration_year": "2012",
  "date_printed": "2034-03-23"
}
  }`;

  const response = `{
200 OK: Verification successful.
401 Unauthorized: Invalid or missing access token.
Example cURL:

bash
 
curl -X 'POST' \
  '{{baseUrl}}/v1/verification/australia/certificate/marriage' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: {{accessToken}}' \
  -d '{
        "doe": "12-03-1990",
        "bride_family_name": "famit",
        "bride_given_name": "Pillow",
        "groom_family_name": "werwe",
        "groom_given_name": "werws",
        "registration_state": "QLD",
        "registration_number": "55421210",
        "registration_date": "1990-02-12",
        "certificate_number": "23324",
        "registration_year": "2012",
        "date_printed": "2034-03-23"
      }'
  }`;
   const Pjsondata = `{
   $url = '{{baseUrl}}/v1/verification/australia/certificate/marriage';
$accessToken = 'your_access_token';

$data = [
    'doe' => '12-03-1990',
    'bride_family_name' => 'famit',
    'bride_given_name' => 'Pillow',
    'groom_family_name' => 'werwe',
    'groom_given_name' => 'werws',
    'registration_state' => 'QLD',
    'registration_number' => '55421210',
    'registration_date' => '1990-02-12',
    'certificate_number' => '23324',
    'registration_year' => '2012',
    'date_printed' => '2034-03-23'
];

  }`;
   const Presponse = `{
   $headers = [
    'Authorization: ' . $accessToken,
    'Content-Type: application/json',
    'Accept: application/json'
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
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
    <VStack pos="relative" bgColor={bgColor} borderRadius="lg">
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

      <Code w="24">Responses:</Code>

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