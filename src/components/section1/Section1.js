import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import image from "../../assets/png/solution_img.png";
import circle from "../../assets/svg/circle-creative.svg";
import square from "../../assets/svg/square-creative.svg";
import { Box, Heading, Text } from "@chakra-ui/react";

function Section1({
  theme,
  py,
  pb,
  title,
  titleFormat,
  titleFontSize,
  titleWeight,
  titleLineHeight,
  paraghraph,
}) {
  return (
    <Box
      backgroundColor={
        theme !== "secondary"
          ? "var(--primary-background-color)"
          : "var(--secondary-background-color)"
      }
      py={py || 10}
      pb={pb}
    >
      <Box
        position={"relative"}
        w={["100%", "100%", "100%"]}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexWrap={"wrap"}
      >
        <Box
          position={"relative"}
          width={["95%", "95%", "40%"]}
          // height={"65vh"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          my={"40px"}
        >
          <Box
            position={"absolute"}
            zIndex={0}
            top={"-40px"}
            left={"10px"}
            w={"100px"}
            h={"100px"}
          >
            <Image src={square} alt="cd" />
          </Box>
          <Box
            position={"absolute"}
            zIndex={0}
            right={"10px"}
            bottom={"-40px"}
            w={"100px"}
            h={"100px"}
          >
            <Image
              // className={styles.section_creative_circle}
              src={circle}
              alt="cd"
            />
          </Box>
          <Box width={"80%"} zIndex={2}>
            <Image
              style={{ objectFit: "cover" }}
              src={image}
              alt="contentdetector.ai"
            />
          </Box>
        </Box>
        <Box width={["100%", "100%", "40%"]} mx={"20px"} my={5}>
          <Heading
            as={titleFormat || "h1"}
            fontSize={titleFontSize || ["32px"]}
            fontWeight={titleWeight || "semibold"}
            lineHeight={titleLineHeight || "48px"}
            textAlign={["center", "center", "left"]}
            letterSpacing={"0.01em"}
          >
            {title}
          </Heading>
          <Text
            mt={"20px"}
            textAlign={["center", "center", "left"]}
            fontSize={"17px"}
            letterSpacing={"0.01em"}
            lineHeight={"27px"}
          >
            {paraghraph}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default Section1;
