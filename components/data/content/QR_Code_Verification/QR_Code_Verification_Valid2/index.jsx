import React from "react";
import Textt from "./Textt";
import Example from "./example";
import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";

const QR_Code_Verification_Valid2 = () => {
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <>
      {isDesktop ? (
        <>
          <GridItem h="100%" pos="sticky" top="20" w={{ base: "", xl: "40vw" }}>
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

export default QR_Code_Verification_Valid2;
