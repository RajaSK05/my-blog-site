import React from "react"
import usePosts from "../hooks/use-posts"
import PostPreview from "./post-preview"

const PostsInIndex = () => {
  const posts = usePosts()
  return (
    <div className="post-preview-container">
      {posts.map(post => (
        <PostPreview key={post.id} post={post} />
      ))}
    </div>
  )
}

export default PostsInIndex
