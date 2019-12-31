import React from "react"
import "../styles/footer.scss"
import waveBottom from "../images/wave-bottom.svg"

const Footer = ({ siteTitle }) => (
  <footer>
    <img className="wave-bottom" src={waveBottom} alt="wave-bottom" />

    <div className="footer-content">
      <p>Raja SK</p>
      <div>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org" style={{textDecoration: `underline`}}>Gatsby</a>
      </div>
    </div>
  </footer>
)

export default Footer
