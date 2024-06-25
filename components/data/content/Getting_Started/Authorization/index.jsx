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
import { stackoverflowLight } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const Getting_Started = () => {
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

export default Getting_Started;

const Details = () => {
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.200");

  return (
    <VStack
      alignItems="flex-start"
      textAlign="left"
      bgColor={bgColor}
      p="4"
      rounded="lg"
    >
      <Heading fontSize="24" w="full">
        Getting Started
      </Heading>
      <Text w="full">
        This guide provides clear instructions on how to integrate the Sanctum
        API into your application for authentication and user management. Follow
        the steps and examples below to get started quickly and effectively.
      </Text>
      <br />
      <Text fontSize="18" w="full" fontWeight={"700"}>
        CSRF Cookie
      </Text>
      <Text>
        Before making any POST requests, you need to retrieve a CSRF token. This
        token is necessary for authentication and should be included in the
        headers of subsequent requests.
      </Text>
      <Code>Request</Code>
      <Code>Method: GET URL: /sanctum/csrf-cookie</Code>

      <Text>
        This request will set the CSRF token in the cookies, which can be used
        in subsequent requests.
      </Text>
      <br />
      <Text fontSize="18" w="full" fontWeight={"700"}>
        User Authentication
      </Text>
      <Text>
        To authenticate a user, you need to make a POST request to the login
        endpoint. This request requires the CSRF token retrieved from the
        previous step.
      </Text>
      <Text>
        Steps to Authenticate Fetch CSRF Token is to make the following request
        to retrieve the CSRF token.
      </Text>
      <Code>Request</Code>
      <Code>Method: GET URL: /sanctum/csrf-cookie</Code>
      <br />

      <Text fontSize="18" w="full" fontWeight={"700"}>
        Login Request
      </Text>
      <Text>
        Use the CSRF token from the previous step in the headers of your POST
        request to the login endpoint.
      </Text>
      <Code>Request</Code>
      <Code>Method: POST URL: /login</Code>
      <Code>Headers: Accept: application/json X-XSRF-TOKEN: [CSRF token]</Code>
      <Text>
        Body: email (text) - User email address. password (text) - User
        password.
      </Text>
      <br />

      <Text fontSize="18" w="full" fontWeight={"700"}>
        Retrieve User Information
      </Text>
      <Text>
        Once the user is authenticated, you can retrieve their information using
        a GET request to the user endpoint. Steps to Retrieve User Information
        Ensure User is Authenticated Make sure the user is authenticated by
        following the steps in the User Authentication section. Get User
        Information Make a GET request to /api/user to fetch the authenticated
        user details.
      </Text>
      <Code>Request</Code>
      <Code>Method: GET URL: /api/user</Code>

      <Code>Headers: Include the authentication headers if necessary</Code>
      <br />

      <Text fontSize="18" w="full" fontWeight={"700"}>
        User Logout
      </Text>
      <Text>
        To log out the authenticated user, make a POST request to the logout
        endpoint. Steps to Logout Ensure User is Authenticated Make sure the
        user is authenticated by following the steps in the User Authentication
        section.
      </Text>
      <Code>Request</Code>
      <Code>Method: POST URL: /logout</Code>
    </VStack>
  );
};

const Example = () => {
  const CSRFCookie = `{
  curl -X GET "https://b2b-dev.idmetagroup.com/sanctum/csrf-cookie"
}`;

  const php1 = `{
function getCSRFCookie() {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://b2b-dev.idmetagroup.com/sanctum/csrf-cookie");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    curl_close($ch);
    return $response;
}
}`;

  const UserAuth = `{
  curl -X GET "https://b2b-dev.idmetagroup.com/sanctum/csrf-cookie"
}`;

  const php2 = `{
function userAuth() {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://b2b-dev.idmetagroup.com/sanctum/csrf-cookie");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    curl_close($ch);
    return $response;
}

}`;
  const LoginRequest = `{
  curl Copy code curl -X POST "https://b2b-dev.idmetagroup.com/login"\-H "Accept: application/json"\-H "X-XSRF-TOKEN: [CSRF token]"\-F "email=example@domain.com"\-F"password=yourpassword"
}`;

  const php3 = `{
function loginRequest($email, $password, $csrfToken) {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://b2b-dev.idmetagroup.com/login");
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        "Accept: application/json",
        "X-XSRF-TOKEN: $csrfToken"
    ]);
    curl_setopt($ch, CURLOPT_POSTFIELDS, [
        'email' => $email,
        'password' => $password
    ]);
    $response = curl_exec($ch);
    curl_close($ch);
    return $response;
}
}`;

  const RetrieveUserInformation = `{
   curl Copy code curl -X GET "https://b2b-dev.idmetagroup.com/api/user"
}`;

  const php4 = `{
function retrieveUserInformation() {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://b2b-dev.idmetagroup.com/api/user");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    curl_close($ch);
    return $response;
}
}`;
  const Logout = `{
  curl Copy code curl -X POST "https://b2b-dev.idmetagroup.com/logout"
}`;

  const php5 = `{
function logout() {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://b2b-dev.idmetagroup.com/logout");
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    curl_close($ch);
    return $response;
}
}`;

  const PreRequestScript = `{
   const jar = pm.cookies.jar();
   jar.get("https://dashboard2.idmetagroup.com", "XSRF-TOKEN", (err, cookie) => {
    pm.request.addHeader({
        key: "X-XSRF-TOKEN",
        value: cookie
    });

    pm.request.addHeader({
        key: "Referer",
        value: "https://dashboard2.idmetagroup.com"
    });
});
}`;
  const { onCopy, hasCopied } = useClipboard(
    JSON.stringify(CSRFCookie, null, 2)
  );
  const [showTransition, setShowTransition] = useState(false);
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.200");
  const { colorMode } = useColorMode();

  useEffect(() => {
    setShowTransition(hasCopied);
  }, [hasCopied]);

  const php6 = `{
  function preRequestScript() {
    $url = "https://dashboard2.idmetagroup.com";
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HEADER, true);
    $response = curl_exec($ch);
    $header_size = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
    $header = substr($response, 0, $header_size);
    preg_match('/^Set-Cookie:\s*([^;]*)/mi', $header, $matches);
    $cookie = $matches[1];
    curl_close($ch);

    $headers = [
        "X-XSRF-TOKEN: $cookie",
        "Referer: https://dashboard2.idmetagroup.com"
    ];
    return $headers;
}}`;

  return (
    <VStack
      px="4"
      pos="relative"
      bgColor={bgColor}
      borderRadius="lg"
      alignItems="flex-start"
    >
      <Text fontSize="18" mt="6" w="full" textAlign="left" fontWeight={"700"}>
        CSRF Cookie
      </Text>
      <Code>Request:</Code>

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
                border: "none",
                boxShadow: "none",
              }}
              language="applescript"
              style={colorMode == "dark" ? okaidia : stackoverflowLight}
              wrapLongLines
            >
              {CSRFCookie}
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
              {php1}
            </SyntaxHighlighter>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Text fontSize="18" mt="6" w="full" textAlign="left" fontWeight={"700"}>
        User Authentication
      </Text>
      <Code>Request:</Code>

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
                border: "none",
                boxShadow: "none",
              }}
              language="applescript"
              style={colorMode == "dark" ? okaidia : stackoverflowLight}
              wrapLongLines
            >
              {UserAuth}
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
              {php2}
            </SyntaxHighlighter>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Text fontSize="18" mt="6" w="full" textAlign="left" fontWeight={"700"}>
        Login Request
      </Text>
      <Code>Request:</Code>

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
                border: "none",
                boxShadow: "none",
              }}
              language="applescript"
              style={colorMode == "dark" ? okaidia : stackoverflowLight}
              wrapLongLines
            >
              {LoginRequest}
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
              {php3}
            </SyntaxHighlighter>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Text fontSize="18" mt="6" w="full" textAlign="left" fontWeight={"700"}>
        Retrieve User Information
      </Text>
      <Code>Request:</Code>

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
                border: "none",
                boxShadow: "none",
              }}
              language="applescript"
              style={colorMode == "dark" ? okaidia : stackoverflowLight}
              wrapLongLines
            >
              {RetrieveUserInformation}
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
              {php4}
            </SyntaxHighlighter>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Text fontSize="18" mt="6" w="full" textAlign="left" fontWeight={"700"}>
        User Logout
      </Text>
      <Code>Request:</Code>

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
                border: "none",
                boxShadow: "none",
              }}
              language="applescript"
              style={colorMode == "dark" ? okaidia : stackoverflowLight}
              wrapLongLines
            >
              {Logout}
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
              {php5}
            </SyntaxHighlighter>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Text fontSize="18" mt="6" w="full" textAlign="left" fontWeight={"700"}>
        Pre-request Script for Postman
      </Text>
      <Text>
        To handle CSRF tokens automatically in Postman, use the following
        pre-request script:
      </Text>
      <Code>Request:</Code>

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
                border: "none",
                boxShadow: "none",
              }}
              language="applescript"
              style={colorMode == "dark" ? okaidia : stackoverflowLight}
              wrapLongLines
            >
              {PreRequestScript}
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
              {php6}
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
