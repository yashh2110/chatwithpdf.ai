import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

function FeatureCard2({ item }) {
  return (
    <Box
      position={"relative"}
      width={["85%", "30%"]}
      //   height={"48dvh"}
      //   minH={["auto", "auto", "57vh"]}
      margin={"15px"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      textAlign={"center"}
      px={"10px"}
      gap={"30px"}
    >
      <Box position="relative" w={"15%"}>
        <Text
          fontSize={"5rem"}
          fontWeight={"extrabold"}
          color="var(--primary-color)"
        >
          {item.id}
        </Text>
      </Box>
      <Box w={["85%"]}>
        <Text
          width="95%"
          fontWeight="bold"
          fontSize={["16px", "16px", "20px"]}
          align={"left"}
        >
          {item.title}
        </Text>
        <Text
          width={["95%"]}
          fontSize={["14px", "14px", "16px"]}
          letterSpacing={["0.4px"]}
          mt={["10px"]}
          align={"left"}
        >
          {item.desc}
        </Text>
      </Box>
    </Box>
  );
}

export default FeatureCard2;
