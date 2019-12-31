import { useStaticQuery, graphql } from "gatsby"

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              author
              slug
              date(formatString: "DD MMMM, YYYY")
              image {
                sharp: childImageSharp {
                  fluid(
                    maxWidth: 350
                    maxHeight: 200
                  ) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            timeToRead
            excerpt
          }
        }
      }
    }
  `)

  return data.allMarkdownRemark.edges.map(({ node }) => ({
    id: node.id,
    title: node.frontmatter.title,
    author: node.frontmatter.author,
    slug: node.frontmatter.slug,
    date: node.frontmatter.date,
    image: node.frontmatter.image,
    timeToRead: node.timeToRead,
    excerpt: node.excerpt
  }));
}

export default usePosts
