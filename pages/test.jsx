// import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
// import stackoverflowLight from "react-syntax-highlighter/dist/cjs/styles/hljs/stackoverflow-light";

 {/*
  <Tabs>
        <TabList>
          <Tab>CURL</Tab>
          <Tab>PHP</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <SyntaxHighlighter
              customStyle={{
                height: "100%",
                width: "100%",
                backgroundColor:
                  colorMode == "dark" ? "RGBA(0, 0, 0, 0.04)" : "#F7FAFC",
              }}
              language="applescript"
              style={colorMode == "dark" ? okaidia : atomOneLight}
              wrapLongLines
            >
              {jsonCode}
            </SyntaxHighlighter>
          </TabPanel>
          <TabPanel>
            <SyntaxHighlighter
              customStyle={{
                height: "100%",
                width: "100%",
                backgroundColor:
                  colorMode == "dark" ? "RGBA(0, 0, 0, 0.04)" : "#F7FAFC",
                border: "none",
                boxShadow: "none",
              }}
              language="applescript"
              style={colorMode == "dark" ? okaidia : stackoverflowLight}
              wrapLongLines
            >
              {Pjsondata}
            </SyntaxHighlighter>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Code w="24">Responses:</Code>

      <Tabs>
        <TabList>
          <Tab>CURL</Tab>
          <Tab>PHP</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <SyntaxHighlighter
              customStyle={{
                height: "100%",
                width: "100%",
                backgroundColor:
                  colorMode == "dark" ? "RGBA(0, 0, 0, 0.04)" : "#F7FAFC",
              }}
              language="applescript"
              style={colorMode == "dark" ? okaidia : atomOneLight}
              wrapLongLines
            >
              {response}
            </SyntaxHighlighter>
          </TabPanel>
          <TabPanel>
            <SyntaxHighlighter
              customStyle={{
                height: "100%",
                width: "100%",
                backgroundColor:
                  colorMode == "dark" ? "RGBA(0, 0, 0, 0.04)" : "#F7FAFC",
                border: "none",
                boxShadow: "none",
              }}
              language="applescript"
              style={colorMode == "dark" ? okaidia : stackoverflowLight}
              wrapLongLines
            >
              {Presponse}
            </SyntaxHighlighter>
          </TabPanel>
        </TabPanels>
      </Tabs> 
      /*}
// // import React from "react";

// // // Define your data
// // const API = [{ component: "a" }, { component: "b" }, { component: "c" }];

// // const API1 = [{ component: "d" }, { component: "e" }, { component: "f" }];

// // const API2 = [{ component: "a" }, { component: "b" }, { component: "c" }];

// // const APIData = [
// //   {
// //     name: "Getting Started",
// //     data: API,
// //   },
// //   {
// //     name: "Compliance",
// //     data: [API1, API2],
// //   },
// // ];

// // // Recursive component to render the data
// // const DataItem = ({ item }) => {
// //   return (
// //     <div style={{ marginLeft: "20px" }}>
// //       <div>{item.name}</div>
// //       {Array.isArray(item.data) ? (
// //         <div>
// //           {item.data.map((api, index) => (
// //             <div key={index} style={{ marginLeft: "20px" }}>
// //               {api.map((component, idx) => (
// //                 <div key={`${index}-${idx}`} style={{ marginLeft: "20px" }}>
// //                   Component: {component.component}
// //                 </div>
// //               ))}
// //             </div>
// //           ))}
// //         </div>
// //       ) : (
// //         <div style={{ marginLeft: "20px" }}>
// //           Component: {item.data.component}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // // Main component
// // const DataList = ({ data }) => {
// //   return (
// //     <div>
// //       {data.map((item, index) => (
// //         <DataItem key={index} item={item} />
// //       ))}
// //     </div>
// //   );
// // };

// // const App = () => {
// //   return (
// //     <div>
// //       <h1>API Data Structure</h1>
// //       <DataList data={APIData} />
// //     </div>
// //   );
// // };

// // export default App;
