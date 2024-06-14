import React, { useState, useEffect } from "react";
import {
  Box,
  VStack,
  IconButton,
  useClipboard,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { MdDone, MdOutlineCopyAll } from "react-icons/md";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/cjs/styles/prism";

const Example = () => {
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.200");
  const { colorMode } = useColorMode();

  const jsonCode = `{
   "DateIssued": "16 March 2022",
 "Issuer": "PSA",
 "subject": {
 "Suffix": "",
 "lName": "BUNDALIAN",
 "fName": "KRISTAL JOY",
 "mName": "TUMBALI",
 "sex": "Female",
 "BF": "[8,6]",
 "DOB": "December 04, 1990",
 "POB": "Ballesteros,Cagayan",
 "PCN": "9653-7051-9548-0132"
 },
 "alg": "EDDSA",
 "signature": "PHCws4/WQ/BqoP8iubD0wTNuHpb5Gi/BbMnZwHcw3jfWCfJ9mgimFcT9j7sWMEyTa7QCq1ufLYXpQOq08y1cAQ=="
  }`;

  const { onCopy, hasCopied } = useClipboard(jsonCode);
  const [showTransition, setShowTransition] = useState(false);

  useEffect(() => {
    setShowTransition(hasCopied);
  }, [hasCopied]);

  return (
    <VStack pos="relative" w="full" bgColor={bgColor} borderRadius="lg">
      <SyntaxHighlighter
        customStyle={{
          height: "100%",
          width: "100%",
          backgroundColor: colorMode == "dark" ? "transparent" : "transparent",
        }}
        language="json"
        style={okaidia}
        wrapLongLines
      >
        {jsonCode}
      </SyntaxHighlighter>
      <Box pos="absolute" top="4" right="2">
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

export default Example;
