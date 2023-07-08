import "@/styles/globals.css";
import { theme } from "@/themes/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Layout from "@/components/Layout";
import { Provider } from "react-redux";
import store, { persistedStore } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/page-navigation/lib/styles/index.css";
import "@react-pdf-viewer/zoom/lib/styles/index.css";
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
      <Provider store={store}>
        <PersistGate load={null} persistor={persistedStore}>
          <ChakraProvider theme={theme}>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
              <Component {...pageProps} />
              <Toaster
                toastOptions={{ style: { fontFamily: "Inter" } }}
                position="bottom-center"
              />
            </Worker>
          </ChakraProvider>
        </PersistGate>
      </Provider>
    </>
  );
}
