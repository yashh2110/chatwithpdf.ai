import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import upload from "@/assets/png/upload.png";
import Image from "next/image";
import { Box, Button, Input, Text } from "@chakra-ui/react";
import Link from "next/link";
import { uploadFileService } from "@/services/apis";
import { Spinner } from "@chakra-ui/react";
const getColor = (props) => {
  if (props.isDragAccept) {
    return "#00e676";
  }
  if (props.isDragReject) {
    return "#ff1744";
  }
  if (props.isFocused) {
    return "#2196f3";
  }
  return "#eeeeee";
};

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${(props) => getColor(props)};
  border-style: dashed;
  background: linear-gradient(
    91.3deg,
    rgba(253, 124, 71, 0.08) 0%,
    rgba(235, 102, 30, 0) 30.73%,
    rgba(235, 102, 30, 0.04) 100%
  );
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
`;

function Dropzone({ selectedFile, setSelectedFile, loading, uploadFile }) {
  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({
      maxFiles: 1,
      accept: { "application/pdf": [".pdf"] },
      onDrop: (acceptedFiles) => {
        console.log(acceptedFiles);
        setSelectedFile(acceptedFiles[0]);
        uploadFile(acceptedFiles[0]);
      },
    });

  return (
    <Box pb={5} pt={5}>
      <Container {...getRootProps({ isFocused, isDragAccept, isDragReject })}>
        {loading ? (
          <Box
            w={"100%"}
            h={100}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text
              fontSize={"17px"}
              fontWeight={"semibold"}
              display={"flex"}
              alignItems={"center"}
              gap={"20px"}
            >
              <Spinner color="var(--primary-color)" /> {loading}
            </Text>
          </Box>
        ) : (
          <>
            <input {...getInputProps()} />
            {selectedFile?.name ? (
              <>
                <Text fontWeight={"bold"} mb={3}>
                  Selected File
                </Text>
                <Text>{selectedFile?.name}</Text>
              </>
            ) : (
              <>
                <Box w={["80px", "90px", "100px"]} h={"auto"}>
                  <Image src={upload} alt="fu" />
                </Box>
                <Text fontWeight={"bold"} mt={3}>
                  Drop PDF here
                </Text>
              </>
            )}
            <Text
              mt={3}
              color={"#146AE2"}
              textDecoration={"underline"}
              fontWeight={"semibold"}
              cursor={"pointer"}
            >
              Browse my computer
            </Text>
          </>
        )}
      </Container>

      {/* <Box
        justifyContent={["center", "center", "space-between"]}
        display={"flex"}
        alignItems={"center"}
        flexWrap={"wrap"}
        my={3}
      >
        <Box
          w={["100%", "100%", "83%"]}
          display={"flex"}
          alignItems={"center"}
          flexWrap={"wrap"}
        >
          <Text
            w={["100%", "100%", "20%"]}
            textAlign={["center", "center", "left"]}
            my="2"
          >
            Or Add PDF using URL
          </Text>
          <Input
            w={["100%", "100%", "80%"]}
            placeholder="https://"
            h={50}
            boxShadow="sm"
            my="2"
          />
        </Box>
        <Button
          w={["50%", "50%", "15%"]}
          backgroundColor="var(--primary-color)"
          spinnerPlacement="start"
          loadingText="Loading"
          color={"var(--white)"}
          onClick={uploadFile}
          isLoading={loading}
          isDisabled={!selectedFile?.name}
          disabled={true}
          my="2"
          h={50}
          _hover={{
            backgroundColor: "var(--hover-color)",
          }}
          _active={{
            transform: "scale(0.98)",
          }}
        >
          Search
        </Button>
      </Box> */}
    </Box>
  );
}
export default Dropzone;
