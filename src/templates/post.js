import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const PostTemplate = ({ data: { markdownRemark: post } }) => (
  <Layout
    imageFluid={post.frontmatter.image.sharp.fluid}
    pageTitle={
      <>
        <h1>{post.frontmatter.title}</h1>
        <p className="time-to-read">{post.timeToRead} min(s) read</p>
      </>
    }
  >
    <div className="container" dangerouslySetInnerHTML={{ __html: post.html }} />
  </Layout>
)

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        date
        image {
          sharp: childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      timeToRead
      html
    }
  }
`

export default PostTemplate
