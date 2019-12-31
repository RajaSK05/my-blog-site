import React from "react"
import WaveTop from "../images/wave-top.svg"
import WaveBottom from "../images/wave-bottom.svg"
import BackgroundImage from "gatsby-background-image"

const Hero = ({ pageTitle, imageFluid, waveBottom }) => (
  <BackgroundImage
    Tag="section"
    style={{ backgroundAttachment: `fixed` }}
    fluid={imageFluid}
  >
    <div className="hero-text-box">
      {waveBottom && (
        <img className="wave-bottom" src={WaveBottom} alt="wave-bottom" />
      )}
      <div className="hero-content">{pageTitle}</div>
      <img className="wave-top" src={WaveTop} alt="wave-top" />
    </div>
  </BackgroundImage>
)

export default Hero
