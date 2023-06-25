import Head from "next/head";

import {
  Box,
  Button,
  Heading,
  Icon,
  IconButton,
  Input,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Faq from "@/components/faq/Faq";
import SeoTable from "@/components/seo/SeoTable";
import ContentBlock from "@/components/content-block/ContentBlock";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
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
} from "react-icons/ai";
import {
  chatService,
  getSummaryService,
  uploadFileService,
} from "@/services/apis";
import Image from "next/image";
import { toast } from "react-hot-toast";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const Dropzone = dynamic(() => import("@/components/dropzone/Dropzone"), {
  ssr: false,
});

export default function Home() {
  const [fileId, setFileId] = useState(null);
  const [selectedFile, setSelectedFile] = useState();
  const [pdfData, setPdfData] = useState(null);
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [zoom, setZoom] = useState(600);
  const [loading, setLoading] = useState(false);
  const [convo, setConvo] = useState([]);
  const [question, setQuestion] = useState(null);
  const chatRef = useRef(null);
  const [messageLoading, setMessageLoading] = useState(false);
  console.log(pdfData);

  const handleDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const uploadFile = async () => {
    try {
      setLoading(true);
      if (selectedFile) {
        const fileURL = URL.createObjectURL(selectedFile);
        setPdfData(fileURL);
      }
      const { data } = await uploadFileService(selectedFile);
      console.log(data);
      await getSummary(data?.file_id);
      setFileId(data?.file_id);
      toast.success("Yay 🎉. Get started with your questions");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("something went wrong, please try again!");
      console.log(error);
    }
  };

  const getSummary = async (file_id) => {
    try {
      const { data } = await getSummaryService(file_id);
      const rawMessage = data?.message;
      const splitMessage = rawMessage.split("\n\n");
      const message = splitMessage[0];
      const examples = splitMessage[1]
        ?.split("\n")
        ?.map((item) => ({
          message: item?.split(". ")[1],
          role: "admin",
          type: "link",
          action: "example",
        }))
        .toReversed();
      setConvo((e) => [
        ...examples,
        { message: "Try out these below questions:", role: "admin" },
        { message, role: "admin" },
        ...e,
      ]);
    } catch (error) {
      console.log(error);
      toast.error("something went wrong, please try again!");
      setLoading(false);
    }
  };

  const sendMessage = async (chat = question) => {
    try {
      setConvo((e) => [{ message: chat, role: "user" }, ...e]);
      // scrollToTop(chatRef);
      setMessageLoading(true);
      setQuestion("");
      const { data } = await chatService(chat, fileId);
      setConvo((e) => [{ message: data?.message, role: "admin" }, ...e]);
      // scrollToTop(chatRef);
      setMessageLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("something went wrong, please try again!");
      setMessageLoading(false);
    }
  };

  const deleteTheChat = async () => {
    setConvo([]);
    setMessageLoading(true);
    await getSummary(fileId);
    setMessageLoading(false);
  };

  const scrollToTop = (ref) => {
    ref.current.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {});

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
        {fileId ? (
          <Box
            // mb={10}
            // mt={5}
            display={"flex"}
            flexWrap={["wrap-reverse", "wrap-reverse", "nowrap"]}
            rounded={5}
            overflow={"hidden"}
            boxShadow={"lg"}
          >
            <Box
              w={["100%", "100%", "50%"]}
              h={["100vh"]}
              display={"flex"}
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
                  <Text fontWeight="600" mr={2}>
                    PDF preview
                  </Text>
                </Box>
                <Box display="flex" alignItems="center">
                  <Button
                    mr={3}
                    backgroundColor="var(--primary-color)"
                    spinnerPlacement="start"
                    color={"var(--white)"}
                    onClick={() => {
                      setFileId(null);
                      setNumPages(0);
                      setPageNumber(1);
                      setPdfData(null);
                      setSelectedFile(null);
                      setConvo([]);
                      setQuestion("");
                      setZoom(600);
                    }}
                    _hover={{
                      backgroundColor: "var(--hover-color)",
                    }}
                    _active={{
                      transform: "scale(0.98)",
                    }}
                  >
                    New Pdf
                  </Button>
                  <IconButton
                    variant={"ghost"}
                    onClick={() => {
                      if (zoom <= 750) setZoom((i) => i + 50);
                    }}
                    icon={<Icon as={AiOutlineZoomIn} boxSize={5} />}
                  />
                  <IconButton
                    variant={"ghost"}
                    // onClick={handleCopy}
                    onClick={() => {
                      if (zoom >= 450) setZoom((i) => i - 50);
                    }}
                    icon={<Icon as={AiOutlineZoomOut} boxSize={5} />}
                  />
                </Box>
              </Box>
              <Box
                overflow={"auto"}
                width={"100%"}
                display={"flex"}
                justifyContent={"center"}
              >
                <Document
                  file={pdfData}
                  onLoadSuccess={handleDocumentLoadSuccess}
                >
                  <Page
                    pageNumber={pageNumber}
                    width={zoom}
                    renderTextLayer={false}
                  />
                </Document>
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
                <IconButton
                  variant={"ghost"}
                  onClick={() => {
                    if (pageNumber - 1 >= 1) setPageNumber((i) => i - 1);
                  }}
                  isDisabled={pageNumber === 1}
                  icon={<Icon as={AiOutlineLeft} boxSize={5} />}
                />
                <Text fontSize={"16px"} px={"10px"}>
                  {pageNumber}/{numPages}
                </Text>
                <IconButton
                  variant={"ghost"}
                  isDisabled={pageNumber === numPages}
                  onClick={() => {
                    if (pageNumber + 1 <= numPages) setPageNumber((i) => i + 1);
                  }}
                  icon={<Icon as={AiOutlineRight} boxSize={5} />}
                />
              </Box>
            </Box>
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
                <Box width={["150px"]}>
                  <Image src={logo} alt="paraphasingtool.app" />
                </Box>
                <Box display={"flex"} flexWrap={"nowrap"} alignItems={"center"}>
                  <Button
                    mr={3}
                    backgroundColor="var(--primary-color)"
                    spinnerPlacement="start"
                    hideFrom={"md"}
                    color={"var(--white)"}
                    onClick={() => {
                      setFileId(null);
                      setNumPages(0);
                      setPageNumber(1);
                      setPdfData(null);
                      setSelectedFile(null);
                      setConvo([]);
                      setQuestion("");
                      setZoom(600);
                    }}
                    _hover={{
                      backgroundColor: "var(--hover-color)",
                    }}
                    _active={{
                      transform: "scale(0.98)",
                    }}
                  >
                    New Pdf
                  </Button>
                  <IconButton
                    variant={"ghost"}
                    mr={2}
                    onClick={deleteTheChat}
                    icon={<Icon as={AiOutlineDelete} boxSize={5} />}
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
                  {convo?.map((item) => (
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
                          if (
                            item.type === "link" &&
                            item.action === "example"
                          ) {
                            scrollToTop(chatRef);
                            sendMessage(item.message);
                          }
                        }}
                      >
                        {item.message}
                      </Text>
                    </Box>
                  ))}
                </Box>
                <Box
                  position={"absolute"}
                  width={"90%"}
                  bottom={"5vh"}
                  left={"5%"}
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
                    isDisabled={!question}
                    onClick={() => {
                      sendMessage(question);
                    }}
                    variant={"ghost"}
                    icon={<Icon as={AiOutlineSend} boxSize={5} />}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        ) : (
          <Box
            mt={["15px", "25px"]}
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
          >
            <Box w={["90%", "90%", "81%"]}>
              <Header logo={logo} />
              {/* <Playground /> */}

              <Dropzone
                setSelectedFile={setSelectedFile}
                selectedFile={selectedFile}
                uploadFile={uploadFile}
                loading={loading}
              />
            </Box>
            <ContentBlock
              theme="secondary"
              titleFormat="h1"
              titleFontSize={["32px"]}
              title={"Free Online Paraphrasing Tool"}
              content={[
                "Paraphrasing Tool addresses and simplifies your message. As writing deman standards continue to evolve in the digital landscape, there is an escalating need for practical solutions. At Paraphrasing Tool, we aim to radically revolutionize your writing experience by helping you transform the text into clear, compelling, and 100% original content",
                "Creating unique and engaging content is vital to carve out a niche in the crowded digital space. Our tool is designed to make this task less overwhelming, allowing you to focus on what truly matters—delivering value through your content.",
              ]}
            />
            <SeoTable />
            <ContentBlock
              theme="secondary"
              titleFormat="h2"
              titleFontSize={["28px"]}
              titleLineHeight={"42px"}
              title={"No Word Limit: Embrace the Freedom of Expression"}
              content={[
                "Unlike other tools that restrict the volume of words you can paraphrase at once, our tool values your freedom of expression. It invites you to paraphrase a sentence, a paragraph, or an entire article without constraints. This liberating feature allows you to work without limitations, enhancing your productivity.",
              ]}
            />
            <ContentBlock
              // theme="secondary"
              titleFormat="h2"
              titleFontSize={["28px"]}
              titleLineHeight={"42px"}
              title={"AI-Powered: Harness the Power of Advanced Technology"}
              content={[
                "Our paraphrasing tool is powered by cutting-edge AI technology. This isn't a basic word replacement tool—it comprehends the context of your text and rewrites it while maintaining the essence and context. This level of sophistication ensures your content is not just unique but also meaningful and coherent.",
              ]}
            />
            <ContentBlock
              theme="secondary"
              titleFormat="h2"
              titleFontSize={["28px"]}
              titleLineHeight={"42px"}
              title={"Plagiarism-Free: Maintain Your Credibility"}
              content={[
                "Our tool assists you in generating unique content that effortlessly passes plagiarism checks. This crucial feature allows you to uphold your credibility, an essential factor in building trust with your audience.",
              ]}
            />
            <ContentBlock
              // theme="secondary"
              titleFormat="h2"
              titleFontSize={["28px"]}
              titleLineHeight={"42px"}
              title={
                "User-Friendly Interface: Simplicity is the Ultimate Sophistication"
              }
              content={[
                "Our tool's design hinges on simplicity. It doesn't require special skills to navigate. It's as easy as pasting your text, clicking 'Paraphrase,' and letting our AI do the rest. This simplicity ensures a seamless user experience, making the process of creating unique content enjoyable.",
              ]}
            />

            <ContentBlock
              theme="secondary"
              titleFormat="h2"
              titleFontSize={["28px"]}
              titleLineHeight={"42px"}
              title={"Free to Use: Quality Doesn't Have to Be Expensive"}
              content={[
                "Yes, it's true! Our tool is absolutely free to use.",
                "We firmly believe in democratizing access to quality paraphrasing tools. We don't want your budget to stand in the way of your ability to produce high-quality, unique content.",
              ]}
            />
            <ContentBlock
              // theme="secondary"
              titleFormat="h2"
              titleFontSize={["28px"]}
              titleLineHeight={"42px"}
              title={"How Paraphrasing Tool Works?"}
              content={[
                "Utilizing our paraphrasing tool is a cakewalk. Here's a detailed breakdown of the three steps involved:",
              ]}
              listItems={[
                <p>
                  <b>Enter Your Text:</b> Copy and paste your chosen text into
                  our paraphrasing tool. It could be a single sentence or
                  multiple paragraphs. Our tool is designed to handle it all.
                </p>,
                <p>
                  <b>Choose Your Preferred Paraphrasing Mode:</b> We understand
                  that not all texts require the same level of paraphrasing.
                  Therefore, we provide different paraphrasing modes (Standard,
                  Simplify, Formal, Summarise) that you can pick from, depending
                  on your specific needs.
                </p>,
                <p>
                  <b>Hit 'Paraphrase':</b> Once you've set your preferences, all
                  that's left is to click 'Paraphrase'. Our advanced AI will
                  swiftly kick into action, analysing your text and generating a
                  unique, high-quality version. The output isn't a random
                  replacement of words but a well-composed piece that maintains
                  the context and meaning of your original text.
                </p>,
              ]}
            />

            {/* <Testimonials /> */}
            <ContentBlock
              theme="secondary"
              titleFormat="h2"
              titleFontSize={["28px"]}
              titleLineHeight={"42px"}
              title={"A Tool for All: Catering to a Wide User Spectrum"}
              content={[
                "Our Free Online Paraphraser is designed with a diverse user base in mind, accommodating the unique needs of:",
              ]}
              listItems={[
                <p>
                  <b>Students:</b> Whether you're crafting an argumentative
                  essay or a detailed research paper, our tool can help you
                  paraphrase your text to avoid plagiarism and improve your
                  writing. It allows you to express your ideas in a new light,
                  adding depth to your academic papers.
                </p>,
                <p>
                  <b>Researchers:</b> Our tool serves as a valuable companion in
                  decoding and paraphrasing complex scientific text, making it
                  more understandable and engaging. This helps in effectively
                  communicating intricate research findings to a broader
                  audience.
                </p>,
                <p>
                  <b>Content Writers and Copywriters:</b> Facing writer's block?
                  Need to freshen up your content? Our tool can help you
                  overcome these challenges, help you bring fresh perspectives
                  to your content, and keep it exciting and engaging for your
                  readers.
                </p>,
                <p>
                  <b>Digital Marketers:</b> Our tool aids you in creating unique
                  and engaging content for your marketing campaigns. Our tool
                  ensures that your brand's message stands out in the crowded
                  digital marketplace.
                </p>,
                <p>
                  <b>Bloggers:</b> As a blogger, you must constantly churn out
                  fresh and unique content to keep your readers hooked. Our
                  paraphrasing tool can aid in this process, helping you
                  maintain reader interest and engagement.
                </p>,
              ]}
            />
            <Faq />
            <ContentBlock
              theme="secondary"
              titleFormat="h2"
              titleFontSize={["28px"]}
              titleLineHeight={"42px"}
              title={"We're Here to Assist You"}
              content={[
                "Feel free to reach out to us with any queries, comments, or feedback. Your thoughts are valuable to us, and we would love to hear from you. We're committed to helping you revolutionize your writing experience.",
              ]}
            />
          </Box>
        )}
      </main>
    </>
  );
}
