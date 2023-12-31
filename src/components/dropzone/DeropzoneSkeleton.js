import { Box, Skeleton } from "@chakra-ui/react";
import React from "react";

function DeropzoneSkeleton() {
  return (
    <Box pb={10} pt={5}>
      <Skeleton w={"100%"} h={"80px"} count={1} baseColor="#fffffc" />
      <Skeleton my={5} count={1} w={"100%"} h={"30px"} baseColor="#fffffc" />
    </Box>
  );
}

export default DeropzoneSkeleton;
