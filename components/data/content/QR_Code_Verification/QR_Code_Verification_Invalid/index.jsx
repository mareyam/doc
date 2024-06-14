import { GridItem, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import Textt from "./Textt";
import Example from "./Example";
const QR_Code_Verification_Invalid = ({ ref }) => {
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <>
      {isDesktop ? (
        <>
          <GridItem w={{ base: "", xl: "40vw" }} h="100%" pos="sticky" top="20">
            <Textt />
          </GridItem>
          <GridItem w={{ base: "", xl: "40vw" }}>
            <Example />
          </GridItem>
        </>
      ) : (
        <>
          <GridItem w="100%">
            <Textt />
            <Example />
          </GridItem>
        </>
      )}
    </>
  );
};

export default QR_Code_Verification_Invalid;
