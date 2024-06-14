"use client";
import React from "react";
import {
  HStack,
  Switch,
  VStack,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
  Code,
  IconButton,
  useColorModeValue,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { BsSunFill, BsFillMoonFill } from "react-icons/bs";
import LogoLightMode from "@/public/assets/logo_lightmode";
import LogoDarkMode from "@/public/assets/logo_darkmode";
import { useColorMode, useTheme } from "@chakra-ui/react";
import SearchModal from "@/components/common/search_bar";
import { useStateManagementStore } from "@/components/zustand-store/state-management";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpenSearchModal, onOpenSearchModal, onCloseSearchModal } =
    useStateManagementStore();

  return (
    <VStack
      w={{ lg: "20vw", xl: "15vw", "2xl": "16vw", "3xl": "18vw" }}
      // border={{
      //   lg: "2px solid red",
      //   xl: "2px solid pink",
      //   "2xl": "2px solid green",
      //   "3xl": "2px solid purple",
      // }}
      py="4"
      position="fixed"
      top="0"
      zIndex="1"
    >
      <HStack w="100%" justifyContent="space-between">
        <IconButton
          alignItems="center"
          display="flex"
          w="full"
          _hover={{ background: "transparent" }}
          bgColor="transparent"
          icon={colorMode === "dark" ? <LogoDarkMode /> : <LogoLightMode />}
          aria-label="logo"
        />

        <Switch
          id="color-mode-switch"
          colorScheme={colorMode == "dark" && "purple"}
          isChecked={colorMode === "dark"}
          onChange={toggleColorMode}
          size="sm"
        />
      </HStack>
      <InputGroup>
        <InputLeftElement
          alignItems="center"
          display="flex"
          justifyContent="center"
          pointerEvents="none"
          fontSize="12"
          pb="2"
          color={useColorModeValue("gray.900", "gray.300")}
        >
          <CiSearch />
        </InputLeftElement>
        <Input
          h="8"
          fontSize="12"
          placeholder="Find anything"
          onClick={onOpenSearchModal}
        />
        <InputRightElement pb="2">
          <Code fontSize="10">/</Code>
        </InputRightElement>
      </InputGroup>

      {isOpenSearchModal && <SearchModal />}
    </VStack>
  );
};

export default Header;
