import {
  Box,
  IconButton,
  VStack,
  useClipboard,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { MdDone, MdOutlineCopyAll } from "react-icons/md";

const Example = () => {
  const jsonCode = `{
    "DateIssued": "01 March 2022",
    "Issuer": "PSA",
    "subject": {
      "Suffix": "",
      "lName": "RIZAL",
      "fName": "JOSE",
      "mName": "ALONZO",
      "sex": "Male",
      "BF": "[1,2]",
      "DOB": "January 1, 1970",
      "POB": "Calamba, Laguna",
      "PCN": "1234-4567-6789-1234",
    },
    "alg": "EDDSA",
    "signature":
      "lq3F1234kLI70mZG2/9WvQSUZi0EGS08AH9nKLMANRaXscYTmfPm7OYaP0qrTRPlnkGY7RlDCtV+krBj1xshAg==",
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

export default Example;
