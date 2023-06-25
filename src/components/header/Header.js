import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import ai from "../../assets/svg/ai_icon.svg";
import styles from "./header.module.css";
import Link from "next/link";

import { Icon } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
function Header({ logo, menu }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      pb={5}
      px={["20px", "40px", "40px", 130]}
      gap={3}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box w={["170px", "180px"]}>
        <Link href={"/"}>
          <Image src={logo} alt="paraphasingtool.app" />
        </Link>
      </Box>
    </Box>
  );
}

export default Header;
