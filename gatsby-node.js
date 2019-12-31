/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges{
          node{
            frontmatter{
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('Posts creation failed', result.errors);
  }

  const posts = result.data.allMarkdownRemark.edges;

  posts.forEach(({ node: post }) => {
    actions.createPage({
      path: `/blogs/${post.frontmatter.slug}`,
      component: require.resolve('./src/templates/post.js'),
      context: {
        slug: post.frontmatter.slug
      }
    })
  });

  actions.createRedirect({
    fromPath: `/`,
    toPath: `/blogs`,
    redirectInBrowser: true,
    isPermanent: true,
  })
}
