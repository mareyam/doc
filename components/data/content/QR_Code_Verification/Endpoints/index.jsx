import {
  GridItem,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import Textt from "./Textt";
const Endpoints = ({ id }) => {
  const isDesktop = useBreakpointValue({ base: false, md: true });
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.200");

  return (
    <>
      {isDesktop ? (
        <>
          <GridItem w="100%" id={id} bgColor={bgColor} p="4" rounded="lg">
            <Textt />
          </GridItem>
          <GridItem w="100%"></GridItem>
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

export default Endpoints;
