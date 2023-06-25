import React from "react";
import styles from "@/styles/Home.module.css";
import {
  CodeBlock,
  CopyBlock,
  dracula,
  googlecode,
  solarizedLight,
} from "react-code-blocks";
import Head from "next/head";
import ContentBlock from "@/components/content-block/ContentBlock";
function privacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | ParaphrasingTool.APP</title>
        <meta
          name="description"
          content="Privacy policy of ParaphrasingTool.APP"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <ContentBlock
          theme="primary"
          titleFormat="h1"
          titleFontSize={["32px"]}
          title={"Privacy Policy"}
          pb={1}
          content={[
            <>
              This Privacy Policy describes how your personal information is
              collected, used, and shared when you visit or make a purchase from{" "}
              <a
                className={styles.link_style}
                href="https://paraphrasingtool.app"
              >
                https://paraphrasingtool.app
              </a>{" "}
              (the “Site”).
            </>,
          ]}
        />
        <ContentBlock
          theme="primary"
          titleFormat="h2"
          titleFontSize={["22px"]}
          py={1}
          titleLineHeight={"42px"}
          title={"PERSONAL INFORMATION WE COLLECT"}
          content={[
            "When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as “Device Information.",
          ]}
        />
        <ContentBlock
          theme="primary"
          titleFormat="h2"
          titleFontSize={["20px"]}
          py={1}
          titleLineHeight={"42px"}
          title={
            "We collect Device Information using the following technologies:"
          }
          content={[
            <>
              <CodeBlock
                language="html"
                text={`- “Cookies” are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit http://www.allaboutcookies.org.
- “Log files” track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.
- “Web beacons,” “tags,” and “pixels” are electronic files used to record information about how you browse the Site.
`}
                codeBlock
                theme={googlecode}
                showLineNumbers={false}
              />
            </>,
            "Additionally when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card numbers), email address, and phone number. We refer to this information as “Order Information.”",
            "When we talk about “Personal Information” in this Privacy Policy, we are talking both about Device Information and Order Information.",
          ]}
        />
        <ContentBlock
          theme="primary"
          titleFormat="h2"
          titleFontSize={["22px"]}
          py={1}
          titleLineHeight={"42px"}
          title={"HOW DO WE USE YOUR PERSONAL INFORMATION?"}
          content={[
            "We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). Additionally, we use this Order Information to: Communicate with you; Screen our orders for potential risk or fraud; and When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.",
            "We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).",
          ]}
        />
        <ContentBlock
          theme="primary"
          titleFormat="h2"
          titleFontSize={["22px"]}
          py={1}
          titleLineHeight={"42px"}
          title={"HOW DO WE USE YOUR PERSONAL INFORMATION?"}
          content={[
            <>
              We share your Personal Information with third parties to help us
              use your Personal Information, as described above. We also use
              Google Analytics to help us understand how our customers use the
              Site–you can read more about how Google uses your Personal
              Information here:{" "}
              <a
                className={styles.link_style}
                href="https://www.google.com/intl/en/policies/privacy/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.google.com/intl/en/policies/privacy/
              </a>
              . You can also opt-out of Google Analytics here:{" "}
              <a
                className={styles.link_style}
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noreferrer"
              >
                https://tools.google.com/dlpage/gaoptout
              </a>
              .
            </>,
            "Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or another lawful request for information we receive, or to otherwise protect our rights.",
            <>
              BEHAVIOURAL ADVERTISING As described above, we use your Personal
              Information to provide you with targeted advertisements or
              marketing communications we believe may be of interest to you. For
              more information about how targeted advertising works, you can
              visit the Network Advertising Initiative’s (“NAI”) educational
              page at{" "}
              <a
                className={styles.link_style}
                href="http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work"
                target="_blank"
                rel="noreferrer"
              >
                http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work
              </a>
              .
            </>,
          ]}
        />
        <ContentBlock
          theme="primary"
          titleFormat="h2"
          titleFontSize={["20px"]}
          py={1}
          titleLineHeight={"38px"}
          title={"You can opt-out of targeted advertising by:"}
          content={[
            <>
              FACEBOOK –{" "}
              <a
                className={styles.link_style}
                href="https://www.facebook.com/settings/?tab=ads"
                target="_blank"
                rel="noreferrer"
              >
                https://www.facebook.com/settings/?tab=ads
              </a>
            </>,
            <>
              {" "}
              GOOGLE –{" "}
              <a
                className={styles.link_style}
                href="https://www.google.com/settings/ads/anonymous"
                target="_blank"
                rel="noreferrer"
              >
                https://www.google.com/settings/ads/anonymous
              </a>
            </>,
            <>
              {" "}
              BING –{" "}
              <a
                className={styles.link_style}
                href="https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads"
                target="_blank"
                rel="noreferrer"
              >
                https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads
              </a>
            </>,
            <>
              Additionally, you can opt out of some of these services by
              visiting the Digital Advertising Alliance’s opt-out portal at:{" "}
              <a
                className={styles.link_style}
                href="http://optout.aboutads.info/"
                target="_blank"
                rel="noreferrer"
              >
                http://optout.aboutads.info/
              </a>
              .
            </>,
          ]}
        />
        <ContentBlock
          theme="primary"
          titleFormat="h2"
          titleFontSize={["22px"]}
          py={1}
          titleLineHeight={"42px"}
          title={"DO NOT TRACK"}
          content={[
            "Please note that we do not alter our Site’s data collection and use practices when we see a Do Not Track signal from your browser.",
          ]}
        />
        <ContentBlock
          theme="primary"
          titleFormat="h2"
          titleFontSize={["22px"]}
          py={1}
          titleLineHeight={"42px"}
          title={"YOUR RIGHTS"}
          content={[
            "If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.",
            "Additionally, if you are a European resident we note that we are processing your information in order to fulfill contracts we might have with you (for example if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above. Additionally, please note that your information will be transferred outside of Europe, including to Canada and the United States.",
          ]}
        />
        <ContentBlock
          theme="primary"
          titleFormat="h2"
          titleFontSize={["22px"]}
          py={1}
          titleLineHeight={"42px"}
          title={"DATA RETENTION"}
          content={[
            "When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.",
          ]}
        />
        <ContentBlock
          theme="primary"
          titleFormat="h2"
          titleFontSize={["22px"]}
          py={1}
          titleLineHeight={"42px"}
          title={"CHANGES"}
          content={[
            "We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.",
          ]}
        />
        <ContentBlock
          theme="primary"
          titleFormat="h2"
          titleFontSize={["22px"]}
          py={1}
          titleLineHeight={"42px"}
          title={"CONTACT US"}
          content={[
            "For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at hello@paraphrasingtool.app ",
          ]}
        />
      </>
    </>
  );
}

export default privacyPolicy;
