import "@/styles/globals.css";
import { theme } from "@/themes/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Layout from "@/components/Layout";

const inter = Inter({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-rubik: ${inter.style.fontFamily};
          }
        `}
      </style>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
        <Toaster
          toastOptions={{ style: { fontFamily: "Inter" } }}
          position="bottom-center"
        />
      </ChakraProvider>
    </>
  );
}
