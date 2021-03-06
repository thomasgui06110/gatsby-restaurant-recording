/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";

//import "./layout.css";
import { createGlobalStyle } from "styled-components";
import Navbar from "./globals/navbar/Navbar";
import Footer from "./globals/Footer";
//import "./bootstrap.min.css";

//import "../sass/layout.scss";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;
