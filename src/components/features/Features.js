import { Box, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

import React from "react";
import FeatureCard from "./FeatureCard";
import circle from "../../assets/svg/circle-creative.svg";
import square from "../../assets/svg/square-creative.svg";
import FeatureCard2 from "./FeatureCard2";
function Features({
  featureTitle,
  theme,
  titleFormat,
  titleFontSize,
  titleWeight,
  titleLineHeight,
  subTitle,
  py,
  pb,
  cardType,
  data,
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
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      w={"100%"}
    >
      <Box
        position={"relative"}
        w={["100%", "100%", "90%"]}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Heading
          as={titleFormat || "h1"}
          fontSize={titleFontSize || ["32px"]}
          fontWeight={titleWeight || "semibold"}
          lineHeight={titleLineHeight || "48px"}
          textAlign={["center"]}
          letterSpacing={"0.01em"}
          maxW={["90%", "70%", "60%"]}
        >
          {featureTitle}
        </Heading>

        <Text
          mt={"20px"}
          textAlign={["center"]}
          fontSize={"17px"}
          letterSpacing={"0.01em"}
          lineHeight={"27px"}
          fontWeight={500}
          maxW={["90%", "70%", "60%"]}
        >
          {subTitle}
        </Text>
        <Box
          position={"relative"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={cardType == "2" ? "flex-start" : null}
          flexWrap={"wrap"}
          alignSelf={"center"}
          mx="auto"
          my="65px"
        >
          {cardType == "2" ? null : (
            <>
              <Box
                position={"absolute"}
                zIndex={0}
                top={"-25px"}
                left={"-25px"}
                w={"100px"}
                h={"100px"}
              >
                <Image src={square} alt="cd" />
              </Box>
              <Box
                position={"absolute"}
                zIndex={0}
                right={"-25px"}
                bottom={"-25px"}
                w={"100px"}
                h={"100px"}
              >
                <Image
                  // className={styles.section_creative_circle}
                  src={circle}
                  alt="cd"
                />
              </Box>
            </>
          )}
          {data.map((e) => {
            if (cardType == "1") {
              return <FeatureCard key={e.title} item={e} />;
            } else {
              return <FeatureCard2 key={e.title} item={e} />;
            }
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default Features;
