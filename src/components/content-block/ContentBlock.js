import { Box, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";

function ContentBlock({
  title,
  content,
  theme,
  titleFormat,
  titleFontSize,
  titleLineHeight,
  titleWeight,
  listItems,
  py,
  pb,
}) {
  return (
    <Box
      //   minH="60vh"
      backgroundColor={
        theme !== "secondary"
          ? "var(--primary-background-color)"
          : "var(--secondary-background-color)"
      }
      display="flex"
      justifyContent="center"
      alignItems="center"
      //   flexDirection={"row"}
      w={"100vw"}
      flexWrap={"wrap"}
      py={py || 10}
      pb={pb}
    >
      <Box position={"relative"} w={["90%", "90%", "81%"]}>
        <Box w={["100%", "100%", "80%"]}>
          <Heading
            as={titleFormat}
            fontSize={titleFontSize || ["32px"]}
            fontWeight={titleWeight || "semibold"}
            lineHeight={titleLineHeight || "48px"}
            textAlign={["center", "center", "left"]}
            letterSpacing={"0.01em"}
          >
            {title}
          </Heading>
          {content?.map((item, i) => (
            <Text
              key={i.toString()}
              mt={"20px"}
              textAlign={["center", "center", "left"]}
              fontSize={"17px"}
              letterSpacing={"0.01em"}
              lineHeight={"27px"}
            >
              {item}
            </Text>
          ))}
          <UnorderedList mt={"20px"}>
            {listItems?.map((item, i) => (
              <ListItem
                key={i.toString()}
                mb={"15px"}
                fontSize={"17px"}
                letterSpacing={"0.01em"}
                lineHeight={"27px"}
              >
                {item}
              </ListItem>
            ))}
          </UnorderedList>
        </Box>
      </Box>
    </Box>
  );
}

export default ContentBlock;
