import Link from "next/link";
import React from "react";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import { toast } from "react-hot-toast";
import InfoIcon from "@mui/icons-material/Info";
import { TwitterIcon, TwitterShareButton } from "next-share";
import { Button } from "@chakra-ui/react";

function Footer() {
  const addBookmark = (
    title = "ContentDetector.AI",
    url = "https://contentdetector.ai"
  ) => {
    if (window.sidebar && window.sidebar.addPanel) {
      // Firefox
      window.sidebar.addPanel(title, url, "");
    } else if (window.external && window.external.AddFavorite) {
      // Internet Explorer
      window.external.AddFavorite(url, title);
    } else {
      // Other browsers
      toast.success(
        `Press ${
          navigator.userAgent.toLowerCase().indexOf("mac") != -1
            ? "Command/Cmd"
            : "CTRL"
        }+D to bookmark this page.`,
        {
          duration: 5000,
          icon: <InfoIcon style={{ color: "var(--btn-bg-primary)" }} />,
        }
      );
    }
  };
  return (
    <div className="footer_container">
      <div className="footer_layout">
        <div className="footer_menu">
          <div className="footer_sub_container_1">
            <p className="footer_heading">
              <b>PARAPHRASINGTOOL.APP</b>
            </p>
            <span className="footer_sub_head">
              Go to website for free sentence and paragraph paraphrasing.
            </span>
            {/* <div className="footer_social_share">
              <p className="footer_heading">
                <b>Like our Paraphrasing tool? Save it, share it!</b>
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  paddingTop: "10px",
                }}
              >
                <Button
                  className="social_btn"
                  style={{
                    height: "47px !important",
                    // marginTop: "15px",
                    boxShadow: "1px 1px 6px var(--box-shadow)",
                    padding: "10px 20px",
                    fontSize: "16px",
                    fontWeight: "500",
                    textTransform: "capitalize !important",
                    backgroundColor: "var(--white)",
                    textAlign: "center !important",
                    borderRadius: "10px !important",
                  }}
                  onClick={addBookmark}
                >
                  <span
                    style={{
                      margin: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textTransform: "capitalize",
                      color: "#146AE2 !important",
                    }}
                  >
                    <TurnedInNotIcon
                      style={{
                        fontSize: "22px",
                        marginRight: "5px",
                      }}
                    />
                    Bookmark page
                  </span>
                </Button>
                <TwitterShareButton
                  title={
                    "🔍 https://contentdetector.ai to detect AI Content 👉 #AIContentDetector @CDetector_AI"
                  }
                >
                  <div className="social_btn">
                    <TwitterIcon size={32} round />
                    <p style={{ color: "var(--white)" }}>Share Tweet</p>
                  </div>
                </TwitterShareButton>
              </div>
            </div> */}
            <div className="footer_social_share">
              <p className="footer_heading">
                <b>Contact Us</b>
              </p>
              <p className="footer_sub_head">Need help or have a question?</p>
              <p className="footer_sub_head">
                Contact us at: hello@paraphrasingtool.app
              </p>
            </div>
          </div>
          <div className="footer_sub_container_2">
            <p className="footer_heading">
              <b>Useful Links</b>
            </p>
            {/* <Link
              href="/contact/"
              target="_blank"
              rel="noreferrer"
              className="footer_menu_item footer_sub_head"
            >
              Contact
            </Link> */}
            <Link
              href="/about/"
              rel="noreferrer"
              className="footer_menu_item footer_sub_head"
            >
              About Us
            </Link>
            {/* <Link
              href="/articles/"
              target="_blank"
              rel="noreferrer"
              className="footer_menu_item footer_sub_head"
            >
              Articles
            </Link> */}
            <Link
              href="/terms/"
              target="_blank"
              rel="noreferrer"
              className="footer_menu_item footer_sub_head"
            >
              Terms
            </Link>
            <Link
              href="/privacy-policy/"
              target="_blank"
              rel="noreferrer"
              className="footer_menu_item footer_sub_head"
            >
              Privacy Policy
            </Link>
            <Link
              href="/contact/"
              target="_blank"
              rel="noreferrer"
              className="footer_menu_item footer_sub_head"
            >
              Contact
            </Link>
            <Link
              href="/cookie-policy/"
              target="_blank"
              rel="noreferrer"
              className="footer_menu_item footer_sub_head"
            >
              Cookie Policy
            </Link>
          </div>
          {/* <div className="footer_sub_container_2">
            <p className="footer_heading">
              <b>Tools</b>
            </p>
            <Link href="/" className="footer_menu_item footer_sub_head">
              Content Detector
            </Link>
            <Link
              href="/language-detector/"
              target="_blank"
              rel="noreferrer"
              className="footer_menu_item footer_sub_head"
            >
              Language Detector
            </Link>
            <Link
              href="articles/best-ai-tools-for-business"
              // target="_blank"
              rel="noreferrer"
              className="footer_menu_item footer_sub_head"
            >
              AI Tools
            </Link>
            <Link
              href="/bard-detector/"
              // target="_blank"
              rel="noreferrer"
              className="footer_menu_item footer_sub_head"
            >
              Bard Detector
            </Link>
            <Link
              href="/articles/chatgpt-statistics/"
              // target="_blank"
              rel="noreferrer"
              className="footer_menu_item footer_sub_head"
            >
              ChatGPT Statistics
            </Link>
            <Link
              href="/articles/google-bard-vs-chatgpt-statistics/"
              // target="_blank"
              rel="noreferrer"
              className="footer_menu_item footer_sub_head"
            >
              Google Bard vs ChatGPT Statics
            </Link>
            <Link
              href="/articles/google-bard-statistics/"
              // target="_blank"
              rel="noreferrer"
              className="footer_menu_item footer_sub_head"
            >
              Google Bard Statistics
            </Link>
          </div> */}
          {/* <div className="footer_sub_container_2">
            <p className="footer_heading">
              <b>Contact Us</b>
            </p>
            <p className="footer_sub_head">Need help or have a question?</p>
            <p className="footer_sub_head">
              Contact us at: hello@paraphrasingtool.app
            </p>
          </div> */}

          {/* <Link href="/" className="footer_menu_item">
            Home
          </Link>
          <Link
            href="/language-detector/"
            target="_blank"
            rel="noreferrer"
            className="footer_menu_item"
          >
            Language Detector
          </Link>
          <Link
            href="/articles/"
            target="_blank"
            rel="noreferrer"
            className="footer_menu_item"
          >
            Articles
          </Link>
          <Link
            href="/bard-detector/"
            target="_blank"
            rel="noreferrer"
            className="footer_menu_item"
          >
            Bard Detector
          </Link>
          <Link href="/about/" rel="noreferrer" className="footer_menu_item">
            About Us
          </Link>
          <Link
            href="/contact/"
            target="_blank"
            rel="noreferrer"
            className="footer_menu_item"
          >
            Contact
          </Link>
          <Link
            href="/privacy-policy/"
            target="_blank"
            rel="noreferrer"
            className="footer_menu_item"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms/"
            target="_blank"
            rel="noreferrer"
            className="footer_menu_item"
          >
            Terms
          </Link>
          <Link
            href="/cookie-policy/"
            target="_blank"
            rel="noreferrer"
            className="footer_menu_item"
          >
            Cookie Policy
          </Link> */}
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#0c0f12",
          paddingBottom: "6px",
        }}
      >
        <div className="footer_layout">
          <p className="copyrights">Copyright © 2023 Paraphrasingtool.app</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
