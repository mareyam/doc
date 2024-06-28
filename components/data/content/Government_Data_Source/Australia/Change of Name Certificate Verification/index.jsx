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
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import stackoverflowLight from "react-syntax-highlighter/dist/cjs/styles/hljs/stackoverflow-light";

const Change_of_Name_Certificate_Verification = () => {
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

export default Change_of_Name_Certificate_Verification;

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
        Change of Name Certificate Verification
      </Heading>
      <Text w="full">
        Endpoint: &nbsp;
        <Tooltip label={hasCopied ? "copied" : "Click to copy"}>
          <Code
            cursor="pointer"
            onClick={() =>
              handleCopy(
                `POST /v1/verification/australia/certificate/changeOfName`
              )
            }
          >
            {isDesktop
              ? `POST /v1/verification/australia/certificate/changeOfName`
              : `POST /v1/verification/australia/certificate   /changeOfName`}
          </Code>
        </Tooltip>
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
  "dob": "12-03-1990",
  "new_family_name": "famit",
  "new_given_name": "Pillow",
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
  '{{baseUrl}}/v1/verification/australia/certificate/changeOfName' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: {{accessToken}}' \
  -d '{
        "dob": "12-03-1990",
        "new_family_name": "famit",
        "new_given_name": "Pillow",
        "registration_state": "QLD",
        "registration_number": "55421210",
        "registration_date": "1990-02-12",
        "certificate_number": "23324",
        "registration_year": "2012",
        "date_printed": "2034-03-23"
      }'
  }`;

  const Pjsondata = `{
  $headers = [
    "accept: application/json",
    "Content-Type: application/json",
    "Authorization: Bearer YOUR_ACCESS_TOKEN" // Replace with actual access token
];

// Define the JSON body
$body = json_encode([
    "dob" => "12-03-1990",
    "new_family_name" => "famit",
    "new_given_name" => "Pillow",
    "registration_state" => "QLD",
    "registration_number" => "55421210",
    "registration_date" => "1990-02-12",
    "certificate_number" => "23324",
    "registration_year" => "2012",
    "date_printed" => "2034-03-23"
]);

  }`;

  const Presponse = `{
  $baseUrl = "https://example.com"; // Replace with actual base URL
$endpoint = "/v1/verification/australia/certificate/changeOfName";
$url = $baseUrl . $endpoint;

// Initialize curl
$ch = curl_init($url);

// Set curl options
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $body);

// Execute curl request and get the response
$response = curl_exec($ch);

// Check for errors
if (curl_errno($ch)) {
    $error_msg = curl_error($ch);
}

// Close curl
curl_close($ch);

// Output the response or error
if (isset($error_msg)) {
    echo "Curl error: " . $error_msg;
} else {
    echo $response;
}
?>
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
