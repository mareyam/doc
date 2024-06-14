import React from "react";
import { Text, Box, useColorMode, Heading } from "@chakra-ui/react";
import { useStateManagementStore } from "../../zustand-store/state-management";
import { useRouter } from "next/navigation";
import APIData from "@/components/common/api_data";
import FormattedTitles from "@/components/utils/FormattedTitles";

const MobileSidebar = () => {
  const router = useRouter();
  const { colorMode } = useColorMode();

  const handleNavigation = (id) => {
    router.push(`#/${id}`, undefined, { shallow: true });
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const { selectedMenu, setShowMenu, setSelectedMenu } =
    useStateManagementStore();

  return (
    <Box
      overflowY="scroll"
      pos="fixed"
      top="14"
      bgColor="#1a202c"
      px="8"
      zIndex="1"
    >
      {APIData?.map((api, index) => (
        <Box key={index} mb="4">
          <Heading
            size="md"
            color={colorMode === "light" ? "white" : "inherit"}
            mb="2"
          >
            {api.name}
          </Heading>

          {Object.keys(api.data).map((title, index) => (
            <Text
              pl="4"
              onClick={() => {
                handleNavigation(title);
                setSelectedMenu(title);
                setShowMenu(false);
              }}
              py="1"
              cursor="pointer"
              _hover={{
                bg: "blue.100",
                color: "blue.500",
              }}
              bg={title === selectedMenu ? "blue.500" : "transparent"}
              rounded="md"
              key={index}
              color={colorMode === "light" ? "white" : "inherit"}
            >
              <FormattedTitles title={title} />
            </Text>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default MobileSidebar;
