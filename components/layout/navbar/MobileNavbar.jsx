import React from "react";
import {
  Box,
  Button,
  IconButton,
  Switch,
  useColorMode,
} from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import MobileSidebar from "../sidebar/MobileSidebar";
import { useStateManagementStore } from "../../zustand-store/state-management";
import SearchModal from "@/components/common/search_bar";

const MobileNavbar = () => {
  const { showMenu, setShowMenu, selectedMenu, isOpenSearchModal } =
    useStateManagementStore();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box
        bgColor="#1a202c"
        pos="fixed"
        w="full"
        zIndex="20"
        py="2"
        justifyContent="space-between"
        display="flex"
      >
        <Button
          bgColor="transparent"
          textTransform="uppercase"
          fontSize="12"
          fontWeight="400"
          _hover={{
            bgColor: "transparent",
          }}
          onClick={() => setShowMenu(!showMenu)}
          color={colorMode === "light" ? "white" : "inherit"}
        >
          {selectedMenu ? selectedMenu : "Introduction"}
          <IconButton
            bgColor="transparent"
            _hover={{
              bgColor: "transparent",
            }}
            aria-label="arrowbutton-mobilenavbar"
            icon={<IoIosArrowDown size={12} />}
          />
        </Button>
        <Box pos="absolute" top="4" right="4">
          <Switch
            id="color-mode-switch"
            colorScheme={colorMode == "dark" && "purple"}
            isChecked={colorMode === "dark"}
            onChange={toggleColorMode}
            size="sm"
          />
        </Box>
      </Box>
      {showMenu && <MobileSidebar />}
      {isOpenSearchModal && <SearchModal />}
    </>
  );
};

export default MobileNavbar;
