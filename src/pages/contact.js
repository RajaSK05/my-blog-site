import React from "react"
import { useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import fbIcon from "../images/svgs/facebook.svg"
import instaIcon from "../images/svgs/instagram.svg"
import linkedinIcon from "../images/svgs/linkedin.svg"
import twitterIcon from "../images/svgs/twitter.svg"

const ContactPage = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "contact.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  let socialLinks = {
    fb :"https://www.facebook.com/raja.sk05",
    insta: "https://www.instagram.com/raja_s_k",
    twitter: "https://www.twitter.com/RajaSK05",
    linkedin: "https://www.linkedin.com/in/raja-sk-05",
    email: "mailto:krishnanraja05@gmail.com",
  }

  return (
    <Layout pageTitle="Contact Me" imageFluid={image.sharp.fluid}>
      <section style={{ height: `100%` }}>
        <div className="container text-center">
          <h1 style={{marginTop: `0`}}>Wanna get in touch?</h1>
          <hr className="small-hr" />
          <div className="contact-body">
            <div className="contact-item link">
              <a className="contact-icon" href={socialLinks.fb} target="blank">
                <img src={fbIcon} alt="Facebook" />
                <p>Facebook</p>
              </a>
            </div>
            <div className="contact-item link">
              <a
                className="contact-icon"
                href={socialLinks.insta}
                target="blank"
              >
                <img src={instaIcon} alt="Instagram" />
                <p>Instagram</p>
              </a>
            </div>
            <div className="contact-item link">
              <a
                className="contact-icon"
                href={socialLinks.linkedin}
                target="blank"
              >
                <img src={linkedinIcon} alt="LinkedIn" />
                <p>LinkedIn</p>
              </a>
            </div>
            <div className="contact-item link">
              <a
                className="contact-icon"
                href={socialLinks.twitter}
                target="blank"
              >
                <img src={twitterIcon} alt="Twitter" />
                <p>Twitter</p>
              </a>
            </div>
          </div>
          <p style={{margin: `0 0 3rem 0`}}>
            You can contact me in any of the above mentioned social medias. Or
            you can mail me at &nbsp;
            <a href={socialLinks.email} className="link">krishnanraja05@gmail.com</a>
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage
