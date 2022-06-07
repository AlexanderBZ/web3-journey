import { CssBaseline } from "@mui/material";
import React from "react";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <main>
        <CssBaseline>{children}</CssBaseline>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
