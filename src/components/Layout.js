import React from "react";
import logo from "../assets/png/logo.png";
import { menu } from "@/data/menu";
import Header from "./header/Header";
import Footer from "./footer/Footer";
function Layout({ children }) {
  return (
    <>
      <Header logo={logo} menu={menu} />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
