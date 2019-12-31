/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
// import "../styles/layout.css"
import "../styles/common.scss"
import Footer from "./footer"
const Layout = ({ children, pageTitle, imageFluid, imageName }) => {
  return (
    <>
      <Header
        pageTitle={pageTitle}
        imageFluid={imageFluid}
        imageName={imageName}
      />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
