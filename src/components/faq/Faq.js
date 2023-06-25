import { faq } from "@/data/common";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";

function Faq() {
  return (
    <Box
      minH="60vh"
      backgroundColor="var(--primary-background-color)"
      // backgroundColor="var(--secondary-background-color)"
      display="flex"
      justifyContent="center"
      alignItems="flex-start"
      flexDirection={"row"}
      flexWrap={"wrap"}
      py={10}
    >
      <Box w={["90%", "90%", "81%"]}>
        <Heading
          as="h2"
          fontSize={["28px"]}
          fontWeight={"semibold"}
          lineHeight={"42px"}
          letterSpacing={"0.01em"}
        >
          Got Questions? We Have Answers
        </Heading>
        <Box mt="20px" py="5px">
          <Accordion allowToggle w="100vw">
            {faq.map((item) => (
              <AccordionItem
                key={item.title}
                w={["90%", "70%"]}
                mb={"15px"}
                border={"1px"}
                borderRadius={"8px"}
                borderColor={"#00000029"}
                boxShadow={"sm"}
              >
                <AccordionButton py={5}>
                  <AccordionIcon
                    color={"var(--primary-color)"}
                    w={"25px"}
                    h={"25px"}
                    mr={3}
                  />
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize={"17px"}
                    letterSpacing={"0.01em"}
                    lineHeight={"27px"}
                  >
                    {item.title}
                  </Box>
                </AccordionButton>
                <AccordionPanel
                  pb={4}
                  fontSize={"17px"}
                  letterSpacing={"0.01em"}
                  lineHeight={"27px"}
                >
                  {item.desc}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Box>
      </Box>
    </Box>
  );
}

export default Faq;
