import { GridItem, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import Textt from "./Textt";
const Authentication = ({ id }) => {
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <>
      {isDesktop ? (
        <>
          <GridItem id={id} w={{ base: "", xl: "36vw" }}>
            <Textt />
          </GridItem>
          <GridItem></GridItem>
        </>
      ) : (
        <>
          <GridItem w="100%">
            <Textt />
          </GridItem>
        </>
      )}
    </>
  );
};

export default Authentication;
