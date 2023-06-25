import ContentBlock from "@/components/content-block/ContentBlock";
import Head from "next/head";
import Link from "next/link";
import React from "react";

function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | ContentDetector.AI</title>
        <meta name="description" content="Contact ContentDetector.AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ContentBlock
          theme="primary"
          titleFormat="h1"
          titleFontSize={["32px"]}
          pb={1}
          title={"Contact Us"}
        />
        <ContentBlock
          theme="primary"
          titleFormat="h2"
          titleFontSize={["22px"]}
          titleLineHeight={"42px"}
          py={1}
          pb={10}
          title={"Welcome to Paraphrasingtool.app"}
          content={[
            "We value your opinion and please provide your feedback, suggestions, and opinions",
            "Write to us at hello@paraphrasingtool.app",
            <b>Address</b>,
            "2925, Manor Bridge Dr Alpharetta, GA 30004",
          ]}
        />
      </main>
    </>
  );
}

export default Contact;
