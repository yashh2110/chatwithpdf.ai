import {
  Box,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { LineWeight } from "@mui/icons-material";
import React from "react";

function SeoTable() {
  return (
    <Box
      //   minH="60vh"
      backgroundColor="var(--primary-background-color)"
      display="flex"
      justifyContent="center"
      alignItems="center"
      //   flexDirection={"row"}
      w={"100vw"}
      flexWrap={"wrap"}
      py={10}
    >
      <Box position={"relative"} w={["90%", "90%", "81%"]}>
        <Heading
          as="h2"
          fontSize={["28px"]}
          fontWeight={"semibold"}
          lineHeight={"42px"}
          letterSpacing={"0.01em"}
          textAlign={["center", "center", "left"]}
        >
          Why Paraphrasing Tool
        </Heading>
        <TableContainer w={["100%", "100%", "60%"]} mt="20px">
          <Table variant="simple">
            {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}

            <Tbody>
              <Tr w={["50vw", "50%", "auto"]}>
                <Td
                  border={"1px"}
                  borderColor={"var(--border-color)"}
                  fontSize={"17px"}
                  letterSpacing={"0.01em"}
                  lineHeight={"27px"}
                >
                  🔁 No Limits
                </Td>
                <Td
                  border={"1px"}
                  borderColor={"var(--border-color)"}
                  fontSize={"17px"}
                  letterSpacing={"0.01em"}
                  lineHeight={"27px"}
                >
                  Unlimited Usage with no limitations
                </Td>
              </Tr>
              <Tr>
                <Td
                  border={"1px"}
                  borderColor={"var(--border-color)"}
                  fontSize={"17px"}
                  letterSpacing={"0.01em"}
                  lineHeight={"27px"}
                >
                  🔤 Instant Paraphrase
                </Td>
                <Td
                  border={"1px"}
                  borderColor={"var(--border-color)"}
                  fontSize={"17px"}
                  letterSpacing={"0.01em"}
                  lineHeight={"27px"}
                >
                  Paraphrase your text instantly
                </Td>
              </Tr>
              <Tr>
                <Td
                  border={"1px"}
                  borderColor={"var(--border-color)"}
                  fontSize={"17px"}
                  letterSpacing={"0.01em"}
                  lineHeight={"27px"}
                >
                  👤 No Login
                </Td>
                <Td
                  border={"1px"}
                  borderColor={"var(--border-color)"}
                  fontSize={"17px"}
                  letterSpacing={"0.01em"}
                  lineHeight={"27px"}
                >
                  No Registration or Signup required
                </Td>
              </Tr>
              <Tr>
                <Td
                  border={"1px"}
                  borderColor={"var(--border-color)"}
                  fontSize={"17px"}
                  letterSpacing={"0.01em"}
                  lineHeight={"27px"}
                >
                  🆓 100% Free
                </Td>
                <Td
                  border={"1px"}
                  borderColor={"var(--border-color)"}
                  fontSize={"17px"}
                  letterSpacing={"0.01em"}
                  lineHeight={"27px"}
                >
                  Free and no payment required
                </Td>
              </Tr>
            </Tbody>
            {/* <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot> */}
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default SeoTable;
