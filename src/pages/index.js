import React from "react"
import { useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import PostsInIndex from "../components/posts-in-index"

const IndexPage = () => {
  const { image, blogsImage } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "about.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      blogsImage: file(relativePath: { eq: "main-bg.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Layout pageTitle="About Me" imageFluid={image.sharp.fluid}>
      <SEO title="Home" />
      <div className="container">
        <p style={{ fontSize: `20px` }}>
          Hi... I'm <b>Raja SK</b>, working as a front-end developer at Zoho
          Corporation, Chennai.
          <br />
          <br />
          Nothing to say much... Let's get into work...
        </p>
      </div>
      <Hero
        pageTitle="Blogs"
        imageFluid={blogsImage.sharp.fluid}
        waveBottom={true}
      />
      <PostsInIndex />
    </Layout>
  )
}
export default IndexPage
