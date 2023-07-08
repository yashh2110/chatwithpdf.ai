import Head from "next/head";

import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  Icon,
  IconButton,
  Input,
  Skeleton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Faq from "@/components/faq/Faq";
import SeoTable from "@/components/seo/SeoTable";
import ContentBlock from "@/components/content-block/ContentBlock";
import Footer from "@/components/footer/Footer";
import {
  pageNavigationPlugin,
  DownArrowIcon,
  NextIcon,
  PreviousIcon,
  UpArrowIcon,
} from "@react-pdf-viewer/page-navigation";
import logo from "@/assets/png/logo.png";
import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import {
  AiOutlineShareAlt,
  AiOutlineCopy,
  AiOutlineDelete,
  AiOutlineZoomIn,
  AiOutlineZoomOut,
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineSend,
  AiOutlinePlus,
} from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";

import { GrPowerReset } from "react-icons/gr";
import { BsChatLeftText } from "react-icons/bs";

import {
  chatService,
  getSummaryService,
  uploadFileService,
} from "@/services/apis";
import Image from "next/image";
import { toast } from "react-hot-toast";
import DeropzoneSkeleton from "@/components/dropzone/DeropzoneSkeleton";
import HeaderSkeleton from "@/components/header/HeaderSkeleton";
import Section1 from "@/components/section1/Section1";
import Features from "@/components/features/Features";
import Testimonials from "@/components/testimonial/Testimonials";
import { features1, features2, features3 } from "@/data/common";
import { useDispatch, useSelector } from "react-redux";
import { createChat, deleteChat, sendMessage } from "@/redux/reducers/chat";
import { SpecialZoomLevel, Viewer } from "@react-pdf-viewer/core";
import { zoomPlugin } from "@react-pdf-viewer/zoom";
import PdfViewer from "@/components/pdf-viewer/PdfViewer";
import { useRouter } from "next/navigation";
import Alert from "@/components/common/Alert";

const Dropzone = dynamic(() => import("@/components/dropzone/Dropzone"), {
  ssr: false,
  loading: () => <DeropzoneSkeleton />,
});

const Header = dynamic(() => import("@/components/header/Header"), {
  ssr: false,
  loading: () => <HeaderSkeleton />,
});

export async function getServerSideProps(ctx) {
  const { id } = ctx.query;

  return {
    props: {
      id,
    },
  };
}

