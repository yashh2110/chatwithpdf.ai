import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

function FeatureCard({ item }) {
  return (
    <Box
      position={"relative"}
      width={["85%", "300px"]}
      //   height={"48dvh"}
      //   minH={["auto", "auto", "57vh"]}
      margin={"15px"}
      boxShadow={"sm"}
      borderRadius={"10px"}
      display={"flex"}
      alignItems={"center"}
      textAlign={"center"}
      flexDirection={"column"}
      padding={"25px"}
      backgroundColor={"var(--white)"}
    >
      <Box position="relative" my={4}>
        <Image src={item.img} alt="cd icon" />
      </Box>
      <Text
        width="95%"
        fontWeight="bold"
        fontSize={["16px", "16px", "20px"]}
        mt={2}
      >
        {item.title}
      </Text>
      <Text
        width={["95%"]}
        fontSize={["14px", "14px", "16px"]}
        letterSpacing={["0.4px"]}
        mt={["10px"]}
        mb={6}
      >
        {item.desc}
      </Text>
    </Box>
  );
}

export default FeatureCard;
