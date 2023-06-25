import { Box, Skeleton } from "@chakra-ui/react";
import React from "react";

function HeaderSkeleton() {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      py={5}
    >
      <Skeleton
        w={["50%", "50%", "30%"]}
        h={"80px"}
        count={1}
        baseColor="#fffefc"
      />
    </Box>
  );
}

export default HeaderSkeleton;
