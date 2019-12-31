import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/header.scss"
import Hero from "./hero"

const Header = ({ siteTitle, pageTitle, imageFluid }) => {
  
  return (
    <>
      <nav>
        <Link to="/" className="heading">
          Raja SK
        </Link>
        <div className="nav-group">
          <Link to="/blogs" className="nav-link" activeClassName="active">
            Blogs
          </Link>
          <Link to="/contact" className="nav-link" activeClassName="active">
            Contact
          </Link>
        </div>
      </nav>
      <Hero pageTitle={pageTitle} imageFluid={imageFluid}/>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
