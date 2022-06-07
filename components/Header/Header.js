import Head from "next/head";
import React from "react";

const Header = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

Header.defaultProps = {
  title: "Web3 Journey",
};

export default Header;