export default function Chat({ id }) {
  const [fileId, setFileId] = useState(id);
  const [selectedFile, setSelectedFile] = useState();
  const [pdfData, setPdfData] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);
  const [zoom, setZoom] = useState("100%");
  const [convo, setConvo] = useState([]);
  const [question, setQuestion] = useState(null);
  const chatRef = useRef(null);
  const router = useRouter();

  const chats = useSelector((state) => state.chat);
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [messageLoading, setMessageLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const sendMessageToChat = async (chat = question) => {
    try {
      const file_id = id;

      dispatch(
        sendMessage({ file_id, messageObj: { message: chat, role: "user" } })
      );
      // scrollToTop(chatRef);
      setMessageLoading(true);
      setQuestion("");
      const { data } = await chatService(chat, fileId);
      const messageObj = { message: data?.message, role: "admin" };
      dispatch(sendMessage({ file_id, messageObj }));
      // scrollToTop(chatRef);
      setMessageLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("something went wrong, please try again!");
      setMessageLoading(false);
    }
  };

  const deleteTheChat = async () => {
    setMessageLoading(true);
    dispatch(deleteChat({ file_id: fileId }));
    setFileId(null);
    setPdfUrl(null);
    setMessageLoading(false);
  };

  const scrollToTop = (ref) => {
    ref.current.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  const extractBase64Data = (base64String) => {
    const base64Data = base64String.split(",")[1];
    return atob(base64Data);
  };

  const createBlobFromBase64 = (base64Data) => {
    const byteCharacters = Array.from(base64Data).map((char) =>
      char.charCodeAt(0)
    );
    const byteArray = new Uint8Array(byteCharacters);
    return new Blob([byteArray], { type: "application/pdf" });
  };

  const getPdfUrl = (base64String) => {
    const base64Data = extractBase64Data(base64String);
    const blob = createBlobFromBase64(base64Data);
    const url = URL.createObjectURL(blob);
    setPdfUrl(url);
  };

  const reset = () => {
    router.push("/");
  };

  useEffect(() => {
    console.log(fileId);
    if (fileId && chats[fileId]?.pdf) {
      console.log(chats[fileId]?.pdf);
      getPdfUrl(chats[fileId]?.pdf);
    } else {
      console.log(Object.keys(chats)[0]);
      if (Object.keys(chats)[0]) {
        router.push(`/chat/${Object.keys(chats)[0]}`);
        setFileId(Object.keys(chats)[0]?.fileId);
      } else {
        router.push(`/`);
      }
    }
  }, [fileId]);

  useEffect(() => {
    if (id) {
      setFileId(id);
      onClose();
    }
  }, [id]);

  return (
    <>
      <Head>
        <title>Paraphrasing Tool - Online Paraphraser</title>
        <meta
          name="description"
          content="Free online paraphrasing tool that helps in Paraphrasing. "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          // finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            {/* <DrawerCloseButton /> */}
            {/* <DrawerHeader> */}

            {/* </DrawerHeader> */}

            <DrawerBody mt={3}>
              <Button
                mr={3}
                mb={2}
                backgroundColor="var(--primary-color)"
                spinnerPlacement="start"
                // hideFrom={"md"}
                w={"95%"}
                h={"60px"}
                color={"var(--white)"}
                onClick={reset}
                _hover={{
                  backgroundColor: "var(--hover-color)",
                }}
                _active={{
                  transform: "scale(0.98)",
                }}
              >
                <Icon as={AiOutlinePlus} boxSize={5} mr={3} />
                New Pdf
              </Button>

              {Object.keys(chats).map((i) => {
                return (
                  <Button
                    w={"95%"}
                    h={"55px"}
                    mt={2}
                    bg={fileId === i ? "ButtonFace" : ""}
                    borderColor="ButtonFace"
                    borderWidth={2}
                    onClick={() => router.push(`/chat/${i}`)}
                  >
                    <Icon as={BsChatLeftText} mr={3} />
                    <Text noOfLines={1} fontWeight={"medium"}>
                      {chats[i].name}
                    </Text>
                  </Button>
                );
              })}
            </DrawerBody>

            <DrawerFooter></DrawerFooter>
          </DrawerContent>
        </Drawer>
        <Box
          // mb={10}
          // mt={5}
          display={"flex"}
          flexWrap={["wrap-reverse", "wrap-reverse", "nowrap"]}
          rounded={5}
          overflow={"hidden"}
          boxShadow={"lg"}
        >
          <PdfViewer
            pdfUrl={pdfUrl}
            reset={reset}
            onOpen={onOpen}
            name={chats[fileId]?.name}
          />
          <Box
            w={["100%", "100%", "50%"]}
            h={["100vh"]}
            backgroundColor={"var(--secondary-background-color)"}
            borderLeft="1px"
            borderLeftColor="#1a1a1a26"
            position={"relative"}
          >
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              width={"100%"}
              h={"57px"}
              left={0}
              borderBottom="1px"
              borderBottomColor="#1a1a1a26"
              py={2}
              px={4}
              backgroundColor={"var(--primary-background-color)"}
            >
              <IconButton
                variant={"ghost"}
                onClick={onOpen}
                hideFrom={"md"}
                mx={2}
                icon={<Icon as={RxHamburgerMenu} boxSize={5} />}
              />
              <Box width={["150px"]}>
                <Image src={logo} alt="paraphasingtool.app" />
              </Box>
              <Box display={"flex"} flexWrap={"nowrap"} alignItems={"center"}>
                {/* <Button
                  mr={3}
                  backgroundColor="var(--primary-color)"
                  spinnerPlacement="start"
                  hideFrom={"md"}
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
                </Button> */}
                <Alert
                  button={(onClick) => (
                    <IconButton
                      onClick={onClick}
                      variant={"ghost"}
                      mr={2}
                      icon={<Icon as={AiOutlineDelete} boxSize={5} />}
                    />
                  )}
                  title={`💬 Delete Chat!`}
                  description={"Are you sure you want to delete this chat?"}
                  onClick={deleteTheChat}
                />
              </Box>
            </Box>
            <Box w={"100%"}>
              <Box
                ref={chatRef}
                position={"relative"}
                width={["100%"]}
                flexDirection={"column-reverse"}
                display={"flex"}
                overflow={"auto"}
                style={{ height: "calc(100vh - 57px - 50px - 6vh)" }}
                pb={"5vh"}
                pt={2}
                px={"5%"}
              >
                {messageLoading && (
                  <Text
                    maxW={["40%", "40%", "20%"]}
                    p={2}
                    px={4}
                    my={2}
                    boxShadow={"sm"}
                    borderRadius={"10px"}
                    backgroundColor={"var(--white)"}
                  >
                    Typing...
                  </Text>
                )}
                {chats[fileId]?.convo?.map((item) => (
                  <Box
                    maxW={["80%", "80%", "70%"]}
                    p={4}
                    my={1}
                    boxShadow={"sm"}
                    borderRadius={"10px"}
                    ml={item.role === "user" ? "auto" : 0}
                    backgroundColor={
                      item.role === "admin" ? "var(--white)" : "#FFF5F1"
                    }
                  >
                    <Text
                      color={
                        item.type === "link" ? "#146AE2" : "var(--text-color)"
                      }
                      cursor={item.type === "link" && "pointer"}
                      onClick={() => {
                        if (item.type === "link" && item.action === "example") {
                          // scrollToTop(chatRef);
                          sendMessageToChat(item.message);
                        }
                      }}
                    >
                      {item.message}
                    </Text>
                  </Box>
                ))}
              </Box>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessageToChat(question);
                }}
              >
                <Box
                  position={"absolute"}
                  width={"90%"}
                  bottom={"5vh"}
                  left={"5%"}
                  borderRadius={"7px"}
                  mx={"auto"}
                  backgroundColor={"var(--primary-background-color)"}
                  boxShadow={"lg"}
                >
                  <Input
                    height={"50px"}
                    width={"85%"}
                    border="none"
                    outline={"none"}
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    backgroundColor={"var(--primary-background-color)"}
                    _focus={{ outline: "none" }}
                    placeholder="Ask any question related to this PDF.."
                  />
                  <IconButton
                    height={"50px"}
                    w={"15%"}
                    type="submit"
                    isDisabled={!question}
                    variant={"ghost"}
                    icon={<Icon as={AiOutlineSend} boxSize={5} />}
                  />
                </Box>
              </form>
            </Box>
          </Box>
        </Box>
      </main>
    </>
  );
}
