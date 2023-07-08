import Header from "@/components/header/Header";
import { getSummaryService, uploadFileService } from "@/services/apis";
import { Box, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import logo from "@/assets/png/logo.png";
import DeropzoneSkeleton from "@/components/dropzone/DeropzoneSkeleton";
import dynamic from "next/dynamic";
import Section1 from "@/components/section1/Section1";
import Features from "@/components/features/Features";
import Testimonials from "@/components/testimonial/Testimonials";
import { features1, features2, features3 } from "@/data/common";
import Faq from "@/components/faq/Faq";
import SeoTable from "@/components/seo/SeoTable";
import ContentBlock from "@/components/content-block/ContentBlock";
import Footer from "@/components/footer/Footer";
import { useRouter } from "next/navigation";
import { createChat } from "@/redux/reducers/chat";
import Head from "next/head";

const Dropzone = dynamic(() => import("@/components/dropzone/Dropzone"), {
  ssr: false,
  loading: () => <DeropzoneSkeleton />,
});

function index() {
  const [selectedFile, setSelectedFile] = useState();
  const [pdfData, setPdfData] = useState(null);
  const [loading, setLoading] = useState(false);

  const chats = useSelector((state) => state.chat);

  const router = useRouter();
  const dispatch = useDispatch();

  const uploadFile = async (selectedFile) => {
    try {
      setLoading("processing...");
      const { data } = await uploadFileService(selectedFile);
      setLoading("Getting Your PDF ready 🎉...");
      const convo = await getSummary(data?.file_id);
      setLoading("Here you go 😎...");
      if (selectedFile) {
        const reader = new FileReader();
        reader.onloadend = async () => {
          // Convert the file to a base64 string
          const base64PDF = reader.result;

          // Store the selected PDF in local storage
          const newChat = {
            file_id: data?.file_id,
            pdf: base64PDF,
            name: selectedFile.name,
            convo,
          };
          // Dispatch the action with the selected PDF
          dispatch(createChat(newChat));
          router.push(`/chat/${data?.file_id}`);
        };
        reader.readAsDataURL(selectedFile);
      }
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
        .filter((item) => !!item.message)
        .toReversed();
      return [
        ...examples,
        { message: "Try out these below questions:", role: "admin" },
        { message, role: "admin" },
      ];
    } catch (error) {
      console.log(error);
      toast.error("something went wrong, please try again!");
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Chat with PDF</title>
        <meta
          name="description"
          content="Chat with any pdf and document with the help of AI. Understand Contracts, Agreements, Research Papers easily with the help of AI"
        />
        <meta
          name="keywords"
          content="Chat With PDF, Chat PDF, Chat with Document"
        ></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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

        <Box w={["90%", "90%", "81%"]} pt={5}>
          {Object.keys(chats)[0] && (
            <>
              <Heading
                as={"h2"}
                fontSize={["22px"]}
                fontWeight={"semibold"}
                lineHeight={"48px"}
                textAlign={["center", "center", "left"]}
                letterSpacing={"0.01em"}
                mt={0}
              >
                Previous Chats
              </Heading>
              <Box
                display={"flex"}
                justifyContent={"flex-start"}
                gap={"10px"}
                my={5}
                mt={2}
              >
                {Object.keys(chats)
                  .slice(0, 3)
                  .map((id) => (
                    <Box
                      cursor={"pointer"}
                      onClick={() => router.push(`/chat/${id}`)}
                      p={6}
                      style={{
                        background:
                          "linear-gradient(91.3deg,rgba(253, 124, 71, 0.08) 0%,rgba(235, 102, 30, 0) 30.73%, rgba(235, 102, 30, 0.04) 100%)",
                      }}
                      borderRadius={"10px"}
                      w={["100%", "50%", "33%"]}
                    >
                      <Text fontWeight={"bold"} fontSize={"16px"} noOfLines={1}>
                        {chats[id].name}
                      </Text>
                      <Text my={2} noOfLines={4}>
                        {chats[id].convo[chats[id].convo?.length - 1].message}
                      </Text>
                    </Box>
                  ))}
              </Box>
            </>
          )}
        </Box>
        <Section1
          title={"ChatWithPDF.AI: Revolutionize Your PDF Interactions"}
          paraghraph={
            "Humanize the text 'Introducing Chat PDF: revolutionizing PDF interaction. With this innovative tool, you can communicate with your digital documents. Ask questions, extract key data, and gain unprecedented insights. It's your personal PDF assistant, delivering information at your fingertips!'"
          }
        />
        <Features
          cardType="1"
          theme={"secondary"}
          data={features1}
          featureTitle={"Why Choose Chat PDF Over Others?"}
          subTitle={
            "In the digital age, numerous tools allow you to interact with PDFs. However, none offer the unique features and benefits of Chat PDF. Here's why Chat PDF stands out from the crowd:"
          }
        />

        {/* <ContentBlock
      theme="secondary"
      titleFormat="h1"
      titleFontSize={["32px"]}
      title={"Free Online Paraphrasing Tool"}
      content={[
        "Paraphrasing Tool addresses and simplifies your message. As writing deman standards continue to evolve in the digital landscape, there is an escalating need for practical solutions. At Paraphrasing Tool, we aim to radically revolutionize your writing experience by helping you transform the text into clear, compelling, and 100% original content",
        "Creating unique and engaging content is vital to carve out a niche in the crowded digital space. Our tool is designed to make this task less overwhelming, allowing you to focus on what truly matters—delivering value through your content.",
      ]}
    /> */}

        <ContentBlock
          // theme="secondary"
          titleFormat="h2"
          titleFontSize={["28px"]}
          titleLineHeight={"42px"}
          title={"Chat PDF: A Tool for Everyone"}
          content={[
            "Chat PDF is designed to cater to a wide range of users. Whether you're a researcher, dealing with business contracts, or a student, Chat PDF can help you extract valuable insights from your PDFs.",
          ]}
          listItems={[
            <p>
              <b>Students</b>
              <br /> Understanding and retaining information from textbooks and
              research papers is crucial but tedious for students. Chat PDF
              allows you to interact with your study materials, prepare notes
              efficiently, and understand the content better. Ask your PDF about
              complex concepts, definitions, or theories, and get
              easy-to-understand answers. With Chat PDF, studying becomes a
              breeze.
            </p>,
            <p>
              <b>Business Pros</b>
              <br /> Navigating business contracts can be a complex task. With
              Chat PDF, you can extract key points, simplify complex terms, and
              understand contracts better. Ask your PDF about specific clauses,
              obligations, or terms, and get clear, concise answers. With Chat
              PDF, reviewing contracts has never been easier.
            </p>,
            <p>
              <b>Researchers</b>
              <br /> As a researcher, you're often dealing with dense,
              information-packed PDFs. Chat PDF lets you quickly uncover more
              profound insights and turbocharge your research. Ask your PDF
              exact questions, extract key data, and gain insights swiftly and
              efficiently. With Chat PDF, you can focus on your research while
              we take care of the information extraction.
            </p>,
          ]}
        />

        <Testimonials />
        <Features
          cardType="2"
          data={features3}
          featureTitle={"How Does Chat PDF Work?"}
          subTitle={"Using Chat PDF is as easy as 1-2-3:"}
        />
        <Features
          cardType="1"
          theme={"secondary"}
          data={features2}
          featureTitle={"Features of Chat PDF"}
          subTitle={
            "Chat PDF is packed with unique features that make it so good. Here are some of them:"
          }
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
        <Footer />
      </Box>
    </>
  );
}

export default index;
