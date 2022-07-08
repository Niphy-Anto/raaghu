import React from "react";
import Navbar from "../components/Navbar";
import "../assets/css/main.css";
import Footer from "../components/Footer"
import Maincomp from "../components/Maincomp"
// import { useStaticQuery,graphql } from 'gatsby'

const Layout = ({pageTitle}) => {

  // const data = useStaticQuery(graphql`
  // query MyQuery {
  //   site {
  //     siteMetadata {
  //       title
  //     }
  //   }
  // }
  // `)

  return (
    <>
    {/* <title>{pageTitle} | {data.site.siteMetadata.title}</title> */}
      <Navbar />
      <Maincomp />
      <Footer />
    </>
  );
};

export default Layout;
