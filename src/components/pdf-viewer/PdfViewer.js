import { Box, Button, Icon, IconButton, Text } from "@chakra-ui/react";
import { SpecialZoomLevel, Viewer } from "@react-pdf-viewer/core";
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";
import { zoomPlugin } from "@react-pdf-viewer/zoom";
import React from "react";
import {
  AiOutlineZoomIn,
  AiOutlineZoomOut,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";
import { GrPowerReset } from "react-icons/gr";
import { RxHamburgerMenu } from "react-icons/rx";

function PdfViewer({ pdfUrl, reset, onOpen, name }) {
  const zoomPluginInstance = zoomPlugin();
  const { ZoomIn, ZoomOut, Zoom } = zoomPluginInstance;

  const pageNavigationPluginInstance = pageNavigationPlugin();
  const {
    GoToFirstPage,
    GoToLastPage,
    CurrentPageLabel,
    GoToNextPage,
    GoToPreviousPage,
    CurrentPageInput,
    jumpToPage,
  } = pageNavigationPluginInstance;

  return (
    <Box
      w={["100%", "100%", "50%"]}
      h={["100vh"]}
      display={["none", "none", "flex"]}
      flexDirection={"column"}
      alignItems={"center"}
      position={"relative"}
    >
      <Box
        display="flex"
        w={"100%"}
        alignItems="center"
        justifyContent="space-between"
        borderBottom="1px"
        borderBottomColor="#1a1a1a26"
        position={"relative"}
        py={2}
        px={4}
        mb={2}
      >
        <Box
          display="flex"
          alignItems="center"
          fontSize="14.5px"
          fontWeight="500"
        >
          <IconButton
            variant={"ghost"}
            onClick={onOpen}
            mx={2}
            icon={<Icon as={RxHamburgerMenu} boxSize={5} />}
          />
          <Text fontWeight="600" mr={2} noOfLines={1}>
            {name || "PDF preview"}
          </Text>
        </Box>
        <Box display="flex" alignItems="center">
          <Button
            mr={3}
            backgroundColor="var(--primary-color)"
            spinnerPlacement="start"
            color={"var(--white)"}
            onClick={reset}
            _hover={{
              backgroundColor: "var(--hover-color)",
            }}
            _active={{
              transform: "scale(0.98)",
            }}
          >
            New Pdf
          </Button>

          <ZoomOut>
            {(props) => (
              <IconButton
                variant={"ghost"}
                onClick={props.onClick}
                icon={<Icon as={AiOutlineZoomOut} boxSize={5} />}
              />
            )}
          </ZoomOut>
          <Zoom>
            {(props) => (
              <IconButton
                variant={"ghost"}
                onClick={() => props.onZoom(SpecialZoomLevel.PageWidth)}
                icon={<Icon as={GrPowerReset} boxSize={4} />}
              />
            )}
          </Zoom>
          <ZoomIn>
            {(props) => (
              <IconButton
                variant={"ghost"}
                onClick={props.onClick}
                icon={<Icon as={AiOutlineZoomIn} boxSize={5} />}
              />
            )}
          </ZoomIn>
        </Box>
      </Box>
      <Box
        overflow={"auto"}
        width={"100%"}
        style={{ height: "calc(100vh - 57px)" }}
        display={"flex"}
        justifyContent={"center"}
      >
        {pdfUrl ? (
          <Viewer
            fileUrl={pdfUrl}
            plugins={[pageNavigationPluginInstance, zoomPluginInstance]}
            defaultScale={SpecialZoomLevel.PageWidth}
          />
        ) : (
          <div>Loading...</div>
        )}
      </Box>
      <Box
        position={"absolute"}
        bottom={"15px"}
        // mx={"auto"}
        display={"flex"}
        zIndex={100}
        justifyContent={"center"}
        alignItems={"center"}
        borderRadius={10}
        boxShadow={"sm"}
        p={2}
        backgroundColor={"var(--primary-background-color)"}
      >
        <GoToPreviousPage>
          {(props) => (
            <IconButton
              variant={"ghost"}
              isDisabled={props.isDisabled}
              onClick={props.onClick}
              icon={<Icon as={AiOutlineLeft} boxSize={5} />}
            />
          )}
        </GoToPreviousPage>
        <Text fontSize={"16px"} px={"10px"}>
          <CurrentPageLabel>
            {(props) => (
              <span>{`${props.currentPage + 1} of ${
                props.numberOfPages
              }`}</span>
            )}
          </CurrentPageLabel>
        </Text>
        <GoToNextPage>
          {(props) => (
            <IconButton
              variant={"ghost"}
              isDisabled={props.isDisabled}
              onClick={props.onClick}
              icon={<Icon as={AiOutlineRight} boxSize={5} />}
            />
          )}
        </GoToNextPage>
      </Box>
    </Box>
  );
}

export default PdfViewer;
