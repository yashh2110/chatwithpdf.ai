import React from "react";

import Head from "next/head";
import ContentBlock from "@/components/content-block/ContentBlock";
import Header from "@/components/header/Header";

function About() {
  return (
    <>
      <Head>
        <title>About Us | ParaphrasingTool.APP</title>
        <meta name="description" content="About Us of ParaphrasingTool.APP" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ContentBlock
          theme="secondary"
          titleFormat="h1"
          titleFontSize={["32px"]}
          title={"About Us"}
          content={[
            "Welcome to our Paraphrasingtool.app, your go-to platform for free sentence and paragraph paraphrasing. Our mission is to provide a convenient and efficient tool that helps you transform your content while maintaining its originality. Whether you're a student, a professional, or a content creator, our paraphrasing service is designed to enhance your writing and ensure your message is delivered in a unique and authentic way.",
            "Our dedicated team of language enthusiasts and experts has developed an advanced algorithm that intelligently restructures sentences and paragraphs, preserving the essence of your original text. We are committed to delivering accurate and reliable results, enabling you to express your ideas with clarity and creativity. With our user-friendly interface, you can easily access our paraphrasing tool and transform your content in just a few clicks.",
            "We believe in making quality paraphrasing accessible to everyone. That's why our services are offered completely free of charge. We are passionate about empowering individuals to create original and compelling content, regardless of their financial resources. Your privacy is also a top priority for us, and we ensure that all the content you paraphrase on our website remains secure and confidential.",
            "Thank you for choosing our website as your trusted resource for paraphrasing sentences and paragraphs. We are dedicated to continually improving our tool and providing you with an exceptional paraphrasing experience. If you have any questions or feedback, please don't hesitate to contact us. Together, let's unlock your writing potential and communicate effectively.",
            "Team Paraphrasingtool.app",
          ]}
        />
      </main>
    </>
  );
}

export default About;
