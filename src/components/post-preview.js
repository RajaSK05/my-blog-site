import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

const PostPreview = ({ post }) => (
  <article className="post-preview">
    <Link to={`/blogs/${post.slug}`}>
      <Image
        style={{ height: `200px` }}
        imgStyle={{ borderRadius: `10px 10px 0 0` }}
        fluid={post.image.sharp.fluid}
      />
      <div className="content">
        <div>
          <h3 style={{marginBottom: `0.5rem`}}>{post.title}</h3>
          <hr className="small-hr" />
          <p>{post.excerpt}</p>
        </div>
        <span className="link">Read {post.timeToRead} min(s) more &rarr;</span>
      </div>
    </Link>
  </article>
)

export default PostPreview
