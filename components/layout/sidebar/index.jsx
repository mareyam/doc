"use client";
import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  AccordionIcon,
  Text,
  VStack,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import Header from "./Header";
import { useStateManagementStore } from "@/components/zustand-store/state-management";
import FormattedTitles from "@/components/utils/FormattedTitles";
const Sidebar = ({ titles, handleClick, currentSection }) => {
  const { selectedMenu, setSelectedMenu } = useStateManagementStore();
  const [isHoverSidebar, setIsHoverSidebar] = useState("");
  const color = useColorModeValue("#121539", "RGBA(255, 255, 255, 0.92)");

  console.log(currentSection);
  const updatedCurrentSection = formatMenu(currentSection);
  console.log(updatedCurrentSection);

  const gettingStartedApis = titles.filter(
    (api) => api.name === "Getting Started"
  );

  const complianceApis = titles.filter((api) =>
    [
      "Anti_Money_Laundering",
      "Biometrics",
      "Documents Verification",
      "Phone Verification",
      "Email Verification",
    ].includes(api.name)
  );

  const govDataApis = titles.filter((api) =>
    ["Australia", "Indonesia", "Philippines"].includes(api.name)
  );

  return (
    <VStack
      h="100dvh"
      w={{ lg: "25%", xl: "20%", "2xl": "19%", "3xl": "20%" }}
      top="0"
      pos="fixed"
      color={useColorModeValue("#121539", "RGBA(255, 255, 255, 0.92)")}
      bg={useColorModeValue("white", "#121539")}
      borderRight="0.8px solid #2B3039"
    >
      <Header />
      <Accordion
        pl="4"
        py="4"
        mt="32"
        mb="4"
        allowMultiple
        color="gray.500"
        allowToggle
        variant="flushed"
        w="full"
        overflowY="scroll"
        sx={{
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
        }}
      >
        {gettingStartedApis.length > 0 && (
          <Box>
            {gettingStartedApis.map((api, index) => (
              <AccordionItem
                key={`getting-started-${index}`}
                border="none"
                w="full"
                onClick={() => setIsHoverSidebar(index)}
              >
                <>
                  <AccordionButton justifyContent="space-between">
                    <Box ml="-4">
                      <Text
                        fontWeight="bold"
                        color={selectedMenu == api.title ? "white" : color}
                        fontSize={{ lg: "1.1rem" }}
                        // py="2"
                        onClick={() => {
                          handleClick("compliance", api.title);
                          setSelectedMenu(api.title);
                        }}
                      >
                        {api.name}
                      </Text>
                    </Box>
                  </AccordionButton>
                  {isHoverSidebar == index && (
                    <AccordionPanel>
                      {Object.keys(api.data).map((title, index) => (
                        <Text
                          fontSize="14"
                          key={index}
                          transition="transform 0.5s ease"
                          cursor="pointer"
                          rounded="md"
                          _hover={{
                            color: { color },
                            transform: "translateX(2%)",
                          }}
                          onClick={() => {
                            handleClick(api.name, title);
                            setSelectedMenu(title);
                          }}
                          transform={
                            (title === selectedMenu && "translateX(2%)") ||
                            (title === currentSection && "translateX(2%)")
                          }
                          color={
                            title === selectedMenu
                              ? color
                              : undefined || title === currentSection
                              ? color
                              : undefined
                          }
                          fontWeight={
                            title === selectedMenu
                              ? "500"
                              : "400" || title === currentSection
                              ? "500"
                              : "400"
                          }
                        >
                          <FormattedTitles title={title} />
                        </Text>
                      ))}
                    </AccordionPanel>
                  )}
                </>
              </AccordionItem>
            ))}
          </Box>
        )}

        {complianceApis.length > 0 && (
          <Box>
            <Box>
              <Text
                fontWeight="bold"
                color={color}
                fontSize={{ lg: "1.1rem" }}
                // py="2"
              >
                Compliance
              </Text>
            </Box>
            {complianceApis.map((api, index) => (
              <AccordionItem
                key={`compliance-${index}`}
                border="none"
                w="full"
                onClick={() => setIsHoverSidebar(index)}
              >
                <>
                  <AccordionButton justifyContent="space-between">
                    <Box>
                      <Text
                        // onClick={() => {
                        //   handleClick("compliance", api.title);
                        //   setSelectedMenu(api.title);
                        // }}
                        fontSize="14"
                        key={index}
                        transition="transform 0.5s ease"
                        cursor="pointer"
                        rounded="md"
                        color={color === "dark" ? "white" : "green.500"}
                        _hover={{
                          color: { color },
                          transform: "translateX(2%)",
                        }}
                        transform={
                          (api.name === selectedMenu && "translateX(2%)") ||
                          (api.name === currentSection && "translateX(2%)")
                        }
                        // color={
                        //   api.name === selectedMenu
                        //     ? color
                        //     : undefined || api.name === currentSection
                        //     ? color
                        //     : undefined
                        // }
                        fontWeight={
                          api.name === selectedMenu
                            ? "500"
                            : "400" || api.name === currentSection
                            ? "500"
                            : "400"
                        }
                      >
                        {api.name}
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel>
                    {Object.keys(api.data).map((title, index) => (
                      <Text
                        px="4"
                        fontSize="14"
                        key={index}
                        transition="transform 0.5s ease"
                        cursor="pointer"
                        rounded="md"
                        _hover={{
                          color: { color },
                          transform: "translateX(2%)",
                        }}
                        onClick={() => {
                          handleClick(api.name, title);
                          setSelectedMenu(title);
                        }}
                        transform={
                          (title === selectedMenu && "translateX(2%)") ||
                          (title === currentSection && "translateX(2%)")
                        }
                        py="1"
                        color={
                          title === selectedMenu
                            ? color
                            : undefined || title === currentSection
                            ? color
                            : undefined
                        }
                        fontWeight={
                          title === selectedMenu
                            ? "500"
                            : "400" || title === currentSection
                            ? "500"
                            : "400"
                        }
                        // color={selectedMenu == title ? "white" : color}
                      >
                        <FormattedTitles title={title} />
                      </Text>
                    ))}
                  </AccordionPanel>
                </>
              </AccordionItem>
            ))}
          </Box>
        )}

        {govDataApis.length > 0 && (
          <Box>
            <Box>
              <Text
                fontWeight="bold"
                color={color}
                fontSize={{ lg: "1.1rem" }}
                // py="2"
              >
                Government Data Source
              </Text>
            </Box>
            {govDataApis.map((api, index) => (
              <AccordionItem
                key={`gov-data-${index}`}
                border="none"
                w="full"
                onClick={() => setIsHoverSidebar(index)}
              >
                <>
                  <AccordionButton justifyContent="space-between">
                    <Box>
                      <Text
                        // color={color}
                        fontWeight="500"
                        fontSize={{ lg: "1.05rem" }}
                        textAlign="left"
                        color={color === "dark" ? "white" : "green.500"}
                      >
                        {api.name}
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  {isHoverSidebar == index && (
                    <AccordionPanel>
                      {Object.keys(api.data).map((title, index) => (
                        <Text
                          fontSize="14"
                          pl="4"
                          key={index}
                          transition="transform 0.5s ease"
                          cursor="pointer"
                          rounded="md"
                          _hover={{
                            color: { color },
                            transform: "translateX(2%)",
                          }}
                          onClick={() => {
                            handleClick(api.name, title);
                            setSelectedMenu(title);
                          }}
                          transform={
                            (title === selectedMenu && "translateX(2%)") ||
                            (title === currentSection && "translateX(2%)")
                          }
                          py="1"
                          color={
                            title === selectedMenu
                              ? color
                              : undefined || title === currentSection
                              ? color
                              : undefined
                          }
                          fontWeight={
                            title === selectedMenu
                              ? "500"
                              : "400" || title === currentSection
                              ? "500"
                              : "400"
                          }
                        >
                          <FormattedTitles title={title} />
                        </Text>
                      ))}
                    </AccordionPanel>
                  )}
                </>
              </AccordionItem>
            ))}
          </Box>
        )}
      </Accordion>

      {/* <Accordion
        pl="4"
        py="4"
        mt="32"
        mb="4"
        allowMultiple
        color="gray.500"
        allowToggle
        variant="flushed"
        w="full"
        overflow="hidden"
      >
        {titles.map((api, index) => (
          <AccordionItem
            key={index}
            border="none"
            w="full"
            onClick={() => setIsHoverSidebar(index)}
          >
            <>
              <AccordionButton justifyContent="space-between">
                <Box>
                  <Text
                    key={index}
                    color={color}
                    fontWeight="500"
                    fontSize={{ lg: "1.05rem" }}
                    textAlign="left"
                  >
                    {api.name}
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              {isHoverSidebar == index && (
                <AccordionPanel>
                  {Object.keys(api.data).map((title, index) => (
                    <Text
                      fontSize="14"
                      key={index}
                      transition="transform 0.5s ease"
                      cursor="pointer"
                      rounded="md"
                      _hover={{
                        color: { color },
                        transform: "translateX(2%)",
                      }}
                      onClick={() => {
                        handleClick(api.name, title);
                        setSelectedMenu(title);
                      }}
                      transform={
                        (title === selectedMenu && "translateX(2%)") ||
                        (title === currentSection && "translateX(2%)")
                      }
                      py="1"
                      color={
                        title === selectedMenu
                          ? color
                          : undefined || title === currentSection
                          ? color
                          : undefined
                      }
                      fontWeight={
                        title === selectedMenu
                          ? "500"
                          : "400" || title === currentSection
                          ? "500"
                          : "400"
                      }
                    >
                      <FormattedTitles title={title} />
                    </Text>
                  ))}
                </AccordionPanel>
              )}
            </>
          </AccordionItem>
        ))}
      </Accordion> */}
    </VStack>
  );
};

export default Sidebar;

function formatMenu(menu) {
  if (menu?.startsWith("qr")) {
    return (
      "QR " +
      menu
        ?.slice(2)
        ?.split("_")
        ?.map(
          (word) =>
            word?.charAt(0)?.toUpperCase() + word?.slice(1)?.toLowerCase()
        )
        .join(" ")
    );
  } else {
    return menu
      ?.split("_")
      ?.map(
        (word) => word?.charAt(0)?.toUpperCase() + word?.slice(1)?.toLowerCase()
      )
      ?.join(" ");
  }
}
