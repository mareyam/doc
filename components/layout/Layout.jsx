"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Grid,
  GridItem,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import MobileNavbar from "./navbar/MobileNavbar";
import { useStateManagementStore } from "../zustand-store/state-management";
import APIData from "@/components/common/api_data";
import Sidebar from "./sidebar";
import Navbar from "./navbar";

const Layout = () => {
  const router = useRouter();
  const { setShowMenu, setSelectedMenu, selectedMenu } =
    useStateManagementStore;
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const bgColor = useColorModeValue("white", "#121539 100%");
  const sectionRefs = useRef({});
  const [currentSection, setCurrentSection] = useState(null);
  const [isNavigating, setIsNavigating] = useState(false);

  const handleNavigation = (apiName, title) => {
    setIsNavigating(true);
    const foundSection = APIData.find((apiSection) => {
      return apiSection.name.toLowerCase() === apiName.toLowerCase();
    });
    console.log(foundSection);
    if (foundSection) {
      const sectionName = Object.keys(foundSection.data).find(
        (key) => key.toLowerCase() === title.toLowerCase()
      );
      console.log(sectionName);
      const routeName = `${foundSection.name}/${sectionName}`.replace(
        /\s+/g,
        "_"
      );

      router
        .push(`#/${routeName}`, undefined, { shallow: true })
        .then(() => {
          setIsNavigating(false);
          document
            .getElementById(title)
            ?.scrollIntoView({ behavior: "smooth" });
        })
        .catch(() => {
          setIsNavigating(false);
        });
    } else {
      setIsNavigating(false);
    }
  };
  useEffect(() => {
    //false
    if (!isNavigating) {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        let currentSectionId = null;

        Object.entries(sectionRefs.current).forEach(([id, ref]) => {
          const sectionTop = ref.offsetTop;
          const sectionBottom = sectionTop + ref.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSectionId = id;
          }
        });

        if (currentSectionId !== currentSection) {
          setCurrentSection(currentSectionId);
          console.log(currentSection);
          console.log(currentSectionId);
          if (currentSectionId) {
            const foundSection = APIData.find((apiSection) => {
              return Object.keys(apiSection.data).find(
                (key) => key.toLowerCase() === currentSectionId
              );
            });

            if (foundSection) {
              const sectionName = Object.keys(foundSection.data).find(
                (key) => key.toLowerCase() === currentSectionId
              );
              const routeName = `${foundSection.name}/${sectionName}`.replace(
                /\s+/g,
                "_"
              );
              router.replace(`#/${routeName}`, undefined, { shallow: true });
            }
          }
        }
      };
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [router, currentSection, isNavigating]);

  return (
    <Box bgGradient="linear(to-b, #101332, #1D225F)" w="full">
      {isDesktop ? (
        <Grid
          templateColumns={{
            lg: "25% 75%",
            xl: "20% 80%",
            "2xl": "18.75vw 80vw",
            "3xl": "20% 80%",
          }}
        >
          <GridItem w="full">
            <Sidebar
              titles={APIData}
              currentSection={currentSection}
              handleClick={handleNavigation}
            />
          </GridItem>
          <GridItem h="full" w="full" bgColor={bgColor}>
            <Navbar />

            {APIData.map((apiSection) => {
              const { data } = apiSection;
              return Object.keys(data).map((key) => {
                const Component = data[key];
                return (
                  <Grid
                    w="100%"
                    key={Component.name}
                    id={Component.name}
                    py={{ base: 4, xl: 20 }}
                    gap={{ lg: 8, xl: "", "2xl": "" }}
                    px={{ lg: 10, xl: "20", "2xl": "20", "3xl": "80" }}
                    display="flex"
                    zIndex="-1"
                    ref={(el) =>
                      (sectionRefs.current[Component.name.toLowerCase()] = el)
                    }
                    // borderBottom="0.8px solid #2B3039"
                  >
                    <Component />
                  </Grid>
                );
              });
            })}
          </GridItem>
        </Grid>
      ) : (
        <>
          <MobileNavbar />
          {APIData.map((apiSection) => {
            const { data } = apiSection;
            return Object.keys(data).map((key) => {
              const Component = data[key];

              return (
                <Grid
                  w="100dvw"
                  onClick={() => setShowMenu(false)}
                  key={Component.name}
                  id={Component.name}
                  py="12"
                  templateColumns="1fr"
                  gap="16"
                  px="4"
                  display="flex"
                  borderBottom="0.8px solid #2B3039"
                >
                  <Component />
                </Grid>
              );
            });
          })}
        </>
      )}
    </Box>
  );
};

export default Layout;

// useEffect(() => {
//   const handleScroll = () => {
//     const scrollPosition = window.scrollY;
//     let currentSectionId = null;

//     Object.entries(sectionRefs.current).forEach(([id, ref]) => {
//       const sectionTop = ref.offsetTop;
//       const sectionBottom = sectionTop + ref.offsetHeight;

//       if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
//         currentSectionId = id;
//       }
//     });

//     if (currentSectionId !== currentSection) {
//       setCurrentSection(currentSectionId);
//       // if (currentSectionId) {
//       //   router.replace(`/#${currentSectionId}`, undefined, { shallow: true });
//       // }
//       if (currentSectionId) {
//         // Check if the current section corresponds to any section in API data
//         const foundSection = APIData.find(apiSection => {
//           return Object.keys(apiSection.data).find(key => key.toLowerCase() === currentSectionId);
//         });
//          if (foundSection) {
//           const sectionName = Object.keys(foundSection.data).find(key => key.toLowerCase() === currentSectionId);
//           router.replace(`/${foundSection.name}/${sectionName}`, undefined, { shallow: true });
//         }
//     }
//   };

//   window.addEventListener("scroll", handleScroll);

//   return () => {
//     window.removeEventListener("scroll", handleScroll);
//   };
// }, [router, currentSection]});

// const sectionName = Object.keys(foundSection.data).find(
//   (key) => key.toLowerCase() === currentSectionId
// );
// router.replace(`#/${foundSection.name}/${sectionName}`, undefined, {
//   shallow: true,
// });

// const handleNavigation = (apiName, title) => {
//   setIsNavigating(true);
//   const foundSection = APIData.find((apiSection) => {
//     return apiSection.name.toLowerCase() === apiName.toLowerCase();
//   });

//   if (foundSection) {
//     const sectionName = Object.keys(foundSection.data).find(
//       (key) => key.toLowerCase() === title.toLowerCase()
//     );
//     const routeName = `${foundSection.name}/${sectionName}`.replace(
//       /\s+/g,
//       "_"
//     );
//     router.push(`#/${routeName}`, undefined, { shallow: true });
//   }
//   document.getElementById(title)?.scrollIntoView({ behavior: "smooth" });
//   setIsNavigating(false);
// };
