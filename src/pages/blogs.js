import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/blogs.scss"
import usePosts from "../hooks/use-posts"
import PostPreview from "../components/post-preview"

const BlogPage = () => {
  const posts = usePosts()
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "main-bg.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Layout pageTitle="Blogs" imageFluid={image.sharp.fluid}>
      <SEO title="Blogs" />
      <div className="post-preview-container container">
        {posts.map(post => (
          <PostPreview key={post.id} post={post} />
        ))}
      </div>
    </Layout>
  )
}

export default BlogPage
