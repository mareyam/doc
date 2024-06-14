import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
  HStack,
  Box,
  Code,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { useStateManagementStore } from "@/components/zustand-store/state-management";
import { CiSearch } from "react-icons/ci";
import { HiArrowsUpDown } from "react-icons/hi2";
import { IoReturnDownBack } from "react-icons/io5";
import APIData from "../api_data";

const SearchModal = ({}) => {
  const router = useRouter();
  const {
    selectedMenu,
    setSelectedMenu,
    isOpenSearchModal,
    onCloseSearchModal,
  } = useStateManagementStore();
  const [search, setSearch] = useState("");
  const [filteredTitles, setFilteredTitles] = useState([]);

  const sidebarTitles = APIData.flatMap((apiSection) =>
    Object.keys(apiSection.data).map((key) => apiSection.data[key].name)
  );

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    if (selectedMenu) {
      const formattedMenu = selectedMenu
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join("_");

      router.push(`#/${formattedMenu}`, undefined, {
        shallow: true,
      });
      document
        .getElementById(formattedMenu)
        ?.scrollIntoView({ behavior: "smooth" });
      setSearch("");
    }
  }, [selectedMenu, router]);

  useEffect(() => {
    if (search.trim() === "") {
      setFilteredTitles([]);
    } else {
      setFilteredTitles(
        sidebarTitles
          .filter((title) =>
            title.toLowerCase().startsWith(search.toLowerCase())
          )
          .map((title) =>
            title
              .split("_")
              .map(
                (word) =>
                  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
              )
              .join(" ")
          )
      );
    }
  }, [search, sidebarTitles]);

  return (
    <>
      <Modal
        borderRadius="xl"
        isOpen={isOpenSearchModal}
        onClose={onCloseSearchModal}
      >
        <ModalOverlay />
        <ModalOverlay />

        <ModalContent bgColor="#14171D" mx={{ base: "4", md: "" }}>
          <VStack borderRadius="xl" gap="0">
            <InputGroup p="2">
              <InputLeftElement h="full" color="gray.300" fontSize="12">
                <CiSearch />
              </InputLeftElement>
              <Input
                onChange={handleSearchChange}
                border="none"
                fontSize="14"
                placeholder="Go to..."
              />
            </InputGroup>
            {filteredTitles?.map((title, index) => (
              <Box
                px="4"
                py="2"
                borderRadius="md"
                colorScheme="purple.200"
                cursor="pointer"
                color="gray.300"
                _hover={{
                  bg: "blue.100",
                  color: "blue.500",
                }}
                w="full"
                key={index}
                onClick={() => {
                  setSelectedMenu(title);
                }}
              >
                {title}
              </Box>
            ))}
            <HStack
              w="full"
              justifyContent="space-between"
              borderTop="1px solid #545969"
              borderBottomRadius="xl"
              bgColor="#1B1E25"
            >
              <HStack>
                <HStack>
                  <IconButton
                    mr="-4"
                    color="gray.500"
                    icon={<HiArrowsUpDown size="12" />}
                    bgColor="transparent"
                    aria-label="logo"
                    _hover={{
                      bgColor: "transparent",
                    }}
                  />
                  <Text color="gray.500" fontSize="12">
                    Navigate
                  </Text>
                </HStack>
                <HStack>
                  <IconButton
                    color="gray.500"
                    mr="-4"
                    icon={<IoReturnDownBack size="12" />}
                    bgColor="transparent"
                    aria-label="logo"
                    _hover={{
                      bgColor: "transparent",
                    }}
                  />
                  <Text color="gray.500" fontSize="12">
                    Go
                  </Text>
                </HStack>
              </HStack>
              <Box pr="2">
                <Text color="gray.500" fontSize="12">
                  Open on &nbsp;
                  <Code
                    bg="transparent"
                    border="1px solid #545969"
                    borderRadius="md"
                    fontSize="12"
                    p="1"
                  >
                    Ctrl-F
                  </Code>
                </Text>
              </Box>
            </HStack>
          </VStack>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SearchModal;

// useEffect(() => {
//   if (selectedMenu) {
//     const routeName = selectedMenu.replace(/\s+/g, "_");
//     router.push(`#/${routeName}`, undefined, {
//       shallow: true,
//     });
//     document
//       .getElementById(selectedMenu)
//       ?.scrollIntoView({ behavior: "smooth" });
//     setSearch("");
//   }
// }, [selectedMenu]);

// // const sidebarTitles = APIData.map((section) => section.name);

// useEffect(() => {
//   if (search.trim() === "") {
//     setFilteredTitles([]);
//   } else {
//     const formattedSearch = search.toLowerCase().replace(/\s+/g, "_");
//     const filtered = sidebarTitles.filter((title) =>
//       title.toLowerCase().replace(/\s+/g, "_").startsWith(formattedSearch)
//     );
//     setFilteredTitles(filtered.map((title) => title.replace(/_/g, " ")));
//   }
// }, [search, sidebarTitles]);

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
// useEffect(() => {
//   if (search.trim() === "") {
//     setFilteredTitles([]);
//   } else {
//     setFilteredTitles(
//       sidebarTitles.filter((title) =>
//         title
//           .toLowerCase()
//           .replace(/\s+/g, "_")
//           .startsWith(search.toLowerCase())
//           .replace(/\s+/g, "_")
//       )
//     );
//   }
// }, [search, sidebarTitles]);

// useEffect(() => {
//   if (search.trim() === "") {
//     setFilteredTitles([]);
//   } else {
//     const formattedSearch = search.toLowerCase().replace(/\s+/g, "_");
//     const filtered = sidebarTitles.filter((title) =>
//       title.toLowerCase().replace(/\s+/g, "_").startsWith(formattedSearch)
//     );
//     setFilteredTitles(filtered.map((title) => title.replace(/_/g, " ")));
//     console.log(filteredTitles);
//   }
// }, [search, sidebarTitles]);

// useEffect(() => {
//   if (search.trim() === "") {
//     setFilteredTitles([]);
//   } else {
//     const formattedSearch = search.toLowerCase().replace(/\s+/g, "_");
//     setFilteredTitles(
//       sidebarTitles.filter((title) =>
//         title.toLowerCase().replace(/\s+/g, "_").startsWith(formattedSearch)
//       )
//     );
//     console.log(filteredTitles);
//   }
// }, [search, sidebarTitles]);
